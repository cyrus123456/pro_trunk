<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <div class="pageName">EHR工号绑定</div>
        <div class="form-base input-width-auto">
          <vue-element-loading
            :active="showloading" spinner="bar-fade-scale"
            :is-full-screen="true"
            :text="'数据处理中，请耐心等待...'"
            color="#E9892D"
            background-color="rgba(255, 255, 255, .5)"/>
          <!-- {{queryform}} -->
          <el-form class="form" autoComplete="on"
                   ref="queryform" label-position="right" label-width="150px" label-suffix="：" size="medium">
            <el-row >
              <el-col :span="8" :offset="16">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label-width="0px">
                    <div class="button-no-label">
                      <!--<el-button type="primary" class="button-base button-form-query" @click="handleTemplateDownload()">导入模板下载</el-button>-->
                      <el-button type="primary" class="button-base button-form-query button-form-small"  v-if="docStatus" @click="handleAdd()">新增</el-button>
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
        <div class="table-base table-select-width-full">
          <!--<div class="shuiyin">{{userName}}</div>-->
          <el-table :data="results"  style="width: 100%;margin-bottom: 20px;"
                    border>
            <!-- <el-table-column type="selection" width="40" fixed="left">
             </el-table-column>-->
            <el-table-column type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
            </el-table-column>
            <el-table-column prop="hrno" label="人力工号" width="200">
              <template slot-scope="scope">
                <el-input type="text" v-model.trim="scope.row.hrno" :disabled ="!docStatus"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="systemcode" label="系统代码"  width="200">
              <template slot-scope="scope">
                <el-select
                  @change="(value)=>{selectChangeSystemCode(value,scope.$index, scope.row)}"
                  :disabled ="!docStatus"
                  v-model="scope.row.systemcode"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="(query)=>{remoteMethodSystemCode(query,scope.$index, scope.row)}"
                  :loading="scope.row.loadingSystemCode">
                  <el-option
                    v-for="(item,index) in scope.row.optionsSystemCode"
                    :key="item.value+index+scope.$index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="systemname" label="系统名称"  min-width="200">
              <template slot-scope="scope">
                <el-select
                  @change="(value)=>{selectChangeSystemName(value,scope.$index, scope.row)}"
                  :disabled ="!docStatus"
                  v-model="scope.row.systemname"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="(query)=>{remoteMethodSystemName(query,scope.$index, scope.row)}"
                  :loading="scope.row.loadingSystemName">
                  <el-option
                    v-for="(item,index) in scope.row.optionsSystemName"
                    :key="item.value+index+scope.$index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="usercode" label="工号"  width="200">
              <template slot-scope="scope">
                <el-select
                  @change="(value)=>{selectChangeUserCode(value,scope.$index, scope.row)}"
                  :disabled ="!docStatus"
                  v-model="scope.row.usercode"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="(query)=>{remoteMethodUserCode(query,scope.$index, scope.row)}"
                  :loading="scope.row.loadingUserCode">
                  <el-option
                    v-for="(item,index) in scope.row.optionsUserCode"
                    :key="item.value+index+scope.$index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="usercname" label="姓名"  width="200">
              <template slot-scope="scope">
                <el-select
                  @change="(value)=>{selectChangeUserName(value,scope.$index, scope.row)}"
                  :disabled ="!docStatus"
                  v-model="scope.row.usercname"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="(query)=>{remoteMethodUserName(query,scope.$index, scope.row)}"
                  :loading="scope.row.loadingUserName">
                  <el-option
                    v-for="(item,index) in scope.row.optionsUserName"
                    :key="item.value+index+scope.$index"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
           <!-- <el-table-column prop="gradecode" label="岗位代码"  width="120">
              <template slot-scope="scope">
                <el-select
                  @change="(value)=>{selectChangeGradeCode(value,scope.$index, scope.row)}"
                  :disabled ="!docStatus"
                  v-model="scope.row.gradecode"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="(query)=>{remoteMethodGradeCode(query,scope.$index, scope.row)}"
                  :loading="scope.row.loadingGradeCode">
                  <el-option
                    v-for="item in scope.row.optionsGradeCode"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="gradename" label="岗位名称"  width="260"  :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <el-tooltip effect="dark" :content="scope.row.gradename"  placement="top">
                  <el-select
                    @change="(value)=>{selectChangeGradeName(value,scope.$index, scope.row)}"
                    :disabled ="!docStatus"
                    v-model="scope.row.gradename"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="(query)=>{remoteMethodGradeName(query,scope.$index, scope.row)}"
                    :loading="scope.row.loadingGradeName">
                    <el-option
                      v-for="item in scope.row.optionsGradeName"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </template>
            </el-table-column>-->
            <el-table-column v-if="docStatus"  label="操作" width="150"  fixed="right" align="center" >
              <template slot-scope="scope">
                <el-button type="text" class="button-table-operate" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                <el-button type="text" class="button-table-operate" @click="handleCopy(scope.$index, scope.row)">复制</el-button>
                <!--                <el-button type="text" class="button-table-operate" @click="handleReset(scope.$index, scope.row)">重置</el-button>-->
                <!--              <div style="display: inline-block" v-if="scope.$index==0 && comcodeLevel !='4'"  @click="showSub">-->
                <!--                <span v-if="!comCodeDataSubVisible" style="color: #E9892D;font-size: 20px">-->
                <!--                  <i class="el-icon-circle-plus"></i>-->
                <!--                </span>-->
                <!--                <span  v-else style="color: #E9892D;font-size: 20px">-->
                <!--                      <i class="el-icon-remove"></i>-->
                <!--                </span>-->
                <!--              </div>-->
              </template>
            </el-table-column>
            <!--<el-table-column label="操作" width="100"  fixed="right" align="center" >
              <template slot-scope="scope">
                <el-dropdown v-if="currentTab.name=='upload'"
                  trigger="click" placement="bottom"
                  @command="handleCommand($event,scope.$index,scope.row)">
                                  <span class="el-dropdown-link table-operate">
                                    编辑<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
                                  </span>
                  <el-dropdown-menu slot="dropdown" class="table-operate">
                    <el-dropdown-item>
                      <el-upload
                        class="upload-demo"
                        action="/gcd/underwriteExp/upload"
                        :data={policyNo:scope.row.policyNo}
                        :before-upload="beforeUpload"
                        :show-file-list="false">
                        <el-button size="text" class="button-table-operate button-table-upload" @click="setFileIsExists(scope)">上传资料</el-button>
                      </el-upload>
                    </el-dropdown-item>
                    <el-dropdown-item command="download" >下载资料</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-button v-else  size="text" class="button-table-operate" @click="handleDownload(scope.$index, scope.row)">下载资料</el-button>
            </template>
            </el-table-column>-->
            <!--<div slot="append" style="text-align: center">
              测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
            </div>-->
          </el-table>
          <!-- <div>
             <my-table :col="col"
                       :data="calculateData">
             </my-table>
           </div>-->
        </div>
        <div class="form-bottom-button">
          <el-button type="primary" class="button-base button-form-query" v-if="docStatus"  @click="commitData()">提交</el-button>
          <el-button type="primary" class="button-base button-form-query"  @click="closePage()">关闭</el-button>
        </div>
        <div class="toolbar pagination-base">
          <el-button class="pagination-button"  v-if="docStatus"  @click="handleTemplateDownload()">模板下载</el-button>
          <div class="pagination-upload-container" v-if="docStatus" >
            <nx-upload-excel-component :on-success='handleSuccess' :before-upload="beforeUpload" textName="导入信息"></nx-upload-excel-component>
          </div>
<!--          <el-button class="pagination-button"  style="float: right;margin-right: 0" v-if="docStatus"  @click="querygradesBymenuName()">菜单岗位查询</el-button>-->
          <!--<div class="pagination-total">总共有{{pagination.total}}条资料信息</div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="prev, pager, next,sizes, jumper"
            :total="pagination.total"
          >
          </el-pagination>-->
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
  .app-container{
    padding-top: 0;
    padding-bottom: 0;
  }
  .app-container-bg{
    border-top: none;
  }
  .tabs-content-item{
    padding: 20px;
  }
  .pageName{
    text-align: center;
    font-size: 24px;
    padding: 5px 0;
    border-bottom: 1px solid #E9892D;
    margin-bottom: 10px;
  }
</style>
<script src="./oaAutoEhrBand.js"></script>
