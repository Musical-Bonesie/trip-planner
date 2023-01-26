import { createStore } from "vuex";

export default createStore({
  state: {
    selectedLocation: "",
    coordinates: [],
  },
  getters: {},
  mutations: {
    updateSelectedLocation(state, locationName: string) {
      state.selectedLocation = locationName.toLowerCase();
    },
    updateCoordinates(state: any, coordinates: number[]) {
      state.coordinates = coordinates;
    },
  },
  actions: {},
  modules: {},
});
