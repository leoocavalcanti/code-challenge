import { AxiosResponse } from 'axios';

export type IListAPI<T> = Promise<
  AxiosResponse<{
    data: T[];
    meta: {
      current_page: number;
      last_page: number;
      total?: number;
    };
  }>
>;

export type IListDTO = {
  page: number;
  perPage?: number;
  search?: string;
};
