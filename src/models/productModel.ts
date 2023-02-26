import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, IProduct } from '../interfaces';

export async function createProduct(product: Product): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newProduct: IProduct = { id, name, amount };

  return newProduct;
}

export async function getAllProducts(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [products] = await connection.execute(query);
  return products as IProduct[];
}

export async function getProductsByIds(productsIds: number[]) {
  const values = productsIds.map((_product) => '?').join(',');
  const query = `SELECT * from Trybesmith.products WHERE id IN(${values})`;
  console.log('query em productModel', query);
  
  const [products] = await connection.execute(query, [...productsIds]);
  return products;
}