<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <!--<div class="form-base">
          &lt;!&ndash; {{queryform}} &ndash;&gt;
          <el-form class="form" autoComplete="on" :model="queryform" :rules="queryformRules"
                   ref="queryform" label-position="right" label-width="100px" label-suffix="：" size="medium">
            <el-row >
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="系统">
                    <el-select
                      @change="selectChange"
                      v-model="queryform.systemCode"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="systemCode"
                      :loading="loading">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="登录机构">
                    <el-select
                      @change="selectChangeComCode"
                      v-model="queryform.comCode"
                      filterable
                      clearable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodComCode"
                      :loading="loadingComCode">
                      <el-option
                        v-for="item in optionsComCode"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-checkbox v-model="chkComCode" @change="retateChkComCode()">是否查询下级机构</el-checkbox>
                  </el-form-item>
                </div>
              </el-col>

              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="岗位代码">
                    <el-select
                      @change="selectChangeGradeCode"
                      v-model="queryform.utiUserGradeGradeCode"
                      filterable
                      remote
                      clearable
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="gradeCode"
                      :loading="loadingGradeCode">
                      <el-option
                        v-for="item in optionsGradeCode"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="table-base" ref="shuiyinCON">
          &lt;!&ndash;<div class="shuiyin">{{userName}}</div>&ndash;&gt;
          <el-table :data="results" highlight-current-row  :fit="true">
           &lt;!&ndash; <el-table-column type="selection" width="40" fixed="left">
            </el-table-column>&ndash;&gt;
            <el-table-column type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
            </el-table-column>
            <el-table-column prop="gradeName" label="岗位名称" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span class="table-cell-underline table-cell-operate" @click="handleDetail(scope.$index, scope.row)">{{ scope.row.gradeName }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="gradeCode" label="岗位代码" width="200">
            </el-table-column>
           &lt;!&ndash; <el-table-column prop="stationDescription" label="岗位功能说明">
            </el-table-column>&ndash;&gt;
            &lt;!&ndash;<el-table-column prop="stationCurrentNumber" label="岗位现有人数" width="150">
            </el-table-column>&ndash;&gt;
            <el-table-column prop="userCode" label="工号代码" width="200">
            </el-table-column>
            <el-table-column prop="userName" label="工号姓名" width="200">
            </el-table-column>
           &lt;!&ndash; <el-table-column prop="stationConfigTime" label="岗位配置时间" width="150">
            </el-table-column>&ndash;&gt;
           &lt;!&ndash; <el-table-column label="岗位菜单" width="150"  fixed="right" align="center" >
              <template slot-scope="scope">
                <el-button type="text" class="button-table-operate" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                &lt;!&ndash; <el-button v-else  type="text" class="button-table-operate" @click="handlePageDownLoad(scope.$index, scope.row)">下载</el-button> &ndash;&gt;
              </template>
            </el-table-column>&ndash;&gt;
          </el-table>
        </div>
        <div class="toolbar pagination-base">
          <el-button class="pagination-button" @click="listExport()" :disabled="this.results.length===0">导出</el-button>
          &lt;!&ndash;<el-button type="danger" @click="batchDelete" :disabled="this.sels.length===0">批量删除</el-button>&ndash;&gt;
          <div class="pagination-total">总共有{{pagination.total}}条资料信息</div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="prev, pager, next,sizes, jumper"
            :total="pagination.total"
          >
          </el-pagination>
        </div>-->
        <div>
          <el-dialog title="请选择所需服务"  :visible="visible" :show-close="false"  width="400px">
            <div class="dialog-content">
              <div class="table-base">
                <!--<div class="shuiyin">{{userName}}</div>-->
                <el-table :data="results" highlight-current-row :show-header="false"
                          :fit="true" align="center"
                          @row-click="rowClick">
                  <!-- <el-table-column type="selection" width="40" fixed="left">
                   </el-table-column>-->
                  <el-table-column prop="name"  width="200">
                  </el-table-column>
                </el-table>
              </div>

            </div>
           <!-- <div slot="footer" class="dialog-footer">
              <div class="dialog-footer-finish">
                <el-button type="primary" @click="add()" v-if="dialogData.businessType=== 'add'" :disabled="commitAddDisable">新增</el-button>
                <el-button type="primary" @click="update()" v-if="dialogData.businessType=== 'edit'" :disabled="commitUpdateDisable">修改</el-button>
                <el-button type="primary" @click="finish(true)">取消</el-button>
              </div>
            </div>-->
          </el-dialog>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/app.scss"></style>
<style lang="scss" scoped>
  .app-container {
    padding: 0;
  }
  .app-container-bg {
    border: none;
  }
  .tabs-content-item{
    padding: 20px;
  }
  .dialog-footer{
    .dialog-footer-finish .el-button{
      &,&:hover,&:active,&:focus{
        color: #fff;
        background-color: #E9892D;
        border-color: #E9892D;
      }
    }
  }
  .dialog-form{
    padding-top: 20px;
  }
  .el-table::before {
    height: 0px;
  }
</style>
<script src="./oaAutoLoad.js"></script>
