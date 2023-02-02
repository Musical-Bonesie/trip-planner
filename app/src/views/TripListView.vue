<template>
  <div
    v-if="tripNames"
    class="bg-hero-pattern bg-cover h-screen pt-6 flex flex-col items-center justify-center"
  >
    <div class="flex m-4" v-for="name in tripNames" :key="name">
      <router-link
        class="uppercase p-3 font-bold rounded-lg bg-slate-200 hover:bg-white hover:underline"
        :to="{ name: `TripDetails`, params: { tripName: name } }"
        >{{ name }}</router-link
      >
    </div>
  </div>
  <div class="flex justify-center text-center" v-else>
    <v-progress-circular
      color="dark-blue"
      indeterminate
      :size="70"
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { onBeforeMount, computed } from "vue";

export default {
  name: "TripListView",

  setup() {
    onBeforeMount(() => {
      store.dispatch("getTripData");
    });

    const store = useStore();
    const data = computed(() =>
      store.state.tripData ? Object.keys(store.state.tripData) : []
    );

    return {
      tripNames: data,
    };
  },
};
</script>
