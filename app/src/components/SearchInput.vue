<template>
  <div class="w-full max-w-screen-sm">
    <h1 class="text-white text-center text-3xl pb-4">Planner</h1>
    <div class="flex">
      <!-- <input
        v-model="querySearch"
        class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
        type="text"
        placeholder="Search a location"
      />
      <i
        @click="getTripInfo"
        class="fa-solid fa-chevron-right bg-black text-white cursor-pointer px-4 rounded-tr-md rounded-br-md flex items-center"
      ></i> -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchInput",

  setup() {
    const querySearch = ref("");

    return { querySearch };
  },
};
</script>

<style></style>
