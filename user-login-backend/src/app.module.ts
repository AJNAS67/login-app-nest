import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './register/register/register.module';
import { AdminLoginController } from './admin-login/admin-login.controller';
import { AdminLoginService } from './admin-login/admin-login.service';
import { AdminLoginModule } from './admin-login/admin-login.module';

@Module({
  imports: [
    RegisterModule,
    MongooseModule.forRoot('mongodb://localhost:27017/token'),
    AdminLoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
