import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from 'nestjs-config';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import morgan = require('morgan');
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config: ConfigService = app.get('ConfigService');

  const options = new DocumentBuilder()
      .setTitle('Hermes auto')
      .setDescription('The hermes auto')
      .setVersion('1.0')
      .addTag('hermes')
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(express.static('client/dist/client'));
  await app.listen(config.get('app.port'));
}
bootstrap();
