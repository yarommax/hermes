import { Document } from 'mongoose';

export interface UserEntity extends Document {
  email: string;
  username: string;
  password: string;
  companyName: string;
  contactPersonName: string;
  contactSkype: string;
  contactTelephone: string;
}
