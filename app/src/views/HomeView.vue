<template>
  <div class="flex h-screen max-h-screen">
    <div
      v-if="userTrips()"
      class="flex justify-center items-start relative bg-hero-pattern bg-cover px-4 pt-12 pb-32 z-20 transition-all w-1/3"
    >
      <ExpansionPanel
        :trips="userTrips()"
        v-on:handleLocationClick="handleLocationClick"
        v-on:goToMapMarker="handleClickGoToMapMarker"
      />
    </div>

    <!--Map-->
    <div id="map" class="h-full w-3/4 z-10 transition-all"></div>
  </div>
</template>

<script lang="ts">
import ExpansionPanel from "../components/ExpansionPanel.vue";
import leaflet, { LatLngExpression, Map, Marker } from "leaflet";
import { onMounted, ref, onUpdated, onBeforeMount } from "vue";
import store from "@/store";
import { TripInfoDataType } from "@/shared/types";

export default {
  name: "HomeView",
  components: { ExpansionPanel },

  setup() {
    const tripData = ref(store.state.tripData);
    const initialCoordinates = ref([19.736769570948958, -156.04285486271075]);
    let map: Map;
    let marker: Marker;
    // TODO add search feat: const querySearch = ref("");

    onBeforeMount(() => {
      store.dispatch("getTripData");
    });

    onMounted(() => {
      if (tripData.value) {
        const tripNames = Object.keys(tripData.value);
        store.commit("updateSelectedLocation", tripNames[0]);
        initialCoordinates.value = [
          tripData.value[tripNames[0]].placesToVisit[0].lat,
          tripData.value[tripNames[0]].placesToVisit[0].lng,
        ];
      }

      map = leaflet
        .map("map")
        .setView(initialCoordinates.value as LatLngExpression, 9);
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
      tripData.value = store.state.tripData;
    });

    const updateMapMarkers = (locationName: string) => {
      const locationCoor = store.state.placesToVisitCoordinates;

      if (locationCoor) {
        map.flyTo(
          locationCoor[locationName][0] as LatLngExpression,

          11,
          {
            animate: true,
            duration: 2, // in seconds
          }
        );
        let layerGroup = leaflet.layerGroup().addTo(map);
        for (let i = 0; i < locationCoor[locationName].length; i++) {
          marker = leaflet.marker([
            locationCoor[locationName][i][0],
            locationCoor[locationName][i][1],
          ]);
          if (tripData.value) {
            layerGroup.addLayer(
              marker
                .bindPopup(
                  `${tripData.value[locationName].placesToVisit[i].locationName}`
                )
                .openPopup()
            );
          }
          layerGroup.addLayer(marker);
        }
      }
      // TODO add error handling to alert the user there are no current placesToVisit locations set
    };

    const selectedTripDetails = () => {
      return store.getters.getLocationDetails;
    };
    const userTrips = () => {
      return store.state.tripData as TripInfoDataType;
    };

    const handleLocationClick = (locationName: string) => {
      if (
        locationName.toLowerCase() !==
        store.state.selectedLocation.toLowerCase()
      ) {
        store.commit("updateSelectedLocation", locationName);
        updateMapMarkers(locationName);
      }
    };

    const handleClickGoToMapMarker = (coordinates: number[]) => {
      map.flyTo(coordinates as LatLngExpression, 15, {
        animate: true,
        duration: 2,
      });
    };

    return {
      selectedTripDetails,
      updateMapMarkers,
      userTrips,
      handleLocationClick,
      handleClickGoToMapMarker,
    };
  },
};
</script>
