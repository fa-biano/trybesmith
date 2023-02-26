import express from 'express';
import 'express-async-errors';

import { productsRouter, userRouter, orderRouter, loginRouter } from './routes';
import { errorMiddleware } from './middlewares';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

app.use(errorMiddleware);

export default app;
