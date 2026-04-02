import { Client } from "minio";
import { logger } from "./logger";

export const minioClient = new Client({
  endPoint: process.env.MINIO_ENDPOINT!,
  port: Number.parseInt(process.env.MINIO_PORT!, 10),
  useSSL: process.env.MINIO_USE_SSL === "true",
  accessKey: process.env.MINIO_ACCESS_KEY!,
  secretKey: process.env.MINIO_SECRET_KEY!,
});

export async function generatePresignedUrl(fileName: string, fileType: string) {
  try {
    const bucketName = process.env.MINIO_BUCKET_NAME!;
    const presignedUrl = await minioClient.presignedPutObject(bucketName, fileName, 60 * 60, {
      "Content-Type": fileType,
    });
    return presignedUrl;
  } catch (error) {
    logger.error("Error generating presigned URL:", error);
    throw error;
  }
}

export function getPublicUrl(fileName: string) {
  const bucketName = process.env.MINIO_BUCKET_NAME!;
  const endPoint = process.env.MINIO_ENDPOINT!;
  const port = process.env.MINIO_PORT!;
  const useSSL = process.env.MINIO_USE_SSL === "true";

  const protocol = useSSL ? "https" : "http";
  return `${protocol}://${endPoint}:${port}/${bucketName}/${fileName}`;
}
