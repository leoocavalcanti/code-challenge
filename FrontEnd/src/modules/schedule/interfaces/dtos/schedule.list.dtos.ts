import { IListAPI, IListDTO } from 'shared/interfaces/dtos/list.dto';
import { ISchedule } from '../schedule.interfaces';

export type IListScheduleDTO = IListDTO;

export type IListScheduleAPI = Promise<ISchedule | IListAPI<ISchedule[]>>;
