import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Trips = {
  hawaii: {
    notes: 'notes',
    createdBy: 1,
    userId: 1,
    placesToVisit: [
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Kona International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: '',
        lat: 19.73706746483999,
        lng: -156.04289241605815,
      },
      {
        reatedBy: 1,
        tripId: 1,
        locationName: 'Magic Sands Beach Park',
        details:
          'Volcano rising 8,271 feet above sea level, with some areas open for moderate hikes & exploration.',
        src: '',
        lat: 19.695442474030024,
        lng: -155.86390747524925,
      },
      {
        reatedBy: 1,
        tripId: 1,
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
    createdBy: 1,
    userId: 1,
    placesToVisit: [
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Japan Airport Terminal',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: '',
        lat: 35.77334959759778,
        lng: 140.38346109955782,
      },
      {
        createdBy: 1,
        tripId: 1,
        locationName: '“Boso-no-Mura” Historic ambient in Old Chiba',
        details:
          'History museum modeled after a traditional Japanese village offering interactive experience',
        src: '',
        lat: 35.826615603877705,
        lng: 140.2730898828563,
      },
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Swan Village',
        details:
          'Nature walks at wetland rice fields where tundra swans feed and roost between November and February',
        src: '',
        lat: 35.825171156958234,
        lng: 140.2203604573752,
      },
    ],
  },
  canada: {
    notes: 'notes',
    createdBy: 1,
    userId: 1,
    placesToVisit: [
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Vancouver International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: '',
        lat: 49.19670523522321,
        lng: -123.1816625182006,
      },
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Cafe Lokal',
        details: 'Local cafe with tasty treats',
        src: '',
        lat: 49.269140333158674,
        lng: -123.16466254891003,
      },
      {
        createdBy: 1,
        tripId: 1,
        locationName: 'Canada Place',
        details: 'Built to look like a ship.',
        src: '',
        lat: 49.29021279021636,
        lng: -123.11158290057625,
      },
    ],
  },
};

// TODO create proper seed file: https://blog.sethcorker.com/question/how-do-you-seed-a-database-with-prisma/
function seedTrips() {
  Promise.all(
    Trips.map((trip, index) =>
      prisma.trips.create({
        data: {
          tripName: Object.keys(Trips)[index],
          createdBy: trip.createdBy,
          tripId: trip.tripId,
          locationName: trip.locationName,
          details: trip.details,
          src: trip.src,
          lat: trip.lat,
          lng: trip.lng,
        },
      }),
    ),
  )
    .then(() => console.info('[SEED] Succussfully create coffee records'))
    .catch((e) => console.error('[SEED] Failed to create coffee records', e));
}

seedTrips();
