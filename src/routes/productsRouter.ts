import { Router } from 'express';
import * as productControllers from '../controllers/productController';
import { validateProductFields } from '../middlewares';

const productsRouter = Router();

productsRouter.post('/', validateProductFields, productControllers.createProduct);
productsRouter.get('/', productControllers.getAllProducts);

export default productsRouter;