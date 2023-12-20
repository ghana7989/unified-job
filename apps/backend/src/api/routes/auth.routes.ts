import express from 'express';
import * as AuthController from 'src/api/controllers/auth.controller';

const router = express.Router();

router.post('/register', AuthController.register);

const authRouter = router;
export default authRouter;
