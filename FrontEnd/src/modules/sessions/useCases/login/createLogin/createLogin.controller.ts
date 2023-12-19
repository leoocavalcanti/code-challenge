import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

import { type APIStatus } from 'shared/hooks/useApiStatus';

import {
  type ICreateLoginAPI,
  type ICreateLoginDTO,
} from 'modules/sessions/interfaces/dtos/login.create.dtos';
import { type IUserRepository } from 'modules/sessions/repositories/ILoginRepository';

import { useCreateLoginUseCase } from './createLogin.useCase';

interface UseCreateLoginController {
  changeStatus: (status: APIStatus) => void;
  repository: IUserRepository;
}

export const useCreateLoginController = ({
  repository,
  changeStatus,
}: UseCreateLoginController) => {
  const { execute } = useCreateLoginUseCase(repository);
  const toast = useToast();

  const handle = useCallback(
    async (data: ICreateLoginDTO) => {
      try {
        changeStatus('pending');
        const response = await execute(data);

        changeStatus('success');

        toast({
          description: 'Seja bem-vindo!',
          status: 'success',
          variant: 'solid',
          duration: 3000,
          isClosable: true,
        });

        return response;
      } catch (err) {
        changeStatus('error');

        toast({
          description:
            'Não foi possível autenticar, por favor tente novamente mais tarde.',
          status: 'error',
          variant: 'solid',
          duration: 3000,
          isClosable: true,
        });
      }
      return await ({} as ICreateLoginAPI);
    },
    [changeStatus, execute]
  );

  return { handle };
};
