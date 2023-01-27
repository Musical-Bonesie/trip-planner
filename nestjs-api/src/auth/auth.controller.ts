import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// Controller receives/handles the req.
// Then it calls a function from auth.service, instantiates it, then and returns info back to browser.

// pass a global prefix route in @Controller 'auth'
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // Create 2 POST endpoints:

  @Post('signup')
  // POST req will be auth/signiu[]
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
