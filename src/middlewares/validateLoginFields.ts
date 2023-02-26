import { NextFunction, Request, Response } from 'express';
import { UserLogin } from '../interfaces';

export default function validateLoginFields(req: Request, _res: Response, next: NextFunction) {
  const login = req.body as UserLogin;

  const { username, password } = login;

  if (!username) {
    const error = new Error('"username" is required');
    error.name = 'Bad_Request';
    throw error;
  }

  if (!password) {
    const error = new Error('"password" is required');
    error.name = 'Bad_Request';
    throw error;
  }

  next();
}