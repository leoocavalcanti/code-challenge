import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import Logger from '@ioc:Adonis/Core/Logger'

export default class extends BaseSchema {
  protected tableName = 'users_roles'

  public async up() {
    if (!(await this.schema.hasTable(this.tableName)))
      this.schema.createTable(this.tableName, (table) => {
        table.integer('id').unsigned().primary().index('users_roles_id_index') 

        table
          .integer('user_id')
          .references('id')
          .inTable('users')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table
          .integer('role_id')
          .references('id')
          .inTable('roles')
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

        table.timestamp('created_at', { useTz: true }).defaultTo('now()')
        table.timestamp('updated_at', { useTz: true }).defaultTo('now()')
      })
    else Logger.info('UsersRoles migration already running')
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
