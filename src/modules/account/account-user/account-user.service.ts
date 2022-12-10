import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountUser, AccountUserDocument } from '../../../common/entity/account-user.entity';

@Injectable()
export class AccountUserService {
    constructor(@InjectModel(AccountUser.name) private accountUserModel: Model<AccountUserDocument>) { }

    async create(account: AccountUser): Promise<AccountUser> {
        const newAccount = new this.accountUserModel(account);
        return newAccount.save();
    }

    async findAll(): Promise<AccountUser[]> {
        return await this.accountUserModel.find({});
    }
}
