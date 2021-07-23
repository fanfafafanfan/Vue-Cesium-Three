import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "cAt",
    component: () => import("../views/CesiumAndThree.vue")
  },
  {
    path: "/three",
    name: "three",
    component: () => import("../views/Three.vue")
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/Map.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
