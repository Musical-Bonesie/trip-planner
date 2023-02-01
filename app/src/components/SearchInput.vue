<template>
  <div class="w-full max-w-screen-sm">
    <h1 class="text-white text-center text-3xl pb-4">Search</h1>
    <div class="flex">
      <input
        v-model="querySearch"
        class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
        type="text"
        placeholder="Search a location"
      />
      <i
        @click="handleSearch"
        class="fa-solid fa-chevron-right bg-black text-white cursor-pointer px-4 rounded-tr-md rounded-br-md flex items-center"
      ></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchInput",
  // TODO: update component with: https://next.vuetifyjs.com/en/components/text-fields/

  setup() {
    const querySearch = ref("");

    const handleSearch = () => {
      console.log("search...", querySearch.value);
    };

    return { querySearch, handleSearch };
  },
};
</script>

<style></style>
