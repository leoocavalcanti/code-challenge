import { ITag } from 'modules/schedule/interfaces/schedule.interfaces';
import { User } from 'modules/sessions/interfaces/login.interfaces';

export type ScheduleCardProps = {
  data: {
    day: string;
    startTime: string;
    endTime: string;
    tags: ITag[];
    place: string;
    title: string;
    users: User[];
  };
};
