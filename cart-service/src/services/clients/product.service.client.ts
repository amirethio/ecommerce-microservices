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
  stock: number;
  lowStockAlert?: number;
  categoryId?: string;
  category?: ProductCategory;
  createdAt?: string;
  updatedAt?: string;
}

interface productRes {
  status: string;
  data: Product[];
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

  async getProductById(productId: string): Promise<Product | null> {
    const response = await this.client.get(`/${productId}`);
    return response.data.data.product;
  }

}
