import { APIStatus, useApiStatus } from 'shared/hooks/useApiStatus';
import { ISchedule } from '../interfaces/schedule.interfaces';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';
import { useScheduleRepository } from '../repositories/implementations/schedule.repository';
import { useListScheduleController } from '../useCases/schedule/ListSchedule/ListSchedule.controller';
import { usePagination } from 'shared/hooks/usePagination';

export type UseScheduleData = {
  status: APIStatus;
  page: number;
  lastPage: number;
  schedules: ISchedule[];
  listSchedule: ({ page, search }: IListScheduleDTO) => IListScheduleAPI;
};
export const useSchedule = (): UseScheduleData => {
  const { changeStatus, status } = useApiStatus();
  const { replacePagination, page, lastPage } = usePagination();
  const repository = useScheduleRepository();

  const listController = useListScheduleController({
    repository,
    changeStatus,
    replacePagination,
  });

  return {
    status,
    page,
    lastPage,
    schedules: repository.data,
    listSchedule: listController.handle,
  };
};
