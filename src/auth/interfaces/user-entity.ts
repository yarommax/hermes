import { Document } from 'mongoose';

export interface UserEntity extends Document {
  email: string;
  username: string;
  password: string;
}
