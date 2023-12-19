import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { container } from 'tsyringe'

import { TagServices } from 'App/Modules/Tags/Services' 

export default class extends BaseSchema {
  public async up() {
    const tagServices = container.resolve(TagServices)
    await tagServices.storeDefault()
  }

  public async down() {
    this.schema.raw('truncate table tags restart identity cascade;')
  }
}
