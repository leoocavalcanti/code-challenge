import { ITag } from "../Interfaces/ITag";
import Tag from "../Models/Tag";
import BaseRepository from 'App/Shared/Repositories/BaseRepository'

export default class TagsRepository
    extends BaseRepository<typeof Tag>
    implements ITag.Repository
{
    constructor() {
        super(Tag)
    }
}
