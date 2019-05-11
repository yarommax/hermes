import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CargoEntity, CreateCargoDto } from './interfaces';
import { Model } from 'mongoose';

@Injectable()
export class CargoService {
  constructor(
    @InjectModel('Cargo') private readonly cargoModel: Model<CargoEntity>,
  ) {}

  async createNewCargo(cargo: CreateCargoDto): Promise<CargoEntity> {
    const newCargo = new this.cargoModel(cargo);
    // добавить валидацию полей на бэке
    return await newCargo.save();
  }

  async getAllCargo() {
    return await this.cargoModel.find({});
  }
}
