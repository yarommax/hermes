import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CargoEntity, CreateCargoDto } from './interfaces';
import { Model } from 'mongoose';
import { Cargo } from '../../client/src/app/shared/interfaces';
import { CrFilter } from './interfaces/cargo-filter';

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
    // tslint:disable-next-line:no-duplicate-string
    return await this.cargoModel.find({}).sort('-timeStamp').exec();
  }

  async getUserCargo(userId) {
    return await this.cargoModel.find({ userId: { $eq: userId } }).sort('-timeStamp').exec();
  }

  async getCargoById(id) {
    return await this.cargoModel.findById(id);
  }

  async getFilteredCargo(conditions: CrFilter) {
    console.log(conditions);
    const filter: CrFilter = {};
    for (const c in conditions) {
      if (conditions[c]) {
        filter[c] = conditions[c];
      }
    }
    return await this.cargoModel.find(filter).sort('-timeStamp').exec();
  }
}
