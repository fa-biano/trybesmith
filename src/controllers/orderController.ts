import { Request, Response } from 'express';
import * as orderServices from '../services/orderService';
import { JWTPayload } from '../interfaces';

export async function getAllOrders(_req: Request, res: Response) {
  const { status, data } = await orderServices.getAllOrders();
  return res.status(status).json(data);
}

export async function createOrder(req: Request, res: Response) {
  const { id: userId }: JWTPayload = req.body.user;
  const { productsIds } = req.body;

  const { status, data } = await orderServices.createOrder(userId, productsIds);
  return res.status(status).json(data);
}