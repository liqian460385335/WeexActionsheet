// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

  var __vue_exports__, __vue_options__
  var __vue_styles__ = []
  
  /* styles */
  __vue_styles__.push(__webpack_require__(3)
  )
  
  /* script */
  __vue_exports__ = __webpack_require__(4)
  
  /* template */
  var __vue_template__ = __webpack_require__(5)
  __vue_options__ = __vue_exports__ = __vue_exports__ || {}
  if (
    typeof __vue_exports__.default === "object" ||
    typeof __vue_exports__.default === "function"
  ) {
  if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
  __vue_options__ = __vue_exports__ = __vue_exports__.default
  }
  if (typeof __vue_options__ === "function") {
    __vue_options__ = __vue_options__.options
  }
  __vue_options__.__file = "/Users/liqian/Desktop/weexGit/weexdemo1/demo1/src/index.vue"
  __vue_options__.render = __vue_template__.render
  __vue_options__.staticRenderFns = __vue_template__.staticRenderFns
  __vue_options__._scopeId = "data-v-69778ebe"
  __vue_options__.style = __vue_options__.style || {}
  __vue_styles__.forEach(function (module) {
    for (var name in module) {
      __vue_options__.style[name] = module[name]
    }
  })
  if (typeof __register_static_styles__ === "function") {
    __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
  }
  
  module.exports = __vue_exports__
  module.exports.el = 'true'
  new Vue(module.exports)
  
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports) {
  
  module.exports = {
    "wrapper": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "logo": {
      "width": "424",
      "height": "200"
    },
    "greeting": {
      "textAlign": "center",
      "marginTop": "70",
      "fontSize": "50",
      "color": "#41b883"
    },
    "message": {
      "marginTop": "30",
      "marginRight": "30",
      "marginBottom": "30",
      "marginLeft": "30",
      "fontSize": "32",
      "color": "#727272"
    },
    "test": {
      "left": "30",
      "marginTop": "30"
    }
  }
  
  /***/ }),
  /* 4 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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
  
  exports.default = {
    name: "App",
    data: function data() {
      return {
        logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"
      };
    },
  
    methods: {
      click: function click() {
        console.log(1111);
        /*
            var eventModule =  weex.requireModule('LQWeex');
            console.log(eventModule);
            eventModule.getUrl('baiud',function(res){
              console.log(res);
            });
          */
        // var sheetModule = weex.requireModule("CDDActionSheet");
        // var eventModule = weex.requireModule("CDDCameraModule");
        // var uploadImagemodule = weex.requireModule("CDDQiNiuModule");
        // console.log(eventModule);
        // var List = ["相机", "从相册选取"];
        // sheetModule.setCancelButtonTitleColor('','',10);
        // sheetModule.initWithTitle("上传照片", "取消", List, function(res) {
        //   if (res != undefined) {
        //     eventModule.openCameraType(res, 0, function(res) {
        //       console.log(res);
        //       if (res != undefined) {
        //         uploadImagemodule.setQiNiuToken(
        //           "6bN0m2sxJU5dfG1s-7hlf9vqBBxLcUXinrDsDf37:BJrnykGrKe21Nz49pMIZp5W9niw=:eyJzY29wZSI6ImNkZGFuZyIsImRlYWRsaW5lIjoxNTIxNTMxNTMyfQ==",
        //           res,
        //           function(res) {
        //             console.log(res);
        //           }
        //         );
        //       }
        //     });
        //   }
        // });
        // sheetModule.setTitleColor('ff0000',10);
  
        var sheetModule = weex.requireModule("CDDActionSheet");
        var eventModule = weex.requireModule("CDDCameraModule");
        var uploadImagemodule = weex.requireModule("CDDQiNiuModule");
        console.log(eventModule);
        var List = ["相机", "从相册选取"];
  
        sheetModule.initWithTitle("", "取消", List, function (res) {
          if (res != undefined) {}
        });
      },
      click1: function click1() {
        var sheetModule = weex.requireModule("CDDActionSheet");
        var List = ["相机", "从相册选取"];
  
        sheetModule.initWithTitle("上传图片", "取消", List, function (res) {
          if (res != undefined) {}
        });
        sheetModule.setTitleColor("ff0000", 10);
      },
      click2: function click2() {
        var sheetModule = weex.requireModule("CDDActionSheet");
        var List = ["测试1", "测试2", "测试3"];
  
        sheetModule.initWithTitle("", "取消", List, function (res) {
          if (res != undefined) {}
        });
        var colorparm = {
          color: '42426f',
          font: '15'
        };
        var otherParm = {
          titleColor: '42426f',
          font: '15'
  
        };
        sheetModule.setCancelButtonTitleColorOrbgColorOrfont(colorparm);
        sheetModule.setTitleColor("ff0000", 10);
        sheetModule.setButtonIndexTitleColorOrbgColorOrfontOrIndex(otherParm);
      }
    }
  };
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports) {
  
  module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
    return _c('div', {
      staticClass: ["wrapper"]
    }, [_c('image', {
      staticClass: ["logo"],
      attrs: {
        "src": _vm.logo
      }
    }), _c('text', {
      staticClass: ["greeting"]
    }, [_vm._v("The environment is ready!")]), _c('text', {
      on: {
        "click": _vm.click
      }
    }, [_vm._v("调用")]), _c('text', {
      on: {
        "click": _vm.click1
      }
    }, [_vm._v("调用2")]), _c('text', {
      on: {
        "click": _vm.click2
      }
    }, [_vm._v("调用3")])])
  },staticRenderFns: []}
  module.exports.render._withStripped = true
  
  /***/ })
  /******/ ]);