<template>
  <div class="app-container">
    <div class="app-container-bg">
      <section class="tabs-content-item">
        <div class="pageName">双核权限模板权限申请</div>
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
          <el-form ref="resultsForm" :model="results" label-width="80px">
            <el-table :disabled="formDisable" :data="results" style="width: 100%;margin-bottom: 20px;" border>

              <el-table-column align="center" type="index" label="序号" width="60" fixed="left" class-name="SerialNumber">
              </el-table-column>
              <el-table-column align="center" prop="workNumber" label="工号" min-width="150">
                <template slot-scope="scope">

                  <el-form-item :style="{ width: '100%', marginBottom: '0' }" label-width="0px"
                    :prop="`${scope.$index}.workNumber`" :inline-message="true" :rules="requiredRules">

                    <el-select v-model="scope.row.workNumber" filterable remote :remote-method="workNumberRemoteMethod"
                      placeholder="请输入关键词" @change="workNumberChange(scope.row); queryLevel(scope.row)">
                      <el-option v-for="(item, index) in workNumberOtpions" :key="item.value + index + scope.$index"
                        :label="item.value" :value="item.value">
                        <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                      </el-option>
                    </el-select>

                  </el-form-item>

                </template>
              </el-table-column>
              <el-table-column align="center" prop="nameUnderwriter" label="核保人姓名" min-width="150">
                <template slot-scope="scope">

                  <el-form-item :style="{ width: '100%', marginBottom: '0' }" label-width="0px"
                    :prop="`${scope.$index}.nameUnderwriter`" :inline-message="true" :rules="requiredRules">

                    <el-select v-model="scope.row.nameUnderwriter" filterable remote
                      :remote-method="workNumberRemoteMethod" placeholder="请输入关键词"
                      @change="nameUnderwriterChange(scope.row); queryLevel(scope.row)">
                      <el-option v-for="(item, index) in workNumberOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.label">
                        <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                      </el-option>
                    </el-select>

                  </el-form-item>

                </template>
              </el-table-column>
              <el-table-column align="center" prop="comcode" label="机构代码" min-width="150">
                <template slot-scope="scope">

                  <el-form-item :style="{ width: '100%', marginBottom: '0' }" label-width="0px"
                    :prop="`${scope.$index}.comcode`" :inline-message="true" :rules="requiredRules">

                    <el-select v-model="scope.row.comcode" filterable remote :remote-method="comcodeRemoteMethod"
                      placeholder="请输入关键词" @change="comcodeChange(scope.row); queryLevel(scope.row)">
                      <el-option v-for="(item, index) in comcodeOtpions" :key="item.value + index + scope.$index"
                        :label="item.value" :value="item.value">
                        <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                      </el-option>
                    </el-select>

                  </el-form-item>

                </template>
              </el-table-column>
              <el-table-column align="center" prop="comname" label="机构名称" min-width="150">
                <template slot-scope="scope">

                  <el-form-item :style="{ width: '100%', marginBottom: '0' }" label-width="0px"
                    :prop="`${scope.$index}.comname`" :inline-message="true" :rules="requiredRules">

                    <el-select v-model="scope.row.comname" filterable remote :remote-method="comcodeRemoteMethod"
                      placeholder="请输入关键词" @change="comnameChange(scope.row); queryLevel(scope.row)">
                      <el-option v-for="(item, index) in comcodeOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.label">
                        <span style="float: left">{{ item.value }}-{{ item.label }}</span>
                      </el-option>
                    </el-select>

                  </el-form-item>

                </template>
              </el-table-column>

              <el-table-column align="center" label="企工特">
                <el-table-column align="center" prop="businessPropertyInsurance" label="企业财产保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryqycxbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryqycxbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>
                        企业财产保险
                      </span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { businessPropertyInsuranceRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.businessPropertyInsurance" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'businessPropertyInsuranceGarbage' in scope.row ? scope.row.businessPropertyInsuranceGarbage.length : false"
                        multiple @remove-tag="(tag) => { businessPropertyInsuranceGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.businessPropertyInsuranceGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="specifyingLiability" label="工程险（列明责任）" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>工程险（列明责任）</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { specifyingLiabilityRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.specifyingLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'specifyingLiabilityGarbage' in scope.row ? scope.row.specifyingLiabilityGarbage.length : false"
                        multiple @remove-tag="(tag) => { specifyingLiabilityGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.specifyingLiabilityGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="engineeringAllRisks" label="工程一切险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcyqx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcyqx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>工程一切险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { engineeringAllRisksRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.engineeringAllRisks" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'engineeringAllRisksGarbage' in scope.row ? scope.row.engineeringAllRisksGarbage.length : false"
                        multiple @remove-tag="(tag) => { engineeringAllRisksGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.engineeringAllRisksGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialSubject" label="特殊标的保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querytsbdbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querytsbdbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊标的保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { specialSubjectRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.specialSubject" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'specialSubjectGarbage' in scope.row ? scope.row.specialSubjectGarbage.length : false"
                        multiple @remove-tag="(tag) => { specialSubjectGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.specialSubjectGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialComprehensive" label="特殊综合险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querytszhx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querytszhx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊综合险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { specialComprehensiveRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.specialComprehensive" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'specialComprehensiveGarbage' in scope.row ? scope.row.specialComprehensiveGarbage.length : false"
                        multiple @remove-tag="(tag) => { specialComprehensiveGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.specialComprehensiveGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="oil" label="石油保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querysybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querysybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>石油保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { oilRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.oil" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'oilGarbage' in scope.row ? scope.row.oilGarbage.length : false" multiple
                        @remove-tag="(tag) => { oilGarbageRemoveTag(tag, scope.row) }" v-model="scope.row.oilGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="aviation" label="航空航天保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryhthkbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhthkbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>航空航天保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { aviationRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.aviation" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'aviationGarbage' in scope.row ? scope.row.aviationGarbage.length : false" multiple
                        @remove-tag="(tag) => { aviationGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.aviationGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="nuclearEnergy" label="核能源保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryhnybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhnybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>航空航天保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { nuclearEnergyRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.nuclearEnergy" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'nuclearEnergyGarbage' in scope.row ? scope.row.nuclearEnergyGarbage.length : false"
                        multiple @remove-tag="(tag) => { nuclearEnergyGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.nuclearEnergyGarbage">
                        <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="责任险">

                <el-table-column align="center" prop="publicLiability" label="公众责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryzrxgzzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxgzzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>公众责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { publicLiabilityRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.publicLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'publicLiabilityGarbage' in scope.row ? scope.row.publicLiabilityGarbage.length : false"
                        multiple @remove-tag="(tag) => { publicLiabilityGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.publicLiabilityGarbage">
                        <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="employerLiability" label="雇主责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryzrxguzhuzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxguzhuzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>雇主责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { employerLiabilityRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.employerLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'employerLiabilityGarbage' in scope.row ? scope.row.employerLiabilityGarbage.length : false"
                        multiple @remove-tag="(tag) => { employerLiabilityGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.employerLiabilityGarbage">
                        <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="productLiability" label="产品责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryzrxcpzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxcpzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>产品责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { productLiabilityRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.productLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'productLiabilityGarbage' in scope.row ? scope.row.productLiabilityGarbage.length : false"
                        multiple @remove-tag="(tag) => { productLiabilityGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.productLiabilityGarbage">
                        <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="professionalResponsibility" label="职业责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryzyzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzyzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>职业责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { professionalResponsibilityRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.professionalResponsibility" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'professionalResponsibilityGarbage' in scope.row ? scope.row.professionalResponsibilityGarbage.length : false"
                        multiple @remove-tag="(tag) => { professionalResponsibilityGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.professionalResponsibilityGarbage">
                        <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="otherResponsibilities" label="其他责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryqtzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryqtzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>其他责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { otherResponsibilitiesRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.otherResponsibilities" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'otherResponsibilitiesGarbage' in scope.row ? scope.row.otherResponsibilitiesGarbage.length : false"
                        multiple @remove-tag="(tag) => { otherResponsibilitiesGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.otherResponsibilitiesGarbage">
                        <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="信用险与保证险">

                <el-table-column align="center" prop="credit" label="信用保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryxybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryxybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>信用保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { creditRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.credit" placeholder="无权限">
                      <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'creditGarbage' in scope.row ? scope.row.creditGarbage.length : false" multiple
                        @remove-tag="(tag) => { creditGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.creditGarbage">
                        <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="ensure" label="保证保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querybzbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querybzbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>保证保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { ensureRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.ensure" placeholder="无权限">
                      <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'ensureGarbage' in scope.row ? scope.row.ensureGarbage.length : false" multiple
                        @remove-tag="(tag) => { ensureGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.ensureGarbage">
                        <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="水险">

                <el-table-column align="center" prop="transportGoods" label="国内货物运输保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygnhwysbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygnhwysbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>国内货物运输保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { transportGoodsRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.transportGoods" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'transportGoodsGarbage' in scope.row ? scope.row.transportGoodsGarbage.length : false"
                        multiple @remove-tag="(tag) => { transportGoodsGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.transportGoodsGarbage">
                        <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="cargoBooking" label="货运预约协议保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryhyyyxybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhyyyxybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>货运预约协议保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { cargoBookingRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.cargoBooking" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'cargoBookingGarbage' in scope.row ? scope.row.cargoBookingGarbage.length : false"
                        multiple @remove-tag="(tag) => { cargoBookingGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.cargoBookingGarbage">
                        <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="container" label="集装箱" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryjzx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryjzx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>集装箱</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { containerRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.container" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'containerGarbage' in scope.row ? scope.row.containerGarbage.length : false" multiple
                        @remove-tag="(tag) => { containerGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.containerGarbage">
                        <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="importExport" label="进出口货运" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.queryjckhy" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryjckhy" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>进出口货运</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { importExportRemoveTag(tag, scope.row) }"
                      multiple v-model="scope.row.importExport" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'importExportGarbage' in scope.row ? scope.row.importExportGarbage.length : false"
                        multiple @remove-tag="(tag) => { importExportGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.importExportGarbage">
                        <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="ship" label="船舶保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querycbbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querycbbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>船舶保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag) => { shipRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.ship" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'shipGarbage' in scope.row ? scope.row.shipGarbage.length : false" multiple
                        @remove-tag="(tag) => { shipGarbageRemoveTag(tag, scope.row) }" v-model="scope.row.shipGarbage">
                        <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="个财个责">

                <el-table-column align="center" prop="familyProperty" label="普通家财保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgzptjcbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzptjcbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>普通家财保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { familyPropertyRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.familyProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'familyPropertyGarbage' in scope.row ? scope.row.familyPropertyGarbage.length : false"
                        multiple @remove-tag="(tag) => { familyPropertyGarbageRemoveTag(tag, scope.row) }"
                        v-model="scope.row.familyPropertyGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialProperty" label="特殊家财保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgztsjcbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgztsjcbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊家财保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag) => { specialPropertyRemoveTag(tag, scope.row) }" multiple
                      v-model="scope.row.specialProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'specialPropertyGarbage' in scope.row ? scope.row.specialPropertyGarbage.length:false"
                        multiple @remove-tag="(tag)=>{specialPropertyGarbageRemoveTag(tag,scope.row)}"
                        v-model="scope.row.specialPropertyGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="personalProperty" label="个人财产保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgzgrccbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzgrccbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>个人财产保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag)=>{ personalPropertyRemoveTag(tag,scope.row)}"
                      multiple v-model="scope.row.personalProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'personalPropertyGarbage' in scope.row ? scope.row.personalPropertyGarbage.length:false"
                        multiple @remove-tag="(tag)=>{personalPropertyGarbageRemoveTag(tag,scope.row)}"
                        v-model="scope.row.personalPropertyGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="publicResponsibility" label="公众责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgzgzzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzgzzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>公众责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable"
                      @remove-tag="(tag)=>{ publicResponsibilityRemoveTag(tag,scope.row)}" multiple
                      v-model="scope.row.publicResponsibility" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'publicResponsibilityGarbage' in scope.row ? scope.row.publicResponsibilityGarbage.length:false"
                        multiple @remove-tag="(tag)=>{publicResponsibilityGarbageRemoveTag(tag,scope.row)}"
                        v-model="scope.row.publicResponsibilityGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="profession" label="职业责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgzzyzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzzyzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>职业责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag)=>{ professionRemoveTag(tag,scope.row)}"
                      multiple v-model="scope.row.profession" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'professionGarbage' in scope.row ? scope.row.professionGarbage.length:false" multiple
                        @remove-tag="(tag)=>{professionGarbageRemoveTag(tag,scope.row)}"
                        v-model="scope.row.professionGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="other" label="其它责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>其它责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :disabled="formDisable" @remove-tag="(tag)=>{ otherRemoveTag(tag,scope.row)}" multiple
                      v-model="scope.row.other" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <el-row>
                      <el-select class="garbage_class"
                        v-if="'otherGarbage' in scope.row ? scope.row.otherGarbage.length:false" multiple
                        @remove-tag="(tag)=>{otherGarbageRemoveTag(tag,scope.row)}" v-model="scope.row.otherGarbage">
                        <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                          :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-row>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" prop="yjx" label="意健险" min-width="150">
                <!-- 表头 -->
                <!-- <template slot="header">
                  <el-tooltip  class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx"
                    placement="top">
                    <div slot="content">
                      <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                    </div>
                    <span>意健险</span>
                  </el-tooltip>
                </template> -->
                <template slot-scope="scope">
                  <el-select :disabled="formDisable" @remove-tag="(tag)=>{ yjxRemoveTag(tag,scope.row)}" multiple
                    v-model="scope.row.yjx" placeholder="无权限">
                    <el-option v-for="(item, index) in yjxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-row>
                    <el-select class="garbage_class" v-if="'yjxGarbage' in scope.row ? scope.row.yjxGarbage.length:false"
                      multiple @remove-tag="(tag)=>{yjxGarbageRemoveTag(tag,scope.row)}" v-model="scope.row.yjxGarbage">
                      <el-option v-for="(item, index) in yjxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="nx" label="农险" min-width="150">
                <!-- 表头 -->
                <!-- <template slot="header">
                  <el-tooltip  class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx"
                    placement="top">
                    <div slot="content">
                      <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                    </div>
                    <span>农险</span>
                  </el-tooltip>
                </template> -->
                <template slot-scope="scope">
                  <el-select :disabled="formDisable" @remove-tag="(tag)=>{ nxRemoveTag(tag,scope.row)}" multiple
                    v-model="scope.row.nx" placeholder="无权限">
                    <el-option v-for="(item, index) in nxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-row>
                    <el-select class="garbage_class" v-if="'nxGarbage' in scope.row ? scope.row.nxGarbage.length:false"
                      multiple @remove-tag="(tag)=>{nxGarbageRemoveTag(tag,scope.row)}" v-model="scope.row.nxGarbage">
                      <el-option v-for="(item, index) in nxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-row>
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
          </el-form>
        </div>
        <div class="form-bottom-button">
          <el-button type="primary" class="button-base button-form-query" v-if="docStatus" @click="commitData">提交
          </el-button>
          <el-button type="primary" class="button-base button-form-query" @click="closePage()">关闭</el-button>
        </div>
        <div class="toolbar pagination-base">
          <el-button class="pagination-button" v-if="docStatus&&false" @click="handleTemplateDownload()">模板下载
          </el-button>
          <div class="pagination-upload-container" v-if="docStatus&&false">
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
/deep/ .garbage_class .el-select__tags-text {
  color: red;
  text-decoration: line-through !important;
}

/deep/ .table-base .el-form-item__error {
  display: block !important;
  margin-left: 0 !important;
}

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
<script src="./oaAutoplatformupNodePermissionsTask.js"></script>
