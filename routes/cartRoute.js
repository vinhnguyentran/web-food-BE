import express from 'express';
import { addToCart, getCart, removeFromCart,deleteFromCart } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';
const cartRouter = express.Router()


cartRouter.post('/add',authMiddleware, addToCart)
cartRouter.post('/get',authMiddleware, getCart)
cartRouter.post('/remove',authMiddleware, removeFromCart)
cartRouter.post('/delete',authMiddleware, deleteFromCart)

export default cartRouter;