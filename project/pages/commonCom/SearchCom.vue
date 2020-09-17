<template>
	<view class="my_search_modal">
		<uni-transition :mode-class="['fade']" :show="true" class="my_search">
			<div class="my_search_hd borderBottom_full">
				<span>
					请输入筛选条件
				</span>
				<uni-icons class="my_search_hd_icon" type="closeempty" size="20" color="#333" @click.native="closeSearch"></uni-icons>
			</div>
			<div class="my_search_content">
				<div v-for="(item,i) in searchData" :key="i">
					<div class="my_search_item" v-if="item.type == 'text'">
						<input type="text" v-model="item.value" :placeholder="item.placeholder" placeholder-style="color: #999" :cursor-spacing="disArr[i]" @focus="changeCursorSpace"/>
					</div>
					<div class="my_search_item" v-if="item.type == 'select'">
						<picker @change="bindPickerChange($event,i,item)" :value="item.index" :range="item.options" range-key="name" >
							<!-- <span v-if="item.value ==''">{{item.placeholder}}</span>
							<span v-else>{{item.options[item.valueIndex].name}}</span> -->
							<!-- <span>{{item.options[pickerIndexArr[i]].name}}</span> -->
							<span>{{item.valueName}}</span>
						</picker>
					</div>
					<div class="my_search_item my_search_itemHasIcon" v-if="item.type == 'date'" @click="showDate(i)">
						<span v-if="item.value ==''">{{item.placeholder}}</span>
						<span v-else>{{item.value}}</span>
						<div class="my_search_item_icon">
							<image src="../../static/img/date.png"></image>
						</div>
					</div>
					<radio-group class="my_search_itemRadio" @change="radioChange($event,item,i)" v-if="item.type == 'radio'">
						<label v-for="(val, index) in item.options" :key="val.value">
							<radio v-model="val.value" :checked="index === val.current" color="#5B82F9"/>
							<span>{{val.name}}</span>
						 </label>
					</radio-group>
				</div>
				<uni-calendar
					ref="calendar"
					:insert="false"
					@confirm="confirm"/>
			</div>
			<div class="my_search_bd">
				<button type="default" class="my_button" @click.native="closeSearch">取消</button>
				<button type="primary" class="my_button" @click.native="searchConfirm">查询</button>
			</div>
		</uni-transition>
	</view>
</template>

<script>
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	import Vue from 'vue';
	export default {
		props: {
			searchItems: {
				type: Array ,//附件列表
				dafault: []
			}
		},
		mounted() {
			this.searchData = [];
			this.searchData = this.searchItems;
		},
		data() {
			return {
				pickerIndexArr: [],
				dataIndex: '',
				disArr: [],
				searchData:[
				// 	{
				// 	//文本
				// 	queryName: '',
				// 	type: 'text',
				// 	placeholder: '',
				// 	value: '',
				// },{
				// 	//日期
				// 	queryName: '',
				// 	type: 'date',
				// 	placeholder: '',
				// 	value: ''
				// },{
				// 	//单选
				// 	queryName: '',
				// 	type: 'radio',
				// 	options: [{
				// 		value: 'USA',
				// 		name: '美国'
				// 	},{
				// 		value: 'cn',
				// 		name: '中国'
				// 	}],
				// 	value: '',
				// 	current: ''
				// },
				// {
				// 	//选择
				// 	queryName: 'test',
				// 	type: 'select',
				// 	placeholder: '测试选择项',
				// 	value: '',
				// 	valueIndex: 0,
				// 	options: [{
				// 		value: 0,
				// 		name: '测试1'
				// 	},{
				// 		value: 1,
				// 		name: '测试2'
				// 	}]
				// },
				]
			}
		},
		components:{
			uniIcons,
			uniCalendar,
			uniTransition
		},
		methods: {
			getInputtoBtn() {
				var self = this
				var btnTop = 0
				this.disArr = []
				let btn = uni.createSelectorQuery().in(this).select(".my_search_bd")
				btn.fields({
				    size: true, // 是否返回节点尺寸
					rect:true, //是否返回节点布局位置
				}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
					btnTop = data.top
					console.log(btnTop)
				}).exec()
				let ele = uni.createSelectorQuery().in(this).selectAll(".my_search_item")
				ele.fields({
				    size: true, // 是否返回节点尺寸
					rect:true, //是否返回节点布局位置
				}, data => { // data是方法的回调函数，参数是指定的相关节点信息。
					data.forEach((eles,i) => {
						var dis = btnTop - eles.top
						self.disArr.push(dis+20)
						console.log(eles.top)
					})
				}).exec()
			},
			changeCursorSpace() {
				
			},
			showDate(i) {
				this.dataIndex = i
				this.$refs.calendar.open()
			},
			confirm(e) {
				this.searchData[this.dataIndex].value = e.fulldate
				console.log(this.dataIndex,this.searchData)
			},
			radioChange(evt,item,index) {
				for (let i = 0; i < item.options.length; i++) {
				    if (item.options[i].value === evt.target.value) {
				        this.searchData[index].current  = i
						this.searchData[index].value = this.searchData[index].options[i].value
				        break
				    }
				}
			},
			bindPickerChange(e,i,item) {
				// this.$set( item, "index", e.target.value )
				// this.$set( item, "value", item.options[e.target.value].value )
				// console.log(this.data, this.data[i].value,item.value,item.options[item.valueIndex].name)
				let arrIndex = e.target.value;
				Vue.set(this.pickerIndexArr, i, arrIndex);
				this.searchData[i].index = Number(e.target.value);
				this.searchData[i].value = this.searchData[i].options[arrIndex].value
				this.searchData[i].valueName = this.searchData[i].options[arrIndex].name
				console.log(this.searchData[i], this.searchData[i].value, this.searchData[i].valueName)
			},
			closeSearch() {
				this.$emit('closeSearch')
			},
			searchConfirm() {
				var searchs = JSON.parse(JSON.stringify(this.searchData))
				var resData = {}
				searchs.forEach(item => {
					resData[item.queryName] = item.value
				})
				this.$emit('searchConfirm', resData, this.searchData)
				console.log(this.searchData, resData)
			},
			getKeyboradHeight(e) {
				var height = e.detail.height
			}
		},
		watch: {
			searchData: {
				handler(newValue, oldValue) {
					this.searchData = newValue
				},
				deep: true, //对象内部的属性监听，也叫深度监听
				immediate: true //immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler
			},
			disArr: {
				handler(newValue, oldValue) {
					this.disArr = newValue
					console.log(this.disArr)
				},
				deep: true, //对象内部的属性监听，也叫深度监听
				immediate: true //immediate表示在watch中首次绑定的时候，是否执行handler，值为true则表示在watch中声明的时候，就立即执行handler方法，值为false，则和一般使用watch一样，在数据发生变化的时候才执行handler
			}
		}
	}
</script>

<style>
@import url('../../common/common.css');
.my_search_modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(3,10,23,.5);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	z-index: 190;
}
.my_search {
	background-color: #fff;
	border-radius: 3px;
/* 	width: 100%; */
	color: #333;
	position: absolute;
	left: 30px;
	right: 30px;
}
.my_search_hd {
	position: relative;
	text-align: center;
	height: 44px;
	line-height: 44px;
	color: #333;
}
.my_search_hd_icon {
	position: absolute;
	right: 15px;
}
.my_search_bd {
	display: flex;
	justify-content: space-between;
	padding: 0 15px;
	padding-top: 10px;
	padding-bottom: 20px;
}
.my_search_bd>.my_button {
	width: 50%;
	margin-right: 15px;
}
.my_search_bd>.my_button:last-child {
	margin-right: 0px;
}
.my_search_content {
	padding: 0 15px;
	padding-top: 13px;
}
.my_search_item {
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-radius: 3px;
	border: 1px solid #EBEBEB;
	margin-bottom: 10px;
	box-sizing: border-box;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 13px;
	color: #999;
}
.my_search_item>input {
	height: 40px;
	font-size: 13px;
	color: #999;
}
.my_search_item.my_search_itemHasIcon {
	padding-right: 45px;
	position: relative;
}
.my_search_itemRadio {
	display: flex;
	font-size: 13px;
	color: #999;
	margin-bottom: 10px;
	justify-content: center;
	height: 40px;
	align-items: center;
}
.my_search_itemRadio>label {
	margin-right: 80rpx;
}
.my_search_itemRadio>label>span {
	margin-left: 5px;
}
.my_search_itemRadio>label:last-child {
	margin: 0;
}
.my_search_item_icon {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 15px;
	display: flex;
	align-items: center;
}
.my_search_item_icon>image {
	width: 18px;
	height: 18px;
}
</style>
