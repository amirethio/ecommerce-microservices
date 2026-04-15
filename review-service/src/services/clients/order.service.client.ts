import axios, { AxiosInstance } from "axios";

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

  async CheckPurchased(
    productId: string,
    BearerToken: string,
  ): Promise<number> {
    this.client.defaults.headers.common["Authorization"] = BearerToken;
    const ressponse = await this.client.get(`/purchased/${productId}`);
    return ressponse.status;
  }
}
