<template>
  <v-bottom-navigation
    app="app"
    mode="shift"
    v-model="value"
    :background-color="color"
    dark
    grow
    :elevation="10"
  >
    <v-btn height="100%" :color="color" @click="handleSearch">
      <span value="search">Search</span>
      <v-icon icon="fas fa-search"></v-icon>
    </v-btn>
    <router-link :to="{ name: `TripListView` }">
      <v-btn height="100%" :color="color">
        <span value="/trips">Trips</span>
        <v-icon icon="fas fa-regular fa-plane-departure"></v-icon>
      </v-btn>
    </router-link>
    <router-link to="/">
      <v-btn height="100%" :color="color">
        <span value="/home">Map</span>
        <v-icon icon="fas fa-regular fa-map-location-dot"></v-icon>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BottomNav",

  setup() {
    let value = ref("search");
    let color = ref("black");
    const handleSearch = () => {
      alert("Search coming soon 🕵️‍♀️");
    };

    return { color, value, handleSearch };
  },
};
</script>
