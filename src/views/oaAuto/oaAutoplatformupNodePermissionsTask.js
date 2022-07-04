import { dualCorePermissions, getOAUploadCount } from '@/api/oaAuto.js'
import { getToken } from '@/utils/auth' // 验权
import nxUploadExcelComponent from '@/components/nx-upload-excel'

export default {
  name: 'oaAutoplatformupNodePermissionsTask',
  components: { nxUploadExcelComponent },
  props: [],
  data () {
    return {
      formDisable: false,
      requiredRules: [
        { required: true, message: '不能为空', trigger: ['blur', 'change'] }
      ],
      // 每行险种查询
      cloRisk: {
        queryqycxbx: [
          '0101--财产基本保险',
          '0102--财产综合保险',
          '0103--财产保险',
          '0104--财产一切险',
          '0105--机器损坏保险',
          '0106--商业楼宇财产基本保险',
          '0107--商业楼宇财产综合保险',
          '0108--商业楼宇财产一切险',
          '0109--电厂财产基本险',
          '0110--电厂财产综合险',
          '0111--电厂财产一切险',
          '0112--电厂机器损坏险',
          '0116--粮食、棉花、麻料、油料仓储损失保险',
          '0117--抵押物损失保险',
          '0119--高新技术企业财产综合险',
          '0121--高新技术企业财产一切险',
          '0198--财产一切险(分入)',
          '0199--机器损坏保险'
        ], // 企业财产保险（0101-0112、0116-0117、0119、0121、0198、0199）
        querygcx: [
          '0701--建筑安装工程险',
          '0702--施工机器设备保险',
          '0711--施工机具综合保险（重庆）'
        ], // 工程险（列明责任）（0701、0702、0711）
        querygcyqx: [
          '0801--建筑工程一切险',
          '0802--安装工程一切险',
          '0803--公路建筑工程一切险',
          '0804--地铁建筑工程一切险',
          '0805--地铁安装工程一切险',
          '0806--装修工程保险条款',
          '0898--建筑工程一切险(分入)',
          '0899--安装工程一切险(分入)'
        ], // 工程一切险（0801-0806、0898-0899）
        querytsbdbx: [
          '0201--计算机保险',
          '0207--企业用电安全保险',
          '0208--盗窃抢劫保险',
          '0209--个体工商户财产保险',
          '0210--土地附属物财产损失保险',
          '0211--活动意外取消保险',
          '0212--突发公共卫生事件防控保险',
          '0222--艺术品财产损失保险'
        ], // 特殊标的保险（0201、0202、0205、0207-0211、0222）
        querytszhx: [
          '2303--办公室综合保险',
          '2304--加油站综合保险',
          '2305--工程机械设备保险',
          '2306--“商保通”工商企业综合保险',
          '2307--“商保通”工商企业综合险',
          '2308--电梯安全综合保险',
          '2309--网络安全综合保险',
          '2311--互联网域名安全险'
        ], // 特殊综合险（2303-2309、2311）
        querysybx: [
          '1213--石油类财产基本险',
          '1214--石油类财产综合险',
          '1215--石油类财产一切险',
          '1216--石油类机器损坏险',
          '1217--石油类建工一切险',
          '1218--石油类安工一切险',
          '1219--石油类公众责任险',
          '1220--石油类雇主责任险',
          '1221--石油与天然气钻井设备一切险（2014版）',
          '1299--石油天然气钻井设备一切险（分入）'
        ], // 石油保险（1213-1221、1299）
        queryhthkbx: [
          '1302--飞机保险',
          '1303--卫星发射保险',
          '1304--卫星运行寿命保险',
          '1305--卫星及发射责任保险',
          '1306--无人机综合保险',
          '1396--航空保险（分入）',
          '1397--航天保险（分入）',
          '1398--卫星及发射责任保险（分入）',
          '1399--航空航天保险(分入)'
        ], // 航空航天保险（1302-1306、1396-1399）
        queryhnybx: [
          '1401--核能源财产一切险',
          '1402--核能源机器损坏险',
          '1403--核能源建工一切险',
          '1404--核能源安工一切险',
          '1405--核能源公众责任险',
          '1406--核能源雇主责任险',
          '1498--石油天然气钻井设备一切险（分入）',
          '1499--核物质损失险（分入）'
        ], // 核能源保险（1401-1406、1498-1499）
        queryzrxgzzrbx: [
          '1501--公众责任保险',
          '1503--校(园)方责任保险',
          '1505--电梯责任保险',
          '1508--旅行社责任保险',
          '1509--火灾公众责任保险(非定额)',
          '1511--银行外包责任保险',
          '1512--停车场责任保险',
          '1513--全国职业院校统保项目校园方责任险',
          '1514--驾驶员培训学校责任保险',
          '1515--餐饮场所责任保险条款',
          '1519--全国职业院校实习生责任保险',
          '1520-- 环境污染责任险',
          '1526--高尔夫一杆进洞保险',
          '1527--养老服务机构责任保险',
          '1528--全国普通高等学校学生实习责任险',
          '1529--全国职业院校学生安全综合责任保险',
          '1530--全国高等学校校方责任保险',
          '1532--高新技术企业环境污染责任保险条款',
          '1533--风景名胜区责任险',
          '1534--非义务教育校方责任保险（云南）',
          '1535--机动车驾驶人考试责任保险',
          '1536--活动组织者责任保险',
          '1537--环境污染责任保险B款条款（2018版）',
          '1539--银保渠道公众责任保险',
          '1540--展览会责任保险',
          '1541--阳光财产保险股份有限公司灾害民生综合保险',
          '1599--公众责任保险(分入)'
        ], // 公众责任保险（1501、1503、1505、1508、1509、1511-1515、1519、1520、1526-1530、1532-1537、1539-1541、1599）
        queryzrxguzhuzrbx: [
          '1701--雇主责任保险',
          '1703--安全生产责任保险',
          '1704--阳光补充工伤雇主责任保险',
          '1705--阳光金盾——企业员工综合保障计划',
          '1706--高危行业雇主责任保险',
          '1707--校（园）方责任(教职员工)保险',
          '1708--河南安全生产责任保险',
          '1709--吉林安全生产责任保险',
          '1710--建筑施工企业雇主责任保险',
          '1711--教职工校方责任保险',
          '1712--高新技术企业雇主责任保险条款',
          '1713--山东安全生产责任保险',
          '1719--新疆维吾尔自治区安全生产责任保险',
          '1720--银保渠道雇主责任保险',
          '1721--建筑施工行业安全生产责任保险',
          '1798--雇主责任保险(分入)'
        ], // 雇主责任保险（1701、1703-1713、1719-1721、1798）
        queryzrxcpzrbx: [
          '1601--产品责任险（国内）',
          '1602--产品责任险（涉外）',
          '1603--食品安全责任保险',
          '1604--高新技术企业产品责任保险条款',
          '1605--首台（套）重大技术装备保险',
          '1698--首台（套）重大技术装备综合保险（分入）'
        ], // 产品责任保险（1601-1605、1698）
        queryzyzrbx: [
          '1801--律师职业责任保险',
          '1803--医疗责任保险',
          '1804--物业管理责任保险',
          '1805--董监事及高级管理人员责任保险',
          '1806--承租人责任保险',
          '1807--保险经纪人职业责任保险',
          '1808--建设工程勘察责任保险',
          '1809--建设工程设计责任保险',
          '1810--职业责任保险',
          '1811--保险代理人职业责任保险',
          '1812--动产质押监管责任保险',
          '1813--宁夏回族自治区医疗机构医疗责任保险',
          '1814--唐山市医疗机构医疗责任保险',
          '1815--注册会计师职业责任保险',
          '1816--甘肃医疗责任保险',
          '1817--执业医师职业责任保险',
          '1818--广东医疗责任保险',
          '1819--导游执业责任保险条款',
          '1820--个人保险代理人职业责任险',
          '1821--军队医疗机构医疗责任保险',
          '1822--专利代理人责任险（2018版）'

        ], // 职业责任保险（1801、1803-1819、1812-1822）
        queryqtzrbx: [
          '1901--特种设备第三者责任保险',
          '1903--道路客运承运人责任保险',
          '1904--供电责任保险',
          '1905--道路危险货物承运人责任保险',
          '1906--承运人旅客责任保险',
          '1907--长途汽车客运治安责任保险',
          '1908--网络游戏运营商用户损失责任保险',
          '1909--机动车辆延长保修责任保险',
          '1910--延保服务公司机动车辆延长保修责任保险清单',
          '1911--建设工程履约保证金责任险',
          '1912--校车承运人责任保险',
          '1915--道路危险货物承运人责任保险',
          '1916--公路货运承运人责任保险条款（2014版）',
          '1917--浙江省分公司道路客运承运人旅客责任保险',
          '1919--诉讼财产保全责任保险',
          '1924--机动车保修责任保险',
          '1925--建筑工程质量保险',
          '1926--投标保证金责任险',
          '1927--工程质量潜在缺陷保险',
          '1930--电器保修服务合同综合责任保险',
          '1932--“工商通保”工商企业综合保险',
          '1935--网络预约出租汽车经营者责任保险',
          '1936--继续执行责任保险',
          '1937--生命科学责任保险',
          '1941--执行悬赏责任保险',
          '1942--司法救助保险'
        ], // 其他责任保险（1901、1903-1912、1915-1917、1919、1924-1927、1930、1932、1935-1937、1941-1942）
        queryxybx: [
          '2101--国内短期贸易信用险',
          '2102--信用卡履约信用保险'
        ], // 信用保险（2101-2102）
        querybzbx: [
          '2201--产品质量保证保险',
          '2202--雇员忠诚保证保险',
          '2213--建设项目施工投标保证保险',
          '2227--投标履约保证保险',
          '2228--建设工程施工合同履约保证保险',
          '2229--建设工程施工合同预付款履约保证保险',
          '2230--建设工程质量保证保险',
          '2231--关税履约保证保险（直保模式）',
          '2232--建设工程施工工人工资支付保证保险',
          '2235--采购合同履约保证保险',
          '2237--建设工程合同款支付保证保险',
          '2239--售电公司履约保证保险',
          '2240--继续执行保证保险',
          '2241--拍卖竞拍履约保证保险'
        ], // 保证保险（2201、2202、2213、2227-2232、2235、2237、2239-2241）
        querygnhwysbx: [
          '0901--国内公路运输货物保险',
          '0903--国内铁路运输货物保险',
          '0904--国内航空货物运输保险',
          '0905--国内航空旅客行李保险条款（2012版）',
          '0906--国内水路货物运输保险',
          '0907--国内水路、陆路货物运输保险',
          '0909--国内公路货物运输定额保险',
          '0910--管道油、气运输保险',
          '0912--货到付款卖家运费保险',
          '0913--物流责任保险',
          '0915--码头营运人责任保险条款(2014版)',
          '0916--无船承运人保证金责任保险',
          '0918--公路货运承运人责任保险条款(2014版)',
          '0999--国内水路、陆路货物运输保险(分入)'
        ], // 国内货物运输保险（0901、0903-0910、0912、0913、0915、0916、0918、0999）
        queryhyyyxybx: [
          'YAB0--货物运输预约保险'
        ], // 货运预约协议保险（YAB0）
        queryjzx: [
          '2001--集装箱保险'
        ], // 集装箱（2001）
        queryjckhy: [
          '1001--进口货物保险',
          '1002--出口货物保险',
          '1099--进出口货物运输保险(分入)'
        ], // 进出口货运（1001、1002、1099）
        querycbbx: [
          '1102--沿海内河船舶保险',
          '1103--船舶建造保险',
          '1106--沿海内河渔船保险',
          '1107--船舶油污责任保险',
          '1109--船舶保险',
          '111--',
          '1110--协会船舶险条款（CL280-95）',
          '1111--协会船舶险条款（CL280-83）',
          '1112--协会船舶增加值保险（CL290-95)',
          '1113--协会船舶增加值保险（CL290-83)',
          '1115--船东保障和赔偿责任保险',
          '1116--水路货物运输承运人责任保险条款（2014版）',
          '1117--游艇保险',
          '1119--远洋船舶船东保障和赔偿责任保险',
          '1196--船舶油污责任保险(分入)',
          '1197--船东保障与赔偿责任保险(分入)',
          '1198--沿海内河船舶保险(分入)',
          '1199--船舶建造险(分入)'
        ], // 船舶保险（1102、1103、1106、1107、1109-1113、1115-1117、1119、1196-1199）
        querygcgzptjcbx: [
          '0301--家庭财产综合保险条款',
          '0302--家庭财产火灾损失保险条款',
          '0303--家用燃气财产损失保险条款',
          '0304--定额家财保险',
          '0305--信用卡盗用保险',
          '0306--家用燃气综合保险',
          '0307--家庭财产综合保险(A款)条款（2015版）',
          '0308--酒店取消保险',
          '0309--火车票退票保险',
          '0310--拼车行程取消保险',
          '0312--安心购票保障保险',
          '0313--城乡居民住宅地震巨灾保险'
        ], // 普通家财保险 0301 0302 0303  0304 0305 0306 0307 0308 0309 0310 0312 0313
        querygcgztsjcbx: [
          '0401--个人贷款抵押房屋保险'
        ], // 特殊家财保险 0401
        querygcgzgrccbx: [
          '0601--电动自行车盗抢保险',
          '0602--个人账户资金损失保险',
          '0604--碎屏损失保险',
          '0605--预订取消保险',
          '0606--酒店取消保险',
          '0607--盗窃抢劫保险',
          '0608--电动自行车综合保险',
          '0609--签证拒签保险',
          '0610--返乡处理亲属后事交通费用保险',
          '0611--数码产品意外损失保险',
          '0612--宠物医疗费用损失保险'
        ], // 个人财产保险0601 0602 0604 0605 0606 0607 0608 0609 0610 0611 0612
        querygcgzgzzrbx: [
          '1510--阳光风景名胜景区个人责任保险',
          '1517--非机动车辆第三者责任险',
          '1518--国家机关人员责任险',
          '1521--宠物责任保险',
          '1522--个人责任保险',
          '1523--家庭/居家责任保险',
          '1524--家政服务人员责任保险条款',
          '1525--监护人责任保险',
          '1531--个人消费维权责任保险',
          '1535--机动车驾驶人考试责任保险',
          '1538--逛吃住行全家保',
          '1544--劳动教育基地责任保险'
        ], // 公众责任保险1510 1517 1518 1521 1522 1523 1524 1525 1531 1535 1538 1544
        querygcgzzyzrbx: [
          '1820--个人保险代理人职业责任险'
        ], // 职业责任保险 1820
        querygcgzqtzrbx: [
          '1918--旅程取消责任保险',
          '1923--旅行天气险',
          '1931--航空旅行旅程延误保险',
          '1938--法律费用补偿保险',
          '1939--全屋家电保',
          '1940--不明第三方侵权损失费用补偿保险'
        ] // 其它责任保险1918 1923 1931 1938 1939 1940
      },
      showloading: false,
      colNameMap: {
        comcode: {
          numName: '',
          father: ''
        },
        comname: {
          numName: '',
          father: ''
        },
        nameUnderwriter: {
          numName: '',
          father: ''
        },
        workNumber: {
          numName: '',
          father: ''
        },
        businessPropertyInsurance: {
          numName: '01',
          father: 'qgt'
        },
        specifyingLiability: {
          numName: '07',
          father: 'qgt'
        },
        engineeringAllRisks: {
          numName: '08',
          father: 'qgt'
        },
        specialSubject: {
          numName: '02',
          father: 'qgt'
        },
        specialComprehensive: {
          numName: '23',
          father: 'qgt'
        },
        oil: {
          numName: '12',
          father: 'qgt'
        },
        aviation: {
          numName: '13',
          father: 'qgt'
        },
        nuclearEnergy: {
          numName: '14',
          father: 'qgt'
        },
        publicLiability: {
          numName: '15',
          father: 'zrx'
        },
        employerLiability: {
          numName: '17',
          father: 'zrx'
        },
        productLiability: {
          numName: '16',
          father: 'zrx'
        },
        professionalResponsibility: {
          numName: '18',
          father: 'zrx'
        },
        otherResponsibilities: {
          numName: '19',
          father: 'zrx'
        },
        credit: {
          numName: '21',
          father: 'xyxybzx'
        },
        ensure: {
          numName: '22',
          father: 'xyxybzx'
        },
        transportGoods: {
          numName: '09',
          father: 'sx'
        },
        cargoBooking: {
          numName: 'YAB0',
          father: 'sx'
        },
        container: {
          numName: '20',
          father: 'sx'
        },
        importExport: {
          numName: '10',
          father: 'sx'
        },
        ship: {
          numName: '11',
          father: 'sx'
        },
        familyProperty: {
          numName: '03',
          father: 'gcgz'
        },
        specialProperty: {
          numName: '04',
          father: 'gcgz'
        },
        personalProperty: {
          numName: '06',
          father: 'gcgz'
        },
        publicResponsibility: {
          numName: '15',
          father: 'gcgz'
        },
        profession: {
          numName: '18',
          father: 'gcgz'
        },
        other: {
          numName: '19',
          father: 'gcgz'
        },
        yjx: {
          numName: '27',
          father: 'yjx'
        },
        nx: {
          numName: '28',
          father: 'nx'
        }
      },
      results: [], // 表格数据
      docStatus: true, // 展示按按钮
      comcodeOtpions: [], // 机构代码下拉值
      workNumberOtpions: [], // 工号下拉值
      qgtOtpions: [], // 企工特下拉值
      zrxOtpions: [], // 责任险下拉值
      xyxhbzxOtpions: [], // 信用险和保证险模板下拉值
      sxOtpions: [], // 水险下拉值
      gcgzOtpions: [], // 个财个责模板下拉值,
      yjxOtpions: [], // 意健险下拉值,
      nxOtpions: [], // 农险下拉值,
      qgt: [], // 双核模板
      zrx: [], // 双核模板
      xyxybzx: [], // 双核模板
      sx: [], // 双核模板
      gcgz: [], // 双核模板
      yjx: [], // 双核模板
      nx: [], // 双核模板
      businessPropertyInsuranceGarbage: [],
      specifyingLiabilityGarbage: [],
      engineeringAllRisksGarbage: [],
      specialSubjectGarbage: [],
      specialComprehensiveGarbage: [],
      oilGarbage: [],
      aviationGarbage: [],
      nuclearEnergyGarbage: [],
      publicLiabilityGarbage: [],
      employerLiabilityGarbage: [],
      productLiabilityGarbage: [],
      professionalResponsibilityGarbage: [],
      otherResponsibilitiesGarbage: [],
      creditGarbage: [],
      ensureGarbage: [],
      transportGoodsGarbage: [],
      cargoBookingGarbage: [],
      containerGarbage: [],
      importExportGarbage: [],
      shipGarbage: [],
      familyPropertyGarbage: [],
      specialPropertyGarbage: [],
      personalPropertyGarbage: [],
      publicResponsibilityGarbage: [],
      professionGarbage: [],
      otherGarbage: [],
      yjxGarbage: [],
      nxGarbage: []
    }
  },
  setup () {
    return {}
  },
  methods: {
    initPage () {
      if (getToken('oaAutoplatformupNodePermissionsTask') && getToken('oaAutoplatformupNodePermissionsTask').length > 0) {
        this.results = getToken('oaAutoplatformupNodePermissionsTask')
        this.results.forEach(item => {
          if (!this.results.some(itemsome => {
            return itemsome.workNumber === item.workNumber &&
              itemsome.nameUnderwriter === item.nameUnderwriter &&
              itemsome.comcode === item.comcode &&
              itemsome.comname === item.comname
          })) {
            this.initqueryLevel(item)
          }
        })
      }
    },
    closePage () {
      window.open('about:blank', '_top').close()
    },
    nxRemoveTag (tag, row) {
      row.nxGarbage.push(tag)
    },
    yjxRemoveTag (tag, row) {
      row.yjxGarbage.push(tag)
    },
    otherRemoveTag (tag, row) {
      row.otherGarbage.push(tag)
    },
    professionRemoveTag (tag, row) {
      row.professionGarbage.push(tag)
    },
    publicResponsibilityRemoveTag (tag, row) {
      row.publicResponsibilityGarbage.push(tag)
    },
    personalPropertyRemoveTag (tag, row) {
      row.personalPropertyGarbage.push(tag)
    },
    specialPropertyRemoveTag (tag, row) {
      row.specialPropertyGarbage.push(tag)
    },
    familyPropertyRemoveTag (tag, row) {
      row.familyPropertyGarbage.push(tag)
    },
    shipRemoveTag (tag, row) {
      row.shipGarbage.push(tag)
    },
    importExportRemoveTag (tag, row) {
      row.importExportGarbage.push(tag)
    },
    containerRemoveTag (tag, row) {
      row.containerGarbage.push(tag)
    },
    cargoBookingRemoveTag (tag, row) {
      row.cargoBookingGarbage.push(tag)
    },
    transportGoodsRemoveTag (tag, row) {
      row.transportGoodsGarbage.push(tag)
    },
    ensureRemoveTag (tag, row) {
      row.ensureGarbage.push(tag)
    },
    creditRemoveTag (tag, row) {
      row.creditGarbage.push(tag)
    },
    otherResponsibilitiesRemoveTag (tag, row) {
      row.otherResponsibilitiesGarbage.push(tag)
    },
    professionalResponsibilityRemoveTag (tag, row) {
      row.professionalResponsibilityGarbage.push(tag)
    },
    productLiabilityRemoveTag (tag, row) {
      row.productLiabilityGarbage.push(tag)
    },
    employerLiabilityRemoveTag (tag, row) {
      row.employerLiabilityGarbage.push(tag)
    },
    publicLiabilityRemoveTag (tag, row) {
      row.publicLiabilityGarbage.push(tag)
    },
    nuclearEnergyRemoveTag (tag, row) {
      row.nuclearEnergyGarbage.push(tag)
    },
    aviationRemoveTag (tag, row) {
      row.aviationGarbage.push(tag)
    },
    oilRemoveTag (tag, row) {
      row.oilGarbage.push(tag)
    },
    specialComprehensiveRemoveTag (tag, row) {
      row.specialComprehensiveGarbage.push(tag)
    },
    specialSubjectRemoveTag (tag, row) {
      row.specialSubjectGarbage.push(tag)
    },
    engineeringAllRisksRemoveTag (tag, row) {
      row.engineeringAllRisksGarbage.push(tag)
    },
    specifyingLiabilityRemoveTag (tag, row) {
      row.specifyingLiabilityGarbage.push(tag)
    },
    businessPropertyInsuranceRemoveTag (tag, row) {
      row.businessPropertyInsuranceGarbage.push(tag)
    },
    businessPropertyInsuranceGarbageRemoveTag (tag, row) {
      row.businessPropertyInsurance(tag)
    },
    specifyingLiabilityGarbageRemoveTag (tag, row) {
      row.specifyingLiability(tag)
    },
    engineeringAllRisksGarbageRemoveTag (tag, row) {
      row.engineeringAllRisks(tag)
    },
    specialSubjectGarbageRemoveTag (tag, row) {
      row.specialSubject(tag)
    },
    specialComprehensiveGarbageRemoveTag (tag, row) {
      row.specialComprehensive(tag)
    },
    oilGarbageRemoveTag (tag, row) {
      row.oil(tag)
    },
    aviationGarbageRemoveTag (tag, row) {
      row.aviation(tag)
    },
    nuclearEnergyGarbageRemoveTag (tag, row) {
      row.nuclearEnergy(tag)
    },
    publicLiabilityGarbageRemoveTag (tag, row) {
      row.publicLiability(tag)
    },
    employerLiabilityGarbageRemoveTag (tag, row) {
      row.employerLiability(tag)
    },
    productLiabilityGarbageRemoveTag (tag, row) {
      row.productLiability(tag)
    },
    professionalResponsibilityGarbageRemoveTag (tag, row) {
      row.professionalResponsibility(tag)
    },
    otherResponsibilitiesGarbageRemoveTag (tag, row) {
      row.otherResponsibilities(tag)
    },
    creditGarbageRemoveTag (tag, row) {
      row.credit(tag)
    },
    ensureGarbageRemoveTag (tag, row) {
      row.ensure(tag)
    },
    transportGoodsGarbageRemoveTag (tag, row) {
      row.transportGoods(tag)
    },
    cargoBookingGarbageRemoveTag (tag, row) {
      row.cargoBooking(tag)
    },
    containerGarbageRemoveTag (tag, row) {
      row.container(tag)
    },
    importExportGarbageRemoveTag (tag, row) {
      row.importExport(tag)
    },
    shipGarbageRemoveTag (tag, row) {
      row.ship(tag)
    },
    familyPropertyGarbageRemoveTag (tag, row) {
      row.familyProperty(tag)
    },
    specialPropertyGarbageRemoveTag (tag, row) {
      row.specialProperty(tag)
    },
    personalPropertyGarbageRemoveTag (tag, row) {
      row.personalProperty(tag)
    },
    publicResponsibilityGarbageRemoveTag (tag, row) {
      row.publicResponsibility(tag)
    },
    professionGarbageRemoveTag (tag, row) {
      row.profession(tag)
    },
    otherGarbageRemoveTag (tag, row) {
      row.other(tag)
    },
    yjxGarbageRemoveTag (tag, row) {
      row.yjx(tag)
    },
    nxGarbageRemoveTag (tag, row) {
      row.nx(tag)
    },
    initqueryLevel (row) {
      this.$refs.resultsForm.validate(valid => {
        if (valid) {
          dualCorePermissions({
            'usercode': row.workNumber,
            'comcode': row.comcode,
            'codeType': 'queryExhibition',
            'actionType': 'query'
          }).then(async res => {
            for (const key in res.codeLabels[0]) {
              if (Object.hasOwnProperty.call(res.codeLabels[0], key)) {
                const element = res.codeLabels[0][key]
                let lev = key.split('--')[2]
                if (!row[element].includes(lev)) {
                  row[element].push(lev)
                }
                // row[element] = [...new Set([...row[element], lev])]// 去重
              }
            }
          })
        }
      })
    },
    queryLevel (row) {
      this.$refs.resultsForm.validate(valid => {
        if (valid) {
          dualCorePermissions({
            'usercode': row.workNumber,
            'comcode': row.comcode,
            'codeType': 'queryOriginalpermissions',
            'actionType': 'query'
          }).then(async res => {
            for (const key in res.codeLabels[0]) {
              if (Object.hasOwnProperty.call(res.codeLabels[0], key)) {
                const element = res.codeLabels[0][key]
                let lev = key.split('--')[2]
                if (!row[element].includes(lev)) {
                  row[element].push(lev)
                }
                // row[element] = [...new Set([...row[element], lev])]// 去重
              }
            }
          })
        }
      })
    },
    // 导入成功处理
    handleSuccess ({ results }) {
      if (results.length > 0) {
        dualCorePermissions({
          actionType: 'infoSupply',
          fieldValue: 'NodePermissions',
          info: results.map(item => {
            return {
              'usercode': item['工号'],
              // 'nameUnderwriter': item['核保人姓名'],
              'comcode': item['机构代码']
              // 'comname': item['机构名称'],
              // 'businessPropertyInsurance': item['企业财产保险'],
              // 'specifyingLiability': item['工程险（列明责任）'],
              // 'engineeringAllRisks': item['工程一切险'],
              // 'specialSubject': item['特殊标的保险'],
              // 'specialComprehensive': item['特殊综合险'],
              // 'oil': item['石油保险'],
              // 'aviation': item['航空航天保险'],
              // 'nuclearEnergy': item['核能源保险'],
              // 'publicLiability': item['公众责任保险'],
              // 'employerLiability': item['雇主责任保险'],
              // 'productLiability': item['产品责任保险'],
              // 'professionalResponsibility': item['职业责任保险'],
              // 'otherResponsibilities': item['其他责任保险'],
              // 'credit': item['信用保险'],
              // 'ensure': item['保证保险'],
              // 'transportGoods': item['国内货物运输保险'],
              // 'cargoBooking': item['货运预约协议保险'],
              // 'container': item['集装箱'],
              // 'importExport': item['进出口货运'],
              // 'ship': item['船舶保险'],
              // 'familyProperty': item['普通家财保险'],
              // 'specialProperty': item['特殊家财保险'],
              // 'personalProperty': item['个人财产保险'],
              // 'publicResponsibility': item['公众责任保险'],
              // 'profession': item['职业责任保险'],
              // 'other': item['其它责任保险']
            }
          })
        }).then(res => {
          this.results = res.codeValues.map(item => {
            return {
              workNumber: item.usercode,
              nameUnderwriter: item.usercname,
              comcode: item.comcode,
              comname: item.comcodename
              // businessPropertyInsurance: [item.businessPropertyInsurance],
              // specifyingLiability: [item.specifyingLiability],
              // engineeringAllRisks: [item.engineeringAllRisks],
              // specialSubject: [item.specialSubject],
              // specialComprehensive: [item.specialComprehensive],
              // oil: [item.oil],
              // aviation: [item.aviation],
              // nuclearEnergy: [item.nuclearEnergy],
              // publicLiability: [item.publicLiability],
              // employerLiability: [item.employerLiability],
              // productLiability: [item.productLiability],
              // professionalResponsibility: [item.professionalResponsibility],
              // otherResponsibilities: [item.otherResponsibilities],
              // credit: [item.credit],
              // ensure: [item.ensure],
              // transportGoods: [item.transportGoods],
              // cargoBooking: [item.cargoBooking],
              // container: [item.container],
              // importExport: [item.importExport],
              // ship: [item.ship],
              // familyProperty: [item.familyProperty],
              // specialProperty: [item.specialProperty],
              // personalProperty: [item.personalProperty],
              // publicResponsibility: [item.publicResponsibility],
              // profession: [item.profession],
              // other: [item.other]
            }
          })
        })
      }
    },
    // 导入前处理
    beforeUpload (file) {
      // this.showloading = true
      let filename = file.name
      let _index = filename.lastIndexOf('.')
      let suffix = filename.substr(_index + 1)
      let fileType = suffix
      if (fileType !== 'xlsx' && fileType !== 'xls') {
        this.$message({
          message: '请选择excel文件进行上传！',
          type: 'warning'
        })
        // this.showloading = false
        return false
      }
      return true // 直接返回没有处理文件大小限制 后期有需要将此处注掉，下面代码放开即可
      /* const isLt2M = file.size / 1024 / 1024 < 1
      if (isLt2M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 2m in size.',
        type: 'warning'
      })
      return false */
    },
    // 导入模板下载
    handleTemplateDownload () {
      // 前端生成模板
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [
          '工号', // workNumber
          // '核保人姓名', // nameUnderwriter
          '机构代码' // comcode
          // '机构名称', // comname
          // '企业财产保险', // businessPropertyInsurance
          // '工程险（列明责任）', // specifyingLiability
          // '工程一切险', // engineeringAllRisks
          // '特殊标的保险', // specialSubject
          // '特殊综合险', // specialComprehensive
          // '石油保险', // oil
          // '航空航天保险', // aviation
          // '核能源保险', // nuclearEnergy
          // '公众责任保险', // publicLiability
          // '雇主责任保险', // employerLiability
          // '产品责任保险', // productLiability
          // '职业责任保险', // professionalResponsibility
          // '其他责任保险', // otherResponsibilities
          // '信用保险', // credit
          // '保证保险', // ensure
          // '国内货物运输保险', // transportGoods
          // '货运预约协议保险', // cargoBooking
          // '集装箱', // container
          // '进出口货运', // importExport
          // '船舶保险', // ship
          // '普通家财保险', // familyProperty
          // '特殊家财保险', // specialProperty
          // '个人财产保险', // personalProperty
          // '公众责任保险', // publicResponsibility
          // '职业责任保险', // profession
          // '其它责任保险'// other
        ]
        const filterVal = [
          'workNumber',
          // 'nameUnderwriter',
          'comcode'
          // 'comname',
          // 'businessPropertyInsurance',
          // 'specifyingLiability',
          // 'engineeringAllRisks',
          // 'specialSubject',
          // 'specialComprehensive',
          // 'oil',
          // 'aviation',
          // 'nuclearEnergy',
          // 'publicLiability',
          // 'employerLiability',
          // 'productLiability',
          // 'professionalResponsibility',
          // 'otherResponsibilities',
          // 'credit',
          // 'ensure',
          // 'transportGoods',
          // 'cargoBooking',
          // 'container',
          // 'importExport',
          // 'ship',
          // 'familyProperty',
          // 'specialProperty',
          // 'personalProperty',
          // 'publicResponsibility',
          // 'profession',
          // 'other'
        ]
        const list = [
          {
            workNumber: '00000000',
            // nameUnderwriter: '00000000',
            comcode: '00000000'
            // comname: '00000000',
            // businessPropertyInsurance: '01',
            // specifyingLiability: '01',
            // engineeringAllRisks: '01',
            // specialSubject: '01',
            // specialComprehensive: '01',
            // oil: '01',
            // aviation: '01',
            // nuclearEnergy: '01',
            // publicLiability: '01',
            // employerLiability: '01',
            // productLiability: '01',
            // professionalResponsibility: '01',
            // otherResponsibilities: '01',
            // credit: '01',
            // ensure: '01',
            // transportGoods: '01',
            // cargoBooking: '01',
            // container: '01',
            // importExport: '01',
            // ship: '01',
            // familyProperty: '01',
            // specialProperty: '01',
            // personalProperty: '01',
            // publicResponsibility: '01',
            // profession: '01',
            // other: '10'
          },
          {
            workNumber: '00000000', // A
            // nameUnderwriter: '00000000', // B
            comcode: '00000000' // C
            // comname: '00000000', // D
            // businessPropertyInsurance: '01', // E
            // specifyingLiability: '01', // F
            // engineeringAllRisks: '01', // G
            // specialSubject: '01', // H
            // specialComprehensive: '01', // I
            // oil: '01', // J
            // aviation: '01', // K
            // nuclearEnergy: '01', // L
            // publicLiability: '01', // M
            // employerLiability: '01', // N
            // productLiability: '01', // O
            // professionalResponsibility: '01', // P
            // otherResponsibilities: '01', // Q
            // credit: '01', // R
            // ensure: '01', // S
            // transportGoods: '01', // T
            // cargoBooking: '01', // U
            // container: '01', // V
            // importExport: '01', // W
            // ship: '01', // X
            // familyProperty: '01', // Y
            // specialProperty: '01', // Z
            // personalProperty: '01', // AA
            // publicResponsibility: '01', // AB
            // profession: '01', // AC
            // other: '10'// AD
          }
        ]
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: '双核权限模板权限申请模板',
          headerStyle: {
            color: '000000',
            fgColor: 'BDD7EE',
            column: [
              'A1',
              'B1'
              // 'C1',
              // 'D1',
              // 'E1',
              // 'F1',
              // 'G1',
              // 'H1',
              // 'I1',
              // 'J1',
              // 'K1',
              // 'L1',
              // 'M1',
              // 'N1',
              // 'O1',
              // 'P1',
              // 'Q1',
              // 'R1',
              // 'S1',
              // 'T1',
              // 'U1',
              // 'V1',
              // 'W1',
              // 'X1',
              // 'Y1',
              // 'Z1',
              // 'AA1',
              // 'AB1',
              // 'AC1',
              // 'AD1'
            ]
          }
        })
      })
      // getTemplatefiles('目标客户作战图.xlsx')
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleAdd () {
      this.results.push({
        comcode: '',
        comname: '',
        nameUnderwriter: '',
        workNumber: '',
        businessPropertyInsurance: [],
        specifyingLiability: [],
        engineeringAllRisks: [],
        specialSubject: [],
        specialComprehensive: [],
        oil: [],
        aviation: [],
        nuclearEnergy: [],
        publicLiability: [],
        employerLiability: [],
        productLiability: [],
        professionalResponsibility: [],
        otherResponsibilities: [],
        credit: [],
        ensure: [],
        transportGoods: [],
        cargoBooking: [],
        container: [],
        importExport: [],
        ship: [],
        familyProperty: [],
        specialProperty: [],
        personalProperty: [],
        publicResponsibility: [],
        profession: [],
        other: [],
        yjx: [],
        nx: [],

        businessPropertyInsuranceGarbage: [],
        specifyingLiabilityGarbage: [],
        engineeringAllRisksGarbage: [],
        specialSubjectGarbage: [],
        specialComprehensiveGarbage: [],
        oilGarbage: [],
        aviationGarbage: [],
        nuclearEnergyGarbage: [],
        publicLiabilityGarbage: [],
        employerLiabilityGarbage: [],
        productLiabilityGarbage: [],
        professionalResponsibilityGarbage: [],
        otherResponsibilitiesGarbage: [],
        creditGarbage: [],
        ensureGarbage: [],
        transportGoodsGarbage: [],
        cargoBookingGarbage: [],
        containerGarbage: [],
        importExportGarbage: [],
        shipGarbage: [],
        familyPropertyGarbage: [],
        specialPropertyGarbage: [],
        personalPropertyGarbage: [],
        publicResponsibilityGarbage: [],
        professionGarbage: [],
        otherGarbage: [],
        yjxGarbage: [],
        nxGarbage: []
      })
    },
    handleDelete (index, row) {
      this.$delete(this.results, index)
    },
    handleCopy (index, row) {
      this.results.splice(index + 1, 0, { ...row })
    },
    workNumberRemoteMethod (query) {
      if (query !== '') {
        dualCorePermissions({
          'fieldValue': query,
          'codeType': 'userCode',
          'actionType': 'query'
        }).then(async res => {
          this.workNumberOtpions = res.codeLabels.map(item => {
            let tempArr = item.split('--')
            return { label: tempArr[1], value: tempArr[0] }
          })
        })
      }
    },
    workNumberChange (row) {
      if (row.workNumber !== '') {
        row.nameUnderwriter = this.workNumberOtpions.find(item => item.value === row.workNumber).label
      }
    },
    nameUnderwriterChange (row) {
      if (row.nameUnderwriter !== '') {
        row.workNumber = this.workNumberOtpions.find(item => item.label === row.nameUnderwriter).value
      }
    },
    comcodeRemoteMethod (query) {
      if (query !== '') {
        dualCorePermissions({
          'fieldValue': query,
          'codeType': 'comCode',
          'actionType': 'query'
        }).then(async res => {
          this.comcodeOtpions = res.codeLabels.map(item => {
            let tempArr = item.split('--')
            return { label: tempArr[1], value: tempArr[0] }
          })
        })
      }
    },
    comcodeChange (row) {
      if (row.comcode !== '') {
        row.comname = this.comcodeOtpions.find(item => item.value === row.comcode).label
      }
    },
    comnameChange (row) {
      if (row.comname !== '') {
        row.comcode = this.comcodeOtpions.find(item => item.label === row.comname).value
      }
    },
    businessPropertyInsurance_treeCheck (data) {
      console.log(data)
    },
    commitData () {
      this.$refs.resultsForm.validate(valid => {
        if (valid) {
          let parmaData = this.results.map(object => {
            let qgtrisk = []
            let zrxrisk = []
            let xyxybzxrisk = []
            let sxrisk = []
            let gcgzrisk = []
            let yjxrisk = []
            let nxrisk = []
            for (const key in object) {
              if (Object.hasOwnProperty.call(object, key)) {
                if (!(`${key}` in this.colNameMap)) continue
                if (!this.colNameMap[key].numName) continue
                const element = object[key]
                for (const iterator of element) {
                  let str = `${this.colNameMap[key].numName}-${iterator || '0'}`
                  switch (this.colNameMap[key].father) {
                    case 'qgt':
                      qgtrisk.push(str)
                      break
                    case 'zrx':
                      zrxrisk.push(str)
                      break
                    case 'xyxybzx':
                      xyxybzxrisk.push(str)
                      break
                    case 'sx':
                      sxrisk.push(str)
                      break
                    case 'gcgz':
                      gcgzrisk.push(str)
                      break
                    case 'yjx':
                      yjxrisk.push(str)
                      break
                    case 'nx':
                      nxrisk.push(str)
                      break
                    default:
                      break
                  }
                }
              }
            }
            return {
              comcode: object.comcode || '',
              comcodename: object.comname || '',
              usercode: object.workNumber || '',
              usercname: object.nameUnderwriter || '',
              qgt: this.qgt.length ? this.qgt.join(',') : '',
              qgtrisk: qgtrisk.length ? qgtrisk.join(',') : '',
              zrx: this.zrx.length ? this.zrx.join(',') : '',
              zrxrisk: zrxrisk.length ? zrxrisk.join(',') : '',
              xyxybzx: this.xyxybzx.length ? this.xyxybzx.join(',') : '',
              xyxybzxrisk: xyxybzxrisk.length ? xyxybzxrisk.join(',') : '',
              sx: this.sx.length ? this.sx.join(',') : '',
              sxrisk: sxrisk.length ? sxrisk.join(',') : '',
              gcgz: this.gcgz.length ? this.gcgz.join(',') : '',
              gcgzrisk: gcgzrisk.length ? gcgzrisk.join(',') : '',
              yjx: this.yjx.length ? this.yjx.join(',') : '',
              yjxrisk: yjxrisk.length ? yjxrisk.join(',') : '',
              nx: this.nx.length ? this.nx.join(',') : '',
              nxrisk: nxrisk.length ? nxrisk.join(',') : ''

              // zb: '146',
              // zbrisk: '15-16,16-16,17-16,18-16,19-16,21-16,22-16,36-16,34-16',
              // hyx: '106',
              // hyxrisk: '10-16',
            }
          })
          // 提交申请
          dualCorePermissions({
            actionType: 'upNodePermissions',
            docCreator: getToken('oaAuto-Token').docCreator,
            fdid: getToken('oaAuto-Token').fdid,
            info: parmaData
          }).then(res => {
            if (res.flag === '1') {
              // this.$confirm('双核权限申请提交成功, 是否退出页面?', '提示', {
              //   confirmButtonText: '确定',
              //   cancelButtonText: '取消',
              //   type: 'success'
              // }).then(() => {
              //   this.closePage()
              // })
              this.$message.success('双核权限申请提交成功')
              setTimeout(() => {
                this.closePage()
              }, 3000)
            }
          })
        }
      })
    }
  },
  computed: {

  },
  watch: {},
  // 声明周期函数
  beforeCreate () { },
  created () {
    console.log('created this.$router.query', this.$route.query.initData)
    if (getToken('oaAuto-Token').docStatus !== '1') {
      this.formDisable = true
    } else {
      this.formDisable = false
    }
    getOAUploadCount({
      actionType: 'oaUploadCount',
      queryParam: 'SWT_BIZ_OApageCount'
    }).then(res => {
      console.log('-----请求前端导入条数接口返回结果-----', JSON.stringify(res))
      if (res.flag === '1') {
        this.oaPageUploadCount = res.uploadCount
      }
    }).catch(error => {
      // this.queryDisable = false
      console.log('-----请求前端导入条数接口返回结果报错-----' + error)
    })

    for (const key in this.cloRisk) {
      if (Object.hasOwnProperty.call(this.cloRisk, key)) {
        dualCorePermissions({
          'fieldValue': key,
          'codeType': 'queryRisk',
          'actionType': 'query'
        }).then(resQueryRisk => {
          this.cloRisk[key] = resQueryRisk.codeLabels
          // this.$set(this.cloRisk, key, resQueryRisk.codeLabels)
        })
      }
    }
  },
  beforeMount () { },
  async mounted () {
    this.initPage()

    // let allResArr = await Promise.allSettled([
    // // 企工特模板
    //   dualCorePermissions({
    //     'fieldValue': 'qgt',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 责任险模板
    //   dualCorePermissions({
    //     'fieldValue': 'zrx',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 信用险和保证险模板
    //   dualCorePermissions({
    //     'fieldValue': 'xyxybzx',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 水险模板
    //   dualCorePermissions({
    //     'fieldValue': 'sx',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 个财个责模板
    //   dualCorePermissions({
    //     'fieldValue': 'gcgz',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 意健险模板
    //   dualCorePermissions({
    //     'fieldValue': 'yjx',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   }),
    //   // 农险模板
    //   dualCorePermissions({
    //     'fieldValue': 'nx',
    //     'codeType': 'queryModel',
    //     'actionType': 'query'
    //   })
    // ])
    // allResArr.forEach(async (res, index) => {
    //   let resQueryModelNodeArr = []
    //   for (const element of res.codeLabels) {
    //     // 级别
    //     let resQueryModelNode = await dualCorePermissions({
    //       'fieldValue': element,
    //       'codeType': 'queryModelNode',
    //       'actionType': 'query'
    //     })
    //     resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
    //   }
    //   switch (index) {
    //     case 0:
    //       this.qgt = res.codeLabels
    //       this.qgtOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 1:
    //       this.zrx = res.codeLabels
    //       this.zrxOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 2:
    //       this.xyxybzx = res.codeLabels
    //       this.xyxhbzxOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 3:
    //       this.sx = res.codeLabels
    //       this.sxOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 4:
    //       this.gcgz = res.codeLabels
    //       this.gcgzOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 5:
    //       this.yjx = res.codeLabels
    //       this.yjxOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     case 6:
    //       this.nx = res.codeLabels
    //       this.nxOtpions = resQueryModelNodeArr.map(item => {
    //         let tempArr = item.split('--')
    //         return { label: tempArr[1], value: tempArr[0] }
    //       })
    //       break

    //     default:
    //       break
    //   }
    // })
    // 数据查询
    // dualCorePermissions({
    //   'actionType': 'oaAutoLoad',
    //   'docCreator': getToken('oaAuto-Token').docCreator,
    //   // 'fdid': getToken('oaAuto-Token').fdid,
    //   'fdDocId': getToken('oaAuto-Token').fdid,
    //   // 'fdDocId': '18190132a35809421c49a72473db86ef',
    //   'docStatus': '20'
    // }).then(res => {
    //   this.tableDisable = res.docStatus
    //   this.results = res.codeValues
    //   this.results.forEach(item => {
    //     this.queryLevel(item)
    //   })
    // })
    // ********************************************************************************************************
    // 企工特模板
    dualCorePermissions({
      'fieldValue': 'qgt',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.qgt = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.qgtOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 责任险模板
    dualCorePermissions({
      'fieldValue': 'zrx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.zrx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.zrxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 信用险和保证险模板
    dualCorePermissions({
      'fieldValue': 'xyxybzx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.xyxybzx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.xyxhbzxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 水险模板
    dualCorePermissions({
      'fieldValue': 'sx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.sx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.sxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 个财个责模板
    dualCorePermissions({
      'fieldValue': 'gcgz',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.gcgz = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.gcgzOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 意健险模板
    dualCorePermissions({
      'fieldValue': 'yjx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.yjx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.yjxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
    // 农险模板
    dualCorePermissions({
      'fieldValue': 'nx',
      'codeType': 'queryModel',
      'actionType': 'query'
    }).then(async res => {
      let resQueryModelNodeArr = []
      this.nx = res.codeLabels
      for (const element of res.codeLabels) {
        // 级别
        let resQueryModelNode = await dualCorePermissions({
          'fieldValue': element,
          'codeType': 'queryModelNode',
          'actionType': 'query'
        })
        resQueryModelNodeArr.push(...resQueryModelNode.codeLabels)
      }
      this.nxOtpions = resQueryModelNodeArr.map(item => {
        let tempArr = item.split('--')
        return { label: tempArr[1], value: tempArr[0] }
      })
    })
  },
  beforeUpdate () { },
  updated () { },
  beforeUnmount () { },
  unmounted () { },
  // 使用keep-alive生效
  activated () { },
  deactivated () { }
}
