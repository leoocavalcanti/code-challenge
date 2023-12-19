import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import Schedule from '../Models/Schedule'
import { DateTime } from 'luxon'

type ScheduleDefaultType = ModelType<typeof Schedule> & { tagIds: Array<number> } & {
  userIds: Array<number>
}

export const SchedulesDefault: Array<ModelType<typeof ScheduleDefaultType>> = [
  {
    title: 'Desafio Support Guy',
    place: 'GitHub',
    start_time: DateTime.fromISO('2023-05-10T08:00:00').toSQL(),
    end_time: DateTime.fromISO('2023-05-10T23:00:00').toSQL(),
    tagIds: [3],
    userIds: [3, 4, 5],
  },
  {
    title: 'Festinha Dev Yazo',
    place: 'Londrina',
    start_time: DateTime.fromISO('2023-06-22T16:00:00').toSQL(),
    end_time: DateTime.fromISO('2023-06-22T22:00:00').toSQL(),
    tagIds: [1, 2, 3],
    userIds: [2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    title: 'Rockets',
    place: 'Internet',
    start_time: DateTime.fromISO('2023-06-22T09:00:00').toSQL(),
    end_time: DateTime.fromISO('2023-06-22T10:00:00').toSQL(),
    tagIds: [1],
    userIds: [3, 4, 5, 7, 8, 9, 10],
  },
]
