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
          <el-table :data="results" style="width: 100%;margin-bottom: 20px;" border>

            <el-table-column align="center" type="index" label="序号" width="60" fixed="left"
              class-name="SerialNumber">
            </el-table-column>
            <el-table-column align="center" prop="workNumber" label="工号" min-width="150">
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
            <el-table-column align="center" prop="nameUnderwriter" label="核保人姓名" min-width="150">
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

            <el-table-column align="center" label="企工特">
              <el-table-column align="center" prop="businessPropertyInsurance" label="企业财产保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-popover placement="bottom" width="400" trigger="hover">
                    <el-tree :props="{ children: 'children', label: 'label' }" :data="[{
                      label: '一级 1',
                      children: [{
                        label: '二级 1-1',
                        children: [{
                          label: '三级 1-1-1'
                        }]
                      }]
                    }, {
                      label: '一级 2',
                      children: [{
                        label: '二级 2-1',
                        children: [{
                          label: '三级 2-1-1'
                        }]
                      }, {
                        label: '二级 2-2',
                        children: [{
                          label: '三级 2-2-1'
                        }]
                      }]
                    }, {
                      label: '一级 3',
                      children: [{
                        label: '二级 3-1',
                        children: [{
                          label: '三级 3-1-1'
                        }]
                      }, {
                        label: '二级 3-2',
                        children: [{
                          label: '三级 3-2-1'
                        }]
                      }]
                    }]" show-checkbox
                      @check-change="businessPropertyInsurance_treeCheck">
                    </el-tree>
                    <el-button slot="reference">险种</el-button>
                  </el-popover>
                  <el-tooltip class="item" effect="dark" content="（0101-0112、0116-0117、0119、0121、0198、0199）"
                    placement="top">
                    <span>
                      企业财产保险
                    </span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.businessPropertyInsurance" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="specifyingLiability" label="工程险（列明责任）" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（0701、0702、0711）" placement="top">
                    <span>工程险（列明责任）</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.specifyingLiability" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="engineeringAllRisks" label="工程一切险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（0801-0806、0898-0899）" placement="top">
                    <span>工程一切险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.engineeringAllRisks" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="specialSubject" label="特殊标的保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（0201、0202、0205、0207-0211、0222）" placement="top">
                    <span>特殊标的保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.specialSubject" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="specialComprehensive" label="特殊综合险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（2303-2309、2311）" placement="top">
                    <span>特殊综合险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.specialComprehensive" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="oil" label="石油保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1213-1221、1299）" placement="top">
                    <span>石油保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.oil" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="aviation" label="航空航天保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1302-1306、1396-1399）" placement="top">
                    <span>航空航天保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.aviation" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in qgtOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="nuclearEnergy" label="核能源保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1401-1406、1498-1499）" placement="top">
                    <span>航空航天保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.nuclearEnergy" placeholder="请输入关键词">
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
                  <el-tooltip class="item" effect="dark"
                    content="（1501、1503、1505、1508、1509、1511-1515、1519、1520、1526-1530、1532-1537、1539-1541、1599）"
                    placement="top">
                    <span>公众责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.publicLiability" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="employerLiability" label="雇主责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1701、1703-1713、1719-1721、1798）" placement="top">
                    <span>雇主责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.employerLiability" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="productLiability" label="产品责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1601-1605、1698）" placement="top">
                    <span>产品责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.productLiability" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="professionalResponsibility" label="职业责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1801、1803-1819、1812-1822）" placement="top">
                    <span>职业责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.professionalResponsibility" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in zrxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="otherResponsibilities" label="其他责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（1901、1903-1912、1915-1917、1919、1924-1927、1930、1932、1935-1937、1941-1942）" placement="top">
                    <span>其他责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.otherResponsibilities" placeholder="请输入关键词">
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
                  <el-tooltip class="item" effect="dark" content="（2101-2102）" placement="top">
                    <span>信用保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.credit" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in xyxhbzxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="ensure" label="保证保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（2201、2202、2213、2227-2232、2235、2237、2239-2241）"
                    placement="top">
                    <span>保证保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.ensure" placeholder="请输入关键词">
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
                  <el-tooltip class="item" effect="dark" content="（0901、0903-0910、0912、0913、0915、0916、0918、0999）"
                    placement="top">
                    <span>国内货物运输保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.transportGoods" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="cargoBooking" label="货运预约协议保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（YAB0）" placement="top">
                    <span>货运预约协议保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.cargoBooking" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="container" label="集装箱" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（2001）" placement="top">
                    <span>集装箱</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.container" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="importExport" label="进出口货运" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark" content="（1001、1002、1099）" placement="top">
                    <span>进出口货运</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.importExport" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in sxOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="ship" label="船舶保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（1102、1103、1106、1107、1109-1113、1115-1117、1119、1196-1199）" placement="top">
                    <span>船舶保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.ship" placeholder="请输入关键词">
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
                  <el-tooltip class="item" effect="dark"
                    content="（0301、0302、0303、0304、0305、0306、0307、0308、0309、0310、0312、0313）" placement="top">
                    <span>普通家财保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.familyProperty" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="specialProperty" label="特殊家财保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（0401）" placement="top">
                    <span>特殊家财保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.specialProperty" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="personalProperty" label="个人财产保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（0601、0602、0604、0605、0606、0607、0608、0609、0610、0611、0612）" placement="top">
                    <span>个人财产保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.personalProperty" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="publicResponsibility" label="公众责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（1510、1517、1518、1521、1522、1523、1524、1525、1531、1535、1538、1544）" placement="top">
                    <span>公众责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.publicResponsibility" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="profession" label="职业责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（1820）" placement="top">
                    <span>职业责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.profession" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

              <el-table-column align="center" prop="other" label="其它责任保险" min-width="150">
                <!-- 表头 -->
                <template slot="header">
                  <el-tooltip class="item" effect="dark"
                    content="（1918、1923、1931、1938、1939、1940）" placement="top">
                    <span>其它责任保险</span>
                  </el-tooltip>
                </template>
                <template slot-scope="scope">
                  <el-select v-model="scope.row.other" placeholder="请输入关键词">
                    <el-option v-for="(item, index) in gcgzOtpions" :key="item.value + index + scope.$index"
                      :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-table-column>

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
          <el-button type="primary" class="button-base button-form-query" v-if="docStatus" @click="commitData">提交
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
<script src="./oaAutoplatformupNodePermissionsTask.js"></script>
