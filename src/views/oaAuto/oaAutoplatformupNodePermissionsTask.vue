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
            <el-table :data="results" style="width: 100%;margin-bottom: 20px;" border>

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
                    <el-tooltip :tabindex="0" class="item" effect="dark" :content="cloRisk.queryqycxbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryqycxbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>
                        企业财产保险
                      </span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select :remove-tag="(data) => {
                      console.log('~~~~~~~', data);
                    }" multiple v-model="scope.row.businessPropertyInsurance" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="specifyingLiability" label="工程险（列明责任）" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="1" class="item" effect="dark" :content="cloRisk.querygcx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>工程险（列明责任）</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.specifyingLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column align="center" prop="engineeringAllRisks" label="工程一切险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="2" class="item" effect="dark" :content="cloRisk.querygcyqx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcyqx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>工程一切险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.engineeringAllRisks" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialSubject" label="特殊标的保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="3" class="item" effect="dark" :content="cloRisk.querytsbdbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querytsbdbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊标的保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.specialSubject" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialComprehensive" label="特殊综合险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="4" class="item" effect="dark" :content="cloRisk.querytszhx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querytszhx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊综合险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.specialComprehensive" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="oil" label="石油保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="5" class="item" effect="dark" :content="cloRisk.querysybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querysybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>石油保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.oil" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="aviation" label="航空航天保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="6" class="item" effect="dark" :content="cloRisk.queryhthkbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhthkbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>航空航天保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.aviation" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="nuclearEnergy" label="核能源保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="7" class="item" effect="dark" :content="cloRisk.queryhnybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhnybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>航空航天保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.nuclearEnergy" placeholder="无权限">
                      <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="责任险">

                <el-table-column align="center" prop="publicLiability" label="公众责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="8" class="item" effect="dark" :content="cloRisk.queryzrxgzzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxgzzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>公众责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.publicLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="employerLiability" label="雇主责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="9" class="item" effect="dark" :content="cloRisk.queryzrxguzhuzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxguzhuzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>雇主责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.employerLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="productLiability" label="产品责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="10" class="item" effect="dark" :content="cloRisk.queryzrxcpzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzrxcpzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>产品责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.productLiability" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="professionalResponsibility" label="职业责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="11" class="item" effect="dark" :content="cloRisk.queryzyzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryzyzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>职业责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.professionalResponsibility" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="otherResponsibilities" label="其他责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="12" class="item" effect="dark" :content="cloRisk.queryqtzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryqtzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>其他责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.otherResponsibilities" placeholder="无权限">
                      <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="信用险与保证险">

                <el-table-column align="center" prop="credit" label="信用保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="13" class="item" effect="dark" :content="cloRisk.queryxybx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryxybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>信用保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.credit" placeholder="无权限">
                      <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="ensure" label="保证保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="14" class="item" effect="dark" :content="cloRisk.querybzbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querybzbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>保证保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.ensure" placeholder="无权限">
                      <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="水险">

                <el-table-column align="center" prop="transportGoods" label="国内货物运输保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="15" class="item" effect="dark" :content="cloRisk.querygnhwysbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygnhwysbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>国内货物运输保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.transportGoods" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="cargoBooking" label="货运预约协议保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="16" class="item" effect="dark" :content="cloRisk.queryhyyyxybx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryhyyyxybx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>货运预约协议保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.cargoBooking" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="container" label="集装箱" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="17" class="item" effect="dark" :content="cloRisk.queryjzx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryjzx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>集装箱</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.container" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="importExport" label="进出口货运" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="18" class="item" effect="dark" :content="cloRisk.queryjckhy" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.queryjckhy" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>进出口货运</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.importExport" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="ship" label="船舶保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="19" class="item" effect="dark" :content="cloRisk.querycbbx" placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querycbbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>船舶保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.ship" placeholder="无权限">
                      <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" label="个财个责">

                <el-table-column align="center" prop="familyProperty" label="普通家财保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="20" class="item" effect="dark" :content="cloRisk.querygcgzptjcbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzptjcbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>普通家财保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.familyProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="specialProperty" label="特殊家财保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="21" class="item" effect="dark" :content="cloRisk.querygcgztsjcbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgztsjcbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>特殊家财保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.specialProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="personalProperty" label="个人财产保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="22" class="item" effect="dark" :content="cloRisk.querygcgzgrccbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzgrccbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>个人财产保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.personalProperty" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="publicResponsibility" label="公众责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="23" class="item" effect="dark" :content="cloRisk.querygcgzgzzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzgzzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>公众责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.publicResponsibility" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="profession" label="职业责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="24" class="item" effect="dark" :content="cloRisk.querygcgzzyzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzzyzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>职业责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.profession" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column align="center" prop="other" label="其它责任保险" min-width="150">
                  <!-- 表头 -->
                  <template slot="header">
                    <el-tooltip :tabindex="25" class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx"
                      placement="top">
                      <div slot="content">
                        <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                      </div>
                      <span>其它责任保险</span>
                    </el-tooltip>
                  </template>
                  <template slot-scope="scope">
                    <el-select multiple v-model="scope.row.other" placeholder="无权限">
                      <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                        :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
                </el-table-column>

              </el-table-column>
              <el-table-column align="center" prop="yjx" label="意健险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip :tabindex="25" class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx"
                    placement="top">
                    <div slot="content">
                      <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                    </div>
                    <span>意健险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select multiple v-model="scope.row.yjx" placeholder="无权限">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="nx" label="农险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip :tabindex="25" class="item" effect="dark" :content="cloRisk.querygcgzqtzrbx"
                    placement="top">
                    <div slot="content">
                      <p v-for="(item, index) in cloRisk.querygcgzqtzrbx" :key="`_${index}}`">{{ item }} </p>
                    </div>
                    <span>农险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select multiple v-model="scope.row.nx" placeholder="无权限">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
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
