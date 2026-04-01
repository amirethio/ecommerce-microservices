import prisma from "../config/db";

const calculateTotal = (items: Array<{ quantity: number; price: number }>) => {
  return items.reduce((sum, item) => sum + item.quantity * Number(item.price), 0);
};

export const getCartByUserId = async (userId: string) => {
  const items = await prisma.cartItem.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return {
    items,
    total: calculateTotal(items),
  };
};

export const addToCart = async (
  userId: string,
  productId: string,
  quantity: number,
  price: number,
) => {
  const existingItem = await prisma.cartItem.findFirst({
    where: { userId, productId },
  });

  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity, price },
    });
  } else {
    await prisma.cartItem.create({
      data: { userId, productId, quantity, price },
    });
  }

  return getCartByUserId(userId);
};

export const updateCartItemQuantity = async (
  userId: string,
  itemId: string,
  quantity: number,
) => {
  const existing = await prisma.cartItem.findFirst({
    where: { id: itemId, userId },
  });

  if (!existing) return null;

  await prisma.cartItem.update({
    where: { id: itemId },
    data: { quantity },
  });

  return getCartByUserId(userId);
};

export const removeCartItem = async (userId: string, itemId: string) => {
  const existing = await prisma.cartItem.findFirst({
    where: { id: itemId, userId },
  });

  if (!existing) return null;

  await prisma.cartItem.delete({ where: { id: itemId } });
  return getCartByUserId(userId);
};

export const clearCartByUserId = async (userId: string) => {
  await prisma.cartItem.deleteMany({ where: { userId } });
  return { items: [], total: 0 };
};