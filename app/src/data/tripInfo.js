// This place holder data represents a pre-made itinerary
const images = require.context("../assets/images", true, /\.jpg$/);

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

const tripInfo = {
  hawaii: {
    notes: "notes",
    plan: [
      {
        locationName: "Kona International Airport",
        details:
          "Small hub serving Hawaiian island domestic and global flights",
        src: images("./kona-airport.jpg"),
        lat: 19.73706746483999,
        lng: -156.04289241605815,
      },
      {
        locationName: "Magic Sands Beach Park",
        details:
          "Volcano rising 8,271 feet above sea level, with some areas open for moderate hikes & exploration.",
        src: images("./kona-airport.jpg"),
        lat: 19.695442474030024,
        lng: -155.86390747524925,
      },
      {
        locationName: "Magic Sands Beach Park",
        details:
          "Pubplic park with white sand bech and rocky shoreline, offering lifeguard-overseen swimming and surfing",
        src: images("./kona-airport.jpg"),
        lat: 19.60031634990462,
        lng: -155.9715179988575,
      },
    ],
  },
};

export default tripInfo;
