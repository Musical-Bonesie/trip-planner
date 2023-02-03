import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  //state the strategy that should be checked with AuthGuard
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe() {
    return 'user info';
  }
}
