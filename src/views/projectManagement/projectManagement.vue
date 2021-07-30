<template>
  <div style="margin: 20px">
    <div class="filterContainer">
      <div>
        <el-button @click="newProject">新增</el-button>
        <el-button @click="deleteProject">删除</el-button>
      </div>
      <div>
        工程名称：
        <el-input
          placeholder="请输入内容"
          v-model="inputName"
          style="width: 200px"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" align="center" width="60">
      </el-table-column>
      <el-table-column
        fixed
        type="index"
        label="序号"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column prop="projectName" label="工程名称" align="center">
        <template slot-scope="scope">
          <el-button @click="handleProjectClick(scope.row)" type="text">
            {{ scope.row.projectName }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="imageData" label="影像数据" align="center">
        <template slot-scope="scope">
          <i
            v-show="scope.row.imageData"
            class="el-icon-circle-check i-style"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="elevationData" label="高程数据" align="center">
        <template slot-scope="scope">
          <i
            v-show="scope.row.elevationData"
            class="el-icon-circle-check i-style"
          ></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="obliquePhotographicData"
        label="倾斜摄影数据"
        align="center"
      >
        <template slot-scope="scope">
          <i
            v-show="scope.row.obliquePhotographicData"
            class="el-icon-circle-check i-style"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="thematicData" label="专题数据" align="center">
        <template slot-scope="scope">
          <i
            v-show="scope.row.thematicData"
            class="el-icon-circle-check i-style"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="documentation" label="文档资料" align="center">
        <template slot-scope="scope">
          <el-button
            v-show="scope.row.documentation"
            @click="handleClick(scope.row)"
            type="text"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text"
            >查看</el-button
          >
          <el-button type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleProjectClick(row) {
      console.log(row);
      let routeUrl = this.$router.resolve({
        path: "/projectDetail",
        query: { id: 78 }
      });
      window.open(routeUrl.href, "_blank");
    },
    newProject() {},
    deleteProject() {}
  },

  data() {
    return {
      inputName: "",
      tableData: [
        {
          projectName: "线路1",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "https://element.eleme.cn/#/zh-CN/component/icon",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路2",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路3",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: true,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路4",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路5",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路6",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: true,
          documentation: "https://element.eleme.cn/#/zh-CN/component/icon",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路7",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路8",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: true,
          documentation: "",
          createTime: "2021-7-26 15:10"
        },
        {
          projectName: "线路9",
          imageData: true,
          elevationData: true,
          obliquePhotographicData: true,
          thematicData: false,
          documentation: "",
          createTime: "2021-7-26 15:10"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.filterContainer {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.i-style {
  font-size: 22px;
  color: #67c23a;
}
</style>
