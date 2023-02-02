<template>
  <div v-if="placesToVisit">
    <v-card
      class="mx-auto"
      max-width="344"
      v-for="place in placesToVisit[`${name}`].placesToVisit"
      :key="place.locationName"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>

      <v-card-title> {{ place.locationName }}</v-card-title>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="show = !show">
          Details
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ place.details }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "TripDetails",

  setup() {
    const route = useRoute();
    const store = useStore();
    const show = ref(false);
    const data = computed(() => store.state.tripData);
    const name = route.params.tripName;

    onBeforeMount(() => {
      store.dispatch("getTripData");
    });

    return {
      name,
      placesToVisit: data,
      show,
    };
  },
};
</script>
