import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register } from './schema/register.model';
import { RegisterSchema } from './schema/register.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
