import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TripsSeedData = [
  {
    id: 1,
    tripName: 'hawaii',
    notes: 'notes',
    createdBy: 1,
    userId: 1,
    connect: { connect: { id: 1 } },
    placesToVisit: [
      {
        id: 1,
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
        id: 2,
        createdBy: 1,
        tripId: 1,
        locationName: 'Diamond Head',
        details:
          'Volcano rising 8,271 feet above sea level, with some areas open for moderate hikes & exploration.',
        src: '',
        lat: 19.695442474030024,
        lng: -155.86390747524925,
      },
      {
        id: 3,
        createdBy: 1,
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
  {
    id: 2,
    tripName: 'japan',
    notes: 'notes',
    createdBy: 1,
    userId: 1,
    connect: { connect: { id: 1 } },
    placesToVisit: [
      {
        tripId: 2,
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
        tripId: 2,
        locationName: 'Swan Village',
        details:
          'Nature walks at wetland rice fields where tundra swans feed and roost between November and February',
        src: '',
        lat: 35.825171156958234,
        lng: 140.2203604573752,
      },
    ],
  },
  {
    id: 3,
    tripName: 'canada',
    notes: 'notes',
    createdBy: 1,
    userId: 1,
    connect: { connect: { id: 1 } },
    placesToVisit: [
      {
        tripId: 3,

        locationName: 'Vancouver International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: '',
        lat: 49.19670523522321,
        lng: -123.1816625182006,
      },
      {
        tripId: 3,

        locationName: 'Cafe Lokal',
        details: 'Local cafe with tasty treats',
        src: '',
        lat: 49.269140333158674,
        lng: -123.16466254891003,
      },
      {
        tripId: 3,

        locationName: 'Canada Place',
        details: 'Built to look like a ship.',
        src: '',
        lat: 49.29021279021636,
        lng: -123.11158290057625,
      },
    ],
  },
];

const UserSeedData = [
  {
    id: 1,
    role: 'ADMIN',
    email: 'seedUser@gmail.com',
    // TODO remmeber to update this
    hash: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NzU0NDM5NTQsImV4cCI6MTY3NTQ0NDg1NH0.ns2XRQ3Z_KhhRJIdnPGHxlX4W1zGe8zr9HmTUEpgY-c',
    firstName: 'Roberta',
    lastName: 'Bondar',
  },
];

// TODO create proper seed file: https://blog.sethcorker.com/question/how-do-you-seed-a-database-with-prisma/
const placesToVisit = (index) => {
  return TripsSeedData[index].placesToVisit.map((place) => {
    return {
      locationName: place.locationName,
      details: place.details,
      src: place.src,
      lat: place.lat,
      lng: place.lng,
    };
  });
};
const trips = TripsSeedData.map((tripDetails, index) => {
  return {
    tripName: tripDetails.tripName,
    notes: tripDetails.notes,
    PlacesToVisit: { create: placesToVisit(index) },
  };
});
function seedUser() {
  Promise.all(
    UserSeedData.map((user) =>
      prisma.user.create({
        data: {
          id: 1,
          role: 'ADMIN',
          email: user.email,
          hash: user.hash,
          firstName: user.firstName,
          lastName: user.lastName,
          trips: { create: trips },
        },
      }),
    ),
  )
    .then(() => console.info('[SEED] Successfully create User records'))
    .catch((e) => console.error('[SEED] Failed to create User records', e));
}

seedUser();

function seedTrips() {
  Promise.all(
    TripsSeedData.map((tripDetails) => {
      prisma.trips.create({
        data: {
          tripName: tripDetails.tripName,
          notes: tripDetails.notes,
          userId: tripDetails.userId,
        },
      });
    }),
  )
    .then(() => console.info('[SEED] Successfully create Trips records'))
    .catch((e) => console.error('[SEED] Failed to create Trips records', e));
}

seedTrips();

function seedPlacesToVisit() {
  Promise.all(
    TripsSeedData.map((tripDetails) => {
      tripDetails.placesToVisit.map((place) => {
        prisma.placesToVisit.create({
          include: { createdBy: true },
          data: {
            tripId: place.tripId,
            locationName: place.locationName,
            details: place.details,
            src: place.src,
            lat: place.lat,
            lng: place.lng,
          },
        });
      });
    }),
  )
    .then(() =>
      console.info('[SEED] Successfully create Places To Visit records'),
    )
    .catch((e) =>
      console.error('[SEED] Failed to create Places To Visit records', e),
    );
}
seedPlacesToVisit();
