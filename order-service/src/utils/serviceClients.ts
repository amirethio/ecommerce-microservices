import axios from "axios";
import { AppError } from "./appError.js";

export interface ProductSnapshot {
  id: string;
  name: string;
  slug: string;
  images: string[];
  price: number;
}

const getProductClient = () => {
  if (!process.env.PRODUCT_SERVICE_URL) {
    throw new AppError("PRODUCT_SERVICE_URL is required", 500);
  }

  if (!process.env.GATEWAY_SECRET) {
    throw new AppError("GATEWAY_SECRET is required", 500);
  }

  return axios.create({
    baseURL: process.env.PRODUCT_SERVICE_URL,
    timeout: 10000,
    headers: {
      "x-gateway-secret": process.env.GATEWAY_SECRET,
    },
  });
};

export const fetchProductsByIds = async (
  productIds: string[],
): Promise<ProductSnapshot[]> => {
  const response = await getProductClient().post("/internal/products/batch", {
    productIds,
  });

  const products = response.data?.data?.products;

  if (!Array.isArray(products)) {
    throw new AppError("Invalid product-service response", 502);
  }

  return products;
};

export const decrementProductStock = async (
  items: Array<{ productId: string; quantity: number }>,
): Promise<void> => {
  await getProductClient().patch("/internal/products/stock/decrement", { items });
};

export const incrementProductStock = async (
  items: Array<{ productId: string; quantity: number }>,
): Promise<void> => {
  await getProductClient().patch("/internal/products/stock/increment", { items });
};
