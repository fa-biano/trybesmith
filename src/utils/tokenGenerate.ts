import jwt, { SignOptions } from 'jsonwebtoken';
import { JWTPayload } from '../interfaces';

const secret = process.env.JWT_SECRET as string;

export default function createToken(payload: JWTPayload) {
  const config: SignOptions = {
    expiresIn: '6h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, config);
  return token;
}