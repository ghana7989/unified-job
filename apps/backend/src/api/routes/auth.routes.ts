import express from 'express';
import * as AuthController from 'src/api/controllers/auth.controller';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

const authRouter = router;
export default authRouter;
