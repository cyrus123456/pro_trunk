<template>
  <el-dialog title="岗位菜单信息" :visible.sync="dialogData.visible" :close-on-click-modal="false" width="900px">
    <div class="dialog-content" style=" height: 60vh;
     overflow: auto;">
      <div>
        <!--<div class="export">
          <el-button type="primary" icon="el-icon-my-export" @click="exporMenu()">导出岗位菜单</el-button>
          <el-button type="primary"  class="export-back"  @click="back()"><-返回</el-button>
        </div>-->
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
              @mouseleave="($event) =>leave($event,'99999')"
              @mousemove="($event) => updateXY($event)">
          <span v-if="!data.children" class="tree-icon"></span>
          <span>{{ node.label }}</span>
        </span>

      </span>
          </el-tree>
        </div>
        <div v-show="seen" class="hover_con" style="position: fixed;height: 400px;overflow-y: auto" :style="positionStyle">
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
      </div>

    </div>
    <div slot="footer" class="dialog-footer">
      <div class="dialog-footer-finish">
        <el-button type="primary" @click="add()" v-if="dialogData.businessType=== 'add'" :disabled="commitAddDisable">新增</el-button>
        <el-button type="primary" @click="update()" v-if="dialogData.businessType=== 'edit'" :disabled="commitUpdateDisable">修改</el-button>
        <el-button type="primary" @click="finish(true)">取消</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script src="../mixins/dialog.js"></script>
<style lang="scss" scoped>
  .hover_con{
    position: fixed;
    top: 200px;
    left: 400px;
    padding: 10px;
    /* border: 1px solid #E9892D; */
    background: #fff;
    box-shadow: 0 0 5px #E9892D inset;
  }
</style>

<style scoped>

</style>
