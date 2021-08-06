<template>
  <div id="modelsManagement">
    <!-- <load-box-model></load-box-model> -->
    <load-fbx-model :modelPath="path"></load-fbx-model>
    <div
      class="w-2/12 h-4/5 fixed top-40 bg-gray-700 bg-opacity-50 overflow-auto"
    >
      <el-tree
        :data="data"
        :props="defaultProps"
        default-expand-all
        @node-click="handleNodeClick"
      ></el-tree>
    </div>
  </div>
</template>

<script>
// import loadBoxModel from "./loadModels/loadBoxModel.vue";
import loadFbxModel from "./loadModels/loadFbxModel.vue";
export default {
  components: {
    // loadBoxModel,
    loadFbxModel
  },
  data() {
    return {
      data: [
        {
          label: "物料运输机械",
          children: [
            {
              label: "货运架空索道",
              children: [
                {
                  label: "货运支架",
                  path: "huoyunzhijia.FBX"
                },
                {
                  label: "liaodou",
                  path: "liaodou.FBX"
                }
              ]
            },
            {
              label: "直升机物料吊运工具",
              children: [
                {
                  label: "起重吊装带",
                  path: "qizhongdiaozhaungdai.FBX"
                }
              ]
            },
            {
              label: "履带式运输车",
              children: [
                {
                  label: "WLD-10",
                  path: "lvdaishiyunshuche-WLD-10.FBX"
                }
              ]
            },
            // {
            //   label: "轻型卡车",
            //   children: [
            //     {
            //       label: "WQK-34",
            //       path: "qingxingkache-WQK-34.FBX"
            //     }
            //   ]
            // },
            {
              label: "轮胎式运输车",
              children: [
                {
                  label: "WLT-15",
                  path: "luntaishiyunshuche-WLT-15.FBX"
                }
              ]
            },
            {
              label: "水陆两用运输装备",
              children: [
                {
                  label: "WSL-CA-7",
                  path: "shuiluliangyongchuan-WSL-CA-7.FBX"
                }
              ]
            },
            {
              label: "沼泽钢轮车",
              children: [
                {
                  label: "WGL-5",
                  path: "zhaozeganglunche-WGL-5.FBX"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      path: ""
    };
  },
  created() {
    this.path = "models/fbx/lvdaishiyunshuche-WLD-10.FBX";
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      if (data.path) {
        this.path = `models/fbx/${data.path}`;
      }
    }
  }
};
</script>

<style lang="scss">
#modelsManagement {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
