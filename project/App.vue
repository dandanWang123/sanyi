<script>
    export default {
        onLaunch: function() {
            console.log('App Launch');
            // #ifdef APP-PLUS
            // 锁定屏幕方向
            // plus.screen.lockOrientation('portrait-primary'); //锁定
            // // 检测升级
            // uni.request({
            //     url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
            //     data: {
            //         appid: plus.runtime.appid,
            //         version: plus.runtime.version,
            //         imei: plus.device.imei
            //     },
            //     success: (res) => {
            //         console.log('success', res);
            //         if (res.statusCode == 200 && res.data.isUpdate) {
            //             let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
            //             // 提醒用户更新
            //             uni.showModal({
            //                 title: '更新提示',
            //                 content: res.data.note ? res.data.note : '是否选择更新',
            //                 success: (showResult) => {
            //                     if (showResult.confirm) {
            //                         plus.runtime.openURL(openUrl);
            //                     }
            //                 }
            //             })
            //         }
            //     }
            // })

            // var domModule = weex.requireModule('dom');
            // domModule.addRule('fontFace', {
            //     'fontFamily': "uniicons",
            //     'src': "url('./static/uni.ttf')"
            // });
            // #endif
			
			//获取字典
			this.getDictHttp('web/order/dict/data/getListByDictType', 'sales_area')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		methods: {
			getDictHttp(dictUrl, dictType) {
				var self = this
				uni.request({
					url: dictUrl,
					data: {
						dictType
					},
					success:res=>{
						console.log(res.data.data)
						if(res.data.code == 0) {
							//成功
							self.dicHttpSuccess(res.data.data,'sales_area_options')
						}
					}
				})
			},
			dicHttpSuccess(data,options) {
				this.$scope.globalData[options] = []
				data.forEach(item => {
					this.$scope.globalData[options].push({
						value: item.dictValue,
						name: item.dictLabel
					})
				})
				console.log(this.$scope.globalData[options])
			}
		},
		globalData: {  
			/*定义全局变量，api地址，微信配置信息*/
		    baseUrl: '',
			/*三一的微信配置变量*/
			// appid: 'wx1dac6509f8703123',
			// secret: 'c43a5e66b8c3987b2f79a195ebaaf09f',
			/*测试用*/
			appid: 'wx23e97e8c346936ea',
			secret: '230bc762367e83faf849cadf1a8e00d0',
			
			lbbsaOption: [{
				value: '01',
				name: '非限制使用库存'
			},{
				value: '02',
				name: '质量检验库存'
			},{
				value: '03',
				name: '退货冻结库存'
			},{
				value: '04',
				name: '存储地级别的库存转储库存'
			},{
				value: '05',
				name: '工厂级别的库存转储库存'
			},{
				value: '06',
				name: '在途库存'
			},{
				value: '07',
				name: '冻结的库存'
			},{
				value: '08',
				name: '限制的库存'
			},{
				value: '09',
				name: '有约束的虚拟库存'
			}], //库存状态字典
			sales_area_options: [] //地区字典
		},
    }
</script>
<style>
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: #EDF1FD;
        height: 100%;
        font-size: 28upx;
        line-height: 1.8;
    }

    .uni-header-logo {
        padding: 30upx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10upx;
    }

    .uni-header-image {
        width: 100px;
        height: 100px;
    }

    .uni-hello-text {
        color: #7A7E83;
    }

    .uni-hello-addfile {
        text-align: center;
        line-height: 300upx;
        background: #FFF;
        padding: 50upx;
        margin-top: 10px;
        font-size: 38upx;
        color: #808080;
    }

    /* #endif*/
</style>
