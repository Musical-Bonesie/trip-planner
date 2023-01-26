<template>
  <div v-show="tripNames" class="shadow-md bg-white px-1 absolute">
    <h3>Trips</h3>
    <ul class="flex justify-center">
      <li
        class=""
        v-for="(name, index) in tripNames"
        :key="index"
        @click="handleLocationClick(name)"
      >
        <a
          class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out uppercase"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="dark"
          >{{ name }}
          <i
            class="fa-solid fa-chevron-right cursor-pointer px-4 rounded-tr-md rounded-br-md flex items-center"
          ></i
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import tripData from "../data/tripInfo";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Standard",

  setup() {
    const tripNames = Object.keys(tripData);
    const handleLocationClick = (locationName) => {
      store.commit("updateSelectedLocation", locationName);
    };

    return { tripNames, handleLocationClick };
  },
};
</script>
