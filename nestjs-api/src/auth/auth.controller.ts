import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginAuthDto } from './dto';

// Controller receives/handles the req.
// Then it calls a function from auth.service, instantiates it, then and returns info back to browser.

// pass a global prefix route in @Controller 'auth'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // Create 2 POST endpoints:

  @Post('signup')
  // POST req will be auth/signup
  //*Note: you can access express  decorators @   ex/ signup(@Body() dto: SomeType)
  // *  Advantage of using @Body is no matter the framework, express will return the body based on the given TypeScript interface.
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
