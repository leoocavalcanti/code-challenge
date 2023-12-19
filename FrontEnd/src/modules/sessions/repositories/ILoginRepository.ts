import { IBaseRepository } from 'shared/interfaces/IBaseRepository';

import { IUser } from '../interfaces/login.interfaces';

export interface IUserRepository extends IBaseRepository<IUser> {
  data: IUser | undefined;
}
