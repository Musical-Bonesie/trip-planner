<template>
  <div
    v-if="placesToVisit && Object.keys(show).length"
    class="py-3 bg-hero-pattern bg-cover h-screen"
  >
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
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click="show[place.locationName] = !show[place.locationName]"
        >
          Details
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="
            show[place.locationName]
              ? 'fas fa-regular fa-circle-chevron-up'
              : 'fas fa-regular fa-circle-chevron-down'
          "
          @click="show[place.locationName] = !show[place.locationName]"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[place.locationName]">
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
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onBeforeMount, computed, onUpdated, onMounted, Ref } from "vue";
import { PlacesToVisitObjectType } from "../shared/types";

type ShowDetailsType = {
  [key: string]: boolean;
};

export default {
  name: "TripDetails",

  setup() {
    // TODO Fix issue with overflow content and not being able to scroll the full content
    const route = useRoute();
    const store = useStore();
    const data = computed(() => store.state.tripData);
    const name = route.params.tripName;
    const test = ref({});
    const show = computed({
      get() {
        return test.value;
      },
      set(val: object) {
        test.value = val;
      },
    }) as ShowDetailsType | Ref<Record<string, never>>;

    onBeforeMount(() => {
      store.dispatch("getTripData");
    });
    onMounted(() => {
      if (data.value && name && !Object.keys(show.value).length) {
        const updateShowRefObj = {};
        data.value[`${name}`].placesToVisit.forEach(
          (place: PlacesToVisitObjectType) => {
            Object.assign(updateShowRefObj, {
              [`${place.locationName}`]: false,
            });
          }
        );
        show.value = updateShowRefObj;
      }
    });

    return {
      name,
      placesToVisit: data,
      show,
    };
  },
};
</script>
