import { IBaseRepository } from 'shared/interfaces/IBaseRepository';
import { ISchedule } from '../interfaces/schedule.interfaces';

export interface IScheduleRepository extends IBaseRepository<ISchedule> {
  data: ISchedule[];
}
