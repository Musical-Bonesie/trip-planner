<template>
  <v-app>
    <v-bottom-navigation
      v-model="value"
      app
      :background-color="color"
      dark
      grow
      :elevation="10"
    >
      <v-btn value="music" height="100%" :color="color">
        <span>Search</span>
        <v-icon icon="fas fa-search"></v-icon>
      </v-btn>

      <v-btn value="books" height="100%" :color="color">
        <span>Trips</span>
        <v-icon icon="fas fa-regular fa-plane-departure"></v-icon>
      </v-btn>

      <v-btn value="photos" height="100%" :color="color">
        <span>Map</span>
        <v-icon icon="fas fa-regular fa-map-location-dot"></v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BottomNav",

  setup() {
    let value = ref("music");
    let color = ref("black");

    return { color, value };
  },
};
</script>
