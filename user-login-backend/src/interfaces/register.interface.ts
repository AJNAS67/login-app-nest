import { Document } from 'mongoose';

export interface IRegister extends Document {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  password: string;
}
