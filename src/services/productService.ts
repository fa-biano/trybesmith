import { Product, IProduct } from '../interfaces';
import * as productModels from '../models/productModel';

export async function createProduct(product: Product) {
  const newProduct: IProduct = await productModels.createProduct(product);
  return { status: 201, data: newProduct };
}

export async function getAllProducts() {
  const products: IProduct[] = await productModels.getAllProducts();
  return { status: 200, data: products };
}