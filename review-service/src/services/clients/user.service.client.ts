import axios, { AxiosInstance } from "axios";

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
  async getUsersByIds(
    userIds: string[],
    BearerToken: string,
  ): Promise<{ id: string; name: string }[]> {
    this.client.defaults.headers.common["Authorization"] = BearerToken;

    const response = await this.client.post("/users/batch", {
      ids: userIds,
    });
    return response.data;
  }

  //   async getReviewsByProducts(params: {
  //     productIds: string[];
  //     startDate?: Date;
  //     endDate?: Date;
  //   }): Promise<Review[]> {
  //     const response = await this.client.post("/reviews/by-products", {
  //       productIds: params.productIds,
  //       startDate: params.startDate?.toISOString(),
  //       endDate: params.endDate?.toISOString(),
  //     });
  //     return response.data;
  //   }
}
