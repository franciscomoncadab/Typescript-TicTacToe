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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _restartBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _gameStateBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "app" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_board__WEBPACK_IMPORTED_MODULE_2__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "description t1" }, " Player(X) "),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "description t2" }, " Computer(O) ")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_restartBtn__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_gameStateBar__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, null), document.getElementById("content"));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getInitState();
        return _this;
    }
    Board.prototype.getInitState = function () {
        var cells = Array.apply(null, Array(9)).map(function () { return ""; });
        return { cells: cells, gameState: "" };
    };
    Board.prototype.resetState = function () {
        this.setState(this.getInitState());
    };
    Board.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener("restart", function () { return _this.resetState(); });
    };
    Board.prototype.componentWillUnmount = function () {
        var _this = this;
        window.removeEventListener("restart", function () { return _this.resetState(); });
    };
    // Fire a global event notifying GameState changes
    Board.prototype.handleGameStateChange = function (newState) {
        var event = new CustomEvent("gameStateChange", { "detail": this.state.gameState });
        event.initEvent("gameStateChange", false, true);
        window.dispatchEvent(event);
    };
    // check the game state - use the latest move
    Board.prototype.checkGameState = function (cells, latestPos, latestVal) {
        if (this.state.gameState !== "") {
            return this.state.gameState;
        }
        // check row
        var result = this.check3Cells(cells, 3 * Math.floor(latestPos / 3), 3 * Math.floor(latestPos / 3) + 1, 3 * Math.floor(latestPos / 3) + 2);
        if (result) {
            return result;
        }
        // check col
        result = this.check3Cells(cells, latestPos % 3, latestPos % 3 + 3, latestPos % 3 + 6);
        if (result) {
            return result;
        }
        // check diag
        result = this.check3Cells(cells, 0, 4, 8);
        if (result) {
            return result;
        }
        result = this.check3Cells(cells, 2, 4, 6);
        if (result) {
            return result;
        }
        // check draw - if all cells are filled
        if (this.findAllEmptyCells(cells).length === 0) {
            return "Draw :(";
        }
        return "";
    };
    // check if 3 cells have same non-empty val - return the winner state; otherwise undefined 
    Board.prototype.check3Cells = function (cells, pos0, pos1, pos2) {
        if (cells[pos0] === cells[pos1] &&
            cells[pos1] === cells[pos2] &&
            cells[pos0] !== "") {
            if (cells[pos0] === "X") {
                return "X Wins!";
            }
            return "O Wins!";
        }
        else {
            return undefined;
        }
    };
    // list all empty cell positions
    Board.prototype.findAllEmptyCells = function (cells) {
        return cells.map(function (v, i) {
            if (v === "") {
                return i;
            }
            else {
                return -1;
            }
        }).filter(function (v) { return v !== -1; });
    };
    // make a move
    Board.prototype.move = function (pos, val, callback) {
        var _this = this;
        if (this.state.gameState === "" &&
            this.state.cells[pos] === "") {
            var newCells = this.state.cells.slice();
            newCells[pos] = val;
            var oldState_1 = this.state.gameState;
            this.setState({ cells: newCells, gameState: this.checkGameState(newCells, pos, val) }, function () {
                if (_this.state.gameState !== oldState_1) {
                    _this.handleGameStateChange(_this.state.gameState);
                }
                if (callback) {
                    callback.call(_this);
                }
            });
        }
    };
    // handle a new move from player
    Board.prototype.handleNewPlayerMove = function (pos) {
        var _this = this;
        this.move(pos, _constants__WEBPACK_IMPORTED_MODULE_1__["playerCell"], function () {
            // AI make a random move following player's move
            var emptyCells = _this.findAllEmptyCells(_this.state.cells);
            var pos = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            _this.move(pos, _constants__WEBPACK_IMPORTED_MODULE_1__["aiCell"]);
        });
    };
    Board.prototype.render = function () {
        var _this = this;
        var cells = this.state.cells.map(function (v, i) {
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Cell, { key: i, pos: i, val: v, handleMove: function () { return _this.handleNewPlayerMove(i); } }));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "board" }, cells));
    };
    return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Board);
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // position of cell to className
    Cell.prototype.posToClassName = function (pos) {
        var className = "cell";
        switch (Math.floor(pos / 3)) {
            case 0:
                className += " top";
                break;
            case 2:
                className += " bottom";
                break;
            default: break;
        }
        switch (pos % 3) {
            case 0:
                className += " left";
                break;
            case 2:
                className += " right";
                break;
            default:
                break;
        }
        return className;
    };
    Cell.prototype.handleClick = function (e) {
        this.props.handleMove();
    };
    Cell.prototype.render = function () {
        var _this = this;
        var name = this.props.val;
        if (this.props.val === "") {
            name = "";
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: this.posToClassName(this.props.pos), onClick: function (e) { return _this.handleClick(e); } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: name },
                " ",
                this.props.val,
                " "));
    };
    return Cell;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCell", function() { return playerCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aiCell", function() { return aiCell; });
var playerCell = "X";
var aiCell = "O";


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RestartBtn = /** @class */ (function (_super) {
    __extends(RestartBtn, _super);
    function RestartBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Fire a global event notifying restart of game
    RestartBtn.prototype.handleClick = function (e) {
        var event = document.createEvent("Event");
        event.initEvent("restart", false, true);
        window.dispatchEvent(event);
    };
    RestartBtn.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: "#", className: "restartBtn", onClick: function (e) { return _this.handleClick(e); } }, "Restart");
    };
    return RestartBtn;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (RestartBtn);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GameStateBar = /** @class */ (function (_super) {
    __extends(GameStateBar, _super);
    function GameStateBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { gameState: "" };
        return _this;
    }
    GameStateBar.prototype.handleGameStateChange = function (e) {
        this.setState({ gameState: e.detail });
    };
    GameStateBar.prototype.handleRestart = function (e) {
        this.setState({ gameState: "" });
    };
    GameStateBar.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener("gameStateChange", function (e) { return _this.handleGameStateChange(e); });
        window.addEventListener("restart", function (e) { return _this.handleRestart(e); });
    };
    GameStateBar.prototype.componentWillUnmount = function () {
        var _this = this;
        window.removeEventListener("gameStateChange", function (e) { return _this.handleGameStateChange(e); });
        window.removeEventListener("restart", function (e) { return _this.handleRestart(e); });
    };
    GameStateBar.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "gameStateBar" },
            " ",
            this.state.gameState,
            " "));
    };
    return GameStateBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (GameStateBar);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map