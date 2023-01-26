<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results-->
    <div
      class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32 z-20"
    >
      <!--Search input-->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">Planner</h1>
        <div class="flex">
          <input
            v-model="querySearch"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search a location"
          />
          <i
            @click="getTripInfo"
            class="fa-solid fa-chevron-right bg-black text-white cursor-pointer px-4 rounded-tr-md rounded-br-md flex items-center"
          ></i>
        </div>
      </div>
      <!-- Trip Info-->
      <TripInto v-if="tripInfo" v-bind:tripInfo="tripInfo" />
    </div>

    <!--Map-->
    <div id="map" class="h-full z-10"></div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore --- leaflet doesn't have typescript support yet
import tripData from "../data/tripInfo";
import TripInto from "../components/TripInfo.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore --- leaflet doesn't have typescript support yet
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

export type tripInfoDataType = {
  locationName: string;
  details: string | null;
  src: string;
  lat: number;
  lng: number;
};
export default {
  name: "HomeView",
  components: { TripInto },

  setup() {
    let map: any;
    let marker: any;
    const querySearch = ref("");
    const tripInfo = ref(null);

    onMounted(() => {
      map = leaflet
        .map("map")
        .setView([19.736769570948958, -156.04285486271075], 15);
      marker = leaflet
        .marker([19.736769570948958, -156.04285486271075])
        .addTo(map);

      leaflet
        .tileLayer(
          `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_MAPBOX_TOKEN}`,
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
          }
        )
        .addTo(map);
    });
    const getTripInfo = async () => {
      try {
        // binds input value to return trip info
        // TODO: this should be Map indicators should have an @click that triggers this getTripInfo instead of the input
        // [x] the input should recenter the map
        // * Add this back in once server is set up:
        // const data = await axios.get(
        //   `apiInFo&userInputLocation=${querySearch.value}`
        // );
        // const result = data.data;

        // fill tripInfo with the response of te current trip selected
        // tripInfo.value = result;

        // Get and create markers to display locations from tripInfo:
        const tripDataCoordinates = tripData.hawaii.plan.map(
          (item: tripInfoDataType) => {
            return [item.lat, item.lng];
          }
        );

        var layerGroup = leaflet.layerGroup().addTo(map);
        for (let i = 0; i < tripDataCoordinates.length; i++) {
          marker = leaflet.marker([
            tripDataCoordinates[i][0],
            tripDataCoordinates[i][1],
          ]);
          layerGroup.addLayer(marker);
        }
        var overlay = { markers: layerGroup };
        leaflet.control.layers(undefined, overlay).addTo(map);
      } catch (error) {
        console.error("Trip Info Error", error);
      }
    };
    return { querySearch, tripInfo, getTripInfo };
  },
};
</script>
