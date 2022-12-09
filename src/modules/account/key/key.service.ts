import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Key, KeyDocument } from 'src/common/entity/key.entity';

@Injectable()
export class KeyService {
    constructor(@InjectModel(Key.name) private keyModel: Model<KeyDocument>) {}

    async findOne(key:string):  Promise<Key>{
        return await this.keyModel.findOne({ key }).lean();
    }
}
