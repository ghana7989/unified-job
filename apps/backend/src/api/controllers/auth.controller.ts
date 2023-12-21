import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as AuthService from 'src/services/auth.service';
import { CookiePayload } from 'src/types/auth';
import logger from 'src/utils/logger';

import User from '../models/user.model';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.createUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'User not found' });
    // validate password
    const isMatch = await AuthService.isPasswordValid(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid credentials' });
    // create token
    const payload: CookiePayload = {
      id: user.id,
    };
    const token: string = jwt.sign(payload, process.env.JWT_SECRET);
    return res
      .cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(200)
      .json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  return res
    .clearCookie('accessToken')
    .status(200)
    .json({ message: 'Logged out successfully' });
};
