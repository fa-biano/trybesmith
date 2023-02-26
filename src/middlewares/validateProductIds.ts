import { NextFunction, Request, Response } from 'express';

const checkArrayType = (productsIds: number[]) => {
  const checkType = productsIds.map((product) => typeof product === 'number');
  const isArrayOfNumber = checkType.every((type) => type === true);
  return isArrayOfNumber;
};

export default function validateProductIds(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;  

  if (!productsIds) {    
    const error = new Error('"productsIds" is required');
    error.name = 'Bad_Request';
    throw error;
  }

  if (!Array.isArray(productsIds)) {
    const error = new Error('"productsIds" must be an array');
    error.name = 'Unprocessable_Entity';
    throw error;
  }

  const isArrayOfNumber = checkArrayType(productsIds);

  if (productsIds.length === 0 || !isArrayOfNumber) {
    const error = new Error('"productsIds" must include only numbers');
    error.name = 'Unprocessable_Entity';
    throw error;
  }

  next();
}