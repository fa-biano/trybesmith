import { Request, Response } from 'express';
import { User, UserLogin } from '../interfaces';
import * as userServices from '../services/userService';

export async function createUser(req: Request, res: Response) {
  const user = req.body as User;
  const { status, token } = await userServices.createUser(user);
  return res.status(status).json({ token });
}

export async function getUserLogin(req: Request, res: Response) {
  const login = req.body as UserLogin;
  const { status, token } = await userServices.getUserLogin(login);
  return res.status(status).json({ token });
}