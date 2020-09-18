<template>
	<view class="qiun-columns" style="height:100%">
		<!-- <view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">柱状图旋转</view>
		</view> -->
		<div class='chart-box'>
			<view class="qiun-charts-rotate" >
				<canvas canvas-id="canvasColumn" disable-scroll=true id="canvasColumn" class="charts-rotate" 
				@touchstart="touchColumn" @touchmove="moveLine" @touchend="touchEndLine"></canvas>
			</view>
		</div>
	</view>
</template>

<script>
	import uCharts from '../components/u-charts/u-charts.js';
	var self;
	var canvaColumn=null;
	export default {
		data() {
			return {
				cWidth2:'',//横屏图表
				cHeight2:'',//横屏图表
				pixelRatio:1,
				type: '' //1本月订单 2本月生产 3本月发货 4累计未清
			}
		},
		onLoad(option) {
			//option为object类型，会序列化上个页面传递的参数
			this.type = option.type; //请求参数类型
			self = this;
			let that = this;
			wx.getSystemInfo({
				 success: function (res) {
					self.cHeight2 = res.windowHeight+50;
				 }
			});
			this.cWidth2 = uni.upx2px(700);
			//this.cHeight2=uni.upx2px(1400);
			console.log(this.cHeight2)
		},
		mounted() {
			uni.showLoading({
			    title: '加载中'
			});
			setTimeout(()=> {
				this.getServerData();
			}, 1000);
			
		},
		methods: {
			getServerData(){
				var self = this
				this.ajax({
					url: 'app/home/detail',
					data:{
						type: this.type
					},
					success: function(res) {
						console.log(res)
						var data = res.data
						let ColumnColumn = {}
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						var categories = []
						var series = [{
							name: '数量',
							data: []
						}]
						data.forEach(item => {
							categories.push(item.spartName)
							series[0].data.push(item.num)
						})
						ColumnColumn.categories=categories;
						ColumnColumn.series=series;
						console.log(ColumnColumn)
						self.showColumnColumn("canvasColumn",ColumnColumn);
					},
				});
				// let ColumnColumn = {};
				// ColumnColumn.categories = ["泵车", "挖掘机", "重卡", "搅拌车", "起重机", "新能源","新能源","新能源","新能源"];
				// ColumnColumn.series = [{name: "成交量1", data: [35, 36, 31, 33, 13, 34,34,34,56]}, {name: "成交量2", data: [18, 27, 21, 24, 6, 28,12,45,36,19]}];
				// this.showColumnColumn("canvasColumn",ColumnColumn);
				// let ColumnColumn={categories:[],series:[]};

				// ColumnColumn.categories=res.data.data.ColumnB.categories;
				// ColumnColumn.series=res.data.data.ColumnB.series;
				// self.showColumnColumn("canvasColumn",ColumnColumn);
				 uni.hideLoading()
			},
			showColumnColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:self,
					canvasId: canvasId,
					type: 'column',
					legend:{show:true},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:self.pixelRatio,
					animation: true,
					rotate:true,
					// #ifdef MP-ALIPAY || MP-BAIDU
					rotateLock:true,//百度及支付宝需要锁定旋转
					// #endif
					categories: chartData.categories,
					series: chartData.series,
					enableScroll: true,
					xAxis: {
						disableGrid:true,
						itemCount:10,//x轴单屏显示数据的数量，默认为5个
						scrollShow:false,//新增是否显示滚动条，默认false
						scrollAlign:'left',//滚动条初始位置
						scrollBackgroundColor:'#F7F7FF',//默认为 #EFEBEF
						scrollColor:'#DEE7F7',//默认为 #A6A6A6
					},
					yAxis: {
						disableGrid:true,
						
						//disabled:true
					},
					dataLabel: true,
					width: self.cWidth2*self.pixelRatio,
					height: self.cHeight2*self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: 18,
							meter:{
								//这个是外层边框的宽度
								border:2,
								//这个是内部填充颜色
								fillColor:'#fff'
							}
						}
					  }
				});
				
			},
			touchColumn(e){
				canvaColumn.scrollStart(e);
				// canvaColumn.showToolTip(e, {
				// 	format: function (item, category) {
				// 		return category + ' ' + item.name + ':' + item.data 
				// 	}
				// });
			},
			moveLine(e) {
				canvaColumn.scroll(e);
			},
			touchEndLine(e) {
				canvaColumn.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				// canvaColumn.showToolTip(e, {
				// 	format: function (item, category) {
				// 		return category + ' ' + item.name + ':' + item.data 
				// 	}
				// });
			},
		}
	}
</script>

<style>
	
	.chart-box{
		width: 700upx;
		height: 100%;
		padding: 25upx;
		box-sizing: border-box;

	}
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts-rotate {
		width: 700upx;
		height: 100%;
		background-color: #FFFFFF;
		border-radius: 8px;
		
	}
	
	.charts-rotate {
		width: 700upx;
		height: 100%;
		background-color: #FFFFFF;
		
	}
	
</style>
