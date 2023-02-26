import { Request, Response } from 'express';
import { Product } from '../interfaces';
import * as productServices from '../services/productService';

export async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productServices.createProduct(product);

  return res.status(status).json(data);
}

export async function getAllProducts(_req: Request, res: Response) {
  const { status, data } = await productServices.getAllProducts();
  return res.status(status).json(data);
}