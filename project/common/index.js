import App from '../App'
exports.install = function(Vue, store, options) {
 	Vue.prototype.ajax = function(object) {
 		// var state = this.$store.state
 		var contentType = 'application/x-www-form-urlencoded';
 		var ip = App.globalData.baseUrl
		
 		if (object.contentType) {
 			contentType = object.contentType;
 		}
 		if (object.ip) {
 			ip = object.ip;
 		}
 		uni.showLoading({
 			title: '加载中'
 		});
 		var method = "POST"
 		if (object.type) {
 			method = object.type
 		}

 		var token = '';
 		if (object.url == '/api/mobile/user/login') {
 			token = "123"
 		} else {
 			token = uni.getStorageSync('token').token;
			//token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMzU4MiIsImlhdCI6MTU4Mzg1NTMwOCwic3ViIjoie1wic3VwcGxpZXJJZFwiOjQzOSxcImFjY291bnROYW1lXCI6XCIxMDAzNjBcIixcImlkXCI6MzM1ODIsXCJlbnRlcnByaXNlSWRcIjoxfSIsImV4cCI6MTU4Mzg5ODUwOH0.0P2HSDRLOu2B_wed1BaQ9mhGc8IiV9ysazYcSp6zoxU'
 			if (!token) {
 				uni.showToast({
 					title: 'token失效!',
 					duration: 1000
 				});
 				// setTimeout(function() {
 				// 	uni.reLaunch({
 				// 		url: '/pages/isc/login/login'
 				// 	})
 				// }, 1000)
 			}
 		}

 		uni.request({
 			url: ip + object.url,
 			data: object.data,
 			header: {
 				'content-type': contentType,
 				"Authorization": "Bearer:" + token
 			},
 			method: method,
 			success: ({
 				data
 			}) => {
 				if (data.code == 0) {
					// 0表示成功，其他值失败
 					object.success(data)
 				} else {
 					uni.showModal({
 						title: '提示',
 						content: data.data || data.msg,
 						showCancel: false,

 					});
 				}
 			},
 			complete(res) {
 				var data = res.data
 				var code = res.statusCode
 				// if (code == 500 && data.code == 50000 && data.message == "token is expried") {
 				// 	error(50000, '身份信息失效!请重新登录');
 				// 	return
 				// }
 				// if (code == 500 && data.code != 50000) {
 				// 	error(500, '接口错误!' + data.message);
 				// 	return
 				// }
 				// if (code == 404) {
 				// 	error(404, '请求地址不存在!');
 				// 	return
 				// }
				if (code == 500) {
					error(500, '接口错误!' + data.message || data.msg);
					return
				}
 				uni.hideLoading()
 			}
 		});

 		function error(code, tip) {
 			uni.showToast({
 				title: tip,
 				duration: 1000
 			});
 			// setTimeout(function() {
 			// 	if (code == 50000) {
 			// 		uni.removeStorageSync('token');
 			// 		uni.removeStorageSync('info');
 			// 		uni.reLaunch({
 			// 			url: '/pages/isc/login/login'
 			// 		})
 			// 	}
 			// }, 1200)
 		}
 	}
 };
