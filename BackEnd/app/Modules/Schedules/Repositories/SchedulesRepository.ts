import BaseRepository from 'App/Shared/Repositories/BaseRepository'
import { ISchedule } from '../Interfaces/ISchedule'
import Schedule from '../Models/Schedule'

export default class SchedulesRepository 
extends BaseRepository<typeof Schedule> 
implements ISchedule.Repository {
    constructor() {
        super(Schedule)
    }
}