import axios from "axios";
import { createStore } from "vuex";
import {
  PlacesToVisitObjectType,
  TripInfoDataType,
  placesStateCoorType,
} from "@/shared/types";

export default createStore({
  state: {
    selectedLocation: "" as string,
    tripData: null as null | TripInfoDataType,
    coordinates: [] as number[],
    placesToVisitCoordinates: null as placesStateCoorType | null,
  },
  modules: {},
  getters: {
    getLocationDetails(state) {
      if (state.selectedLocation && state.tripData) {
        return state.tripData[state.selectedLocation];
      }
    },
  },
  mutations: {
    updateSelectedLocation(state, locationName: string) {
      state.selectedLocation = locationName.toLowerCase();
    },
    updateCoordinates(state, coordinates: number[]) {
      state.coordinates.splice(0, 2).push(...coordinates);
    },
    updateTripDetails(state, data) {
      state.tripData = data;
    },
    updatePlacesToVisitCoordinates(state, placesObj: placesStateCoorType) {
      state.placesToVisitCoordinates = placesObj;
    },
  },
  actions: {
    async getTripData({ commit }) {
      try {
        ("getTripData Store");
        const response = await axios.get("/api/trip-details");
        if (response) {
          commit("updateTripDetails", response.data);
          const dataKeys = Object.keys(response.data);
          if (dataKeys.length) {
            if (response.data[dataKeys[0]].placesToVisit.length) {
              const placesCoordinatesObj = {};
              dataKeys.forEach((placeName) => {
                const placesTempObj = { [placeName]: [] as number[][] };
                response.data[placeName].placesToVisit.map(
                  (place: PlacesToVisitObjectType) => {
                    placesTempObj[placeName].push([place.lat, place.lng]);
                  }
                );

                commit(
                  "updatePlacesToVisitCoordinates",
                  Object.assign(placesCoordinatesObj, placesTempObj)
                );
              });
            }
          }
        }
      } catch (error) {
        console.log("store/getTripData() Error:", error);
      }
    },
  },
});
