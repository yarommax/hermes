import { Module } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CargoController } from './cargo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CargoSchema } from './interfaces';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cargo', schema: CargoSchema }]),
  ],
  providers: [CargoService],
  controllers: [CargoController],
})
export class CargoModule {}
