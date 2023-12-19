import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class extends BaseSchema {
  protected tableName = 'tags'

  public async up () {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.increments('id').unsigned().primary().index('tag_id_index')

        table.string('title', 40).notNullable()
        table.string('color', 40).notNullable()

        table.boolean('is_deleted').notNullable().defaultTo(false) 

        table.timestamp('deleted_at', { useTz: true }).defaultTo(null)

        /**
         * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
         */
        table.timestamp('created_at', { useTz: true })
        table.timestamp('updated_at', { useTz: true })
    })
    else Logger.info('Tags migration already running')
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
