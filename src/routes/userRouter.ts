import { Router } from 'express';
import * as userControllers from '../controllers/userController';
import validateUserFields from '../middlewares/validateUserFields';

const userRouter = Router();

userRouter.post('/', validateUserFields, userControllers.createUser);

export default userRouter;