<template>
	<view class="mapTrack">
		<div class='mapTrack_title borderBottom_full'>
			销售订单号：{{salesOrderNo}}
		</div>
		<div class="mapTrack_map">
			<map :style=" 'width: 100%; height: '+ mapHeight +'px'" scale="4" :latitude="latitude" :longitude="longitude" :markers="covers" :polyline="polyline" @updated="pageInit"></map>
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
				<div class="mapSteps_group">
					<div class="mapSteps_items" v-for="(p, i) in covers" :key="i" v-if="showPos == true">
					<!-- 		<image src="../../static/img/location@2x(2).png" v-if="p.nowPoint == true"></image>
							<image src="../../static/img/location@2x(3).png" v-else></image> -->
							<image src="../../static/img/location@2x(3).png" v-if="i != 0 && i != (covers.length-1)"></image>
							<template v-else>
								<image src="../../static/img/start.png" v-if="i == 0" style="width: 15px;height: 18px;left: -8px;"></image>
								<image src="../../static/img/end.png" v-if="i == (covers.length-1)" style="width: 15px;height: 18px;left: -7px;"></image>
							</template>
							<p v-if="i == 0">从【{{p.address}}】出发</p>
							<p v-if="i != 0 && i != (covers.length-1)">本站【{{p.address}}】,下一站【{{covers[i+1].address}}】</p>
							<p v-if="i == (covers.length-1) && isEnd != 0 ">到达终点【{{p.address}}】</p>
							<p v-if="i == (covers.length-1) && isEnd == 0 ">正前往终点【{{p.address}}】</p>
							<p class="minitxt">{{p.time}}</p>
						</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.salesOrderNo = option.salesOrderNo
			this.parmasId = option.id
			this.getData()
		},
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
				salesOrderNo: '',
				pageShow:false,
				showPos:false,
				mapHeight: 0,
				latitude: 32.008076,
				longitude: 118.850098,
				covers:[],
				polyline:[],
				data:{
					point:[]
				},
				startAddress: '',
				startLocation: {},
				endAddress: '',
				endLocation: {},
				isEnd: '',
				points: [],
				parmasId: ''
			}
		},
		methods: {
			getData() {
				this.ajax({
					url:'tms/home/order/getTraList/'+ this.parmasId,
					data: {},
					success:res=>{
						console.log(res)
						if (res.code == 0) {
							this.getDataSuccess(res.data)
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getDataSuccess(data) {
				var self = this
				this.isEnd = data.isEnd
				this.startAddress = data.thdz
				this.endAddress = data.shdz
				data.traList.forEach(item => {
					self.points.push({
						latitude:item.lat,
						longitude:item.lon,
						time:item.gjdate,
						address:item.address
					})
				})
				//取中间点做为地图展示中心
				this.latitude = data.traList[parseInt(data.traList.length/2)].lat
				this.longitude = data.traList[parseInt(data.traList.length/2)].lon
				
				this.addressToloc(this.startAddress, 1)
				this.addressToloc(this.endAddress, 2)
			},
			addressToloc(address,type) {
				//逆解析坐标
				var self = this
				uni.request({
					url:'https://restapi.amap.com/v3/geocode/geo',
					data: {
						key: '9957725b2462e3d0e64b42c6a8e08ca3', //自己的高德地图key
						address,
					},
					success:res=>{
						console.log(res)
						var data =  res.data
						if( data.status == 1 ) {
							//成功
							var latitude = data.geocodes[0].location.split(",")[1]
							var longitude = data.geocodes[0].location.split(",")[0]
							var location = {
								latitude,
								longitude
							}
							if(type == 1){ 
								self.startLocation = location
								self.startLocation.address = self.startAddress
								self.time = ''
							}
							if(type == 2){ 
								self.endLocation = location
								self.endLocation.address = self.endAddress,
								self.time = ''
							}
							console.log(location)
							self.addressTolocSuccess()
						}else {
							//失败
							self.httpErr(data.info)
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			addressTolocSuccess() {
				// 逆解析成功处理数据
				var lines = []
				var lines1= []
				var lines2 = []
				var passPoints = JSON.parse(JSON.stringify(this.points))
				passPoints.forEach(item => { 
					item.iconPath = '../../static/img/pPoint.png'
				})			
				this.startLocation.iconPath = '../../static/img/sPoint.png'
				this.endLocation.iconPath = '../../static/img/ePoint.png'
				lines[0] = this.startLocation
				lines1[0] = this.startLocation
				lines = lines.concat(passPoints)
				lines1 = lines1.concat(passPoints)
				lines = lines.concat(this.endLocation)
				lines2 = [passPoints[passPoints.length-1],this.endLocation]
				this.covers = lines
				if (this.isEnd == 0) {
					//未到达，此时需要取最后一个点和终点做虚线
					this.polyline = [{
						color: '#40B4CE',
						width: 3
					},{
						dottedLine:true,
						color: '#F05A43',
						width: 3
					}]
					this.polyline[0].points = lines1
					this.polyline[1].points = lines2
				}else {
					//已到达，全部用实线连接
					this.polyline = [{
						color: '#40B4CE',
						width: 3
					}]
					this.polyline[0].points = lines
				}
			},
			httpErr(msg) {
				uni.showToast({
					title: msg,
					duration: 1000
				})
			},
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
	padding-left: 30rpx;
	padding-top: 30rpx;
	padding-right: 30rpx;
}
.mapSteps_group {
	max-height: 700rpx;
	overflow: auto;
	padding-left: 9px;
	box-sizing: border-box;
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
