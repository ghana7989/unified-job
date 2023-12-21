import { Document } from 'mongoose';
import { IUser } from '../../models/user';

declare global {
  declare namespace Express {
    export interface Request {
      user: Document<unknown, unknown, IUser>;
    }
  }
}
