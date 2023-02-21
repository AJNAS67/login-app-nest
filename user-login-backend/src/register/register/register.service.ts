import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IRegister } from 'src/interfaces/register.interface';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto } from 'src/user.Dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('Register') private readonly RegisterModel: Model<IRegister>,
  ) {}

  async insertProduct(name: string, email: string, password: string) {
    try {
      const newRegister = new this.RegisterModel({
        username: name,
        email,
        password,
      });
      const result = await newRegister.save();
      console.log(result, 'resultresult');

      console.log(name, 'name');
      return { result: result, status: true };
    } catch (error) {
      return { result: error.message, status: false };
      // console.log(error.message);
    }
  }
  async findOne(contition: any) {
    return this.RegisterModel.findOne(contition);
  }
  async getAll() {
    return await this.RegisterModel.find().exec()
  }
}
