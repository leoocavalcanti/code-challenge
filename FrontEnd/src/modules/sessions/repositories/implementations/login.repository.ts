import { useState } from 'react';

import { IUser } from 'modules/sessions/interfaces/login.interfaces';
import { useSideEffects } from 'shared/hooks/useSideEffects';
import { IUserRepository } from '../ILoginRepository';

export const useLoginRepository = (): IUserRepository => {
  const [data, setData] = useState<IUser[]>([]);
  const { create } = useSideEffects<IUser>(setData);

  return {
    data: data.pop(),
    create,
  };
};
