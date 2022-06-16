<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <div class="form-base input-width-auto">
          <vue-element-loading
            :active="showloading" spinner="bar-fade-scale"
            :is-full-screen="true"
            :text="'数据提交中，请耐心等待...'"
            color="#E9892D"
            background-color="rgba(255, 255, 255, .5)"/>
          <!-- {{queryform}} -->
          <el-form class="form" autoComplete="on"
                   ref="queryform" label-position="right" label-width="150px" label-suffix="：" size="medium">
            <el-row >
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="系统">
                    <el-select
                      @change="selectChangeSystemCode"
                      v-model="queryform.systemcode"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodSystemCode"
                      :loading="loadingSystemCode">
                      <el-option
                        v-for="item in optionsSystemCode"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="菜单名称">
                    <el-input type="text" v-model.trim="queryform.menucname"></el-input>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="岗位代码">
                    <el-select
                      @change="selectChangeGradeCode"
                      v-model="queryform.gradecode"
                      filterable
                      remote
                      clearable
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodGradeCode"
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
              <el-col :span="6">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label-width="0px">
                    <div class="button-no-label">
                      <!--<el-button type="primary" class="button-base button-form-query" @click="handleTemplateDownload()">导入模板下载</el-button>-->
                      <el-button type="primary" class="button-base button-form-query button-form-small"  @click="handleQuery()">查询</el-button>
                      <!-- <el-button type="primary" class="button-base button-form-query button-form-small" @click="handleExport()">导出</el-button>-->
                    </div>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--列表-->
        <!-- {{results}} -->
        <div class="table-base">
          <!--<div class="shuiyin">{{userName}}</div>-->
          <el-table :data="results" highlight-current-row  :fit="true">
            <!-- <el-table-column type="selection" width="40" fixed="left">
             </el-table-column>-->
            <el-table-column type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
            </el-table-column>
            <el-table-column prop="gradename" label="岗位名称"  min-width="260" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span class="table-cell-underline table-cell-operate" @click="handleDetail(scope.$index, scope.row)">{{ scope.row.gradename }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="gradecode" label="岗位代码"  width="150" :show-overflow-tooltip="true">
            </el-table-column>
            <el-table-column prop="menuname" label="菜单名称" width="300" :show-overflow-tooltip="true">
            </el-table-column>
            <!-- <el-table-column prop="stationDescription" label="岗位功能说明">
             </el-table-column>-->
            <!--<el-table-column prop="stationCurrentNumber" label="岗位现有人数" width="150">
            </el-table-column>-->
            <el-table-column prop="systemname" label="系统名称" width="300" :show-overflow-tooltip="true">
            </el-table-column>
          </el-table>
        </div>
        <div class="toolbar pagination-base">
<!--          <el-button class="pagination-button" @click="listExport()" :disabled="this.results.length===0">导出</el-button>-->
          <!--<el-button type="danger" @click="batchDelete" :disabled="this.sels.length===0">批量删除</el-button>-->
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
        </div>
        <div
          v-if="dialog.visible">
          <component
            @closeDialog="closeDialog"
            :dialogData="dialog"
            :is="dialog.type"
          ></component>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/app.scss"></style>
<style lang="scss" scoped>
  .tabs-content-item{
    padding: 20px;
  }
</style>
<script src="./oaAutoGradesMenu.js"></script>
