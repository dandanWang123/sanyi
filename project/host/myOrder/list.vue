<template>
	<view class="listPage" :class="{fullHeight: hasData == false}">
		<skeleton title :row="3" animate :loading="loadingPage" style="margin-top:24rpx;"></skeleton>
		<div v-if="!loadingPage">
			<div class="my_list" v-for="(item,i) in data" :key="i" @click="goto(item)">
				<div class="my_list_hd borderBottom_full">
					<div class="my_list_hd_txt">
						销售订单号：{{item.vbeln}}
					</div>
					<div class="my_list_hd_status">
						<span>
							{{item.statusName}}
						</span>
					</div>
				</div>
				<div class="my_list_content">
					<div class="my_list_content_img">
						<image :src="'http://'+item.imgUrl" mode="aspectFill"></image>
					</div>
					<div class="my_list_content_info">
						<p>物料编码：{{item.material}}</p>
						<p>物料描述：{{item.materialName}}</p>
						<p>营销代表：{{item.zsales}} {{item.ztel}}</p>
						<p>客户编码：{{item.kunnr}}</p>
						<p>客户：{{item.name1}}</p>
						<p>请求交货时间：{{ formatTime(item.vdatu, 'YYYY-MM-DD')}}</p>
						<p>预估交期：{{ formatTime(item.planDeliveryDate, 'YYYY-MM-DD')}}</p>
						<p>创建时间：{{item.erdat}} {{item.erzet}}</p>
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
					orderNum: 'T000123456',
					status: 1,
					model: 'T001',
					des: '随便描述随便描述随便描述随便随便描述随便描述随便描述随便',
					salesName: '张三',
					salesPhone: 13813812138,
					customerName: '李四',
					customerPhone: 13913926675,
					deliveryTime: 1599619299000,
					estimateTime: 1599619299000,
					createTime: 1599619299000
				},{
					orderNum: 'T000123456',
					status: 1,
					model: 'T002',
					des: '随便描述随便描述随便描述随便随便描述随便描述随便描述随便',
					salesName: '张三',
					salesPhone: 13813812138,
					customerName: '李四',
					customerPhone: 13913926675,
					deliveryTime: 1599619299000,
					estimateTime: 1599619299000,
					createTime: 1599619299000
				}],
				httpQuery: {
					pageNo: 1,
					pageSize: 10,
					ernam: '',
					bizrk: '',
					// group: '',
					orderStart: '',
					orderEnd: '',
					category: 1, //1主机，2配件
					queryType: 2, // 1所有， 2我的
					type: 1 // 1所有 2未发 3已发 4待收
				},
				evePageLen: "", //后台每页返回数据的长度，用来判断是否需要请求更多
				searchData: [
					// {
					// 	queryName: 'ernam',
					// 	type: 'text',
					// 	placeholder: '请输入创建人',
					// 	value: '',
					// },
					{
						queryName: 'bizrk',
						type: 'text',
						placeholder: '请输入销售地区',
						value: '',
					},
					// {
					// 	queryName: 'group',
					// 	type: 'text',
					// 	placeholder: '请输入产品组',
					// 	value: '',
					// },
					{
						queryName: 'orderStart',
						type: 'date',
						placeholder: '请选择下单开始日期',
						value: '',
					},
					{
						queryName: 'orderEnd',
						type: 'date',
						placeholder: '请选择下单结束日期',
						value: '',
					}
				],
				requestUrl:'app/home/order/page'
			}
		},
		onLoad() {
			this.loadData()
		},
		components: {
			SearchCom,
			uniLoadMore,
			skeleton
		},
		methods: {
			initHttpQuery() {
				for(var k in this.httpQuery) {
					this.httpQuery[k] = ''
				}
				this.httpQuery.pageSize = 10
				this.httpQuery.pageNo = 1
				this.httpQuery.category = 1 // 1主机， 2配件
				this.httpQuery.queryType = 2 //1所有， 2我的订单
				this.httpQuery.type = 1 // 1所有 2未发 3已发 4待收
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
						console.log(res.data)
						this.loadingPage = false
						var data = res.data
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
						console.log(res.data)
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
			goto(item) {
				var itemData = JSON.parse(JSON.stringify(item))
				delete itemData.imgUrl
				uni.navigateTo({
				    url: '/host/order/detail?data='+encodeURI(JSON.stringify(itemData))
				})
			}
		},
		filters:{
			statusFilter(val) {
				const statusMap = {
				    1: '生产中'
				}
				return statusMap[val]
			}
		}
	}
</script>

<style>
@import url('../../common/common.css');
</style>
