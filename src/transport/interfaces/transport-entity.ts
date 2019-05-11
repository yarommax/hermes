import { Document } from 'mongoose';

export interface TransportEntity extends Document {
  // time and place
  dateLoading: Date;
  dateDischarge: Date;
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
}
