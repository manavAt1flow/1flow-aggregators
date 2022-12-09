import { Controller, Get, Logger, Post, Query, Res, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { ApiHeaders } from '@nestjs/swagger';
import { APP_VERSION_V2 } from './app.constant';
import { AppService } from './app.service';
import { KeyService } from './modules/account/key/key.service';

@ApiHeaders([
  {
      name: 'Accept-Version',
      allowEmptyValue: false,
      enum: [APP_VERSION_V2],
      required: true,
  }
])
@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);
  
  constructor(private keyService: KeyService) { }

  @Get('/ping')
  async getHello() {
    return {};
  }
}
