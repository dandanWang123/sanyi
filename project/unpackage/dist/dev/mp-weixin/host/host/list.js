(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["host/host/list"],{

/***/ 215:
/*!****************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/main.js?{"page":"host%2Fhost%2Flist"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./host/host/list.vue */ 216));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 216:
/*!*********************************************************!*\
  !*** F:/work/三一/sany-wechat/project/host/host/list.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=c39408c0& */ 217);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 219);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 221);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/work/三一/sany-wechat/project/host/host/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 217:
/*!****************************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=template&id=c39408c0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=c39408c0& */ 218);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_c39408c0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 218:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=template&id=c39408c0& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  "uni-load-more": () =>
    __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 328))
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 219:
/*!**********************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 220);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 220:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var SearchCom = function SearchCom() {return __webpack_require__.e(/*! import() | pages/commonCom/SearchCom */ "pages/commonCom/SearchCom").then(__webpack_require__.bind(null, /*! @/pages/commonCom/SearchCom.vue */ 335));};var uniLoadMore = function uniLoadMore() {return __webpack_require__.e(/*! import() | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/components/uni-load-more/uni-load-more.vue */ 328));};var skeleton = function skeleton() {return __webpack_require__.e(/*! import() | components/xinyi-skeleton/skeleton */ "components/xinyi-skeleton/skeleton").then(__webpack_require__.bind(null, /*! @/components/xinyi-skeleton/skeleton.vue */ 342));};var _default =







































{
  data: function data() {
    return {
      loadingPage: true,
      loadingstatus: 'more',
      loadingText: '加载中...',
      loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2--contentnomore
      contentText: {
        contentdown: '上拉显示更多',
        contentrefresh: '正在加载...',
        contentnomore: '没有更多数据了' },

      hasData: false,
      showSearch: false,
      data: [{
        name: '泵车',
        stock: 100,
        processed: 150 },
      {
        name: '拖泵',
        stock: 100,
        processed: 150 }],

      httpQuery: {
        pageNo: '',
        pageSize: 10,
        name: '' },

      searchData: [
      {
        queryName: 'name',
        type: 'text',
        placeholder: '请输入主机类型名称',
        value: '' }],


      evePageLen: "", //后台每页返回数据的长度，用来判断是否需要请求更多
      requestUrl: 'app/home/host/page' };

  },
  onLoad: function onLoad() {
    var self = this;
    this.loadData();
  },
  components: {
    uniLoadMore: uniLoadMore,
    skeleton: skeleton,
    SearchCom: SearchCom },

  methods: {
    initHttpQuery: function initHttpQuery() {
      for (var k in this.httpQuery) {
        this.httpQuery[k] = '';
      }
      this.httpQuery.pageSize = 10;
      this.httpQuery.pageNo = 1;
      this.searchData.forEach(function (item) {item.value = '';});
      console.log(this.httpQuery);
    },
    onPullDownRefresh: function onPullDownRefresh() {
      this.initHttpQuery();
      this.loadingPage = true;
      this.loadData();
    },
    onReachBottom: function onReachBottom() {
      //触底的时候请求数据，即为上拉加载更多
      this.getmore();
    },
    loadData: function loadData() {
      //下拉刷新
      var self = this;
      //第一次回去数据
      this.httpQuery.pageNo = 1;
      this.loadingType = 0;
      uni.showNavigationBarLoading();
      //请求接口获取数据
      this.httpGetListData();
    },
    getmore: function getmore() {
      var self = this;
      if (this.loadingType !== 0 && this.evePageLen < 10) {
        //loadingType!=0;直接返回
        this.loadingType = 2;
        this.loadingstatus = 'noMore';
        return false;
      }
      this.loadingType = 1;
      this.loadingstatus = 'loading';
      uni.showNavigationBarLoading(); //显示加载动画
      this.httpGetMoreListData();
    },
    httpGetListData: function httpGetListData() {var _this = this;
      uni.hideLoading();
      var self = this;
      // 数据请求
      this.ajax({
        url: this.requestUrl,
        data: this.httpQuery,
        success: function success(res) {
          console.log(res);
          var data = res.data;
          _this.loadingPage = false;
          _this.getListSuccess(data);
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    getListSuccess: function getListSuccess(data) {
      //加载数据成功函数，处理数据
      if (data.length != 0) {
        this.hasData = true;
      } else {
        this.hasData = false;
      }
      this.evePageLen = data.length;
      data.forEach(function (item) {
        for (var k in item) {
          if (item[k] == null) {item[k] = "";}
        }
      });
      this.data = data;
      if (this.evePageLen < 10) {
        this.loadingType = 2;
        this.loadingstatus = 'noMore';
      }
      uni.hideNavigationBarLoading();
      uni.stopPullDownRefresh();
    },
    httpGetMoreListData: function httpGetMoreListData() {var _this2 = this;
      //数据更请求
      var self = this;
      this.httpQuery.pageNo++;
      //数据更请求
      this.ajax({
        url: this.requestUrl,
        data: this.httpQuery,
        success: function success(res) {
          console.log(res);
          var data = res.data;
          _this2.getMoreListSuccess(data);
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    getMoreListSuccess: function getMoreListSuccess(data) {
      data.forEach(function (item) {
        for (var k in item) {
          if (item[k] == null) {item[k] = "";}
        }
      });
      this.data = this.data.concat(data);
      this.evePageLen = data.length;
      this.loadingType = 0; //将loadingType归0重置
      this.loadingstatus = 'loading';
      if (this.evePageLen == 0 || this.evePageLen < 10) {
        this.loadingType = 2;
        this.loadingstatus = 'noMore';
      }
      uni.hideNavigationBarLoading(); //关闭加载动画
      uni.stopPullDownRefresh();
    },
    openCloseSearch: function openCloseSearch() {
      var self = this;
      this.showSearch = !this.showSearch;
      if (this.showSearch == true) {
        setTimeout(function () {
          self.$refs.searchs.getInputtoBtn();
        }, 200);
      }
    },
    searchConfirm: function searchConfirm(searchData, updateData) {
      for (var k in searchData) {
        for (var key in this.httpQuery) {
          if (k == key) {this.httpQuery[key] = searchData[k];}
        }
      }
      this.searchData = updateData;
      console.log(this.httpQuery);
      this.openCloseSearch();
      this.loadingPage = true;
      this.data = [];
      this.loadData();
    },
    goto: function goto(categoryCode) {
      uni.navigateTo({
        url: '/host/host/hostList?categoryCode=' + categoryCode });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 221:
/*!******************************************************************************************!*\
  !*** F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 222);
/* harmony import */ var _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_hbuilderx_HBuilderX_2_6_1_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 222:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/work/三一/sany-wechat/project/host/host/list.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[215,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/host/host/list.js.map