import { Module } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CargoController } from './cargo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CargoSchema } from './interfaces';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cargo', schema: CargoSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  providers: [CargoService],
  controllers: [CargoController],
})
export class CargoModule {}
