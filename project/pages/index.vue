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
				this.hasunionid = true
				setTimeout(() => {
					uni.switchTab({
						url: '/pages/host'
					})
				}, 1800)
			},
			bindGetUserInfo(res) {
				console.log(res.detail)
				console.log(JSON.stringify(res.detail.encryptedData))
				if (res.detail.errMsg == 'getUserInfo:ok') {
					uni.switchTab({
						url: '/pages/host'
					})
				}
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
