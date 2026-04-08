import axios, { AxiosInstance } from "axios";
import { AppError } from "../../utils/appError";

interface Product {
  id: string;
  name: string;
  slug: string;
  category: {
    id: string;
    name: string;
  };
}

interface OrderStats {
  totalSales: number;
  orderCount: number;
  productsSold: number;
  avgOrderValue: number;
  topSellingProduct: string | null;
}

interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product?: Product;
  productName: string;
  productSlug: string;
  productImage: string | null;
  categoryId: string;
  categoryName: string;
  quantity: number;
  price: number;
  createdAt: string;
}

interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  shippingAdress?: string;
  paymentReference?: string;
  paymentStatus: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

type OrderParams = {
  startDate?: Date;
  endDate?: Date;
  statuses?: string[];
  includeProducts?: boolean;
};

export class OrderServiceClient {
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

  async getOrders(params: OrderParams): Promise<Order[]> {
    const response = await this.client.get("/", { params });
    const orders = response.data as Order[];

    if (response.status === 200) {
      orders.forEach((orders) => {
        orders.items = orders.items.map((item) => {
          return {
            ...item,
            product: {
              id: item.productId,
              name: item.productName,
              slug: item.productSlug,
              category: {
                id: item.categoryId,
                name: item.categoryName,
              },
            },
          };
        });
      });

      return params.includeProducts ? orders : response.data;
    } else {
      new AppError("Error getting orders", response.status);
      return [];
    }
  }

  async getOrderItemsByProducts(params: {
    productIds: string[];
    startDate?: Date;
    endDate?: Date;
    orderStatuses?: string[];
  }): Promise<OrderItem[]> {
    const response = await this.client.get("/items/by-products", {
      params,
    });
    return response.data;
  }

  async getOrdersByCustomers(params: {
    customerIds: string[];
    startDate?: Date;
    endDate?: Date;
    statuses?: string[];
  }): Promise<Order[]> {
    const response = await this.client.get("/by-customers", { params });
    return response.data;
  }

  async countOrders(params: {
    startDate?: Date;
    endDate?: Date;
    statuses?: string[];
  }): Promise<number> {
    const response = await this.client.get("/count", { params });
    return response.data.count;
  }

  async CheckPurchased(
    productId: string,
    BearerToken: string,
  ): Promise<number> {
    this.client.defaults.headers.common["Authorization"] = BearerToken;
    const ressponse = await this.client.get(`/purchased/${productId}`);
    return ressponse.status;
  }
}
