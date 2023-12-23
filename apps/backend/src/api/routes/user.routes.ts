import express from 'express';
import userController from '../controllers/user.controller';
import { authorize } from '../middlewares/auth.middleware';

const router = express.Router();

// Basic details update
router.post(
  '/basic-details',
  async function (req, res, next) {
    const a = await authorize(req, res, next);
    return a;
  },
  userController.updateBasicDetails
);

// Update user languages
// router.put('/user/:userId/languages', userController.updateLanguages);

// ... other routes

const userRouter = router;

export default userRouter;
