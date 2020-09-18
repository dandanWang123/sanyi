<template>
	<view class="full-page">
		<div class='box' v-if="loadingPage == false">
			<div class='top cell'>
				<div class='title'>销售订单号：{{pageData.vbeln}}</div>
				<div class='val status'>{{pageData.statusName}}</div>
			</div>
			<div class='cell'>
				<div class='title'>物料编码</div>
				<div class='val'>{{pageData.material}}</div>
			</div>
			<div class='cell'>
				<div class='title'>物料描述</div>
				<div class='val'>{{pageData.materialName}}</div>
			</div>
			<div class='cell'>
				<div class='title'>营销代表</div>
				<div class='val'>{{pageData.zsales}}</div>
			</div>
			<div class='cell'>
				<div class='title'>客户</div>
				<div class='val'>{{pageData.name1}}</div>
			</div>
			<div class='cell'>
				<div class='title'>请求交货时间</div>
				<div class='val'>{{formatTime(pageData.vdatu, 'YYYY-MM-DD')}}</div>
			</div>
			<div class='cell'>
				<div class='title'>预估交货时间</div>
				<div class='val'>{{formatTime(pageData.planDeliveryDate, 'YYYY-MM-DD')}}</div>
			</div>
			<div class='cell'>
				<div class='title'>创建日期</div>
				<div class='val'>{{pageData.erdat}} {{pageData.erzet}}</div>
			</div>
			<div class='btn-box'>
				<button @click="toProcess">全流程跟踪</button>
				<button @click="toMap" v-if="showTrack == true">物流跟踪</button>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.pageData = JSON.parse(decodeURI(option.data))
			// this.$set(this.pageData, JSON.parse(option.data))
			console.log(JSON.parse(decodeURI(option.data)), this.pageData)
			this.getData()
		},
		data() {
			return {
				pageData: null,
				loadingPage: true,
				requestUrl: 'app/home/order/show/track/button',
				showTrack: false,
				id: ''
			}
		},
		methods: {
			getData() {
				// 调取接口查看是否需要展示物流跟踪按钮
				var self = this
				uni.showLoading({
					title:'加载中'
				})
				this.ajax({
					url:this.requestUrl+ '/' + this.pageData.vbeln,
					data: {
						// salesOrderNo:this.pageData.vbeln
					},
					success:res=>{
						console.log(res)
						if(res.code == 0) {
							self.loadingPage = false
							if(res.data != '') {
								self.showTrack = true
								self.id = res.data
							}
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			toProcess(){
				uni.navigateTo({
				    url: '/host/order/process?salesOrderNo='+this.pageData.vbeln+'&posnr='+this.pageData.posnr
				})
			},
			toMap() {
				uni.navigateTo({
				    url: '/host/order/mapTrack?salesOrderNo='+this.pageData.vbeln+'&id='+this.id
				})
			}
		},
		watch: {
			pageData: {
				handler(newValue, oldValue) {
					this.pageData = newValue
				},
				deep: true, //对象内部的属性监听，也叫深度监听
				immediate: true //immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler
			}
		}
	}
</script>

<style scoped>
	@import url('../../common/common.css');
	.full-page{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding-top: 15px;
	}
	.box{
		background: #fff;
		height: 100%;
	}
</style>
