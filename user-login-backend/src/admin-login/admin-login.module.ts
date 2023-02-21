import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterAdminSchema } from 'src/schema/admin-register.model';
import { AdminLoginController } from './admin-login.controller';
import { AdminLoginService } from './admin-login.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AdminRegister', schema: RegisterAdminSchema },
    ]),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [AdminLoginController],
  providers: [AdminLoginService],
})
export class AdminLoginModule {}
