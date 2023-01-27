<template>
  <div class="flex h-screen max-h-screen">
    <div
      class="flex justify-center items-start relative bg-hero-pattern bg-cover px-4 pt-12 pb-32 z-20 w-1/4"
    >
      <!--Navigation/Trip Overview-->
      <SidebarStandard />

      <!-- Trip Info-->
      <TripInfo
        v-if="selectedTripDetails()"
        v-bind:selectedTripDetails="selectedTripDetails()"
      />
    </div>

    <!--Map-->
    <div id="map" class="h-full w-3/4 z-10"></div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore --- leaflet doesn't have typescript support yet
import tripData from "../data/tripInfo";
import TripInfo from "../components/TripInfo.vue";
import SidebarStandard from "../sidebars/SidebarStandard.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore --- leaflet doesn't have typescript support yet
import leaflet from "leaflet";
import { onMounted, ref, onUpdated } from "vue";
import store from "@/store";

export type tripInfoDataType = {
  [key: string]: {
    locationName: string;
    details: string | null;
    src: string;
    lat: number;
    lng: number;
  };
};
export default {
  name: "HomeView",
  components: { TripInfo, SidebarStandard },

  setup() {
    const tripNames = Object.keys(tripData);

    let map: any;
    let marker: any;
    const querySearch = ref("");
    let tripInfo = ref(null);

    onMounted(() => {
      store.dispatch("getTripData");
      store.commit("updateSelectedLocation", tripNames[0]);
      tripInfo = tripData[store.state.selectedLocation as keyof unknown];
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
    onUpdated(() => {
      const location = store.state.selectedLocation;

      if (location) {
        store.commit("updateCoordinates", [
          tripData[location as keyof undefined]?.placesToVisit[0].lat,
          tripData[location as keyof object]?.placesToVisit[0].lng,
        ]);
        updateMapMarkers(location);
      }
    });

    const updateMapMarkers = (locationName: string) => {
      const tripDataCoordinates = tripData
        ? tripData[locationName as keyof object].placesToVisit.map(
            (item: tripInfoDataType) => {
              return [item.lat, item.lng];
            }
          )
        : [];
      map.flyTo(
        tripDataCoordinates[0],

        15,
        {
          animate: true,
          duration: 2, // in seconds
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
    };

    const selectedTripDetails = () => {
      return store.getters.getLocationDetails;
    };
    return { selectedTripDetails, updateMapMarkers };
  },
};
</script>
