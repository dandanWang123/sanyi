<template>
	<view class="full-page">
		<div class='box'>
			<div class='top cell'>
				<div class='title'>销售订单号：10086</div>
				<div class='val status'>发送中</div>
			</div>
			<div class='cell'>
				<div class='title'>型号</div>
				<div class='val'>abc</div>
			</div>
			<div class='cell'>
				<div class='title'>描述</div>
				<div class='val'>very good</div>
			</div>
			<div class='cell'>
				<div class='title'>营销代表</div>
				<div class='val'>jack</div>
			</div>
			<div class='cell'>
				<div class='title'>客户</div>
				<div class='val'>马云云</div>
			</div>
			<div class='cell'>
				<div class='title'>请求交货时间</div>
				<div class='val'>2020-01-05</div>
			</div>
			<div class='cell'>
				<div class='title'>预估交货时间</div>
				<div class='val'>2020-01-05</div>
			</div>
			<div class='cell'>
				<div class='title'>创建日期</div>
				<div class='val'>2020-01-05 15:13</div>
			</div>
			<div class='btn-box'>
				<button @click="toProcess">全流程跟踪</button>
				<button @click="toMap">物流跟踪</button>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toProcess(){
				uni.navigateTo({
				    url: '/host/order/process'
				})
			},
			toMap() {
				uni.navigateTo({
				    url: '/host/order/mapTrack'
				})
			}
		}
	}
</script>

<style scoped>
	@import url('../common/common.css');
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
