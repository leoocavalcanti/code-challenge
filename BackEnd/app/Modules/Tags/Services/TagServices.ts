import { inject, injectable } from 'tsyringe'

import { ITag } from '../Interfaces/ITag'

import {TagsDefault} from '../Defaults'


@injectable()
export default class TagsServices {
    constructor(
        @inject('TagsRepository')
        private tagsRepository: ITag.Repository
    ) {}

    public async storeDefault(): Promise<void> {
        for (const tag of TagsDefault) await this.tagsRepository.store(tag)
    }
}