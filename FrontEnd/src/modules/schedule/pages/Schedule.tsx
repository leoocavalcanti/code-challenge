import { Flex } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { SearchBar } from 'shared/components/molecules/SearchBar/SearchBar';

import { ScheduleCard } from '../components/ScheduleCard/ScheduleCard';
import { useHandleSchedule } from '../handlers/schedule.handlers';
import { useSchedule } from '../hooks/useSchedule';
import { type ISchedule } from '../interfaces/schedule.interfaces';

export const Schedule = () => {
  const { schedules, listSchedule, status } = useSchedule();
  const { handleSchedule } = useHandleSchedule();
  const [search, setSearch] = useState('');
  const [filteredSchedules, setFilteredSchedules] = useState<ISchedule[]>([]);

  const loadCategories = useCallback(
    (p = 1) => {
      listSchedule({ page: p });
    },
    [listSchedule]
  );

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  useEffect(() => {
    const filtered = schedules.filter(schedule =>
      schedule.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSchedules(filtered);
  }, [search, schedules]);

  return (
    <Flex gap="8px" flexDirection="column">
      <SearchBar
        placeholder="Pesquise por nome ou local da agenda"
        isSearching={status === 'searching'}
        onChange={(value: string) => {
          setSearch(value);
        }}
      />
      {filteredSchedules.map(schedule => (
        <ScheduleCard data={handleSchedule(schedule)} />
      ))}
    </Flex>
  );
};
