<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <div class="form-base">
          <!-- {{queryform}} -->
          <el-form class="form" autoComplete="on" :model="queryform" :rules="queryformRules"
                   ref="queryform" label-position="right" label-width="100px" label-suffix="：" size="medium">
            <el-row >
              <el-col class="column-5">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="登录机构">
                    <el-select
                      @change="selectChangeComCode"
                      v-model="queryform.comCode"
                      filterable
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
                  </el-form-item>
                </div>
              </el-col>
              <el-col class="column-5">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="姓名">
                    <el-select
                      @change="selectChangeUserName"
                      v-model="queryform.userCode"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodUserName"
                      :loading="loadingUserName">
                      <el-option
                        v-for="item in optionsUserName"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col class="column-5">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="工号">
                    <el-select
                      @change="selectChangeUserCode"
                      v-model="queryform.userCode"
                      filterable
                      remote
                      reserve-keyword
                      placeholder="请输入关键词"
                      :remote-method="remoteMethodUserCode"
                      :loading="loadingUserCode">
                      <el-option
                        v-for="item in optionsUserCode"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </el-col>
              <el-col class="column-5">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label="岗位代码">
                    <el-select
                      @change="selectChangeGradeCode"
                      @focus="checkUserCode"
                      v-model="queryform.utiUserGradeGradeCode"
                      filterable
                      remote
                      reserve-keyword
                      clearable
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
              <el-col class="column-5">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label-width="0px">
                    <div class="button-no-label">
                      <!--<el-button type="primary" class="button-base button-form-query" @click="handleTemplateDownload()">导入模板下载</el-button>-->
                      <el-button type="primary" class="button-base button-form-query button-form-small" :disabled="this.queryDisable" @click="handleQuery()">查询</el-button>
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
        <div class="table-base" ref="shuiyinCON">
          <!--<div class="shuiyin">{{userName}}</div>-->
          <el-table :data="results" highlight-current-row @selection-change="selsChange" :fit="true">
           <!-- <el-table-column type="selection" width="40" fixed="left">
            </el-table-column>-->
            <el-table-column type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
            </el-table-column>
            <el-table-column prop="userCode" label="工号" width="200">
            </el-table-column>
            <el-table-column prop="userName" label="姓名" width="200">
            </el-table-column>
            <el-table-column prop="systemCode" label="系统代码" width="200">
            </el-table-column>
            <el-table-column prop="systemName" label="系统名称" width="200">
            </el-table-column>
            <el-table-column prop="gradeName" label="岗位名称"  :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span class="table-cell-underline table-cell-operate" @click="handleDetail(scope.$index, scope.row)">{{scope.row.gradeName}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="gradeCode" label="岗位代码" width="200">
            </el-table-column>
            <!--<el-table-column prop="stationDescription" label="岗位功能说明">
            </el-table-column>-->
            <!--<el-table-column prop="stationCurrentNumber" label="岗位现有人数" width="150">
            </el-table-column>-->
            <!--<el-table-column prop="stationConfigTime" label="到岗时间" width="150">
            </el-table-column>-->
           <!-- <el-table-column label="岗位菜单" width="150"  fixed="right" align="center" >
              <template slot-scope="scope">
                <el-button type="text" class="button-table-operate" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
                &lt;!&ndash; <el-button v-else  type="text" class="button-table-operate" @click="handlePageDownLoad(scope.$index, scope.row)">下载</el-button> &ndash;&gt;
              </template>
            </el-table-column>-->
          </el-table>
        </div>
        <div class="toolbar pagination-base">
          <el-button class="pagination-button" @click="listExport()" :disabled="this.results.length===0">导出</el-button>
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
      <!--  <div
          v-if="dialog.visible">
          <component
            @closeDialog="closeDialog"
            :dialogData="dialog"
            :is="dialog.type"
          ></component>
        </div>-->
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
<script src="./index.js"></script>
