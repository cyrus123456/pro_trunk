<template>
  <section class="tabs-content-item">
    <div class="export">
      <el-button type="primary" icon="el-icon-my-export" @click="exporMenu()">导出岗位菜单</el-button>
      <el-button type="primary"  class="export-back"  @click="back()"><-返回</el-button>
    </div>
    <div class="menu-con demo-tree">
      <el-tree
        :empty-text="emptyText"
        :data="data"
        default-expand-all
        node-key="taskCode"
        ref="tree"
        highlight-current
        :props="defaultProps">
        <span class="custom-tree-node" slot-scope="{ node, data }">
        <span @mouseenter="() => enter(data) "
              @mouseleave="() =>leave()"
              @mousemove="($event) => updateXY($event)">
          <span v-if="!data.children" class="tree-icon"></span>
          <span>{{ node.label }}</span>
        </span>

      </span>
      </el-tree>
    </div>
    <div v-show="seen" class="hover_con" :style="positionStyle">
      <el-table :data="riskList" highlight-current-row :fit="true" :header-cell-style="{background:'#F4F5F9',color:'#000'}">
        <el-table-column type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
        </el-table-column>
        <el-table-column prop="permitRiskClass" label="可见险类" width="150">
        </el-table-column>
        <el-table-column prop="permitRiskCode" label="可见险类意外险种"  width="150">
        </el-table-column>
        <el-table-column prop="exceptRiskClass" label="不可见险类"  width="150">
        </el-table-column>
        <el-table-column prop="exceptRiskCode" label="不可见险类意外险种"  width="150">
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>
<style lang="scss" src="@/assets/style/app.scss"></style>
<style  lang="scss" scoped>
  .export{
    position: relative;
    padding: 20px 20px 0;
  }
  .export .export-back{
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .menu-con{
    padding: 20px;
  }
  .hover_con{
    position: fixed;
    box-shadow:0 0 2px 2px #D3D3D3;
    color: #fff;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
  }
  .demo-tree >>> .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
<script src="./page.js"></script>
