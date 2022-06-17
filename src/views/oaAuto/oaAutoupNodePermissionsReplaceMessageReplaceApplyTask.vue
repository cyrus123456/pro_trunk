<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <div class="pageName">双核权限模板岗位换人</div>
        <div class="form-base input-width-auto">
          <vue-element-loading :active="showloading" spinner="bar-fade-scale" :is-full-screen="true"
            :text="'数据处理中，请耐心等待...'" color="#E9892D" background-color="rgba(255, 255, 255, .5)" />
          <el-form class="form" autoComplete="on" ref="queryform" label-position="right" label-width="150px"
            label-suffix="：" size="medium">
            <el-row>
              <el-col :span="8" :offset="16">
                <div class="grid-content bg-purple-dark">
                  <el-form-item label-width="0px">
                    <div class="button-no-label">
                      <el-button type="primary" class="button-base button-form-query button-form-small" v-if="docStatus"
                        @click="handleAdd()">新增</el-button>
                    </div>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>

          </el-form>
        </div>
        <div class="table-base table-select-width-full">

          <el-table :data="results" style="width: 100%;margin-bottom: 20px;" border>
            <el-table-column align="center" type="index" label="序号" width="60" fixed="left"
              class-name="SerialNumber">
            </el-table-column>
            <el-table-column align="center" prop="comcode" label="机构代码" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.comcode" filterable remote :remote-method="comcodeRemoteMethod"
                  placeholder="请输入关键词" @change="comcodeChange(scope.row)">
                  <el-option v-for="(item, index) in comcodeOtpions" :key="item.value + index + scope.$index"
                    :label="item.value" :value="item.value">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="comname" label="机构名称" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.comname" filterable remote :remote-method="comcodeRemoteMethod"
                  placeholder="请输入关键词" @change="comnameChange(scope.row)">
                  <el-option v-for="(item, index) in comcodeOtpions" :key="item.value + index + scope.$index"
                    :label="item.label" :value="item.label">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="old_workNumber" label="原人员代码" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.old_workNumber" filterable remote :remote-method="old_workNumberRemoteMethod"
                  placeholder="请输入关键词" @change="old_workNumberChange(scope.row)">
                  <el-option v-for="(item, index) in old_workNumberOtpions" :key="item.value + index + scope.$index"
                    :label="item.value" :value="item.value">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="old_nameUnderwriter" label="原人员姓名" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.old_nameUnderwriter" filterable remote :remote-method="old_workNumberRemoteMethod"
                  placeholder="请输入关键词" @change="old_nameUnderwriterChange(scope.row)">
                  <el-option v-for="(item, index) in old_workNumberOtpions" :key="item.value + index + scope.$index"
                    :label="item.label" :value="item.label">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="workNumber" label="人员代码" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.workNumber" filterable remote :remote-method="workNumberRemoteMethod"
                  placeholder="请输入关键词" @change="workNumberChange(scope.row)">
                  <el-option v-for="(item, index) in workNumberOtpions" :key="item.value + index + scope.$index"
                    :label="item.value" :value="item.value">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="nameUnderwriter" label="人员名称" min-width="150">
              <template slot-scope="scope">
                <el-select v-model="scope.row.nameUnderwriter" filterable remote :remote-method="workNumberRemoteMethod"
                  placeholder="请输入关键词" @change="nameUnderwriterChange(scope.row)">
                  <el-option v-for="(item, index) in workNumberOtpions" :key="item.value + index + scope.$index"
                    :label="item.label" :value="item.label">
                    <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                  </el-option>
                </el-select>
              </template>
            </el-table-column>

            <el-table-column align="center" v-if="docStatus" label="操作" min-width="150" fixed="right">
              <template slot-scope="scope">
                <el-button type="text" class="button-table-operate" @click="handleDelete(scope.$index, scope.row)">删除
                </el-button>
                <el-button type="text" class="button-table-operate" @click="handleCopy(scope.$index, scope.row)">复制
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="form-bottom-button">
          <el-button type="primary" class="button-base button-form-query" v-if="docStatus" @click="commitData()">提交
          </el-button>
          <el-button type="primary" class="button-base button-form-query" @click="closePage()">关闭</el-button>
        </div>
        <div class="toolbar pagination-base">
          <el-button class="pagination-button" v-if="docStatus" @click="handleTemplateDownload()">模板下载</el-button>
          <div class="pagination-upload-container" v-if="docStatus">
            <nx-upload-excel-component :on-success='handleSuccess' :before-upload="beforeUpload" textName="导入信息">
            </nx-upload-excel-component>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" src="@/assets/style/app.scss">
</style>
<style scoped>
.app-container {
  padding-top: 0;
  padding-bottom: 0;
}

.app-container-bg {
  border-top: none;
}

.tabs-content-item {
  padding: 20px;
}

.pageName {
  text-align: center;
  font-size: 24px;
  padding: 5px 0;
  border-bottom: 1px solid #E9892D;
  margin-bottom: 10px;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
<script src="./oaAutoupNodePermissionsReplaceMessageReplaceApplyTask.js"></script>
