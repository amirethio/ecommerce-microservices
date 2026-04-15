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


    const response = await this.client.post("/batch", {
      ids: userIds,
    });
    return response.data;
  }


}
