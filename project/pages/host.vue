<template>
	<view class="full-page">
		<div class='record-box'>
			<div class='record' v-for='(item,index) in recorItems' :key='index' @click='toChart(index,item.type)'>
				<img :src="'../static/img/'+'bg0'+(index+1)+'.png'"></img>
				<div class='top'>
					<div>{{item.name}}</div>
					<span>{{item.str}}</span>
				</div>
				<div class='num'><span>{{item.num}}</span>{{item.unit}}</div>
			</div>
		</div>
		
		<div class='menu-box'>
			<div class='menu' v-for='(item,index) in menuItems' :key='index' @click="goto(item.path)">
				<img :src="'../static/img/'+'host0'+(index+1)+'.png'">
				<div>{{item.name}}</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recorItems: [
					{ name: '本月订单', str: 'Order of this month',num: '',unit: '单' , code: 'currMonthOrder',type:1},
					{ name: '本月生产', str: 'Production this month',num: '',unit: '台', code: 'currMonthDocument',type:2},
					{ name: '本月发货', str: 'Deliver this month',num: '',unit: '台', code: 'currMonthDelivery',type:3},
					{ name: '累计未清', str: 'Accumulated outstanding',num: '',unit: '单', code: 'noClean',type:4}
				],
				menuItems: [
					{name: '订单查询', path: '/host/order/list'},
					{name: '主机查询', path: '/host/host/list'},
					{name: '告警反馈', path: '/host/alarm/list'},
					{name: '我的订单', path: '/host/myOrder/list'}
				]
			}
		},
		onLoad() {
			// uni.showLoading({
			// 	title:'加载中',
			// 	mask:true
			// })
			this.getData()
			//获取字典
			this.getDictHttp('dict/data/getListByDictType', 'sales_area')
		},
		onShow() {
			
		},
		methods: {
			getData() {
				var self = this
				this.ajax({
					url:'app/home/index',
					data: {
						type: 1
					},
					success:res=>{
						console.log(res)
						var data = res.data
						if (res.code == 0) {
							// 成功
							self.resSuccess(data)
						}
					},
					showLoading:true
				})
				// uni.request({
				// 	url:'web/order/app/home/index',
				// 	data: {
				// 		type: 1
				// 	},
				// 	success:res=>{
				// 		console.log(res.data.data)
				// 		var data = res.data.data
				// 		if (res.data.code == 0) {
				// 			// 成功
				// 			self.resSuccess(data)
				// 		}
				// 	},
				// 	complete() {
				// 		uni.hideLoading()
				// 	}
				// })
			},
			resSuccess(data) {
				var self = this
				for(var k in data) {
					self.recorItems.forEach(item => {
						if (k == item.code) {
							item.num = data[k]+ ''
						}
					})
				}
			},
			goto(path) {
				console.log(path)
				uni.navigateTo({
				    url: path
				})
			},
			toChart(index,type){
				uni.navigateTo({
				    url: '/pages/chart?type='+type
				})
			},
			getDictHttp(dictUrl, dictType) {
				var self = this
				this.ajax({
					url: dictUrl,
					data: {
						dictType
					},
					success:res=>{
						console.log(res)
						if(res.code == 0) {
							//成功
							self.dicHttpSuccess(res.data,'sales_area_options')
						}
					}
				})
			},
			dicHttpSuccess(data,options) {
				this.$scope.globalData[options] = []
				data.forEach(item => {
					this.$scope.globalData[options].push({
						value: item.dictValue,
						name: item.dictLabel
					})
				})
				console.log(this.$scope.globalData[options])
			}
		}
	}
</script>

<style scoped>
	.full-page{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.record-box{
		padding: 0 6px;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-top: 10px;
		/* padding-bottom: 6px; */
		height: 292px;

	}
	.record{
		box-sizing: border-box;
		position: relative;
		width: 50%;
		color: #fff;
		padding: 15px;
		padding-right: 0;
		float: left;
	}
	.record .top{
		margin-bottom: 8px;
	}
	.record .top>div{
		font-size: 14px;
		font-weight: 500;
		margin-bottom: -11px;
		letter-spacing: 2px;
	}
	.record .top span{
		font-size: 8px;
		font-weight: 10;
	}
	.record img{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: -1;
	}
	.record .num span{
		font-size: 16px;
		font-weight: 700;
		margin-right: 8px;
	}
	.menu-box{
		margin-top: 8px;
		padding-top: 30px;
		width: 100%;
		display: flex;
		height: 80%;
		background: #FFFFFF;
		box-sizing: border-box;
	}
	.menu{
		width: 25%;
		text-align: center;
		height: 180rpx;
	}
	.menu img{
		width: 34px;
		height: 34px;
		margin-bottom: -4px;
	}
</style>
