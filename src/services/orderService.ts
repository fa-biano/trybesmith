import * as orderModels from '../models/orderModel';
import { IOrder } from '../interfaces';

export async function getAllOrders() {
  const orders: IOrder[] = await orderModels.getAllOrders();
  return { status: 200, data: orders };
}

export async function createOrder(userId: number, productsIds: number[]) {
  await orderModels.createOrder(userId, productsIds);
  return { status: 201, data: { userId, productsIds } };  
}