import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces';
import checkStringFields from '../utils/checkStringFields';
import checkPasswordField from '../utils/checkPasswordField';
import checkLevelField from '../utils/checkLevelField';

export default function validateUserFields(req: Request, _res: Response, next: NextFunction) {
  const user = req.body as User;
  const { username, vocation, password, level } = user;

  checkStringFields(username, 'username');
  checkStringFields(vocation, 'vocation');
  checkPasswordField(password, 'password');
  checkLevelField(level, 'level');

  next();
}