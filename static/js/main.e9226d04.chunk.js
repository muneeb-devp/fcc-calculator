(this.webpackJsonpfcc_calculator=this.webpackJsonpfcc_calculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Muneeb_Documents_Dev_Node_React_fcc_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_components_display_display_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(C_Users_Muneeb_Documents_Dev_Node_React_fcc_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calculation=_useState2[0],setCalculation=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState4=Object(C_Users_Muneeb_Documents_Dev_Node_React_fcc_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),display=_useState4[0],setDisplay=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState6=Object(C_Users_Muneeb_Documents_Dev_Node_React_fcc_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),decimalAllowed=_useState6[0],setDecimalAllowed=_useState6[1],buttons="AC / x 7 8 9 - 4 5 6 + 1 2 3 = 0 .".split(" "),operations="+ - / x".split(" "),ids="clear divide multiply seven eight nine subtract four five six add one two three equals zero decimal".split(" "),clearScreen=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";setDisplay(e),setCalculation(e)},btnClicked=function btnClicked(e){var text=e.target.textContent;switch(text){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":case".":if((calculation.indexOf(".")===calculation.length-1||!decimalAllowed)&&"."===text)return;if("-"===display||"+"===display)return console.log("Calculation: ".concat(calculation,"\nDisplay: ").concat(display,"\nText: ").concat(text)),setCalculation(calculation.at(calculation.length-1)!==display?"".concat(calculation).concat(display).concat(text):"".concat(calculation).concat(text)),void setDisplay("".concat(display).concat(text));if(-1!==calculation.indexOf("="))return setCalculation(text),void setDisplay(text);setDisplay("0"!==display&&-1===operations.indexOf(display)?"".concat(display).concat(text):text),setCalculation("0"!==calculation?"".concat(calculation).concat(text):text),"."===text&&decimalAllowed&&setDecimalAllowed(!1);break;case"+":case"-":case"x":case"/":var lastChar=display.length?display.at(display.length-1):"";if(decimalAllowed||setDecimalAllowed(!0),"x"!==lastChar&&"/"!==lastChar&&"+"!==lastChar&&"-"!==lastChar||(setDisplay("".concat(text)),"-"!==text&&setCalculation("".concat(calculation.substring(0,calculation.length-1)).concat(text))),("x"===lastChar||"/"===lastChar)&&("+"===text||"-"===text))return void setDisplay("".concat(text));if(-1!==calculation.indexOf("="))return setCalculation("".concat(display).concat(text)),void setDisplay(text);display.length>0&&-1===operations.indexOf(lastChar)&&setCalculation("".concat(calculation).concat(text)),setDisplay(text);break;case"AC":decimalAllowed||setDecimalAllowed(!0),clearScreen("0");break;case"=":var computation=calculation.replace(new RegExp("x","g"),"*");try{var expressionEval=eval(computation),result=expressionEval%1!==0?expressionEval.toFixed(1):expressionEval;setDisplay(expressionEval),setCalculation("".concat(calculation,"=").concat(result)),decimalAllowed||setDecimalAllowed(!0)}catch(error){console.error(error)}}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"display",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_display_display_component__WEBPACK_IMPORTED_MODULE_4__.a,{text:display,calculation:calculation})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"calculator",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"buttons",children:buttons.map((function(e,_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.a,{text:e,idName:ids[_],onClick:btnClicked},_)}))})})]})}__webpack_exports__.a=App},function(e,_,t){"use strict";t(1),t(14);var a=t(0);_.a=function(e){var _=e.text,t=e.idName,c=e.onClick;return Object(a.jsx)("div",{id:t,className:"btn",onClick:c,children:_})}},function(e,_,t){"use strict";t(1),t(16);var a=t(0);_.a=function(e){var _=e.text,t=void 0===_?"0":_,c=e.calculation,l=void 0===c?"0":c;return Object(a.jsxs)("div",{className:"screen",children:[Object(a.jsx)("div",{id:"calculation",children:l}),Object(a.jsx)("div",{id:"display",className:"result",children:t})]})}},function(e,_,t){"use strict";t.r(_);t(1);var a=t(4),c=t.n(a),l=t(5),s=t(0);c.a.render(Object(s.jsx)(l.a,{}),document.querySelector("#main"))},,,,,function(e,_,t){},function(e,_,t){},,function(e,_,t){}],[[8,1,2]]]);
//# sourceMappingURL=main.e9226d04.chunk.js.map