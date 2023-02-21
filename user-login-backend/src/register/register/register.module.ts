import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from 'src/schema/register.model';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Register', schema: RegisterSchema }]),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
