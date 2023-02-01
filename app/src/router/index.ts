import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TripDetails from "../components/TripDetails.vue";
import BottomNav from "../components/BottomNav.vue";
import MapView from "../views/MapView.vue";
import TripListView from "../views/TripListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Trip Planner",
    },
  },
  {
    path: "/nav",
    name: "BottomNav",
    component: BottomNav,
    meta: {
      title: "Trip Planner",
    },
  },

  {
    path: "/map",
    name: "Map",
    component: MapView,
    meta: {
      title: "Trip Planner",
    },
  },
  {
    path: "/trips",
    name: "trips",
    component: TripListView,
    meta: {
      title: "Trip Planner",
    },
  },
  {
    path: "/trips/:tripName",
    name: "TripDetails",
    component: TripDetails,
    // small change to pass param props instead of vue-router taking params from the URL route
    props: true,
    // route guard: params: to, from, next function that decides to proceed to the 'to' route or not.
    // beforeEnter(to, from, next) {
    //   const isValidId = Number.isInteger(Number(to.params.id));
    //   // if id is a valid int, than proceed to route with next()
    //   next(isValidId);
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //update page title
  document.title = `${to.meta.title}`;
  next();
});

export default router;
