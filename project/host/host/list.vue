<template>
	<view class="listPage hostList" :class="{fullHeight: hasData == false}">
		<skeleton title :row="3" animate :loading="loadingPage" style="margin-top:24rpx;"></skeleton>
		<div v-if="!loadingPage">
			<div class="my_list" v-for="(item,i) in data" :key="i" @click="goto(item.code)">
				<div class="my_list_content">
					<div class="my_list_content_img">
						<image :src="'http://'+item.imgHttpUrl" mode="aspectFill"></image>
					</div>
					<div class="my_list_content_info" style="margin-left: 5px;">
						<p style="font-weight: 700;color: #333;font-size: 17px;margin-bottom: 10px;">{{item.name}}</p>
						<p>
							<image src="../../static/img/icon675@2x.png" style="width: 15px;height: 15px;margin-right: 8px;"></image>
							<span>库存：{{item.stockNum}}</span>
						</p>
						<p>
							<image src="../../static/img/icon676@2x.png" style="width: 15px;height: 15px;margin-right: 8px;"></image>
							<span>在制：{{item.pruductNum}}</span>
						</p>
					</div>
				</div>
			</div>
			<div class="search_btn" @click="openCloseSearch"><image src="../../static/img/search@3x.png" mode="widthFix"></image></div>
			<SearchCom v-if="showSearch == true" :searchItems="searchData" @closeSearch='openCloseSearch' @searchConfirm='searchConfirm' ref="searchs"></SearchCom>
			<view v-if="hasData == true">
				<uni-load-more :status="loadingstatus" :loadingType="loadingType" :content-text="contentText" :showImage="true"
				 iconType="auto" />
			</view>
			<div class="my_noData" v-else>
				<image src="../../static/img/nodata.png" mode=""></image>
				<span>暂无数据</span>
			</div>
		</div>
	</view>
</template>

<script>
	import SearchCom from '@/pages/commonCom/SearchCom.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import skeleton from '@/components/xinyi-skeleton/skeleton.vue';
	export default {
		data() {
			return {
				loadingPage: true,
				loadingstatus: 'more',
				loadingText: '加载中...',
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2--contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				hasData:false,
				showSearch:false,
				data:[{
					name:'泵车',
					stock: 100,
					processed: 150
				},{
					name:'拖泵',
					stock: 100,
					processed: 150
				}],
				httpQuery: {
					pageNo: '',
					pageSize: 10,
					name: ''
				},
				searchData: [
					{
						queryName: 'name',
						type: 'text',
						placeholder: '请输入主机类型名称',
						value: '',
					}
				],
				evePageLen: "", //后台每页返回数据的长度，用来判断是否需要请求更多
				requestUrl:'app/home/host/page'
			}
		},
		onLoad() {
			var self = this
			this.loadData()
		},
		components: {
			uniLoadMore,
			skeleton,
			SearchCom
		},
		methods: {
			initHttpQuery() {
				for(var k in this.httpQuery) {
					this.httpQuery[k] = ''
				}
				this.httpQuery.pageSize = 10
				this.httpQuery.pageNo = 1
				this.searchData.forEach(item => { item.value = '' })
				console.log(this.httpQuery)
			},
			onPullDownRefresh() {
				this.initHttpQuery()
				this.loadingPage = true
				this.loadData()
			},
			onReachBottom() {
				//触底的时候请求数据，即为上拉加载更多
				this.getmore();
			},
			loadData() {
				//下拉刷新
				let self = this;
				//第一次回去数据
				this.httpQuery.pageNo = 1;
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				//请求接口获取数据
				this.httpGetListData()
			},
			getmore() {
				let self = this;
				if (this.loadingType !== 0 && this.evePageLen < 10) {
					//loadingType!=0;直接返回
					this.loadingType = 2;
					this.loadingstatus = 'noMore';
					return false;
				}
				this.loadingType = 1;
				this.loadingstatus = 'loading';
				uni.showNavigationBarLoading(); //显示加载动画
				this.httpGetMoreListData()
			},
			httpGetListData() {
				uni.hideLoading()
				var self = this
				// 数据请求
				this.ajax({
					url:this.requestUrl,
					data: this.httpQuery,
					success:res=>{
						console.log(res)
						var data = res.data
						this.loadingPage = false
						this.getListSuccess(data)
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getListSuccess(data) {
				//加载数据成功函数，处理数据
				if (data.length != 0) {
					this.hasData = true
				}else {
					this.hasData = false
				}
				this.evePageLen = data.length
				data.forEach(item => {
					for(let k in item) {
						if (item[k] == null) { item[k] = "" }
					}
				})
				this.data = data
				if (this.evePageLen < 10) {
					this.loadingType = 2;
					this.loadingstatus = 'noMore';
				}
				uni.hideNavigationBarLoading()
				uni.stopPullDownRefresh()
			},
			httpGetMoreListData() {
				//数据更请求
				var self = this
				this.httpQuery.pageNo++
				//数据更请求
				this.ajax({
					url:this.requestUrl,
					data: this.httpQuery,
					success:res=>{
						console.log(res)
						var data = res.data
						this.getMoreListSuccess(data)
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			getMoreListSuccess(data) {
				data.forEach(item => {
					for(let k in item) {
						if (item[k] == null) { item[k] = "" }
					}
				})
				this.data = this.data.concat(data)
				this.evePageLen = data.length
				this.loadingType = 0; //将loadingType归0重置
				this.loadingstatus = 'loading'
				if (this.evePageLen == 0 || this.evePageLen < 10) {
					this.loadingType = 2
					this.loadingstatus = 'noMore'
				}
				uni.hideNavigationBarLoading() //关闭加载动画
				uni.stopPullDownRefresh()
			},
			openCloseSearch() {
				var self = this
				this.showSearch = !this.showSearch
				if (this.showSearch == true) {
					setTimeout(() => {
						self.$refs.searchs.getInputtoBtn()
					}, 200)
				}
			},
			searchConfirm(searchData, updateData) {
				for(var k in searchData) {
					for(var key in this.httpQuery) {
						if (k == key) { this.httpQuery[key] = searchData[k] }
					}
				}
				this.searchData = updateData
				console.log(this.httpQuery)
				this.openCloseSearch()
				this.loadingPage = true
				this.data = []
				this.loadData()
			},
			goto(categoryCode) {
				uni.navigateTo({
				    url: '/host/host/hostList?categoryCode='+categoryCode
				})
			}
		}
	}
</script>

<style>
@import url('../../common/common.css');
.hostList .my_list_content_info>p{
	display: flex;
	align-items: center;
	margin-bottom: 10rpx;
	font-size: 14px;
/* 	line-height: 32px; */
}
</style>
