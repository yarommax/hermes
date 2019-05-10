import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TransportModule } from './transport/transport.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      modifyConfigName: name => name.replace('.config', ''),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('mongo'),
      inject: [ConfigService],
    }),
    AuthModule,
    TransportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
