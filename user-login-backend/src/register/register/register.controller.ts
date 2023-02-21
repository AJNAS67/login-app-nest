import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { RegisterService } from './register.service';
import { JwtService } from '@nestjs/jwt';
import { get } from 'http';
@Controller('api')
export class RegisterController {
  constructor(
    private readonly registerService: RegisterService,
    private jwtService: JwtService,
  ) {}
  @Post('register')
  async registerUser(
    @Body('username') username: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log(username, 'username');
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.registerService.insertProduct(
      username,
      email,
      hashedPassword,
    );
    console.log(user, 'user');
    delete user['password'];
    if (user.status) {
      return { message: 'Successfully Registerd', isAdded: true };
    } else {
      return { message: 'Email alredy exist', isAdded: false };
    }
  }
  @Post('login')
  async userLogin(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.registerService.findOne({ email });
    if (!user) {
      console.log('no user');
      return { message: 'Email address is not Exist', status: false };

      // throw new BadRequestException('Invalid user');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      // throw new BadRequestException('Password is incorrect');
      return { message: 'Password is incorrect', status: false };
    }
    console.log('have user');

    const jwt = await this.jwtService.signAsync({ id: user.id,name:user.username });
    response.cookie('jwt', jwt);
    console.log(jwt, 'jt');
    return { message: 'Login success fully', status: true, token: jwt };
  }
  // @Get('user'){
  //   async user(@Req() request:Request){I

  //   }
  // }
  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      console.log(cookie, 'cookie');

      const data = await this.jwtService.verifyAsync(cookie);
      console.log(data, 'dara');

      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.registerService.findOne({ id: data['id'] });
      // remove password from user
      const { password, ...result } = user;
      console.log(user);

      return result;
    } catch (error) {
      console.log('errrrrrrrrr');

      throw new UnauthorizedException();
    }
  }
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return 'susses';
  }
  @Get('all-users')
  async getAll() {
    const result = await this.registerService.getAll();
    console.log(result, 'resultresult');

    return result;
  }
}
