<template>
	<view class="box">
		<div class='top borderBottom_full'>
			销售订单号：123122313
		</div>
		<div class='process'>
			<div class='left'>
				<div v-for='(item,index) in lineItems' :key='index' :class="{active: item.active}" @click='changeTab(item)'>
					<div>
						<img :src="'../static/img/process0'+(index+1)+'.png'" :class="{'active': item.status == 1}">
						<div class='title'>{{item.name}}</div>
					</div>
					<div class='line' v-if='index!=2'></div>
				</div>
			</div>
			<div class='right'>
				<div class='title borderBottom_full'>订单下达</div>
				<div class='detail'>
					<div class='des'>
						<div class='item-title'>销售订单下达</div>
						<div>10101133</div>
						<div>马云云 2012-10-10</div>
						<div>日期 2012-10-10</div>
					<!-- 	<div class='bot'></div>
						<div class='line'></div> -->
					</div>
					<div class='des'>
						<div class='item-title'>销售订单下达</div>
						<div>10101133</div>
						<div>马云云 2012-10-10</div>
						<div>日期 2012-10-10</div>
						<!-- <img src="../static/img/begin.png" ></img> -->
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
				lineItems: [
					{name: '发货',status: '0',active: false},
					{name: '生产',status: '0',active: false},
					{name: '订单下达',status: '1',active: true}
				]
			}
		},
		methods: {
			changeTab(item){
				this.lineItems.forEach(d=>d.active = false)
				item.active = true;
			}
		}
	}
</script>

<style scoped>
	@import url('../common/common.css');
	.box{
		background: #fff;
		color: #333;
		position: absolute;
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		top: 15px;
		bottom: 0;
	}
	.top{
		padding: 12px 15px;
		font-size: 16px;
	}
</style>
