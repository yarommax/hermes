import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String },
  password: { type: String },
});
