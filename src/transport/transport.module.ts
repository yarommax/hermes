import { Module } from '@nestjs/common';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportSchema } from './interfaces';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Transport', schema: TransportSchema }]),
  ],
  controllers: [TransportController],
  providers: [TransportService]
})
export class TransportModule {}
