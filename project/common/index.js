import App from '../App'
exports.install = function(Vue, store, options) {
 	Vue.prototype.ajax = function(object) {
 		// var state = this.$store.state
 		// var contentType = 'application/x-www-form-urlencoded';
		var contentType = 'application/json;charset=utf-8';
 		var ip = App.globalData.baseUrl
		var token = uni.getStorageSync('token')
		var Cookie  = 'language=zh-CN; token=9f683117-1260-4f74-8173-461fe8b36a6e; token=9f683117-1260-4f74-8173-461fe8b36a6e; Authorization=Bearer%20eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ6aGFuZ3NhbiIsImRlcHRJZCI6ODAwMDAyMTQsImtpbGwiOjAsImNsaWVudF9pZCI6ImJzQXBwIiwicmVhbE5hbWUiOiLlvKDkuIkiLCJkZXB0TGlzdCI6W10sImFwcElkIjpudWxsLCJzY29wZSI6WyJhcHAiXSwibmFtZSI6InpoYW5nc2FuIiwiaWQiOjEyOTg1MjQwNjU2MTEwMDE4NTcsImV4cCI6MTYwMDQyMjY3OSwic3VwZXJBZG1pbiI6MCwianRpIjoiOWY2ODMxMTctMTI2MC00Zjc0LTgxNzMtNDYxZmU4YjM2YTZlIn0.OdPGC4JNXfeV_aZeb6jKSjkm-j2P0wSRgtPxGwUyjwCNTRtckW1aPMGp0lyktmL1YRraTqqxSPdW0Pe8J4sxrKpwj_eKf1wktXHT7FFkTBnl_zgmVqYNv25dFjhVCbTkI7QQOXdJOzX6h4yDsY1vnAgH-_mWQrJAM'
		token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ6aGFuZ3NhbiIsImRlcHRJZCI6ODAwMDAyMTQsImtpbGwiOjAsImNsaWVudF9pZCI6ImJzQXBwIiwicmVhbE5hbWUiOiLlvKDkuIkiLCJkZXB0TGlzdCI6W10sImFwcElkIjpudWxsLCJzY29wZSI6WyJhcHAiXSwibmFtZSI6InpoYW5nc2FuIiwiaWQiOjEyOTg1MjQwNjU2MTEwMDE4NTcsImV4cCI6MTYwMDQyMjY3OSwic3VwZXJBZG1pbiI6MCwianRpIjoiOWY2ODMxMTctMTI2MC00Zjc0LTgxNzMtNDYxZmU4YjM2YTZlIn0.OdPGC4JNXfeV_aZeb6jKSjkm-j2P0wSRgtPxGwUyjwCNTRtckW1aPMGp0lyktmL1YRraTqqxSPdW0Pe8J4sxrKpwj_eKf1wktXHT7FFkTBnl_zgmVqYNv25dFjhVCbTkI7QQOXdJOzX6h4yDsY1vnAgH-_mWQrJAMKQIBP_TYMg'
 		if (object.contentType) {
 			contentType = object.contentType;
 		}
 		if (object.ip) {
 			ip = object.ip;
 		}
		if (object.showLoading == true) {
			uni.showLoading({
				title: '加载中',
				mask:true
			})
		}
 		
 		var method = "GET"
 		if (object.type) {
 			method = object.type
 		}
		
 		
		
 		// if (object.url == '/api/mobile/user/login') {
 		// 	token = "123"
 		// } else {
 		// 	token = uni.getStorageSync('token').token;
			// //token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMzU4MiIsImlhdCI6MTU4Mzg1NTMwOCwic3ViIjoie1wic3VwcGxpZXJJZFwiOjQzOSxcImFjY291bnROYW1lXCI6XCIxMDAzNjBcIixcImlkXCI6MzM1ODIsXCJlbnRlcnByaXNlSWRcIjoxfSIsImV4cCI6MTU4Mzg5ODUwOH0.0P2HSDRLOu2B_wed1BaQ9mhGc8IiV9ysazYcSp6zoxU'
 		// 	if (!token) {
 		// 		uni.showToast({
 		// 			title: 'token失效!',
 		// 			duration: 1000
 		// 		});
 		// 		// setTimeout(function() {
 		// 		// 	uni.reLaunch({
 		// 		// 		url: '/pages/isc/login/login'
 		// 		// 	})
 		// 		// }, 1000)
 		// 	}
 		// }

 		uni.request({
 			url: ip + object.url,
 			data: object.data,
 			header: {
 				'content-type': contentType,
 				"Authorization": "Bearer " + token,
				'Cookie': Cookie
 			},
 			method: method,
 			success: ({
 				data
 			}) => {
				object.success(data)
 				// if (data.code == 0) {
					// // 0表示成功，其他值失败
 				// 	object.success(data)
 				// } else {
 				// 	uni.showModal({
 				// 		title: '提示',
 				// 		content: data.data || data.msg,
 				// 		showCancel: false,
 				// 	})
 				// }
 			},
 			complete(res) {
 				var code = res.statusCode
				uni.hideLoading()
				if (code != 200) {
					error(res.statusCode, '接口错误!' + res.data.msg);
					return
				}
				if(res.data.code && res.data.code == 500) {
					error(res.data.code, res.data.msg)
					return
				}
				if(res.data && res.data.code == 401) {
					error(res.data.code, '非法请求!' + res.data.msg)
				}
 			}
 		});

 		function error(code, tip) {
 			uni.showToast({
 				title: tip,
 				duration: 2000,
				icon:'none'
 			});
 			setTimeout(function() {
 				if (code == 401) {
 					uni.removeStorageSync('token');
 					uni.reLaunch({
 						url: '/pages/index'
 					})
 				}
 			}, 2200)
 		}
 	}
 };
