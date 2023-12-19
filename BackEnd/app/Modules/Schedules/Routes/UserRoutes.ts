import Route from '@ioc:Adonis/Core/Route'

import SchedulesController from '../Controllers/Http/SchedulesController'

Route.group(() => {
    Route.get('/', new SchedulesController().list).as('schedules.list')
})
    .prefix('schedules')
