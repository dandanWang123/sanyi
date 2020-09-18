<template>
	<view class="index">
		<image src="../static/img/login.jpg" mode="widthFix"></image>
		<button type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" class="my_button" v-if="hasunionid == false">立即进入</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasunionid: false
			}
		},
		onLoad() {
			this.getunionid()
		},
		methods: {
			getunionid() {
				var self = this
				uni.getStorage({
				    key: 'unionid',
				    success(res) {
				        console.log(res.data)
						self.getunionidSuccess()
				    },fail(err) {
				    	console.log(err)
						self.hasunionid = false
				    }
				})
			},
			getunionidSuccess() {
				//有unionid直接调用获取token接口
				this.hasunionid = true
				
				//成功获取到token再进去主页
				setTimeout(() => {
					this.toHost()
				}, 1800)
			},
			bindGetUserInfo(res) {
				console.log(res.detail)
				console.log(JSON.stringify(res.detail.encryptedData))
				//没有unionid调用接口给后台加密信息，后台从中获取unionid返回token
				
				//成功获取到token再进去主页
				if (res.detail.errMsg == 'getUserInfo:ok') {
					this.toHost()
				}
			},
			toHost() {
				uni.switchTab({
					url: '/pages/host'
				})
			}
		}
	}
</script>

<style>
@import url('../common/common.css');
.index {
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	display: flex;
	justify-content: center;
	overflow: hidden;
}
.index>image {
	width: 100%
}
.index>button {
	position: absolute;
	bottom: 120rpx;
	width: 270rpx;
	font-size: 15px;
}
</style>
