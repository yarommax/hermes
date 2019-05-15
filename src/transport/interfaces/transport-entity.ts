import { Document } from 'mongoose';

export interface TransportEntity extends Document {
  // time and place
  loadingDate: Date;
  dischargeDate: Date;
  loadingPoint: string;
  readonly dischargePoint: string;

  // Type of transport
  typeTransport: string;
  amountTransport: number;
  loadCapacity: number;

  // company contacts
  companyName: string;
  contactPersonName: string;
  contactEmail: string;
  contactSkype: string;
  contactTelephone: string;

  // stamp
  timeStamp: Date;
  userStamp: string;
  userId: string;
}
