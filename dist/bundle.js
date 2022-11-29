!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=React},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";n.r(e);var r,o=n(0),a=n(1),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(t){function e(e){var n=t.call(this,e)||this;return n.state=n.getInitState(),n}return i(e,t),e.prototype.getInitState=function(){return{cells:Array.apply(null,Array(9)).map((function(){return""})),gameState:""}},e.prototype.resetState=function(){this.setState(this.getInitState())},e.prototype.componentDidMount=function(){var t=this;window.addEventListener("restart",(function(){return t.resetState()}))},e.prototype.componentWillUnmount=function(){var t=this;window.removeEventListener("restart",(function(){return t.resetState()}))},e.prototype.handleGameStateChange=function(t){var e=new CustomEvent("gameStateChange",{detail:this.state.gameState});e.initEvent("gameStateChange",!1,!0),window.dispatchEvent(e)},e.prototype.checkGameState=function(t,e,n){if(""!==this.state.gameState)return this.state.gameState;var r=this.check3Cells(t,3*Math.floor(e/3),3*Math.floor(e/3)+1,3*Math.floor(e/3)+2);return r||((r=this.check3Cells(t,e%3,e%3+3,e%3+6))?r:(r=this.check3Cells(t,0,4,8))?r:(r=this.check3Cells(t,2,4,6))||(0===this.findAllEmptyCells(t).length?"Draw :(":""))},e.prototype.check3Cells=function(t,e,n,r){return t[e]===t[n]&&t[n]===t[r]&&""!==t[e]?"X"===t[e]?"X Wins!":"O Wins!":void 0},e.prototype.findAllEmptyCells=function(t){return t.map((function(t,e){return""===t?e:-1})).filter((function(t){return-1!==t}))},e.prototype.move=function(t,e,n){var r=this;if(""===this.state.gameState&&""===this.state.cells[t]){var o=this.state.cells.slice();o[t]=e;var a=this.state.gameState;this.setState({cells:o,gameState:this.checkGameState(o,t,e)},(function(){r.state.gameState!==a&&r.handleGameStateChange(r.state.gameState),n&&n.call(r)}))}},e.prototype.handleNewPlayerMove=function(t){var e=this;this.move(t,"X",(function(){var t=e.findAllEmptyCells(e.state.cells),n=t[Math.floor(Math.random()*t.length)];e.move(n,"O")}))},e.prototype.render=function(){var t=this,e=this.state.cells.map((function(e,n){return o.createElement(s,{key:n,pos:n,val:e,handleMove:function(){return t.handleNewPlayerMove(n)}})}));return o.createElement("div",{className:"board"},e)},e}(o.Component),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.posToClassName=function(t){var e="cell";switch(Math.floor(t/3)){case 0:e+=" top";break;case 2:e+=" bottom"}switch(t%3){case 0:e+=" left";break;case 2:e+=" right"}return e},e.prototype.handleClick=function(t){this.props.handleMove()},e.prototype.render=function(){var t=this,e=this.props.val;return""===this.props.val&&(e=""),o.createElement("div",{className:this.posToClassName(this.props.pos),onClick:function(e){return t.handleClick(e)}},o.createElement("div",{className:e}," ",this.props.val," "))},e}(o.Component),u=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.handleClick=function(t){var e=document.createEvent("Event");e.initEvent("restart",!1,!0),window.dispatchEvent(e)},e.prototype.render=function(){var t=this;return o.createElement("a",{href:"#",className:"restartBtn",onClick:function(e){return t.handleClick(e)}},"Restart")},e}(o.Component),p=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(t){function e(e){var n=t.call(this,e)||this;return n.state={gameState:""},n}return p(e,t),e.prototype.handleGameStateChange=function(t){this.setState({gameState:t.detail})},e.prototype.handleRestart=function(t){this.setState({gameState:""})},e.prototype.componentDidMount=function(){var t=this;window.addEventListener("gameStateChange",(function(e){return t.handleGameStateChange(e)})),window.addEventListener("restart",(function(e){return t.handleRestart(e)}))},e.prototype.componentWillUnmount=function(){var t=this;window.removeEventListener("gameStateChange",(function(e){return t.handleGameStateChange(e)})),window.removeEventListener("restart",(function(e){return t.handleRestart(e)}))},e.prototype.render=function(){return o.createElement("div",{className:"gameStateBar"}," ",this.state.gameState," ")},e}(o.Component),h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.render=function(){return o.createElement("div",{className:"app"},o.createElement(c,null),o.createElement("div",null,o.createElement("span",{className:"description t1"}," Player(X) "),o.createElement("span",{className:"description t2"}," Computer(O) ")),o.createElement(l,null),o.createElement(f,null))},e}(o.Component);Object(a.render)(o.createElement(m,null),document.getElementById("content"))}]);
//# sourceMappingURL=bundle.js.map