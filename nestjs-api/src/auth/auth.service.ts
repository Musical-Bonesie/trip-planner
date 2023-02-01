import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
//Service/Provider handles the business logic

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // Business logic:
  signup() {
    return { msg: 'I am signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
