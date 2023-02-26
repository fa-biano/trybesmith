import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { JWTPayload } from '../interfaces';

const secret = process.env.JWT_SECRET as string;

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error('Token not found');
    error.name = 'Unauthorized';
    throw error;
  }

  try {
    const payload = jwt.verify(token, secret) as JWTPayload;
    req.body.user = payload;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });    
  }
}