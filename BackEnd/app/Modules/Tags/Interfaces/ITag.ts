import BaseInterface from 'App/Shared/Interfaces/BaseInterface'
import Tag from '../Models/Tag'

export namespace ITag {
    export interface Repository extends BaseInterface<typeof Tag>, Helpers {}

    export interface Helpers {}

    export namespace DTOs {
        export type Store = {
            title: string
            color: string
        }
    }
}