import { Client } from "minio";
import { logger } from "./logger.js";

// 1. Create a helper to check if Minio is configured
const isMinioConfigured =
  !!process.env.MINIO_ENDPOINT && !!process.env.MINIO_ACCESS_KEY;

// 2. Initialize with fallbacks so it doesn't throw a "new Client" error
export const minioClient = new Client({
  // Provide an empty string instead of undefined to stop the immediate crash
  endPoint: process.env.MINIO_ENDPOINT || "localhost",
  port: Number.parseInt(process.env.MINIO_PORT || "9000", 10),
  useSSL: process.env.MINIO_USE_SSL === "true",
  accessKey: process.env.MINIO_ACCESS_KEY || "missing",
  secretKey: process.env.MINIO_SECRET_KEY || "missing",
});

export async function generatePresignedUrl(fileName: string, fileType: string) {
  // 3. Guard clause: Check if we actually have a config before calling Minio
  if (!isMinioConfigured) {
    logger.warn("MinIO is not configured. Skipping presigned URL generation.");
    return null;
  }

  try {
    const bucketName = process.env.MINIO_BUCKET_NAME!;
    const presignedUrl = await minioClient.presignedPutObject(
      bucketName,
      fileName,
      60 * 60,
    );
    return presignedUrl;
  } catch (error) {
    logger.error("Error generating presigned URL:", error);
    // Don't throw if you want the rest of the request to succeed
    return null;
  }
}

export function getPublicUrl(fileName: string) {
  if (!isMinioConfigured) return "";

  const bucketName = process.env.MINIO_BUCKET_NAME || "bucket";
  const endPoint = process.env.MINIO_ENDPOINT || "localhost";
  const port = process.env.MINIO_PORT || "9000";
  const useSSL = process.env.MINIO_USE_SSL === "true";

  const protocol = useSSL ? "https" : "http";
  return `${protocol}://${endPoint}:${port}/${bucketName}/${fileName}`;
}
