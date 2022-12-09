import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token, TokenDocument } from 'src/common/entity/token.entity';

@Injectable()
export class TokenService {
    constructor(@InjectModel(Token.name) private tokenModel: Model<TokenDocument>) {}

    async findOne(token:string):  Promise<Token>{
        return await this.tokenModel.findOne({ token });
    }
}
