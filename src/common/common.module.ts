import { MiddlewareConsumer, Module, OnModuleInit, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule, PinoLogger } from 'nestjs-pino';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from "@nestjs/config";
import { AccountUser, AccountUserSchema } from './entity/account-user.entity';
import { Account, AccountSchema } from './entity/account.entity';
import { Token, TokenSchema } from './entity/token.entity';
import { Encryptor } from './utils/encryptor/encryptor';
import { TokenService } from '../modules/account/token/token.service';
import { AccountProject, AccountProjectSchema } from './entity/account-project.entity';
import { Key, KeySchema } from './entity/key.entity';
import { AnalyticsEvent, AnalyticsEventSchema } from './entity/analytics-event.entity';
import { AnalyticsUser, AnalyticsUserSchema } from './entity/analytics-user.entity';
import { KeyService } from 'src/modules/account/key/key.service';
import { AccountProjectService } from 'src/modules/account/account-project/account-project.service';
import { KeyInterceptor } from './middleware/key.interceptor';
import { Transformer } from './utils/transformer/transformer';
import { ProjectSurvey, ProjectSurveySchema } from './entity/project-survey.entity';
import { SurveyResponse, SurveyResponseSchema } from './entity/survey-response.entity';
import { AwsSqsModule } from './aws-sqs/aws-sqs.module';
import { AwsSqsService } from './aws-sqs/aws-sqs.service';
import { Properties, PropertiesSchema } from './entity/properties.entity';
import { ClusterModule } from './cluster/cluster.module';
import { DistinctEvents, DistinctEventsSchema } from './entity/distinct-event.entity';

@Module({
    imports: [
        LoggerModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                pinoHttp: [
                    {
                        name: 'add some name to every JSON line',
                        level: configService.get<string>('NODE_ENV') !== 'production' ? 'debug' : 'info',
                        transport: configService.get<string>('NODE_ENV') !== 'production'
                            ? { target: 'pino-pretty' }
                            : undefined,
                        useLevelLabels: true,
                    },
                ],
            }),
            inject: [ConfigService]
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('DB_URI'),
            }),
            inject: [ConfigService]
        }),
        MongooseModule.forFeature([{
            name: Account.name,
            schema: AccountSchema
        }, {
            name: AccountUser.name,
            schema: AccountUserSchema
        }, {
            name: Token.name,
            schema: TokenSchema
        },  {
            name: AccountProject.name,
            schema: AccountProjectSchema
        }, {
            name: Key.name,
            schema: KeySchema
        }, {
            name: AnalyticsEvent.name,
            schema: AnalyticsEventSchema
        }, {
            name: AnalyticsUser.name,
            schema: AnalyticsUserSchema
        }, {
            name: SurveyResponse.name,
            schema: SurveyResponseSchema
        }, {
            name: ProjectSurvey.name,
            schema: ProjectSurveySchema
        },{
            name: Properties.name,
            schema: PropertiesSchema
        },{
            name: DistinctEvents.name,
            schema: DistinctEventsSchema
        }]),
        AwsSqsModule,
        ClusterModule,
    ],
    exports: [PinoLogger, LoggerModule, MongooseModule, KeyInterceptor, KeyService, Encryptor, Transformer, AccountProjectService, AwsSqsService],
    providers: [PinoLogger, Encryptor, KeyInterceptor, TokenService, KeyService, Transformer, AccountProjectService, AwsSqsService],
})

export class CommonModule implements OnModuleInit {
    configure(consumer: MiddlewareConsumer): void {}

    constructor(private configService: ConfigService) { }

    onModuleInit() {
        new Encryptor(this.configService.get<string>('ENCRYPT_ALGORITHM'), this.configService.get<string>('ENCRYPT_PASSWORD'), this.configService.get<string>('ENCRYPT_SALT'));
    }
}