import { Flex } from '@chakra-ui/react';
import { SearchBar } from 'shared/components/molecules/SearchBar/SearchBar';
import { useCallback, useEffect, useState } from 'react';
import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';
import { useSchedule } from '../hooks/useSchedule';
import { useHandleSchedule } from '../handlers/schedule.handlers';

export const Schedule = () => {
  const { schedules, listSchedule, status } = useSchedule();
  const { handleSchedule } = useHandleSchedule();
  const [search, setSearch] = useState<string>();

  const loadCategories = useCallback(
    (p = 1) => {
      listSchedule({ page: p });
    },
    [listSchedule]
  );

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <Flex gap="8px" flexDirection="column">
      <SearchBar
        placeholder="Pesquise por nome ou local da agenda"
        isSearching={status === 'searching'}
        onChange={(value: string) => setSearch(value)}
      />
      {schedules.map(schedule => (
        <ScheduleCard data={handleSchedule(schedule)} />
      ))}
    </Flex>
  );
};
