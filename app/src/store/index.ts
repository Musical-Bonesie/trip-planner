import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    selectedLocation: "",
    tripData: null,
    coordinates: [] as number[],
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
    updateTripDetails(state, tripData) {
      state.tripData = tripData;
    },
  },
  actions: {
    async getTripData({ commit }) {
      try {
        const response = await axios.get("/api/trip-details");
        if (response) {
          commit("updateTripDetails", response.data);
        }
      } catch (error) {
        console.log("store/getTripData() Error:", error);
      }
    },
  },
});
