import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Join from "../views/Join.vue";
import Params from "../components/testhome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/joinform",
    name: "JoinForm",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login/JoinForm.vue"),
  },
  {
    path: "/popular",
    name: "Popular",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Popular.vue"),
  },
  {
    path: "/places",
    name: "places",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Places.vue"),
  },

  {
    path: "/location",
    name: "Location",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Map/link-map.vue"),
  },

  {
    path: "/testhome",
    name: "Params",
    component: Params,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
