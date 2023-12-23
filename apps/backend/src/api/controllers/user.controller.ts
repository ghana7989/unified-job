import { Request, Response } from 'express';
import { UpdateBasicDetailsBody } from '@unified-job/types';
import userService from 'src/services/user.service';

const userController = {
  async updateBasicDetails(req: Request, res: Response) {
    const { id: userId } = req.user;
    const details: UpdateBasicDetailsBody = req.body;
    try {
      const updatedUser = await userService.updateBasicDetails(userId, details);
      res.status(204).json(updatedUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};

export default userController;
