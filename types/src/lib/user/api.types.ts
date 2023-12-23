import { IUser } from './types';

export type UpdateBasicDetailsBody = Partial<
  Omit<IUser, 'languages' | 'education' | 'skills' | 'comparePassword'>
>['basicDetails'];
