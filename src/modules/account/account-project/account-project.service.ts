import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountProject, AccountProjectDocument } from '../../../common/entity/account-project.entity';

@Injectable()
export class AccountProjectService {
    constructor(@InjectModel(AccountProject.name) private accountProjectModel: Model<AccountProjectDocument>) {}

    async findById(id:any):  Promise<AccountProject>{
        return await this.accountProjectModel.findById(id);
    }
}
