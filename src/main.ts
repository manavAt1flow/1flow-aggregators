import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from "@nestjs/config";
import { Logger } from 'nestjs-pino';
import { fastifyHelmet } from 'fastify-helmet';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ClusterService } from './common/cluster/cluster.service';
const cron = require('node-cron');
async function bootstrap() {
  // by default fastify has 1mb limit.
  const app: NestFastifyApplication = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.useLogger(app.get(Logger));
  app.enableVersioning();
  app.enableCors({});
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }));
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  const configService = app.get<ConfigService>(ConfigService);

  // cron.schedule('*/1 * * * *', () => {
  //   sqsService.receiveData(eventPropertiesV2.aggregateEvent);
  // });
  
  const swaggerConfig = new DocumentBuilder()
    .setTitle('1Flow Integration')
    .setDescription(`API Endpoint: ${configService.get('APP_URL')}`)
    .addBasicAuth({
      type: 'http',
      scheme: 'basic',
      name: 'auth'
    })
    .addApiKey({
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    })
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT') || 80,'0.0.0.0', (err, address) => {
    if (err) {
      console.log("START SERVER ERROR", err);
    }
    console.log("SERVER ADDRESS", address);
  });
}

// ClusterService.clusterize(bootstrap);
bootstrap();
