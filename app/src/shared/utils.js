export function placesToVisitList(tripNamesArr, tripDataArr) {
  if (tripNamesArr) {
    tripNamesArr.forEach((name) => {
      let placesArray = [];
      let placeNamesObj = { [name]: [] };
      tripDataArr[name].placesToVisit.map((place) =>
        placeNamesObj[name].push(place.locationName)
      );
      placesArray.push(placeNamesObj);
      return placesArray;
    });
  }
}

const object_name = {
  data() {
    return {
      placesArray: [],
    };
  },
  methods: {
    placesToVisitList(tripNamesArr, tripDataArr) {
      if (tripNamesArr) {
        tripNamesArr.forEach((name) => {
          let placesArray = [];
          let placeNamesObj = { [name]: [] };
          tripDataArr[name].placesToVisit.map((place) =>
            placeNamesObj[name].push(place.locationName)
          );
          placesArray.push(placeNamesObj);
        });
      }
    },
  },
  // etc.
};
