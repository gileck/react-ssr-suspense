/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Main.jsx":
/*!******************!*\
  !*** ./Main.jsx ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Main: () => (/* binding */ Main)
/* harmony export */ });
// import React, {useState, useEffect} from 'react'
// import _ from 'lodash'
// import bigJSON from './bigJSON'
//
// const isServer = typeof window === 'undefined'
// const x = 100000
//
// function work() {
//     let a = ''
//     for (let i = 0; i < x; i++) {
//         a = a + JSON.stringify(bigJSON)
//     }
//     return a
// }
//
// function DoWork(props) {
//     work()
//     return props.children
// }
//
// function wrapPromise(promise) {
//     let status = 'pending'
//     let response
//
//     const suspender = promise.then(
//         (res) => {
//             status = 'success'
//             response = res
//         },
//         (err) => {
//             status = 'error'
//             response = err
//         }
//     )
//
//     const read = () => {
//         switch (status) {
//             case 'pending':
//                 throw suspender
//             case 'error':
//                 throw response
//             default:
//                 return response
//         }
//     }
//
//     return {read, status}
// }
//
// function SuspenseInner(props) {
//     // console.log('rendering suspense inner', props.api.status)
//     props.api.read()
//     return props.children
// }
//
//
// function BoxWrapper(props) {
//     console.log('rendering')
//     return props.children
// }
//
// // const createPromise = (ms) => new Promise((r) => setTimeout(r, ms))
// // const createPromise = (ms) => isServer ? new Promise((r) => {}) : new Promise((r) => setTimeout(r, ms))
// // const createPromise = (ms, id) => isServer ? Promise.resolve() : new Promise((r) => window.resolvers[id] = r)
// const createPromise = (ms, id) => isServer ? new Promise((r) => setTimeout(r, ms)) : new Promise((r) => window.resolvers[id] = r)
// // const createPromise = (ms, id) => new Promise((r) => setTimeout(r, ms))
//
//
// function EmptyWrapper(Comp) {
//     return function (props) {
//         return (
//             <BoxWrapper {...props}>
//                 <Comp {...props} />
//             </BoxWrapper>
//         )
//     }
// }
//
// export function SuspenseWrapper(Comp, ms, id) {
//
//     // const Fallback = isServer ? (props) => <Comp {...props} /> : () => <div/>
//     const Fallback = () => <Box>loading...</Box>
//     return function (props) {
//         const api = wrapPromise(createPromise(ms, id))
//         return (
//             // <IntersectionWrapper id={id}>
//                 <React.Suspense fallback={<Fallback {...props} />}>
//                     <SuspenseInner api={api}>
//                         <BoxWrapper {...props}>
//                             <Comp {...props} />
//                         </BoxWrapper>
//                     </SuspenseInner>
//                 </React.Suspense>
//              // </IntersectionWrapper>
//         )
//     }
// }
//
// function Box({children}) {
//     const [color, setColor] = useState('lightgray')
//     useEffect(() => {
//         setColor('lightblue')
//     }, [])
//     return <div style={{border: '1px solid black', width: '100px', padding: '20px', background: color}}>
//         {children}
//     </div>
// }
//
// function Comp(props) {
//     return <Box>
//         {props.children}
//     </Box>
// }
//
// if (!isServer) {
//     window.resolvers = {}
// }
//
// console.log(isServer ? 'server' : 'client')
//
// function IntersectionWrapper({id, children}) {
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting) {
//                 window.resolvers[id]()
//             }
//         })
//         observer.observe(document.getElementById(id))
//
//
//     }, [id])
//
//     function onComponentClick() {
//         console.log('click', id)
//         window.resolvers[id]()
//     }
//
//
//     return <div id={id}>
//         <button onClick={onComponentClick}>Click</button>
//         {children}
//     </div>
// }
//
// export function Main() {
//     const comps = _.range(0, 10).map((i) => SuspenseWrapper(Comp, i * 1000, i))
//     // const comps = _.range(0, 10).map((i) => EmptyWrapper(Comp, i * 1000, i))
//
//
//     return <div>
//         {
//             comps.map((C, i) => <div key={i}>
//                 <C>
//                     <DoWork>
//                         {i}
//                     </DoWork>
//                 </C>
//
//             </div>)
//         }
//     </div>
// }
//
// // 1.splitting the long task into smaller tasks
// // 2. selective hydration in the client side
// // 3. selective hydration in the server side
// // 4. selective hydration in both
// // 5. selective hydration with resolvers
// // 6. selective hydration with intersection observer

function Main() {
  return /*#__PURE__*/React.createElement("div", null);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./Main.jsx");


function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "https://unpkg.com/react@18.2.0/umd/react.development.js"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main__WEBPACK_IMPORTED_MODULE_1__.Main, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    src: "./app.bundle.js"
  })));
}
var MainComponent = _Main__WEBPACK_IMPORTED_MODULE_1__.Main;
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;