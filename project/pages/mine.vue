<template>
	<view class="full-page">
		<div class='record-box'>
			<div class='record' v-for='(item,index) in recorItems' :key='index' @click='toList(item)'>
				<img :src="'../static/img/'+item.img+'.png'"></img>
				<div class='top'>
					<div>{{item.name}}</div>
					<span>{{item.str}}</span>
				</div>
				<div class='num'><span>{{item.num}}</span>{{item.unit}}</div>
			</div>
		</div>
		
		<div class='menu-box'>
			<div class='menu' v-for='(item,index) in menuItems' :key='index' @click="goto(item.path)">
				<img src="../static/img/host04.png">
				<div>{{item.name}}</div>
			</div>
		</div>
	</view>
</template>

<script>
	import moment from "moment"
	export default {
		data() {
			return {
				recorItems: [
					{ name: '本月订单', str: 'Order of this month',num: '2300',img:'bg01',unit: '单', type: 1, code: 'currMonthOrder'},
					{ name: '本月发货', str: 'Production this month',num: '2300',img:'bg03',unit: '台', type: 3, code: 'currMonthDelivery'},
					{ name: '本月签收', str: 'Deliver this month',num: '2300',img:'bg02',unit: '台', type: 4, code: 'currMonthDocument'}
				],
				menuItems: [
					{name: '我的订单', path: '/mine/list?isAll=0'}
				]
			}
		},
		onLoad() {
			uni.showLoading({
				title:'加载中',
				mask:true
			})
			this.getData()
		},
		methods: {
			getData() {
				var self = this
				uni.request({
					url:'web/order/app/home/index',
					data: {
						type: 2
					},
					success:res=>{
						console.log(res.data.data)
						var data = res.data.data
						if (res.data.code == 0) {
							// 成功
							self.resSuccess(data)
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
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
			toList(item){
				var query = {
					type:item.type,
					orderStart:this.getMonthStartAndEnd(0)[0],
					orderEnd: this.getMonthStartAndEnd(0)[1]
				}
				uni.navigateTo({
				    url: '/mine/list?query='+JSON.stringify(query)
				})
			},
			/** 
			* 获得相对当月AddMonthCount个月的起止日期 
			* AddMonthCount为0 代表当月 为-1代表上一个月 为1代表下一个月 以此类推
			* ***/
			getMonthStartAndEnd(AddMonthCount) { 
				//起止日期数组  
				var startStop = new Array(); 
				//获取当前时间  
				var currentDate = new Date();
				var month=currentDate.getMonth()+AddMonthCount;
				if(month<0){
				  var n = parseInt((-month)/12);
				  month += n*12;
				  currentDate.setFullYear(currentDate.getFullYear()-n);
				}
				currentDate = new Date(currentDate.setMonth(month));
				//获得当前月份0-11  
				var currentMonth = currentDate.getMonth(); 
				//获得当前年份4位年  
				var currentYear = currentDate.getFullYear(); 
				//获得上一个月的第一天  
				var currentMonthFirstDay = new Date(currentYear, currentMonth,1); 
				//获得上一月的最后一天  
				var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0); 
				//添加至数组  
				startStop.push(this.getDateStr3(currentMonthFirstDay)); 
				startStop.push(this.getDateStr3(currentMonthLastDay)); 
				//返回  
				return startStop; 
			},
			//获取当前日期yy-mm-dd
			//date 为时间对象
			getDateStr3(date) {
				var year = "";
				var month = "";
				var day = "";
				var now = date;
				year = ""+now.getFullYear();
				if((now.getMonth()+1)<10){
				  month = "0"+(now.getMonth()+1);
				}else{
				  month = ""+(now.getMonth()+1);
				}
				if((now.getDate())<10){
				  day = "0"+(now.getDate());
				}else{
				  day = ""+(now.getDate());
				}
				return year+"-"+month+"-"+day;
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
	}
	.menu img{
		width: 34px;
		height: 34px;
		margin-bottom: -4px;
	}
</style>
