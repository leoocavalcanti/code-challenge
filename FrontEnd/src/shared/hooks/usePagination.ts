import { useCallback, useState } from 'react';

export interface PaginationData {
  page: number;
  lastPage: number;
}

export type ReplacePaginationFunction = (
  paginationData: PaginationData
) => void;

export const usePagination = () => {
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    lastPage: 1,
  });

  const replacePagination = useCallback((paginationData: PaginationData) => {
    setPagination(paginationData);
  }, []);

  return {
    page: pagination.page,
    lastPage: pagination.lastPage,
    replacePagination,
  };
};
