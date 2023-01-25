<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results-->
    <div
      class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32"
    >
      <!--Search input-->
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">Planner</h1>
        <div class="flex">
          <input
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search a location"
          />
          <i
            class="fa-solid fa-chevron-right bg-black text-white cursor-pointer px-4 rounded-tr-md rounded-br-md flex items-center"
          ></i>
        </div>
      </div>
      <!-- Trip Info-->
      <TripInto />
    </div>
  </div>
</template>

<script lang="ts">
import TripInto from "../components/TripInfo.vue";
export default {
  name: "HomeView",
  components: { TripInto },
};
</script>
