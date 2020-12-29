/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.beginPath()\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI\n    )\n    ctx.stroke()\n}\n\nMovingObject.prototype.move = function(ctx){\n \n    this.draw(ctx)\n    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx)\n\n}\n\nconst mo = new MovingObject({\n    pos: [250, 250],\n    vel: [10, 10],\n    radius: 50,\n    color: \"#00FF00\"\n});\n\n\n\nmodule.exports ={\n    MovingObject,\n    draw: MovingObject.prototype.draw,\n    mo,\n} \n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const { mo } = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener('DOMContentLoaded', function(){\n   \n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = window.innerWidth;\n    canvasEl.height = window.innerHeight;\n\n    const ctx = canvasEl.getContext('2d');\n\n    setInterval(mo.move.bind(mo, ctx),100)\n})\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;