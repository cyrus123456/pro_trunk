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
  comCode: config => {
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
  querySystemPostTaskMenu: config => {
    return {'flag': '1', 'systemlist': [{'childList': [{'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.CloseManageFeeSalesSalary', 'taskName': 'å¹³å°ç»©æ•ˆç®¡ç†è´¹æƒé™'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.ICatastropheCodeMaintenance', 'taskName': 'å·¨ç¾ä»£ç ç»´æŠ¤'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.Item', 'taskName': 'é¡¹ç›®ç®¡ç†'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.batchimport', 'taskName': 'ä¸­ä»‹ä»£ç†æ‰¹é‡å¯¼å…¥'}, {'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.drdlr', 'taskName': 'æ‰¹é‡å¯¼å…¥ä»£ç†äºº'}, {'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.drygz', 'taskName': 'å¯¼å…¥è¥æ”¹å¢žä¿¡æ¯'}, {'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.insert', 'taskName': 'å½•å…¥ä»£ç†äºº'}, {'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.query', 'taskName': 'æŸ¥è¯¢ä»£ç†äºº'}, {'flag': '', 'parentCode': 'platform.agent.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent.update', 'taskName': 'ä¿®æ”¹ä»£ç†äºº'}], 'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agent', 'taskName': 'ä»£ç†äººç®¡ç†'}, {'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agentPersonal', 'taskName': 'ä»£ç†äºº/æ¸ é“ç®¡ç†(ä¸ªäºº)'}, {'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agentsalerinfo', 'taskName': 'ä»£ç†é”€å”®äººå‘˜ä¿¡æ¯ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.agent.agreement', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement.export', 'taskName': 'åˆåŒåè®®å¯¼å‡º'}, {'flag': '', 'parentCode': 'platform.agent.agreement', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement.insert', 'taskName': 'å½•å…¥åè®®'}, {'flag': '', 'parentCode': 'platform.agent.agreement', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement.query', 'taskName': 'æŸ¥è¯¢åè®®'}, {'flag': '', 'parentCode': 'platform.agent.agreement', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement.setInvalid', 'taskName': 'åˆåŒåè®®ç½®ä¸ºæ— æ•ˆ'}, {'flag': '', 'parentCode': 'platform.agent.agreement', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement.update', 'taskName': 'ä¿®æ”¹åè®®'}], 'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreement', 'taskName': 'åè®®ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.agreementPersonal', 'taskName': 'åˆåŒ/åè®®ç®¡ç†(ä¸ªäºº)'}, {'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.productqcfee', 'taskName': 'ä¼ä¸šè´¢äº§ä¿é™©è´¹ç”¨ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.agent.prpdoutsideagreedetail', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.prpdoutsideagreedetail.2013AB', 'taskName': 'è´¢äº§é™©è´¹ç”¨ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.agent.prpdoutsideagreedetail', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.prpdoutsideagreedetail.clausetoagriculttype', 'taskName': 'æ¡æ¬¾ç±»åž‹é…ç½®'}], 'flag': '', 'parentCode': 'platform.agent', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent.prpdoutsideagreedetail', 'taskName': 'ä¸ªé™©è´¹ç”¨ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.agent', 'taskName': 'ä»£ç†åè®®ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.agentmanage', 'parentName': '', 'remark': '', 'taskCode': 'platform.agentmanage.agentcom', 'taskName': 'ä¸­ä»‹æœºæž„ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.agentmanage', 'parentName': '', 'remark': '', 'taskCode': 'platform.agentmanage.agentuser', 'taskName': 'ä¸­ä»‹äººå‘˜ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.agentmanage', 'parentName': '', 'remark': '', 'taskCode': 'platform.agentmanage.agentuserpower', 'taskName': 'ä¸­ä»‹äººå‘˜æƒé™ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.agentmanage', 'taskName': 'ä¸­ä»‹ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.aisplit', 'parentName': '', 'remark': '', 'taskCode': 'platform.aisplit.logquery', 'taskName': 'æ•°æ®å¤„ç†æ—¥å¿—æŸ¥è¯¢'}, {'flag': '', 'parentCode': 'platform.aisplit', 'parentName': '', 'remark': '', 'taskCode': 'platform.aisplit.recover', 'taskName': 'æ•°æ®è¿ç§»ä»»åŠ¡å¤„ç†'}, {'flag': '', 'parentCode': 'platform.aisplit', 'parentName': '', 'remark': '', 'taskCode': 'platform.aisplit.splitconfig', 'taskName': 'æ•°æ®åˆ†å‰²é…ç½®ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.aisplit', 'parentName': '', 'remark': '', 'taskCode': 'platform.aisplit.task', 'taskName': 'æ•°æ®åˆ†å‰²ä»»åŠ¡å¤„ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.aisplit', 'taskName': 'æ•°æ®åˆ†å‰²'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.antilaundry.antilaundry', 'parentName': '', 'remark': '', 'taskCode': 'platform.antilaundry.antilaundry.change', 'taskName': 'ä¸­é«˜é£Žé™©åå•ç®¡ç†å˜æ›´'}, {'flag': '', 'parentCode': 'platform.antilaundry.antilaundry', 'parentName': '', 'remark': '', 'taskCode': 'platform.antilaundry.antilaundry.query', 'taskName': 'ä¸­é«˜é£Žé™©åå•ç®¡ç†æŸ¥è¯¢'}], 'flag': '', 'parentCode': 'platform.antilaundry', 'parentName': '', 'remark': '', 'taskCode': 'platform.antilaundry.antilaundry', 'taskName': 'ä¸­é«˜é£Žé™©åå•ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.antilaundry', 'parentName': '', 'remark': '', 'taskCode': 'platform.antilaundry.blacklist', 'taskName': 'æ¶‰å«Œææ€–èžèµ„é»‘åå•ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.antilaundry', 'taskName': 'åæ´—é’±ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.Company', 'taskName': 'é“¶è¡Œæœºæž„å¯¹ç…§ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.bankLevel', 'taskName': 'é“¶è¡Œæœºæž„å±‚çº§ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.bankagreement', 'taskName': 'é“¶è¡Œåè®®ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.code', 'taskName': 'èµ„é‡‘é“¶è¡Œä¿¡æ¯é…ç½®'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.config_CHANNELTYPE_SWITCH_N03', 'taskName': 'å…¼èŒé“¶ä¿å‡ºå•æƒé™é…ç½®'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.shortinsbusinfo', 'taskName': 'çŸ­é™©å®¢è¿ç«™ä¿¡æ¯é…ç½®'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.sqcdwd', 'taskName': 'è½¦é™©ç½‘ç‚¹é…ç½®'}, {'flag': '', 'parentCode': 'platform.bank', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank.yxwd', 'taskName': 'é“¶ä¿ä¿¡ä¿ç½‘ç‚¹é…ç½®'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.bank', 'taskName': 'é“¶è¡Œç®¡ç†'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.bankCompany', 'taskName': 'é“¶è¡Œæœºæž„å¯¹ç…§ç®¡ç†'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.cache', 'taskName': 'redisç¼“å­˜'}, {'childList': [{'flag': '', 'parentCode': 'platform.car.carfeecontrol', 'parentName': '', 'remark': '', 'taskCode': 'platform.car.carfeecontrol.dx', 'taskName': 'ç”µé”€è½¦é™©ç®¡æŽ§ç®¡ç†æƒé™'}, {'flag': '', 'parentCode': 'platform.car.carfeecontrol', 'parentName': '', 'remark': '', 'taskCode': 'platform.car.carfeecontrol.fwd', 'taskName': 'éžç½‘ç”µè½¦é™©ç®¡æŽ§ç®¡ç†æƒé™'}, {'flag': '', 'parentCode': 'platform.car.carfeecontrol', 'parentName': '', 'remark': '', 'taskCode': 'platform.car.carfeecontrol.import', 'taskName': 'è½¦é™©ç®¡æŽ§ç®¡ç†å¯¼å…¥é¢„ç®—æ•°æ®æƒé™'}, {'flag': '', 'parentCode': 'platform.car.carfeecontrol', 'parentName': '', 'remark': '', 'taskCode': 'platform.car.carfeecontrol.wx', 'taskName': 'ç½‘é”€è½¦é™©ç®¡æŽ§ç®¡ç†æƒé™'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.car.carfeecontrol', 'taskName': 'è½¦é™©è´¹ç”¨ç®¡æŽ§æƒé™'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.carbrandrules', 'taskName': 'è½¦å•†è§„åˆ™'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.carsheeptax', 'taskName': 'è½¦èˆ¹ç¨Žç®¡ç†'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.code.accitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.accitem.delete', 'taskName': 'åˆ é™¤å†ä¿è´¢åŠ¡ç§‘ç›®'}, {'flag': '', 'parentCode': 'platform.code.accitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.accitem.insert', 'taskName': 'å½•å…¥å†ä¿è´¢åŠ¡ç§‘ç›®'}, {'flag': '', 'parentCode': 'platform.code.accitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.accitem.query', 'taskName': 'æŸ¥è¯¢å†ä¿è´¢åŠ¡ç§‘ç›®'}, {'flag': '', 'parentCode': 'platform.code.accitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.accitem.update', 'taskName': 'ä¿®æ”¹å†ä¿è´¢åŠ¡ç§‘ç›®'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.accitem', 'taskName': 'å†ä¿è´¢åŠ¡ç§‘ç›®ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.account', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.account.delete', 'taskName': 'åˆ é™¤å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.account', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.account.insert', 'taskName': 'å½•å…¥å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.account', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.account.query', 'taskName': 'æŸ¥è¯¢å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.account', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.account.update', 'taskName': 'ä¿®æ”¹å¸æˆ·'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.account', 'taskName': 'å¸æˆ·ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.agentcom', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agentcom.delete', 'taskName': 'åˆ é™¤ä»£èµ”åœ°åŒºå’Œå…¬å¸'}, {'flag': '', 'parentCode': 'platform.code.agentcom', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agentcom.insert', 'taskName': 'å½•å…¥ä»£èµ”åœ°åŒºå’Œå…¬å¸'}, {'flag': '', 'parentCode': 'platform.code.agentcom', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agentcom.query', 'taskName': 'æŸ¥è¯¢ä»£èµ”åœ°åŒºå’Œå…¬å¸'}, {'flag': '', 'parentCode': 'platform.code.agentcom', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agentcom.update', 'taskName': 'ä¿®æ”¹ä»£èµ”åœ°åŒºå’Œå…¬å¸'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agentcom', 'taskName': 'ä»£èµ”åœ°åŒºå’Œå…¬å¸ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.agreementServiceArea', 'taskName': 'åè®®å·å…³è”ç»´æŠ¤'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.article', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.article.delete', 'taskName': 'åˆ é™¤å†ä¿ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.article', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.article.insert', 'taskName': 'å½•å…¥å†ä¿ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.article', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.article.query', 'taskName': 'æŸ¥è¯¢å†ä¿ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.article', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.article.update', 'taskName': 'ä¿®æ”¹å†ä¿ä¸“é¡¹'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.article', 'taskName': 'å†ä¿ä¸“é¡¹ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.artitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.artitem.delete', 'taskName': 'åˆ é™¤å†ä¿è´¢åŠ¡ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.artitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.artitem.insert', 'taskName': 'å½•å…¥å†ä¿è´¢åŠ¡ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.artitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.artitem.query', 'taskName': 'æŸ¥è¯¢å†ä¿è´¢åŠ¡ä¸“é¡¹'}, {'flag': '', 'parentCode': 'platform.code.artitem', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.artitem.update', 'taskName': 'ä¿®æ”¹å†ä¿è´¢åŠ¡ä¸“é¡¹'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.artitem', 'taskName': 'å†ä¿è´¢åŠ¡ä¸“é¡¹ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.busiLevel', 'taskName': 'ä¸šåŠ¡å±‚çº§ä¿¡æ¯'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carandagentconfig', 'taskName': 'ç½‘é”€è½¦å•†/ç»ä»£è´¹ç”¨çŽ‡é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.carmodel', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodel.delete', 'taskName': 'åˆ é™¤è½¦åž‹ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.carmodel', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodel.insert', 'taskName': 'å½•å…¥è½¦åž‹ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.carmodel', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodel.query', 'taskName': 'æŸ¥è¯¢è½¦åž‹ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.carmodel', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodel.update', 'taskName': 'ä¿®æ”¹è½¦åž‹ä»£ç '}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodel', 'taskName': 'è½¦åž‹ä»£ç ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.carmodelrelation', 'taskName': 'è½¦åž‹è½¦ç³»å¯¹åº”å…³ç³»'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.channelratio', 'taskName': 'ç½‘é”€æ¸ é“ç³»æ•°é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.clause', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clause.delete', 'taskName': 'åˆ é™¤æ¡æ¬¾ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.clause', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clause.insert', 'taskName': 'å½•å…¥æ¡æ¬¾ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.clause', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clause.query', 'taskName': 'æŸ¥è¯¢æ¡æ¬¾ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.clause', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clause.update', 'taskName': 'ä¿®æ”¹æ¡æ¬¾ä»£ç '}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clause', 'taskName': 'æ¡æ¬¾ä»£ç ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.clausenew', 'taskName': 'ç‰¹çº¦é…ç½®ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code.delete', 'taskName': 'åˆ é™¤é€šç”¨ä»£ç ç±»'}, {'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code.insert', 'taskName': 'å½•å…¥é€šç”¨ä»£ç ç±»'}, {'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code.query', 'taskName': 'æŸ¥è¯¢é€šç”¨ä»£ç ç±»'}, {'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code.update', 'taskName': 'ä¿®æ”¹é€šç”¨ä»£ç ç±»'}, {'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code.wxqdmcpz', 'taskName': 'ç½‘é”€æ¸ é“é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.ywcode.zgfzscsxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.zgfzscsxx.cscx', 'taskName': 'è½¦å•†ä¿¡æ¯æŸ¥è¯¢'}, {'flag': '', 'parentCode': 'platform.code.ywcode.zgfzscsxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.zgfzscsxx.gjxg', 'taskName': 'å…³é”®ä¿¡æ¯ä¿®æ”¹'}, {'flag': '', 'parentCode': 'platform.code.ywcode.zgfzscsxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.zgfzscsxx.xzcs', 'taskName': 'æ–°å¢žè½¦å•†ä¿¡æ¯'}, {'flag': '', 'parentCode': 'platform.code.ywcode.zgfzscsxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.zgfzscsxx.ybxg', 'taskName': 'ä¸€èˆ¬ä¿¡æ¯ä¿®æ”¹'}], 'flag': '', 'parentCode': 'platform.code.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.zgfzscsxx', 'taskName': 'ç›´ç®¡éžä¸“å±žè½¦å•†ä¿¡æ¯ç®¡ç†'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.code', 'taskName': 'é€šç”¨ä»£ç ç±»ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.comaccount', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.comaccount.delete', 'taskName': 'åˆ é™¤æœºæž„å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.comaccount', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.comaccount.insert', 'taskName': 'å½•å…¥æœºæž„å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.comaccount', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.comaccount.query', 'taskName': 'æŸ¥è¯¢æœºæž„å¸æˆ·'}, {'flag': '', 'parentCode': 'platform.code.comaccount', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.comaccount.update', 'taskName': 'ä¿®æ”¹æœºæž„å¸æˆ·'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.comaccount', 'taskName': 'æœºæž„å¸æˆ·ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.currency', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.currency.delete', 'taskName': 'åˆ é™¤å¸åˆ«'}, {'flag': '', 'parentCode': 'platform.code.currency', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.currency.insert', 'taskName': 'å½•å…¥å¸åˆ«'}, {'flag': '', 'parentCode': 'platform.code.currency', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.currency.query', 'taskName': 'æŸ¥è¯¢å¸åˆ«'}, {'flag': '', 'parentCode': 'platform.code.currency', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.currency.update', 'taskName': 'ä¿®æ”¹å¸åˆ«'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.currency', 'taskName': 'å¸åˆ«ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.deprecaterate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.deprecaterate.delete', 'taskName': 'åˆ é™¤æŠ˜æ—§çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.deprecaterate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.deprecaterate.insert', 'taskName': 'å½•å…¥æŠ˜æ—§çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.deprecaterate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.deprecaterate.query', 'taskName': 'æŸ¥è¯¢æŠ˜æ—§çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.deprecaterate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.deprecaterate.update', 'taskName': 'ä¿®æ”¹æŠ˜æ—§çŽ‡'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.deprecaterate', 'taskName': 'æŠ˜æ—§çŽ‡ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.economicAgent', 'taskName': 'ç»ä»£å…¬å¸ä¿¡æ¯ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.exch', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.exch.delete', 'taskName': 'åˆ é™¤å…‘æ¢çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.exch', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.exch.insert', 'taskName': 'å½•å…¥å…‘æ¢çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.exch', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.exch.query', 'taskName': 'æŸ¥è¯¢å…‘æ¢çŽ‡'}, {'flag': '', 'parentCode': 'platform.code.exch', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.exch.update', 'taskName': 'ä¿®æ”¹å…‘æ¢çŽ‡'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.exch', 'taskName': 'å…‘æ¢çŽ‡ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.feeruleconfig', 'taskName': 'è´¹ç”¨çŽ‡è§„åˆ™é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.financialcustomerinfo', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.financialcustomerinfo.delete', 'taskName': 'åˆ é™¤é‡‘èžå®¢æˆ·ç»´æŠ¤ä¸“å‘˜'}, {'flag': '', 'parentCode': 'platform.code.financialcustomerinfo', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.financialcustomerinfo.insert', 'taskName': 'å½•å…¥é‡‘èžå®¢æˆ·ç»´æŠ¤ä¸“å‘˜'}, {'flag': '', 'parentCode': 'platform.code.financialcustomerinfo', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.financialcustomerinfo.query', 'taskName': 'æŸ¥è¯¢é‡‘èžå®¢æˆ·ç»´æŠ¤ä¸“å‘˜'}, {'flag': '', 'parentCode': 'platform.code.financialcustomerinfo', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.financialcustomerinfo.update', 'taskName': 'ä¿®æ”¹é‡‘èžå®¢æˆ·ç»´æŠ¤ä¸“å‘˜'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.financialcustomerinfo', 'taskName': 'é‡‘èžå®¢æˆ·ç»´æŠ¤ä¸“å‘˜'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.govsubsidyinfo', 'taskName': 'æ”¿åºœä¿è´¹è¡¥è´´é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.identifier', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.identifier.delete', 'taskName': 'åˆ é™¤æ£€éªŒäººä»£ç '}, {'flag': '', 'parentCode': 'platform.code.identifier', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.identifier.insert', 'taskName': 'å½•å…¥æ£€éªŒäººä»£ç '}, {'flag': '', 'parentCode': 'platform.code.identifier', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.identifier.query', 'taskName': 'æŸ¥è¯¢æ£€éªŒäººä»£ç '}, {'flag': '', 'parentCode': 'platform.code.identifier', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.identifier.update', 'taskName': 'ä¿®æ”¹æ£€éªŒäººä»£ç '}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.identifier', 'taskName': 'æ£€éªŒäººä»£ç ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.injurygrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.injurygrade.delete', 'taskName': 'åˆ é™¤ä¼¤æ®‹ç­‰çº§'}, {'flag': '', 'parentCode': 'platform.code.injurygrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.injurygrade.insert', 'taskName': 'å½•å…¥ä¼¤æ®‹ç­‰çº§'}, {'flag': '', 'parentCode': 'platform.code.injurygrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.injurygrade.query', 'taskName': 'æŸ¥è¯¢ä¼¤æ®‹ç­‰çº§'}, {'flag': '', 'parentCode': 'platform.code.injurygrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.injurygrade.update', 'taskName': 'ä¿®æ”¹ä¼¤æ®‹ç­‰çº§'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.injurygrade', 'taskName': 'ä¼¤æ®‹ç­‰çº§'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.internetSale', 'taskName': 'ç½‘é”€æ¸ é“é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.managefeerate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.managefeerate.delete', 'taskName': 'åˆ é™¤è´¹ç”¨æ¯”ä¾‹'}, {'flag': '', 'parentCode': 'platform.code.managefeerate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.managefeerate.insert', 'taskName': 'å½•å…¥è´¹ç”¨æ¯”ä¾‹'}, {'flag': '', 'parentCode': 'platform.code.managefeerate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.managefeerate.query', 'taskName': 'æŸ¥è¯¢è´¹ç”¨æ¯”ä¾‹'}, {'flag': '', 'parentCode': 'platform.code.managefeerate', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.managefeerate.update', 'taskName': 'ä¿®æ”¹è´¹ç”¨æ¯”ä¾‹'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.managefeerate', 'taskName': 'è´¹ç”¨æ¯”ä¾‹ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.parameterManagement', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.parameterManagement.Detail', 'taskName': 'å‚æ•°æ˜Žç»†ç»´æŠ¤'}, {'flag': '', 'parentCode': 'platform.code.parameterManagement', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.parameterManagement.Main', 'taskName': 'å‚æ•°å®šä¹‰ç»´æŠ¤'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.parameterManagement', 'taskName': 'é™¤å¤–å‚æ•°ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.plane', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.plane.delete', 'taskName': 'åˆ é™¤é£žæœº'}, {'flag': '', 'parentCode': 'platform.code.plane', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.plane.insert', 'taskName': 'å½•å…¥é£žæœº'}, {'flag': '', 'parentCode': 'platform.code.plane', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.plane.query', 'taskName': 'æŸ¥è¯¢é£žæœº'}, {'flag': '', 'parentCode': 'platform.code.plane', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.plane.update', 'taskName': 'ä¿®æ”¹é£žæœº'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.plane', 'taskName': 'é£žæœºç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.port', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.port.delete', 'taskName': 'åˆ é™¤æ¸¯å£ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.port', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.port.insert', 'taskName': 'å½•å…¥æ¸¯å£ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.port', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.port.query', 'taskName': 'æŸ¥è¯¢æ¸¯å£ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.port', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.port.update', 'taskName': 'ä¿®æ”¹æ¸¯å£ä»£ç '}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.port', 'taskName': 'æ¸¯å£ä»£ç ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.profitRate', 'taskName': 'ä¿åº•åˆ©æ¶¦çŽ‡é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.reins', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.reins.delete', 'taskName': 'åˆ é™¤æŽ¥å—äºº'}, {'flag': '', 'parentCode': 'platform.code.reins', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.reins.insert', 'taskName': 'å½•å…¥æŽ¥å—äºº'}, {'flag': '', 'parentCode': 'platform.code.reins', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.reins.query', 'taskName': 'æŸ¥è¯¢æŽ¥å—äºº'}, {'flag': '', 'parentCode': 'platform.code.reins', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.reins.update', 'taskName': 'ä¿®æ”¹æŽ¥å—äºº'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.reins', 'taskName': 'æŽ¥å—äººç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.report', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.report.delete', 'taskName': 'åˆ é™¤æŠ¥è¡¨ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.report', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.report.insert', 'taskName': 'å½•å…¥æŠ¥è¡¨ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.report', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.report.query', 'taskName': 'æŸ¥è¯¢æŠ¥è¡¨ä»£ç '}, {'flag': '', 'parentCode': 'platform.code.report', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.report.update', 'taskName': 'ä¿®æ”¹æŠ¥è¡¨ä»£ç '}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.report', 'taskName': 'æŠ¥è¡¨ä»£ç ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.sellfeebycomcode', 'taskName': 'éžé”€å”®æŽ¨åŠ¨è´¹ç”¨çŽ‡(æœºæž„)é…ç½®'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.sellfeebyservcode', 'taskName': 'éžé”€å”®æŽ¨åŠ¨è´¹ç”¨çŽ‡(æœåŠ¡åŒºåŸŸä»£ç )é…ç½®'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.sellfeeconfig', 'taskName': 'éžé”€å”®æŽ¨åŠ¨è´¹ç”¨çŽ‡é…ç½®'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.settlementrate', 'taskName': 'éžè½¦UNç»“ç®—è´¹ç”¨çŽ‡é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.code.ship', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ship.delete', 'taskName': 'åˆ é™¤èˆ¹èˆ¶'}, {'flag': '', 'parentCode': 'platform.code.ship', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ship.insert', 'taskName': 'å½•å…¥èˆ¹èˆ¶'}, {'flag': '', 'parentCode': 'platform.code.ship', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ship.query', 'taskName': 'æŸ¥è¯¢èˆ¹èˆ¶'}, {'flag': '', 'parentCode': 'platform.code.ship', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ship.update', 'taskName': 'ä¿®æ”¹èˆ¹èˆ¶'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ship', 'taskName': 'èˆ¹èˆ¶ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.telemarketingbusimodel', 'taskName': 'ç”µé”€ä¸šåŠ¡æ¨¡å¼é…ç½®'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.unfeeconfig', 'taskName': 'æœºæž„UNç»“ç®—è´¹ç”¨çŽ‡é…ç½®'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ybchannelCooperate', 'taskName': 'é“¶ä¿æ¸ é“ä¿¡æ¯ç®¡ç†'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.cscx', 'taskName': 'è½¦å•†ä¿¡æ¯æŸ¥è¯¢'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.csscan', 'taskName': 'è½¦å•†åˆ é™¤æŒ‰é’®æƒé™'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.drcsbf', 'taskName': 'è½¦å•†ä¿è´¹å¯¼å…¥æŒ‰é’®'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.drcssx', 'taskName': 'å¯¼å…¥é€ä¿®ä¿¡æ¯çš„æŒ‰é’®æƒé™'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.gjxg', 'taskName': 'å…³é”®ä¿¡æ¯ä¿®æ”¹'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.xzcs', 'taskName': 'æ–°å¢žè½¦å•†ä¿¡æ¯'}, {'flag': '', 'parentCode': 'platform.code.ywcode.csxx', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx.ybxg', 'taskName': 'ä¸€èˆ¬ä¿¡æ¯ä¿®æ”¹'}], 'flag': '', 'parentCode': 'platform.code.ywcode', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.csxx', 'taskName': 'è½¦å•†ä¿¡æ¯ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code.ywcode', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.evealrelation', 'taskName': 'æœºæž„å…œåº•åè®®é…ç½®'}, {'flag': '', 'parentCode': 'platform.code.ywcode', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.turel', 'taskName': 'è½¦å•†Tç å·®å¼‚åŒ–åè®®é…ç½®'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode', 'taskName': 'ä¸šåŠ¡ä»£ç '}, {'childList': [{'flag': '', 'parentCode': 'platform.code.ywcode.fwqydmgl', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.fwqydmgl.carnoCar', 'taskName': 'è½¦å•†ä¿¡æ¯ä¸Žéžä¸“å±žè½¦å•†ç®¡ç†'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ywcode.fwqydmgl', 'taskName': 'æœåŠ¡åŒºåŸŸä»£ç ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.code.ztchannelCooperate', 'taskName': 'ç»¼æ‹“æ¸ é“åˆä½œå…¬å¸ä¿¡æ¯ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.additionalrate', 'taskName': 'å¯ç”¨åŠ æŠ•è´¹ç”¨çŽ‡é…ç½®'}, {'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.lossrationconfig', 'taskName': 'é¢„è®¾ç»ˆæžèµ”ä»˜çŽ‡é…ç½®'}, {'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.newfeeruleconfig', 'taskName': 'è´¹ç”¨çŽ‡é…ç½®ï¼ˆæ–°ï¼‰'}, {'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.nonmarketratebychanneltype', 'taskName': 'éžå¸‚åœºè´¹ç”¨çŽ‡é…ç½®ï¼ˆæ¸ é“ï¼‰'}, {'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.nonmarketratebycomcode', 'taskName': 'éžå¸‚åœºè´¹ç”¨çŽ‡é…ç½®ï¼ˆæœºæž„ï¼‰'}, {'flag': '', 'parentCode': 'platform.lifetablenew', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew.valuemode', 'taskName': 'å®žé™…å¯ç”¨é”€å”®æŽ¨åŠ¨è´¹ç”¨é¢å–å€¼ç®¡ç†'}], 'flag': '', 'parentCode': 'platform.code', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetablenew', 'taskName': 'ç”Ÿå‘½è¡¨é…ç½®ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.code', 'taskName': 'ä»£ç ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.all', 'taskName': 'æœºæž„ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.comcodeidrelation', 'taskName': 'æœºæž„ä¸Žèº«ä»½è¯è®¾å¤‡é‡‡é›†å™¨å…³è”é…ç½®'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.comcoderelation', 'taskName': 'æœºæž„ä¸Žèˆªè¿äº‹ä¸šéƒ¨å…³è”é…ç½®'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.companyAgentInsert', 'taskName': 'ä»£ç†æœºæž„æ–°å¢ž'}, {'childList': [{'flag': '', 'parentCode': 'platform.company.companybranch', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.companybranch.cbzx', 'taskName': 'ä¿®æ”¹æˆæœ¬ä¸­å¿ƒ'}], 'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.companybranch', 'taskName': 'æœºæž„ä¿®æ”¹'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.delete', 'taskName': 'åˆ é™¤æœºæž„'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.insert', 'taskName': 'å½•å…¥æœºæž„'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.query', 'taskName': 'æŸ¥è¯¢æœºæž„'}, {'flag': '', 'parentCode': 'platform.company', 'parentName': '', 'remark': '', 'taskCode': 'platform.company.update', 'taskName': 'ä¿®æ”¹æœºæž„'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.company', 'taskName': 'æœºæž„ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.companyWorkplace', 'parentName': '', 'remark': '', 'taskCode': 'platform.companyWorkplace.insert', 'taskName': 'èŒåœºæ–°å¢ž'}, {'childList': [{'flag': '', 'parentCode': 'platform.companyWorkplace.query', 'parentName': '', 'remark': '', 'taskCode': 'platform.companyWorkplace.query.confirm', 'taskName': 'æœºæž„èŒåœºç®¡ç†çš„ç¡®è®¤æƒé™'}], 'flag': '', 'parentCode': 'platform.companyWorkplace', 'parentName': '', 'remark': '', 'taskCode': 'platform.companyWorkplace.query', 'taskName': 'èŒåœºæŸ¥è¯¢'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.companyWorkplace', 'taskName': 'æœºæž„èŒåœºç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.compoundproduct', 'parentName': '', 'remark': '', 'taskCode': 'platform.compoundproduct.class.querytrace', 'taskName': 'äº§å“é…ç½®è½¨è¿¹'}, {'flag': '', 'parentCode': 'platform.compoundproduct', 'parentName': '', 'remark': '', 'taskCode': 'platform.compoundproduct.qcproduct', 'taskName': 'ä¼ä¸šè´¢äº§ä¿é™©'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.compoundproduct', 'taskName': 'ç»„åˆæ–¹æ¡ˆé…ç½®'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.customer.customeridv', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv.delete', 'taskName': 'åˆ é™¤ä¸ªäººå®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customeridv', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv.insert', 'taskName': 'å½•å…¥ä¸ªäººå®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customeridv', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv.query', 'taskName': 'æŸ¥è¯¢ä¸ªäººå®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customeridv', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv.update', 'taskName': 'ä¿®æ”¹ä¸ªäººå®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customeridv', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv.writeoff', 'taskName': 'æ³¨é”€ä¸ªäººå®¢æˆ·èµ„æ–™'}], 'flag': '', 'parentCode': 'platform.customer', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customeridv', 'taskName': 'ä¸ªäººå®¢æˆ·èµ„æ–™ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.customer.customerunit', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit.delete', 'taskName': 'åˆ é™¤å›¢ä½“å®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customerunit', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit.insert', 'taskName': 'å½•å…¥å›¢ä½“å®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customerunit', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit.query', 'taskName': 'æŸ¥è¯¢å›¢ä½“å®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customerunit', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit.update', 'taskName': 'ä¿®æ”¹å›¢ä½“å®¢æˆ·èµ„æ–™'}, {'flag': '', 'parentCode': 'platform.customer.customerunit', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit.writeoff', 'taskName': 'æ³¨é”€å›¢ä½“å®¢æˆ·èµ„æ–™'}], 'flag': '', 'parentCode': 'platform.customer', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer.customerunit', 'taskName': 'å›¢ä½“å®¢æˆ·èµ„æ–™ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.customer', 'taskName': 'å®¢æˆ·èµ„æ–™ç®¡ç†'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.dataSapperMaintain', 'taskName': 'å»ºè®®åç§°æ—¥å¿—ç®¡ç†'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.feedeductuionrate', 'taskName': 'æ‰‹ç»­è´¹æŠµæ‰£çŽ‡'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.hrcostrate', 'taskName': 'äººåŠ›æˆæœ¬'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.interfaceconfig', 'taskName': 'æŽ¥å£ä¿¡æ¯é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.intersell', 'parentName': '', 'remark': '', 'taskCode': 'platform.intersell.comManage', 'taskName': 'ç»¼åˆå¼€æ‹“æœºæž„ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.intersell', 'parentName': '', 'remark': '', 'taskCode': 'platform.intersell.personManage', 'taskName': 'ç»¼åˆå¼€æ‹“äººå‘˜ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.intersell', 'taskName': 'ç»¼åˆå¼€æ‹“ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.lifetable', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetable.businessfeenew', 'taskName': 'æ›´æ–°è´¹ç”¨ï¼ˆç”Ÿäº§ï¼‰'}, {'flag': '', 'parentCode': 'platform.lifetable', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetable.businesskindnew', 'taskName': 'æ–°å¢žä¸šåŠ¡å°ç±»ï¼ˆç”Ÿäº§ï¼‰'}, {'flag': '', 'parentCode': 'platform.lifetable', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetable.updateButton', 'taskName': 'éžå¸‚åœºè´¹ç”¨ç®¡ç†ï¼ˆæ–°ï¼‰ä¿®æ”¹æŒ‰é’®æƒé™'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.lifetable', 'taskName': 'æ–°ç”Ÿå‘½è¡¨ç®¡ç†'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.delete', 'taskName': 'ç§»å‡ºå‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.insert', 'taskName': 'å¼•å…¥å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.query', 'taskName': 'æŸ¥è¯¢å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.querygrade.configpower', 'taskName': 'é…ç½®ä¸šåŠ¡æƒé™'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.querygrade.configtask', 'taskName': 'é…ç½®åŠŸèƒ½æƒé™'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.querygrade.delete', 'taskName': 'åˆ é™¤å‘˜å·¥å²—ä½'}, {'flag': '', 'parentCode': 'platform.power.usergrade', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade.querygrade.insert', 'taskName': 'å¢žåŠ å‘˜å·¥å²—ä½'}], 'flag': '', 'parentCode': 'platform.power', 'parentName': '', 'remark': '', 'taskCode': 'platform.power.usergrade', 'taskName': 'å‘˜å·¥æƒé™ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.power', 'taskName': 'æƒé™ç®¡ç†'}, {'childList': [{'childList': [{'flag': '', 'parentCode': 'platform.product.class', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.class.delete', 'taskName': 'åˆ é™¤é™©ç±»'}, {'flag': '', 'parentCode': 'platform.product.class', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.class.insert', 'taskName': 'å½•å…¥é™©ç±»'}, {'flag': '', 'parentCode': 'platform.product.class', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.class.query', 'taskName': 'æŸ¥è¯¢é™©ç±»'}, {'flag': '', 'parentCode': 'platform.product.class', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.class.update', 'taskName': 'ä¿®æ”¹é™©ç±»'}], 'flag': '', 'parentCode': 'platform.product', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.class', 'taskName': 'é™©ç±»ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.product.noinit', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.noinit.prpins', 'taskName': 'ä¸šåŠ¡å•å·åˆå§‹åŒ–'}, {'flag': '', 'parentCode': 'platform.product.noinit', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.noinit.reins', 'taskName': 'å†ä¿å•å·åˆå§‹åŒ–'}], 'flag': '', 'parentCode': 'platform.product', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.noinit', 'taskName': 'å•å·åˆå§‹åŒ–'}, {'childList': [{'flag': '', 'parentCode': 'platform.product.productattr', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productattr.delete', 'taskName': 'åˆ é™¤äº§å“å±žæ€§'}, {'flag': '', 'parentCode': 'platform.product.productattr', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productattr.insert', 'taskName': 'å½•å…¥äº§å“å±žæ€§'}, {'flag': '', 'parentCode': 'platform.product.productattr', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productattr.query', 'taskName': 'æŸ¥è¯¢äº§å“å±žæ€§'}, {'flag': '', 'parentCode': 'platform.product.productattr', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productattr.update', 'taskName': 'ä¿®æ”¹äº§å“å±žæ€§'}], 'flag': '', 'parentCode': 'platform.product', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productattr', 'taskName': 'äº§å“å±žæ€§ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.product', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.productrate', 'taskName': 'ç»„åˆäº§å“æœ€ä½Žè´¹çŽ‡'}, {'childList': [{'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.config', 'taskName': 'é…ç½®é™©ç§'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.config2', 'taskName': 'é™©ç§è®¾ç½®é¡¹å–å€¼*'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.configclass', 'taskName': 'é…ç½®é™©åˆ«'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.copy', 'taskName': 'é™©ç§å¤åˆ¶'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.delete', 'taskName': 'åˆ é™¤é™©ç§'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.insert', 'taskName': 'å½•å…¥é™©ç§'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.query', 'taskName': 'æŸ¥è¯¢é™©ç§'}, {'flag': '', 'parentCode': 'platform.product.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk.update', 'taskName': 'ä¿®æ”¹é™©ç§'}], 'flag': '', 'parentCode': 'platform.product', 'parentName': '', 'remark': '', 'taskCode': 'platform.product.risk', 'taskName': 'é™©ç§'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.product', 'taskName': 'äº§å“é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.class', 'taskName': 'é™©ç±»ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.productc.compoundproduct', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.compoundproduct.1921task', 'taskName': '1921'}], 'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.compoundproduct', 'taskName': 'ç»„åˆæ–¹æ¡ˆé…ç½®'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.cpsx', 'taskName': 'äº§å“å±žæ€§ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.newtest', 'taskName': 'äº§å“æµ‹è¯•èœå•'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.noinit', 'taskName': 'å•å·åˆå§‹åŒ–'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.productc', 'taskName': 'äº§å“é…ç½®'}, {'childList': [{'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.2700_JFCD_SWITH', 'taskName': '2700è§è´¹å‡ºå•'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.ALLOW_COMMISSION_ENDORSE', 'taskName': 'æ‰‹ç»­è´¹æ‰¹æ”¹'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.ALLOW_COMMISSION_ENDORSE_2700', 'taskName': 'æ‰‹ç»­è´¹æ‰¹æ”¹_2700'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.ShaoYangJFCD_SWITH', 'taskName': 'é‚µé˜³0101è§è´¹å‡ºå•'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.YXCD_SWICH', 'taskName': 'å½±åƒå½•å•å¼€å…³'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.config', 'taskName': 'é™©ç§è®¾ç½®é¡¹'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.config.ftl05', 'taskName': 'éžæ‘©æ‰˜è½¦æ‹–æ‹‰æœºæŠ•ä¿å½•å…¥æŽ§åˆ¶å¼€å…³05'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.config.glf05', 'taskName': 'ç®¡ç†è´¹æ¯”ä¾‹å¼€å…³05'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk.config.jfcd27', 'taskName': 'è§è´¹å‡ºå•å¼€å…³27'}, {'flag': '', 'parentCode': 'platform.productc.risk', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk_SWITCH_MANAGEFEERATE', 'taskName': 'ç®¡ç†è´¹_ç»©æ•ˆæ¯”ä¾‹å¼€å…³'}], 'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.risk', 'taskName': 'é™©ç§è®¾ç½®'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.riskcopy', 'taskName': 'é™©ç§æ–‡ä»¶å¤åˆ¶'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.tlrisk', 'taskName': 'æŠ•è”é™©äº§å“é…ç½®'}, {'flag': '', 'parentCode': 'platform.productc', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc.xsgl', 'taskName': 'é”€å”®çŠ¶æ€ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.productc', 'taskName': 'äº§å“é…ç½®(èœå•)'}, {'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.saliclaiminfo.manage', 'taskName': 'ç†èµ”ä¿¡æ¯ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.agency', 'taskName': 'ä¸­ä»‹ä¿¡æ¯ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.businessfee', 'taskName': 'ä¸­ä»‹ä¸šåŠ¡è´¹ç”¨ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.businessrelate', 'taskName': 'åˆä½œä¸šåŠ¡ç»„åˆç®¡ç†'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.editbusinessclass', 'taskName': 'ç¼–è¾‘ä¸šåŠ¡ç±»åž‹'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.editbusinesskind', 'taskName': 'ç¼–è¾‘ä¸šåŠ¡å°ç±»'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.feerate', 'taskName': 'è´¹ç”¨ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.querybusinessclass', 'taskName': 'æŸ¥è¯¢ä¸šåŠ¡ç±»åž‹'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.querybusinesskind', 'taskName': 'æŸ¥è¯¢ä¸šåŠ¡å°ç±»'}, {'flag': '', 'parentCode': 'platform.targetmarket', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket.remind', 'taskName': 'æ ¸ä¿æç¤ºç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.targetmarket', 'taskName': 'ç›®æ ‡å¸‚åœºç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.task', 'parentName': '', 'remark': '', 'taskCode': 'platform.task.taskmanage', 'taskName': 'ä»»åŠ¡ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.task', 'parentName': '', 'remark': '', 'taskCode': 'platform.task.tasktrace', 'taskName': 'ä»»åŠ¡è½¨è¿¹æŸ¥è¯¢'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.task', 'taskName': 'ä»»åŠ¡ç®¡ç†'}, {'childList': [{'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.batchimport', 'taskName': 'å†…å‹¤äººå‘˜æ‰¹é‡å¯¼å…¥åŠŸèƒ½'}, {'childList': [{'flag': '', 'parentCode': 'platform.user.hrusercontrast', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.hrusercontrast.updel', 'taskName': 'ehrä¸­é—´è¡¨æ‰‹åŠ¨æ“ä½œã€è¿ç»´ä¸“ç”¨ã€‘'}], 'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.hrusercontrast', 'taskName': 'å¹³å°è¿ç»´ä¸“ç”¨prpdhrusercontrast'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.insert', 'taskName': 'å½•å…¥å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.isResestPwssWord', 'taskName': 'é‡ç½®æŒ‰é’®'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.query', 'taskName': 'æŸ¥è¯¢å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.unlock', 'taskName': 'è§£é”å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.update', 'taskName': 'ä¿®æ”¹å‘˜å·¥'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user.validUserCodeNumber', 'taskName': 'ä¿®æ”¹æœ‰æ•ˆå·¥å·æ•°é‡æƒé™'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.user1', 'taskName': 'äººå‘˜ç®¡ç†'}, {'flag': '', 'parentCode': 'platform.user', 'parentName': '', 'remark': '', 'taskCode': 'platform.userManage', 'taskName': 'å‡ºå•äººå‘˜ç®¡ç†'}], 'flag': '', 'parentCode': 'platform', 'parentName': '', 'remark': '', 'taskCode': 'platform.user', 'taskName': 'å‘˜å·¥ç®¡ç†'}], 'flag': '', 'parentCode': '', 'parentName': '', 'remark': '', 'taskCode': 'platform', 'taskName': 'å¹³å°é…ç½®ç³»ç»Ÿ'}]}
  },
  queryUserPostDisplayRisk: config => {
    return {
      'flag': '1',
      'userPostDisplayRiskList': [
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
  }
}
