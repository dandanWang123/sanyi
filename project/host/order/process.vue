<template>
	<view class="box" v-if="loadingPage==false">
		<div class='top borderBottom_full'>
			销售订单号：{{salesOrderNo}}
		</div>
		<div class='process'>
			<div class='left'>
				<div v-for='(item,index) in lineItems' :key='index' :class="{active: selectIndex == index}" @click='changeTab(item,index)'>
					<div>
						<img :src="'../../static/img/process0'+(index+1)+'.png'" :class="{'active': selectIndex == index}">
						<div class='title'>{{item.nodeName}}</div>
					</div>
					<div class='line' v-if=' index!= (lineItems.length-1) '></div>
				</div>
			</div>
			<div class='right'>
					<!-- <div class='title borderBottom_full'>订单下达</div> -->
				<div v-for="(item,index) in processItems" :key="index">
					<div class='detail' v-for='(items,n) in item' :key='n' v-if="n == selectIndex">
						<template>
							<div class='item-title'>{{items.nodeName}}</div>
							<div class='des'>
								<div class='dashed' v-for='(arr,i) in items.items' :key='i'>
									<div class='name'>
										<div class='btn status'>状态</div>
										<span>操作人</span>
									</div>
									<div class='date'>
										<div>操作时间</div>
										<div class='link'>操作</div>
									</div>
								</div>
							</div>
						</template>
						<template>
							<div class='item-title'>{{items.nodeName}}</div>
							<div class='txt'>
								<div>销售订单号</div>
								<div>
									<span style='display: inline-block;margin-right: 10px;'>售达方</span>
									<span>销售订单创建日期</span>
								</div>
							</div>
						</template>
						
					</div>
				</div>

			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex: 0,
				loadingPage:true,
				lineItems: [],
				processItems: [
					[
						{
							title: '销售订单下达',
							status: 2,
							name: 'pony马',
							code: '10000056',
							date: '2020-05-06'
						},
						{
							title: '发运',
							status: 1,
							items: [{statusName: '未确认',status: 2,name: '王小明',date: '2020-09-30'},{statusName: '在途',status: 1,name: '张三',date: '2020-09-30',
							linkName:'发运轨迹'}]
						},
					],
					[
						{
							title: '销售订单下达',
							status: 2,
							name: 'pony马',
							code: '10000056',
							date: '2020-05-06'
						},
						{
							title: '销售订单下达2',
							status: 2,
							name: 'pony马',
							code: '10000056',
							date: '2020-05-06'
						}
					],
					[],
					[],
					[],
					[]
				],
				requestUrl:'app/home/order/process/detail/',
				salesOrderNo: '',
				posnr: '',
				data:{}
			}
		},
		onLoad(option) {
			this.salesOrderNo = option.salesOrderNo
			this.posnr = option.posnr
			this.getData()
		},
		methods: {
			getData() {
				var self = this
				uni.showLoading({
					title:'加载中'
				})
				this.ajax({
					url:this.requestUrl+ this.salesOrderNo+'/'+ this.posnr,
					data: {},
					success:res=>{
						console.log(res)
						if(res.code == 0) {
							self.getDataSuccess(res.data)
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getDataSuccess(data) {
				var self = this
				this.loadingPage = false
				this.data = data
				this.lineItems = data.nodes
				this.processItems = []
				data.nodes.forEach(item => {
					self.processItems.push(item.children)
				})
			},
			changeTab(item,index){
				item.active = true;
				this.selectIndex = index
			}
		}
	}
</script>

<style scoped>
	@import url('../../common/common.css');
	.box{
		background: #fff;
		color: #333;
		position: absolute;
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		top: 15px;
		bottom: 0;
	}
	.top{
		padding: 12px 15px;
		font-size: 16px;
	}
	.txt {
		margin-bottom: 15px;
		background: #f5f5f5;
		box-sizing: border-box;
		padding: 15px;
		border-radius: 5px;
		border: 1px solid #e1e1e1;
	}
</style>
