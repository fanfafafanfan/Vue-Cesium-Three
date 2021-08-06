<template>
  <div id="cesiumContainer"></div>
</template>

<script>
var D3Preview = window.D3Preview;
const d3Preview = new D3Preview();
const options = {
  // 可选参数，true为开启，false为关闭，不传默认全部开启
  modelPanel: true, // 模型面板
  walkRoaming: true, // 行走漫游
  flyRoaming: true, // 飞行漫游
  annotate: true, // 批注
  modelMove: true, // 模型平移
  modelRotate: true, // 模型旋转
  modelSlice: true // 模型剖切
};
d3Preview.init("./lib/config.json", options);
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(window.location.href, "window.location.href");
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
