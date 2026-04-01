import { Router } from 'express';
import {
	clearCart,
	createCartItem,
	deleteCartItem,
	getCart,
	patchCartItem,
} from '../controllers/cart.controller';
import { authMiddleware } from '../middleware/authMiddleware';

const router: Router = Router();

router.use(authMiddleware);

router.get('/', getCart);
router.post('/', createCartItem);
router.delete('/clear', clearCart);
router.patch('/:itemId', patchCartItem);
router.delete('/:itemId', deleteCartItem);

export default router;