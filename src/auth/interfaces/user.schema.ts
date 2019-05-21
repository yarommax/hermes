import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String },
  password: { type: String },
  companyName: { type: String },
  contactPersonName: { type: String },
  contactSkype: { type: String },
  contactTelephone: { type: String },
});
