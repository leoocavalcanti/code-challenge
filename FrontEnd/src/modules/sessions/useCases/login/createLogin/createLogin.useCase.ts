import { useCallback } from 'react';
import { createLoginAPI } from 'modules/sessions/apis/login.apis';
import { ICreateLoginDTO } from 'modules/sessions/interfaces/dtos/login.create.dtos';
import { IUserRepository } from 'modules/sessions/repositories/ILoginRepository';

export const useCreateLoginUseCase = ({ create }: IUserRepository) => {
  const execute = useCallback(
    async (data: ICreateLoginDTO) => {
      const response = await createLoginAPI(data);
      create?.(response.data);

      return response.data;
    },
    [create]
  );

  return { execute };
};
