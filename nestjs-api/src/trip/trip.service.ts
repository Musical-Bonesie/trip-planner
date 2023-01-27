import { Injectable } from '@nestjs/common';
//Service/Provider handles the business logic

@Injectable({})
export class TripService {
  // Business logic to get mock trip data:
  getTrips() {
    return {
      hawaii: {
        notes: 'notes',
        placesToVisit: [
          {
            locationName: 'Kona International Airport',
            details:
              'Small hub serving Hawaiian island domestic and global flights',

            lat: 19.73706746483999,
            lng: -156.04289241605815,
          },
          {
            locationName: 'Magic Sands Beach Park',
            details:
              'Volcano rising 8,271 feet above sea level, with some areas open for moderate hikes & exploration.',

            lat: 19.695442474030024,
            lng: -155.86390747524925,
          },
          {
            locationName: 'Magic Sands Beach Park',
            details:
              'Public park with white sand beach and rocky shoreline, offering lifeguard-overseen swimming and surfing',

            lat: 19.60031634990462,
            lng: -155.9715179988575,
          },
        ],
      },
    };
  }
}
