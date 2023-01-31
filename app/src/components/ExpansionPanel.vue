<template>
  <v-expansion-panels variant="popout" class="my-4">
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
        <v-card v-for="place in userTrips[name].placesToVisit" :key="place">
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
</template>

<script>
export default {
  name: "ExpansionPanel",
  props: ["trips"],
  emits: ["handleLocationClick"],

  setup(props) {
    let tripNames = Object.keys(props.trips ? props.trips : []);

    return {
      tripNames,
      userTrips: props.trips,
    };
  },
};
</script>
