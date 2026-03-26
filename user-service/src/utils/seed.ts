import { prisma } from "../lib/prisma.js";
import argon2 from "argon2";
import { logger } from "./logger.js";
import "dotenv/config";

async function seed() {
  try {
    logger.info("Starting database seeding...");

    // Create admin users
    const adminUsers = [
      {
        email: "admin@example.com",
        password: "admin123",
        firstName: "Admin",
        lastName: "User",
      },
      {
        email: "sarah.admin@example.com",
        password: "admin456",
        firstName: "Sarah",
        lastName: "Johnson",
      },
      {
        email: "tech.admin@example.com",
        password: "admin789",
        firstName: "Michael",
        lastName: "Chen",
      },
    ];

    for (const admin of adminUsers) {
      const hashedPassword = await argon2.hash(admin.password);
      await prisma.user.upsert({
        where: { email: admin.email },
        update: {},
        create: {
          email: admin.email,
          password: hashedPassword,
          firstName: admin.firstName,
          lastName: admin.lastName,
          role: "ADMIN",
        },
      });
    }
    logger.info(`Created ${adminUsers.length} admin users`);

    // Create customer users
    const customerUsers = [
      {
        email: "customer@example.com",
        password: "customer123",
        firstName: "Test",
        lastName: "Customer",
      },
      {
        email: "john.doe@example.com",
        password: "password123",
        firstName: "John",
        lastName: "Doe",
      },
      {
        email: "jane.smith@example.com",
        password: "password456",
        firstName: "Jane",
        lastName: "Smith",
      },
      {
        email: "robert.johnson@example.com",
        password: "password789",
        firstName: "Robert",
        lastName: "Johnson",
      },
      {
        email: "emily.davis@example.com",
        password: "emilypwd",
        firstName: "Emily",
        lastName: "Davis",
      },
      {
        email: "david.wilson@example.com",
        password: "davidpwd",
        firstName: "David",
        lastName: "Wilson",
      },
      {
        email: "sophia.brown@example.com",
        password: "sophiapwd",
        firstName: "Sophia",
        lastName: "Brown",
      },
      {
        email: "daniel.miller@example.com",
        password: "danielpwd",
        firstName: "Daniel",
        lastName: "Miller",
      },
      {
        email: "olivia.taylor@example.com",
        password: "oliviapwd",
        firstName: "Olivia",
        lastName: "Taylor",
      },
      {
        email: "james.anderson@example.com",
        password: "jamespwd",
        firstName: "James",
        lastName: "Anderson",
      },
    ];

    for (const customer of customerUsers) {
      const hashedPassword = await argon2.hash(customer.password);
      await prisma.user.upsert({
        where: { email: customer.email },
        update: {},
        create: {
          email: customer.email,
          password: hashedPassword,
          firstName: customer.firstName,
          lastName: customer.lastName,
          role: "CUSTOMER",
        },
      });
    }
    logger.info(`Created ${customerUsers.length} customer users`);

    logger.info("Database seeding completed successfully");
  } catch (error) {
    logger.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    logger.error("Failed to seed database:", error);
    process.exit(1);
  });
