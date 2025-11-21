"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/nvision/Chat-App-Datastride-/frontend/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nvision/Chat-App-Datastride-/frontend/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDdUM7QUFDTjtBQUVsQixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSixpREFBUUE7UUFBQ0MsT0FBT0EseUNBQUtBO2tCQUNwQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _messagesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagesSlice */ \"./store/messagesSlice.js\");\n/* harmony import */ var _suggestionsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggestionsSlice */ \"./store/suggestionsSlice.js\");\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        messages: _messagesSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        suggestions: _suggestionsSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrRDtBQUNKO0FBQ007QUFFN0MsTUFBTUcsUUFBUUgsZ0VBQWNBLENBQUM7SUFDbENJLFNBQVM7UUFDUEMsVUFBVUosc0RBQWVBO1FBQ3pCSyxhQUFhSix5REFBa0JBO0lBQ2pDO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzPzU2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IG1lc3NhZ2VzUmVkdWNlciBmcm9tIFwiLi9tZXNzYWdlc1NsaWNlXCI7XG5pbXBvcnQgc3VnZ2VzdGlvbnNSZWR1Y2VyIGZyb20gXCIuL3N1Z2dlc3Rpb25zU2xpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgbWVzc2FnZXM6IG1lc3NhZ2VzUmVkdWNlcixcbiAgICBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnNSZWR1Y2VyLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJtZXNzYWdlc1JlZHVjZXIiLCJzdWdnZXN0aW9uc1JlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJtZXNzYWdlcyIsInN1Z2dlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/messagesSlice.js":
/*!********************************!*\
  !*** ./store/messagesSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMessage: () => (/* binding */ addMessage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst messagesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"messages\",\n    initialState: {\n        items: []\n    },\n    reducers: {\n        addMessage (state, action) {\n            state.items.push(action.payload);\n        }\n    }\n});\nconst { addMessage } = messagesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messagesSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9tZXNzYWdlc1NsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZ0JBQWdCRCw2REFBV0EsQ0FBQztJQUNoQ0UsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE9BQU8sRUFBRTtJQUNYO0lBQ0FDLFVBQVU7UUFDUkMsWUFBV0MsS0FBSyxFQUFFQyxNQUFNO1lBQ3RCRCxNQUFNSCxLQUFLLENBQUNLLElBQUksQ0FBQ0QsT0FBT0UsT0FBTztRQUNqQztJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUVKLFVBQVUsRUFBRSxHQUFHTCxjQUFjVSxPQUFPLENBQUM7QUFDcEQsaUVBQWVWLGNBQWNXLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL21lc3NhZ2VzU2xpY2UuanM/YWRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IG1lc3NhZ2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwibWVzc2FnZXNcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgaXRlbXM6IFtdLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIGFkZE1lc3NhZ2Uoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUuaXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRNZXNzYWdlIH0gPSBtZXNzYWdlc1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBtZXNzYWdlc1NsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJtZXNzYWdlc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwicmVkdWNlcnMiLCJhZGRNZXNzYWdlIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/messagesSlice.js\n");

/***/ }),

/***/ "./store/suggestionsSlice.js":
/*!***********************************!*\
  !*** ./store/suggestionsSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSuggestions: () => (/* binding */ clearSuggestions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setSuggestions: () => (/* binding */ setSuggestions)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst suggestionsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"suggestions\",\n    initialState: {\n        items: []\n    },\n    reducers: {\n        setSuggestions: (state, action)=>{\n            state.items = action.payload;\n        },\n        clearSuggestions: (state)=>{\n            state.items = [];\n        }\n    }\n});\nconst { setSuggestions, clearSuggestions } = suggestionsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (suggestionsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdWdnZXN0aW9uc1NsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLG1CQUFtQkQsNkRBQVdBLENBQUM7SUFDbkNFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxPQUFPLEVBQUU7SUFDWDtJQUNBQyxVQUFVO1FBQ1JDLGdCQUFnQixDQUFDQyxPQUFPQztZQUN0QkQsTUFBTUgsS0FBSyxHQUFHSSxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FDLGtCQUFrQixDQUFDSDtZQUNqQkEsTUFBTUgsS0FBSyxHQUFHLEVBQUU7UUFDbEI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFRSxjQUFjLEVBQUVJLGdCQUFnQixFQUFFLEdBQUdULGlCQUFpQlUsT0FBTyxDQUFDO0FBQzdFLGlFQUFlVixpQkFBaUJXLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N1Z2dlc3Rpb25zU2xpY2UuanM/NTgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IHN1Z2dlc3Rpb25zU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwic3VnZ2VzdGlvbnNcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgaXRlbXM6IFtdLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldFN1Z2dlc3Rpb25zOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGNsZWFyU3VnZ2VzdGlvbnM6IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXRlbXMgPSBbXTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHNldFN1Z2dlc3Rpb25zLCBjbGVhclN1Z2dlc3Rpb25zIH0gPSBzdWdnZXN0aW9uc1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBzdWdnZXN0aW9uc1NsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzdWdnZXN0aW9uc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwicmVkdWNlcnMiLCJzZXRTdWdnZXN0aW9ucyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNsZWFyU3VnZ2VzdGlvbnMiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/suggestionsSlice.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();