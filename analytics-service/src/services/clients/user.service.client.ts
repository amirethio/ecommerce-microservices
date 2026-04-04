import axios, { AxiosInstance } from "axios";

interface UserStats {
	newUserCount: number;
}

interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string;
	createdAt: string;
	updatedAt: string;
}

interface Customer extends User {
	role: "CUSTOMER";
}

export class UserServiceClient {
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

	async getCustomers(params: {
		startDate?: Date;
		endDate?: Date;
	}): Promise<Customer[]> {
		const response = await this.client.get("/customers", {
			params: {
				startDate: params.startDate?.toISOString(),
				endDate: params.endDate?.toISOString(),
			},
		});
		return response.data;
	}

	async getUserById(userId: string): Promise<User | null> {
		const response = await this.client.get(`/${userId}`);
		return response.data;
	}

	async getCustomerById(customerId: string): Promise<Customer | null> {
		const response = await this.client.get(`/customers/${customerId}`);
		return response.data;
	}

	async countNewUsers(params: {
		startDate: Date;
		endDate: Date;
		role: string;
	}): Promise<number> {
		const response = await this.client.get("/count/new", {
			params: {
				startDate: params.startDate.toISOString(),
				endDate: params.endDate.toISOString(),
				role: params.role,
			},
		});
		return response.data.count;
	}

	async getUserStats(params?: {
		startDate?: Date;
		days?: number;
	}): Promise<UserStats[]> {
		const response = await this.client.get("/stats", {
			params: {
				startDate: params?.startDate?.toISOString(),
				days: params?.days,
			},
		});
		return response.data;
	}
}
