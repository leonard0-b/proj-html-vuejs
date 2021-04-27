/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

Vue.config.devtools = true;
var app = new Vue({
  el: "#root",
  data: {
    logo: "./assets/img/logo.png",
    open: false,
    search: false,
    navBar: [{
      label: "Home",
      "class": "active",
      link: "https://digilander.libero.it/marinel/images/simpsons/casasimp.jpg"
    }, {
      label: "Apple",
      link: "https://www.antoniopaolillo.com/wp-content/uploads/2020/03/mela-rossa-1-scaled.jpg"
    }, {
      label: "Microsoft",
      link: "https://i.insider.com/5224bf6c6bb3f71361461a59?width=980&format=jpeg"
    }, {
      label: "Android",
      link: "https://www.starwarsaddicted.it/wp-content/uploads/2019/12/c3po.jpg"
    }, {
      label: "Forums",
      link: "https://www.youtube.com/watch?v=7mhi4Pbicgw"
    }, {
      label: "Contact Us",
      link: "https://paolocurtaz.it/wp-content/uploads/2019/10/no-grazie.jpg"
    }],
    cardLatestTop: [{
      img: "./assets/img/post_feat_img_25-320x202.jpg",
      title: "Morbi vitae dui euismond vulputate sollicitudin",
      date: "October 11th, 2015",
      comments: "2 Comments",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }, {
      img: "./assets/img/post_feat_img_24-320x202.jpg",
      title: "Vivamus pellenteque, felis quis varius",
      date: "October 11th, 2015",
      comments: "Comments off",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }, {
      img: "./assets/img/post_feat_img_23-320x202.jpg",
      title: "Donec ornare pretium eget scelisque justo",
      date: "October 11th, 2015",
      comments: "Comments off",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }],
    cardLatestBottom: [{
      img: "./assets/img/post_feat_img_22-320x202.jpg",
      title: "Fusci sollicitudin nunc sed placerat varius",
      date: "October 11th, 2015",
      comments: "Comments off",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }, {
      img: "./assets/img/post_feat_img_21-320x202.jpg",
      title: "Donec facilis sodales leo sit amet laoreet ",
      date: "October 11th, 2015",
      comments: "Comments off",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }, {
      img: "./assets/img/post_feat_img_20-320x202.jpg",
      title: "Proin eu purus sed aru aliquet curabir vens",
      date: "October 11th, 2015",
      comments: "Comments off",
      text: "Donec finibus sit amet orci eget ultricies. Praesent Posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl."
    }],
    miniCards: [{
      img: "./assets/img/post_feat_img_23-147x118.jpg",
      title: "Donec ornare pretium eget elet scelisque justo",
      date: "October 11th, 2015",
      comments: "Comments off"
    }, {
      img: "./assets/img/post_feat_img_22-147x118.jpg",
      title: "Fusci sollicitudin nunc sed placerat varius",
      date: "October 11th, 2015",
      comments: "Comments off"
    }, {
      img: "./assets/img/post_feat_img_20-147x118.jpg",
      title: "Proin eu purus sed aru aliquet curabir vens",
      date: "October 11th, 2015",
      comments: "Comments off"
    }],
    modules: [{
      icon: "fas fa-file-alt small",
      title: "News & Community",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fab fa-apple small",
      title: "Apple Forum",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fab fa-windows small",
      title: "Microsoft Forum",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fab fa-android",
      title: "Android Forum",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fas fa-coffee",
      title: "General Discussion",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fas fa-cubes",
      title: "Apps & Software",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fas fa-laptop",
      title: "Gadget & Stuff",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      icon: "fas fa-wrench",
      title: "Tutorials & Guides",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }],
    footerCol1: [{
      title: "avada tech forum",
      text: "In quis lectus sed leo elementum faucibus in dapibus dictum. Nulla molestie tortor nec lectus venenatis, sed blandit dui finibus.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }],
    footerCol2: [{
      title: "popular topics",
      text: "Donec finibus sit amet orci eget ultricies.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Praesent Posuere ante ut erat fringilla.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Nulla molestie tortor nec lectus venenatis.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }],
    footerCol3: [{
      title: "recent topics",
      text: "Donec finibus sit amet orci eget ultricies.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Praesent Posuere ante ut erat fringilla.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Nulla molestie tortor nec lectus venenatis.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }],
    footerCol4: [{
      title: "latest replies",
      text: "Donec finibus sit amet orci eget ultricies.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Praesent Posuere ante ut erat fringilla.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "Nulla molestie tortor nec lectus venenatis.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }, {
      text: "In quis lectus sed leo elementum faucibus in dapibus dictum.",
      link: "https://i.imgur.com/wrv4Ngp.jpeg"
    }],
    iconsFooter: [{
      "class": "fab fa-facebook-f",
      link: "https://i.imgur.com/wrv4Ngp.jpeg",
      name: "Facebook"
    }, {
      "class": "fab fa-twitter",
      link: "https://i.imgur.com/wrv4Ngp.jpeg",
      name: "Twitter"
    }, {
      "class": "fab fa-instagram",
      link: "https://i.imgur.com/wrv4Ngp.jpeg",
      name: "Instagram"
    }, {
      "class": "fab fa-youtube",
      link: "https://i.imgur.com/wrv4Ngp.jpeg",
      name: "Youtube"
    }]
  },
  methods: {
    showMobile: function showMobile() {
      if (this.open == false) {
        this.open = true;
      } else {
        this.open = false;
      }
    }
  }
});

/***/ }),

/***/ "./src/master.scss":
/*!*************************!*\
  !*** ./src/master.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;