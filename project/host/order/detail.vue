<template>
	<view class="full-page">
		<div class='box'>
			<div class='top cell'>
				<div class='title'>销售订单号：{{pageData.vbeln}}</div>
				<div class='val status'>{{pageData.statusName}}中</div>
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
				<button @click="toMap">物流跟踪</button>
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
		},
		data() {
			return {
				pageData: null
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
