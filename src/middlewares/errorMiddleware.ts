import { NextFunction, Request, Response } from 'express';

function errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
  const { name, message } = err;

  type ErrorCodes = { [key: string] : number };

  const errorHandler: ErrorCodes = {
    Bad_Request: 400,
    Unauthorized: 401,
    Not_Found: 404,
    Conflict: 409,
    Unprocessable_Entity: 422,
  };

  const statusCode = errorHandler[name];
  if (statusCode) return res.status(statusCode).json({ message });
  
  console.log(err);
  return res.status(500).end();
  next();  
}

export default errorMiddleware;