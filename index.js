!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("store",[],e):"object"==typeof exports?exports.store=e():t.store=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(null==t&&null==e)return 0;if(null==t)return 1;if(null==e)return-1;n||(t=String(t).toLocaleLowerCase(),e=String(e).toLocaleLowerCase());var r=String(t).localeCompare(e);return r<-1?r=-1:r>1&&(r=1),r},o=function(t,e){return isNaN(t)&&isNaN(e)?0:isNaN(t)?1:isNaN(e)?-1:t<e?-1:t>e?1:0},i=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n,r=t.length,o=e.length;if(r<o)return-1;if(r>o)return 1;for(var i=0;i<r;i++)if(0!=(n=f(t[i],e[i])))return n;return 0},u=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n=Object.keys(t),r=Object.keys(e),o=n.length,i=r.length;if(o===i&&0===o)return 0;if(o>i)return 1;if(o<i)return-1;for(var u,c,l=0;l<o;l++)if(u=n[l],!e.hasOwnProperty(u))return-1;for(l=0;l<i;l++)if(u=r[l],0!==(c=f(t[u],e[u])))return c;return 0},c=function(t,e){return null!=t&&null!=e&&(t instanceof e||("string"==typeof t?e===String:"number"==typeof t?e===Number:"boolean"==typeof t&&e===Boolean))};function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=function(t,e){if(t===e)return 0;if(null==t)return 1;if(null==e)return-1;var n=l(t),f=l(e);return n!==f?r(n,f):"boolean"===n?o(Number(t),Number(e)):"number"===n?o(t,e):"string"===n?r(t,e):c(t,Date)?function(t,e){if(null===t&&null===e)return 0;if(null===t)return 1;if(null===e)return-1;var n=t.getTime(),r=e.getTime();return n<r?-1:n>r?1:0}(t,e):c(t,Array)?i(t,e):c(t,Object)?u(t,e):0};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){return"object"!==a(t)||null===t?t:Array.isArray(t)?function(t){return t.map(function(t){return s(t)})}(t):function(t){var e={};return Object.keys(t).forEach(function(n){var r=t[n];e[n]=s(r)},{}),e}(t)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n,r=Object.keys(t),o=Object.keys(e),i=r.length,u=o.length,c=0,l={},a=0;a<i;a++)if(n=r[a],e.hasOwnProperty(n)){l[n]=!0;var s=t[n],p=e[n];f(s,p)&&c++}else c++;for(var y=0;y<u;y++)l[n=o[y]]||c++;return c}function h(t,e){if("object"!==p(t)&&"object"!==p(e))throw new Error("Expecting Object got obj1 type: ".concat(p(t)," and  obj2 type: ").concat(p(e)));for(var n,r,o,i=Object.keys(t),u=Object.keys(e),c=i.length,l=u.length,a=0,y=0,h=0,d={},v={},b={},g=0;g<c;g++)n=i[g],e.hasOwnProperty(n)?(b[n]=!0,r=t[n],o=e[n],f(r,o)&&(v[n]="object"===p(r)?s(r):r,d[n]="object"===p(o)?s(o):o,a++)):(r=t[n],v[n]="object"===p(r)?s(r):r,h++);for(g=0;g<l;g++)b[n=u[g]]||(o=e[n],v[n]="delete",d[n]="object"===p(o)?s(o):o,y++);return{forward:d,backward:v,count:y+a+h}}function d(t,e,n,r){n||(n=s);var o=p(t),i=p(e);if(!t||!e||o!==i)return"object"===i?n(e):e;t&&(t=n(t)),e&&(e=n(e));for(var u=Object.keys(e),c=0;c<u.length;c++){var l=u[c],f=t[l],a=e[l];r&&"delete"===a?delete t[l]:f&&"object"===p(f)&&"object"===p(a)?t[l]=v(f,a):t[l]=a}return t}function v(t,e,n){return d(t,e,n)}function b(t,e,n){return d(t,e,n,!0)}function g(t,e){return 0===f(t,e)&&(e=void 0),e}n.d(e,"default",function(){return g}),n.d(e,"compare",function(){return f}),n.d(e,"getDiff",function(){return h}),n.d(e,"combineDiff",function(){return v}),n.d(e,"applyDiff",function(){return b}),n.d(e,"getDiffCount",function(){return y})}])},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t,e){return 0!==Object(r.compare)(t,e)}function i(t,e){var n,r,o=null;if(t)for(o={},n=0;n<t.length;n++)(r=t[n])&&(o["string"==typeof r?r:r[e]]=r);return o}var u=n(2),c=n.n(u);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=a(e).call(this))||"object"!==l(o)&&"function"!=typeof o?s(r):o).id=null==t?Math.random().toString(36).substr(2,9):t,n.parentId=null,n.linkedIds=null,n.linkParentId=n.linkParentId.bind(s(n)),n.unLinkParentId=n.unLinkParentId.bind(s(n)),n.linkId=n.linkId.bind(s(n)),n.unLinkId=n.unLinkId.bind(s(n)),n.asJson=n.asJson.bind(s(n)),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,c.a),n=e,(r=[{key:"linkParentId",value:function(t){this.parentId=t}},{key:"unLinkParentId",value:function(){this.parentId=null}},{key:"linkId",value:function(t){this.linkedIds||(this.linkedIds=[]),this.linkedIds.indexOf(t)>-1&&this.linkedIds.push(t)}},{key:"unLinkId",value:function(t){}},{key:"asJson",value:function(){return{id:this.id}}}])&&f(n.prototype,r),o&&f(n,o),e}();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(t,n,r,o,i){var u,c,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c=this,(u=!(l=g(e).call(this,r))||"object"!==h(l)&&"function"!=typeof l?v(c):l)._value=void 0===t?null:t,u.displayName=n,u.classDefName=i||"Store",u.comparer=o,u.asJson=u.asJson.bind(v(u)),u}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,y),n=e,(r=[{key:"asJson",value:function(t,n,r){if(t=void 0===t?this.getState():t,r)return t;var o=b(g(e.prototype),"asJson",this).call(this);return o.classDefName=n?void 0:this.classDefName,o.displayName=n?void 0:this.displayName,o.value=n?void 0:t,o}}])&&d(n.prototype,r),o&&d(n,o),e}();function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}O.prototype.getValue=function(){return this._value},O.prototype.getState=function(){return this._value},O.prototype.setState=function(t,e){var n=this,r=this.calculateDiff(t,!0);if(r){this.executeWhenIdle(function(){n._value=t,n.trigger()},function(){O.stackDebug&&console.log("Store: _setStateCallback: ",n),e&&e()})}return Number(r)},O.prototype.shouldListenersExecute=function(t,e){return!0},O.prototype.calculateDiff=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._value,r=(this.comparer?this.comparer:o)(t,n);return e?r:r?{forward:this.asJson(n),backward:this.asJson(t)}:{forward:this.id,backward:this.id}},O.prototype.getDiff=function(t){return this.calculateDiff(t,!1)},O.prototype.applyDiff=function(t,e){"string"!=typeof t&&this.setState(t.value,e)},O.stackDebug=!1;var x=function(t){function e(t,n,r,o){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=o||"StoreCollection",(i=j(this,k(e).call(this,null,n,r,null,o))).children={},i._value=t?void 0===t.value?{}:t.value:{},i.triggerWaitCount=0,i}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,O),n=e,(r=[{key:"shouldListenersExecute",value:function(){return 0===this.triggerWaitCount||1===this.triggerWaitCount?(1===this.triggerWaitCount&&this.triggerWaitCount--,!0):(this.triggerWaitCount=this.triggerWaitCount-1,!1)}}])&&S(n.prototype,r),o&&S(n,o),e}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t,e,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=W(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}x.prototype.getState=function(t){return this.getChildren(!0,t)},x.prototype.setState=function(t,e){var n=this;if(this.triggerWaitCount=this.calculateDiff(t,!0),this.triggerWaitCount>0){this.executeWhenIdle(function(){var e={},r=n.getChildIds(!0);if(t)for(var o=0;o<t.length;o++){var i=t[o];if(i){var u=void 0;if("string"==typeof i)e[u=i]=n._value[u];else{var c=i.id,l=i.classDefName,f=i.value,a=i.displayName;void 0===l?n.remove(c):(n.requestStore(c,f,l,a),e[c]=f)}r&&r.indexOf(u)>-1&&r.splice(u,1)}}n._value=e},function(){e&&e()})}return Number(this.triggerWaitCount>0)},x.prototype.getChildIds=function(t){var e=Object.keys(this.children);return t?e.slice():e},x.prototype.getChildren=function(t,e){for(var n=[],r=Object.keys(this.children),o=0;o<r.length;o++){var i=r[o],u=this.children[i];n.push(t?u.asJson(void 0,void 0,e):u)}return n},x.prototype.requestStore=function(t,e,n,r,o){var i,u=this,c=this.children[t];if(c)return c.setState(e);this.executeWhenIdle(function(){"Store"===n?c=new O(e,r,t,null,n):"StoreCollection"===n&&(c=new x(e,r,t,n)),c.setConnector(u.trigger.bind(u)),c.linkParentId(u.id);var o=c.id;u.children[o]=c,u._value[o]=c.getValue(),i=c,u.trigger()},function(){o&&o(i)})},x.prototype.remove=function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.children[t];if(r){var o=function(){r.removeConnector(),delete e.children[t],delete e._value[t],n&&e.trigger()};n||o.call(this),this.executeWhenIdle(o)}},x.prototype.removeAll=function(){var t=this,e=Object.keys(this.children);if(e.length>0){this.executeWhenIdle(function(){for(var n=0;n<e.length;n++){var r=e[n];t.remove(r,!1)}t.trigger()})}},x.prototype.calculateDiff=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i(t,"id"),r=Object.keys(this.children),o=t?t.length:NaN,u=r?r.length:0,c=o!==u,l=0,f=[],a=[],s=0;s<u;s++){var p=r[s],y=this.children[p],h=n?n[y.id]:void 0;if(delete n[y.id],h){if("string"!=typeof h){var d=h?h.value:void 0;if(e){y.calculateDiff.call(y,d,e)&&(l+=1)}else{var v=y.getDiff.call(y,d);"string"!=typeof v&&(c=!0);var b=v.forward,g=v.backward;f.push(b),a.push(g)}}}else e?l+=1:(f.push(y.asJson()),a.push(y.asJson(void 0,!0)))}var m=n?Object.keys(n):null,O=m?m.length:0;if(O)if(e)l=O+l;else for(var w=0;w<O;w++){var S=n[m[w]],j={};j.id=S.id,j.classDefName=void 0,j.displayName=void 0,j.value=void 0,f.push(j),a.push(S)}return e?l:c?{forward:this.asJson(f),backward:this.asJson(a)}:{forward:this.id,backward:this.id}},x.prototype.combineDiff=function(t,e,n){return function(t,e,n,r){for(var o,u=i(t,n),c=0;c<e.length;c++)r(u,o=e[c],n)&&t.push(o);return t}(t,e,n,function(t,e,n){return!t["string"==typeof e?e:e[n]]})},x.prototype.applyDiff=function(t,e){var n=this;this.unLinkConnector(),this.setState(t,function(){n.linkConnector(),e()})};var N=function(t){function e(t,n,r,o,i){var u,c,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c=this,(u=!(l=W(e).call(this,r))||"object"!==C(l)&&"function"!=typeof l?E(c):l)._value=void 0===t?null:t,u.displayName=n,u.classDefName=i||"SimpleStore",u.comparer=o,u.asJson=u.asJson.bind(E(u)),u}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,y),n=e,(r=[{key:"asJson",value:function(t,n,r){if(t=void 0===t?this.getState():t,r)return t;var o=I(W(e.prototype),"asJson",this).call(this);return o.classDefName=n?void 0:this.classDefName,o.displayName=n?void 0:this.displayName,o.value=n?void 0:t,o}}])&&P(n.prototype,r),o&&P(n,o),e}();function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function M(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}N.prototype.getValue=function(){return this._value},N.prototype.getState=function(){return this._value},N.prototype.setState=function(t,e,n){var r,i,u,c=this,l=void 0===n?(r=this._value,i=t,(u=this.comparer)?u(i,r):o(i,r)):n;if(l){this.executeWhenIdle(function(){c._value=t,c.trigger()},function(){N.stackDebug&&console.log("SimpleStore: _setStateCallback: ",c),e&&e()})}return Number(l)},N.prototype.shouldListenersExecute=function(t,e){return!0},N.prototype.applyDiff=function(t,e){"string"!=typeof t&&this.setState(t.value,e,!0)};var R=function(t){function e(t,n,r,o){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=o||"StoreObject",(i=M(this,J(e).call(this,null,n,r,null,o))).children={},i._value=t?void 0===t.value?{}:t.value:{},i.triggerWaitCount=0,i}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,N),n=e,(r=[{key:"shouldListenersExecute",value:function(){return 0===this.triggerWaitCount||1===this.triggerWaitCount?(1===this.triggerWaitCount&&this.triggerWaitCount--,!0):(this.triggerWaitCount=this.triggerWaitCount-1,!1)}}])&&L(n.prototype,r),o&&L(n,o),e}();R.prototype.getState=function(t){return this.getChildren(!0,t)},R.prototype.setState=function(t,e,n){var o=this;if(this.triggerWaitCount=void 0===n?Object(r.getDiffCount)(this.children,t):n,this.triggerWaitCount>0){this.executeWhenIdle(function(){var e={},n=o.getChildIds(!0);if(t)for(var r=0;r<t.length;r++){var i=t[r];if(i){var u=void 0;if("string"==typeof i)e[u=i]=o._value[u];else{var c=i.id,l=i.classDefName,f=i.value,a=i.displayName;void 0===l?o.remove(c):(o.requestStore(c,f,l,a),e[c]=f)}n&&n.indexOf(u)>-1&&n.splice(u,1)}}o._value=e},function(){e&&e()})}return Number(this.triggerWaitCount>0)},R.prototype.getChildIds=function(t){var e=Object.keys(this.children);return t?e.slice():e},R.prototype.getChildren=function(t,e){for(var n=[],r=Object.keys(this.children),o=0;o<r.length;o++){var i=r[o],u=this.children[i];n.push(t?u.asJson(void 0,void 0,e):u)}return n},R.prototype.requestStore=function(t,e,n,r,o){var i,u=this,c=this.children[t];if(c)return c.setState(e);this.executeWhenIdle(function(){"Store"===n?c=new Store(e,r,t,null,n):"StoreObject"===n&&(c=new R(e,r,t,n)),c.setConnector(u.trigger.bind(u));var o=c.id;u.children[o]=c,i=c,u.trigger()},function(){o&&o(i)})},R.prototype.remove=function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.children[t];if(r){var o=function(){r.removeConnector(),delete e.children[t],n&&e.trigger()};n||o.call(this),this.executeWhenIdle(o)}},R.prototype.removeAll=function(){var t=this,e=Object.keys(this.children);if(e.length>0){this.executeWhenIdle(function(){for(var n=0;n<e.length;n++){var r=e[n];t.remove(r,!1)}t.trigger()})}},R.prototype.applyDiff=function(t,e,n){var r=this;this.unLinkConnector(),this.setState(t,function(){r.linkConnector(),e()},n)},n.d(e,"default",function(){return O}),n.d(e,"StoreCollection",function(){return x}),n.d(e,"SimpleStore",function(){return N}),n.d(e,"StoreObject",function(){return R})},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}({0:function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){var t=[null,null,null],e=null,n=!1;function r(e,n){t[n]||(t[n]=[]),t[n].push(e)}function o(e,n){var r=t[n];r&&r.length>0&&(e(r),t[n]=null)}return{readAndExecute:function(i){return n=!0,function(e){for(var n=t.length,r=0;r<n;r++)o(e,r)}(i),n=!1,function(){var t=e?e.length:0;if(t>0)for(var n=0;n<t;n++){var o=e[n];r(o.func,o.level)}return e=null,0==t}()},reset:function(){n=!1,t=[null,null,null],e=[]},add:function(t,o){n?function(t,n){e||(e=[]),e.push({func:t,level:n})}(t,o):r(t,o)},isMemoryEmpty:function(){for(var e=t.length,n=0;n<e;n++){var r=t[n];if(r&&r.length>0)return!1}return!0}}}(),o=function(t){var e=0,n=0,o=100;function i(t){for(var e=0;e<t.length;e++){var n=t[e];n.call(n.this)}}function u(){++n<o?r.readAndExecute(i)?l():c():(console.warn("Animation frame loop executed to its set limit: ",o),l())}function c(){e=window?window.requestAnimationFrame(u):setTimeout(u)}function l(){n=0,r.reset(),window?window.cancelAnimationFrame(e):clearTimeout(e)}return function(t,e){r.isMemoryEmpty()&&c(),r.add(t,e)}}(),i=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.progressCallback,this.doneCallback,this.errorCallback};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){if(!t)throw new Error("Ticker: instance can't be null");if(!(t instanceof l)){var e=t.constructor?t.constructor.name:u(t);throw new Error("Ticker: Expecting instance of TickEntry got ".concat(e))}if(!t.func)throw new Error("Ticker: function can't be undefined")}i.prototype.onError=function(t){return this.errorCallback=t,this},i.prototype.onProgress=function(t){return this.progressCallback=t,this},i.prototype.onDone=function(t){return this.doneCallback=t,this};var l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.func=e,this.priority=r,this.executionCount=0,this.notifier=new i,c(this)}var e,n;return e=t,(n=[{key:"onDone",value:function(t){return this.notifier.doneCallback=t,this.notifier}},{key:"onError",value:function(t){return this.notifier.errorCallback=t,this.notifier}},{key:"dispose",value:function(){this.context=null,this.func=null,this.priority=null,this.executionCount=NaN,this.notifier=null}},{key:"executeInCycle",value:function(){c(this);var t=this,e=t.func,n=t.context,r=t.priority;return o(function(){var r=t.notifier,o=r.doneCallback,i=r.errorCallback;try{var u=e.call(n);t.executionCount++,o&&o(u)}catch(e){i&&i(e),t.dispose()}},r),this.notifier.onProgress=void 0,this.notifier}},{key:"executeAsSmallLoopsInCycle",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(void 0===t||"number"!=typeof t)throw new Error("Maximum Loop Per Frame has to be a number");if(void 0===e||"number"!=typeof e)throw new Error("End Index has to be a number");if("number"!=typeof n)throw new Error("Start Index has to be a number");c(this);var r=this,i=r.func,u=r.context,l=r.priority,f=t,a=n;return o(function n(){for(var c,s=r.notifier,p=s.doneCallback,y=s.errorCallback,h=s.progressCallback;a<f;a++)try{c=i.call(u,a)}catch(t){return y&&y(t),void r.dispose()}f<e?(f+=t,h&&h(a,c),o(n,l)):a===e&&(r.executionCount++,p&&p(c))},l),this.notifier}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(e.prototype,n),t}();l.HIGH=0,l.NORMAL=1,l.LOW=2,l.allowedTickCount=100,e.default=l}])},5:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);function i(t,e,n,r){!function i(){if(t()){var u=e();n&&n(u)}else{var c=new o.a(i,null,2);r&&c.onError(r),c.executeInCycle()}}()}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],r=0;return t.forEach(function(t,o){t.func?(e&&(r+=1),t.func.apply(t.context||t.func.this)):n.push(o)}),c(n,t),r}function c(t,e){"number"==typeof t?e.splice(t,1):t.forEach(function(t){e.splice(t,1)})}function l(t,e,n){return n?t[e].context:t[e]}function f(t,e,n,r){for(var o=0;o<n.length;o++){var i=l(n,o,r);if(i&&i.func&&i.func===t&&i.context===e)return n[o].dispose(),void c(o,n)}}var a=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=n,this.func=e};function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}a.prototype.dispose=function(){this.context instanceof o.a&&this.context.dispose(),this.context=null,this.func=null};var p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._entries=[],this._tickerEntries=[],this.remainingEntries=0,this.connector=e,this._enableConnector=!0}var e,n;return e=t,(n=[{key:"executeWhenIdle",value:function(t,e,n){var r=this;n||(n=function(t){return console.log(t)}),i(function(){if(r.remainingEntries<0)throw new Error("There can't be negative entries");return 0===r.remainingEntries},t,e,n)}},{key:"trigger",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this;this.executeWhenIdle(function(){var t=e._entries,n=e._tickerEntries;e.shouldExecuteFunctions()&&(e.functionsWillExecute(),t.length>0&&u(t),n.length>0&&(e.remainingEntries=u(n,!0)))},function n(){0===e.remainingEntries?(t&&t(),e.functionsDidExecute()):e.executeWhenIdle(n)})}},{key:"addFunction",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.executeWhenIdle(function(){var l=new a(t,n,i);r?(l=function(t,e,n,r,i){var u=new o.a(t,e,n);return u.onDone(function(){i.remainingEntries=i.remainingEntries-1}).onError(r),new a(u.executeInCycle,u)}(t,n,i,c,e),e._tickerEntries.push(l)):(l=new a(t,n),e._entries.push(l)),u&&u(l)})}},{key:"removeFunction",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.executeWhenIdle(function(){var o=e._tickerEntries,i=e._entries;f(t,n,i),f(t,n,o,!0),r&&r()})}},{key:"functionsWillExecute",value:function(){}},{key:"shouldExecuteFunctions",value:function(){return!0}},{key:"functionsDidExecute",value:function(){this._enableConnector&&this.connector&&this.connector()}},{key:"setConnector",value:function(t){var e=this;this.executeWhenIdle(function(){e.connector=t})}},{key:"removeConnector",value:function(){var t=this;this.executeWhenIdle(function(){t.connector=null})}},{key:"linkConnector",value:function(){var t=this;this.executeWhenIdle(function(){t._enableConnector=!0})}},{key:"unLinkConnector",value:function(){var t=this;this.executeWhenIdle(function(){t._enableConnector=!1})}}])&&s(e.prototype,n),t}();n.d(e,"default",function(){return p}),n.d(e,"executeInSyncOrAsync",function(){return i})}})}])});