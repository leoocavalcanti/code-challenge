import { api } from 'shared/services/api';
import {
  IListScheduleAPI,
  IListScheduleDTO,
} from '../interfaces/dtos/schedule.list.dtos';

export const listScheduleAPI = ({
  page
}: IListScheduleDTO): IListScheduleAPI =>
  api.get('schedules', {
    params: {
      page
    },
  });
