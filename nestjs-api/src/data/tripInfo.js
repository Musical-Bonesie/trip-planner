// This place holder data represents a pre-made itinerary
const images = require.context('./images', true, /\.jpg$/);

// const tripInfo = {
//   tripName(object key is the tripName the user gives): {
//     notes: "notes",
//     plan: [
//       {
//         locationName: "Kona Internation Airport",
//         details:
//           "Small hub serving Hawaiian island domestic and global flights",
//         src: images("./kona-airport.png"),
//         lat: 19.73706746483999,
//         lng: -156.04289241605815,
//       },
//     ],
//   },
// };

export const tripInfo = {
  hawaii: {
    notes: 'notes',
    placesToVisit: [
      {
        locationName: 'Kona International Airport',
        details:
          'Small hub serving Hawaiian island domestic and global flights',
        src: images('./kona-airport.jpg'),
        lat: 19.73706746483999,
        lng: -156.04289241605815,
      },
      {
        locationName: 'Magic Sands Beach Park',
        details:
          'Volcano rising 8,271 feet above sea level, with some areas open for moderate hikes & exploration.',
        src: images('./kona-airport.jpg'),
        lat: 19.695442474030024,
        lng: -155.86390747524925,
      },
      {
        locationName: 'Magic Sands Beach Park',
        details:
          'Public park with white sand beach and rocky shoreline, offering lifeguard-overseen swimming and surfing',
        src: images('./kona-airport.jpg'),
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
        src: images('./kona-airport.jpg'),
        lat: 35.77334959759778,
        lng: 140.38346109955782,
      },
      {
        locationName: '“Boso-no-Mura” Historic ambient in Old Chiba',
        details:
          'History museum modeled after a traditional Japanese village offering interactive experience',
        src: images('./kona-airport.jpg'),
        lat: 35.826615603877705,
        lng: 140.2730898828563,
      },
      {
        locationName: 'Swan Village',
        details:
          'Nature walks at wetland rice fields where tundra swans feed and roost between November and February',
        src: images('./kona-airport.jpg'),
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
        src: images('./kona-airport.jpg'),
        lat: 49.19670523522321,
        lng: -123.1816625182006,
      },
      {
        locationName: 'Cafe Lokal',
        details: 'Local cafe with tasty treats',
        src: images('./kona-airport.jpg'),
        lat: 49.269140333158674,
        lng: -123.16466254891003,
      },
      {
        locationName: 'Canada Place',
        details: 'Built to look like a ship.',
        src: images('./kona-airport.jpg'),
        lat: 49.29021279021636,
        lng: -123.11158290057625,
      },
    ],
  },
};

export default tripInfo;
