import { injectable, inject } from 'tsyringe'

import { ISchedule } from '../Interfaces/ISchedule'
import Schedule from '../Models/Schedule'
import { PaginateContractType } from 'App/Shared/Interfaces/BaseInterface'

import { SchedulesDefault } from '../Defaults'

import DTOs = ISchedule.DTOs

@injectable()
export default class ScheduleServices {
    constructor(
        @inject('SchedulesRepository')
        private schedulesRepository: ISchedule.Repository
    ){}

    public async list({
        page = 1,
        perPage = 10,
        search,
    }: DTOs.List): Promise<PaginateContractType<typeof Schedule>> {
        return this.schedulesRepository.listWithPagination({
            page,
            perPage,
            scopes: (scopes) => {
                scopes.searchQueryScope(search)
            }
        })
    }

    public async storeDefault(): Promise<void> {
        for (const data of SchedulesDefault) {
            const {tagIds, userIds, ...scheduleDto} = data
            const schedule = await this.schedulesRepository.store(scheduleDto)
            await schedule.related('tags').attach(tagIds)
            await schedule.related('users').attach(userIds)

        }
    }
}
