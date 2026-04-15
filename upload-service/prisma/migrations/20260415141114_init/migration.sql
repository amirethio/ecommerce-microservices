-- CreateTable
CREATE TABLE "UploadLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "fileName" TEXT NOT NULL,
    "fileType" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UploadLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UploadLog_userId_idx" ON "UploadLog"("userId");

-- CreateIndex
CREATE INDEX "UploadLog_createdAt_idx" ON "UploadLog"("createdAt");
