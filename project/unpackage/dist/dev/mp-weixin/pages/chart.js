(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chart"],{

/***/ 190:
/*!***********************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/main.js?{"page":"pages%2Fchart"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chart = _interopRequireDefault(__webpack_require__(/*! ./pages/chart.vue */ 191));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chart.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 191:
/*!******************************************************!*\
  !*** F:/work/三一/sany-wechat/project/pages/chart.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.vue?vue&type=template&id=09e94c21& */ 192);
/* harmony import */ var _chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.vue?vue&type=script&lang=js& */ 194);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.vue?vue&type=style&index=0&lang=css& */ 197);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/work/三一/sany-wechat/project/pages/chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 192:
/*!*************************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=template&id=09e94c21& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chart.vue?vue&type=template&id=09e94c21& */ 193);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_template_id_09e94c21___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 193:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=template&id=09e94c21& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 194:
/*!*******************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chart.vue?vue&type=script&lang=js& */ 195);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














var _uCharts = _interopRequireDefault(__webpack_require__(/*! ../components/u-charts/u-charts.js */ 196));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
var self;var canvaColumn = null;var _default = { data: function data() {return { cWidth2: '', //横屏图表
      cHeight2: '', //横屏图表
      pixelRatio: 1, type: '' //1本月订单 2本月生产 3本月发货 4累计未清
    };}, onLoad: function onLoad(option) {//option为object类型，会序列化上个页面传递的参数
    this.type = option.type; //请求参数类型
    self = this;var that = this;wx.getSystemInfo({ success: function success(res) {self.cHeight2 = res.windowHeight + 50;
      } });

    this.cWidth2 = uni.upx2px(700);
    //this.cHeight2=uni.upx2px(1400);
    console.log(this.cHeight2);
  },
  mounted: function mounted() {var _this = this;
    uni.showLoading({
      title: '加载中' });

    setTimeout(function () {
      _this.getServerData();
    }, 1000);

  },
  methods: {
    getServerData: function getServerData() {
      var self = this;
      this.ajax({
        url: 'app/home/detail',
        data: {
          type: this.type },

        success: function success(res) {
          console.log(res);
          var data = res.data;
          var ColumnColumn = {};
          //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
          var categories = [];
          var series = [{
            name: '数量',
            data: [] }];

          data.forEach(function (item) {
            categories.push(item.spartName);
            series[0].data.push(item.num);
          });
          ColumnColumn.categories = categories;
          ColumnColumn.series = series;
          console.log(ColumnColumn);
          self.showColumnColumn("canvasColumn", ColumnColumn);
        } });

      // let ColumnColumn = {};
      // ColumnColumn.categories = ["泵车", "挖掘机", "重卡", "搅拌车", "起重机", "新能源","新能源","新能源","新能源"];
      // ColumnColumn.series = [{name: "成交量1", data: [35, 36, 31, 33, 13, 34,34,34,56]}, {name: "成交量2", data: [18, 27, 21, 24, 6, 28,12,45,36,19]}];
      // this.showColumnColumn("canvasColumn",ColumnColumn);
      // let ColumnColumn={categories:[],series:[]};

      // ColumnColumn.categories=res.data.data.ColumnB.categories;
      // ColumnColumn.series=res.data.data.ColumnB.series;
      // self.showColumnColumn("canvasColumn",ColumnColumn);
      uni.hideLoading();
    },
    showColumnColumn: function showColumnColumn(canvasId, chartData) {
      canvaColumn = new _uCharts.default({
        $this: self,
        canvasId: canvasId,
        type: 'column',
        legend: { show: true },
        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: self.pixelRatio,
        animation: true,
        rotate: true,



        categories: chartData.categories,
        series: chartData.series,
        enableScroll: true,
        xAxis: {
          disableGrid: true,
          itemCount: 10, //x轴单屏显示数据的数量，默认为5个
          scrollShow: false, //新增是否显示滚动条，默认false
          scrollAlign: 'left', //滚动条初始位置
          scrollBackgroundColor: '#F7F7FF', //默认为 #EFEBEF
          scrollColor: '#DEE7F7' //默认为 #A6A6A6
        },
        yAxis: {
          disableGrid: true

          //disabled:true
        },
        dataLabel: true,
        width: self.cWidth2 * self.pixelRatio,
        height: self.cHeight2 * self.pixelRatio,
        extra: {
          column: {
            type: 'group',
            width: 18,
            meter: {
              //这个是外层边框的宽度
              border: 2,
              //这个是内部填充颜色
              fillColor: '#fff' } } } });





    },
    touchColumn: function touchColumn(e) {
      canvaColumn.scrollStart(e);
      // canvaColumn.showToolTip(e, {
      // 	format: function (item, category) {
      // 		return category + ' ' + item.name + ':' + item.data 
      // 	}
      // });
    },
    moveLine: function moveLine(e) {
      canvaColumn.scroll(e);
    },
    touchEndLine: function touchEndLine(e) {
      canvaColumn.scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      // canvaColumn.showToolTip(e, {
      // 	format: function (item, category) {
      // 		return category + ' ' + item.name + ':' + item.data 
      // 	}
      // });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 197:
/*!***************************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chart.vue?vue&type=style&index=0&lang=css& */ 198);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/pages/chart.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[190,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/pages/chart.js.map