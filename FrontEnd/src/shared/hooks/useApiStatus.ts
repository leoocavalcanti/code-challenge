import { useCallback, useState } from 'react';

export type APIStatus =
  | 'pending'
  | 'paging'
  | 'idle'
  | 'searching'
  | 'error'
  | 'success'
  | 'listSuccess';

export const useApiStatus = () => {
  const [status, setStatus] = useState<APIStatus>('idle');
  const [error, setError] = useState<string | undefined>(undefined);

  const changeStatus = useCallback((newStatus: APIStatus) => {
    setStatus(newStatus);
  }, []);

  return {
    error,
    status,
    setError,
    changeStatus,
  };
};
