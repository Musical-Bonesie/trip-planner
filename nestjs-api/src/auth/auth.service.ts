import { Injectable } from '@nestjs/common';
//Service/Provider handles the business logic

@Injectable({})
export class AuthService {
  // Business logic:
  signup() {
    return { msg: 'I am signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
