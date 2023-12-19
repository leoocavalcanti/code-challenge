import { APIStatus, useApiStatus } from 'shared/hooks/useApiStatus';
import { IUser } from '../interfaces/login.interfaces';
import {
  ICreateLoginAPI,
  ICreateLoginDTO,
} from '../interfaces/dtos/login.create.dtos';
import { useLoginRepository } from '../repositories/implementations/login.repository';
import { useCreateLoginController } from '../useCases/login/createLogin/createLogin.controller';

export type UseLoginData = {
  status: APIStatus;
  data: IUser | undefined;
  createLogin: (data: ICreateLoginDTO) => ICreateLoginAPI;
};
export const useLogin = (): UseLoginData => {
  const { changeStatus, status } = useApiStatus();
  const repository = useLoginRepository();

  const createController = useCreateLoginController({
    repository,
    changeStatus,
  });

  return {
    status,
    data: repository.data,
    createLogin: createController.handle,
  };
};
