import { Router } from 'express';
import * as orderControllers from '../controllers/orderController';
import { auth, validateProductIds } from '../middlewares';

const orderRouter = Router();

orderRouter.get('/', orderControllers.getAllOrders);
orderRouter.post('/', auth, validateProductIds, orderControllers.createOrder);

export default orderRouter;