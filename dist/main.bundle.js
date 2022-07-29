/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Functional styling;\\n * These styles are required for noUiSlider to function.\\n * You don't need to change these rules to apply your design.\\n */\\n.noUi-target,\\n.noUi-target * {\\n  -webkit-touch-callout: none;\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\\n  -webkit-user-select: none;\\n  -ms-touch-action: none;\\n  touch-action: none;\\n  -ms-user-select: none;\\n  -moz-user-select: none;\\n  user-select: none;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box; }\\n\\n.noUi-target {\\n  position: relative; }\\n\\n.noUi-base,\\n.noUi-connects {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  z-index: 1; }\\n\\n/* Wrapper for all connect elements.\\n */\\n.noUi-connects {\\n  overflow: hidden;\\n  z-index: 0; }\\n\\n.noUi-connect,\\n.noUi-origin {\\n  will-change: transform;\\n  position: absolute;\\n  z-index: 1;\\n  top: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  -ms-transform-origin: 0 0;\\n  -webkit-transform-origin: 0 0;\\n  -webkit-transform-style: preserve-3d;\\n  transform-origin: 0 0;\\n  -webkit-transform-style: flat;\\n          transform-style: flat; }\\n\\n/* Offset direction\\n */\\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\\n  left: 0;\\n  right: auto; }\\n\\n/* Give origins 0 height/width so they don't interfere with clicking the\\n * connect elements.\\n */\\n.noUi-vertical .noUi-origin {\\n  top: -100%;\\n  width: 0; }\\n\\n.noUi-horizontal .noUi-origin {\\n  height: 0; }\\n\\n.noUi-handle {\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n  position: absolute; }\\n\\n.noUi-touch-area {\\n  height: 100%;\\n  width: 100%; }\\n\\n.noUi-state-tap .noUi-connect,\\n.noUi-state-tap .noUi-origin {\\n  -webkit-transition: transform 0.3s;\\n  -webkit-transition: -webkit-transform 0.3s;\\n  transition: -webkit-transform 0.3s;\\n  transition: transform 0.3s;\\n  transition: transform 0.3s, -webkit-transform 0.3s; }\\n\\n.noUi-state-drag * {\\n  cursor: inherit !important; }\\n\\n/* Slider size and handle placement;\\n */\\n.noUi-horizontal {\\n  height: 18px; }\\n\\n.noUi-horizontal .noUi-handle {\\n  width: 34px;\\n  height: 28px;\\n  right: -17px;\\n  top: -6px; }\\n\\n.noUi-vertical {\\n  width: 18px; }\\n\\n.noUi-vertical .noUi-handle {\\n  width: 28px;\\n  height: 34px;\\n  right: -6px;\\n  bottom: -17px; }\\n\\n.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\\n  left: -17px;\\n  right: auto; }\\n\\n/* Styling;\\n * Giving the connect element a border radius causes issues with using transform: scale\\n */\\n.noUi-target {\\n  background: #FAFAFA;\\n  border-radius: 4px;\\n  border: 1px solid #D3D3D3;\\n  -webkit-box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;\\n          box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB; }\\n\\n.noUi-connects {\\n  border-radius: 3px; }\\n\\n.noUi-connect {\\n  background: plum; }\\n\\n/* Handles and cursors;\\n */\\n.noUi-draggable {\\n  cursor: ew-resize; }\\n\\n.noUi-vertical .noUi-draggable {\\n  cursor: ns-resize; }\\n\\n.noUi-handle {\\n  border: 1px solid #D9D9D9;\\n  border-radius: 3px;\\n  background: #FFF;\\n  cursor: default;\\n  -webkit-box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;\\n          box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB; }\\n\\n.noUi-active {\\n  -webkit-box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\\n          box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB; }\\n\\n/* Handle stripes;\\n */\\n.noUi-handle:before,\\n.noUi-handle:after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  height: 14px;\\n  width: 1px;\\n  background: #E8E7E6;\\n  left: 14px;\\n  top: 6px; }\\n\\n.noUi-handle:after {\\n  left: 17px; }\\n\\n.noUi-vertical .noUi-handle:before,\\n.noUi-vertical .noUi-handle:after {\\n  width: 14px;\\n  height: 1px;\\n  left: 6px;\\n  top: 14px; }\\n\\n.noUi-vertical .noUi-handle:after {\\n  top: 17px; }\\n\\n/* Disabled state;\\n */\\n[disabled] .noUi-connect {\\n  background: #B8B8B8; }\\n\\n[disabled].noUi-target,\\n[disabled].noUi-handle,\\n[disabled] .noUi-handle {\\n  cursor: not-allowed; }\\n\\n/* Base;\\n *\\n */\\n.noUi-pips,\\n.noUi-pips * {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box; }\\n\\n.noUi-pips {\\n  position: absolute;\\n  color: #999; }\\n\\n/* Values;\\n *\\n */\\n.noUi-value {\\n  position: absolute;\\n  white-space: nowrap;\\n  text-align: center; }\\n\\n.noUi-value-sub {\\n  color: #ccc;\\n  font-size: 10px; }\\n\\n/* Markings;\\n *\\n */\\n.noUi-marker {\\n  position: absolute;\\n  background: #CCC; }\\n\\n.noUi-marker-sub {\\n  background: #AAA; }\\n\\n.noUi-marker-large {\\n  background: #AAA; }\\n\\n/* Horizontal layout;\\n *\\n */\\n.noUi-pips-horizontal {\\n  padding: 10px 0;\\n  height: 80px;\\n  top: 100%;\\n  left: 0;\\n  width: 100%; }\\n\\n.noUi-value-horizontal {\\n  -webkit-transform: translate(-50%, 50%);\\n  transform: translate(-50%, 50%); }\\n\\n.noUi-rtl .noUi-value-horizontal {\\n  -webkit-transform: translate(50%, 50%);\\n  transform: translate(50%, 50%); }\\n\\n.noUi-marker-horizontal.noUi-marker {\\n  margin-left: -1px;\\n  width: 2px;\\n  height: 5px; }\\n\\n.noUi-marker-horizontal.noUi-marker-sub {\\n  height: 10px; }\\n\\n.noUi-marker-horizontal.noUi-marker-large {\\n  height: 15px; }\\n\\n/* Vertical layout;\\n *\\n */\\n.noUi-pips-vertical {\\n  padding: 0 10px;\\n  height: 100%;\\n  top: 0;\\n  left: 100%; }\\n\\n.noUi-value-vertical {\\n  -webkit-transform: translate(0, -50%);\\n  transform: translate(0, -50%);\\n  padding-left: 25px; }\\n\\n.noUi-rtl .noUi-value-vertical {\\n  -webkit-transform: translate(0, 50%);\\n  transform: translate(0, 50%); }\\n\\n.noUi-marker-vertical.noUi-marker {\\n  width: 5px;\\n  height: 2px;\\n  margin-top: -1px; }\\n\\n.noUi-marker-vertical.noUi-marker-sub {\\n  width: 10px; }\\n\\n.noUi-marker-vertical.noUi-marker-large {\\n  width: 15px; }\\n\\n.noUi-tooltip {\\n  display: block;\\n  position: absolute;\\n  border: 1px solid #D9D9D9;\\n  border-radius: 3px;\\n  background: #fff;\\n  color: #000;\\n  padding: 5px;\\n  text-align: center;\\n  white-space: nowrap; }\\n\\n.noUi-horizontal .noUi-tooltip {\\n  -webkit-transform: translate(-50%, 0);\\n  transform: translate(-50%, 0);\\n  left: 50%;\\n  bottom: 120%; }\\n\\n.noUi-vertical .noUi-tooltip {\\n  -webkit-transform: translate(0, -50%);\\n  transform: translate(0, -50%);\\n  top: 50%;\\n  right: 120%; }\\n\\n.noUi-horizontal .noUi-origin > .noUi-tooltip {\\n  -webkit-transform: translate(50%, 0);\\n  transform: translate(50%, 0);\\n  left: auto;\\n  bottom: 10px; }\\n\\n.noUi-vertical .noUi-origin > .noUi-tooltip {\\n  -webkit-transform: translate(0, -18px);\\n  transform: translate(0, -18px);\\n  top: auto;\\n  right: 28px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://onlinestore/./node_modules/nouislider/dist/nouislider.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/favs2.png */ \"./src/assets/icons/favs2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header, .header .header__menu, .header .header__bar, .main, .main .card_little, .main .card_little .price-wrapper, .main .sidebar, .main .sidebar .sidebar__cart_title, .main .sidebar .total, .main .sidebar .sidebar__filters, .main .sidebar .sidebar__filters .filters__colors_block, .products .products__favorites, .products .products__favorites .card__info, .products .products__favorites .card__info .card__price, .products .products__sort, .products .products__wrapper, .products .products__wrapper .card .card__info, .products .products__wrapper .card .card__info .card__price {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row; }\\n\\n* {\\n  margin: 0px;\\n  padding: 0px;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  text-decoration: none;\\n  list-style: none; }\\n\\n.display-none {\\n  display: none; }\\n\\n.subtitle {\\n  text-transform: uppercase;\\n  font-weight: 600;\\n  margin: 10px; }\\n\\n.text {\\n  color: #676A74; }\\n\\n.header {\\n  height: 10vh;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  border-bottom: 1px solid #eee; }\\n  .header .header__menu {\\n    width: 30vw;\\n    -ms-flex-pack: distribute;\\n        justify-content: space-around; }\\n  .header .header__bar {\\n    width: 15vw;\\n    -ms-flex-pack: distribute;\\n        justify-content: space-around;\\n    border-left: 1px solid #eee; }\\n    .header .header__bar .favorites {\\n      -webkit-transition: .1s;\\n      transition: .1s; }\\n    .header .header__bar .favorites:hover {\\n      cursor: pointer;\\n      -webkit-animation: heartbeat 1s infinite;\\n              animation: heartbeat 1s infinite; }\\n    .header .header__bar .favorites:active {\\n      -webkit-transform: translateY(1px);\\n              transform: translateY(1px); }\\n    .header .header__bar .favs-active {\\n      background-color: plum; }\\n    .header .header__bar .search-btn {\\n      cursor: pointer;\\n      -webkit-transition: 0.1s;\\n      transition: 0.1s; }\\n    .header .header__bar .search-btn:active {\\n      -webkit-transform: translateY(1px);\\n              transform: translateY(1px); }\\n    .header .header__bar .search-btn_active {\\n      background-color: plum; }\\n\\nfieldset {\\n  border: none; }\\n\\n.main .card_little .card__img_little {\\n  width: 50px; }\\n\\n.main .card_little .card__price_little {\\n  color: purple; }\\n\\n.main .card_little .remove-from-card {\\n  font-weight: 900;\\n  color: purple;\\n  cursor: pointer;\\n  margin-left: auto;\\n  margin-right: 15px; }\\n\\n.main .card-appear {\\n  -webkit-animation-duration: 0.5s;\\n          animation-duration: 0.5s;\\n  -webkit-animation-name: card;\\n          animation-name: card;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes card {\\n  from {\\n    margin-left: -300px; }\\n  to {\\n    margin-left: 0px; } }\\n\\n@keyframes card {\\n  from {\\n    margin-left: -300px; }\\n  to {\\n    margin-left: 0px; } }\\n\\n.main .sidebar {\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  width: 20vw;\\n  border-right: 1px solid #eee;\\n  margin-left: 3vw;\\n  gap: 3vh; }\\n  .main .sidebar .sidebar__cart_title p {\\n    -ms-flex-item-align: end;\\n        align-self: flex-end; }\\n  .main .sidebar .sidebar__cart_title .cart-icon {\\n    width: 30px;\\n    height: 30px; }\\n  .main .sidebar .sidebar__cart_title .cards-quantity {\\n    color: purple;\\n    font-weight: 900; }\\n  .main .sidebar .sidebar__cart_title .remove-all {\\n    color: purple;\\n    border: 2px solid purple;\\n    font-size: smaller;\\n    padding: 2px;\\n    display: none;\\n    cursor: pointer;\\n    margin-left: auto;\\n    margin-right: 15%; }\\n  .main .sidebar .sidebar__cart_title .remove-all:hover {\\n    background-color: purple;\\n    color: white; }\\n  .main .sidebar .total {\\n    margin-left: 20%;\\n    border-top: 1px solid gray; }\\n    .main .sidebar .total .total__sum {\\n      margin-left: 10px;\\n      color: purple;\\n      font-weight: 900; }\\n  .main .sidebar .sidebar__filters {\\n    -webkit-box-orient: vertical;\\n    -webkit-box-direction: normal;\\n        -ms-flex-direction: column;\\n            flex-direction: column;\\n    gap: 3vh; }\\n    .main .sidebar .sidebar__filters .filters__colors_block {\\n      margin: 7px;\\n      cursor: pointer;\\n      -webkit-box-align: center;\\n          -ms-flex-align: center;\\n              align-items: center;\\n      width: 50%; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle {\\n        margin-right: 5px;\\n        border-radius: 50%;\\n        width: 15px;\\n        height: 15px; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_red {\\n        background-color: red;\\n        border: 1px solid red; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_black {\\n        background-color: black;\\n        border: 1px solid black; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_yellow {\\n        background-color: yellow;\\n        border: 1px solid yellow; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_green {\\n        background-color: green;\\n        border: 1px solid green; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_blue {\\n        background-color: blue;\\n        border: 1px solid blue; }\\n      .main .sidebar .sidebar__filters .filters__colors_block .color_circle_white {\\n        background-color: white;\\n        border: 1px solid #676A74; }\\n    .main .sidebar .sidebar__filters .color_active {\\n      background-color: plum;\\n      width: opx;\\n      -webkit-animation-duration: .7s;\\n              animation-duration: .7s;\\n      -webkit-animation-name: color-active;\\n              animation-name: color-active;\\n      -webkit-animation-fill-mode: forwards;\\n              animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes color-active {\\n  from {\\n    width: 0px;\\n    opacity: 0; }\\n  to {\\n    width: 50%;\\n    opacity: 1; } }\\n\\n@keyframes color-active {\\n  from {\\n    width: 0px;\\n    opacity: 0; }\\n  to {\\n    width: 50%;\\n    opacity: 1; } }\\n  .main .sidebar .color_remove {\\n    color: purple;\\n    display: none;\\n    margin-left: auto;\\n    margin-right: 10px; }\\n  .main .sidebar .display-flex {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex; }\\n\\n.products {\\n  background-color: #eee; }\\n  .products .products__favorites {\\n    background-color: #eee;\\n    width: 80vw;\\n    height: 100%;\\n    position: absolute;\\n    z-index: 5;\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    gap: 20px;\\n    padding: 20px; }\\n    .products .products__favorites .card__info {\\n      -ms-flex-pack: distribute;\\n          justify-content: space-around;\\n      background-color: white;\\n      height: 15%; }\\n      .products .products__favorites .card__info .card__price {\\n        color: #f231f2;\\n        font-weight: 1000;\\n        font-size: 1.2em;\\n        -webkit-box-align: center;\\n            -ms-flex-align: center;\\n                align-items: center; }\\n  .products .products__sort {\\n    -webkit-box-pack: center;\\n        -ms-flex-pack: center;\\n            justify-content: center; }\\n  .products .search-bar {\\n    width: 0px;\\n    height: 50px;\\n    opacity: 0;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    padding-left: 20px;\\n    font-size: 1em;\\n    position: absolute;\\n    right: 0; }\\n  .products .search-bar:focus {\\n    outline: none !important; }\\n  .products .search-bar:focus {\\n    border: 2px solid purple; }\\n  .products .display-flex {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex; }\\n  .products .products__wrapper {\\n    -ms-flex-wrap: wrap;\\n        flex-wrap: wrap;\\n    -ms-flex-pack: distribute;\\n        justify-content: space-around;\\n    width: 80vw; }\\n    .products .products__wrapper .card {\\n      margin-top: 3%;\\n      -webkit-box-orient: vertical;\\n      -webkit-box-direction: normal;\\n          -ms-flex-direction: column;\\n              flex-direction: column; }\\n      .products .products__wrapper .card .card__hover_wrapper {\\n        display: -webkit-box;\\n        display: -ms-flexbox;\\n        display: flex;\\n        width: 333px;\\n        height: 466px; }\\n        .products .products__wrapper .card .card__hover_wrapper .card__hover {\\n          width: 333px;\\n          height: 466px;\\n          position: absolute;\\n          background-color: plum;\\n          z-index: 1;\\n          opacity: 0;\\n          cursor: pointer;\\n          -webkit-transition: all 200ms ease-out;\\n          transition: all 200ms ease-out; }\\n          .products .products__wrapper .card .card__hover_wrapper .card__hover .add_to_cart {\\n            position: absolute;\\n            top: 70%;\\n            left: 50%;\\n            width: 152px;\\n            font-size: 16px;\\n            margin-left: -78px;\\n            border: 2px solid #fff;\\n            color: #fff;\\n            text-align: center;\\n            padding: 10px 0;\\n            opacity: 1;\\n            -webkit-transition: all 200ms ease-out;\\n            transition: all 200ms ease-out; }\\n          .products .products__wrapper .card .card__hover_wrapper .card__hover .add_to_cart:hover {\\n            background-color: #fff;\\n            color: plum;\\n            cursor: pointer; }\\n          .products .products__wrapper .card .card__hover_wrapper .card__hover .in_cart {\\n            background-color: #fff;\\n            color: plum; }\\n        .products .products__wrapper .card .card__hover_wrapper .opacity-appear {\\n          opacity: 0.8; }\\n        .products .products__wrapper .card .card__hover_wrapper .card__hover:hover {\\n          opacity: 0.7; }\\n        .products .products__wrapper .card .card__hover_wrapper .card__hover_active {\\n          opacity: 0.7; }\\n      .products .products__wrapper .card .card__favs {\\n        position: absolute;\\n        width: 50px;\\n        height: 50px;\\n        cursor: pointer;\\n        z-index: 2; }\\n      .products .products__wrapper .card .card__favs:hover {\\n        -webkit-animation: heartbeat 1s infinite;\\n                animation: heartbeat 1s infinite; }\\n\\n@-webkit-keyframes heartbeat {\\n  0% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1); }\\n  20% {\\n    -webkit-transform: scale(1.1);\\n            transform: scale(1.1); }\\n  40% {\\n    -webkit-transform: scale(1.2);\\n            transform: scale(1.2); } }\\n\\n@keyframes heartbeat {\\n  0% {\\n    -webkit-transform: scale(1);\\n            transform: scale(1); }\\n  20% {\\n    -webkit-transform: scale(1.1);\\n            transform: scale(1.1); }\\n  40% {\\n    -webkit-transform: scale(1.2);\\n            transform: scale(1.2); } }\\n      .products .products__wrapper .card .card__favs_active {\\n        background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n      .products .products__wrapper .card .card__info {\\n        -ms-flex-pack: distribute;\\n            justify-content: space-around;\\n        background-color: white;\\n        height: 20%; }\\n        .products .products__wrapper .card .card__info .card__price {\\n          color: #f231f2;\\n          font-weight: 1000;\\n          font-size: 1.2em;\\n          -webkit-box-align: center;\\n              -ms-flex-align: center;\\n                  align-items: center; }\\n\\n#slider {\\n  margin-top: 40px;\\n  margin-right: 20px; }\\n\\n.reset-slider {\\n  cursor: pointer;\\n  width: 35%;\\n  height: 25px;\\n  margin-left: 20%;\\n  margin-top: 30px;\\n  border: 2px solid purple;\\n  color: purple;\\n  text-align: center;\\n  padding-top: 5px; }\\n\\n.reset-slider:hover {\\n  background-color: purple;\\n  color: white; }\\n\\n.reset-slider:active {\\n  -webkit-transform: translateY(2px);\\n          transform: translateY(2px); }\\n\\n.card__hover_wrapper {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  width: 333px;\\n  height: 466px; }\\n  .card__hover_wrapper .card__hover {\\n    width: 333px;\\n    height: 466px;\\n    position: absolute;\\n    background-color: plum;\\n    z-index: 1;\\n    opacity: 0;\\n    cursor: pointer;\\n    -webkit-transition: all 200ms ease-out;\\n    transition: all 200ms ease-out; }\\n    .card__hover_wrapper .card__hover .add_to_cart {\\n      position: absolute;\\n      top: 70%;\\n      left: 50%;\\n      width: 152px;\\n      font-size: 16px;\\n      margin-left: -78px;\\n      border: 2px solid #fff;\\n      color: #fff;\\n      text-align: center;\\n      padding: 10px 0;\\n      opacity: 1;\\n      -webkit-transition: all 200ms ease-out;\\n      transition: all 200ms ease-out; }\\n    .card__hover_wrapper .card__hover .add_to_cart:hover {\\n      background-color: #fff;\\n      color: plum;\\n      cursor: pointer; }\\n    .card__hover_wrapper .card__hover .in_cart {\\n      background-color: #fff;\\n      color: plum; }\\n  .card__hover_wrapper .opacity-appear {\\n    opacity: 0.8; }\\n  .card__hover_wrapper .card__hover:hover {\\n    opacity: 0.7; }\\n  .card__hover_wrapper .card__hover_active {\\n    opacity: 0.7; }\\n\\n.card__favs {\\n  position: absolute;\\n  width: 50px;\\n  height: 50px;\\n  cursor: pointer;\\n  z-index: 2; }\\n\\n.card__favs_active {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n\\n.no-favs,\\n.no-results {\\n  margin: 20%;\\n  font-size: 0px;\\n  position: absolute;\\n  bottom: 0; }\\n\\n.appear {\\n  -webkit-animation-duration: .4s;\\n          animation-duration: .4s;\\n  -webkit-animation-name: no-appear;\\n          animation-name: no-appear;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes no-appear {\\n  from {\\n    bottom: 0;\\n    font-size: 0px; }\\n  to {\\n    bottom: 100px;\\n    font-size: 1.6em; } }\\n\\n@keyframes no-appear {\\n  from {\\n    bottom: 0;\\n    font-size: 0px; }\\n  to {\\n    bottom: 100px;\\n    font-size: 1.6em; } }\\n\\n.hide {\\n  -webkit-animation-duration: .5s;\\n          animation-duration: .5s;\\n  -webkit-animation-name: favs;\\n          animation-name: favs;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes favs {\\n  from {\\n    bottom: 100px;\\n    font-size: 1.6em; }\\n  to {\\n    bottom: 300px;\\n    font-size: 0px; } }\\n\\n@keyframes favs {\\n  from {\\n    bottom: 100px;\\n    font-size: 1.6em; }\\n  to {\\n    bottom: 300px;\\n    font-size: 0px; } }\\n\\n.display-flex {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n.search-appear {\\n  -webkit-animation-duration: .7s;\\n          animation-duration: .7s;\\n  -webkit-animation-name: search-appear;\\n          animation-name: search-appear;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes search-appear {\\n  from {\\n    width: 0px;\\n    opacity: 0; }\\n  to {\\n    width: 20vw;\\n    opacity: 1; } }\\n\\n@keyframes search-appear {\\n  from {\\n    width: 0px;\\n    opacity: 0; }\\n  to {\\n    width: 20vw;\\n    opacity: 1; } }\\n\\n.search-disappear {\\n  -webkit-animation-duration: .7s;\\n          animation-duration: .7s;\\n  -webkit-animation-name: search-disappear;\\n          animation-name: search-disappear;\\n  -webkit-animation-fill-mode: forwards;\\n          animation-fill-mode: forwards; }\\n\\n@-webkit-keyframes search-disappear {\\n  from {\\n    width: 20vw;\\n    opacity: 1; }\\n  to {\\n    width: 1;\\n    opacity: 20vw; } }\\n\\n@keyframes search-disappear {\\n  from {\\n    width: 20vw;\\n    opacity: 1; }\\n  to {\\n    width: 1;\\n    opacity: 20vw; } }\\n\\n.red {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: red;\\n  border: 1px solid red;\\n  color: rgba(0, 0, 0, 0); }\\n\\n.yellow {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: yellow;\\n  border: 1px solid yellow;\\n  color: rgba(0, 0, 0, 0); }\\n\\n.blue {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: blue;\\n  border: 1px solid blue;\\n  color: rgba(0, 0, 0, 0); }\\n\\n.green {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: green;\\n  border: 1px solid green;\\n  color: rgba(0, 0, 0, 0); }\\n\\n.black {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: black;\\n  border: 1px solid black;\\n  color: rgba(0, 0, 0, 0); }\\n\\n.white {\\n  margin-right: 5px;\\n  border-radius: 50%;\\n  width: 15px;\\n  height: 15px;\\n  background-color: white;\\n  border: 1px solid grey;\\n  color: rgba(0, 0, 0, 0); }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://onlinestore/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://onlinestore/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://onlinestore/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://onlinestore/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/products/1.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/1.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/1.jpg?");

/***/ }),

/***/ "./src/assets/products/2.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/2.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"2.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/2.jpg?");

/***/ }),

/***/ "./src/assets/products/3.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/3.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/3.jpg?");

/***/ }),

/***/ "./src/assets/products/4.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/4.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/4.jpg?");

/***/ }),

/***/ "./src/assets/products/5.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/5.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/5.jpg?");

/***/ }),

/***/ "./src/assets/products/6.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/6.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/6.jpg?");

/***/ }),

/***/ "./src/assets/products/7.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/7.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/7.jpg?");

/***/ }),

/***/ "./src/assets/products/8.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/8.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/8.jpg?");

/***/ }),

/***/ "./src/assets/products/9.jpg":
/*!***********************************!*\
  !*** ./src/assets/products/9.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"9.jpg\");\n\n//# sourceURL=webpack://onlinestore/./src/assets/products/9.jpg?");

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.js":
/*!****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("(function (global, factory) {\n     true ? factory(exports) :\n    0;\n})(this, (function (exports) { 'use strict';\n\n    exports.PipsMode = void 0;\n    (function (PipsMode) {\n        PipsMode[\"Range\"] = \"range\";\n        PipsMode[\"Steps\"] = \"steps\";\n        PipsMode[\"Positions\"] = \"positions\";\n        PipsMode[\"Count\"] = \"count\";\n        PipsMode[\"Values\"] = \"values\";\n    })(exports.PipsMode || (exports.PipsMode = {}));\n    exports.PipsType = void 0;\n    (function (PipsType) {\n        PipsType[PipsType[\"None\"] = -1] = \"None\";\n        PipsType[PipsType[\"NoValue\"] = 0] = \"NoValue\";\n        PipsType[PipsType[\"LargeValue\"] = 1] = \"LargeValue\";\n        PipsType[PipsType[\"SmallValue\"] = 2] = \"SmallValue\";\n    })(exports.PipsType || (exports.PipsType = {}));\n    //region Helper Methods\n    function isValidFormatter(entry) {\n        return isValidPartialFormatter(entry) && typeof entry.from === \"function\";\n    }\n    function isValidPartialFormatter(entry) {\n        // partial formatters only need a to function and not a from function\n        return typeof entry === \"object\" && typeof entry.to === \"function\";\n    }\n    function removeElement(el) {\n        el.parentElement.removeChild(el);\n    }\n    function isSet(value) {\n        return value !== null && value !== undefined;\n    }\n    // Bindable version\n    function preventDefault(e) {\n        e.preventDefault();\n    }\n    // Removes duplicates from an array.\n    function unique(array) {\n        return array.filter(function (a) {\n            return !this[a] ? (this[a] = true) : false;\n        }, {});\n    }\n    // Round a value to the closest 'to'.\n    function closest(value, to) {\n        return Math.round(value / to) * to;\n    }\n    // Current position of an element relative to the document.\n    function offset(elem, orientation) {\n        var rect = elem.getBoundingClientRect();\n        var doc = elem.ownerDocument;\n        var docElem = doc.documentElement;\n        var pageOffset = getPageOffset(doc);\n        // getBoundingClientRect contains left scroll in Chrome on Android.\n        // I haven't found a feature detection that proves this. Worst case\n        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.\n        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {\n            pageOffset.x = 0;\n        }\n        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;\n    }\n    // Checks whether a value is numerical.\n    function isNumeric(a) {\n        return typeof a === \"number\" && !isNaN(a) && isFinite(a);\n    }\n    // Sets a class and removes it after [duration] ms.\n    function addClassFor(element, className, duration) {\n        if (duration > 0) {\n            addClass(element, className);\n            setTimeout(function () {\n                removeClass(element, className);\n            }, duration);\n        }\n    }\n    // Limits a value to 0 - 100\n    function limit(a) {\n        return Math.max(Math.min(a, 100), 0);\n    }\n    // Wraps a variable as an array, if it isn't one yet.\n    // Note that an input array is returned by reference!\n    function asArray(a) {\n        return Array.isArray(a) ? a : [a];\n    }\n    // Counts decimals\n    function countDecimals(numStr) {\n        numStr = String(numStr);\n        var pieces = numStr.split(\".\");\n        return pieces.length > 1 ? pieces[1].length : 0;\n    }\n    // http://youmightnotneedjquery.com/#add_class\n    function addClass(el, className) {\n        if (el.classList && !/\\s/.test(className)) {\n            el.classList.add(className);\n        }\n        else {\n            el.className += \" \" + className;\n        }\n    }\n    // http://youmightnotneedjquery.com/#remove_class\n    function removeClass(el, className) {\n        if (el.classList && !/\\s/.test(className)) {\n            el.classList.remove(className);\n        }\n        else {\n            el.className = el.className.replace(new RegExp(\"(^|\\\\b)\" + className.split(\" \").join(\"|\") + \"(\\\\b|$)\", \"gi\"), \" \");\n        }\n    }\n    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/\n    function hasClass(el, className) {\n        return el.classList ? el.classList.contains(className) : new RegExp(\"\\\\b\" + className + \"\\\\b\").test(el.className);\n    }\n    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes\n    function getPageOffset(doc) {\n        var supportPageOffset = window.pageXOffset !== undefined;\n        var isCSS1Compat = (doc.compatMode || \"\") === \"CSS1Compat\";\n        var x = supportPageOffset\n            ? window.pageXOffset\n            : isCSS1Compat\n                ? doc.documentElement.scrollLeft\n                : doc.body.scrollLeft;\n        var y = supportPageOffset\n            ? window.pageYOffset\n            : isCSS1Compat\n                ? doc.documentElement.scrollTop\n                : doc.body.scrollTop;\n        return {\n            x: x,\n            y: y,\n        };\n    }\n    // we provide a function to compute constants instead\n    // of accessing window.* as soon as the module needs it\n    // so that we do not compute anything if not needed\n    function getActions() {\n        // Determine the events to bind. IE11 implements pointerEvents without\n        // a prefix, which breaks compatibility with the IE10 implementation.\n        return window.navigator.pointerEnabled\n            ? {\n                start: \"pointerdown\",\n                move: \"pointermove\",\n                end: \"pointerup\",\n            }\n            : window.navigator.msPointerEnabled\n                ? {\n                    start: \"MSPointerDown\",\n                    move: \"MSPointerMove\",\n                    end: \"MSPointerUp\",\n                }\n                : {\n                    start: \"mousedown touchstart\",\n                    move: \"mousemove touchmove\",\n                    end: \"mouseup touchend\",\n                };\n    }\n    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md\n    // Issue #785\n    function getSupportsPassive() {\n        var supportsPassive = false;\n        /* eslint-disable */\n        try {\n            var opts = Object.defineProperty({}, \"passive\", {\n                get: function () {\n                    supportsPassive = true;\n                },\n            });\n            // @ts-ignore\n            window.addEventListener(\"test\", null, opts);\n        }\n        catch (e) { }\n        /* eslint-enable */\n        return supportsPassive;\n    }\n    function getSupportsTouchActionNone() {\n        return window.CSS && CSS.supports && CSS.supports(\"touch-action\", \"none\");\n    }\n    //endregion\n    //region Range Calculation\n    // Determine the size of a sub-range in relation to a full range.\n    function subRangeRatio(pa, pb) {\n        return 100 / (pb - pa);\n    }\n    // (percentage) How many percent is this value of this range?\n    function fromPercentage(range, value, startRange) {\n        return (value * 100) / (range[startRange + 1] - range[startRange]);\n    }\n    // (percentage) Where is this value on this range?\n    function toPercentage(range, value) {\n        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);\n    }\n    // (value) How much is this percentage on this range?\n    function isPercentage(range, value) {\n        return (value * (range[1] - range[0])) / 100 + range[0];\n    }\n    function getJ(value, arr) {\n        var j = 1;\n        while (value >= arr[j]) {\n            j += 1;\n        }\n        return j;\n    }\n    // (percentage) Input a value, find where, on a scale of 0-100, it applies.\n    function toStepping(xVal, xPct, value) {\n        if (value >= xVal.slice(-1)[0]) {\n            return 100;\n        }\n        var j = getJ(value, xVal);\n        var va = xVal[j - 1];\n        var vb = xVal[j];\n        var pa = xPct[j - 1];\n        var pb = xPct[j];\n        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);\n    }\n    // (value) Input a percentage, find where it is on the specified range.\n    function fromStepping(xVal, xPct, value) {\n        // There is no range group that fits 100\n        if (value >= 100) {\n            return xVal.slice(-1)[0];\n        }\n        var j = getJ(value, xPct);\n        var va = xVal[j - 1];\n        var vb = xVal[j];\n        var pa = xPct[j - 1];\n        var pb = xPct[j];\n        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));\n    }\n    // (percentage) Get the step that applies at a certain value.\n    function getStep(xPct, xSteps, snap, value) {\n        if (value === 100) {\n            return value;\n        }\n        var j = getJ(value, xPct);\n        var a = xPct[j - 1];\n        var b = xPct[j];\n        // If 'snap' is set, steps are used as fixed points on the slider.\n        if (snap) {\n            // Find the closest position, a or b.\n            if (value - a > (b - a) / 2) {\n                return b;\n            }\n            return a;\n        }\n        if (!xSteps[j - 1]) {\n            return value;\n        }\n        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);\n    }\n    //endregion\n    //region Spectrum\n    var Spectrum = /** @class */ (function () {\n        function Spectrum(entry, snap, singleStep) {\n            this.xPct = [];\n            this.xVal = [];\n            this.xSteps = [];\n            this.xNumSteps = [];\n            this.xHighestCompleteStep = [];\n            this.xSteps = [singleStep || false];\n            this.xNumSteps = [false];\n            this.snap = snap;\n            var index;\n            var ordered = [];\n            // Map the object keys to an array.\n            Object.keys(entry).forEach(function (index) {\n                ordered.push([asArray(entry[index]), index]);\n            });\n            // Sort all entries by value (numeric sort).\n            ordered.sort(function (a, b) {\n                return a[0][0] - b[0][0];\n            });\n            // Convert all entries to subranges.\n            for (index = 0; index < ordered.length; index++) {\n                this.handleEntryPoint(ordered[index][1], ordered[index][0]);\n            }\n            // Store the actual step values.\n            // xSteps is sorted in the same order as xPct and xVal.\n            this.xNumSteps = this.xSteps.slice(0);\n            // Convert all numeric steps to the percentage of the subrange they represent.\n            for (index = 0; index < this.xNumSteps.length; index++) {\n                this.handleStepPoint(index, this.xNumSteps[index]);\n            }\n        }\n        Spectrum.prototype.getDistance = function (value) {\n            var distances = [];\n            for (var index = 0; index < this.xNumSteps.length - 1; index++) {\n                distances[index] = fromPercentage(this.xVal, value, index);\n            }\n            return distances;\n        };\n        // Calculate the percentual distance over the whole scale of ranges.\n        // direction: 0 = backwards / 1 = forwards\n        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {\n            var xPct_index = 0;\n            // Calculate range where to start calculation\n            if (value < this.xPct[this.xPct.length - 1]) {\n                while (value > this.xPct[xPct_index + 1]) {\n                    xPct_index++;\n                }\n            }\n            else if (value === this.xPct[this.xPct.length - 1]) {\n                xPct_index = this.xPct.length - 2;\n            }\n            // If looking backwards and the value is exactly at a range separator then look one range further\n            if (!direction && value === this.xPct[xPct_index + 1]) {\n                xPct_index++;\n            }\n            if (distances === null) {\n                distances = [];\n            }\n            var start_factor;\n            var rest_factor = 1;\n            var rest_rel_distance = distances[xPct_index];\n            var range_pct = 0;\n            var rel_range_distance = 0;\n            var abs_distance_counter = 0;\n            var range_counter = 0;\n            // Calculate what part of the start range the value is\n            if (direction) {\n                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);\n            }\n            else {\n                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);\n            }\n            // Do until the complete distance across ranges is calculated\n            while (rest_rel_distance > 0) {\n                // Calculate the percentage of total range\n                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];\n                // Detect if the margin, padding or limit is larger then the current range and calculate\n                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {\n                    // If larger then take the percentual distance of the whole range\n                    rel_range_distance = range_pct * start_factor;\n                    // Rest factor of relative percentual distance still to be calculated\n                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];\n                    // Set start factor to 1 as for next range it does not apply.\n                    start_factor = 1;\n                }\n                else {\n                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range\n                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;\n                    // No rest left as the rest fits in current range\n                    rest_factor = 0;\n                }\n                if (direction) {\n                    abs_distance_counter = abs_distance_counter - rel_range_distance;\n                    // Limit range to first range when distance becomes outside of minimum range\n                    if (this.xPct.length + range_counter >= 1) {\n                        range_counter--;\n                    }\n                }\n                else {\n                    abs_distance_counter = abs_distance_counter + rel_range_distance;\n                    // Limit range to last range when distance becomes outside of maximum range\n                    if (this.xPct.length - range_counter >= 1) {\n                        range_counter++;\n                    }\n                }\n                // Rest of relative percentual distance still to be calculated\n                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;\n            }\n            return value + abs_distance_counter;\n        };\n        Spectrum.prototype.toStepping = function (value) {\n            value = toStepping(this.xVal, this.xPct, value);\n            return value;\n        };\n        Spectrum.prototype.fromStepping = function (value) {\n            return fromStepping(this.xVal, this.xPct, value);\n        };\n        Spectrum.prototype.getStep = function (value) {\n            value = getStep(this.xPct, this.xSteps, this.snap, value);\n            return value;\n        };\n        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {\n            var j = getJ(value, this.xPct);\n            // When at the top or stepping down, look at the previous sub-range\n            if (value === 100 || (isDown && value === this.xPct[j - 1])) {\n                j = Math.max(j - 1, 1);\n            }\n            return (this.xVal[j] - this.xVal[j - 1]) / size;\n        };\n        Spectrum.prototype.getNearbySteps = function (value) {\n            var j = getJ(value, this.xPct);\n            return {\n                stepBefore: {\n                    startValue: this.xVal[j - 2],\n                    step: this.xNumSteps[j - 2],\n                    highestStep: this.xHighestCompleteStep[j - 2],\n                },\n                thisStep: {\n                    startValue: this.xVal[j - 1],\n                    step: this.xNumSteps[j - 1],\n                    highestStep: this.xHighestCompleteStep[j - 1],\n                },\n                stepAfter: {\n                    startValue: this.xVal[j],\n                    step: this.xNumSteps[j],\n                    highestStep: this.xHighestCompleteStep[j],\n                },\n            };\n        };\n        Spectrum.prototype.countStepDecimals = function () {\n            var stepDecimals = this.xNumSteps.map(countDecimals);\n            return Math.max.apply(null, stepDecimals);\n        };\n        Spectrum.prototype.hasNoSize = function () {\n            return this.xVal[0] === this.xVal[this.xVal.length - 1];\n        };\n        // Outside testing\n        Spectrum.prototype.convert = function (value) {\n            return this.getStep(this.toStepping(value));\n        };\n        Spectrum.prototype.handleEntryPoint = function (index, value) {\n            var percentage;\n            // Covert min/max syntax to 0 and 100.\n            if (index === \"min\") {\n                percentage = 0;\n            }\n            else if (index === \"max\") {\n                percentage = 100;\n            }\n            else {\n                percentage = parseFloat(index);\n            }\n            // Check for correct input.\n            if (!isNumeric(percentage) || !isNumeric(value[0])) {\n                throw new Error(\"noUiSlider: 'range' value isn't numeric.\");\n            }\n            // Store values.\n            this.xPct.push(percentage);\n            this.xVal.push(value[0]);\n            var value1 = Number(value[1]);\n            // NaN will evaluate to false too, but to keep\n            // logging clear, set step explicitly. Make sure\n            // not to override the 'step' setting with false.\n            if (!percentage) {\n                if (!isNaN(value1)) {\n                    this.xSteps[0] = value1;\n                }\n            }\n            else {\n                this.xSteps.push(isNaN(value1) ? false : value1);\n            }\n            this.xHighestCompleteStep.push(0);\n        };\n        Spectrum.prototype.handleStepPoint = function (i, n) {\n            // Ignore 'false' stepping.\n            if (!n) {\n                return;\n            }\n            // Step over zero-length ranges (#948);\n            if (this.xVal[i] === this.xVal[i + 1]) {\n                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];\n                return;\n            }\n            // Factor to range ratio\n            this.xSteps[i] =\n                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);\n            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];\n            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);\n            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;\n            this.xHighestCompleteStep[i] = step;\n        };\n        return Spectrum;\n    }());\n    //endregion\n    //region Options\n    /*\tEvery input option is tested and parsed. This will prevent\n        endless validation in internal methods. These tests are\n        structured with an item for every option available. An\n        option can be marked as required by setting the 'r' flag.\n        The testing function is provided with three arguments:\n            - The provided value for the option;\n            - A reference to the options object;\n            - The name for the option;\n\n        The testing function returns false when an error is detected,\n        or true when everything is OK. It can also modify the option\n        object, to make sure all values can be correctly looped elsewhere. */\n    //region Defaults\n    var defaultFormatter = {\n        to: function (value) {\n            return value === undefined ? \"\" : value.toFixed(2);\n        },\n        from: Number,\n    };\n    var cssClasses = {\n        target: \"target\",\n        base: \"base\",\n        origin: \"origin\",\n        handle: \"handle\",\n        handleLower: \"handle-lower\",\n        handleUpper: \"handle-upper\",\n        touchArea: \"touch-area\",\n        horizontal: \"horizontal\",\n        vertical: \"vertical\",\n        background: \"background\",\n        connect: \"connect\",\n        connects: \"connects\",\n        ltr: \"ltr\",\n        rtl: \"rtl\",\n        textDirectionLtr: \"txt-dir-ltr\",\n        textDirectionRtl: \"txt-dir-rtl\",\n        draggable: \"draggable\",\n        drag: \"state-drag\",\n        tap: \"state-tap\",\n        active: \"active\",\n        tooltip: \"tooltip\",\n        pips: \"pips\",\n        pipsHorizontal: \"pips-horizontal\",\n        pipsVertical: \"pips-vertical\",\n        marker: \"marker\",\n        markerHorizontal: \"marker-horizontal\",\n        markerVertical: \"marker-vertical\",\n        markerNormal: \"marker-normal\",\n        markerLarge: \"marker-large\",\n        markerSub: \"marker-sub\",\n        value: \"value\",\n        valueHorizontal: \"value-horizontal\",\n        valueVertical: \"value-vertical\",\n        valueNormal: \"value-normal\",\n        valueLarge: \"value-large\",\n        valueSub: \"value-sub\",\n    };\n    // Namespaces of internal event listeners\n    var INTERNAL_EVENT_NS = {\n        tooltips: \".__tooltips\",\n        aria: \".__aria\",\n    };\n    //endregion\n    function testStep(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'step' is not numeric.\");\n        }\n        // The step option can still be used to set stepping\n        // for linear sliders. Overwritten if set in 'range'.\n        parsed.singleStep = entry;\n    }\n    function testKeyboardPageMultiplier(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'keyboardPageMultiplier' is not numeric.\");\n        }\n        parsed.keyboardPageMultiplier = entry;\n    }\n    function testKeyboardMultiplier(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'keyboardMultiplier' is not numeric.\");\n        }\n        parsed.keyboardMultiplier = entry;\n    }\n    function testKeyboardDefaultStep(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'keyboardDefaultStep' is not numeric.\");\n        }\n        parsed.keyboardDefaultStep = entry;\n    }\n    function testRange(parsed, entry) {\n        // Filter incorrect input.\n        if (typeof entry !== \"object\" || Array.isArray(entry)) {\n            throw new Error(\"noUiSlider: 'range' is not an object.\");\n        }\n        // Catch missing start or end.\n        if (entry.min === undefined || entry.max === undefined) {\n            throw new Error(\"noUiSlider: Missing 'min' or 'max' in 'range'.\");\n        }\n        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);\n    }\n    function testStart(parsed, entry) {\n        entry = asArray(entry);\n        // Validate input. Values aren't tested, as the public .val method\n        // will always provide a valid location.\n        if (!Array.isArray(entry) || !entry.length) {\n            throw new Error(\"noUiSlider: 'start' option is incorrect.\");\n        }\n        // Store the number of handles.\n        parsed.handles = entry.length;\n        // When the slider is initialized, the .val method will\n        // be called with the start options.\n        parsed.start = entry;\n    }\n    function testSnap(parsed, entry) {\n        if (typeof entry !== \"boolean\") {\n            throw new Error(\"noUiSlider: 'snap' option must be a boolean.\");\n        }\n        // Enforce 100% stepping within subranges.\n        parsed.snap = entry;\n    }\n    function testAnimate(parsed, entry) {\n        if (typeof entry !== \"boolean\") {\n            throw new Error(\"noUiSlider: 'animate' option must be a boolean.\");\n        }\n        // Enforce 100% stepping within subranges.\n        parsed.animate = entry;\n    }\n    function testAnimationDuration(parsed, entry) {\n        if (typeof entry !== \"number\") {\n            throw new Error(\"noUiSlider: 'animationDuration' option must be a number.\");\n        }\n        parsed.animationDuration = entry;\n    }\n    function testConnect(parsed, entry) {\n        var connect = [false];\n        var i;\n        // Map legacy options\n        if (entry === \"lower\") {\n            entry = [true, false];\n        }\n        else if (entry === \"upper\") {\n            entry = [false, true];\n        }\n        // Handle boolean options\n        if (entry === true || entry === false) {\n            for (i = 1; i < parsed.handles; i++) {\n                connect.push(entry);\n            }\n            connect.push(false);\n        }\n        // Reject invalid input\n        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {\n            throw new Error(\"noUiSlider: 'connect' option doesn't match handle count.\");\n        }\n        else {\n            connect = entry;\n        }\n        parsed.connect = connect;\n    }\n    function testOrientation(parsed, entry) {\n        // Set orientation to an a numerical value for easy\n        // array selection.\n        switch (entry) {\n            case \"horizontal\":\n                parsed.ort = 0;\n                break;\n            case \"vertical\":\n                parsed.ort = 1;\n                break;\n            default:\n                throw new Error(\"noUiSlider: 'orientation' option is invalid.\");\n        }\n    }\n    function testMargin(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'margin' option must be numeric.\");\n        }\n        // Issue #582\n        if (entry === 0) {\n            return;\n        }\n        parsed.margin = parsed.spectrum.getDistance(entry);\n    }\n    function testLimit(parsed, entry) {\n        if (!isNumeric(entry)) {\n            throw new Error(\"noUiSlider: 'limit' option must be numeric.\");\n        }\n        parsed.limit = parsed.spectrum.getDistance(entry);\n        if (!parsed.limit || parsed.handles < 2) {\n            throw new Error(\"noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.\");\n        }\n    }\n    function testPadding(parsed, entry) {\n        var index;\n        if (!isNumeric(entry) && !Array.isArray(entry)) {\n            throw new Error(\"noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.\");\n        }\n        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {\n            throw new Error(\"noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.\");\n        }\n        if (entry === 0) {\n            return;\n        }\n        if (!Array.isArray(entry)) {\n            entry = [entry, entry];\n        }\n        // 'getDistance' returns false for invalid values.\n        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];\n        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {\n            // last \"range\" can't contain step size as it is purely an endpoint.\n            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {\n                throw new Error(\"noUiSlider: 'padding' option must be a positive number(s).\");\n            }\n        }\n        var totalPadding = entry[0] + entry[1];\n        var firstValue = parsed.spectrum.xVal[0];\n        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];\n        if (totalPadding / (lastValue - firstValue) > 1) {\n            throw new Error(\"noUiSlider: 'padding' option must not exceed 100% of the range.\");\n        }\n    }\n    function testDirection(parsed, entry) {\n        // Set direction as a numerical value for easy parsing.\n        // Invert connection for RTL sliders, so that the proper\n        // handles get the connect/background classes.\n        switch (entry) {\n            case \"ltr\":\n                parsed.dir = 0;\n                break;\n            case \"rtl\":\n                parsed.dir = 1;\n                break;\n            default:\n                throw new Error(\"noUiSlider: 'direction' option was not recognized.\");\n        }\n    }\n    function testBehaviour(parsed, entry) {\n        // Make sure the input is a string.\n        if (typeof entry !== \"string\") {\n            throw new Error(\"noUiSlider: 'behaviour' must be a string containing options.\");\n        }\n        // Check if the string contains any keywords.\n        // None are required.\n        var tap = entry.indexOf(\"tap\") >= 0;\n        var drag = entry.indexOf(\"drag\") >= 0;\n        var fixed = entry.indexOf(\"fixed\") >= 0;\n        var snap = entry.indexOf(\"snap\") >= 0;\n        var hover = entry.indexOf(\"hover\") >= 0;\n        var unconstrained = entry.indexOf(\"unconstrained\") >= 0;\n        var dragAll = entry.indexOf(\"drag-all\") >= 0;\n        var smoothSteps = entry.indexOf(\"smooth-steps\") >= 0;\n        if (fixed) {\n            if (parsed.handles !== 2) {\n                throw new Error(\"noUiSlider: 'fixed' behaviour must be used with 2 handles\");\n            }\n            // Use margin to enforce fixed state\n            testMargin(parsed, parsed.start[1] - parsed.start[0]);\n        }\n        if (unconstrained && (parsed.margin || parsed.limit)) {\n            throw new Error(\"noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit\");\n        }\n        parsed.events = {\n            tap: tap || snap,\n            drag: drag,\n            dragAll: dragAll,\n            smoothSteps: smoothSteps,\n            fixed: fixed,\n            snap: snap,\n            hover: hover,\n            unconstrained: unconstrained,\n        };\n    }\n    function testTooltips(parsed, entry) {\n        if (entry === false) {\n            return;\n        }\n        if (entry === true || isValidPartialFormatter(entry)) {\n            parsed.tooltips = [];\n            for (var i = 0; i < parsed.handles; i++) {\n                parsed.tooltips.push(entry);\n            }\n        }\n        else {\n            entry = asArray(entry);\n            if (entry.length !== parsed.handles) {\n                throw new Error(\"noUiSlider: must pass a formatter for all handles.\");\n            }\n            entry.forEach(function (formatter) {\n                if (typeof formatter !== \"boolean\" && !isValidPartialFormatter(formatter)) {\n                    throw new Error(\"noUiSlider: 'tooltips' must be passed a formatter or 'false'.\");\n                }\n            });\n            parsed.tooltips = entry;\n        }\n    }\n    function testHandleAttributes(parsed, entry) {\n        if (entry.length !== parsed.handles) {\n            throw new Error(\"noUiSlider: must pass a attributes for all handles.\");\n        }\n        parsed.handleAttributes = entry;\n    }\n    function testAriaFormat(parsed, entry) {\n        if (!isValidPartialFormatter(entry)) {\n            throw new Error(\"noUiSlider: 'ariaFormat' requires 'to' method.\");\n        }\n        parsed.ariaFormat = entry;\n    }\n    function testFormat(parsed, entry) {\n        if (!isValidFormatter(entry)) {\n            throw new Error(\"noUiSlider: 'format' requires 'to' and 'from' methods.\");\n        }\n        parsed.format = entry;\n    }\n    function testKeyboardSupport(parsed, entry) {\n        if (typeof entry !== \"boolean\") {\n            throw new Error(\"noUiSlider: 'keyboardSupport' option must be a boolean.\");\n        }\n        parsed.keyboardSupport = entry;\n    }\n    function testDocumentElement(parsed, entry) {\n        // This is an advanced option. Passed values are used without validation.\n        parsed.documentElement = entry;\n    }\n    function testCssPrefix(parsed, entry) {\n        if (typeof entry !== \"string\" && entry !== false) {\n            throw new Error(\"noUiSlider: 'cssPrefix' must be a string or `false`.\");\n        }\n        parsed.cssPrefix = entry;\n    }\n    function testCssClasses(parsed, entry) {\n        if (typeof entry !== \"object\") {\n            throw new Error(\"noUiSlider: 'cssClasses' must be an object.\");\n        }\n        if (typeof parsed.cssPrefix === \"string\") {\n            parsed.cssClasses = {};\n            Object.keys(entry).forEach(function (key) {\n                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];\n            });\n        }\n        else {\n            parsed.cssClasses = entry;\n        }\n    }\n    // Test all developer settings and parse to assumption-safe values.\n    function testOptions(options) {\n        // To prove a fix for #537, freeze options here.\n        // If the object is modified, an error will be thrown.\n        // Object.freeze(options);\n        var parsed = {\n            margin: null,\n            limit: null,\n            padding: null,\n            animate: true,\n            animationDuration: 300,\n            ariaFormat: defaultFormatter,\n            format: defaultFormatter,\n        };\n        // Tests are executed in the order they are presented here.\n        var tests = {\n            step: { r: false, t: testStep },\n            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },\n            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },\n            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },\n            start: { r: true, t: testStart },\n            connect: { r: true, t: testConnect },\n            direction: { r: true, t: testDirection },\n            snap: { r: false, t: testSnap },\n            animate: { r: false, t: testAnimate },\n            animationDuration: { r: false, t: testAnimationDuration },\n            range: { r: true, t: testRange },\n            orientation: { r: false, t: testOrientation },\n            margin: { r: false, t: testMargin },\n            limit: { r: false, t: testLimit },\n            padding: { r: false, t: testPadding },\n            behaviour: { r: true, t: testBehaviour },\n            ariaFormat: { r: false, t: testAriaFormat },\n            format: { r: false, t: testFormat },\n            tooltips: { r: false, t: testTooltips },\n            keyboardSupport: { r: true, t: testKeyboardSupport },\n            documentElement: { r: false, t: testDocumentElement },\n            cssPrefix: { r: true, t: testCssPrefix },\n            cssClasses: { r: true, t: testCssClasses },\n            handleAttributes: { r: false, t: testHandleAttributes },\n        };\n        var defaults = {\n            connect: false,\n            direction: \"ltr\",\n            behaviour: \"tap\",\n            orientation: \"horizontal\",\n            keyboardSupport: true,\n            cssPrefix: \"noUi-\",\n            cssClasses: cssClasses,\n            keyboardPageMultiplier: 5,\n            keyboardMultiplier: 1,\n            keyboardDefaultStep: 10,\n        };\n        // AriaFormat defaults to regular format, if any.\n        if (options.format && !options.ariaFormat) {\n            options.ariaFormat = options.format;\n        }\n        // Run all options through a testing mechanism to ensure correct\n        // input. It should be noted that options might get modified to\n        // be handled properly. E.g. wrapping integers in arrays.\n        Object.keys(tests).forEach(function (name) {\n            // If the option isn't set, but it is required, throw an error.\n            if (!isSet(options[name]) && defaults[name] === undefined) {\n                if (tests[name].r) {\n                    throw new Error(\"noUiSlider: '\" + name + \"' is required.\");\n                }\n                return;\n            }\n            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);\n        });\n        // Forward pips options\n        parsed.pips = options.pips;\n        // All recent browsers accept unprefixed transform.\n        // We need -ms- for IE9 and -webkit- for older Android;\n        // Assume use of -webkit- if unprefixed and -ms- are not supported.\n        // https://caniuse.com/#feat=transforms2d\n        var d = document.createElement(\"div\");\n        var msPrefix = d.style.msTransform !== undefined;\n        var noPrefix = d.style.transform !== undefined;\n        parsed.transformRule = noPrefix ? \"transform\" : msPrefix ? \"msTransform\" : \"webkitTransform\";\n        // Pips don't move, so we can place them using left/top.\n        var styles = [\n            [\"left\", \"top\"],\n            [\"right\", \"bottom\"],\n        ];\n        parsed.style = styles[parsed.dir][parsed.ort];\n        return parsed;\n    }\n    //endregion\n    function scope(target, options, originalOptions) {\n        var actions = getActions();\n        var supportsTouchActionNone = getSupportsTouchActionNone();\n        var supportsPassive = supportsTouchActionNone && getSupportsPassive();\n        // All variables local to 'scope' are prefixed with 'scope_'\n        // Slider DOM Nodes\n        var scope_Target = target;\n        var scope_Base;\n        var scope_Handles;\n        var scope_Connects;\n        var scope_Pips;\n        var scope_Tooltips;\n        // Slider state values\n        var scope_Spectrum = options.spectrum;\n        var scope_Values = [];\n        var scope_Locations = [];\n        var scope_HandleNumbers = [];\n        var scope_ActiveHandlesCount = 0;\n        var scope_Events = {};\n        // Document Nodes\n        var scope_Document = target.ownerDocument;\n        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;\n        var scope_Body = scope_Document.body;\n        // For horizontal sliders in standard ltr documents,\n        // make .noUi-origin overflow to the left so the document doesn't scroll.\n        var scope_DirOffset = scope_Document.dir === \"rtl\" || options.ort === 1 ? 0 : 100;\n        // Creates a node, adds it to target, returns the new node.\n        function addNodeTo(addTarget, className) {\n            var div = scope_Document.createElement(\"div\");\n            if (className) {\n                addClass(div, className);\n            }\n            addTarget.appendChild(div);\n            return div;\n        }\n        // Append a origin to the base\n        function addOrigin(base, handleNumber) {\n            var origin = addNodeTo(base, options.cssClasses.origin);\n            var handle = addNodeTo(origin, options.cssClasses.handle);\n            addNodeTo(handle, options.cssClasses.touchArea);\n            handle.setAttribute(\"data-handle\", String(handleNumber));\n            if (options.keyboardSupport) {\n                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\n                // 0 = focusable and reachable\n                handle.setAttribute(\"tabindex\", \"0\");\n                handle.addEventListener(\"keydown\", function (event) {\n                    return eventKeydown(event, handleNumber);\n                });\n            }\n            if (options.handleAttributes !== undefined) {\n                var attributes_1 = options.handleAttributes[handleNumber];\n                Object.keys(attributes_1).forEach(function (attribute) {\n                    handle.setAttribute(attribute, attributes_1[attribute]);\n                });\n            }\n            handle.setAttribute(\"role\", \"slider\");\n            handle.setAttribute(\"aria-orientation\", options.ort ? \"vertical\" : \"horizontal\");\n            if (handleNumber === 0) {\n                addClass(handle, options.cssClasses.handleLower);\n            }\n            else if (handleNumber === options.handles - 1) {\n                addClass(handle, options.cssClasses.handleUpper);\n            }\n            return origin;\n        }\n        // Insert nodes for connect elements\n        function addConnect(base, add) {\n            if (!add) {\n                return false;\n            }\n            return addNodeTo(base, options.cssClasses.connect);\n        }\n        // Add handles to the slider base.\n        function addElements(connectOptions, base) {\n            var connectBase = addNodeTo(base, options.cssClasses.connects);\n            scope_Handles = [];\n            scope_Connects = [];\n            scope_Connects.push(addConnect(connectBase, connectOptions[0]));\n            // [::::O====O====O====]\n            // connectOptions = [0, 1, 1, 1]\n            for (var i = 0; i < options.handles; i++) {\n                // Keep a list of all added handles.\n                scope_Handles.push(addOrigin(base, i));\n                scope_HandleNumbers[i] = i;\n                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));\n            }\n        }\n        // Initialize a single slider.\n        function addSlider(addTarget) {\n            // Apply classes and data to the target.\n            addClass(addTarget, options.cssClasses.target);\n            if (options.dir === 0) {\n                addClass(addTarget, options.cssClasses.ltr);\n            }\n            else {\n                addClass(addTarget, options.cssClasses.rtl);\n            }\n            if (options.ort === 0) {\n                addClass(addTarget, options.cssClasses.horizontal);\n            }\n            else {\n                addClass(addTarget, options.cssClasses.vertical);\n            }\n            var textDirection = getComputedStyle(addTarget).direction;\n            if (textDirection === \"rtl\") {\n                addClass(addTarget, options.cssClasses.textDirectionRtl);\n            }\n            else {\n                addClass(addTarget, options.cssClasses.textDirectionLtr);\n            }\n            return addNodeTo(addTarget, options.cssClasses.base);\n        }\n        function addTooltip(handle, handleNumber) {\n            if (!options.tooltips || !options.tooltips[handleNumber]) {\n                return false;\n            }\n            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);\n        }\n        function isSliderDisabled() {\n            return scope_Target.hasAttribute(\"disabled\");\n        }\n        // Disable the slider dragging if any handle is disabled\n        function isHandleDisabled(handleNumber) {\n            var handleOrigin = scope_Handles[handleNumber];\n            return handleOrigin.hasAttribute(\"disabled\");\n        }\n        function removeTooltips() {\n            if (scope_Tooltips) {\n                removeEvent(\"update\" + INTERNAL_EVENT_NS.tooltips);\n                scope_Tooltips.forEach(function (tooltip) {\n                    if (tooltip) {\n                        removeElement(tooltip);\n                    }\n                });\n                scope_Tooltips = null;\n            }\n        }\n        // The tooltips option is a shorthand for using the 'update' event.\n        function tooltips() {\n            removeTooltips();\n            // Tooltips are added with options.tooltips in original order.\n            scope_Tooltips = scope_Handles.map(addTooltip);\n            bindEvent(\"update\" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {\n                if (!scope_Tooltips || !options.tooltips) {\n                    return;\n                }\n                if (scope_Tooltips[handleNumber] === false) {\n                    return;\n                }\n                var formattedValue = values[handleNumber];\n                if (options.tooltips[handleNumber] !== true) {\n                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);\n                }\n                scope_Tooltips[handleNumber].innerHTML = formattedValue;\n            });\n        }\n        function aria() {\n            removeEvent(\"update\" + INTERNAL_EVENT_NS.aria);\n            bindEvent(\"update\" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {\n                // Update Aria Values for all handles, as a change in one changes min and max values for the next.\n                scope_HandleNumbers.forEach(function (index) {\n                    var handle = scope_Handles[index];\n                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);\n                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);\n                    var now = positions[index];\n                    // Formatted value for display\n                    var text = String(options.ariaFormat.to(unencoded[index]));\n                    // Map to slider range values\n                    min = scope_Spectrum.fromStepping(min).toFixed(1);\n                    max = scope_Spectrum.fromStepping(max).toFixed(1);\n                    now = scope_Spectrum.fromStepping(now).toFixed(1);\n                    handle.children[0].setAttribute(\"aria-valuemin\", min);\n                    handle.children[0].setAttribute(\"aria-valuemax\", max);\n                    handle.children[0].setAttribute(\"aria-valuenow\", now);\n                    handle.children[0].setAttribute(\"aria-valuetext\", text);\n                });\n            });\n        }\n        function getGroup(pips) {\n            // Use the range.\n            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {\n                return scope_Spectrum.xVal;\n            }\n            if (pips.mode === exports.PipsMode.Count) {\n                if (pips.values < 2) {\n                    throw new Error(\"noUiSlider: 'values' (>= 2) required for mode 'count'.\");\n                }\n                // Divide 0 - 100 in 'count' parts.\n                var interval = pips.values - 1;\n                var spread = 100 / interval;\n                var values = [];\n                // List these parts and have them handled as 'positions'.\n                while (interval--) {\n                    values[interval] = interval * spread;\n                }\n                values.push(100);\n                return mapToRange(values, pips.stepped);\n            }\n            if (pips.mode === exports.PipsMode.Positions) {\n                // Map all percentages to on-range values.\n                return mapToRange(pips.values, pips.stepped);\n            }\n            if (pips.mode === exports.PipsMode.Values) {\n                // If the value must be stepped, it needs to be converted to a percentage first.\n                if (pips.stepped) {\n                    return pips.values.map(function (value) {\n                        // Convert to percentage, apply step, return to value.\n                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));\n                    });\n                }\n                // Otherwise, we can simply use the values.\n                return pips.values;\n            }\n            return []; // pips.mode = never\n        }\n        function mapToRange(values, stepped) {\n            return values.map(function (value) {\n                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);\n            });\n        }\n        function generateSpread(pips) {\n            function safeIncrement(value, increment) {\n                // Avoid floating point variance by dropping the smallest decimal places.\n                return Number((value + increment).toFixed(7));\n            }\n            var group = getGroup(pips);\n            var indexes = {};\n            var firstInRange = scope_Spectrum.xVal[0];\n            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];\n            var ignoreFirst = false;\n            var ignoreLast = false;\n            var prevPct = 0;\n            // Create a copy of the group, sort it and filter away all duplicates.\n            group = unique(group.slice().sort(function (a, b) {\n                return a - b;\n            }));\n            // Make sure the range starts with the first element.\n            if (group[0] !== firstInRange) {\n                group.unshift(firstInRange);\n                ignoreFirst = true;\n            }\n            // Likewise for the last one.\n            if (group[group.length - 1] !== lastInRange) {\n                group.push(lastInRange);\n                ignoreLast = true;\n            }\n            group.forEach(function (current, index) {\n                // Get the current step and the lower + upper positions.\n                var step;\n                var i;\n                var q;\n                var low = current;\n                var high = group[index + 1];\n                var newPct;\n                var pctDifference;\n                var pctPos;\n                var type;\n                var steps;\n                var realSteps;\n                var stepSize;\n                var isSteps = pips.mode === exports.PipsMode.Steps;\n                // When using 'steps' mode, use the provided steps.\n                // Otherwise, we'll step on to the next subrange.\n                if (isSteps) {\n                    step = scope_Spectrum.xNumSteps[index];\n                }\n                // Default to a 'full' step.\n                if (!step) {\n                    step = high - low;\n                }\n                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)\n                if (high === undefined) {\n                    high = low;\n                }\n                // Make sure step isn't 0, which would cause an infinite loop (#654)\n                step = Math.max(step, 0.0000001);\n                // Find all steps in the subrange.\n                for (i = low; i <= high; i = safeIncrement(i, step)) {\n                    // Get the percentage value for the current step,\n                    // calculate the size for the subrange.\n                    newPct = scope_Spectrum.toStepping(i);\n                    pctDifference = newPct - prevPct;\n                    steps = pctDifference / (pips.density || 1);\n                    realSteps = Math.round(steps);\n                    // This ratio represents the amount of percentage-space a point indicates.\n                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.\n                    // Round the percentage offset to an even number, then divide by two\n                    // to spread the offset on both sides of the range.\n                    stepSize = pctDifference / realSteps;\n                    // Divide all points evenly, adding the correct number to this subrange.\n                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.\n                    for (q = 1; q <= realSteps; q += 1) {\n                        // The ratio between the rounded value and the actual size might be ~1% off.\n                        // Correct the percentage offset by the number of points\n                        // per subrange. density = 1 will result in 100 points on the\n                        // full range, 2 for 50, 4 for 25, etc.\n                        pctPos = prevPct + q * stepSize;\n                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];\n                    }\n                    // Determine the point type.\n                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;\n                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.\n                    if (!index && ignoreFirst && i !== high) {\n                        type = 0;\n                    }\n                    if (!(i === high && ignoreLast)) {\n                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.\n                        indexes[newPct.toFixed(5)] = [i, type];\n                    }\n                    // Update the percentage count.\n                    prevPct = newPct;\n                }\n            });\n            return indexes;\n        }\n        function addMarking(spread, filterFunc, formatter) {\n            var _a, _b;\n            var element = scope_Document.createElement(\"div\");\n            var valueSizeClasses = (_a = {},\n                _a[exports.PipsType.None] = \"\",\n                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,\n                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,\n                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,\n                _a);\n            var markerSizeClasses = (_b = {},\n                _b[exports.PipsType.None] = \"\",\n                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,\n                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,\n                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,\n                _b);\n            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];\n            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];\n            addClass(element, options.cssClasses.pips);\n            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);\n            function getClasses(type, source) {\n                var a = source === options.cssClasses.value;\n                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;\n                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;\n                return source + \" \" + orientationClasses[options.ort] + \" \" + sizeClasses[type];\n            }\n            function addSpread(offset, value, type) {\n                // Apply the filter function, if it is set.\n                type = filterFunc ? filterFunc(value, type) : type;\n                if (type === exports.PipsType.None) {\n                    return;\n                }\n                // Add a marker for every point\n                var node = addNodeTo(element, false);\n                node.className = getClasses(type, options.cssClasses.marker);\n                node.style[options.style] = offset + \"%\";\n                // Values are only appended for points marked '1' or '2'.\n                if (type > exports.PipsType.NoValue) {\n                    node = addNodeTo(element, false);\n                    node.className = getClasses(type, options.cssClasses.value);\n                    node.setAttribute(\"data-value\", String(value));\n                    node.style[options.style] = offset + \"%\";\n                    node.innerHTML = String(formatter.to(value));\n                }\n            }\n            // Append all points.\n            Object.keys(spread).forEach(function (offset) {\n                addSpread(offset, spread[offset][0], spread[offset][1]);\n            });\n            return element;\n        }\n        function removePips() {\n            if (scope_Pips) {\n                removeElement(scope_Pips);\n                scope_Pips = null;\n            }\n        }\n        function pips(pips) {\n            // Fix #669\n            removePips();\n            var spread = generateSpread(pips);\n            var filter = pips.filter;\n            var format = pips.format || {\n                to: function (value) {\n                    return String(Math.round(value));\n                },\n            };\n            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));\n            return scope_Pips;\n        }\n        // Shorthand for base dimensions.\n        function baseSize() {\n            var rect = scope_Base.getBoundingClientRect();\n            var alt = (\"offset\" + [\"Width\", \"Height\"][options.ort]);\n            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];\n        }\n        // Handler for attaching events trough a proxy.\n        function attachEvent(events, element, callback, data) {\n            // This function can be used to 'filter' events to the slider.\n            // element is a node, not a nodeList\n            var method = function (event) {\n                var e = fixEvent(event, data.pageOffset, data.target || element);\n                // fixEvent returns false if this event has a different target\n                // when handling (multi-) touch events;\n                if (!e) {\n                    return false;\n                }\n                // doNotReject is passed by all end events to make sure released touches\n                // are not rejected, leaving the slider \"stuck\" to the cursor;\n                if (isSliderDisabled() && !data.doNotReject) {\n                    return false;\n                }\n                // Stop if an active 'tap' transition is taking place.\n                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {\n                    return false;\n                }\n                // Ignore right or middle clicks on start #454\n                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {\n                    return false;\n                }\n                // Ignore right or middle clicks on start #454\n                if (data.hover && e.buttons) {\n                    return false;\n                }\n                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.\n                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support\n                // touch-action: manipulation, but that allows panning, which breaks\n                // sliders after zooming/on non-responsive pages.\n                // See: https://bugs.webkit.org/show_bug.cgi?id=133112\n                if (!supportsPassive) {\n                    e.preventDefault();\n                }\n                e.calcPoint = e.points[options.ort];\n                // Call the event handler with the event [ and additional data ].\n                callback(e, data);\n                return;\n            };\n            var methods = [];\n            // Bind a closure on the target for every event type.\n            events.split(\" \").forEach(function (eventName) {\n                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);\n                methods.push([eventName, method]);\n            });\n            return methods;\n        }\n        // Provide a clean event with standardized offset values.\n        function fixEvent(e, pageOffset, eventTarget) {\n            // Filter the event to register the type, which can be\n            // touch, mouse or pointer. Offset changes need to be\n            // made on an event specific basis.\n            var touch = e.type.indexOf(\"touch\") === 0;\n            var mouse = e.type.indexOf(\"mouse\") === 0;\n            var pointer = e.type.indexOf(\"pointer\") === 0;\n            var x = 0;\n            var y = 0;\n            // IE10 implemented pointer events with a prefix;\n            if (e.type.indexOf(\"MSPointer\") === 0) {\n                pointer = true;\n            }\n            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with\n            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore\n            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)\n            if (e.type === \"mousedown\" && !e.buttons && !e.touches) {\n                return false;\n            }\n            // The only thing one handle should be concerned about is the touches that originated on top of it.\n            if (touch) {\n                // Returns true if a touch originated on the target.\n                var isTouchOnTarget = function (checkTouch) {\n                    var target = checkTouch.target;\n                    return (target === eventTarget ||\n                        eventTarget.contains(target) ||\n                        (e.composed && e.composedPath().shift() === eventTarget));\n                };\n                // In the case of touchstart events, we need to make sure there is still no more than one\n                // touch on the target so we look amongst all touches.\n                if (e.type === \"touchstart\") {\n                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);\n                    // Do not support more than one touch per handle.\n                    if (targetTouches.length > 1) {\n                        return false;\n                    }\n                    x = targetTouches[0].pageX;\n                    y = targetTouches[0].pageY;\n                }\n                else {\n                    // In the other cases, find on changedTouches is enough.\n                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);\n                    // Cancel if the target touch has not moved.\n                    if (!targetTouch) {\n                        return false;\n                    }\n                    x = targetTouch.pageX;\n                    y = targetTouch.pageY;\n                }\n            }\n            pageOffset = pageOffset || getPageOffset(scope_Document);\n            if (mouse || pointer) {\n                x = e.clientX + pageOffset.x;\n                y = e.clientY + pageOffset.y;\n            }\n            e.pageOffset = pageOffset;\n            e.points = [x, y];\n            e.cursor = mouse || pointer; // Fix #435\n            return e;\n        }\n        // Translate a coordinate in the document to a percentage on the slider\n        function calcPointToPercentage(calcPoint) {\n            var location = calcPoint - offset(scope_Base, options.ort);\n            var proposal = (location * 100) / baseSize();\n            // Clamp proposal between 0% and 100%\n            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements\n            // are used (e.g. contained handles feature)\n            proposal = limit(proposal);\n            return options.dir ? 100 - proposal : proposal;\n        }\n        // Find handle closest to a certain percentage on the slider\n        function getClosestHandle(clickedPosition) {\n            var smallestDifference = 100;\n            var handleNumber = false;\n            scope_Handles.forEach(function (handle, index) {\n                // Disabled handles are ignored\n                if (isHandleDisabled(index)) {\n                    return;\n                }\n                var handlePosition = scope_Locations[index];\n                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);\n                // Initial state\n                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;\n                // Difference with this handle is smaller than the previously checked handle\n                var isCloser = differenceWithThisHandle < smallestDifference;\n                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;\n                if (isCloser || isCloserAfter || clickAtEdge) {\n                    handleNumber = index;\n                    smallestDifference = differenceWithThisHandle;\n                }\n            });\n            return handleNumber;\n        }\n        // Fire 'end' when a mouse or pen leaves the document.\n        function documentLeave(event, data) {\n            if (event.type === \"mouseout\" &&\n                event.target.nodeName === \"HTML\" &&\n                event.relatedTarget === null) {\n                eventEnd(event, data);\n            }\n        }\n        // Handle movement on document for handle and range drag.\n        function eventMove(event, data) {\n            // Fix #498\n            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).\n            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero\n            // IE9 has .buttons and .which zero on mousemove.\n            // Firefox breaks the spec MDN defines.\n            if (navigator.appVersion.indexOf(\"MSIE 9\") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {\n                return eventEnd(event, data);\n            }\n            // Check if we are moving up or down\n            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);\n            // Convert the movement into a percentage of the slider width/height\n            var proposal = (movement * 100) / data.baseSize;\n            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);\n        }\n        // Unbind move events on document, call callbacks.\n        function eventEnd(event, data) {\n            // The handle is no longer active, so remove the class.\n            if (data.handle) {\n                removeClass(data.handle, options.cssClasses.active);\n                scope_ActiveHandlesCount -= 1;\n            }\n            // Unbind the move and end events, which are added on 'start'.\n            data.listeners.forEach(function (c) {\n                scope_DocumentElement.removeEventListener(c[0], c[1]);\n            });\n            if (scope_ActiveHandlesCount === 0) {\n                // Remove dragging class.\n                removeClass(scope_Target, options.cssClasses.drag);\n                setZindex();\n                // Remove cursor styles and text-selection events bound to the body.\n                if (event.cursor) {\n                    scope_Body.style.cursor = \"\";\n                    scope_Body.removeEventListener(\"selectstart\", preventDefault);\n                }\n            }\n            if (options.events.smoothSteps) {\n                data.handleNumbers.forEach(function (handleNumber) {\n                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);\n                });\n                data.handleNumbers.forEach(function (handleNumber) {\n                    fireEvent(\"update\", handleNumber);\n                });\n            }\n            data.handleNumbers.forEach(function (handleNumber) {\n                fireEvent(\"change\", handleNumber);\n                fireEvent(\"set\", handleNumber);\n                fireEvent(\"end\", handleNumber);\n            });\n        }\n        // Bind move events on document.\n        function eventStart(event, data) {\n            // Ignore event if any handle is disabled\n            if (data.handleNumbers.some(isHandleDisabled)) {\n                return;\n            }\n            var handle;\n            if (data.handleNumbers.length === 1) {\n                var handleOrigin = scope_Handles[data.handleNumbers[0]];\n                handle = handleOrigin.children[0];\n                scope_ActiveHandlesCount += 1;\n                // Mark the handle as 'active' so it can be styled.\n                addClass(handle, options.cssClasses.active);\n            }\n            // A drag should never propagate up to the 'tap' event.\n            event.stopPropagation();\n            // Record the event listeners.\n            var listeners = [];\n            // Attach the move and end events.\n            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {\n                // The event target has changed so we need to propagate the original one so that we keep\n                // relying on it to extract target touches.\n                target: event.target,\n                handle: handle,\n                connect: data.connect,\n                listeners: listeners,\n                startCalcPoint: event.calcPoint,\n                baseSize: baseSize(),\n                pageOffset: event.pageOffset,\n                handleNumbers: data.handleNumbers,\n                buttonsProperty: event.buttons,\n                locations: scope_Locations.slice(),\n            });\n            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {\n                target: event.target,\n                handle: handle,\n                listeners: listeners,\n                doNotReject: true,\n                handleNumbers: data.handleNumbers,\n            });\n            var outEvent = attachEvent(\"mouseout\", scope_DocumentElement, documentLeave, {\n                target: event.target,\n                handle: handle,\n                listeners: listeners,\n                doNotReject: true,\n                handleNumbers: data.handleNumbers,\n            });\n            // We want to make sure we pushed the listeners in the listener list rather than creating\n            // a new one as it has already been passed to the event handlers.\n            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));\n            // Text selection isn't an issue on touch devices,\n            // so adding cursor styles can be skipped.\n            if (event.cursor) {\n                // Prevent the 'I' cursor and extend the range-drag cursor.\n                scope_Body.style.cursor = getComputedStyle(event.target).cursor;\n                // Mark the target with a dragging state.\n                if (scope_Handles.length > 1) {\n                    addClass(scope_Target, options.cssClasses.drag);\n                }\n                // Prevent text selection when dragging the handles.\n                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,\n                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,\n                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.\n                // The 'cursor' flag is false.\n                // See: http://caniuse.com/#search=selectstart\n                scope_Body.addEventListener(\"selectstart\", preventDefault, false);\n            }\n            data.handleNumbers.forEach(function (handleNumber) {\n                fireEvent(\"start\", handleNumber);\n            });\n        }\n        // Move closest handle to tapped location.\n        function eventTap(event) {\n            // The tap event shouldn't propagate up\n            event.stopPropagation();\n            var proposal = calcPointToPercentage(event.calcPoint);\n            var handleNumber = getClosestHandle(proposal);\n            // Tackle the case that all handles are 'disabled'.\n            if (handleNumber === false) {\n                return;\n            }\n            // Flag the slider as it is now in a transitional state.\n            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.\n            if (!options.events.snap) {\n                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);\n            }\n            setHandle(handleNumber, proposal, true, true);\n            setZindex();\n            fireEvent(\"slide\", handleNumber, true);\n            fireEvent(\"update\", handleNumber, true);\n            if (!options.events.snap) {\n                fireEvent(\"change\", handleNumber, true);\n                fireEvent(\"set\", handleNumber, true);\n            }\n            else {\n                eventStart(event, { handleNumbers: [handleNumber] });\n            }\n        }\n        // Fires a 'hover' event for a hovered mouse/pen position.\n        function eventHover(event) {\n            var proposal = calcPointToPercentage(event.calcPoint);\n            var to = scope_Spectrum.getStep(proposal);\n            var value = scope_Spectrum.fromStepping(to);\n            Object.keys(scope_Events).forEach(function (targetEvent) {\n                if (\"hover\" === targetEvent.split(\".\")[0]) {\n                    scope_Events[targetEvent].forEach(function (callback) {\n                        callback.call(scope_Self, value);\n                    });\n                }\n            });\n        }\n        // Handles keydown on focused handles\n        // Don't move the document when pressing arrow keys on focused handles\n        function eventKeydown(event, handleNumber) {\n            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {\n                return false;\n            }\n            var horizontalKeys = [\"Left\", \"Right\"];\n            var verticalKeys = [\"Down\", \"Up\"];\n            var largeStepKeys = [\"PageDown\", \"PageUp\"];\n            var edgeKeys = [\"Home\", \"End\"];\n            if (options.dir && !options.ort) {\n                // On an right-to-left slider, the left and right keys act inverted\n                horizontalKeys.reverse();\n            }\n            else if (options.ort && !options.dir) {\n                // On a top-to-bottom slider, the up and down keys act inverted\n                verticalKeys.reverse();\n                largeStepKeys.reverse();\n            }\n            // Strip \"Arrow\" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key\n            var key = event.key.replace(\"Arrow\", \"\");\n            var isLargeDown = key === largeStepKeys[0];\n            var isLargeUp = key === largeStepKeys[1];\n            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;\n            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;\n            var isMin = key === edgeKeys[0];\n            var isMax = key === edgeKeys[1];\n            if (!isDown && !isUp && !isMin && !isMax) {\n                return true;\n            }\n            event.preventDefault();\n            var to;\n            if (isUp || isDown) {\n                var direction = isDown ? 0 : 1;\n                var steps = getNextStepsForHandle(handleNumber);\n                var step = steps[direction];\n                // At the edge of a slider, do nothing\n                if (step === null) {\n                    return false;\n                }\n                // No step set, use the default of 10% of the sub-range\n                if (step === false) {\n                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);\n                }\n                if (isLargeUp || isLargeDown) {\n                    step *= options.keyboardPageMultiplier;\n                }\n                else {\n                    step *= options.keyboardMultiplier;\n                }\n                // Step over zero-length ranges (#948);\n                step = Math.max(step, 0.0000001);\n                // Decrement for down steps\n                step = (isDown ? -1 : 1) * step;\n                to = scope_Values[handleNumber] + step;\n            }\n            else if (isMax) {\n                // End key\n                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];\n            }\n            else {\n                // Home key\n                to = options.spectrum.xVal[0];\n            }\n            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);\n            fireEvent(\"slide\", handleNumber);\n            fireEvent(\"update\", handleNumber);\n            fireEvent(\"change\", handleNumber);\n            fireEvent(\"set\", handleNumber);\n            return false;\n        }\n        // Attach events to several slider parts.\n        function bindSliderEvents(behaviour) {\n            // Attach the standard drag event to the handles.\n            if (!behaviour.fixed) {\n                scope_Handles.forEach(function (handle, index) {\n                    // These events are only bound to the visual handle\n                    // element, not the 'real' origin element.\n                    attachEvent(actions.start, handle.children[0], eventStart, {\n                        handleNumbers: [index],\n                    });\n                });\n            }\n            // Attach the tap event to the slider base.\n            if (behaviour.tap) {\n                attachEvent(actions.start, scope_Base, eventTap, {});\n            }\n            // Fire hover events\n            if (behaviour.hover) {\n                attachEvent(actions.move, scope_Base, eventHover, {\n                    hover: true,\n                });\n            }\n            // Make the range draggable.\n            if (behaviour.drag) {\n                scope_Connects.forEach(function (connect, index) {\n                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {\n                        return;\n                    }\n                    var handleBefore = scope_Handles[index - 1];\n                    var handleAfter = scope_Handles[index];\n                    var eventHolders = [connect];\n                    var handlesToDrag = [handleBefore, handleAfter];\n                    var handleNumbersToDrag = [index - 1, index];\n                    addClass(connect, options.cssClasses.draggable);\n                    // When the range is fixed, the entire range can\n                    // be dragged by the handles. The handle in the first\n                    // origin will propagate the start event upward,\n                    // but it needs to be bound manually on the other.\n                    if (behaviour.fixed) {\n                        eventHolders.push(handleBefore.children[0]);\n                        eventHolders.push(handleAfter.children[0]);\n                    }\n                    if (behaviour.dragAll) {\n                        handlesToDrag = scope_Handles;\n                        handleNumbersToDrag = scope_HandleNumbers;\n                    }\n                    eventHolders.forEach(function (eventHolder) {\n                        attachEvent(actions.start, eventHolder, eventStart, {\n                            handles: handlesToDrag,\n                            handleNumbers: handleNumbersToDrag,\n                            connect: connect,\n                        });\n                    });\n                });\n            }\n        }\n        // Attach an event to this slider, possibly including a namespace\n        function bindEvent(namespacedEvent, callback) {\n            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];\n            scope_Events[namespacedEvent].push(callback);\n            // If the event bound is 'update,' fire it immediately for all handles.\n            if (namespacedEvent.split(\".\")[0] === \"update\") {\n                scope_Handles.forEach(function (a, index) {\n                    fireEvent(\"update\", index);\n                });\n            }\n        }\n        function isInternalNamespace(namespace) {\n            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;\n        }\n        // Undo attachment of event\n        function removeEvent(namespacedEvent) {\n            var event = namespacedEvent && namespacedEvent.split(\".\")[0];\n            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;\n            Object.keys(scope_Events).forEach(function (bind) {\n                var tEvent = bind.split(\".\")[0];\n                var tNamespace = bind.substring(tEvent.length);\n                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {\n                    // only delete protected internal event if intentional\n                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {\n                        delete scope_Events[bind];\n                    }\n                }\n            });\n        }\n        // External event handling\n        function fireEvent(eventName, handleNumber, tap) {\n            Object.keys(scope_Events).forEach(function (targetEvent) {\n                var eventType = targetEvent.split(\".\")[0];\n                if (eventName === eventType) {\n                    scope_Events[targetEvent].forEach(function (callback) {\n                        callback.call(\n                        // Use the slider public API as the scope ('this')\n                        scope_Self, \n                        // Return values as array, so arg_1[arg_2] is always valid.\n                        scope_Values.map(options.format.to), \n                        // Handle index, 0 or 1\n                        handleNumber, \n                        // Un-formatted slider values\n                        scope_Values.slice(), \n                        // Event is fired by tap, true or false\n                        tap || false, \n                        // Left offset of the handle, in relation to the slider\n                        scope_Locations.slice(), \n                        // add the slider public API to an accessible parameter when this is unavailable\n                        scope_Self);\n                    });\n                }\n            });\n        }\n        // Split out the handle positioning logic so the Move event can use it, too\n        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {\n            var distance;\n            // For sliders with multiple handles, limit movement to the other handle.\n            // Apply the margin option by adding it to the handle positions.\n            if (scope_Handles.length > 1 && !options.events.unconstrained) {\n                if (lookBackward && handleNumber > 0) {\n                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);\n                    to = Math.max(to, distance);\n                }\n                if (lookForward && handleNumber < scope_Handles.length - 1) {\n                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);\n                    to = Math.min(to, distance);\n                }\n            }\n            // The limit option has the opposite effect, limiting handles to a\n            // maximum distance from another. Limit must be > 0, as otherwise\n            // handles would be unmovable.\n            if (scope_Handles.length > 1 && options.limit) {\n                if (lookBackward && handleNumber > 0) {\n                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);\n                    to = Math.min(to, distance);\n                }\n                if (lookForward && handleNumber < scope_Handles.length - 1) {\n                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);\n                    to = Math.max(to, distance);\n                }\n            }\n            // The padding option keeps the handles a certain distance from the\n            // edges of the slider. Padding must be > 0.\n            if (options.padding) {\n                if (handleNumber === 0) {\n                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);\n                    to = Math.max(to, distance);\n                }\n                if (handleNumber === scope_Handles.length - 1) {\n                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);\n                    to = Math.min(to, distance);\n                }\n            }\n            if (!smoothSteps) {\n                to = scope_Spectrum.getStep(to);\n            }\n            // Limit percentage to the 0 - 100 range\n            to = limit(to);\n            // Return false if handle can't move\n            if (to === reference[handleNumber] && !getValue) {\n                return false;\n            }\n            return to;\n        }\n        // Uses slider orientation to create CSS rules. a = base value;\n        function inRuleOrder(v, a) {\n            var o = options.ort;\n            return (o ? a : v) + \", \" + (o ? v : a);\n        }\n        // Moves handle(s) by a percentage\n        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])\n        function moveHandles(upward, proposal, locations, handleNumbers, connect) {\n            var proposals = locations.slice();\n            // Store first handle now, so we still have it in case handleNumbers is reversed\n            var firstHandle = handleNumbers[0];\n            var smoothSteps = options.events.smoothSteps;\n            var b = [!upward, upward];\n            var f = [upward, !upward];\n            // Copy handleNumbers so we don't change the dataset\n            handleNumbers = handleNumbers.slice();\n            // Check to see which handle is 'leading'.\n            // If that one can't move the second can't either.\n            if (upward) {\n                handleNumbers.reverse();\n            }\n            // Step 1: get the maximum percentage that any of the handles can move\n            if (handleNumbers.length > 1) {\n                handleNumbers.forEach(function (handleNumber, o) {\n                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);\n                    // Stop if one of the handles can't move.\n                    if (to === false) {\n                        proposal = 0;\n                    }\n                    else {\n                        proposal = to - proposals[handleNumber];\n                        proposals[handleNumber] = to;\n                    }\n                });\n            }\n            // If using one handle, check backward AND forward\n            else {\n                b = f = [true];\n            }\n            var state = false;\n            // Step 2: Try to set the handles with the found percentage\n            handleNumbers.forEach(function (handleNumber, o) {\n                state =\n                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;\n            });\n            // Step 3: If a handle moved, fire events\n            if (state) {\n                handleNumbers.forEach(function (handleNumber) {\n                    fireEvent(\"update\", handleNumber);\n                    fireEvent(\"slide\", handleNumber);\n                });\n                // If target is a connect, then fire drag event\n                if (connect != undefined) {\n                    fireEvent(\"drag\", firstHandle);\n                }\n            }\n        }\n        // Takes a base value and an offset. This offset is used for the connect bar size.\n        // In the initial design for this feature, the origin element was 1% wide.\n        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature\n        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223\n        function transformDirection(a, b) {\n            return options.dir ? 100 - a - b : a;\n        }\n        // Updates scope_Locations and scope_Values, updates visual state\n        function updateHandlePosition(handleNumber, to) {\n            // Update locations.\n            scope_Locations[handleNumber] = to;\n            // Convert the value to the slider stepping/range.\n            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);\n            var translation = transformDirection(to, 0) - scope_DirOffset;\n            var translateRule = \"translate(\" + inRuleOrder(translation + \"%\", \"0\") + \")\";\n            scope_Handles[handleNumber].style[options.transformRule] = translateRule;\n            updateConnect(handleNumber);\n            updateConnect(handleNumber + 1);\n        }\n        // Handles before the slider middle are stacked later = higher,\n        // Handles after the middle later is lower\n        // [[7] [8] .......... | .......... [5] [4]\n        function setZindex() {\n            scope_HandleNumbers.forEach(function (handleNumber) {\n                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;\n                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);\n                scope_Handles[handleNumber].style.zIndex = String(zIndex);\n            });\n        }\n        // Test suggested values and apply margin, step.\n        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)\n        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {\n            if (!exactInput) {\n                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);\n            }\n            if (to === false) {\n                return false;\n            }\n            updateHandlePosition(handleNumber, to);\n            return true;\n        }\n        // Updates style attribute for connect nodes\n        function updateConnect(index) {\n            // Skip connects set to false\n            if (!scope_Connects[index]) {\n                return;\n            }\n            var l = 0;\n            var h = 100;\n            if (index !== 0) {\n                l = scope_Locations[index - 1];\n            }\n            if (index !== scope_Connects.length - 1) {\n                h = scope_Locations[index];\n            }\n            // We use two rules:\n            // 'translate' to change the left/top offset;\n            // 'scale' to change the width of the element;\n            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)\n            var connectWidth = h - l;\n            var translateRule = \"translate(\" + inRuleOrder(transformDirection(l, connectWidth) + \"%\", \"0\") + \")\";\n            var scaleRule = \"scale(\" + inRuleOrder(connectWidth / 100, \"1\") + \")\";\n            scope_Connects[index].style[options.transformRule] =\n                translateRule + \" \" + scaleRule;\n        }\n        // Parses value passed to .set method. Returns current value if not parse-able.\n        function resolveToValue(to, handleNumber) {\n            // Setting with null indicates an 'ignore'.\n            // Inputting 'false' is invalid.\n            if (to === null || to === false || to === undefined) {\n                return scope_Locations[handleNumber];\n            }\n            // If a formatted number was passed, attempt to decode it.\n            if (typeof to === \"number\") {\n                to = String(to);\n            }\n            to = options.format.from(to);\n            if (to !== false) {\n                to = scope_Spectrum.toStepping(to);\n            }\n            // If parsing the number failed, use the current value.\n            if (to === false || isNaN(to)) {\n                return scope_Locations[handleNumber];\n            }\n            return to;\n        }\n        // Set the slider value.\n        function valueSet(input, fireSetEvent, exactInput) {\n            var values = asArray(input);\n            var isInit = scope_Locations[0] === undefined;\n            // Event fires by default\n            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;\n            // Animation is optional.\n            // Make sure the initial values were set before using animated placement.\n            if (options.animate && !isInit) {\n                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);\n            }\n            // First pass, without lookAhead but with lookBackward. Values are set from left to right.\n            scope_HandleNumbers.forEach(function (handleNumber) {\n                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);\n            });\n            var i = scope_HandleNumbers.length === 1 ? 0 : 1;\n            // Spread handles evenly across the slider if the range has no size (min=max)\n            if (isInit && scope_Spectrum.hasNoSize()) {\n                exactInput = true;\n                scope_Locations[0] = 0;\n                if (scope_HandleNumbers.length > 1) {\n                    var space_1 = 100 / (scope_HandleNumbers.length - 1);\n                    scope_HandleNumbers.forEach(function (handleNumber) {\n                        scope_Locations[handleNumber] = handleNumber * space_1;\n                    });\n                }\n            }\n            // Secondary passes. Now that all base values are set, apply constraints.\n            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)\n            for (; i < scope_HandleNumbers.length; ++i) {\n                scope_HandleNumbers.forEach(function (handleNumber) {\n                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);\n                });\n            }\n            setZindex();\n            scope_HandleNumbers.forEach(function (handleNumber) {\n                fireEvent(\"update\", handleNumber);\n                // Fire the event only for handles that received a new value, as per #579\n                if (values[handleNumber] !== null && fireSetEvent) {\n                    fireEvent(\"set\", handleNumber);\n                }\n            });\n        }\n        // Reset slider to initial values\n        function valueReset(fireSetEvent) {\n            valueSet(options.start, fireSetEvent);\n        }\n        // Set value for a single handle\n        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {\n            // Ensure numeric input\n            handleNumber = Number(handleNumber);\n            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {\n                throw new Error(\"noUiSlider: invalid handle number, got: \" + handleNumber);\n            }\n            // Look both backward and forward, since we don't want this handle to \"push\" other handles (#960);\n            // The exactInput argument can be used to ignore slider stepping (#436)\n            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);\n            fireEvent(\"update\", handleNumber);\n            if (fireSetEvent) {\n                fireEvent(\"set\", handleNumber);\n            }\n        }\n        // Get the slider value.\n        function valueGet(unencoded) {\n            if (unencoded === void 0) { unencoded = false; }\n            if (unencoded) {\n                // return a copy of the raw values\n                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);\n            }\n            var values = scope_Values.map(options.format.to);\n            // If only one handle is used, return a single value.\n            if (values.length === 1) {\n                return values[0];\n            }\n            return values;\n        }\n        // Removes classes from the root and empties it.\n        function destroy() {\n            // remove protected internal listeners\n            removeEvent(INTERNAL_EVENT_NS.aria);\n            removeEvent(INTERNAL_EVENT_NS.tooltips);\n            Object.keys(options.cssClasses).forEach(function (key) {\n                removeClass(scope_Target, options.cssClasses[key]);\n            });\n            while (scope_Target.firstChild) {\n                scope_Target.removeChild(scope_Target.firstChild);\n            }\n            delete scope_Target.noUiSlider;\n        }\n        function getNextStepsForHandle(handleNumber) {\n            var location = scope_Locations[handleNumber];\n            var nearbySteps = scope_Spectrum.getNearbySteps(location);\n            var value = scope_Values[handleNumber];\n            var increment = nearbySteps.thisStep.step;\n            var decrement = null;\n            // If snapped, directly use defined step value\n            if (options.snap) {\n                return [\n                    value - nearbySteps.stepBefore.startValue || null,\n                    nearbySteps.stepAfter.startValue - value || null,\n                ];\n            }\n            // If the next value in this step moves into the next step,\n            // the increment is the start of the next step - the current value\n            if (increment !== false) {\n                if (value + increment > nearbySteps.stepAfter.startValue) {\n                    increment = nearbySteps.stepAfter.startValue - value;\n                }\n            }\n            // If the value is beyond the starting point\n            if (value > nearbySteps.thisStep.startValue) {\n                decrement = nearbySteps.thisStep.step;\n            }\n            else if (nearbySteps.stepBefore.step === false) {\n                decrement = false;\n            }\n            // If a handle is at the start of a step, it always steps back into the previous step first\n            else {\n                decrement = value - nearbySteps.stepBefore.highestStep;\n            }\n            // Now, if at the slider edges, there is no in/decrement\n            if (location === 100) {\n                increment = null;\n            }\n            else if (location === 0) {\n                decrement = null;\n            }\n            // As per #391, the comparison for the decrement step can have some rounding issues.\n            var stepDecimals = scope_Spectrum.countStepDecimals();\n            // Round per #391\n            if (increment !== null && increment !== false) {\n                increment = Number(increment.toFixed(stepDecimals));\n            }\n            if (decrement !== null && decrement !== false) {\n                decrement = Number(decrement.toFixed(stepDecimals));\n            }\n            return [decrement, increment];\n        }\n        // Get the current step size for the slider.\n        function getNextSteps() {\n            return scope_HandleNumbers.map(getNextStepsForHandle);\n        }\n        // Updatable: margin, limit, padding, step, range, animate, snap\n        function updateOptions(optionsToUpdate, fireSetEvent) {\n            // Spectrum is created using the range, snap, direction and step options.\n            // 'snap' and 'step' can be updated.\n            // If 'snap' and 'step' are not passed, they should remain unchanged.\n            var v = valueGet();\n            var updateAble = [\n                \"margin\",\n                \"limit\",\n                \"padding\",\n                \"range\",\n                \"animate\",\n                \"snap\",\n                \"step\",\n                \"format\",\n                \"pips\",\n                \"tooltips\",\n            ];\n            // Only change options that we're actually passed to update.\n            updateAble.forEach(function (name) {\n                // Check for undefined. null removes the value.\n                if (optionsToUpdate[name] !== undefined) {\n                    originalOptions[name] = optionsToUpdate[name];\n                }\n            });\n            var newOptions = testOptions(originalOptions);\n            // Load new options into the slider state\n            updateAble.forEach(function (name) {\n                if (optionsToUpdate[name] !== undefined) {\n                    options[name] = newOptions[name];\n                }\n            });\n            scope_Spectrum = newOptions.spectrum;\n            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)\n            options.margin = newOptions.margin;\n            options.limit = newOptions.limit;\n            options.padding = newOptions.padding;\n            // Update pips, removes existing.\n            if (options.pips) {\n                pips(options.pips);\n            }\n            else {\n                removePips();\n            }\n            // Update tooltips, removes existing.\n            if (options.tooltips) {\n                tooltips();\n            }\n            else {\n                removeTooltips();\n            }\n            // Invalidate the current positioning so valueSet forces an update.\n            scope_Locations = [];\n            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);\n        }\n        // Initialization steps\n        function setupSlider() {\n            // Create the base element, initialize HTML and set classes.\n            // Add handles and connect elements.\n            scope_Base = addSlider(scope_Target);\n            addElements(options.connect, scope_Base);\n            // Attach user events.\n            bindSliderEvents(options.events);\n            // Use the public value method to set the start values.\n            valueSet(options.start);\n            if (options.pips) {\n                pips(options.pips);\n            }\n            if (options.tooltips) {\n                tooltips();\n            }\n            aria();\n        }\n        setupSlider();\n        var scope_Self = {\n            destroy: destroy,\n            steps: getNextSteps,\n            on: bindEvent,\n            off: removeEvent,\n            get: valueGet,\n            set: valueSet,\n            setHandle: valueSetHandle,\n            reset: valueReset,\n            // Exposed for unit testing, don't use this in your application.\n            __moveHandles: function (upward, proposal, handleNumbers) {\n                moveHandles(upward, proposal, scope_Locations, handleNumbers);\n            },\n            options: originalOptions,\n            updateOptions: updateOptions,\n            target: scope_Target,\n            removePips: removePips,\n            removeTooltips: removeTooltips,\n            getPositions: function () {\n                return scope_Locations.slice();\n            },\n            getTooltips: function () {\n                return scope_Tooltips;\n            },\n            getOrigins: function () {\n                return scope_Handles;\n            },\n            pips: pips, // Issue #594\n        };\n        return scope_Self;\n    }\n    // Run the standard initializer\n    function initialize(target, originalOptions) {\n        if (!target || !target.nodeName) {\n            throw new Error(\"noUiSlider: create requires a single element, got: \" + target);\n        }\n        // Throw an error if the slider was already initialized.\n        if (target.noUiSlider) {\n            throw new Error(\"noUiSlider: Slider was already initialized.\");\n        }\n        // Test the options and create the slider environment;\n        var options = testOptions(originalOptions);\n        var api = scope(target, options, originalOptions);\n        target.noUiSlider = api;\n        return api;\n    }\n    var nouislider = {\n        // Exposed for unit testing, don't use this in your application.\n        __spectrum: Spectrum,\n        // A reference to the default classes, allows global changes.\n        // Use the cssClasses option for changes to one slider.\n        cssClasses: cssClasses,\n        create: initialize,\n    };\n\n    exports.create = initialize;\n    exports.cssClasses = cssClasses;\n    exports[\"default\"] = nouislider;\n\n    Object.defineProperty(exports, '__esModule', { value: true });\n\n}));\n\n\n//# sourceURL=webpack://onlinestore/./node_modules/nouislider/dist/nouislider.js?");

/***/ }),

/***/ "./node_modules/nouislider/dist/nouislider.css":
/*!*****************************************************!*\
  !*** ./node_modules/nouislider/dist/nouislider.css ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js!../../sass-loader/dist/cjs.js!./nouislider.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/nouislider/dist/nouislider.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_nouislider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://onlinestore/./node_modules/nouislider/dist/nouislider.css?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://onlinestore/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://onlinestore/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _js_main_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.ts */ \"./src/js/main.ts\");\n\r\n\r\n\n\n//# sourceURL=webpack://onlinestore/./src/index.ts?");

/***/ }),

/***/ "./src/js/add-to-cart.ts":
/*!*******************************!*\
  !*** ./src/js/add-to-cart.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart)\n/* harmony export */ });\n/* harmony import */ var _cards_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-data */ \"./src/js/cards-data.ts\");\n\r\nfunction addToCart(k) {\r\n    var clearAll = document.querySelector('.remove-all');\r\n    var cartInfo = document.querySelector('.sidebar__cart_info');\r\n    clearAll.style.display = 'flex';\r\n    clearAll.addEventListener('click', clear);\r\n    var card_little = \"<div class = \\\"card_little\\\" id=\\\"\".concat(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData[k].id, \"\\\">\\n        <img src=\\\"\").concat(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData[k].img, \"\\\" alt=\\\"\").concat(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData[k].alt, \"\\\" class = \\\"card__img_little\\\">\\n                <div><p class=\\\"text\\\">\").concat(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData[k].name, \"</p>\\n                <div class=\\\"price-wrapper\\\"><div class=\\\"card__price_little\\\">\").concat(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData[k].price, \"</div>\\n                <div>$</div></div></div>\\n       <div class='remove-from-card'>\\u2716</div>\\n    </div>\");\r\n    cartInfo.innerHTML += card_little;\r\n    var animateCard = cartInfo.lastElementChild;\r\n    animateCard.animate([\r\n        { transform: 'translate3D(300px, 0, 0)' },\r\n        { transform: 'translate3D(0, 0, 0)' }\r\n    ], {\r\n        duration: 200,\r\n    });\r\n    countCards();\r\n    countSum();\r\n    var cards_remove = document.querySelectorAll('.remove-from-card');\r\n    cards_remove.forEach(function (btn) {\r\n        btn.addEventListener('click', function () {\r\n            var cardCart = btn.parentElement;\r\n            cardCart.animate([\r\n                { transform: 'translate3D(0, 0, 0)' },\r\n                { transform: 'translate3D(-300px, 0, 0)' }\r\n            ], {\r\n                duration: 200,\r\n            });\r\n            setTimeout(function () {\r\n                cardCart.remove();\r\n                countCards();\r\n                countSum();\r\n                var counter = cartInfo.childElementCount;\r\n                if (counter === 0) {\r\n                    var cards_hover = document.querySelectorAll('.add_to_cart');\r\n                    cards_hover.forEach(function (add) {\r\n                        add.parentElement.classList.remove('opacity-appear');\r\n                        add.children[0].innerHTML = 'add to cart';\r\n                        add.classList.remove('in_cart');\r\n                    });\r\n                }\r\n                else {\r\n                    var cart_cards = document.querySelectorAll('.card_little');\r\n                    var count_1 = 0;\r\n                    cart_cards.forEach(function (el) {\r\n                        if (el.id === cardCart.id) {\r\n                            count_1++;\r\n                        }\r\n                        else\r\n                            count_1 = 0;\r\n                    });\r\n                    console.log(count_1);\r\n                    if (count_1 === 0) {\r\n                        document.querySelectorAll('.card').forEach(function (card) {\r\n                            if (cardCart.id === card.id) {\r\n                                var btn_1 = card.children[1].children[1].children[0];\r\n                                btn_1.parentElement.classList.remove('opacity-appear');\r\n                                btn_1.children[0].innerHTML = 'add to cart';\r\n                                btn_1.classList.remove('in_cart');\r\n                            }\r\n                        });\r\n                    }\r\n                }\r\n            }, 200);\r\n        });\r\n    });\r\n    function countCards() {\r\n        var quantity = document.querySelector('.cards-quantity');\r\n        var counter = cartInfo.childElementCount;\r\n        quantity.innerHTML = \"\".concat(counter);\r\n        if (counter === 0) {\r\n            clearAll.style.display = \"none\";\r\n            quantity.innerHTML = '';\r\n        }\r\n    }\r\n    function countSum() {\r\n        var prices = document.querySelectorAll('.card__price_little');\r\n        var total_sum = document.querySelector('.total__sum');\r\n        var arr = [];\r\n        prices.forEach(function (el) {\r\n            var num = Number(el.innerHTML);\r\n            arr.push(num);\r\n        });\r\n        if (arr.length > 0) {\r\n            var sum = arr.reduce(function (a, b) { return a + b; });\r\n            total_sum.innerHTML = \"\".concat(sum, \"$\");\r\n        }\r\n        else {\r\n            total_sum.innerHTML = \"\";\r\n        }\r\n    }\r\n    function clear() {\r\n        clearAll.animate([\r\n            { transform: 'translate3D(0, 0, 0)' },\r\n            { transform: 'translate3D(0, -300px, 0)' }\r\n        ], {\r\n            duration: 300,\r\n        });\r\n        setTimeout(function () {\r\n            clearAll.style.display = 'none';\r\n        }, 300);\r\n        document.querySelectorAll('.card_little').forEach(function (card) {\r\n            card.animate([\r\n                { transform: 'translate3D(0, 0, 0)' },\r\n                { transform: 'translate3D(300px, 0, 0)' }\r\n            ], {\r\n                duration: 200,\r\n            });\r\n            setTimeout(function () {\r\n                card.remove();\r\n            }, 200);\r\n        });\r\n        setTimeout(function () {\r\n            countCards();\r\n        }, 200);\r\n        var cards_hover = document.querySelectorAll('.add_to_cart');\r\n        cards_hover.forEach(function (add) {\r\n            add.parentElement.classList.remove('opacity-appear');\r\n            add.children[0].innerHTML = 'add to cart';\r\n            add.classList.remove('in_cart');\r\n        });\r\n        var total_sum = document.querySelector('.total__sum');\r\n        total_sum.innerHTML = '';\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://onlinestore/./src/js/add-to-cart.ts?");

/***/ }),

/***/ "./src/js/cards-data.ts":
/*!******************************!*\
  !*** ./src/js/cards-data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsData\": () => (/* binding */ CardsData)\n/* harmony export */ });\n/* harmony import */ var _assets_products_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/products/1.jpg */ \"./src/assets/products/1.jpg\");\n/* harmony import */ var _assets_products_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/products/2.jpg */ \"./src/assets/products/2.jpg\");\n/* harmony import */ var _assets_products_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/products/3.jpg */ \"./src/assets/products/3.jpg\");\n/* harmony import */ var _assets_products_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/products/4.jpg */ \"./src/assets/products/4.jpg\");\n/* harmony import */ var _assets_products_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/products/5.jpg */ \"./src/assets/products/5.jpg\");\n/* harmony import */ var _assets_products_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/products/6.jpg */ \"./src/assets/products/6.jpg\");\n/* harmony import */ var _assets_products_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/products/7.jpg */ \"./src/assets/products/7.jpg\");\n/* harmony import */ var _assets_products_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/products/8.jpg */ \"./src/assets/products/8.jpg\");\n/* harmony import */ var _assets_products_9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/products/9.jpg */ \"./src/assets/products/9.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar CardsData = [\r\n    { 'id': '1',\r\n        'img': _assets_products_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        'alt': 'blue shoulder-off dress',\r\n        'name': 'blue shoulder-off dress',\r\n        'category': 'plain dress',\r\n        'price': '35',\r\n        'color': 'blue',\r\n        'sizes': 'M'\r\n    },\r\n    { 'id': '2',\r\n        'img': _assets_products_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        'alt': 'blue shirt dress',\r\n        'name': 'blue shirt dress',\r\n        'category': 'long-sleeved dress',\r\n        'price': '40',\r\n        'color': 'blue',\r\n        'sizes': 'S'\r\n    },\r\n    { 'id': '3',\r\n        'img': _assets_products_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        'alt': 'Stripped long-sleeved dress',\r\n        'name': 'stripped long-sleeved dress',\r\n        'category': 'printed dress',\r\n        'price': '33',\r\n        'color': 'white',\r\n        'sizes': 'L'\r\n    },\r\n    { 'id': '4',\r\n        'img': _assets_products_4_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n        'alt': 'red dress',\r\n        'name': 'little red dress',\r\n        'category': 'new arrival',\r\n        'price': '50',\r\n        'color': 'red',\r\n        'sizes': 'L'\r\n    },\r\n    { 'id': '5',\r\n        'img': _assets_products_5_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        'alt': 'green dress',\r\n        'name': 'green shirt dress',\r\n        'category': 'new arrival',\r\n        'price': '44',\r\n        'color': 'green',\r\n        'sizes': 'XS'\r\n    },\r\n    { 'id': '6',\r\n        'img': _assets_products_6_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n        'alt': 'yellow dress',\r\n        'name': 'yellow long-sleeved dress',\r\n        'category': 'plain dress',\r\n        'price': '38',\r\n        'color': 'yellow',\r\n        'sizes': 'S'\r\n    },\r\n    { 'id': '7',\r\n        'img': _assets_products_7_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n        'alt': 'Stripped long-sleeved dress',\r\n        'name': 'stripped long-sleeved dress',\r\n        'category': 'long-sleeved',\r\n        'price': '30',\r\n        'color': 'white',\r\n        'sizes': 'XL'\r\n    },\r\n    { 'id': '8',\r\n        'img': _assets_products_8_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n        'alt': 'long-sleeved dress',\r\n        'name': 'black and white dress',\r\n        'category': 'long-sleeved',\r\n        'price': '80',\r\n        'color': 'black',\r\n        'sizes': 'M'\r\n    },\r\n    { 'id': '9',\r\n        'img': _assets_products_9_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n        'alt': 'coral dress',\r\n        'name': 'amazing coral dress',\r\n        'category': 'plain dress',\r\n        'price': '65',\r\n        'color': 'red',\r\n        'sizes': 'L'\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://onlinestore/./src/js/cards-data.ts?");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards-data */ \"./src/js/cards-data.ts\");\n/* harmony import */ var _add_to_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-to-cart */ \"./src/js/add-to-cart.ts\");\n/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ \"./node_modules/nouislider/dist/nouislider.js\");\n/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ \"./node_modules/nouislider/dist/nouislider.css\");\n\r\n\r\n\r\n\r\nwindow.addToCart = _add_to_cart__WEBPACK_IMPORTED_MODULE_1__.addToCart;\r\nvar wrapper = document.querySelector(\".products__wrapper\");\r\nvar colors = document.querySelectorAll('.filters__colors_block');\r\nfunction createCard(CardsData) {\r\n    for (var k = 0; k < CardsData.length; k++) {\r\n        var card = \"<div class = \\\"card\\\" id='\".concat(CardsData[k].id, \"'>\\n        <img class=\\\"card__favs\\\" src=\\\"favs.png\\\">\\n        <div class = 'card__hover_wrapper'>\\n            <img src=\\\"\").concat(CardsData[k].img, \"\\\" alt=\\\"\").concat(CardsData[k].alt, \"\\\" class = \\\"card__img\\\">\\n            <div class = 'card__hover'>\\n                <div class = 'add_to_cart' onclick = 'addToCart(\").concat(k, \")', onclick = 'addAppear(\").concat(k, \")'>\\n                <p class = 'subtitle'>Add to cart</p>\\n                </div>\\n            </div>\\n        </div>\\n        <div class=\\\"card__info\\\">\\n                    <div>\\n                        <p class=\\\"subtitle name\\\">\").concat(CardsData[k].name, \"</p>\\n                        <p class=\\\"text\\\">\").concat(CardsData[k].category, \"</p>\\n                        <p class=\\\"text colors\\\">\").concat(CardsData[k].color, \"</p>\\n                        <p class=\\\"text\\\" style = 'color: black'>\").concat(CardsData[k].sizes, \"</p>\\n                    </div>\\n                    <div class=\\\"card__price\\\">\").concat(CardsData[k].price, \"$</div>\\n                </div>\\n        </div>\");\r\n        wrapper.innerHTML += card;\r\n        addHover();\r\n        addFavs();\r\n        var colors_1 = document.querySelectorAll('.colors');\r\n        colors_1.forEach(function (color) {\r\n            var value = color.innerHTML;\r\n            switch (value) {\r\n                case 'red':\r\n                    color.classList.add('red');\r\n                    break;\r\n                case 'yellow':\r\n                    color.classList.add('yellow');\r\n                    break;\r\n                case 'green':\r\n                    color.classList.add('green');\r\n                    break;\r\n                case 'blue':\r\n                    color.classList.add('blue');\r\n                    break;\r\n                case 'white':\r\n                    color.classList.add('white');\r\n                    break;\r\n                case 'black':\r\n                    color.classList.add('black');\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    createCard(_cards_data__WEBPACK_IMPORTED_MODULE_0__.CardsData);\r\n    // document.querySelectorAll('.add_to_cart').forEach(btn =>{\r\n    //     btn.addEventListener('click', ()=>{\r\n    //     })\r\n    // })\r\n    // Sort ---------------------------------------------------------------------\r\n    var sort = document.querySelector('.sort_field');\r\n    sort.addEventListener('change', function () {\r\n        var option = sort.value;\r\n        switch (option) {\r\n            case 'name-up':\r\n                var cards = document.querySelectorAll('.card');\r\n                Array.from(cards).sort(function (a, b) {\r\n                    a = a.querySelector('.name').innerText.toLowerCase();\r\n                    b = b.querySelector('.name').innerText.toLowerCase();\r\n                    return b > a ? -1 : 1;\r\n                }).forEach(function (n, i) {\r\n                    n;\r\n                    n.style.order = i;\r\n                });\r\n                break;\r\n            case 'name-down':\r\n                var cards = document.querySelectorAll('.card');\r\n                Array.from(cards).sort(function (a, b) {\r\n                    a = a.querySelector('.name').innerText.toLowerCase();\r\n                    b = b.querySelector('.name').innerText.toLowerCase();\r\n                    return b > a ? 1 : -1;\r\n                }).forEach(function (n, i) {\r\n                    n;\r\n                    n.style.order = i;\r\n                });\r\n                break;\r\n            case 'price-up':\r\n                var cards = document.querySelectorAll('.card');\r\n                Array.from(cards).sort(function (a, b) {\r\n                    a = a.querySelector('.card__price').innerText;\r\n                    b = b.querySelector('.card__price').innerText;\r\n                    return b > a ? -1 : 1;\r\n                }).forEach(function (n, i) {\r\n                    n;\r\n                    n.style.order = i;\r\n                });\r\n                break;\r\n            case 'price-down':\r\n                var cards = document.querySelectorAll('.card');\r\n                Array.from(cards).sort(function (a, b) {\r\n                    a = a.querySelector('.card__price').innerText;\r\n                    b = b.querySelector('.card__price').innerText;\r\n                    return b > a ? 1 : -1;\r\n                }).forEach(function (n, i) {\r\n                    n;\r\n                    n.style.order = i;\r\n                });\r\n                break;\r\n        }\r\n    });\r\n    // filter by category---------------------------------------------------\r\n    var category_field = document.querySelector('.filters__categories_checkbox');\r\n    category_field.addEventListener('change', function () {\r\n        var category = document.querySelector('#categories input:checked');\r\n        var value = category.value;\r\n        function filterCategory(name) {\r\n            document.querySelectorAll('.card').forEach(function (card) {\r\n                var category = card.children[2].children[0].children[1].innerHTML;\r\n                var isCategory = category === name;\r\n                if (!isCategory) {\r\n                    animationHide(card);\r\n                }\r\n                else\r\n                    animationAppear(card);\r\n            });\r\n        }\r\n        switch (value) {\r\n            case 'new-arrivals':\r\n                filterCategory('new arrival');\r\n                break;\r\n            case 'printed-dress':\r\n                filterCategory('printed dress');\r\n                break;\r\n            case 'plain-dress':\r\n                filterCategory('plain dress');\r\n                break;\r\n            case 'long-sleeved':\r\n                filterCategory('long-sleeved');\r\n                break;\r\n            default:\r\n                document.querySelectorAll('.card').forEach(function (card) {\r\n                    animationAppear(card);\r\n                });\r\n                break;\r\n        }\r\n    });\r\n    // filter by color---------------------------------------------------\r\n    colors.forEach(function (color) {\r\n        color.addEventListener('click', function () {\r\n            var option = color.className;\r\n            color.classList.add('color_active');\r\n            color.lastElementChild.classList.add('display-flex');\r\n            function remove_color_active(className) {\r\n                colors.forEach(function (color) {\r\n                    if (!(color.classList.contains(className))) {\r\n                        color.classList.remove('color_active');\r\n                        color.lastElementChild.classList.remove('display-flex');\r\n                    }\r\n                });\r\n            }\r\n            function filterColor(value) {\r\n                document.querySelectorAll('.card').forEach(function (card) {\r\n                    var category = card.children[2].children[0].children[2].innerHTML;\r\n                    var isCategory = category === value;\r\n                    if (!isCategory) {\r\n                        animationHide(card);\r\n                    }\r\n                    else\r\n                        animationAppear(card);\r\n                });\r\n            }\r\n            switch (option) {\r\n                case 'filters__colors_block _red':\r\n                    filterColor('red');\r\n                    remove_color_active('_red');\r\n                    break;\r\n                case 'filters__colors_block _black':\r\n                    filterColor('black');\r\n                    remove_color_active('_black');\r\n                    break;\r\n                case 'filters__colors_block _yellow':\r\n                    filterColor('yellow');\r\n                    remove_color_active('_yellow');\r\n                    break;\r\n                case 'filters__colors_block _green':\r\n                    filterColor('green');\r\n                    remove_color_active('_green');\r\n                    break;\r\n                case 'filters__colors_block _blue':\r\n                    filterColor('blue');\r\n                    remove_color_active('_blue');\r\n                    break;\r\n                case 'filters__colors_block _white':\r\n                    filterColor('white');\r\n                    remove_color_active('_white');\r\n                    break;\r\n            }\r\n        });\r\n    });\r\n    //SORT BY SIZE---------------------------------------------------------------------\r\n    var sizes = document.querySelector('#size');\r\n    sizes.addEventListener(\"change\", function () {\r\n        var checked = document.querySelectorAll('#size input:checked');\r\n        function filterSize(value) {\r\n            document.querySelectorAll('.card').forEach(function (card) {\r\n                var category = card.children[2].children[0].children[3].innerHTML;\r\n                var isCategory = category === value;\r\n                var isNone = card.classList.contains('display-none');\r\n                var isShow = card.classList.contains('show');\r\n                if (!isNone && !isShow) {\r\n                    if (!isCategory) {\r\n                        card.classList.add('display-none');\r\n                    }\r\n                    else {\r\n                        card.classList.add('show');\r\n                    }\r\n                }\r\n                else if (isCategory) {\r\n                    card.classList.remove('display-none');\r\n                    card.classList.add('show');\r\n                }\r\n            });\r\n        }\r\n        if (checked.length == 0) {\r\n            document.querySelectorAll('.card').forEach(function (card) {\r\n                card.classList.remove('display-none');\r\n                card.classList.remove('show');\r\n            });\r\n        }\r\n        else {\r\n            checked.forEach(function (size) {\r\n                switch (size.id) {\r\n                    case 'XS':\r\n                        if (size.checked != true) {\r\n                            console.log(size.checked);\r\n                        }\r\n                        else\r\n                            filterSize('XS');\r\n                        break;\r\n                    case 'S':\r\n                        filterSize('S');\r\n                        break;\r\n                    case 'M':\r\n                        filterSize('M');\r\n                        break;\r\n                    case 'L':\r\n                        filterSize('L');\r\n                        break;\r\n                    case 'XL':\r\n                        filterSize('XL');\r\n                        break;\r\n                    default:\r\n                        break;\r\n                }\r\n            });\r\n        }\r\n    });\r\n    //  favorites -------------------------------------------------------------------------\r\n    var favorites = document.querySelector('.favorites');\r\n    var card__favs = document.querySelectorAll('.card__favs');\r\n    var favs_active = document.querySelectorAll('.card__favs_active');\r\n    var no_favs = document.querySelector('.no-favs');\r\n    favorites.addEventListener('click', function () {\r\n        favorites.classList.toggle('favs-active');\r\n        if (favorites.classList.contains('favs-active')) {\r\n            for (var i = 0; i < card__favs.length; i++) {\r\n                var fav = card__favs[i];\r\n                var isFav = fav.classList.contains('card__favs_active');\r\n                if (!isFav) {\r\n                    animationHide(fav.parentElement);\r\n                }\r\n            }\r\n            if (favs_active.length == 0) {\r\n                no_favs.classList.add('appear');\r\n                no_favs.classList.remove('hide');\r\n            }\r\n        }\r\n        else {\r\n            document.querySelector('.no-favs').classList.remove('appear');\r\n            document.querySelector('.no-favs').classList.add('hide');\r\n            for (var i = 0; i < card__favs.length; i++) {\r\n                var fav = card__favs[i];\r\n                animationAppear(fav.parentElement);\r\n            }\r\n        }\r\n    });\r\n});\r\nfunction addHover() {\r\n    var cards_hover = document.querySelectorAll('.add_to_cart');\r\n    cards_hover.forEach(function (add) {\r\n        add.addEventListener('click', function () {\r\n            add.parentElement.classList.add('opacity-appear');\r\n            add.children[0].innerHTML = 'in cart';\r\n            add.classList.add('in_cart');\r\n        });\r\n    });\r\n}\r\nfunction addFavs() {\r\n    var card__favs = document.querySelectorAll('.card__favs');\r\n    var _loop_1 = function (i) {\r\n        var el = card__favs[i];\r\n        el.addEventListener('click', function () {\r\n            el.classList.toggle('card__favs_active');\r\n            el.src = 'favs2.png';\r\n            if (el.classList.contains('card__favs_active')) {\r\n                el.src = 'favs2.png';\r\n            }\r\n            else {\r\n                el.src = 'favs.png';\r\n                var favorites = document.querySelector('.favorites');\r\n                if (favorites.classList.contains('favs-active')) {\r\n                    animationHide(el.parentElement);\r\n                    var favs_active_1 = document.querySelectorAll('.card__favs_active');\r\n                    setTimeout(function () {\r\n                        if (favs_active_1.length == 0) {\r\n                            document.querySelector('.no-favs').classList.add('appear');\r\n                        }\r\n                    }, 200);\r\n                }\r\n            }\r\n        });\r\n    };\r\n    for (var i = 0; i < card__favs.length; i++) {\r\n        _loop_1(i);\r\n    }\r\n}\r\nwindow.removeColorFilter = removeColorFilter;\r\nfunction removeColorFilter() {\r\n    document.querySelectorAll('.card').forEach(function (card) {\r\n        animationAppear(card);\r\n    });\r\n}\r\n// noUiSlider---------------------------------------------------------\r\nvar slider = document.getElementById('slider');\r\nnouislider__WEBPACK_IMPORTED_MODULE_2__.create(slider, {\r\n    start: [20, 100],\r\n    tooltips: true,\r\n    connect: true,\r\n    range: {\r\n        'min': 20,\r\n        'max': 100\r\n    }\r\n});\r\nvar reset_slider = document.querySelector('.reset-slider');\r\nreset_slider.addEventListener('click', function (e) {\r\n    slider.noUiSlider.reset();\r\n});\r\n// slider.noUiSlider.on('update', function(values, handle){\r\n//     // console.log(values);\r\n//     // console.log(handle)\r\n// })\r\n//search---------------------------------------------------------------------------------------------\r\nvar searchInput = document.querySelector('[data-search]');\r\nvar searchBtn = document.querySelector('.search-btn');\r\nsearchBtn.addEventListener('click', function () {\r\n    searchBtn.classList.toggle('search-btn_active');\r\n    searchInput.focus();\r\n    if (searchInput.classList.contains('search-appear')) {\r\n        searchInput.classList.remove('search-appear');\r\n        searchInput.classList.add('search-disappear');\r\n    }\r\n    else {\r\n        searchInput.classList.add('search-appear');\r\n        searchInput.classList.remove('search-disappear');\r\n    }\r\n});\r\nsearchInput.addEventListener('input', function (e) {\r\n    var value = e.target.value.toLowerCase();\r\n    var no_results = document.querySelector('.no-results');\r\n    document.querySelectorAll('.card').forEach(function (card) {\r\n        var name = card.children[2].children[0].children[0].innerHTML.toLowerCase();\r\n        var isVisible = name.includes(value);\r\n        card.classList.toggle('display-none', !isVisible);\r\n    });\r\n    if (document.querySelectorAll('.display-none').length === document.querySelectorAll('.card').length) {\r\n        no_results.classList.add('appear');\r\n    }\r\n    else\r\n        no_results.classList.remove('appear');\r\n});\r\nfunction animationAppear(arg) {\r\n    arg.animate([\r\n        { opacity: 0 },\r\n        { opacity: 1 }\r\n    ], {\r\n        duration: 500,\r\n    });\r\n    setTimeout(function () {\r\n        arg.classList.remove('display-none');\r\n    }, 200);\r\n}\r\nfunction animationHide(arg) {\r\n    arg.animate([\r\n        { transform: 'translate3D(0, 0, 0)' },\r\n        { transform: 'translate3D(0, 500px, 0)' }\r\n    ], {\r\n        duration: 200,\r\n    });\r\n    setTimeout(function () {\r\n        arg.classList.add('display-none');\r\n    }, 200);\r\n}\r\n\n\n//# sourceURL=webpack://onlinestore/./src/js/main.ts?");

/***/ }),

/***/ "./src/assets/icons/favs2.png":
/*!************************************!*\
  !*** ./src/assets/icons/favs2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e292f4ff8aa5d62cd7d7.png\";\n\n//# sourceURL=webpack://onlinestore/./src/assets/icons/favs2.png?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("836fcb2ecfb1d96c8337")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "onlinestore:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateonlinestore"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;