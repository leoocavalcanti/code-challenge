import { ISchedule } from 'modules/schedule/interfaces/schedule.interfaces';
import { useState } from 'react';

import { useSideEffects } from 'shared/hooks/useSideEffects';
import { IScheduleRepository } from '../IScheduleRepository';

export const useScheduleRepository = (): IScheduleRepository => {
  const [data, setData] = useState<ISchedule[]>([]);
  const { appendList, replaceList } = useSideEffects<ISchedule>(setData);

  return {
    data,
    appendList,
    replaceList,
  };
};
