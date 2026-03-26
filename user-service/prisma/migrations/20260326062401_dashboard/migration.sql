-- CreateTable
CREATE TABLE "DashboardStats" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "newUserCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DashboardStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DashboardStats_date_key" ON "DashboardStats"("date");
