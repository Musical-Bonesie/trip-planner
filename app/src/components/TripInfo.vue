<template>
  <div
    class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row gap-y-4 gap-x-12 px-8 pt-8 pb-12 rounded-md bg-white"
  >
    <!--Flex Item -->
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ tripInfo.locationName }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Timezone</h3>
      <span class="text-2xl">CET</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-xs mb-2 uppercase">Travel Time</h3>
      <span class="text-2xl">2hrs</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tripInfo"],
};
</script>
