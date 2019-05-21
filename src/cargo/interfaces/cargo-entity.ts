import { Document } from 'mongoose';

export interface CargoEntity extends Document {
  startLoadingDate: Date;
  endLoadingDate: Date;
  loadingPoint: string;
  dischargePoint: string;

  // Type of cargo
  typeCargo: string;
  cargoWeight: number;
  cargoVolume: number;
  typeTransport: string;
  amountTransport: number;

  // company contacts
  companyName: string;
  contactPersonName: string;
  contactEmail: string;
  contactSkype: string;
  contactTelephone: string;

  timeStamp: Date;
  userStamp: string;
  userId?: object;
}
