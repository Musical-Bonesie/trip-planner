<template>
  <v-expansion-panels variant="popout" class="my-0" v-if="userTrips">
    <v-expansion-panel v-for="(name, index) in tripNames" :key="index">
      <v-expansion-panel-title @click="$emit('handleLocationClick', name)">
        <v-row no-gutters>
          <v-col
            cols="4"
            class="flex justify-start uppercase font-bold text-gray-700"
            >{{ name }}</v-col
          >
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field>
          <p class="text-gray-700">Trip Notes: {{ userTrips[name].notes }}</p>
        </v-text-field>
        <v-card
          v-for="place in userTrips[name].placesToVisit"
          :key="place.locationName"
          @click="$emit('goToMapMarker', [place.lat, place.lng])"
        >
          <v-card-item>
            <v-card-title class="text-gray-700">{{
              place.locationName
            }}</v-card-title>
          </v-card-item>

          <v-card-text class="text-gray-500"> {{ place.details }}</v-card-text>
        </v-card>
      </v-expansion-panel-text></v-expansion-panel
    >
  </v-expansion-panels>
  <div class="flex justify-center text-center" v-else>
    <v-progress-circular
      color="dark-blue"
      indeterminate
      :size="70"
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

import { TripInfoDataType } from "../shared/types";

export default {
  name: "ExpansionPanel",
  props: {
    trips: {
      type: Object as PropType<TripInfoDataType>,
      required: true,
    },
  },

  emits: ["handleLocationClick", "goToMapMarker"],
  // eslint-disable-next-line
  setup(props: any | TripInfoDataType) {
    const tripNames = Object.keys(props.trips);

    return {
      tripNames,
      userTrips: props.trips,
    };
  },
};
</script>
