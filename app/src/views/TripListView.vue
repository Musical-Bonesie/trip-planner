<template>
  <div class="bg-hero-pattern bg-cover h-screen pt-6">
    <!-- <router-link
      :to="{ name: 'trips/:tripName', params: { tripName: name } }"
      >{{ name }}</router-link
    > -->
  </div>
  <div></div>
</template>

<script lang="ts">
import store from "@/store";
import { TripInfoDataType } from "@/shared/types";
import { onMounted, onUpdated, ref } from "vue";

export default {
  name: "TripListView",

  setup() {
    // const tripNames = Object.keys(props.trips);
    const data = ref(store.state.tripData);

    onMounted(() => {
      data.value = store.state.tripData;
    });
    onUpdated(() => {
      data.value = store.state.tripData;
    });

    const userTrips = () => {
      return store.state.tripData as TripInfoDataType;
    };

    return { userTrips };
  },
};
</script>
