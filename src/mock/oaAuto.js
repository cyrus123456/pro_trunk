import Mock from 'mockjs'
import { param2Obj } from '@/utils'

export default {
  systemCode: config => {
    return {
      'flag': '1',
      'codeValues': [
        'payment_FIELD_SEPARATOR_收付管理系统',
        'platform_FIELD_SEPARATOR_保险行业平台',
        'pos_FIELD_SEPARATOR_pos系统',
        'prpall_FIELD_SEPARATOR_核心业务处理系统',
        'pslplatform_FIELD_SEPARATOR_非车生命表系统'
      ],
      'codeLabels': [
        'payment--收付管理系统',
        'platform--保险行业平台',
        'pos--pos系统',
        'prpall--核心业务处理系统',
        'pslplatform--非车生命表系统'
      ]
    }
  },
  systemRemarkCode: config => {
    return {
      'message': '',
      'flag': '1',
      'codeValues': ['P037_FIELD_SEPARATOR_收付管理系统', 'P027_FIELD_SEPARATOR_保险行业平台', 'P001_FIELD_SEPARATOR_核心业务处理系统'],
      'codeLabels': ['P037--收付管理系统', 'P027--保险行业平台', 'P001--核心业务处理系统']
    }
  },
  comName: config => {
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '00000000--总公司',
        '00000002--沧州',
        '0000A001--微贷金融-微贷营销组',
        '0000A002--山东机构测试二-山东测试机构四',
        '0000A003--北京测试部-天天测试',
        '0000A004--非洲测试机构四-越南测试机构五',
        '0000A005--测试本地门店核算超-测试本地门店核算超',
        '0000A006--配置平台测试二-测试本地电销营业组',
        '0000A007--巴黎测试机构四-巴黎测试机构五',
        '0000A008--普罗旺斯测试机构四-普罗旺斯测试机构五'
      ]
    }
  },
  gradeCodeByLevel: config => {
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '000--00000000000',
        '001--系统管理员',
        '002--信息部管理员',
        '003--代理人管理员',
        '004--电销初始化岗',
        '005--参数管理岗',
        '006--分公司销售管理',
        '007--查询岗',
        '008--总公司核心处理岗',
        '009--分公司系统管理员',
        '010--支公司系统管理员',
        '011--信保部专用岗',
        '012--支公司代理协议人员管理员',
        '013--个人代理协议管理员',
        '015--总公司综合开拓管理岗',
        '016--综合开拓管理岗',
        '017--网销渠道配置',
        '018--运维管理岗',
        '019--参数开关管理岗',
        '020--理赔系统管理岗',
        '021--核心运维岗',
        '023--监管电话权限',
        '024--强制电子保单打印',
        '028--统一费用信息查看权限',
        '061--统计报表(全)',
        '062--平台系统',
        '063--核心系统查询',
        '064--老理赔查询',
        '065--绿色出行批改岗',
        '066--老理赔流程查询岗',
        '071--平台人员管理',
        '072--072',
        '073--意健险获取成本监控',
        '074--财产险获取成本监控',
        '075--农责险获取成本监控',
        '076--机构职场管理岗',
        '077--机构职场查询岗',
        '078--新车保单管理',
        '079--财产险获取成本监控',
        '080--农责险获取成本监控',
        '081--分公司农责险获取成本监控',
        '082--门店管理岗',
        '083--已核投保单转保单',
        '084--车队管理',
        '085--合并录单摩托车',
        '086--合并录单MJ',
        '087--MJ菜单测试',
        '088--新车出单岗',
        '089--老核心车队岗',
        '099--新车险出单DT'
      ]
    }
  },
  querySystemPostList: config => {
    return {
      rowsPerPage: 10,
      flag: '1',
      count: 7058,
      pageNo: 1,
      'userPostList': [
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00270118',
          'systemCode': 'prpall',
          'userName': 'åˆ˜ç¾Žç§€',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090044',
          'systemCode': 'prpall',
          'userName': 'é™ˆç³',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00000052',
          'systemCode': 'prpall',
          'userName': 'æµ‹è¯•æ•°æ®',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090074',
          'systemCode': 'prpall',
          'userName': 'å¼ é’°',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090043',
          'systemCode': 'prpall',
          'userName': 'èˆ’å¹³',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090042',
          'systemCode': 'prpall',
          'userName': 'æŽç«‹',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00190017',
          'systemCode': 'prpall',
          'userName': 'å¼ èª',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00160006',
          'systemCode': 'prpall',
          'userName': 'æ¨æ•¬æ˜Œ',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090006',
          'systemCode': 'prpall',
          'userName': 'èƒ¡ç”°ç»“',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        }
      ]
    }
  },
  queryUserPostList: config => {
    return {
      rowsPerPage: 10,
      flag: '1',
      count: 7058,
      pageNo: 1,
      'userPostList': [
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00270118',
          'systemCode': 'prpall',
          'userName': 'åˆ˜ç¾Žç§€',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090044',
          'systemCode': 'prpall',
          'userName': 'é™ˆç³',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00000052',
          'systemCode': 'prpall',
          'userName': 'æµ‹è¯•æ•°æ®',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090074',
          'systemCode': 'prpall',
          'userName': 'å¼ é’°',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090043',
          'systemCode': 'prpall',
          'userName': 'èˆ’å¹³',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090042',
          'systemCode': 'prpall',
          'userName': 'æŽç«‹',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00190017',
          'systemCode': 'prpall',
          'userName': 'å¼ èª',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00160006',
          'systemCode': 'prpall',
          'userName': 'æ¨æ•¬æ˜Œ',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        },
        {
          'comCode': '00000000',
          'gradeName': 'ç³»ç»Ÿç®¡ç†å‘˜',
          'userCode': '00090006',
          'systemCode': 'prpall',
          'userName': 'èƒ¡ç”°ç»“',
          'comCName': 'æ€»å…¬å¸',
          'gradeCode': '001'
        }
      ]
    }
  },
  userNameByComCode: config => {
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '00190016--张三',
        '00190017--张三a',
        '00190018--张三2',
        '00190019--张三3',
        '00190010--张三244'
      ]
    }
  },
  userCodeByComCode: config => {
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '00190016--张三',
        '00190017--张三a',
        '00190018--张三2',
        '00190019--张三2',
        '00190010--张三2'
      ]
    }
  },
  queryUserGradeByComCode: config => {
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '00000000--总公司',
        '00000002--沧州',
        '0000A001--微贷金融-微贷营销组',
        '0000A002--山东机构测试二-山东测试机构四',
        '0000A003--北京测试部-天天测试',
        '0000A004--非洲测试机构四-越南测试机构五',
        '0000A005--测试本地门店核算超-测试本地门店核算超',
        '0000A006--配置平台测试二-测试本地电销营业组',
        '0000A007--巴黎测试机构四-巴黎测试机构五',
        '0000A008--普罗旺斯测试机构四-普罗旺斯测试机构五'
      ]
    }
  },
  oaAutoLoad: config => {
    console.log('mockOAAUTO', config)
    return {
      'identificationFlag': 'firstLoad', // firstLoad,menuapplyTask ,ehrBandTask,oaAutoClaimsMenuApply,claimUnderwritApplyTask, JFCDSWITCHTask
      'codeValues': [
        { 'name': '非见费出单申请', 'code': 'JFCDSWITCHTask' },
        { 'name': '分公司核赔权限申请', 'code': 'branchUnderwritApplyTask' },
        { 'name': '总公司核赔权限申请', 'code': 'claimUnderwritApplyTask' },
        { 'name': '非车理赔岗位权限申请', 'code': 'claimsMenuApplyTask' },
        { 'name': 'EHR工号绑定申请', 'code': 'ehrBandTask' },
        { 'name': '自动化权限申请', 'code': 'menuapplyTask' },
        { 'name': '非车理赔岗位换人申请', 'code': 'postReplaceApplyTask' },
        { 'name': '权限申请岗位换人', 'code': 'platformpostReplaceApplyTask' },
        { 'name': '双核权限模板权限申请', 'code': 'platformupNodePermissionsTask' },
        { 'name': '双核权限模板岗位换人', 'code': 'upNodePermissionsReplaceMessageReplaceApplyTask' }],

      /* "codeValues": [
        {
          "name": "自动化权限申请",
          "code": "menuapplyTask"
        },
        {
          "name": "EHR工号绑定",
          "code": "ehrBandTask"
        },
        {
          "name": "非车理赔岗位权限申请",
          "code": "claimsMenuApplyTask"
        },
        {
          "name": "非车理赔岗位换人申请",
          "code": "postReplaceApplyTask"
        },
        {
          "name": "总公司核赔权限申请",
          "code": "claimUnderwritApplyTask"
        },
        {
          "name": "分公司核赔权限申请",
          "code": "branchUnderwritApplyTask"
        }
      ], */
      /* 'codeValues': [
        {
          'comcode': '02110000',
          'comcname': '山东省分公司营业部',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗',
        },
        {
          'comcode': '02126001',
          'comcname': '山东省分公司营业部山东省分公司济南N063维护团队',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗',
        },
        {
          'comcode': '0211A500',
          'comcname': '山东省分公司营业部章丘营销服',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗',
        },
      ], */
      /* ('codeValues': [
        {
          "id": "1",
          "hrno": "B201902060001",
          "systemname": "保险行业平台",
          "usercode": "出现承诺的",
          "systemcode": "P027",
          "usercname": "钱明胜"
        },
        {
          "id": "2",
          "hrno": "B201902060002",
          "systemname": "保险行业平台",
          "usercode": "02000001",
          "systemcode": "P027",
          "usercname": "钱明胜"
        },
        {
          "id": "3",
          "hrno": "B201902060003",
          "systemname": "保险行业平台",
          "usercode": "02000001",
          "systemcode": "P027",
          "usercname": "钱明胜"
        },
        {
          "id": "4",
          "hrno": "B201902060004",
          "systemname": "保险行业平台",
          "usercode": "02000001",
          "systemcode": "P027",
          "usercname": "钱明胜"
        }], */
      /* 'codeValues': [
            {
              'comcode': '02110000',
              'comcname': '山东省分公司营业部',
              'usercode': '02080027',
              'usercname': '张磊',
              'gradecode': '001',
              'gradename': '总部核赔',
              'templateid':'36',
                'templatename':'公估审核(新)',
                'classcode':'0',
                'classname':'全部险种',
                'nodeno':'7',
                'otherno':'10',
            },
            {
              'comcode': '02126001',
              'comcname': '山东省分公司营业部山东省分公司济南N063维护团队',
              'usercode': '02080027',
              'usercname': '张磊',
              'gradecode': '002',
              'gradename': '部门总',
              'templateid':'36',
                'templatename':'公估审核(新)',
                'classcode':'0',
                'classname':'全部险种',
                'nodeno':'7',
            },
            {
              'comcode': '0211A500',
              'comcname': '山东省分公司营业部章丘营销服',
              'usercode': '02080027',
              'usercname': '张磊',
              'gradecode': '016',
              'gradename': '室主任',
              'templateid':'36',
                'templatename':'公估审核(新)',
                'classcode':'0',
                'classname':'全部险种',
                'nodeno':'7',
            },
          ], */
      // 'codeValues': [
      //   {
      //     'usercode': '02000001',
      //     'comcode': '02000000',
      //     'riskcode': '120',
      //     'usercname': '钱明胜',
      //     'riskcname': '承保管理岗',
      //     'comcname': '山东省分公司',
      //     'origindate': '2022-03-25 13',
      //     'enddate': '2022-03-26 13',
      //   },
      //   {
      //     'usercode': '02000002',
      //     'comcode': '02000000',
      //     'riskcode': '120',
      //     'usercname': '山东虚拟人(测试)',
      //     'riskcname': '承保管理岗',
      //     'comcname': '山东省分公司',
      //     'origindate': '2022-03-25 13',
      //     'enddate': '2022-03-26 13',
      //   }
      // ],
      'fdid': 'A000000000000001',
      'flag': '1',
      'docStatus': '1',
      'docCreator': '王杰',
      'message': ''
    }
  },
  oaUploadCount: config => {
    console.log('mockOAAUTO', config)
    return {
      'uploadCount': '100',
      'flag': '1',
      'message': '数据获取成功'
    }
  },
  userCode: config => {
    console.log('mockOAAUTO', config)
    /* return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '02080020_FIELD_SEPARATOR_薛海',
        '02080021_FIELD_SEPARATOR_温利红',
        '02080022_FIELD_SEPARATOR_刘春霞',
        '02080023_FIELD_SEPARATOR_崔瑶瑶',
        '02080024_FIELD_SEPARATOR_赵人慧',
        '02080025_FIELD_SEPARATOR_张宇航',
        '02080026_FIELD_SEPARATOR_肖健',
        '02080027_FIELD_SEPARATOR_张磊',
        '02080028_FIELD_SEPARATOR_房玉仓',
        '02080029_FIELD_SEPARATOR_王于政'
      ],
      'codeLabels': [
        '02080020--薛海',
        '02080021--温利红',
        '02080022--刘春霞',
        '02080023--崔瑶瑶',
        '02080024--赵人慧',
        '02080025--张宇航',
        '02080026--肖健',
        '02080027--张磊',
        '02080028--房玉仓',
        '02080029--王于政'
      ]
    } */
    return { 'message': '', 'flag': '1', 'codeValues': ['00090176_FIELD_SEPARATOR_李兵磊', '00160713_FIELD_SEPARATOR_黄磊', '00190023_FIELD_SEPARATOR_杜祖磊', '00240039_FIELD_SEPARATOR_顾磊', '00240101_FIELD_SEPARATOR_王磊', '00240132_FIELD_SEPARATOR_袁磊', '00270326_FIELD_SEPARATOR_路红磊', '00270330_FIELD_SEPARATOR_张磊', '00270684_FIELD_SEPARATOR_冯磊', '00270718_FIELD_SEPARATOR_王石磊', '00270832_FIELD_SEPARATOR_韩磊', '00271003_FIELD_SEPARATOR_金磊', '00271365_FIELD_SEPARATOR_刘邦磊', '00271437_FIELD_SEPARATOR_吴磊', '00271555_FIELD_SEPARATOR_张磊', '00271682_FIELD_SEPARATOR_李晓磊', '00271799_FIELD_SEPARATOR_高有磊', '00272211_FIELD_SEPARATOR_李磊', '00272214_FIELD_SEPARATOR_封磊', '00272275_FIELD_SEPARATOR_杨磊', '00280016_FIELD_SEPARATOR_王磊', '00280020_FIELD_SEPARATOR_胡晓磊', '00313214_FIELD_SEPARATOR_逯磊', '00340025_FIELD_SEPARATOR_陶磊', '00420024_FIELD_SEPARATOR_胡晓磊', '50012210_FIELD_SEPARATOR_何磊', '50013681_FIELD_SEPARATOR_张磊', '50013766_FIELD_SEPARATOR_耿磊', '50016275_FIELD_SEPARATOR_常磊', '50017355_FIELD_SEPARATOR_张磊', '50017999_FIELD_SEPARATOR_高磊', '50020258_FIELD_SEPARATOR_陈磊', '50023008_FIELD_SEPARATOR_岳小磊', '50023718_FIELD_SEPARATOR_张磊', '50025887_FIELD_SEPARATOR_王磊', '50026197_FIELD_SEPARATOR_张磊', '50026640_FIELD_SEPARATOR_马克磊', '50027134_FIELD_SEPARATOR_尹磊', '50027241_FIELD_SEPARATOR_星磊', '50028017_FIELD_SEPARATOR_李磊', '50028478_FIELD_SEPARATOR_马洪磊', '50029381_FIELD_SEPARATOR_杨磊', '50029627_FIELD_SEPARATOR_丁磊', '50029976_FIELD_SEPARATOR_裴磊', '50030103_FIELD_SEPARATOR_杨旭磊', '50030191_FIELD_SEPARATOR_韩磊', '50030623_FIELD_SEPARATOR_张磊', '50030704_FIELD_SEPARATOR_吴承磊', '50030737_FIELD_SEPARATOR_黄磊磊', '50030749_FIELD_SEPARATOR_孙东磊', '50030793_FIELD_SEPARATOR_范磊', '50031131_FIELD_SEPARATOR_杨磊', '50032407_FIELD_SEPARATOR_郭磊', '50032413_FIELD_SEPARATOR_张磊', '50034615_FIELD_SEPARATOR_贾贺磊', '50035728_FIELD_SEPARATOR_宋磊1', '50039679_FIELD_SEPARATOR_刘磊', '50040013_FIELD_SEPARATOR_刘磊', '50040297_FIELD_SEPARATOR_王磊', '50044135_FIELD_SEPARATOR_张士磊', '50046004_FIELD_SEPARATOR_张淑磊', '50047486_FIELD_SEPARATOR_曹磊', '50052965_FIELD_SEPARATOR_佟晓磊', '50053917_FIELD_SEPARATOR_王磊', '50054048_FIELD_SEPARATOR_史磊', '50055921_FIELD_SEPARATOR_王磊', '50056293_FIELD_SEPARATOR_米俊磊', '50057455_FIELD_SEPARATOR_陈赛磊', '50057805_FIELD_SEPARATOR_于磊', '50059981_FIELD_SEPARATOR_蒋磊', '50061347_FIELD_SEPARATOR_张磊', '50062739_FIELD_SEPARATOR_张磊', '50062993_FIELD_SEPARATOR_黄磊', '50063521_FIELD_SEPARATOR_刘磊', '50064359_FIELD_SEPARATOR_夏磊', '50065392_FIELD_SEPARATOR_郭磊', '50065411_FIELD_SEPARATOR_佟磊', '50067567_FIELD_SEPARATOR_张实磊', '50069147_FIELD_SEPARATOR_郝英磊', '50069376_FIELD_SEPARATOR_孙宝磊', '50069589_FIELD_SEPARATOR_肖磊', '50069994_FIELD_SEPARATOR_张琦磊', '50070250_FIELD_SEPARATOR_武磊', '50071204_FIELD_SEPARATOR_程磊', '50071234_FIELD_SEPARATOR_宿磊', '50207905_FIELD_SEPARATOR_邓磊', '50208790_FIELD_SEPARATOR_蒲磊', '50214214_FIELD_SEPARATOR_洪磊', '50218418_FIELD_SEPARATOR_黄磊', '50218610_FIELD_SEPARATOR_孙磊', '50218907_FIELD_SEPARATOR_徐磊', '50219843_FIELD_SEPARATOR_张磊', '50220322_FIELD_SEPARATOR_邹磊', '50220991_FIELD_SEPARATOR_曾磊磊', '50227355_FIELD_SEPARATOR_刘磊', '50237549_FIELD_SEPARATOR_李磊', '50238894_FIELD_SEPARATOR_吴磊', '50238895_FIELD_SEPARATOR_汪磊', '50238896_FIELD_SEPARATOR_祝文磊', '50240683_FIELD_SEPARATOR_乔磊', '50241901_FIELD_SEPARATOR_冯继磊', '50243618_FIELD_SEPARATOR_谢磊', '50243656_FIELD_SEPARATOR_宋磊', '50300447_FIELD_SEPARATOR_杨磊', '50300580_FIELD_SEPARATOR_王磊磊', '50300646_FIELD_SEPARATOR_魏新磊', '50301066_FIELD_SEPARATOR_王磊', '50301770_FIELD_SEPARATOR_康磊', '50301785_FIELD_SEPARATOR_饶小磊', '50301874_FIELD_SEPARATOR_杨玉磊', '50302019_FIELD_SEPARATOR_李磊', '50303338_FIELD_SEPARATOR_刘磊', '50303519_FIELD_SEPARATOR_陶磊', '50500652_FIELD_SEPARATOR_杨磊', '60000111_FIELD_SEPARATOR_陈磊', '60000734_FIELD_SEPARATOR_周艳磊', '60002013_FIELD_SEPARATOR_陈磊', '60002075_FIELD_SEPARATOR_陈磊', '60203341_FIELD_SEPARATOR_陈磊', '60203445_FIELD_SEPARATOR_陈磊'], 'codeLabels': ['00090176--李兵磊', '00160713--黄磊', '00190023--杜祖磊', '00240039--顾磊', '00240101--王磊', '00240132--袁磊', '00270326--路红磊', '00270330--张磊', '00270684--冯磊', '00270718--王石磊', '00270832--韩磊', '00271003--金磊', '00271365--刘邦磊', '00271437--吴磊', '00271555--张磊', '00271682--李晓磊', '00271799--高有磊', '00272211--李磊', '00272214--封磊', '00272275--杨磊', '00280016--王磊', '00280020--胡晓磊', '00313214--逯磊', '00340025--陶磊', '00420024--胡晓磊', '50012210--何磊', '50013681--张磊', '50013766--耿磊', '50016275--常磊', '50017355--张磊', '50017999--高磊', '50020258--陈磊', '50023008--岳小磊', '50023718--张磊', '50025887--王磊', '50026197--张磊', '50026640--马克磊', '50027134--尹磊', '50027241--星磊', '50028017--李磊', '50028478--马洪磊', '50029381--杨磊', '50029627--丁磊', '50029976--裴磊', '50030103--杨旭磊', '50030191--韩磊', '50030623--张磊', '50030704--吴承磊', '50030737--黄磊磊', '50030749--孙东磊', '50030793--范磊', '50031131--杨磊', '50032407--郭磊', '50032413--张磊', '50034615--贾贺磊', '50035728--宋磊1', '50039679--刘磊', '50040013--刘磊', '50040297--王磊', '50044135--张士磊', '50046004--张淑磊', '50047486--曹磊', '50052965--佟晓磊', '50053917--王磊', '50054048--史磊', '50055921--王磊', '50056293--米俊磊', '50057455--陈赛磊', '50057805--于磊', '50059981--蒋磊', '50061347--张磊', '50062739--张磊', '50062993--黄磊', '50063521--刘磊', '50064359--夏磊', '50065392--郭磊', '50065411--佟磊', '50067567--张实磊', '50069147--郝英磊', '50069376--孙宝磊', '50069589--肖磊', '50069994--张琦磊', '50070250--武磊', '50071204--程磊', '50071234--宿磊', '50207905--邓磊', '50208790--蒲磊', '50214214--洪磊', '50218418--黄磊', '50218610--孙磊', '50218907--徐磊', '50219843--张磊', '50220322--邹磊', '50220991--曾磊磊', '50227355--刘磊', '50237549--李磊', '50238894--吴磊', '50238895--汪磊', '50238896--祝文磊', '50240683--乔磊', '50241901--冯继磊', '50243618--谢磊', '50243656--宋磊', '50300447--杨磊', '50300580--王磊磊', '50300646--魏新磊', '50301066--王磊', '50301770--康磊', '50301785--饶小磊', '50301874--杨玉磊', '50302019--李磊', '50303338--刘磊', '50303519--陶磊', '50500652--杨磊', '60000111--陈磊', '60000734--周艳磊', '60002013--陈磊', '60002075--陈磊', '60203341--陈磊', '60203445--陈磊'] }
  },

  comCode: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '02110000_FIELD_SEPARATOR_山东省分公司营业部_FIELD_SEPARATOR_N01',
        '02111100_FIELD_SEPARATOR_山东省分公司营业部营业一部_FIELD_SEPARATOR_N01',
        '02111200_FIELD_SEPARATOR_山东省分公司营业部营业二部_FIELD_SEPARATOR_N01',
        '02118000_FIELD_SEPARATOR_山东省分公司营业部rrth_FIELD_SEPARATOR_N063',
        '02118300_FIELD_SEPARATOR_山东省分公司营业部范范测试5_FIELD_SEPARATOR_N063',
        '0211A500_FIELD_SEPARATOR_山东省分公司营业部章丘营销服务部_FIELD_SEPARATOR_N09',
        '02126001_FIELD_SEPARATOR_山东省分公司营业部山东省分公司济南N063维护团队_FIELD_SEPARATOR_N063'
      ],
      'codeLabels': [
        '02110000--山东省分公司营业部',
        '02111100--山东省分公司营业部营业一部',
        '02111200--山东省分公司营业部营业二部',
        '02118000--山东省分公司营业部rrth',
        '02118300--山东省分公司营业部范范测试5',
        '0211A500--山东省分公司营业部章丘营销服务部',
        '02126001--山东省分公司营业部山东省分公司济南N063维护团队'
      ]
    }
  },

  usermessageByComCode: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '02010001_FIELD_SEPARATOR_山东业管1',
        '02010002_FIELD_SEPARATOR_庞柏青',
        '02010004_FIELD_SEPARATOR_郑晓坤'
      ],
      'codeLabels': [
        '02010001--山东业管1',
        '02010002--庞柏青',
        '02010004--郑晓坤'
      ]
    }
  },

  queryUserGrade: config => {
    console.log('mockOAAUTO', config)
    /* return {
      "message": "",
      "flag": "1",
      "codeValues": [
        "PWJ_FIELD_SEPARATOR_王杰测试岗位，随时删除"
      ],
      "codeLabels": [
        "PWJ--王杰测试岗位，随时删除"
      ]
    } */
    return {
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00000002_FIELD_SEPARATOR_沧州_FIELD_SEPARATOR_N09',
        '0000A001_FIELD_SEPARATOR_微贷金融-微贷营销组_FIELD_SEPARATOR_N11',
        '0000A002_FIELD_SEPARATOR_山东机构测试二-山东测试机构四_FIELD_SEPARATOR_N11',
        '0000A003_FIELD_SEPARATOR_北京测试部-天天测试_FIELD_SEPARATOR_N11'
      ],
      'codeLabels': [
        '000--00000000000',
        '001--系统管理员',
        '002--信息部管理员',
        '003--代理人管理员',
        '004--电销初始化岗',
        '005--参数管理岗',
        '006--分公司销售管理',
        '007--查询岗',
        '008--总公司核心处理岗',
        '009--分公司系统管理员',
        '010--支公司系统管理员',
        '011--信保部专用岗',
        '012--支公司代理协议人员管理员',
        '013--个人代理协议管理员',
        '015--总公司综合开拓管理岗',
        '016--综合开拓管理岗',
        '017--网销渠道配置',
        '018--运维管理岗',
        '019--参数开关管理岗',
        '020--理赔系统管理岗',
        '021--核心运维岗',
        '023--监管电话权限',
        '024--强制电子保单打印',
        '028--统一费用信息查看权限',
        '061--统计报表(全)',
        '062--平台系统',
        '063--核心系统查询',
        '064--老理赔查询',
        '065--绿色出行批改岗',
        '066--老理赔流程查询岗',
        '071--平台人员管理',
        '072--072',
        '073--意健险获取成本监控',
        '074--财产险获取成本监控',
        '075--农责险获取成本监控',
        '076--机构职场管理岗',
        '077--机构职场查询岗',
        '078--新车保单管理',
        '079--财产险获取成本监控',
        '080--农责险获取成本监控',
        '081--分公司农责险获取成本监控',
        '082--门店管理岗',
        '083--已核投保单转保单',
        '084--车队管理',
        '085--合并录单摩托车',
        '086--合并录单MJ',
        '087--MJ菜单测试',
        '088--新车出单岗',
        '089--老核心车队岗',
        '099--新车险出单DT'
      ]
    }
  },
  upGradesInitData: config => {
    return {
      'identificationFlag': 'firstLoad',
      'codeValues': [
        {
          'comcode': '02110000',
          'comcname': '山东省分公司营业部',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗'
        },
        {
          'comcode': '02126001',
          'comcname': '山东省分公司营业部山东省分公司济南N063维护团队',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗'
        },
        {
          'comcode': '0211A500',
          'comcname': '山东省分公司营业部章丘营销服',
          'usercode': '02080027',
          'usercname': '张磊',
          'gradecode': '016',
          'gradename': '综合开拓管理岗'
        }
      ],
      'fdid': 'A000000000000001',
      'flag': '1',
      'docStatus': '1',
      'docCreator': '王杰',
      'message': ''
    }
  },
  infoSupplyuploadJfcdSwitchMessage: config => {
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        {
          'usercode': '02000001',
          'comcode': '02000000',
          'riskcode': '120',
          'usercname': '钱明胜',
          'riskcname': '承保管理岗',
          'comcname': '山东省分公司',
          'origindate': '2022-03-26 16',
          'enddate': '2022-03-26 15'
          // 'origindate': '2022-03-25 13',
          // 'enddate': '2022-03-26 13',
        }
      ]
    }
  },
  infoSupplyupMidEhrNoMessage: config => {
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        {
          'hrno': 'B201902060001',
          'systemname': '保险行业平台',
          'usercode': '02000001',
          'systemcode': 'P027',
          'usercname': '钱明胜'
        },
        {
          'hrno': 'B201902060002',
          'systemname': '保险行业平台',
          'usercode': '02000001',
          'systemcode': 'P027',
          'usercname': '钱明胜'
        }
      ]
    }
  },
  upGradesMessage: config => {
    return {
      'message': '',
      'flag': '1'
    }
  },
  upMidEhrNoMessage: config => {
    return {
      'message': '',
      'flag': '1'
    }
  },
  querygradesBymenuName: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'count': 12,
      'codeValues': [
        {
          'systemname': '保险行业平台',
          'menuname': '保全信息配置',
          'gradecode': 'PWJ',
          'gradename': '王杰测试岗位，随时删除'
        }
      ]
    }
  },
  queryTaskMenu: config => {
    return {
      'message': '',
      'userlist': [
        {
          'childList': [
            {
              'childList': [
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.batchimport',
                      'taskName': '中介代理批量导入'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.drdlr',
                      'taskName': '批量导入代理人'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.drlx',
                      'taskName': '批量导入代理人类别按钮'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.drygz',
                      'taskName': '导入营改增信息'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.insert',
                      'taskName': '录入代理人'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.monthexportall',
                      'taskName': '总机构月末快速导出'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.query',
                      'taskName': '查询代理人'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agent',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agent.update',
                      'taskName': '修改代理人'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agent',
                  'taskName': '代理人管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agentPersonal',
                  'taskName': '代理人/渠道管理(个人)'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agentRelation',
                  'taskName': '多代理人配置'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agentregulation',
                  'taskName': '中介监管信息配置'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agentsalerinfo',
                  'taskName': '代理销售人员信息管理'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.batchimport',
                      'taskName': '合同协议管理批量导入-特定工号使用'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.export',
                      'taskName': '合同协议导出'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.insert',
                      'taskName': '录入协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.query',
                      'taskName': '查询协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.setInvalid',
                      'taskName': '合同协议置为无效'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreement',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreement.update',
                      'taskName': '修改协议'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agreement',
                  'taskName': '协议管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agreementPersonal',
                  'taskName': '合同/协议管理(个人)'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.batchimport',
                      'taskName': '网销批量导入协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.export',
                      'taskName': '网销导出协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.insert',
                      'taskName': '网销新增协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.query',
                      'taskName': '网销查询协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.setInvalid',
                      'taskName': '网销批量无效协议'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.agreementwx',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.agreementwx.update',
                      'taskName': '网销更新协议'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.agreementwx',
                  'taskName': '合同/协议管理-网销'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.approvalChange',
                  'taskName': '审 批'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.mail',
                  'taskName': '维护邮箱配置'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.mail.delupdate',
                  'taskName': '维护邮箱删改'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.payoutrate',
                  'taskName': '终极赔付率配置'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.personalagentselfreg',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.personalagentselfreg.export',
                      'taskName': '个代自注册导出'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.personalagentselfreg',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.personalagentselfreg.select',
                      'taskName': '个代自注册查询、详情'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.personalagentselfreg',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.personalagentselfreg.update',
                      'taskName': '自注册修改审批岗'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.personalagentselfreg',
                  'taskName': '个代自主注册'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.productqcfee',
                  'taskName': '企业财产保险费用管理'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.prpdoutsideagreedetail',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.prpdoutsideagreedetail.apriskrelation',
                      'taskName': '农责险种关系配置'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.prpdoutsideagreedetail',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.prpdoutsideagreedetail.clausetoagriculttype',
                      'taskName': '条款类型配置'
                    },
                    {
                      'childList': [
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.duty.dutyfeecontrol.import',
                          'taskName': '农责险费用管控导入'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.duty.dutyfeecontrol.insert',
                          'taskName': '农责险费用管控新增'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.duty.dutyfeecontrol.query',
                          'taskName': '农责险费用管控查询'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.duty.dutyfeecontrol.queryComCode',
                          'taskName': '农责险费用管控查询机构代码'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.duty.dutyfeecontrol.update',
                          'taskName': '农责险费用管控更新'
                        }
                      ],
                      'flag': '',
                      'parentCode': 'platform.agent.prpdoutsideagreedetail',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.prpdoutsideagreedetail.dutyfeecontrol',
                      'taskName': '农责险获取成本监控'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.agent.prpdoutsideagreedetail',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.prpdoutsideagreedetail.epeiriskrelation',
                      'taskName': '企工险种关系配置'
                    },
                    {
                      'childList': [
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee.import',
                          'taskName': '企客成本监控导入'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee.insert',
                          'taskName': '企客成本监控增加'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee.query',
                          'taskName': '企客成本监控查询'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee.update',
                          'taskName': '企客成本监控更新'
                        },
                        {
                          'flag': '',
                          'parentCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee.view',
                          'taskName': '企客成本监控详情'
                        }
                      ],
                      'flag': '',
                      'parentCode': 'platform.agent.prpdoutsideagreedetail',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.agent.prpdoutsideagreedetail.qgfee',
                      'taskName': '企客成本监控'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.prpdoutsideagreedetail',
                  'taskName': '个险费用管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.prpdoutsideagreedetailA',
                  'taskName': '财产险费用管理A'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.prpdoutsideagreedetailB',
                  'taskName': '财产险费用管理B'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agent',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agent.qcfee',
                  'taskName': '企财工程特险成本监控'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.agent',
              'taskName': '代理协议管理'
            },
            {
              'childList': [
                {
                  'flag': '',
                  'parentCode': 'platform.agentmanage',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agentmanage.agentcom',
                  'taskName': '中介机构管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agentmanage',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agentmanage.agentuser',
                  'taskName': '中介人员管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.agentmanage',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.agentmanage.agentuserpower',
                  'taskName': '中介人员权限管理'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.agentmanage',
              'taskName': '中介管理'
            },
            {
              'childList': [
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.delete',
                  'taskName': '上汽经销商配置删除'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.export',
                  'taskName': '经销商业务配置导出'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.import',
                  'taskName': '经销商业务配置导入'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.insert',
                  'taskName': '经销商业务配置新增'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.query',
                  'taskName': '经销商业务配置查询'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.update',
                  'taskName': '经销商业务配置更新'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.ccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.ccsicompany.view',
                  'taskName': '经销商业务配置详情'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.dealer.ccsicompany',
              'taskName': '经销商业务配置'
            },
            {
              'childList': [
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.export',
                  'taskName': '吉利经销商配置导出'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.import',
                  'taskName': '吉利经销商配置批导'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.insert',
                  'taskName': '吉利经销商配置新增'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.query',
                  'taskName': '吉利经销商配置查询'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.update',
                  'taskName': '吉利经销商配置更新'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.dealer.jlccsicompany',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.dealer.jlccsicompany.view',
                  'taskName': '吉利经销商查看详情'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.dealer.jlccsicompany',
              'taskName': '吉利经销商配置'
            },
            {
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.dealerPAWcode',
              'taskName': '车商总对总对照关系'
            },
            {
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.preservationrate',
              'taskName': '全保信息配置'
            },
            {
              'childList': [
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.product.class',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.class.delete',
                      'taskName': '删除险类'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.class',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.class.insert',
                      'taskName': '录入险类'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.class',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.class.query',
                      'taskName': '查询险类'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.class',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.class.update',
                      'taskName': '修改险类'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.product',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.product.class',
                  'taskName': '险类管理'
                },
                {
                  'childList': [
                    {
                      'childList': [
                        {
                          'flag': '',
                          'parentCode': 'platform.product.risk.config',
                          'parentName': '',
                          'remark': '',
                          'taskCode': 'platform.product.risk.config_AGREEMENT_FEERATE_SWITCH',
                          'taskName': '协议取值开关'
                        }
                      ],
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.config',
                      'taskName': '配置险种'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.config1',
                      'taskName': '险种设置项'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.configclass',
                      'taskName': '配置险别'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.copy',
                      'taskName': '险种复制'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.delete',
                      'taskName': '删除险种'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.insert',
                      'taskName': '录入险种'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.query',
                      'taskName': '查询险种'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.product.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.product.risk.update',
                      'taskName': '修改险种'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.product',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.product.risk',
                  'taskName': '险种'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.product',
              'taskName': '产品配置'
            },
            {
              'childList': [
                {
                  'flag': '',
                  'parentCode': 'platform.productc',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.productc.productc',
                  'taskName': '产品配置'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.productc.risk',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.productc.risk.config',
                      'taskName': '险种设置项'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.productc',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.productc.risk',
                  'taskName': '险种设置'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.productc',
              'taskName': '产品配置(菜单)'
            },
            {
              'childList': [
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.batchimport',
                  'taskName': '内勤人员批量导入功能'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.change',
                  'taskName': '平台运维专用人员状态变更'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.changeUserStatus',
                  'taskName': '更改用户有效状态'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.delete',
                  'taskName': '删除员工'
                },
                {
                  'childList': [
                    {
                      'flag': '',
                      'parentCode': 'platform.user.hrusercontrast',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.user.hrusercontrast.limitupdate',
                      'taskName': '限制为只能更新flag字段'
                    },
                    {
                      'flag': '',
                      'parentCode': 'platform.user.hrusercontrast',
                      'parentName': '',
                      'remark': '',
                      'taskCode': 'platform.user.hrusercontrast.updel',
                      'taskName': 'ehr中间表手动操作【运维专用】'
                    }
                  ],
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.hrusercontrast',
                  'taskName': '平台运维专用prpdhrusercontrast'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.insert',
                  'taskName': '录入员工'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.isResestPwssWord',
                  'taskName': '重置按钮'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.query',
                  'taskName': '查询员工'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.unlock',
                  'taskName': '解锁员工'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.update',
                  'taskName': '修改员工'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user.validUserCodeNumber',
                  'taskName': '修改有效工号数量权限'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.user1',
                  'taskName': '人员管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.userManage',
                  'taskName': '出单人员管理'
                },
                {
                  'flag': '',
                  'parentCode': 'platform.user',
                  'parentName': '',
                  'remark': '',
                  'taskCode': 'platform.userhr',
                  'taskName': 'HR人员管理'
                }
              ],
              'flag': '',
              'parentCode': 'platform',
              'parentName': '',
              'remark': '',
              'taskCode': 'platform.user',
              'taskName': '员工管理'
            }
          ],
          'flag': '',
          'parentCode': '',
          'parentName': '',
          'remark': '',
          'taskCode': 'platform',
          'taskName': '平台配置系统'
        }
      ],
      'flag': '1'
    }
  },
  queryDisplayRisk: config => {
    return {
      'flag': '1',
      'codeValues': [
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        },
        {
          'permitRiskClass': '555',
          'permitRiskCode': '666',
          'exceptRiskClass': '88888',
          'exceptRiskCode': '9999999999'
        }
      ]
    }
  },
  queryTwoComCode: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '00000000_FIELD_SEPARATOR_总公司_FIELD_SEPARATOR_N01',
        '00310000_FIELD_SEPARATOR_电销事业部_FIELD_SEPARATOR_N09',
        '01000000_FIELD_SEPARATOR_北京分公司_FIELD_SEPARATOR_N09',
        '02000000_FIELD_SEPARATOR_山东省分公司_FIELD_SEPARATOR_N09',
        '03000000_FIELD_SEPARATOR_江苏省分公司_FIELD_SEPARATOR_N09',
        '03520000_FIELD_SEPARATOR_江苏省分公司苏州中心支公司_FIELD_SEPARATOR_N09',
        '04000000_FIELD_SEPARATOR_黑龙江省分公司_FIELD_SEPARATOR_N09',
        '05000000_FIELD_SEPARATOR_重庆市分公司_FIELD_SEPARATOR_N09',
        '06000000_FIELD_SEPARATOR_河南省分公司_FIELD_SEPARATOR_N09',
        '07000000_FIELD_SEPARATOR_上海市分公司_FIELD_SEPARATOR_N09',
        '08000000_FIELD_SEPARATOR_广东省分公司_FIELD_SEPARATOR_N09',
        '09000000_FIELD_SEPARATOR_深圳市分公司_FIELD_SEPARATOR_N09'
      ],
      'codeLabels': [
        '00000000--总公司',
        '00310000--电销事业部',
        '01000000--北京分公司',
        '02000000--山东省分公司',
        '03000000--江苏省分公司',
        '03520000--江苏省分公司苏州中心支公司',
        '04000000--黑龙江省分公司',
        '05000000--重庆市分公司',
        '06000000--河南省分公司',
        '07000000--上海市分公司',
        '08000000--广东省分公司',
        '09000000--深圳市分公司'
      ]
    }
  },
  queryModelNo: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '02110000_FIELD_SEPARATOR_山东省分公司营业部_FIELD_SEPARATOR_N01',
        '02111100_FIELD_SEPARATOR_山东省分公司营业部营业一部_FIELD_SEPARATOR_N01',
        '02111200_FIELD_SEPARATOR_山东省分公司营业部营业二部_FIELD_SEPARATOR_N01',
        '02118000_FIELD_SEPARATOR_山东省分公司营业部rrth_FIELD_SEPARATOR_N063',
        '02118300_FIELD_SEPARATOR_山东省分公司营业部范范测试5_FIELD_SEPARATOR_N063',
        '0211A500_FIELD_SEPARATOR_山东省分公司营业部章丘营销服务部_FIELD_SEPARATOR_N09',
        '02126001_FIELD_SEPARATOR_山东省分公司营业部山东省分公司济南N063维护团队_FIELD_SEPARATOR_N063'
      ],
      'codeLabels': [
        '6--财产险理赔流程',
        '7--责任险理赔流程',
        '8--家财险理赔流程',
        '13--理赔货运险流程',
        '34--立案审核(新)',
        '35--估损调整审核(新)'
      ]
    }
  },
  queryComCodeByGradeCode: config => {
    console.log('mockOAAUTO', config)
    let comLevel = JSON.parse(config.body).comLevel
    return {
      'flag': '1',
      'codeValues': [
        '001总部核赔',
        '002部门总',
        '003室主任'
      ],
      'codeLabels': [
        '001--总部核赔',
        '002--部门总',
        '003--室主任'
      ]
    }
  },
  queryNodeNo: config => {
    console.log('mockOAAUTO', config)
    return {
      'flag': '1',
      'codeValues': [
        '2(1000)',
        '3(2000)',
        '4(3000)',
        '5(5000)',
        '6(10000)'
      ]
    }
  },
  queryRiskClassByNodeNo: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '0_FIELD_SEPARATOR_全部险种',
        '1_FIELD_SEPARATOR_非车非意',
        '2_FIELD_SEPARATOR_意健险',
        '3_FIELD_SEPARATOR_责任险',
        '4_FIELD_SEPARATOR_财产险',
        '5_FIELD_SEPARATOR_小财险',
        '6_FIELD_SEPARATOR_农险',
        '7_FIELD_SEPARATOR_水险',
        '8_FIELD_SEPARATOR_其他'
      ],
      'codeLabels': [
        '0--全部险种',
        '1--非车非意',
        '2--意健险',
        '3--责任险',
        '4--财产险',
        '5--小财险',
        '6--农险',
        '7--水险',
        '8--其他'
      ]
    }
  },
  infoSupplyupClaimUnderwritMessage: config => {
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        {

          'comcode': '02000000',
          'comcname': '山东省分公司',
          'usercode': '00090136',
          'usercname': '牛玉杰',
          'templateid': '6',
          'templatename': '财产险理赔流程',
          'gradecode': '002',
          'gradename': '部门总',
          'nodeno': '15',
          'classcode': '0',
          'classname': '全部险种'

        },
        {

          'comcode': '02000000',
          'comcname': '山东省分公司',
          'usercode': '00090136',
          'usercname': '牛玉杰',
          'templateid': '36',
          'templatename': '公估审核(新)',
          'gradecode': '002',
          'gradename': '部门总',
          'nodeno': '15',
          'classcode': '0',
          'classname': '全部险种'

        }
      ]
    }
  },
  submitClaimUnderwritMessage: config => {
    return {
      'message': '',
      'flag': '1'
    }
  },
  queryJFCDSWITCHRisk: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '0_FIELD_SEPARATOR_全部险种',
        '1_FIELD_SEPARATOR_非车非意',
        '2_FIELD_SEPARATOR_意健险',
        '3_FIELD_SEPARATOR_责任险',
        '4_FIELD_SEPARATOR_财产险',
        '5_FIELD_SEPARATOR_小财险',
        '6_FIELD_SEPARATOR_农险',
        '7_FIELD_SEPARATOR_水险',
        '8_FIELD_SEPARATOR_其他'
      ],
      'codeLabels': [
        '0--全部险种',
        '1--非车非意',
        '2--意健险',
        '3--责任险',
        '4--财产险',
        '5--小财险',
        '6--农险',
        '7--水险',
        '8--其他'
      ]
    }
  },
  queryJFCDSWITCHComCode: config => {
    console.log('mockOAAUTO', config)
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        '02110000_FIELD_SEPARATOR_山东省分公司营业部_FIELD_SEPARATOR_N01',
        '02111100_FIELD_SEPARATOR_山东省分公司营业部营业一部_FIELD_SEPARATOR_N01',
        '02111200_FIELD_SEPARATOR_山东省分公司营业部营业二部_FIELD_SEPARATOR_N01',
        '02118000_FIELD_SEPARATOR_山东省分公司营业部rrth_FIELD_SEPARATOR_N063',
        '02118300_FIELD_SEPARATOR_山东省分公司营业部范范测试5_FIELD_SEPARATOR_N063',
        '0211A500_FIELD_SEPARATOR_山东省分公司营业部章丘营销服务部_FIELD_SEPARATOR_N09',
        '02126001_FIELD_SEPARATOR_山东省分公司营业部山东省分公司济南N063维护团队_FIELD_SEPARATOR_N063'
      ],
      'codeLabels': [
        '02110000--山东省分33333333333公司营业部',
        '02111100--山东省分公司营业部营业一部',
        '02111200--山东省分公司营业部营业二部',
        '02118000--山东省分公司营业部rrth',
        '02118300--山东省分公司营业部范范测试5',
        '0211A500--山东省分公司营业部章丘营销服务部',
        '02126001--山东省分公司营业部山东省分公司济南N063维护团队'
      ]
    }
  },
  infoSupplyupGradesMessage: config => {
    return {
      'message': '',
      'flag': '1',
      'codeValues': [
        {
          'usercode': '02000001',
          'comcode': '02000000',
          'gradecode': '120',
          'usercname': '钱明胜',
          'gradename': '承保管理岗',
          'comcname': '山东省分公司'
        },
        {
          'usercode': '02000002',
          'comcode': '02000000',
          'gradecode': '120',
          'usercname': '山东虚拟人(测试)',
          'gradename': '承保管理岗',
          'comcname': '山东省分公司'
        }
      ]
    }
  },
  upJfcdSwitchMessage: config => {
    return {
      'message': '',
      'flag': '1'
    }
  },
  queryRisk: config => {
    return {
      'message': '',
      'flag': '1',
      'codeLabels': [
        '1918--旅程取消责任保险',
        '1923--旅行天气险',
        '1931--航空旅行旅程延误保险',
        '1938--法律费用补偿保险',
        '1939--全屋家电保',
        '1940--不明第三方侵权损失费用补偿保险'
      ]
    }
  }
}
