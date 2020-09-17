<template>
	<view class="listPage alarmList"  :class="{fullHeight: hasData == false}">
		<skeleton title :row="3" :loading="loadingPage" style="margin-top:24rpx;"></skeleton>
		<div v-if="!loadingPage">
			<div class="my_list" v-for="(item,i) in data" :key="i">
				<div class="my_list_hd borderBottom_full">
					<div class="my_list_hd_txt">
						销售订单号：{{item.orderNum}}
					</div>
					<div class="my_list_hd_status orangeStatus" :class="{ 'grayStatus': item.status==1 }">
						<span>
							{{item.status | statusFilter}}
						</span>
					</div>
				</div>
				<div class="my_list_content">
					<div class="my_list_content_info fullWidth">
						<p>主机型号：{{item.hostNum}}</p>
						<p>主机描述：{{item.des}}</p>
						<p>节点：{{item.node}}</p>
						<p>二级节点：{{item.secondNode}}</p>
						<p>告警时间：{{ formatTime(item.deliveryTime, 'YYYY-MM-DD')}}</p>
					</div>
				</div>
				<div class="my_list_bd borderTop">
					<div class="my_list_bd_linkbtn"  @click="goto()">
						反馈
					</div>
					<div class="my_list_bd_rightBtn" @click="openRecord(item, i)" v-if="item.status==1">
						<image src="../../static/img/icon693@2x.png" style="width: 10px;height:7px;margin-right: 20rpx;" v-if="item.recordOpen == false"></image>
						<image src="../../static/img/icon693-2@2x.png" style="width: 10px;height:7px;margin-right: 20rpx;" v-else></image>
						<span>
							反馈记录
						</span>
					</div>	
				</div>
				<uni-transition :mode-class="['fade']" :show="item.recordOpen">
					<div class="my_list_bd_open">
						<div class='mapSteps_process'>
							<div class="mapSteps_items" v-for="(p, i) in item.record" :key="i">
								<image src="../../static/img/location@2x(2).png"></image>
								<p class="minitxt">
									<span style="margin-right: 10px;">
										{{p.name}}
									</span>
									<span>
										{{formatTime(p.time, 'YYYY-MM-DD hh:mm:ss')}}
									</span>
								</p>
								<p style="color: #333;">{{p.content}}</p>
							</div>
						</div>
					</div>
				</uni-transition>
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
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	import skeleton from '@/components/xinyi-skeleton/skeleton.vue'
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
					hostNum: 'T000123456',
					orderNum: '123456',
					status: 0,
					model: 'T001',
					des: '随便描述随便描',
					stockStatus: '非限制使用库存',
					factory: '1001',
					stockAddress: '1002',
					salesName: '张三',
					salesPhone: 13813812138,
					customerName: '李四',
					customerPhone: 13913926675,
					deliveryTime: 1599619299000,
					estimateTime: 1599619299000,
					createTime: 1599619299000,
					key: ['减速机：邦利飞', '变速器：GJB', '油泵：潍柴', '柱塞马达：力士乐'],
					node: '生产',
					secondNode: '装配',
					recordOpen: false,
					record: []
				},{
					hostNum: 'T000123456',
					orderNum: '123123',
					status: 1,
					model: 'T002',
					des: '随便描述随便描述随便描述',
					stockStatus: '非限制使用库存',
					factory: '1001',
					stockAddress: '1002',
					salesName: '张三',
					salesPhone: 13813812138,
					customerName: '李四',
					customerPhone: 13913926675,
					deliveryTime: 1599619299000,
					estimateTime: 1599619299000,
					createTime: 1599619299000,
					key: ['减速机：邦利飞', '变速器：GJB', '油泵：潍柴', '柱塞马达：力士乐'],
					node: '生产',
					secondNode: '装配',
					recordOpen: false,
					record: [{
						name: '张三',
						content: '怎么还没有进度？',
						time: 1599619299000
					},{
						name: '李四',
						content: '什么时候才能给我反馈？',
						time: 1599619299000
					}]
				},{
					hostNum: 'T000123456',
					orderNum: '123123',
					status: 1,
					model: 'T002',
					des: '随便描述随便描述随便描述',
					stockStatus: '非限制使用库存',
					factory: '1001',
					stockAddress: '1002',
					salesName: '张三',
					salesPhone: 13813812138,
					customerName: '李四',
					customerPhone: 13913926675,
					deliveryTime: 1599619299000,
					estimateTime: 1599619299000,
					createTime: 1599619299000,
					key: ['减速机：邦利飞', '变速器：GJB', '油泵：潍柴', '柱塞马达：力士乐'],
					node: '生产',
					secondNode: '装配',
					recordOpen: false,
					record: [{
						name: '张三',
						content: '怎么还没有进度？',
						time: 1599619299000
					}]
				}],
				httpQuery: {
					dataStatus: 1, //1待报价，2待议价，3历史
					page: '',
					rows: 10,
					roderNum: '',
					des: '',
					startDate: '',
					endDate: ''
				},
				evePageLen: "", //后台每页返回数据的长度，用来判断是否需要请求更多
				searchData: [
					{
						queryName: 'roderNum',
						type: 'text',
						placeholder: '请输入销售订单号',
						value: '',
					},
					{
						queryName: 'des',
						type: 'text',
						placeholder: '请输入产品描述',
						value: '',
					},
					{
						queryName: 'binding',
						type: 'radio',
						options: [{
							value: '0',
							name: '未绑定'
						},{
							value: '1',
							name: '已绑定'
						}],
						value: '',
						current: ''
					}
				],
				animationData: {}
			}
		},
		onLoad() {
			var self = this
			// uni.showLoading({
			// 	title:'加载中...'
			// })
			setTimeout(()=>{
				self.loadData()
			},1500)
		},
		components: {
			SearchCom,
			uniLoadMore,
			uniTransition,
			skeleton
		},
		methods: {
			onPullDownRefresh() {
				this.loadData();
			},
			onReachBottom() {
				//触底的时候请求数据，即为上拉加载更多
				this.getmore();
			},
			loadData() {
				this.loadingPage = false
				//下拉刷新
				let self = this;
				//第一次回去数据
				this.httpQuery.page = 1;
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				//请求接口获取数据
				this.httpGetListData()
				if (this.evePageLen < 10) {
					this.loadingType = 2;
					this.loadingstatus = 'noMore';
				}
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
				//初始化查询条件
				this.httpQuery.page = this.page
				this.httpGetMoreListData()
			},
			httpGetListData() {
				uni.hideLoading()
				// 数据请求
				
				//模拟获取数据,后期去掉
				var res = {
					data: this.data
				}
				if (res.data.length != 0) {
					this.hasData = true
				}else {
					this.hasData = false
				}
				this.httpQuery.page++
				this.evePageLen = res.data.length
				this.data = res.data
				uni.hideNavigationBarLoading()
				uni.stopPullDownRefresh()
			},
			httpGetMoreListData() {
				//数据更请求
				
				//模拟获取数据,后期去掉
				var res = {
					data: this.data
				}
				if (res.data.length == 0) {
					this.loadingType = 2;
					this.loadingstatus = 'noMore';
					uni.hideNavigationBarLoading(); //关闭加载动画
					return;
				}
				this.httpQuery.page++
				this.data = this.data.concat(res.data)
				this.evePageLen = res.data.length
				this.loadingType = 0; //将loadingType归0重置
				this.loadingstatus = 'loading';
				uni.hideNavigationBarLoading(); //关闭加载动画
				uni.stopPullDownRefresh();
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
				this.openCloseSearch()
				this.loadData()
			},
			goto() {
				uni.navigateTo({
				    url: '/host/alarm/record'
				})
			},
			openRecord(item, i) {
				// 收起其他的反馈，展开自己的反馈
				this.data.forEach((e, index) => {
					if (index != i) {
						e.recordOpen = false
					}
				})
				item.recordOpen = !item.recordOpen
			}
		},
		filters:{
			statusFilter(val) {
				const statusMap = {
					0: '未反馈',
				    1: '已反馈'
				}
				return statusMap[val]
			}
		}
	}
</script>

<style scoped>
@import url('../../common/common.css');
</style>
