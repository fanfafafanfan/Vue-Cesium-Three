import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "projectManagement"
    },
    component: () => import("../views/mainMenu.vue"),
    children: [
      {
        path: "/projectManagement",
        name: "projectManagement",
        component: () =>
          import("../views/projectManagement/projectManagement.vue")
      },
      {
        path: "/modelsManagement",
        name: "modelsManagement",
        component: () =>
          import("../views/modelsManagement/modelsManagement.vue")
      },
      {
        path: "/loadingObjCar",
        name: "loadingObjCar",
        component: () => import("../views/xeokitDemo/loadingObjCar.vue")
      },
      {
        path: "/BIMOffline_XKT_Duplex",
        name: "BIMOffline_XKT_Duplex",
        component: () => import("../views/xeokitDemo/BIMOffline_XKT_Duplex.vue")
      }
    ]
  },
  {
    path: "/projectDetail",
    name: "projectDetail",
    component: () => import("../views/projectDetail.vue")
  },
  {
    path: "/CesiumAndThree",
    name: "CesiumAndThree",
    component: () => import("../views/projectManagement/CesiumAndThree.vue")
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
  // mode: "history",
  routes
});

export default router;
