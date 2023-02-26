import { Router } from 'express';
import * as userControllers from '../controllers/userController';
import { validateLoginFields } from '../middlewares';

const loginRouter = Router();

loginRouter.post('/', validateLoginFields, userControllers.getUserLogin);

export default loginRouter;