<template>
  <div
    v-for="(place, index) in selectedTripDetails.placesToVisit"
    :key="index"
    class="absolute top-90 lg:left-64 flex flex-col lg:flex-row gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md bg-white"
  >
    <!--Flex Item -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ place.locationName }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Details</h3>
      <span class="text-2xl">{{ place.details }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Travel Time</h3>
      <span class="text-2xl">2hrs</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedTripDetails"],
};
</script>
