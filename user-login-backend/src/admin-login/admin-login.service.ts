import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterAdmin } from 'src/schema/admin-register.model';

@Injectable()
export class AdminLoginService {
  constructor(
    @InjectModel('AdminRegister')
    private readonly adminRegModel: Model<RegisterAdmin>,
  ) {}

  async insertData(email: string, password: string) {
    try {
      const adminReg = new this.adminRegModel({
        email,
        password,
      });
      const result = await adminReg.save();
      return { result: result, status: true };
    } catch (error) {
      return { result: error.message, status: false };
    }
  }
  async checkisAdmin(email: any) {
    return this.adminRegModel.findOne(email);
  }
}
