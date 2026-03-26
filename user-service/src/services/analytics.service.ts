import { prisma } from "../lib/prisma.js";

// Generate and store daily stats (to be called by a scheduled job)
export const generateDailyStats = async () => {
	try {
		// Get yesterday's date
		const yesterday = new Date();
		yesterday.setDate(yesterday.getDate() - 1);
		yesterday.setHours(0, 0, 0, 0);

		const endOfYesterday = new Date(yesterday);
		endOfYesterday.setHours(23, 59, 59, 999);

		// Check if stats already exist for yesterday
		const existingStats = await prisma.dashboardStats.findUnique({
			where: {
				date: yesterday,
			},
		});

		if (existingStats) {
			console.log(
				`Stats for ${yesterday.toISOString().split("T")[0]} already exist`,
			);
			return;
		}

		// Get new users for yesterday
		const newUserCount = await prisma.user.count({
			where: {
				createdAt: {
					gte: yesterday,
					lte: endOfYesterday,
				},
				role: "CUSTOMER",
			},
		});

		// Store stats
		await prisma.dashboardStats.create({
			data: {
				date: yesterday,
				newUserCount,
			},
		});

		console.log(`Generated stats for ${yesterday.toISOString().split("T")[0]}`);
	} catch (error) {
		console.error("Error generating daily stats:", error);
	}
};
