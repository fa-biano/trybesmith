export interface Product {
  name: string,
  amount: string,
}

export interface IProduct extends Product {
  id: number,
}

export interface UserLogin {
  username: string,
  password: string,
}

export interface User extends UserLogin {
  vocation: string,
  level: number,
}

export interface IUser extends User {
  id: number,
}

export interface JWTPayload {
  id: number,
  username: string,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[],
}