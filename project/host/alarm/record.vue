<template>
	<view class="listPage alarmList">
		<div class="my_list">
			<div class="my_list_hd borderBottom_full">
				<div class="my_list_hd_txt">
					销售订单号：{{data.orderNum}}
				</div>
				<div class="my_list_hd_status orangeStatus" :class="{ 'grayStatus': data.status==1 }">
					<span>
						{{data.status | statusFilter}}
					</span>
				</div>
			</div>
			<div class="my_list_content">
				<div class="my_list_content_info fullWidth">
					<p>主机型号：{{data.hostNum}}</p>
					<p>主机描述：{{data.des}}</p>
					<p>节点：{{data.node}}</p>
					<p>二级节点：{{data.secondNode}}</p>
					<p>告警时间：{{ formatTime(data.deliveryTime, "YYYY-MM-DD") }}</p>
				</div>
			</div>
			<div class="my_list_bd borderTop">
				<div class="my_list_bd_rightBtn" @click="openRecord(data, i)" v-if="data.status==1">
					<image src="../../static/img/icon693@2x.png" style="width: 10px;height:7px;margin-right: 20rpx;" v-if="data.recordOpen == false"></image>
					<image src="../../static/img/icon693-2@2x.png" style="width: 10px;height:7px;margin-right: 20rpx;" v-else></image>
					<span>
						反馈记录
					</span>
				</div>	
			</div>
			<uni-transition :mode-class="['fade']" :show="data.recordOpen">
				<div class="my_list_bd_open">
					<div class='mapSteps_process'>
						<div class="mapSteps_items" v-for="(p, i) in data.record" :key="i">
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
		<div class="my_textarea">
			<textarea :value="recordTxt" placeholder="请输入反馈内容" placeholder-style="color:#ccc" cursor-spacing="269"/>
		</div>
		<div class="detailPage_bottomBtn">
			<button type="primary" class="my_button">提交反馈</button>
		</div>
	</view>
</template>

<script>
	import SearchCom from '@/pages/commonCom/SearchCom.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	import skeleton from '@/components/xinyi-skeleton/skeleton.vue'
	import moment from "moment"
	export default {
		data() {
			return {
				loadingPage: true,
				hasData:false,
				showSearch:false,
				data:{
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
					recordOpen: true,
					record: [{
						name: '张三',
						content: '怎么还没有进度？',
						time: 1599619299000
					},{
						name: '李四',
						content: '什么时候才能给我反馈？',
						time: 1599619299000
					},{
						name: '张三',
						content: '怎么还没有进度？',
						time: 1599619299000
					},{
						name: '李四',
						content: '什么时候才能给我反馈？',
						time: 1599619299000
					},{
						name: '张三',
						content: '怎么还没有进度？',
						time: 1599619299000
					},{
						name: '李四',
						content: '什么时候才能给我反馈？',
						time: 1599619299000
					}]
				},
				recordTxt:'',
				keyboardDis: 0
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.textareaToBtnDis()
		},
		components: {
			SearchCom,
			uniLoadMore,
			uniTransition,
			skeleton
		},
		methods: {
			openRecord(item, i) {
				item.recordOpen = !item.recordOpen
				this.textareaToBtnDis()
			},
			textareaToBtnDis(){
				var btnTop = 0
				var textareaTop = 0
				let btn = uni.createSelectorQuery().in(this).select(".my_button")
				btn.fields({
				    size: true, // 是否返回节点尺寸
					rect:true, //是否返回节点布局位置
				}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
					btnTop = data.top
				}).exec()
				let textArea = uni.createSelectorQuery().in(this).select(".my_textarea")
				textArea.fields({
				    size: true, // 是否返回节点尺寸
					rect:true, //是否返回节点布局位置
				}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
					textareaTop = data.top
					this.keyboardDis = btnTop - textareaTop
				}).exec()
				console.log(this.keyboardDis)
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
		},
		watch: {
			keyboardDis: {
				handler(newValue, oldValue) {
					this.keyboardDis = newValue
					console.log(this.keyboardDis)
				},
				deep: true, //对象内部的属性监听，也叫深度监听
				immediate: true //immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler
			}
		}
	}
</script>

<style scoped>
@import url('../../common/common.css');
.alarmList {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	box-sizing: border-box;
	/* padding-bottom: 175rpx; */
}
.my_list_bd_open {
	max-height: 240rpx;
	overflow: auto;
	box-sizing: border-box;
	padding-bottom: 40rpx;
}
</style>
