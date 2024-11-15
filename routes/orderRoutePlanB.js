import express from 'express';
import { addOrder, getOrder, getAllOrder, removeOrder } from '../controllers/orderController.js';
import authMiddleware from '../middleware/auth.js';
const orderRouter = express.Router()


orderRouter.post('/add',authMiddleware, addOrder)
orderRouter.post('/get',authMiddleware, getOrder)
orderRouter.get('/list', getAllOrder)
orderRouter.post('/remove',authMiddleware, removeOrder)

export default orderRouter;