<template>
  <div>
    <v-expansion-panels variant="popout" class="my-4">
      <v-expansion-panel v-for="(name, index) in tripNames" :key="index">
        <v-expansion-panel-title>
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start">{{ name }}</v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-text-field>
            <p>Trip Notes: {{ userTrips[name].notes }}</p>
            <p>Selected: {{ selectedPlace }}</p>
            <v-container
              fluid
              v-for="place in placesToVisit[name]"
              :key="place"
            >
              <v-checkbox
                v-model="selectedPlace"
                :label="`${place}`"
                :value="`${place}`"
                color="green"
                multiple
                hide-details
              >
              </v-checkbox>
            </v-container>
          </v-text-field> </v-expansion-panel-text
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import store from "@/store";
import { ref, computed } from "vue";

export default {
  name: "ExpansionPanel",
  props: ["trips"],

  setup(props) {
    let tripNames = Object.keys(props.trips ? props.trips : []);
    let placesToVisit = {};
    // TODO: fix checkbox issue with state
    let selectedPlace = [];

    if (tripNames) {
      tripNames.forEach((name) => {
        let tempObj = { [name]: [] };
        props.trips[name].placesToVisit.map((place) => {
          tempObj[name].push(place.locationName);
          // selectedPlace.push(place.locationName);
        });
        return Object.assign(placesToVisit, tempObj);
      });
    }

    console.log(placesToVisit, "selected", selectedPlace);

    const handleLocationClick = (locationName) => {
      store.commit("updateSelectedLocation", locationName);
    };

    return {
      handleLocationClick,
      tripNames,
      userTrips: props.trips,
      selectedPlace,
      placesToVisit,
    };
  },
};
</script>
