<template>
	<view class="mapTrack">
		<div class='mapTrack_title borderBottom_full'>
			销售订单号：123122313
		</div>
		<div class="mapTrack_map">
			<map :style=" 'width: 100%; height: '+ mapHeight +'px'" scale="7" :latitude="latitude" :longitude="longitude" :markers="covers" :polyline="polyline" @updated="pageInit"></map>
		</div>
		<div class="mapSteps">
			<div class="mapSteps_wrap">
				<div class="showPosTiggerimg" @click="showPosTigger">
					<template v-if="showPos == false">
						<image src="../../static/img/open.png"></image>
						<span style="font-size: 29rpx;color: #5B82F9;">点击展开</span>
					</template>
					<template v-else>
						<image src="../../static/img/close.png"></image>
						<span style="font-size: 29rpx;color: #5B82F9;">点击收起</span>
					</template>
					<!-- <image src="../../static/img/openMapTrack.png"></image> -->
				</div>
				<div class="mapSteps_items" v-for="(p, i) in data.point" :key="i" v-if="showPos == true">
			<!-- 		<image src="../../static/img/location@2x(2).png" v-if="p.nowPoint == true"></image>
					<image src="../../static/img/location@2x(3).png" v-else></image> -->
					<image src="../../static/img/location@2x(3).png" v-if="i != 0 && i != (data.point.length-1)"></image>
					<template v-else>
						<image src="../../static/img/start.png" v-if="i == 0" style="width: 15px;height: 18px;left: -8px;"></image>
						<image src="../../static/img/end.png" v-if="i == (data.point.length-1)" style="width: 15px;height: 18px;left: -7px;"></image>
					</template>
					<p v-if="i == 0">从【{{p.address}}】出发</p>
					<p v-if="i == (data.point.length-1) && p.isArrive == true">到达【{{p.address}}】</p>
					<p v-if="i != 0 && i != (data.point.length-1) && p.isArrive == true">到达{{p.address}},下一站{{data.point[i+1].address}}</p>
					<p v-if="p.isArrive == false">正前往{{p.address}}</p>
					<p class="minitxt">{{formatTime(p.time, 'YYYY-MM-DD hh:mm:ss')}}</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		onShow() {
			var self = this
			uni.showLoading({
			    title: '加载中',
				mask: true
				
			})
			uni.getSystemInfo({
			    success: function (res) {
			        console.log(res.model);
			        console.log(res.pixelRatio);
			        console.log(res.windowWidth);
			        console.log(res.windowHeight);
			        console.log(res.language);
			        console.log(res.version);
			        console.log(res.platform);
					self.mapHeight = res.windowHeight
			    }
			})
		},
		data() {
			return {
				pageShow:false,
				showPos:false,
				mapHeight: 0,
				latitude: 32.008076,
				longitude: 118.850098,
				covers:[
					{
						latitude: 31.825065,
						longitude: 117.232361,
						iconPath: '../../static/img/sPoint.png'
					},
					{
						latitude: 31.334871,
						longitude: 118.454590,
						iconPath: '../../static/img/pPoint.png'
					},
					{
						latitude: 32.008076,
						longitude: 118.850098,
						iconPath: '../../static/img/pPoint.png'
					},
					{
						latitude: 32.379961,
						longitude: 119.421387,
						iconPath: '../../static/img/pPoint.png'
					},
					{
						latitude: 32.694866,
						longitude: 119.904785,
						iconPath: '../../static/img/pPoint.png'
					},
					{
						latitude: 33.302986,
						longitude: 120.212402,
						iconPath: '../../static/img/ePoint.png'
					}
				],
				polyline:[{
					points:[{
						latitude: 31.825065,
						longitude: 117.232361
					},{
						latitude: 31.334871,
						longitude: 118.454590
					},{
						latitude: 32.008076,
						longitude: 118.850098
					},{
						latitude: 32.379961,
						longitude: 119.421387
					},{
						latitude: 32.694866,
						longitude: 119.904785
					}],
					color: '#40B4CE',
					width: 3
				},{
					points:[{
						latitude: 32.694866,
						longitude: 119.904785
					},{
						latitude: 33.302986,
						longitude: 120.212402
					}],
					dottedLine:true,
					color: '#F05A43',
					width: 3
				}],
				data:{
					isArrive:false,
					point:[
						{
							address: '安徽合肥',
							nowPoint: false,
							isArrive: true,
							time: 1598769999000,
							latitude: 31.825065,
							longitude: 117.232361
						},
						{
							address: '安徽芜湖',
							nowPoint: false,
							isArrive: true,
							time: 1598769999000,
							latitude: 31.334871,
							longitude: 118.454590
						},
						{
							address: '江苏南京',
							nowPoint: false,
							isArrive: true,
							time: 1598769999000,
							latitude: 32.008076,
							longitude: 118.850098
						},
						{
							address: '江苏扬州',
							nowPoint: false,
							isArrive: true,
							time: 1598769999000,
							latitude: 32.379961,
							longitude: 119.421387
						},
						{
							address: '江苏泰州',
							nowPoint: true,
							isArrive: true,
							time: 1598779999000,
							latitude: 32.694866,
							longitude: 119.904785
						},
						{
							address: '江苏盐城',
							nowPoint: false,
							isArrive: false,
							time: 1598789999000,
							latitude: 33.302986,
							longitude: 120.212402
						}
					]
				}
			}
		},
		methods: {
			pageInit() {
				uni.hideLoading()
				this.pageShow = true
			},
			showPosTigger() {
				this.showPos = !this.showPos
			}
		}
	}
</script>

<style>
@import url('../../common/common.css');
.mapTrack {
	color: #333;
	position: absolute;
	width: 100%;
	overflow: auto;
	box-sizing: border-box;
	top: 0;
	bottom: 0;
}
.mapTrack_title {
	height: 44px;
	line-height: 44px;
	padding: 0 15px;
	box-sizing: border-box;
	font-size: 14px;
	color: #333;
	background: rgba(255,255,255,.8);
	position: absolute;
	top: 10px;
	left: 10px;
	right: 10px;
	border-radius: 4px;
/* 	width: 100%; */
	z-index: 200;
}
.mapSteps {
	width: 100%;
	box-sizing: border-box;
	padding: 0 15px;
	position: absolute;
	bottom: 0;
	z-index: 200;
}
.mapSteps_wrap {
	background-color: #fff;
	width: 100%;
	height: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	box-shadow:0px 5px 10px #A0A0A0;
	box-sizing: border-box;
	padding-left: 46rpx;
	padding-top: 30rpx;
	padding-right: 30rpx;
}
.showPosTiggerimg{
	padding-top: 10rpx;
	padding-right: 16rpx;
	padding-bottom: 35rpx;
	font-size: 20px;
	color: #999;
	display: flex;
	justify-content: center;
	align-items: center;

}
.showPosTiggerimg>image {
	width: 43rpx;
	height: 43rpx;
	margin-right: 24rpx;
}

</style>
