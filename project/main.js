import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import $utils from './common'; 
import store from './store'
import moment from "moment"
// 添加统计
// const Stat = require('./statistics/dcloud-stat');
// Stat.init(Vue);
import Mock from './mock'

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.formatTime = function(time, formats){
	return moment(time).format(formats)
}
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.use($utils);

/*微信登录方法*/
function login() {
	uni.login({
		provider: 'weixin',
		success(loginRes) {
			console.log(loginRes.code)
			auth(loginRes.code)
		}
	})
}
login()
/*微信登录之后授权*/
function auth(code) {
	uni.request({
	    url: 'https://api.weixin.qq.com/sns/jscode2session',
	    data: {
			// appid: 'wx1dac6509f8703123',
			// secret: 'c43a5e66b8c3987b2f79a195ebaaf09f',
			appid: App.globalData.appid,
			secret: App.globalData.secret,
			js_code: code,
			grant_type: 'authorization_code'
	    },
	    success: (res) => {
	        console.log(res.data)
			if(res.data.unionid) {
				// 有unionid直接存起来
				uni.setStorage({
				    key: 'unionid',
				    data: res.data.unionid,
				    success: function () {}
				})
				return
			}
			//没有unionid，将session_key存起来，来传给后台获取解密信息中的unionid
			uni.setStorage({
			    key: 'session_key',
			    data: res.data.session_key,
			    success: function () {}
			})
	    }
	})
}
console.log('全局', App.globalData.appid, App.globalData.secret)
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
