import { NextFunction, Request, Response } from 'express';
import {
  addToCart,
  clearCartByUserId,
  getCartByUserId,
  removeCartItem,
  updateCartItemQuantity,
} from '../services/cart.service';
import { AuthRequest } from '../middleware/authMiddleware';

type AddCartItemBody = {
  productId?: string;
  quantity?: number;
  price?: number;
};

type UpdateCartItemBody = {
  quantity?: number;
};

const getUserId = (req: Request, res: Response) => {
  const userId = (req as AuthRequest).user?.id;
  if (userId) {
    return userId;
  }

  res.status(401).json({ status: 'error', message: 'Unauthorized' });
  return null;
};

export const getCart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) {
      return;
    }

    const cart = await getCartByUserId(userId);
    res.status(200).json({ status: 'success', data: { cart } });
  } catch (error) {
    next(error);
  }
};

export const createCartItem = async (
  req: Request<Record<string, never>, unknown, AddCartItemBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) {
      return;
    }

    const productId = req.body.productId;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    if (!productId) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing productId' });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        status: 'error',
        message: 'quantity must be a positive integer',
      });
    }

    if (!Number.isFinite(price) || price < 0) {
      return res.status(400).json({
        status: 'error',
        message: 'price must be a non-negative number',
      });
    }

    const cart = await addToCart(userId, productId, quantity, price);
    res.status(200).json({ status: 'success', data: { cart } });
  } catch (error) {
    next(error);
  }
};

export const patchCartItem = async (
  req: Request<{ itemId: string }, unknown, UpdateCartItemBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) {
      return;
    }

    const { itemId } = req.params;
    const quantity = Number(req.body.quantity);

    if (!itemId) {
      return res.status(400).json({ status: 'error', message: 'Missing itemId' });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        status: 'error',
        message: 'quantity must be a positive integer',
      });
    }

    const cart = await updateCartItemQuantity(userId, itemId, quantity);
    if (!cart) {
      return res.status(404).json({ status: 'error', message: 'Cart item not found' });
    }

    res.status(200).json({ status: 'success', data: { cart } });
  } catch (error) {
    next(error);
  }
};

export const deleteCartItem = async (
  req: Request<{ itemId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) {
      return;
    }

    const { itemId } = req.params;
    if (!itemId) {
      return res.status(400).json({ status: 'error', message: 'Missing itemId' });
    }

    const cart = await removeCartItem(userId, itemId);
    if (!cart) {
      return res.status(404).json({ status: 'error', message: 'Cart item not found' });
    }

    res.status(200).json({ status: 'success', data: { cart } });
  } catch (error) {
    next(error);
  }
};

export const clearCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = getUserId(req, res);
    if (!userId) {
      return;
    }

    const cart = await clearCartByUserId(userId);
    res.status(200).json({ status: 'success', data: { cart } });
  } catch (error) {
    next(error);
  }
};