import { api } from 'shared/services/api';
import {
  ICreateLoginAPI,
  ICreateLoginDTO,
} from '../interfaces/dtos/login.create.dtos';

export const createLoginAPI = (data: ICreateLoginDTO): ICreateLoginAPI =>
  api.post('login', data);
