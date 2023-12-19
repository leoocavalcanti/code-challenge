import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { ScheduleServices } from 'App/Modules/Schedules/Services' 

export default class extends BaseSchema {
  public async up() {
    const scheduleServices = container.resolve(ScheduleServices)
    await scheduleServices.storeDefault()
  }

  public async down() {
    this.schema.raw('truncate table schedules restart identity cascade;')
  }
}
