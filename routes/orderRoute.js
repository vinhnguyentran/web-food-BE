import { placeOrder } from "../controllers/orderController.js";
import express from 'express';
import authMiddleware from "../middleware/auth.js";
const orderRouter = new express.Router();

orderRouter.post('/place', placeOrder, authMiddleware)

export default orderRouter;

