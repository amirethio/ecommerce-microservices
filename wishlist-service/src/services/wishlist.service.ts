import prisma from "../config/db";

export const getOrCreateWishlistByUserId = async (userId: string) => {
  let wishlist = await prisma.wishlist.findUnique({
    where: { userId },
    include: { items: true },
  });

  if (!wishlist) {
    wishlist = await prisma.wishlist.create({
      data: { userId },
      include: { items: true },
    });
  }

  return wishlist;
};

export const getWishlistByUserId = async (userId: string) => {
  const wishlist = await getOrCreateWishlistByUserId(userId);
  return wishlist;
};

export const addToWishlist = async (userId: string, productId: string) => {
  const wishlist = await getOrCreateWishlistByUserId(userId);

  const existingItem = await prisma.wishlistItem.findUnique({
    where: {
      wishlistId_productId: {
        wishlistId: wishlist.id,
        productId,
      },
    },
  });

  if (existingItem) {
    return { wishlist, alreadyExists: true } as const;
  }

  await prisma.wishlistItem.create({
    data: {
      wishlistId: wishlist.id,
      productId,
    },
  });

  const updated = await prisma.wishlist.findUnique({
    where: { id: wishlist.id },
    include: { items: true },
  });

  return { wishlist: updated!, alreadyExists: false } as const;
};

export const removeFromWishlist = async (userId: string, productId: string) => {
  const wishlist = await prisma.wishlist.findUnique({
    where: { userId },
  });

  if (!wishlist) {
    return null;
  }

  await prisma.wishlistItem.deleteMany({
    where: {
      wishlistId: wishlist.id,
      productId,
    },
  });

  const updated = await prisma.wishlist.findUnique({
    where: { id: wishlist.id },
    include: { items: true },
  });

  return updated;
};

