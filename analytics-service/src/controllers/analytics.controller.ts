import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError";
import { OrderServiceClient } from "../services/clients/order.service.client";
import { ProductServiceClient } from "../services/clients/product.service.client";
import { UserServiceClient } from "../services/clients/user.service.client";

// Initialize service clients
const orderServiceClient = new OrderServiceClient(
	process.env.ORDER_SERVICE_URL!,
);
const productServiceClient = new ProductServiceClient(
	process.env.PRODUCT_SERVICE_URL!,
);
const userServiceClient = new UserServiceClient(process.env.USER_SERVICE_URL!);

// Get sales analytics
export const getSalesAnalytics = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { period = "weekly", startDate, endDate } = req.query;

		// Parse dates or use defaults
		const parsedStartDate = startDate
			? new Date(startDate as string)
			: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
		const parsedEndDate = endDate ? new Date(endDate as string) : new Date();

		// Validate dates
		if (parsedStartDate > parsedEndDate) {
			return next(new AppError("Start date cannot be after end date", 400));
		}

		// Fetch orders from order service
		const orders = await orderServiceClient.getOrders({
			startDate: parsedStartDate,
			endDate: parsedEndDate,
			statuses: ["PAID", "SHIPPED", "DELIVERED"],
			includeProducts: true,
		});

		// Calculate total sales
		const totalSales = orders.reduce(
			(sum, order) => sum + Number(order.totalAmount),
			0,
		);

		const totalOrders = orders.length;
		const avgOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

		// Group data by time period
		const salesByPeriod: Record<
			string,
			{ date: string; sales: number; orders: number }
		> = {};

		orders.forEach((order) => {
			let periodKey: string;

			switch (period) {
				case "daily":
					periodKey = order.createdAt.split("T")[0];
					break;
				case "weekly":
					const date = new Date(order.createdAt);
					const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
					const pastDaysOfYear =
						(date.getTime() - firstDayOfYear.getTime()) / 86400000;
					const weekNumber = Math.ceil(
						(pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7,
					);
					periodKey = `${date.getFullYear()}-W${weekNumber}`;
					break;
				case "monthly":
					const dateObj = new Date(order.createdAt);
					periodKey = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}`;
					break;
				case "yearly":
					periodKey = `${new Date(order.createdAt).getFullYear()}`;
					break;
				default:
					periodKey = order.createdAt.split("T")[0];
			}

			if (!salesByPeriod[periodKey]) {
				salesByPeriod[periodKey] = {
					date: periodKey,
					sales: 0,
					orders: 0,
				};
			}

			salesByPeriod[periodKey].sales += Number(order.totalAmount);
			salesByPeriod[periodKey].orders += 1;
		});

		const salesTrend = Object.values(salesByPeriod).sort((a, b) =>
			a.date.localeCompare(b.date),
		);

		// Calculate product sales
		const productSales: Record<
			string,
			{ id: string; name: string; quantity: number; revenue: number }
		> = {};

		orders.forEach((order) => {
			order.items.forEach((item) => {
				const productId = item.product!.id;
				if (!productSales[productId]) {
					productSales[productId] = {
						id: productId,
						name: item.product!.name,
						quantity: 0,
						revenue: 0,
					};
				}
				productSales[productId].quantity += item.quantity;
				productSales[productId].revenue += Number(item.price) * item.quantity;
			});
		});

		const topProducts = Object.values(productSales)
			.sort((a, b) => b.revenue - a.revenue)
			.slice(0, 10);

		// Calculate category sales
		const categorySales: Record<
			string,
			{ id: string; name: string; quantity: number; revenue: number }
		> = {};

		orders.forEach((order) => {
			order.items.forEach((item) => {
				const categoryId = item.product!.category!.id;
				const categoryName = item.product!.category!.name;
				if (!categorySales[categoryId]) {
					categorySales[categoryId] = {
						id: categoryId,
						name: categoryName,
						quantity: 0,
						revenue: 0,
					};
				}
				categorySales[categoryId].quantity += item.quantity;
				categorySales[categoryId].revenue += Number(item.price) * item.quantity;
			});
		});

		const topCategories = Object.values(categorySales)
			.sort((a, b) => b.revenue - a.revenue)
			.slice(0, 5);

		res.status(200).json({
			status: "success",
			data: {
				overview: {
					totalSales,
					totalOrders,
					avgOrderValue,
					startDate: parsedStartDate,
					endDate: parsedEndDate,
				},
				salesTrend,
				topProducts,
				topCategories,
			},
		});
	} catch (error) {
		next(error);
	}
};

// Get product analytics
export const getProductAnalytics = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { startDate, endDate } = req.query;

		const parsedStartDate = startDate
			? new Date(startDate as string)
			: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
		const parsedEndDate = endDate ? new Date(endDate as string) : new Date();

		if (parsedStartDate > parsedEndDate) {
			return next(new AppError("Start date cannot be after end date", 400));
		}

		// Fetch products from product service with their analytics
		const products = await productServiceClient.getProductsWithAnalytics({
			startDate: parsedStartDate,
			endDate: parsedEndDate,
		});

		// Fetch order items for these products from order service
		const productIds = products.map((p) => p.id);
		const orderItems = await orderServiceClient.getOrderItemsByProducts({
			productIds,
			startDate: parsedStartDate,
			endDate: parsedEndDate,
			orderStatuses: ["PAID", "SHIPPED", "DELIVERED"],
		});

		// Fetch reviews from product service
		const reviews = await productServiceClient.getReviewsByProducts({
			productIds,
			startDate: parsedStartDate,
			endDate: parsedEndDate,
		});

		// Calculate product metrics
		const productMetrics = products.map((product) => {
			const productOrderItems = orderItems.filter(
				(item) => item.productId === product.id,
			);
			const quantitySold = productOrderItems.reduce(
				(sum, item) => sum + item.quantity,
				0,
			);
			const revenue = productOrderItems.reduce(
				(sum, item) => sum + Number(item.price) * item.quantity,
				0,
			);
			const productReviews = reviews.filter(
				(review) => review.productId === product.id,
			);
			const reviewCount = productReviews.length;
			const avgRating =
				productReviews.reduce((sum, review) => sum + review.rating, 0) /
				(reviewCount || 1);

			return {
				id: product.id,
				name: product.name,
				category: product.category.name,
				stock: product.stock,
				lowStockAlert: product.lowStockAlert,
				quantitySold,
				revenue,
				reviewCount,
				avgRating,
				isLowStock: product.stock <= product.lowStockAlert,
			};
		});

		const sortedProducts = productMetrics.sort((a, b) => b.revenue - a.revenue);

		const categoryMetrics: Record<
			string,
			{
				name: string;
				quantitySold: number;
				revenue: number;
				productCount: number;
			}
		> = {};

		productMetrics.forEach((product) => {
			const categoryName = product.category;
			if (!categoryMetrics[categoryName]) {
				categoryMetrics[categoryName] = {
					name: categoryName,
					quantitySold: 0,
					revenue: 0,
					productCount: 0,
				};
			}
			categoryMetrics[categoryName].quantitySold += product.quantitySold;
			categoryMetrics[categoryName].revenue += product.revenue;
			categoryMetrics[categoryName].productCount += 1;
		});

		const sortedCategories = Object.values(categoryMetrics).sort(
			(a, b) => b.revenue - a.revenue,
		);
		const lowStockProducts = productMetrics.filter(
			(product) => product.isLowStock,
		);
		const outOfStockProducts = productMetrics.filter(
			(product) => product.stock === 0,
		);

		res.status(200).json({
			status: "success",
			data: {
				products: sortedProducts,
				categories: sortedCategories,
				lowStockProducts,
				outOfStockProducts,
				totalProducts: products.length,
				totalSold: productMetrics.reduce(
					(sum, product) => sum + product.quantitySold,
					0,
				),
				totalRevenue: productMetrics.reduce(
					(sum, product) => sum + product.revenue,
					0,
				),
			},
		});
	} catch (error) {
		next(error);
	}
};

// Get customer analytics
export const getCustomerAnalytics = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { startDate, endDate } = req.query;

		const parsedStartDate = startDate
			? new Date(startDate as string)
			: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
		const parsedEndDate = endDate ? new Date(endDate as string) : new Date();

		if (parsedStartDate > parsedEndDate) {
			return next(new AppError("Start date cannot be after end date", 400));
		}

		// Fetch customers from user service
		const customers = await userServiceClient.getCustomers({
			startDate: parsedStartDate,
			endDate: parsedEndDate,
		});

		// Fetch orders for these customers from order service
		const customerIds = customers.map((c) => c.id);
		const orders = await orderServiceClient.getOrdersByCustomers({
			customerIds,
			startDate: parsedStartDate,
			endDate: parsedEndDate,
			statuses: ["PAID", "SHIPPED", "DELIVERED"],
		});

		// Fetch reviews from product service
		const reviews = await productServiceClient.getReviewsByUsers({
			userIds: customerIds,
			startDate: parsedStartDate,
			endDate: parsedEndDate,
		});

		// Get new users count
		const newUsers = customers.filter(
			(customer) =>
				new Date(customer.createdAt) >= parsedStartDate &&
				new Date(customer.createdAt) <= parsedEndDate,
		).length;

		// Calculate user metrics
		const userMetrics = customers.map((customer) => {
			const customerOrders = orders.filter(
				(order) => order.userId === customer.id,
			);
			const orderCount = customerOrders.length;
			const totalSpent = customerOrders.reduce(
				(sum, order) => sum + Number(order.totalAmount),
				0,
			);
			const customerReviews = reviews.filter(
				(review) => review.userId === customer.id,
			);
			const reviewCount = customerReviews.length;
			const avgOrderValue = orderCount > 0 ? totalSpent / orderCount : 0;

			return {
				id: customer.id,
				email: customer.email,
				firstName: customer.firstName,
				lastName: customer.lastName,
				createdAt: customer.createdAt,
				orderCount,
				totalSpent,
				reviewCount,
				avgOrderValue,
			};
		});

		const sortedUsers = userMetrics.sort((a, b) => b.totalSpent - a.totalSpent);
		const topCustomers = sortedUsers.slice(0, 10);

		const segments = {
			newCustomers: userMetrics.filter(
				(user) =>
					user.orderCount === 1 && new Date(user.createdAt) >= parsedStartDate,
			).length,
			returningCustomers: userMetrics.filter((user) => user.orderCount > 1)
				.length,
			inactiveCustomers: userMetrics.filter((user) => user.orderCount === 0)
				.length,
		};

		const activeUsers = userMetrics.filter((user) => user.orderCount > 0);
		const avgOrdersPerCustomer =
			activeUsers.length > 0
				? activeUsers.reduce((sum, user) => sum + user.orderCount, 0) /
					activeUsers.length
				: 0;
		const avgSpendPerCustomer =
			activeUsers.length > 0
				? activeUsers.reduce((sum, user) => sum + user.totalSpent, 0) /
					activeUsers.length
				: 0;

		res.status(200).json({
			status: "success",
			data: {
				overview: {
					totalCustomers: customers.length,
					newCustomers: newUsers,
					activeCustomers: activeUsers.length,
					avgOrdersPerCustomer,
					avgSpendPerCustomer,
				},
				segments,
				topCustomers,
			},
		});
	} catch (error) {
		next(error);
	}
};

// Get dashboard overview
export const getDashboardOverview = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const today = new Date();
		today.setHours(23, 59, 59, 999);
		const thirtyDaysAgo = new Date(today);
		thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
		thirtyDaysAgo.setHours(0, 0, 0, 0);

		const sixtyDaysAgo = new Date(thirtyDaysAgo);
		sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 30);

		// Fetch current period metrics from various services
		const [
			currentPeriodOrders,
			currentPeriodUsers,
			currentPeriodRevenue,
			totalProducts,
			lowStockProducts,
			pendingOrders,
		] = await Promise.all([
			orderServiceClient.countOrders({
				startDate: thirtyDaysAgo,
				endDate: today,
				statuses: ["PAID", "SHIPPED", "DELIVERED"],
			}),
			userServiceClient.countNewUsers({
				startDate: thirtyDaysAgo,
				endDate: today,
				role: "CUSTOMER",
			}),
			orderServiceClient.getTotalRevenue({
				startDate: thirtyDaysAgo,
				endDate: today,
				statuses: ["PAID", "SHIPPED", "DELIVERED"],
			}),
			productServiceClient.countProducts(),
			productServiceClient.countLowStockProducts(),
			orderServiceClient.countOrders({
				statuses: ["PENDING"],
			}),
		]);

		// Fetch previous period metrics
		const [previousPeriodOrders, previousPeriodUsers, previousPeriodRevenue] =
			await Promise.all([
				orderServiceClient.countOrders({
					startDate: sixtyDaysAgo,
					endDate: thirtyDaysAgo,
					statuses: ["PAID", "SHIPPED", "DELIVERED"],
				}),
				userServiceClient.countNewUsers({
					startDate: sixtyDaysAgo,
					endDate: thirtyDaysAgo,
					role: "CUSTOMER",
				}),
				orderServiceClient.getTotalRevenue({
					startDate: sixtyDaysAgo,
					endDate: thirtyDaysAgo,
					statuses: ["PAID", "SHIPPED", "DELIVERED"],
				}),
			]);

		const calculatePercentChange = (current: number, previous: number) => {
			if (previous === 0) return current > 0 ? 100 : 0;
			return ((current - previous) / previous) * 100;
		};

		const orderChange = calculatePercentChange(
			currentPeriodOrders,
			previousPeriodOrders,
		);
		const userChange = calculatePercentChange(
			currentPeriodUsers,
			previousPeriodUsers,
		);
		const revenueChange = calculatePercentChange(
			currentPeriodRevenue,
			previousPeriodRevenue,
		);

		// Fetch recent orders
		const recentOrders = await orderServiceClient.getRecentOrders(5);

		// Fetch top products
		const topProducts = await productServiceClient.getTopProducts(5);

		// Get sales by day for last 7 days
		const last7Days = Array.from({ length: 7 }, (_, i) => {
			const date = new Date(today);
			date.setDate(date.getDate() - i);
			return date.toISOString().split("T")[0];
		}).reverse();

		const salesByDay = await Promise.all(
			last7Days.map(async (day) => {
				const startOfDay = new Date(`${day}T00:00:00.000Z`);
				const endOfDay = new Date(`${day}T23:59:59.999Z`);

				const dailySales = await orderServiceClient.getDailySales({
					startDate: startOfDay,
					endDate: endOfDay,
					statuses: ["PAID", "SHIPPED", "DELIVERED"],
				});

				return {
					date: day,
					sales: dailySales.total,
					orders: dailySales.count,
				};
			}),
		);

		res.status(200).json({
			status: "success",
			data: {
				kpis: {
					orders: {
						value: currentPeriodOrders,
						change: orderChange,
					},
					revenue: {
						value: currentPeriodRevenue,
						change: revenueChange,
					},
					users: {
						value: currentPeriodUsers,
						change: userChange,
					},
					products: {
						total: totalProducts,
						lowStock: lowStockProducts,
					},
					pendingOrders,
				},
				recentOrders,
				topProducts,
				salesByDay,
			},
		});
	} catch (error) {
		next(error);
	}
};

// Get historical stats
export const getHistoricalStats = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const { days = "30" } = req.query;
		const daysCount = Number.parseInt(days as string, 10) || 30;

		const startDate = new Date();
		startDate.setDate(startDate.getDate() - daysCount);
		startDate.setHours(0, 0, 0, 0);

		const userStats = await userServiceClient.getUserStats({
			startDate,
			days: daysCount,
		});

		const orderStats = await orderServiceClient.getOrderStats({
			startDate,
			days: daysCount,
		});

		const stats = [...userStats, ...orderStats];

		res.status(200).json({
			status: "success",
			data: {
				stats,
				totalDays: stats.length,
				requestedDays: daysCount,
			},
		});
	} catch (error) {
		next(error);
	}
};
