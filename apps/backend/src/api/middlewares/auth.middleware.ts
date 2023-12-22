import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from 'src/api/models/user.model';
import { CookiePayload } from 'src/types/auth';
import logger from 'src/utils/logger';

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(403).json({ message: 'Unauthorized' });
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as CookiePayload;
    if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    logger.info(`User ${user.email} authorized`);
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};
