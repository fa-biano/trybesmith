import { IUser, User, UserLogin } from '../interfaces';
import * as userModels from '../models/userModel';
import tokenGenetator from '../utils/tokenGenerate';

export async function createUser(user: User) {
  const newUser: IUser = await userModels.createUser(user);

  const payload = { id: Number(newUser.id), username: newUser.username };
  const token = tokenGenetator(payload);

  return { status: 201, data: newUser, token };
}

export async function getUserLogin(login: UserLogin) {
  const { username, password } = login;

  const user = await userModels.getUserLogin({ username, password });

  if (!user || user.password !== password) {
    const error = new Error('Username or password invalid');
    error.name = 'Unauthorized';
    throw error;
  }
  
  const payload = { id: Number(user.id), username: user.username };
  const token = tokenGenetator(payload);
  
  return { status: 200, token };
}