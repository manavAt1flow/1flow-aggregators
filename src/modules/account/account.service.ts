import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Account, AccountDocument } from "../../common/entity/account.entity";

@Injectable()
export class AccountService {
    constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

    async create(account: Account):  Promise<Account>{
        const newAccount = new this.accountModel(account);
        return newAccount.save();
    }

    async findAll():  Promise<Account[]>{
        return await this.accountModel.find({});
    }
}
