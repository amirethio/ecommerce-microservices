import axios, { AxiosInstance } from "axios";

interface ProductCategory {
  id: string;
  name: string;
}

interface Product {
  id?: string;
  name?: string;
  slug?: string;
  description?: string;
  price?: number;
  stock?: number;
  lowStockAlert?: number;
  categoryId?: string;
  category?: ProductCategory;
  createdAt?: string;
  updatedAt?: string;
}

interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: string;
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

  async updateProductReview(
    productId: string,
    newReview: {
      avgRating?: number | null;
      ratingCount: number;
    },
    BearerToken: string,
  ) {
    this.client.defaults.headers.common["Authorization"] = BearerToken;
    const response = await this.client.patch(`/review/${productId}`, {
      avgRating: newReview.avgRating,
      ratingCount: newReview.ratingCount,
    });
    return response.data;
  }
  async getAllReviewsOfProduct(
    BearerToken: string,
    prosductIds: string[],
  ): Promise<Product[]> {
    this.client.defaults.headers.common["Authorization"] = BearerToken;
    const response = await this.client.post(`batch`, {
      ids: prosductIds,
    });
    return response.data;
  }
}
