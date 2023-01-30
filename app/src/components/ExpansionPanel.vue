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
            {{ userTrips[name] }}
          </v-text-field>
        </v-expansion-panel-text></v-expansion-panel
      >
    </v-expansion-panels>
  </div>
</template>

<script>
import store from "@/store";
import { onMounted, onUpdated } from "vue";

export default {
  name: "ExpansionPanel",

  setup() {
    const userTrips = store.state.tripData;
    let tripNames = Object.keys(userTrips);

    const handleLocationClick = (locationName) => {
      store.commit("updateSelectedLocation", locationName);
    };

    return { handleLocationClick, tripNames, userTrips };
  },
};
</script>
