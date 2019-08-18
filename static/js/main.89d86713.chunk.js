(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),l=t(7),c=t.n(l),a=(t(25),t(2)),i=t(8),u=t(9),f=t(10),s=t(15),d=t(11),m=t(16),b=t(1);function p(){var e=Object(a.a)(["\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return e},e}function v(){var e=Object(a.a)(["\n  align-items: center;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  justify-content: center;\n  background-color: ",";\n"]);return v=function(){return e},e}var h=b.b.main(v(),function(e){return e.theme.background}),g=b.b.div(p()),y=function(e){var n=e.children;return o.a.createElement(h,null,o.a.createElement(g,null,n))};function x(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 30px;\n  left: 0;\n"]);return x=function(){return e},e}function O(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 15px;\n  padding: 5px;\n  text-transform: uppercase;\n"]);return O=function(){return e},e}function w(){var e=Object(a.a)(["\n  min-width: 75px;\n  text-align: center;\n  justify-content: center;\n  background-color: ",";\n  margin-left: 5px;\n  padding: 5px;\n  border-radius: 5px;\n"]);return w=function(){return e},e}function C(){var e=Object(a.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]);return C=function(){return e},e}function j(){var e=Object(a.a)(["\n  font-weight: bold;\n  font-size: 4em;\n  text-align: center;\n  color: ",";\n"]);return j=function(){return e},e}function E(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return E=function(){return e},e}function k(e){var n=e.score,t=e.bestScore;return o.a.createElement(_,null,o.a.createElement(z,null,"2048"),o.a.createElement(P,null,o.a.createElement(T,null,o.a.createElement(D,null,"Score"),o.a.createElement(A,null,n)),o.a.createElement(T,null,o.a.createElement(D,null,"Best"),o.a.createElement(A,null,t))))}k.defaultProps={score:0,bestScore:0};var _=b.b.div(E()),z=b.b.div(j(),function(e){return e.theme.labelColor}),P=b.b.div(C()),T=b.b.div(w(),function(e){return e.theme.primaryColor}),D=b.b.div(O(),function(e){return e.theme.labelColor}),A=b.b.div(x(),function(e){return e.theme.white}),L=k;function G(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: bold;\n  font-size: 15px;\n  padding: 5px;\n"]);return G=function(){return e},e}function S(){var e=Object(a.a)(["\n  min-width: 100px;\n  text-align: center;\n  justify-content: center;\n  background-color: ",";\n  padding: 5px;\n  text-transform: capitalize;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px;\n"]);return S=function(){return e},e}function F(){var e=Object(a.a)(["\n  background-color: transparent;\n  padding: 5px;\n  text-transform: capitalize;\n  font-size: 32px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return F=function(){return e},e}function K(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n"]);return K=function(){return e},e}function U(e){var n=e.selectedTheme,t=e.changeTheme,r=e.newGame;return o.a.createElement(W,null,o.a.createElement(N,{onClick:t},"light"===n?o.a.createElement("span",{role:"img","aria-label":n},"\ud83c\udf12"):o.a.createElement("span",{role:"img","aria-label":n},"\ud83c\udf14")),o.a.createElement(R,{onClick:r},o.a.createElement(I,null,"New Game")))}U.defaultProps={selectedTheme:"light"};var W=b.b.div(K()),N=b.b.button(F()),R=b.b.button(S(),function(e){return e.theme.primaryColor}),I=b.b.div(G(),function(e){return e.theme.labelColor}),H=U,M=t(19);function B(e){return e<100?55:e<1e3?40:e<1e4?35:25}function J(){var e=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 5px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 55px;\n  font-weight: bold;\n"]);return J=function(){return e},e}function q(e){var n=e.x,t=e.y,r=e.value,l=e.color,c=(Object(M.a)(e,["x","y","value","color"]),{});n&&t&&(c={gridColumn:"".concat(n,"/").concat(n+1),gridRow:"".concat(t,"/").concat(t+1),fontSize:B(r)});var a=r?"cellColor_".concat(r):l;return o.a.createElement(Q,{x:n,y:t,value:r,style:c,backgroundColor:a},r)}q.defaultProps={color:"secondaryColor"};var Q=b.b.div(J(),function(e){var n=e.theme;return n[e.backgroundColor]||n.cellColor},function(e){var n=e.theme;return e.value<8?n.cellLabel:n.white}),V=q;function X(){var e=Object(a.a)(["\n  background-color: transparent;\n"]);return X=function(){return e},e}function Y(){var e=Object(a.a)(["\n  height: 380px;\n  width: 380px;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(",", 1fr);\n  grid-template-rows: repeat(",", 1fr);\n  position: absolute;\n"]);return Y=function(){return e},e}function Z(){var e=Object(a.a)(["\n  border-radius: 5px;\n  background-color: ",";\n  height: 380px;\n  width: 380px;\n  padding: 10px;\n"]);return Z=function(){return e},e}function $(e){var n=e.cells,t=e.size;return o.a.createElement(ee,null,o.a.createElement(ne,{size:t},Array.from(new Array(t*t),function(e,n){return n}).map(function(e){return o.a.createElement(V,{key:e})})),o.a.createElement(te,{size:t},n.map(function(e,n){return e.map(function(e,t){return 0===e?null:o.a.createElement(V,{key:"key_".concat(t,"_").concat(n),x:t+1,y:n+1,value:e},e)})})))}$.defaultProps={size:4,theme:"light"};var ee=b.b.div(Z(),function(e){return e.theme.primaryColor}),ne=b.b.div(Y(),function(e){return e.size},function(e){return e.size}),te=Object(b.b)(ne)(X()),re=$;function oe(e){return Math.floor(Math.random()*e)}var le=function(e){for(var n=[],t=e[0].length,r=0;r<t;r++)for(var o=0;o<t;o++)0===e[r][o]&&n.push({x:r,y:o});if(n.length>0){var l=n[oe(n.length)],c=oe(2)>0?2:4;e[l.x][l.y]=c}return e},ce=t(14),ae={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT"},ie={KeyA:ae.LEFT,KeyS:ae.DOWN,KeyD:ae.RIGHT,KeyW:ae.UP,ArrowLeft:ae.LEFT,ArrowDown:ae.DOWN,ArrowRight:ae.RIGHT,ArrowUp:ae.UP},ue=ae,fe=0;var se=function(e,n){var t=e[0].length,r=!1,o=!1;n===ue.LEFT?(e=pe(e),r=!0):n===ue.DOWN?(e=be(e),o=!0):n===ue.UP&&(e=pe(e=be(e)),o=!0,r=!0);for(var l=Object(ce.cloneDeep)(e),c=0;c<t;c++)e[c]=ve(e[c]);var a=function(e,n){for(var t=e[0].length,r=0;r<t;r++)for(var o=0;o<t;o++)if(e[r][o]!==n[r][o])return!0;return!1}(l,e);r&&(e=pe(e)),o&&(e=be(e),e=be(e),e=be(e)),a&&(e=le(e));var i=function(e){for(var n=e[0].length,t=0;t<n;t++)for(var r=0;r<n;r++){if(0===e[t][r])return!1;if(3!==r&&e[t][r]===e[t][r+1])return!1;if(3!==t&&e[t][r]===e[t+1][r])return!1}return!0}(e);return{cells:e,score:fe,gameOver:i}};function de(e){return Array.from(new Array(e),function(){return Array.from(new Array(e),function(){return 0})})}function me(e){var n=e.filter(function(e){return e}),t=e.length-n.length;return n=Array(t).fill(0).concat(n)}function be(e){for(var n=e[0].length,t=de(n),r=0;r<n;r++)for(var o=0;o<n;o++)t[r][o]=e[o][r];return t}function pe(e){for(var n=e[0].length,t=0;t<n;t++)e[t].reverse();return e}function ve(e){return e=me(e),e=me(e=function(e){for(var n=e.length-1;n>=1;n--){var t=e[n],r=e[n-1];t!==r||0===t&&0===r||(e[n]=t+r,o=e[n],fe+=o,e[n-1]=0)}var o;return e}(e))}var he=function(e){var n=de(e);return fe=0,n=le(n),n=le(n)},ge={light:{white:"#fff",background:"#faf8ef",primaryColor:"#bbad9f",secondaryColor:"#cdc1b3",labelColor:"#776e65",cellLabel:"#776e65",cellColor:"#eee4da",cellColor_2:"#eee4da",cellColor_4:"#eee1c9",cellColor_8:"#f3b27a",cellColor_16:"#f69664",cellColor_32:"#f77c5f",cellColor_64:"#f75f3b",cellColor_128:"#edd073",cellColor_256:"#edcc62",cellColor_512:"#edc950",cellColor_1024:"#edc53f",cellColor_2048:"#edc22e"},dark:{white:"#fff",background:"#141d26",primaryColor:"#243447",secondaryColor:"#506680",labelColor:"#506680",cellLabel:"#FFF",cellColor:"#96abc3",cellColor_2:"#96abc3",cellColor_4:"#609cde",cellColor_8:"#004a9c",cellColor_16:"#673ab7",cellColor_32:"#bb26a1",cellColor_64:"#500042",cellColor_128:"#881030",cellColor_256:"#e6104d",cellColor_512:"#e61010",cellColor_1024:"#7b0000",cellColor_2048:"#000000"}};function ye(){var e=Object(a.a)(["\n  font-weight: bold;\n  text-align: center;\n  font-size: 50px;\n  color: ",";\n"]);return ye=function(){return e},e}function xe(){var e=Object(a.a)(["\n  width: 400px;\n  height: 400px;\n  position: absolute;\n  display: flex;\n  z-index: 2;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";;\n  opacity: 0.7;\n"]);return xe=function(){return e},e}var Oe=b.b.div(xe(),function(e){return e.theme.white}),we=b.b.div(ye(),function(e){return e.theme.primaryColor}),Ce=function(){return o.a.createElement(Oe,null,o.a.createElement(we,null,o.a.createElement("p",null,"Game Over!")))};function je(){var e=Object(a.a)(["\n  flex: 1;\n  padding: 10px;\n  flex-direction: column;\n"]);return je=function(){return e},e}function Ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ee(t,!0).forEach(function(n){Object(i.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var _e=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).newGame=function(){t.setState(function(e){return ke({},e,{cells:he(e.size),score:0,gameOver:!1})})},t.handleKeyPress=function(e){if(!t.state.gameOver&&ie[e.code]){var n=se(t.state.cells,ie[e.code]),r=n.cells,o=n.score,l=n.gameOver;t.setState({cells:r,score:o,gameOver:l})}},t.changeTheme=function(){t.setState(function(e){return ke({},e,{selectedTheme:"light"===e.selectedTheme?"dark":"light"})})},t.state={cells:he(4),score:0,size:4,selectedTheme:"light",gameOver:!1},t}return Object(m.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state,n=e.cells,t=e.score,r=e.size,l=e.selectedTheme,c=e.gameOver;return o.a.createElement(b.a,{theme:ge[l]},o.a.createElement(y,null,o.a.createElement(ze,null,o.a.createElement(L,{score:t}),o.a.createElement(H,{selectedTheme:l,changeTheme:this.changeTheme,newGame:this.newGame})),o.a.createElement(ze,null,c&&o.a.createElement(Ce,null),o.a.createElement(re,{cells:n,size:r}))))}}]),n}(r.Component),ze=b.b.div(je()),Pe=_e;c.a.render(o.a.createElement(Pe,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.89d86713.chunk.js.map