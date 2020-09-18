const Mock = require('better-mock/dist/mock.mp.js')
Mock.mock('web/order/app/home/index', {
    'code':0,
	'data': {
		'currMonthDelivery': 20,
		'currMonthDocument': 20,
		'currMonthOrder': 40,
		'noClean': 10
	},
	'msg': '操作成功'
})
Mock.mock('web/order/app/home/detail', function(option){
	console.log(option)
	var data = {
		'code':0,
		'data': [
			{
				'num': 120,
				'spart': '泵车1',
				'spartName': '泵车1'
			},
			{
				'num': 200,
				'spart': '泵车2',
				'spartName': '泵车2'
			},{
				'num': 90,
				'spart': '泵车3',
				'spartName': '泵车3'
			},
			{
				'num': 120,
				'spart': '泵车4',
				'spartName': '泵车4'
			},
			{
				'num': 180,
				'spart': '泵车5',
				'spartName': '泵车5'
			},{
				'num': 80,
				'spart': '泵车6',
				'spartName': '泵车6'
			},
			{
				'num': 100,
				'spart': '泵车7',
				'spartName': '泵车7'
			},
			{
				'num': 200,
				'spart': '泵车8',
				'spartName': '泵车8'
			},{
				'num': 240,
				'spart': '泵车9',
				'spartName': '泵车9'
			},
			{
				'num': 120,
				'spart': '泵车10',
				'spartName': '泵车10'
			},
			{
				'num': 200,
				'spart': '泵车11',
				'spartName': '泵车11'
			},{
				'num': 150,
				'spart': '泵车12',
				'spartName': '泵车12'
			}
		],
		'msg': '操作成功'
	}
	return data
})
Mock.mock('web/order/app/home/order/page', function(option) {
	console.log(option.body.pageNo)
	var data = {
		'totalCount': 67,
		'data': [{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		},{
			'vbeln': '1010011916',
			'posnr': 10,
			'statusName': '生产',
			'itemType': null,
			'itemId': '1304243337612627969',
			'kunnr':'893149',
			'name1': '湖南智汇',
			'material': 'ZJ-5802-1001',
			'materialName':'SYM5449THB 泵车主体',
			'vdatu': '2019-04-03 00:00:00',
			'planDeliveryDate': '2020-09-23 15:53:05',
			'erdat': '2020-09-09',
			'erzet': '16:53:02',
			'zsales': null,
			'ztel': null,
			'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
		}],
		'pageNo': 1,
		'pageSize': 10,
		'totalPage': 7
	}
	if (option.body.type == 4) {
		return {
			'totalCount': 67,
			'data': [],
			'pageNo': 1,
			'pageSize': 10,
			'totalPage': 7
		}
	}
	if (option.body.pageNo == 2) {
		return {
			'totalCount': 67,
			'data': [{
				'vbeln': '1010011916',
				'posnr': 10,
				'statusName': '生产',
				'itemType': null,
				'itemId': '1304243337612627969',
				'kunnr':'893149',
				'name1': '湖南智汇',
				'material': 'ZJ-5802-1001',
				'materialName':'SYM5449THB 泵车主体',
				'vdatu': '2019-04-03 00:00:00',
				'planDeliveryDate': '2020-09-23 15:53:05',
				'erdat': '2020-09-09',
				'erzet': '16:53:02',
				'zsales': null,
				'ztel': null,
				'imgUrl': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg'
			}],
			'pageNo': 1,
			'pageSize': 10,
			'totalPage': 7
		}
	}
	return data
})
Mock.mock('web/order/app/home/host/page',function(option) {
	var data = {
		'totalCount': 0,
		'pageNo': 1,
		'pageSize': 10,
		'totalPage': 10,
		'data':[{
			code: 1001001,
			id: '',
			imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg',
			imgHttpUrl: '',
			name: '测试数据1',
			pruductNum: 110,
			stockNum: 120,
			type:1 //1国内，2国际
		},{
			code: 1001002,
			id: '',
			imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg',
			imgHttpUrl: '',
			name: '测试数据2',
			pruductNum: 100,
			stockNum: 90,
			type:1 //1国内，2国际
		},{
			code: 1001003,
			id: '',
			imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg',
			imgHttpUrl: '',
			name: '测试数据3',
			pruductNum: 100,
			stockNum: 120,
			type:1 //1国内，2国际
		},{
			code: 1001004,
			id: '',
			imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600172299757&di=142201ac9e6c43e4c958aa51d21ce631&imgtype=0&src=http%3A%2F%2Fimg.cmol.com%2Fimages%2Fuploadfile%2Fproduct%2F2011%2F0905%2F20110905101530461.jpg',
			imgHttpUrl: '',
			name: '测试数据4',
			pruductNum: 100,
			stockNum: 120,
			type:1 //1国内，2国际
		}]
	}
	return data
})
Mock.mock('web/order/app/home/host/stock/page',function(option) {
	var data = {
		'totalCount': 0,
		'pageNo': 1,
		'pageSize': 10,
		'totalPage': 10,
		'data': [{
			sernr: 'T1001',
			kaduf: '100100100',
			matnr: 'wl100100',
			matkx: '测试物料',
			lbbsaStr: '在途库存',
			bwerk: '总部工厂',
			blager: '安徽合肥',
			minDate: '2019-02-26',
			maxDate: '2020-10-10',
			conf: '减速机:乐力士'
		},{
			sernr: 'T1001',
			kaduf: '',
			matnr: 'wl100100',
			matkx: '测试物料',
			lbbsaStr: '在途库存',
			bwerk: '总部工厂',
			blager: '安徽合肥',
			minDate: '2019-02-26',
			maxDate: '2020-10-10',
			conf: '减速机:乐力士'
		}]
	}
	return data
})
Mock.mock('web/order/app/home/host/under/construction/page',function(option) {
	var data = {
		'totalCount': 0,
		'pageNo': 1,
		'pageSize': 10,
		'totalPage': 10,
		'data': [{
			sernr: 'T1001',
			kaduf: '',
			matnr: 'wl100100',
			matkx: '测试物料',
			auart: '',
			aufnr: 'sc100100',
			gstrsStr: '2019-02-26',
			gltrsStr: '2020-10-10',
			erdatStr: '2019-02-26',
			ftrmiStr: '2020-10-10',
			factoryName: 'XX工厂',
			lgort: 'XX路XX号'
		},{
			sernr: 'T1001',
			kaduf: '100100100',
			matnr: 'wl100100',
			matkx: '测试物料',
			auart: '',
			aufnr: 'sc100100',
			gstrsStr: '2019-02-26',
			gltrsStr: '2020-10-10',
			erdatStr: '2019-02-26',
			ftrmiStr: '2020-10-10',
			factoryName: 'XX工厂',
			lgort: 'XX路XX号'
		},{
			sernr: 'T1001',
			kaduf: '100100100',
			matnr: 'wl100100',
			matkx: '测试物料',
			auart: '',
			aufnr: 'sc100100',
			gstrsStr: '2019-02-26',
			gltrsStr: '2020-10-10',
			erdatStr: '2019-02-26',
			ftrmiStr: '2020-10-10',
			factoryName: 'XX工厂',
			lgort: 'XX路XX号'
		}]
	}
	return data
})
Mock.mock('web/order/dict/data/getListByDictType',function(option){
	var data = {
		code:0,
		data:[]
	}
	if(option.body.dictType == 'sales_area') {
		data.data = [{
			createDate:null,
			dictLabel: '安道尔共和国',
			dictTypeId: '1296286335249076231',
			dictValue: 'AD',
			id: '298',
			remark: null,
			sort: 298,
			updateDate: null
		},{
			createDate:null,
			dictLabel: '测试地区',
			dictTypeId: '1296286335249076232',
			dictValue: 'test',
			id: '299',
			remark: null,
			sort: 299,
			updateDate: null
		},{
			createDate:null,
			dictLabel: '中华人民共和国',
			dictTypeId: '1296286335249076233',
			dictValue: 'CN',
			id: '300',
			remark: null,
			sort: 300,
			updateDate: null
		}]
	}
	return data
})
Mock.mock('web/order/tms/home/order/getTraList',function(option){
	var data = {
	"code": 0,
	"msg": "success",
	"data": {
		"id": "1303297983030362113",
		"sYsdh": "S_200906000875_1",
		"yYsdh": "200906000875",
		"tTydh": "200906000992",
		"vbelv": "2000847832",
		"vbeln": "8081044471",
		"ywlx": "国内主机",
		"ysfs": "汽运",
		"yqthsj": "20200907000000",
		"jjcd": "正常",
		"pzfs": "整车",
		"xdsj": "20200906182737",
		"cpxh": "",
		"ysgx": "",
		"hpname": "SSR220AC-8H三一单钢轮压路机主体",
		"status": "在途",
		"jhdats": "",
		"yjdats": "20200913203751",
		"cphm": "冀B6698G",
		"driver": "刘树先",
		"drivertel": "15830506699",
		"cstcode": "0000162162",
		"cstname": "新疆中泰工程机械有限公司",
		"sfgs": "否",
		"thgscode": "0100907196",
		"thgsname": "三一汽车制造有限公司涟源分公司",
		"thname": "朱卫华",
		"thdz": "湖南省娄底市涟源市湖南省涟源市", // 起点
		"thtel": ",15973893818",
		"shgscode": "0000162162",
		"shgsname": "新疆中泰工程机械有限公司",
		"shname": "营销代表",
		"shdz": "新疆维吾尔自治区塔城地区托里县新疆塔城地区托里县庙尔沟镇柳树沟", // 终点
		"shtel": ",13926275205",
		"operator": "喻坚",
		"operdats": "20200907203751",
		"ylzd1": "",
		"ylzd2": "",
		"ylzd3": "",
		"ylzd4": "",
		"ylzd5": "",
		"gjdats": null,
		"gjdate": null,
		"lon": null,
		"lat": null,
		"province": null,
		"city": null,
		"area": null,
		"address": null,
		"traYlzd1": null,
		"ttydh": null,
		"isEnd": 0, //0没有结束
		"traList": [{
			"id": "1303300800113672194",
			"gjdats": "20200908192246",
			"lon": "113.080387098525",
			"lat": "28.309112141928",
			"province": "湖南省",
			"city": "长沙市",
			"area": "长沙县",
			"address": "湖南省长沙市长沙县安沙镇长沙市骏湘有限公司恒广国际物流园",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-08 19:22:46",
			"tTydh": "200906000992"
		}, {
			"id": "1303566685382508545",
			"gjdats": "20200909124409",
			"lon": "113.076318630643",
			"lat": "29.79600124783",
			"province": "湖北省",
			"city": "荆州市",
			"area": "监利县",
			"address": "湖北省荆州市监利县上车湾镇G0421许广高速监利服务区",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-09 12:44:09",
			"tTydh": "200906000992"
		}, {
			"id": "1303656757742141442",
			"gjdats": "20200909185131",
			"lon": "112.469980740018",
			"lat": "32.20589029948",
			"province": "湖北省",
			"city": "襄阳市",
			"area": "襄州区",
			"address": "湖北省襄阳市襄州区双沟镇316国道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-09 18:51:31",
			"tTydh": "200906000992"
		}, {
			"id": "1303741721879904257",
			"gjdats": "20200910002902",
			"lon": "112.50078748915",
			"lat": "32.20871717665",
			"province": "湖北省",
			"city": "襄阳市",
			"area": "枣阳市",
			"address": "湖北省襄阳市枣阳市七方镇316国道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-10 00:29:02",
			"tTydh": "200906000992"
		}, {
			"id": "1303822121104965634",
			"gjdats": "20200910060639",
			"lon": "111.775846354167",
			"lat": "33.139648708768",
			"province": "河南省",
			"city": "南阳市",
			"area": "内乡县",
			"address": "河南省南阳市内乡县赵店乡延长石油加气站(暂停营业)",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-10 06:06:39",
			"tTydh": "200906000992"
		}, {
			"id": "1303902167756832770",
			"gjdats": "20200910111453",
			"lon": "109.603095160591",
			"lat": "34.161052246094",
			"province": "陕西省",
			"city": "西安市",
			"area": "蓝田县",
			"address": "陕西省西安市蓝田县灞源镇九灞路",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-10 11:14:53",
			"tTydh": "200906000992"
		}, {
			"id": "1303984069968789506",
			"gjdats": "20200910165159",
			"lon": "107.141724175348",
			"lat": "35.389333224827",
			"province": "甘肃省",
			"city": "平凉市",
			"area": "泾川县",
			"address": "甘肃省平凉市泾川县王村镇G22青兰高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-10 16:51:59",
			"tTydh": "200906000992"
		}, {
			"id": "1304078546242764802",
			"gjdats": "20200910225904",
			"lon": "106.023364257813",
			"lat": "36.7933851454",
			"province": "宁夏回族自治区",
			"city": "中卫市",
			"area": "海原县",
			"address": "宁夏回族自治区中卫市海原县高崖乡101省道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-10 22:59:04",
			"tTydh": "200906000992"
		}, {
			"id": "1304179790672166914",
			"gjdats": "20200911052147",
			"lon": "105.873365885417",
			"lat": "36.990203993056",
			"province": "宁夏回族自治区",
			"city": "吴忠市",
			"area": "同心县",
			"address": "宁夏回族自治区吴忠市同心县丁塘镇金禧莱建材",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-11 05:21:47",
			"tTydh": "200906000992"
		}, {
			"id": "1304247415632691201",
			"gjdats": "20200911100046",
			"lon": "105.629196777344",
			"lat": "37.340017361112",
			"province": "宁夏回族自治区",
			"city": "中卫市",
			"area": "中宁县",
			"address": "宁夏回族自治区中卫市中宁县大战场镇长山头收费站(G6京藏高速出口)",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-11 10:00:46",
			"tTydh": "200906000992"
		}, {
			"id": "1304331212382404609",
			"gjdats": "20200911153810",
			"lon": "103.352263183594",
			"lat": "37.553788791233",
			"province": "甘肃省",
			"city": "武威市",
			"area": "古浪县",
			"address": "甘肃省武威市古浪县西靖镇308省道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-11 15:38:10",
			"tTydh": "200906000992"
		}, {
			"id": "1304415588617158658",
			"gjdats": "20200911211554",
			"lon": "102.009796820747",
			"lat": "38.232673339844",
			"province": "甘肃省",
			"city": "金昌市",
			"area": "永昌县",
			"address": "甘肃省金昌市永昌县东寨镇312国道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-11 21:15:54",
			"tTydh": "200906000992"
		}, {
			"id": "1304513763038330882",
			"gjdats": "20200912033901",
			"lon": "101.381608072917",
			"lat": "38.539886338976",
			"province": "甘肃省",
			"city": "张掖市",
			"area": "山丹县",
			"address": "甘肃省张掖市山丹县老军乡312国道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-12 03:39:01",
			"tTydh": "200906000992"
		}, {
			"id": "1304586735207972865",
			"gjdats": "20200912084738",
			"lon": "100.695580783421",
			"lat": "38.899092881945",
			"province": "甘肃省",
			"city": "张掖市",
			"area": "甘州区",
			"address": "甘肃省张掖市甘州区甘肃农垦张掖农场312国道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-12 08:47:38",
			"tTydh": "200906000992"
		}, {
			"id": "1304677027059728386",
			"gjdats": "20200912142523",
			"lon": "98.687239854601",
			"lat": "39.618397352431",
			"province": "甘肃省",
			"city": "酒泉市",
			"area": "肃州区",
			"address": "甘肃省酒泉市肃州区上坝镇总寨桥",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-12 14:25:23",
			"tTydh": "200906000992"
		}, {
			"id": "1304768090147520514",
			"gjdats": "20200912203136",
			"lon": "95.638051215278",
			"lat": "40.76706217448",
			"province": "甘肃省",
			"city": "酒泉市",
			"area": "瓜州县",
			"address": "甘肃省酒泉市瓜州县渊泉镇G30连霍高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-12 20:31:36",
			"tTydh": "200906000992"
		}, {
			"id": "1304919604891615234",
			"gjdats": "20200913064922",
			"lon": "95.296956108941",
			"lat": "41.569391004775",
			"province": "新疆维吾尔自治区",
			"city": "哈密市",
			"area": "伊州区",
			"address": "新疆维吾尔自治区哈密市伊州区星星峡镇G30连霍高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-13 06:49:22",
			"tTydh": "200906000992"
		}, {
			"id": "1305100474147536898",
			"gjdats": "20200913180310",
			"lon": "89.010886501737",
			"lat": "43.064551323785",
			"province": "新疆维吾尔自治区",
			"city": "吐鲁番市",
			"area": "高昌区",
			"address": "新疆维吾尔自治区吐鲁番市高昌区红柳河园艺场G30连霍高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-13 18:03:10",
			"tTydh": "200906000992"
		}, {
			"id": "1305160896313688065",
			"gjdats": "20200913224319",
			"lon": "87.615602756077",
			"lat": "43.632724609375",
			"province": "新疆维吾尔自治区",
			"city": "乌鲁木齐市",
			"area": "天山区",
			"address": "新疆维吾尔自治区乌鲁木齐市天山区红雁街道G30连霍高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-13 22:43:19",
			"tTydh": "200906000992"
		}, {
			"id": "1305205842714427393",
			"gjdats": "20200914015456",
			"lon": "87.619091525608",
			"lat": "43.632437065973",
			"province": "新疆维吾尔自治区",
			"city": "乌鲁木齐市",
			"area": "乌鲁木齐县",
			"address": "新疆维吾尔自治区乌鲁木齐市乌鲁木齐县板房沟镇G30连霍高速",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-14 01:54:56",
			"tTydh": "200906000992"
		}, {
			"id": "1305282298568114178",
			"gjdats": "20200914063445",
			"lon": "87.353596733941",
			"lat": "43.913863389757",
			"province": "新疆维吾尔自治区",
			"city": "乌鲁木齐市",
			"area": "头屯河区",
			"address": "新疆维吾尔自治区乌鲁木齐市头屯河区兵团十二师三坪农场三坪服务区三坪治超检测站(建设中)三坪服务区(建设中)",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-14 06:34:45",
			"tTydh": "200906000992"
		}, {
			"id": "1305356274816385026",
			"gjdats": "20200914114216",
			"lon": "87.095422634549",
			"lat": "44.161959635417",
			"province": "新疆维吾尔自治区",
			"city": "昌吉回族自治州",
			"area": "昌吉市",
			"address": "新疆维吾尔自治区昌吉回族自治州昌吉市榆树沟镇新疆泰昆集团昌吉饲料有限责任公司",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-14 11:42:16",
			"tTydh": "200906000992"
		}, {
			"id": "1305666579521994754",
			"gjdats": "20200915082923",
			"lon": "84.331132269966",
			"lat": "45.559396430122",
			"province": "新疆维吾尔自治区",
			"city": "塔城地区",
			"area": "托里县",
			"address": "新疆维吾尔自治区塔城地区托里县庙尔沟镇221省道",
			"ylzd1": "IROOT",
			"ylzd2": "",
			"ylzd3": "",
			"ylzd4": "",
			"ylzd5": "",
			"gjdate": "2020-09-15 08:29:23",
			"tTydh": "200906000992"
		}]
	}
	}
	return data
})
Mock.mock('web/order/app/home/order/show/track/button',function(option){
	var data = {
		code: 0,
		data: '',
		msg: ''
	}
	return data
})