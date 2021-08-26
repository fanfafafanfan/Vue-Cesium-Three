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
      // 项目管理列表
      {
        path: "/projectManagement",
        name: "projectManagement",
        component: () =>
          import("../views/projectManagement/projectManagement.vue")
      },
      // // 项目详情
      // {
      //   path: "/projectDetail",
      //   name: "projectDetail",
      //   component: () => import("../views/projectManagement/projectDetail.vue"),
      //   meta: { activeMenu: "/projectManagement" }
      // },
      // 模型管理列表
      {
        path: "/modelsManagement",
        name: "modelsManagement",
        component: () =>
          import("../views/modelsManagement/modelsManagement.vue")
      },
      // xeokit-sdk 加载 obj模型
      {
        path: "/loadingObjCar",
        name: "loadingObjCar",
        component: () => import("../views/xeokitDemo/loadingObjCar.vue")
      },
      // xeokit-sdk 加载 xkt房子模型，带模型树
      {
        path: "/BIMOffline_XKT_Duplex",
        name: "BIMOffline_XKT_Duplex",
        component: () => import("../views/xeokitDemo/BIMOffline_XKT_Duplex.vue")
      },
      // xeokit-sdk 加载 点云模型
      {
        path: "/loading_XKT_MAP_pointCloud",
        name: "loading_XKT_MAP_pointCloud",
        component: () =>
          import("../views/xeokitDemo/loading_XKT_MAP_pointCloud.vue")
      },
      // xeokit-sdk 加载 模型 右键有操作面板
      {
        path: "/ContextMenu_Canvas_TreeViewPlugin_Custom",
        name: "ContextMenu_Canvas_TreeViewPlugin_Custom",
        component: () =>
          import(
            "../views/xeokitDemo/ContextMenu_Canvas_TreeViewPlugin_Custom.vue"
          )
      },
      // xeokit-sdk 加载 模型 相机自动移动
      {
        path: "/performance_ViewCullPlugin_CameraPathAnimation",
        name: "performance_ViewCullPlugin_CameraPathAnimation",
        component: () =>
          import(
            "../views/xeokitDemo/performance_ViewCullPlugin_CameraPathAnimation.vue"
          )
      },
      // d3preview示例
      {
        path: "/d3previewIndex",
        name: "d3previewIndex",
        component: () => import("../views/d3previewDemo/d3previewIndex.vue")
      }
    ]
  },
  // 项目详情
  {
    path: "/projectDetail",
    name: "projectDetail",
    component: () => import("../views/projectManagement/projectDetail.vue")
    // meta: { activeMenu: "/projectManagement" }
  },
  // cesiumJS与threeJS结合demo
  {
    path: "/CesiumAndThree",
    name: "CesiumAndThree",
    component: () => import("../views/projectManagement/CesiumAndThree.vue")
  },
  // threeJS demo
  {
    path: "/three",
    name: "three",
    component: () => import("../views/Three.vue")
  },
  // cesiumJS 地球 demo
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
