import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, IUser, UserLogin } from '../interfaces';

export async function createUser(user: User): Promise<IUser> {
  const { username, vocation, level, password } = user;

  const insertInto = 'INSERT INTO Trybesmith.users';
  const colums = '(username, vocation, level, password) VALUES (?, ?, ?, ?)';
  const query = `${insertInto} ${colums}`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: IUser = { id, ...user };
  return newUser;
}

export async function getUserLogin(login: UserLogin): Promise<IUser | null> {
  const { username } = login;

  // const select = 'SELECT * FROM Trybesmith.users';
  // const where = 'username = ?'
  // const query = `${select} ${where}`;
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';

  const [result] = await connection.execute(query, [username]);
  const [user] = result as IUser[];
  return user;
}

// export async function getAllUsers(): Promise<IUser[]> {
//   const query = 'SELECT * FROM Trybesmith.users';
//   const [users] = await connection.execute(query);
//   return users as IUser[];
// }