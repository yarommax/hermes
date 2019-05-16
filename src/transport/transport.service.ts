import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransportDto, TransportEntity } from './interfaces';
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
    return await this.transportModel.find({});
  }

  async getUserTransport(userId) {
    return await this.transportModel.find({ userId: { $eq: userId } });
  }

  async getById(id) {
    return await this.transportModel.findById({ _id : id });
  }
}
