<template>
  <div id="app">
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">操作</template>
          <el-menu-item index="2-1">弹窗</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
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

    <el-dialog
      title="图层管理"
      :visible.sync="picDialogVisible"
      width="300"
      :modal=false
    >
      <span>这是一段信息</span>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      picDialogVisible: true,
      dialogVisible: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == "2-1") {
        this.dialogVisible = true;
      }
    }
  }
};
// window.onresize = () => {
//   let RootFontSize = document.body.offsetWidth / 100;
//   document.getElementsByTagName("html")[0].style.fontSize = RootFontSize + "px";
// };
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app > .el-header {
  // line-height: 60px;
  padding: 0;
}
#app .main {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
