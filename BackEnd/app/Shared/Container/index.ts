import { container, delay } from 'tsyringe'

import { IRole } from 'App/Modules/Accounts/Interfaces/IRole'
import RolesRepository from 'App/Modules/Accounts/Repositories/RolesRepository'

import { IUser } from 'App/Modules/Accounts/Interfaces/IUser'
import UsersRepository from 'App/Modules/Accounts/Repositories/UsersRepository'

import { ITag } from 'App/Modules/Tags/Interfaces/ITag'
import TagsRepository from 'App/Modules/Tags/Repositories/TagsRepository'

import { ISchedule } from 'App/Modules/Schedules/Interfaces/ISchedule'
import SchedulesRepository from 'App/Modules/Schedules/Repositories/SchedulesRepository'

container.registerSingleton<IRole.Repository>(
  'RolesRepository',
  delay(() => RolesRepository)
)

container.registerSingleton<IUser.Repository>(
  'UsersRepository',
  delay(() => UsersRepository)
)

container.registerSingleton<ITag.Repository>(
  'TagsRepository',
  delay(() => TagsRepository)
)

container.registerSingleton<ISchedule.Repository>(
  'SchedulesRepository',
  delay(() => SchedulesRepository)
)
