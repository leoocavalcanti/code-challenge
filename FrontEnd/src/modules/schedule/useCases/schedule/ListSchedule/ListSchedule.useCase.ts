import { useCallback } from 'react';
import { listScheduleAPI } from 'modules/schedule/apis/schedule.apis';
import { IScheduleRepository } from 'modules/schedule/repositories/IScheduleRepository';
import { IListScheduleDTO } from 'modules/schedule/interfaces/dtos/schedule.list.dtos';

export const useListScheduleUseCase = ({
  appendList,
  replaceList,
}: IScheduleRepository) => {
  const execute = useCallback(
    async ({ page, search }: IListScheduleDTO) => {
      const response = await listScheduleAPI({ page, search });

      if (page > 1) {
        appendList?.(response.data.data);
      } else {
        replaceList?.(response.data.data);
      }

      return response.data;
    },
    [appendList, replaceList]
  );

  return { execute };
};
