import { ModelType } from 'App/Shared/Interfaces/BaseInterface'
import Tag from '../Models/Tag'

export const TagsDefault: Array<ModelType<typeof Tag>> = [
    {
        title: 'Dev',
        color: '#F2A97F'
    },
    {
        title: 'Festinha',
        color: '#BEF493'
    },
    {
        title: 'Desafio',
        color: '#BF4FF3'
    },
]
