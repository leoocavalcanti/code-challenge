import BaseModel from 'App/Shared/Models/BaseModel'
import { beforeSave, column, ModelQueryBuilderContract, scope } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Tag extends BaseModel {
    public static table = 'tags'

     /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   * - column typing struct
   */
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public color: string

  @column({ serializeAs: null })
  public is_deleted: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updated_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public deleted_at: DateTime
}