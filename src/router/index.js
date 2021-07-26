import Vue from "vue";
import VueRouter from "vue-router";

import mainMenu from "../views/mainMenu.vue";
import CesiumAndThree from "../views/projectManagement/CesiumAndThree.vue";
import projectManagement from "../views/projectManagement/projectManagement.vue";
import modelsManagement from "../views/modelsManagement/modelsManagement.vue";
import projectDetail from "../views/projectDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "projectManagement"
    },
    component: mainMenu,
    children: [
      {
        path: "/projectManagement",
        name: "projectManagement",
        component: projectManagement
      },
      {
        path: "/modelsManagement",
        name: "modelsManagement",
        component: modelsManagement
      }
    ]
  },
  {
    path: "/projectDetail",
    name: "projectDetail",
    component: projectDetail
  },
  {
    path: "/CesiumAndThree",
    name: "CesiumAndThree",
    component: CesiumAndThree
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
  mode: "history",
  routes
});

export default router;
