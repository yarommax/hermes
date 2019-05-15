import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportSchema } from './interfaces';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transport', schema: TransportSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  controllers: [TransportController],
  providers: [TransportService],
})
export class TransportModule {}
