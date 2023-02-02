import { Injectable } from '@nestjs/common';
//Service/Provider handles the business logic

const placeholderData = {
  hawaii: {
    notes: 'notes',
    placesToVisit: [
      {
        locationName: 'Kona International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: './kona-airport.jpg',
        lat: 19.73706746483999,
        lng: -156.04289241605815,
      },
      {
        locationName: 'Diamond Head',
        details:
          'Iconic volcanic peak, home to hiking trails & remains of historical military fortifications.',
        src: './kona-airport.jpg',
        lat: 21.268522566377676,
        lng: -157.8052551867854,
      },
      {
        locationName: 'Magic Sands Beach Park',
        details:
          'Public park with white sand beach and rocky shoreline, offering lifeguard-overseen swimming and surfing',
        src: '',
        lat: 19.60031634990462,
        lng: -155.9715179988575,
      },
    ],
  },
  japan: {
    notes: 'notes',
    placesToVisit: [
      {
        locationName: 'Japan Airport Terminal',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: '',
        lat: 35.77334959759778,
        lng: 140.38346109955782,
      },
      {
        locationName: '“Boso-no-Mura” Historic ambient in Old Chiba',
        details:
          'History museum modeled after a traditional Japanese village offering interactive experience',
        src: '',
        lat: 35.826615603877705,
        lng: 140.2730898828563,
      },
      {
        locationName: 'Swan Village',
        details:
          'Nature walks at wetland rice fields where tundra swans feed and roost between November and February',
        src: './kona-airport.jpg',
        lat: 35.825171156958234,
        lng: 140.2203604573752,
      },
    ],
  },
  canada: {
    notes: 'notes',
    placesToVisit: [
      {
        locationName: 'Vancouver International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: './kona-airport.jpg',
        lat: 49.19670523522321,
        lng: -123.1816625182006,
      },
      {
        locationName: 'Cafe Lokal',
        details: 'Local cafe with tasty treats',
        src: './kona-airport.jpg',
        lat: 49.269140333158674,
        lng: -123.16466254891003,
      },
      {
        locationName: 'Canada Place',
        details: 'Built to look like a ship.',
        src: './kona-airport.jpg',
        lat: 49.29021279021636,
        lng: -123.11158290057625,
      },
    ],
  },
};

@Injectable({})
export class TripService {
  // Business logic to get mock trip data:
  getTrips() {
    return placeholderData;
  }
}
