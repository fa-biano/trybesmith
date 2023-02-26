import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces';

export async function getAllOrders(): Promise<IOrder[]> {
  const tables = 'p.order_id as "id", o.user_id as "userId", JSON_ARRAYAGG(p.id) as "productsIds"';
  const from = 'FROM Trybesmith.products as p';
  const innerJoin = 'INNER JOIN Trybesmith.orders as o ON o.id = p.order_id';
  const groupBy = 'GROUP BY p.order_id;';

  const query = `SELECT ${tables} ${from} ${innerJoin} ${groupBy}`;
  const [orders] = await connection.execute(query);
  return orders as IOrder[];
}

export async function createOrder(userId: number, productsIds: number[]) {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?);';
  const [newOrder] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = newOrder;

  const values2 = productsIds.map((_product) => '?').join(',');
  const query2 = `UPDATE Trybesmith.products SET order_id = ? WHERE id IN (${values2}) `;
  
  await connection.execute(query2, [id, ...productsIds]);
}