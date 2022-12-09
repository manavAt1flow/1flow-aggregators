import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountUserService } from './account-user/account-user.service';
import { TokenService } from './token/token.service';
import { CommonModule } from '../../common/common.module';
import { KeyService } from './key/key.service';
import { AccountProjectService } from './account-project/account-project.service';

@Module({
  imports:[CommonModule],
  providers: [AccountService, AccountUserService, TokenService, KeyService, AccountProjectService],
  exports: [TokenService],
  controllers: []
})
export class AccountModule { }
