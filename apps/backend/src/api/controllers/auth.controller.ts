import { Request, Response } from 'express';
import * as AuthService from 'src/services/auth.service';
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.createUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
