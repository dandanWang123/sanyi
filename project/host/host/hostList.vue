<template>
	<view class="listPage" :class="{hasTab: loadingPage == false, fullHeight: hasData == false}">
		<skeleton title :row="3" animate :loading="loadingPage" style="margin-top:24rpx;"></skeleton>
		<div v-if="!loadingPage">
			<div class="my_tab">
				<div class="my_tab_items" v-for="(tabs,index) in tabArr" :key="index" :class="{active:tabIndex == index}" @click="changeTab(index,tabs.requestUrl)">
					<span>{{tabs.title}}</span>
				</div>
			</div>
			<div class="my_list" v-for="(item,i) in data" :key="i" v-if="tabIndex == 0">
				<div class="my_list_hd borderBottom_full">
					<div class="my_list_hd_txt">
						主机设备号：{{item.sernr}}
					</div>
					<div class="my_list_hd_status" :class="{ 'grayStatus': item.kdauf=='' }">
						<span>
							{{item.kdauf | statusFilter}}
						</span>
					</div>
				</div>
				<div class="my_list_content">
					<div class="my_list_content_info fullWidth">
						<p>订单销售号：{{item.kdauf}}</p>
						<p>物料编号：{{item.matnr}}</p>
						<p>物料描述：{{item.matkx}}</p>
						<p>库存状态：{{item.lbbsaStr}}</p>
						<p>工厂&库存地点：{{item.bwerk}}&{{item.blager}}</p>
						<p>首次入库日期：{{ formatTime(item.minDate, 'YYYY-MM-DD')}}</p>
						<p>末次入库日期：{{ formatTime(item.maxDate, 'YYYY-MM-DD')}}</p>
						<p>关键重：{{item.conf}}</p>
					</div>
				</div>
			</div>
			<div class="my_list" v-for="(item,i) in data" :key="i" v-if="tabIndex == 1">
				<div class="my_list_hd borderBottom_full">
					<div class="my_list_hd_txt">
						主机设备号：{{item.sernr}}
					</div>
					<div class="my_list_hd_status" :class="{ 'grayStatus': item.kdauf=='' }">
						<span>
							{{item.kdauf | statusFilter}}
						</span>
					</div>
				</div>
				<div class="my_list_content">
					<div class="my_list_content_info fullWidth">
						<p>生产订单号：{{item.aufnr}}</p>
						<p>销售单号：{{item.kdauf}}</p>
						<p>物料编号：{{item.matnr}}</p>
						<p>物料描述：{{item.maktx}}</p>
						<p>工厂&库存地点：{{item.factoryName}}&{{item.lgort}}</p>
						<p>计划开始日期：{{ formatTime(item.gstrsStr, 'YYYY-MM-DD')}}</p>
						<p>计划结束日期：{{ formatTime(item.gltrsStr, 'YYYY-MM-DD')}}</p>
						<p>创建时间：{{ formatTime(item.erdatStr, 'YYYY-MM-DD')}}</p>
						<p>下达时间：{{ formatTime(item.ftrmiStr, 'YYYY-MM-DD')}}</p>
					</div>
				</div>
			</div>
			<div class="search_btn" @click="openCloseSearch"><image src="../../static/img/search@3x.png" mode="widthFix"></image></div>
			<view v-if="hasData == true">
				<uni-load-more :status="loadingstatus" :loadingType="loadingType" :content-text="contentText" :showImage="true"
				 iconType="auto" />
			</view>
			<div class="my_noData" v-else>
				<image src="../../static/img/nodata.png" mode=""></image>
				<span>暂无数据</span>
			</div>
		</div>
		<SearchCom v-if="showSearch == true" :searchItems="searchData" @closeSearch='openCloseSearch' @searchConfirm='searchConfirm' ref="searchs"></SearchCom>
	</view>
</template>

<script>
	import SearchCom from '@/pages/commonCom/SearchCom.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import skeleton from '@/components/xinyi-skeleton/skeleton.vue';
	var searchData1 = [{
						queryName: 'equnr',
						type: 'text',
						placeholder: '请输入主机设备号',
						value: '',
					},
					{
						queryName: 'matnr',
						type: 'text',
						placeholder: '请输入主机物料号',
						value: '',
					},
					{
						queryName: 'kdauf',
						type: 'text',
						placeholder: '请输入销售订单号',
						value: '',
					},
					{
						queryName: 'ppaufnr',
						type: 'text',
						placeholder: '请输入生产订单号',
						value: '',
					},
					{
						queryName: 'werks',
						type: 'text',
						placeholder: '请输入所在工厂',
						value: '',
					},
					{
						//选择
						queryName: 'lbbsa',
						type: 'select',
						placeholder: '请选择库存状态',
						value: '',
						valueName: '请选择库存状态',
						index: 0,
						options: getApp().globalData.lbbsaOption
					}
					,
					{
						queryName: 'bindingType',
						type: 'radio',
						options: [{
							value: '1',
							name: '绑定'
						},{
							value: '2',
							name: '未绑定'
						}],
						value: '',
						current: ''
					}
					]
	var httpQuery1 = {
					pageNo: 1,
					pageSize: 10,
					categoryCode: '', //产品组 
					equnr: '',
					kdauf: '',
					matnr: '',
					lbbsa: '',
					ppaufnr: '',
					werks: '',
					bindingType: ''
				}
	var searchData2 = [
					{
						queryName: 'kdauf',
						type: 'text',
						placeholder: '请输入销售订单号',
						value: '',
					},
					{
						queryName: 'auart',
						type: 'text',
						placeholder: '请输入生产订单类型',
						value: ''
					},
					{
						queryName: 'aufnr',
						type: 'text',
						placeholder: '请输入生产订单号',
						value: '',
					},
					{
						queryName: 'matnr',
						type: 'text',
						placeholder: '请输入主机物料号',
						value: '',
					},
					{
						queryName: 'sernr',
						type: 'text',
						placeholder: '请输入主机设备号',
						value: '',
					},
					{
						queryName: 'werks',
						type: 'text',
						placeholder: '请输入所在工厂',
						value: '',
					}
					,
					{
						queryName: 'bindingType',
						type: 'radio',
						options: [{
							value: '1',
							name: '绑定'
						},{
							value: '2',
							name: '未绑定'
						}],
						value: '',
						current: ''
					}
				]
	var httpQuery2 = {
					pageNo: 1,
					pageSize: 10,
					category: '', //产品组 
					auart: '', //订单类型
					aufnr: '', //生产订单号
					kdauf: '', //销售订单号
					matnr: '', //物料号
					sernr: '', //主机设备号
					werks: '',
					bindingType: '' //绑定标识
				}
	export default {
		data() {
			return {
				tabArr:[{
					title:'库存',
					requestUrl: 'app/home/host/stock/page'
				},{
					title:'在制',
					requestUrl: 'app/home/host/under/construction/page'
				}],
				tabIndex: 0,
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
				data: [],
				httpQuery: {},
				categoryCode: '',
				evePageLen: "", //后台每页返回数据的长度，用来判断是否需要请求更多
				searchData: [],
				requestUrl:'app/home/host/stock/page'
			}
		},
		onLoad(option) {
			this.searchData = searchData1 //初始化筛选条件
			this.httpQuery = httpQuery1
			this.categoryCode = option.categoryCode
			this.httpQuery.categoryCode = this.categoryCode
			
			this.loadData()
		},
		components: {
			SearchCom,
			uniLoadMore,
			skeleton
		},
		methods: {
			initHttpQuery() {
				if (this.tabIndex == 0) {
					// 库存
					this.httpQuery = httpQuery1
					this.searchData = searchData1
				}
				if (this.tabIndex == 1) {
					// 在制
					this.httpQuery = httpQuery2
					this.searchData = searchData2
				}
				for(var k in this.httpQuery) {
					this.httpQuery[k] = ''
				}
				if (this.tabIndex == 0) { this.httpQuery.categoryCode = this.categoryCode }
				if (this.tabIndex == 1) { this.httpQuery.category = this.categoryCode }
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
			changeTab(index, requestUrl) {
				this.tabIndex = index
				if (this.tabIndex == 0) {
					// 库存
					this.httpQuery = httpQuery1
					this.searchData = searchData1
					this.httpQuery.categoryCode = this.categoryCode
				}
				if (this.tabIndex == 1) {
					// 在制
					this.httpQuery = httpQuery2
					this.searchData = searchData2
					this.httpQuery.category = this.categoryCode
				}
				this.requestUrl = requestUrl
				this.loadingPage = true
				this.data = []
				this.loadData()
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
			searchConfirm(searchData,updateData) {
				for(var k in searchData) {
					for(var key in this.httpQuery) {
						if (k == key) { this.httpQuery[key] = searchData[k] }
					}
				}
				this.searchData = updateData
				this.openCloseSearch()
				this.loadingPage = true
				this.data = []
				this.loadData()
			}
		},
		filters:{
			statusFilter(val) {
				var res = '已绑定'
				if (val == '') {
					res = '未绑定'
				}
				return res
			}
		}
	}
</script>

<style>
@import url('../../common/common.css');
</style>
