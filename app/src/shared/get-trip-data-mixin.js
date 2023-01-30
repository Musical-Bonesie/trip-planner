export default {
  created() {
    this.$store.dispatch("getTripData");
  },
  computed: {
    trips() {
      // added || {} default object so you don't need to add a v-if statement in each component waiting for the parts from !null
      return this.$store.state.tripData || {};
    },
  },
};
