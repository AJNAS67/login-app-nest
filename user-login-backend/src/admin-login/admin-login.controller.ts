import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AdminLoginService } from './admin-login.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('admin')
export class AdminLoginController {
  constructor(
    private adminService: AdminLoginService,
    private jwtService: JwtService,
  ) {}
  @Post('admin-register')
  async adminRegister(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);
    const admin = await this.adminService.insertData(email, hashedPassword);

    return { result: admin.result, status: admin.status };
  }
  @Post('login')
  async adminLogin(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const admin = await this.adminService.checkisAdmin({ email });
    console.log(admin, 'admin');

    if (!admin) {
      console.log('no admin');
      return { message: 'Email address is not Exist', status: false };

      // throw new BadRequestException('Invalid admin');
    }
    if (!(await bcrypt.compare(password, admin.password))) {
      // throw new BadRequestException('Password is incorrect');
      return { message: 'Password is incorrect', status: false };
    }
    console.log('have admin');

    const jwt = await this.jwtService.signAsync({ id: admin.id });
    response.cookie('admintoken', jwt);
    console.log(jwt, 'jt');
    return { message: 'Login success fully', status: true, token: jwt };
  }
  // @Get()
  // async getAllUser(){
  //   return await this.registerService.getAll()

  // }
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('admintoken');
    return 'susses';
  }
}
