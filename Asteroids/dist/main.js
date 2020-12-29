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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\n\r\n\r\n\r\nfunction Asteroid(options) {\r\n    \r\n    this.pos = options.pos;\r\n    const colors = ['gray', 'blue', 'purple']\r\n    let randColor = colors[Math.floor(Math.random() * colors.length)];\r\n    let randNum = Math.floor(Math.random() * 60);\r\n    this.COLOR = randColor;\r\n    this.RADIUS = randNum;\r\n    this.vel = Util.randomVec(20);\r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject)\r\n\r\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n    \n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    \n    ctx.beginPath()\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI\n    )\n    ctx.stroke()\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.draw(ctx)\n}\n\n\nmodule.exports = MovingObject\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("\r\n// Util.inherits = function(childClass, parentClass) {\r\n\r\n// };\r\n\r\nconst Util = {\r\n    inherits(childClass, parentClass) {\r\n        function Surrogate() {}\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec(length) {\r\n        // debugger\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n\r\n      // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n    }\r\n    \r\n}\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener('DOMContentLoaded', function(){\n   \n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = window.innerWidth;\n    canvasEl.height = window.innerHeight;\n\n    const ctx = canvasEl.getContext('2d');\n\n    const mo = new Asteroid({\n        pos: [150, 300]\n    });\n    \n    // const mo = new MovingObject({\n    //     pos: [0, 300],\n    //     vel: [30, 30],\n    //     radius: 50,\n    //     color: \"#00FF00\"\n    // });\n    \n    const mo2 = new MovingObject({\n        pos: [150, 300],\n        vel: [30, 30],\n        radius: 50,\n        color: \"#00FF00\"\n    });\n    \n    function drawTest() {\n        // debugger\n        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n        mo.draw(ctx); \n        mo.move(ctx);\n        mo2.move(ctx);\n    }\n    setInterval(drawTest.bind(null, ctx), 100)\n    \n})\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;