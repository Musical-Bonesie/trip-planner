import { Controller, Get } from '@nestjs/common';
import { TripService } from './trip.service';

// Controller receives/handles the req.
// Then it calls a function from auth.service, instantiates it, then and returns info back to browser.

// pass a global prefix route in @Controller 'auth'
@Controller('api')
export class TripController {
  constructor(private tripService: TripService) {}
  // Create 2 POST endpoints:

  @Get('trip-details')
  getTrips() {
    return this.tripService.getTrips();
  }
}
