<template>
  <div id="project-menu">
    <el-header>
      <div class="title">输电线路三维全过程机械化施工策划平台</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/projectManagement">项目管理</el-menu-item>
        <el-menu-item index="/modelsManagement">模型管理</el-menu-item>
        <el-submenu index="2">
          <template slot="title">xeokit-sdk</template>
          <el-menu-item index="/loadingObjCar">Obj-Car</el-menu-item>
          <el-menu-item index="/BIMOffline_XKT_Duplex">Xkt-BIM</el-menu-item>
        </el-submenu>
        <el-menu-item
          ><a
            href="http://earthsdk.com/v/last/Apps/Examples/?menu=true&url=./earthui-fromJSON.html"
            target="_blank"
            >CesiumLab</a
          ></el-menu-item
        >
      </el-menu>
    </el-header>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path
    };
  },
  watch: {
    $route(to) {
      // 监听路由的变化  如果路由发生改变则当前tab栏默认值也相应改变
      this.activeIndex = to.path;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  background-color: #545c64;
  color: #fff;
  font-size: 16px;
  line-height: 60px;
  padding: 0 40px 0 20px;
  word-break: keep-all;
}
#project-menu .el-menu.el-menu--horizontal {
  border-bottom: none;
}
#project-menu > .el-header {
  // line-height: 60px;
  padding: 0;
  display: flex;
}
#project-menu .el-menu-demo {
  width: 100%;
}
#project-menu .main {
  background-color: #f3f3f3;
  width: 100%;
  height: calc(100% - 61px);
  position: absolute;
}
</style>
