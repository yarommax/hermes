import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransportDto, TransportEntity, TrFilter } from './interfaces';
import { Model } from 'mongoose';

@Injectable()
export class TransportService {
  constructor(
    @InjectModel('Transport') private readonly transportModel: Model<TransportEntity>,
  ) {}

  async createNewTransport(transport: CreateTransportDto): Promise<TransportEntity> {
    const newTransport = new this.transportModel(transport);
    // добавить валидацию полей на бэке
    return await newTransport.save();
  }

  async getAllTransport() {
    return await this.transportModel.find({}).sort('-timeStamp');
  }

  async getUserTransport(userId) {
    return await this.transportModel.find({ userId: { $eq: userId } });
  }

  async getById(id) {
    return await this.transportModel.findById(id);
  }

  async getFilteredTransport(conditions) {
    const filter = {};
    for (const c in conditions) {
      if (conditions[c]) {
        filter[c] = conditions[c];
      }
    }

    return await this.transportModel.find(filter);
  }
}
