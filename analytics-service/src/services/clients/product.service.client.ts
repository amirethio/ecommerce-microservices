import axios, { AxiosInstance } from "axios";

interface ProductCategory {
	id: string;
	name: string;
}

interface Product {
	id: string;
	name: string;
	slug: string;
	description: string;
	price: number;
	stock: number;
	lowStockAlert: number;
	categoryId: string;
	category: ProductCategory;
	createdAt: string;
	updatedAt: string;
}

interface Review {
	id: string;
	userId: string;
	productId: string;
	rating: number;
	comment: string;
	createdAt: string;
}

interface ProductWithAnalytics extends Product {
	orderItems?: Array<{
		quantity: number;
		price: number;
		createdAt: string;
	}>;
}

interface TopProduct {
	id: string;
	name: string;
	price: number;
	stock: number;
	category: {
		name: string;
	};
	orderCount: number;
}

export class ProductServiceClient {
	private client: AxiosInstance;

	constructor(baseURL: string) {
		this.client = axios.create({
			baseURL,
			timeout: 10000,
			headers: {
				"Content-Type": "application/json",
				"x-gateway-secret": process.env.GATEWAY_SECRET,
			},
		});
	}

	async getProductsWithAnalytics(params: {
		startDate: Date;
		endDate: Date;
	}): Promise<ProductWithAnalytics[]> {
		const response = await this.client.get("/analytics", {
			params: {
				startDate: params.startDate.toISOString(),
				endDate: params.endDate.toISOString(),
			},
		});
		return response.data;
	}

	async getReviewsByProducts(params: {
		productIds: string[];
		startDate?: Date;
		endDate?: Date;
	}): Promise<Review[]> {
		const response = await this.client.post("/reviews/by-products", {
			productIds: params.productIds,
			startDate: params.startDate?.toISOString(),
			endDate: params.endDate?.toISOString(),
		});
		return response.data;
	}

	async getReviewsByUsers(params: {
		userIds: string[];
		startDate?: Date;
		endDate?: Date;
	}): Promise<Review[]> {
		const response = await this.client.post("/reviews/by-users", {
			userIds: params.userIds,
			startDate: params.startDate?.toISOString(),
			endDate: params.endDate?.toISOString(),
		});
		return response.data;
	}

	async countProducts(): Promise<number> {
		const response = await this.client.get("/count");
		return response.data.count;
	}

	async countLowStockProducts(): Promise<number> {
		const response = await this.client.get("/low-stock/count");
		return response.data.count;
	}

	async getTopProducts(limit: number): Promise<TopProduct[]> {
		const response = await this.client.get("/top", {
			params: { limit },
		});
		return response.data;
	}

	async getTopSellingProduct(params: {
		startDate: Date;
		endDate: Date;
	}): Promise<{ id: string; name: string; quantity: number } | null> {
		const response = await this.client.get("/top-selling", {
			params: {
				startDate: params.startDate.toISOString(),
				endDate: params.endDate.toISOString(),
			},
		});
		return response.data;
	}

	async getProductById(productId: string): Promise<Product | null> {
		const response = await this.client.get(`/${productId}`);
		return response.data;
	}

	async getProducts(params?: {
		categoryId?: string;
		minPrice?: number;
		maxPrice?: number;
		inStock?: boolean;
	}): Promise<Product[]> {
		const response = await this.client.get("", { params });
		return response.data;
	}

	async checkLowStock(productId: string): Promise<boolean> {
		const response = await this.client.get(`/${productId}/low-stock`);
		return response.data.isLowStock;
	}
}
