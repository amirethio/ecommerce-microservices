import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

async function seedCart() {
  try {
    logger.info("Starting Cart Service seeding...");

    // 1. Clear everything (Order matters: Items first, then Carts)
    await prisma.cartItem.deleteMany({});
    await prisma.cart.deleteMany({});

    // 2. Define a Mock User
    const mockUserId = "user-123";

    // 3. Create the Cart for the user
    const userCart = await prisma.cart.create({
      data: {
        userId: mockUserId,
      },
    });

    // 4. Create the Cart Items linked to that Cart ID
    const items = [
      {
        cartId: userCart.id, // Now it knows which cart to go into
        productId: "prod-abc",
        quantity: 2,
      },
      {
        cartId: userCart.id,
        productId: "prod-xyz",
        quantity: 1,
      }
    ];

    for (const item of items) {
      await prisma.cartItem.create({
        data: item,
      });
    }

    logger.info("Cart and Items seeded successfully!");
  } catch (error) {
    logger.error("Cart seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedCart();