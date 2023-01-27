import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, TripModule],
})
export class AppModule {}
