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