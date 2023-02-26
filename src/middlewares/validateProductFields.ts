import { NextFunction, Request, Response } from 'express';
import { Product } from '../interfaces';
import checkStringFields from '../utils/checkStringFields';

export default function validateProductFields(req: Request, _res: Response, next: NextFunction) {
  const product = req.body as Product;
  const { name, amount } = product;

  checkStringFields(name, 'name');
  checkStringFields(amount, 'amount');

  next();
}