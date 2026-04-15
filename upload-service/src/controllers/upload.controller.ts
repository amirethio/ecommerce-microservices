import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { AppError } from "../utils/appError.js";
import { generatePresignedUrl, getPublicUrl } from "../utils/minio.js";
import { prisma } from "../lib/prisma.js";

const uploadRequestSchema = z.object({
  fileName: z.string(),
  fileType: z.string().refine(
    (val) => {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/gif",
      ];
      return allowedTypes.includes(val);
    },
    {
      message: "File type not supported. Allowed types: jpeg, png, webp, gif",
    },
  ),
});

export const getUploadUrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = uploadRequestSchema.parse(req.body);

    const fileExtension = path.extname(validated.fileName);
    const uniqueFileName = `${uuidv4()}${fileExtension}`;
    const filePath = `uploads/${uniqueFileName}`;

    const presignedUrl = await generatePresignedUrl(
      filePath,
      validated.fileType,
    );
    const publicUrl = getPublicUrl(filePath);

    // Persist basic metadata for observability/audit
    await prisma.uploadLog.create({
      data: {
        userId: (req as any).user?.id ?? null,
        fileName: uniqueFileName,
        fileType: validated.fileType,
        filePath,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        presignedUrl,
        publicUrl,
        fileName: uniqueFileName,
        filePath,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return next(new AppError("Validation error", 400, error.format()));
    }
    next(error);
  }
};
