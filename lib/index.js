(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("store", [], factory);
	else if(typeof exports === 'object')
		exports["store"] = factory();
	else
		root["store"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _helpers = __webpack_require__(1);

var _StoreID2 = __webpack_require__(5);

var _StoreID3 = _interopRequireDefault(_StoreID2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function calculateDiff(value) {
	var onlyComparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var currentValue = this._value;
	var changed = false;
	if (this.comparer) {
		changed = this.comparer(value, currentValue);
	} else {
		changed = (0, _helpers.isChanged)(value, currentValue);
	}
	Store.stackDebug && console.log("Store: getDiff: ", value, currentValue, this);
	if (onlyComparison) {
		return changed;
	}

	return changed ? this.asJson(currentValue) : this.id;
}

/*
* 1. getValue, return the wrapped value inside this object
* 3. getState does exactly what getValue does (duplication)
* 4. setState set the value if there is a change to oldValue and inAddition triggers all dataChange listeners
* 5. getDiff return the value in JSON Strucuture with metadata Information about this object*/

var Store = function (_StoreID) {
	_inherits(Store, _StoreID);

	function Store(value, displayName, objectName, comparer) {
		_classCallCheck(this, Store);

		//initial value can't be undefined, it has to be null or given value
		var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, objectName));

		_this._value = value === undefined ? null : value;
		_this.displayName = displayName;
		_this.comparer = comparer;

		_this.asJson = _this.asJson.bind(_this);
		return _this;
	}

	_createClass(Store, [{
		key: 'asJson',
		value: function asJson(value, isDelete) {
			value = value === undefined ? this.getState() : value;
			var json = _get(Store.prototype.__proto__ || Object.getPrototypeOf(Store.prototype), 'asJson', this).call(this);
			json['classDefName'] = isDelete ? undefined : this.constructor.name;
			json['displayName'] = isDelete ? undefined : this.displayName;
			json['value'] = isDelete ? undefined : value;
			return json;
		}
	}]);

	return Store;
}(_StoreID3.default);

exports.default = Store;


Store.prototype.getValue = function () {
	return this._value;
};

Store.prototype.getState = function () {
	return this._value;
};

Store.prototype.setState = function (newValue, callback) {
	var _this2 = this;

	var didStateChanged = this.calculateDiff(newValue, true);

	if (didStateChanged) {
		var _setState = function _setState() {
			_this2._value = newValue;
			_this2.triggerListeners();
		};
		//set state function is the one which triggers all the listeners attached to it
		// if listeners execution are going on, this will execute once they are done
		// else set state is executed immediately
		this.executeTriggerer(this, _setState, function () {
			Store.stackDebug && console.log("Store: _setStateCallback: ", _this2);
			callback && callback();
		});
	}

	return Number(didStateChanged);
};

Store.prototype.shouldListenersExecute = function (oldValue, newValue) {
	return true;
};

// need both forward diff and  backward diff
Store.prototype.calculateDiff = function (value) {
	var onlyComparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var currentValue = this._value;
	var compareFn = this.comparer ? this.comparer : _helpers.isChanged;
	var changed = compareFn(value, currentValue);

	if (onlyComparison) {
		return changed;
	}

	if (changed) {
		return {
			forward: this.asJson(currentValue),
			backward: this.asJson(value)
		};
	} else {
		return {
			forward: this.id,
			backward: this.id
		};
	}
};

// Diff returns the Diff Value as JSON
Store.prototype.getDiff = function (value) {
	return this.calculateDiff(value, false);
};

Store.prototype.applyDiff = function (stateAsJson, callback) {
	if (typeof stateAsJson !== 'string') {
		this.setState(stateAsJson.value, callback);
	}
};

Store.stackDebug = false;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isChanged = isChanged;
exports.arrayToObject = arrayToObject;
exports.combineArray = combineArray;

var _diff = __webpack_require__(4);

function isChanged(oldVal, newVal) {
	var comparisonValue = (0, _diff.compare)(oldVal, newVal);
	if (comparisonValue === 0) {
		return false;
	} else {
		return true;
	}
}

function arrayToObject(array, idName) {
	var object = null;
	if (array) {
		object = {};
		var index = void 0,
		    id = void 0,
		    child = void 0;
		for (index = 0; index < array.length; index++) {
			child = array[index];
			if (child) {
				if (typeof child === 'string') {
					id = child;
				} else {
					id = child[idName];
				}
				object[id] = child;
			}
		}
	}
	return object;
}

function combineArray(array1, array2, idName, shouldCombineFn) {
	var array1AsObj = arrayToObject(array1, idName);

	var array2child = void 0;
	for (var i = 0; i < array2.length; i++) {
		array2child = array2[i];
		if (shouldCombineFn(array1AsObj, array2child, idName)) {
			array1.push(array2child);
		}
	}
	return array1;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StoreCollection = exports.default = undefined;

var _Store = __webpack_require__(0);

var _Store2 = _interopRequireDefault(_Store);

var _StoreCollection = __webpack_require__(7);

var _StoreCollection2 = _interopRequireDefault(_StoreCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Store2.default;
exports.StoreCollection = _StoreCollection2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["diff"] = factory();else root["diff"] = factory();
})(undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 6);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var _stringCompare = __webpack_require__(1);

            var _stringCompare2 = _interopRequireDefault(_stringCompare);

            var _numberCompare = __webpack_require__(2);

            var _numberCompare2 = _interopRequireDefault(_numberCompare);

            var _dateCompare = __webpack_require__(3);

            var _dateCompare2 = _interopRequireDefault(_dateCompare);

            var _arrayCompare = __webpack_require__(4);

            var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

            var _objectCompare = __webpack_require__(5);

            var _objectCompare2 = _interopRequireDefault(_objectCompare);

            var _is = __webpack_require__(7);

            var _is2 = _interopRequireDefault(_is);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function compare(oldObj, newObj) {
                if (oldObj === newObj) return 0;
                if (oldObj == null) return 1;
                if (newObj == null) return -1;

                var oldObjType = typeof oldObj === 'undefined' ? 'undefined' : _typeof(oldObj);
                var newObjType = typeof newObj === 'undefined' ? 'undefined' : _typeof(newObj);

                if (oldObjType !== newObjType) return (0, _stringCompare2.default)(oldObjType, newObjType);

                if (oldObjType === 'boolean') return (0, _numberCompare2.default)(Number(oldObj), Number(newObj));
                if (oldObjType === 'number') return (0, _numberCompare2.default)(oldObj, newObj);
                if (oldObjType === 'string') return (0, _stringCompare2.default)(oldObj, newObj);

                if (oldObjType !== 'object') return 1;

                if ((0, _is2.default)(oldObj, Date)) return (0, _dateCompare2.default)(oldObj, newObj);
                if ((0, _is2.default)(oldObj, Array)) return (0, _arrayCompare2.default)(oldObj, newObj, compare);
                if ((0, _is2.default)(oldObj, Object)) return (0, _objectCompare2.default)(oldObj, newObj, compare);

                return 0;
            };

            exports.default = compare;

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
            function stringCompare(oldValue, newValue, isCaseSensitive) {
                isCaseSensitive = typeof isCaseSensitive !== 'undefined' ? isCaseSensitive : false;

                if (oldValue == null && newValue == null) return 0;
                if (oldValue == null) return 1;
                if (newValue == null) return -1;

                if (isCaseSensitive) {
                    oldValue = String(oldValue).toLocaleLowerCase();
                    newValue = String(newValue).toLocaleLowerCase();
                }

                var result = String(oldValue).localeCompare(newValue);
                if (result < -1) result = -1;else if (result > 1) result = 1;

                return result;
            }

            exports.default = stringCompare;

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function numberCompare(oldValue, newValue) {

                if (isNaN(oldValue) && isNaN(newValue)) return 0;
                if (isNaN(oldValue)) return 1;
                if (isNaN(newValue)) return -1;

                if (oldValue < newValue) return -1;
                if (oldValue > newValue) return 1;
                return 0;
            }

            exports.default = numberCompare;

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function dateCompare(oldValue, newValue) {

                if (oldValue === null && newValue === null) return 0;
                if (oldValue === null) return 1;
                if (newValue === null) return -1;

                var oldTime = oldValue.getTime();
                var newTime = newValue.getTime();
                if (oldTime < newTime) return -1;
                if (oldTime > newTime) return 1;

                if (isNaN(oldTime) && isNaN(newTime)) return 0;
                if (isNaN(oldTime)) return 1;
                if (isNaN(newTime)) return -1;

                return 0;
            }

            exports.default = dateCompare;

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _compare = __webpack_require__(0);

            var _compare2 = _interopRequireDefault(_compare);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function arrayCompare(oldObj, newObj) {
                if (oldObj === newObj) return 0;
                if (oldObj == null) return 1;
                if (newObj == null) return -1;

                var comparisonValue = void 0;
                var oldObjLength = oldObj.length;
                var newObjLength = newObj.length;
                if (oldObjLength < newObjLength) return -1;
                if (oldObjLength > newObjLength) return 1;

                for (var i = 0; i < oldObjLength; i++) {
                    //recursive comparison of array elements
                    comparisonValue = (0, _compare2.default)(oldObj[i], newObj[i]);
                    if (comparisonValue != 0) return comparisonValue;
                }
                return 0;
            };

            exports.default = arrayCompare;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _compare = __webpack_require__(0);

            var _compare2 = _interopRequireDefault(_compare);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function objectCompare(oldObj, newObj) {
                if (oldObj === newObj) return 0;
                if (oldObj == null) return 1;
                if (newObj == null) return -1;

                var prop = void 0;
                for (prop in oldObj) {
                    if (!newObj.hasOwnProperty(prop)) return -1;
                }

                var comparisonValue = void 0;
                for (prop in newObj) {
                    if (!oldObj.hasOwnProperty(prop)) return 1;
                    //recursive comparison of object property
                    comparisonValue = (0, _compare2.default)(oldObj[prop], newObj[prop]);
                    if (comparisonValue !== 0) return comparisonValue;
                }
                return 0;
            };

            exports.default = objectCompare;

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.objectCompare = exports.arrayCompare = exports.dateCompare = exports.numberCompare = exports.stringCompare = exports.compare = exports.default = undefined;

            var _stringCompare = __webpack_require__(1);

            var _stringCompare2 = _interopRequireDefault(_stringCompare);

            var _numberCompare = __webpack_require__(2);

            var _numberCompare2 = _interopRequireDefault(_numberCompare);

            var _dateCompare = __webpack_require__(3);

            var _dateCompare2 = _interopRequireDefault(_dateCompare);

            var _arrayCompare = __webpack_require__(4);

            var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

            var _objectCompare = __webpack_require__(5);

            var _objectCompare2 = _interopRequireDefault(_objectCompare);

            var _compare = __webpack_require__(0);

            var _compare2 = _interopRequireDefault(_compare);

            var _diff = __webpack_require__(8);

            var _diff2 = _interopRequireDefault(_diff);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.default = _diff2.default;
            exports.compare = _compare2.default;
            exports.stringCompare = _stringCompare2.default;
            exports.numberCompare = _numberCompare2.default;
            exports.dateCompare = _dateCompare2.default;
            exports.arrayCompare = _arrayCompare2.default;
            exports.objectCompare = _objectCompare2.default;

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            function is(obj, Type) {
                if (obj == null || obj == null) return false;
                if (obj instanceof Type) return true;
                if (Type === Object) return true;

                if (typeof obj === 'string') return Type === String;
                if (typeof obj === 'number') return Type === Number;
                if (typeof obj === 'boolean') return Type === Boolean;
                if (Type === Array) return Array.isArray(obj);

                return false;
            }

            exports.default = is;

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _compare = __webpack_require__(0);

            var _compare2 = _interopRequireDefault(_compare);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            // If there is no change returns undefined
            // if there is a change returns the latest value
            function diff(comparedValue, value) {
                var comparisonValue = (0, _compare2.default)(comparedValue, value);

                if (comparisonValue === 0) {
                    value = undefined;
                }

                return value;
            }

            exports.default = diff;

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _functions = __webpack_require__(6);

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreID = function (_Functions) {
	_inherits(StoreID, _Functions);

	function StoreID(id) {
		_classCallCheck(this, StoreID);

		var _this = _possibleConstructorReturn(this, (StoreID.__proto__ || Object.getPrototypeOf(StoreID)).call(this));

		if (id === undefined || id === null) {
			_this.id = Math.random().toString(36).substr(2, 9);
		} else {
			_this.id = id;
		}
		_this.parentId = null;
		_this.linkedIds = null;

		_this.linkParentId = _this.linkParentId.bind(_this);
		_this.unLinkParentId = _this.unLinkParentId.bind(_this);
		_this.linkId = _this.linkId.bind(_this);
		_this.unLinkId = _this.unLinkId.bind(_this);
		_this.asJson = _this.asJson.bind(_this);
		return _this;
	}

	_createClass(StoreID, [{
		key: 'linkParentId',
		value: function linkParentId(id) {
			this.parentId = id;
		}
	}, {
		key: 'unLinkParentId',
		value: function unLinkParentId() {
			this.parentId = null;
		}
	}, {
		key: 'linkId',
		value: function linkId(id) {
			if (!this.linkedIds) {
				this.linkedIds = [];
			}

			if (this.linkedIds.indexOf(id) > -1) {
				this.linkedIds.push(id);
			}
		}
	}, {
		key: 'unLinkId',
		value: function unLinkId(id) {}
	}, {
		key: 'asJson',


		//todo: parentId: this.parentId, linkedIds: this.linkedIds
		value: function asJson() {
			return {
				id: this.id
			};
		}
	}]);

	return StoreID;
}(_functions2.default);

exports.default = StoreID;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["functions"] = factory();else root["functions"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId]) {
					/******/return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/i: moduleId,
					/******/l: false,
					/******/exports: {}
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/__webpack_require__.d = function (exports, name, getter) {
				/******/if (!__webpack_require__.o(exports, name)) {
					/******/Object.defineProperty(exports, name, {
						/******/configurable: false,
						/******/enumerable: true,
						/******/get: getter
						/******/ });
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/__webpack_require__.n = function (module) {
				/******/var getter = module && module.__esModule ?
				/******/function getDefault() {
					return module['default'];
				} :
				/******/function getModuleExports() {
					return module;
				};
				/******/__webpack_require__.d(getter, 'a', getter);
				/******/return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/__webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(__webpack_require__.s = 1);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			(function webpackUniversalModuleDefinition(root, factory) {
				if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define("ticker", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["ticker"] = factory();else root["ticker"] = factory();
			})(this, function () {
				return (/******/function (modules) {
						// webpackBootstrap
						/******/ // The module cache
						/******/var installedModules = {};
						/******/
						/******/ // The require function
						/******/function __webpack_require__(moduleId) {
							/******/
							/******/ // Check if module is in cache
							/******/if (installedModules[moduleId]) {
								/******/return installedModules[moduleId].exports;
								/******/
							}
							/******/ // Create a new module (and put it into the cache)
							/******/var module = installedModules[moduleId] = {
								/******/i: moduleId,
								/******/l: false,
								/******/exports: {}
								/******/ };
							/******/
							/******/ // Execute the module function
							/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
							/******/
							/******/ // Flag the module as loaded
							/******/module.l = true;
							/******/
							/******/ // Return the exports of the module
							/******/return module.exports;
							/******/
						}
						/******/
						/******/
						/******/ // expose the modules object (__webpack_modules__)
						/******/__webpack_require__.m = modules;
						/******/
						/******/ // expose the module cache
						/******/__webpack_require__.c = installedModules;
						/******/
						/******/ // define getter function for harmony exports
						/******/__webpack_require__.d = function (exports, name, getter) {
							/******/if (!__webpack_require__.o(exports, name)) {
								/******/Object.defineProperty(exports, name, {
									/******/configurable: false,
									/******/enumerable: true,
									/******/get: getter
									/******/ });
								/******/
							}
							/******/
						};
						/******/
						/******/ // getDefaultExport function for compatibility with non-harmony modules
						/******/__webpack_require__.n = function (module) {
							/******/var getter = module && module.__esModule ?
							/******/function getDefault() {
								return module['default'];
							} :
							/******/function getModuleExports() {
								return module;
							};
							/******/__webpack_require__.d(getter, 'a', getter);
							/******/return getter;
							/******/
						};
						/******/
						/******/ // Object.prototype.hasOwnProperty.call
						/******/__webpack_require__.o = function (object, property) {
							return Object.prototype.hasOwnProperty.call(object, property);
						};
						/******/
						/******/ // __webpack_public_path__
						/******/__webpack_require__.p = "";
						/******/
						/******/ // Load entry module and return exports
						/******/return __webpack_require__(__webpack_require__.s = 1);
						/******/
					}(
					/************************************************************************/
					/******/[
					/* 0 */
					/***/function (module, exports, __webpack_require__) {

						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _Manager = __webpack_require__(2);

						var _Manager2 = _interopRequireDefault(_Manager);

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { default: obj };
						}

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						// toDo: support both callback and promise
						var TickEntry =
						/**
       * @param {object} context - The "this" argument for the listener function.
       * @param {function} listener.
       */
						function TickEntry(context, listener) {
							var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
							var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

							_classCallCheck(this, TickEntry);

							this.context = context;
							this.listener = listener;
							this.callback = callback;
							this.priority = priority;
							this.executionCount = 0;
						};

						/*---- Public|Prototype Methods ---*/

						exports.default = TickEntry;
						TickEntry.prototype.dispose = function () {
							TickEntry.stackDebug && console.log("TickEntry dispose:", this);
							this.context = null;
							this.listener = null;
							this.callback = null;
							this.priority = null;
							this.executionCount = NaN;
						};

						TickEntry.prototype.execute = function () {
							TickEntry.stackDebug && console.log("manager.add: ", this);
							_Manager2.default.add(this);
						};

						TickEntry.HIGH = 0;
						TickEntry.NORMAL = 1;
						TickEntry.LOW = 2;

						TickEntry.allowedTickCount = 100;
						TickEntry.debug = false;
						TickEntry.stackDebug = false;

						/***/
					},
					/* 1 */
					/***/function (module, exports, __webpack_require__) {

						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _TickEntry = __webpack_require__(0);

						var _TickEntry2 = _interopRequireDefault(_TickEntry);

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { default: obj };
						}

						exports.default = _TickEntry2.default;

						/***/
					},
					/* 2 */
					/***/function (module, exports, __webpack_require__) {

						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _TickEntry = __webpack_require__(0);

						var _TickEntry2 = _interopRequireDefault(_TickEntry);

						function _interopRequireDefault(obj) {
							return obj && obj.__esModule ? obj : { default: obj };
						}

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError("Cannot call a class as a function");
							}
						}

						var requestAnimationFrameId = 0; // for Windows Env

						//[0-HIGH, 1-NORMAL, 2-LOW]
						var priorityEntries = [null, null, null];
						var waitEntries = null;

						var tickCount = 0;
						var isExecuting = false;

						function onTick() {
							tickCount++;
							if (_TickEntry2.default.debug) {
								console.log("Tick count: ", tickCount);
							}
							if (tickCount < _TickEntry2.default.allowedTickCount) {
								executePriorityEntries();
								moveWaitingEntriesForExecution();
								if (arePriorityEntriesEmpty()) {
									stop();
									return false;
								}
							} else {
								console.warn("Animation frame loop executed to its set limit: ", _TickEntry2.default.allowedTickCount);
								if (_TickEntry2.default.debug) {
									console.log("Entries: ", priorityEntries[0], priorityEntries[1], priorityEntries[2], waitEntries);
								}
								reset();
								return false;
							}
							return true;
						}

						function stop() {
							tickCount = 0;
							isExecuting = false;
							tickManager.stop();
						}

						function reset() {
							stop();
							priorityEntries = [null, null, null];
							waitEntries = null;
						}

						function moveWaitingEntriesForExecution() {
							var entriesCount = waitEntries ? waitEntries.length : 0;
							if (waitEntries && entriesCount > 0) {
								for (var index = 0; index < entriesCount; index++) {
									var tickEntry = waitEntries[index];
									var priority = tickEntry.priority;

									if (!priorityEntries[priority]) {
										priorityEntries[priority] = [];
									}
									var tickEntries = priorityEntries[priority];
									tickEntries.push(tickEntry);
								}
							}
							waitEntries = null;
						}

						function executePriorityEntries() {
							isExecuting = true;
							for (var index = 0; index < priorityEntries.length; index++) {
								var tickEntries = priorityEntries[index];
								if (tickEntries && tickEntries.length > 0) {
									executeTickEntries(tickEntries);
									//Clear them once executed
									priorityEntries[index] = null;
								}
							}
							isExecuting = false;
						}

						function executeTickEntries(tickEntries) {
							// important to use for-loop
							// tickEntries grows dynamically by one of its entry
							// for example: let say we have one entry, and executing that entry might adds another entry
							// with map function we cant execute dynamically growing entries.
							for (var i = 0; i < tickEntries.length; i++) {
								var tickEntry = tickEntries[i];
								_TickEntry2.default.stackDebug && console.log("TickManager: executeTickEntries : for ", i, tickEntry);
								tickEntry.listener.call(tickEntry.context || tickEntry.listener['this']);

								if (tickEntry.callback) {
									tickEntry.callback.call(tickEntry.callback['this']);
								}
								tickEntry.executionCount++;
								if (_TickEntry2.default.debug && tickEntry.executionCount > 1) {
									console.log("Executed more than once: ", tickEntry);
								}
							}
						}

						function arePriorityEntriesEmpty() {
							for (var index = 0; index < priorityEntries.length; index++) {
								var tickEntries = priorityEntries[index];
								if (tickEntries && tickEntries.length > 0) {
									return false;
								}
							}
							return true;
						}

						function requestAnimationFrameCallback() {
							var shouldContinue = onTick();
							if (shouldContinue) {
								requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
							}
						}

						var TickManager = function TickManager() {
							_classCallCheck(this, TickManager);
						};

						TickManager.prototype.add = function (tickEntry) {
							_TickEntry2.default.stackDebug && console.log("TickManager: add : ", tickEntry);
							if (arePriorityEntriesEmpty()) {
								this.start();
							}
							if (isExecuting) {
								_TickEntry2.default.stackDebug && console.log("TickManager: add :  wait ");
								if (!waitEntries) {
									waitEntries = [];
								}
								waitEntries.push(tickEntry);
							} else {
								var priority = tickEntry.priority;

								if (!priorityEntries[priority]) {
									_TickEntry2.default.stackDebug && console.log("TickManager: add : in " + priority + " : new Array");
									priorityEntries[priority] = [];
								}
								_TickEntry2.default.stackDebug && console.log("TickManager: add : in " + priority + " : push");
								var tickEntries = priorityEntries[priority];
								tickEntries.push(tickEntry);
							}
						};

						// Todo: Support for NodeJS 
						TickManager.prototype.start = function () {
							if (window) {
								// will receives timestamp as argument
								requestAnimationFrameId = window.requestAnimationFrame(requestAnimationFrameCallback);
								_TickEntry2.default.stackDebug && console.log("TickManager: start : ", requestAnimationFrameId);
							}
						};

						TickManager.prototype.stop = function () {
							if (window) {
								_TickEntry2.default.stackDebug && console.log("TickManager: stop : ", requestAnimationFrameId);
								window.cancelAnimationFrame(requestAnimationFrameId);
							}
						};

						var tickManager = new TickManager();

						// singletonInstanace
						exports.default = tickManager;

						/***/
					}]
					/******/)
				);
			});

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _functions = __webpack_require__(2);

			var _functions2 = _interopRequireDefault(_functions);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			exports.default = _functions2.default;

			/***/
		},
		/* 2 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
			};

			var _entry = __webpack_require__(3);

			var _entry2 = _interopRequireDefault(_entry);

			var _ticker = __webpack_require__(0);

			var _ticker2 = _interopRequireDefault(_ticker);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Functions = function Functions() {
				_classCallCheck(this, Functions);

				this.entries = [];
				this.frameEntries = [];
				this.executingLaterInNextTickCount = 0;
				this.connector = null; // connector is responsible for sequencing functions
				this.enableConnector = true;
			};

			// the function that responsible for initiating trigger
			// if called using this function will make a synced effect of execution


			exports.default = Functions;
			Functions.prototype.executeTriggerer = function (context, triggerInitiatingfunction, triggererCallback) {
				var _this = this;

				var _executeTriggerer = function _executeTriggerer() {
					var ticker = void 0;
					if (_this.executingLaterInNextTickCount === 0) {
						triggerInitiatingfunction.call(context);
						if (triggererCallback) {
							if (_this.executingLaterInNextTickCount === 0) {
								triggererCallback && triggererCallback();
							} else {
								ticker = new _ticker2.default(_this, triggererCallback, null, 2);
								ticker.execute();
							}
						}
					} else {
						ticker = new _ticker2.default(_this, _executeTriggerer, triggererCallback, 2);
						ticker.execute();
					}
				};
				_executeTriggerer();
			};

			Functions.prototype.addListener = function (context, func) {
				var executeLaterInNextTick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

				var _this2 = this;

				var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
				var listenerCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

				Functions.stackDebug && console.log("Functions: triggerListeners : addListener: ", this);
				var entry = void 0;
				if (executeLaterInNextTick) {

					var tickerCallback = function tickerCallback() {
						_this2.executingLaterInNextTickCount = _this2.executingLaterInNextTickCount - 1;
						if (listenerCallback) {
							listenerCallback.call(listenerCallback['this']);
						}
						if (_this2.executingLaterInNextTickCount === 0) {
							Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", _this2);
							_this2.listenersDidExecute();
						}
					};
					var ticker = new _ticker2.default(context, func, tickerCallback, priority);
					entry = new _entry2.default(ticker, ticker.execute);
					Functions.stackDebug && console.log("Functions: triggerListeners : addListener: frameEntries: ", entry);
					this.frameEntries.push(entry);
				} else {
					entry = new _entry2.default(context, func);
					Functions.stackDebug && console.log("Functions: triggerListeners : addListener: entries: ", entry);
					this.entries.push(entry);
				}
			};

			Functions.prototype.listenersWillExecute = function () {};

			Functions.prototype.shouldListenersExecute = function () {
				Functions.stackDebug && console.log("Functions: triggerListeners : shouldListenersExecute: ", true, this);
				return true;
			};

			Functions.prototype.listenersDidExecute = function () {
				this.enableConnector && this.connector && this.connector();
			};

			Functions.prototype.removeListener = function (context, func) {
				var _this3 = this;

				var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

				var entry = void 0,
				    i = void 0;
				var frameEntries = this.frameEntries,
				    entries = this.entries;

				var _loop = function _loop() {
					var frameEntry = frameEntries[i];
					entry = frameEntry.context;
					if (entry.context === context && entry.listener === func) {
						if (_this3.executingLaterInNextTickCount === 0) {
							frameEntry.dispose();
						} else {
							// frame trigger Listeners are still running
							var tickerEntry = void 0;
							var disposeDoneNotifier = function disposeDoneNotifier() {
								if (_this3.executingLaterInNextTickCount === 0) {
									callback && callback();
								} else {
									tickerEntry = new _ticker2.default(frameEntry, frameEntry.dispose, disposeDoneNotifier, 3);
									tickerEntry.execute();
								}
							};
							tickerEntry = new _ticker2.default(frameEntry, frameEntry.dispose, disposeDoneNotifier, 3);
							tickerEntry.execute();
						}
						return {
							v: void 0
						};
					}
				};

				for (i = 0; i < frameEntries.length; i++) {
					var _ret = _loop();

					if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
				}

				for (i = 0; i < entries.length; i++) {
					entry = entries[i];
					if (entry.context === context && entry.listener === func) {
						entry.dispose();
						callback && callback();
						return;
					}
				}
			};

			Functions.prototype.setConnector = function (connector) {
				this.connector = connector;
			};

			Functions.prototype.removeConnector = function () {
				this.connector = null;
			};

			Functions.prototype.linkConnector = function () {
				this.enableConnector = true;
			};

			Functions.prototype.unLinkConnector = function () {
				this.enableConnector = false;
			};

			Functions.prototype.triggerListeners = function () {
				var shouldTrigger = this.shouldListenersExecute();
				if (shouldTrigger) {
					Functions.stackDebug && console.log("Functions: triggerListeners : listenersWillExecute: ", this);
					this.listenersWillExecute();
					Functions.stackDebug && console.log("Functions: triggerListeners ", this);
					var entriesIndexToDispose = [];
					this.entries.forEach(function (entry, index) {
						if (entry.listener) {
							entry.listener.apply(entry.context || entry.listener['this']);
						} else {
							entriesIndexToDispose.push(index);
						}
					});
					entriesIndexToDispose.forEach(function (entryIndex) {
						this.entries.splice(entryIndex, 1);
					}, this);

					if (this.frameEntries.length > 0) {
						this.frameEntries.forEach(function (entry, index) {
							if (entry.listener) {
								this.executingLaterInNextTickCount = this.executingLaterInNextTickCount + 1;
								entry.listener.apply(entry.context || entry.listener['this']);
							} else {
								entriesIndexToDispose.push(index);
							}
						}, this);
						entriesIndexToDispose.forEach(function (entryIndex) {
							this.frameEntries.splice(entryIndex, 1);
						}, this);
					} else {
						Functions.stackDebug && console.log("Functions: triggerListeners : listenersDidExecute: ", this);
						this.listenersDidExecute();
					}
				}
			};

			Functions.stackDebug = false;

			/***/
		},
		/* 3 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			Object.defineProperty(exports, "__esModule", {
				value: true
			});

			var _ticker = __webpack_require__(0);

			var _ticker2 = _interopRequireDefault(_ticker);

			function _interopRequireDefault(obj) {
				return obj && obj.__esModule ? obj : { default: obj };
			}

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			var Entry = function Entry(context, func) {
				_classCallCheck(this, Entry);

				this.context = context;
				this.listener = func;
			};

			// Method available only on Entry instance not in Class


			exports.default = Entry;
			Entry.prototype.dispose = function () {
				if (this.context instanceof _ticker2.default) {
					this.context.dispose();
				}
				this.context = null;
				this.listener = null;
			};

			/***/
		}]
		/******/)
	);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Store2 = __webpack_require__(0);

var _Store3 = _interopRequireDefault(_Store2);

var _helpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StoreCollection = function (_Store) {
	_inherits(StoreCollection, _Store);

	function StoreCollection(state, displayName, objectName) {
		_classCallCheck(this, StoreCollection);

		var _this = _possibleConstructorReturn(this, (StoreCollection.__proto__ || Object.getPrototypeOf(StoreCollection)).call(this, null, displayName, objectName));

		_this.children = {};
		_this._value = state ? state.value === undefined ? {} : state.value : {};
		_this.triggerWaitCount = 0;
		return _this;
	}

	_createClass(StoreCollection, [{
		key: 'shouldListenersExecute',
		value: function shouldListenersExecute() {
			if (this.triggerWaitCount === 0 || this.triggerWaitCount === 1) {
				this.triggerWaitCount === 1 && this.triggerWaitCount--;
				return true;
			} else {
				this.triggerWaitCount = this.triggerWaitCount - 1;
				return false;
			}
		}
	}]);

	return StoreCollection;
}(_Store3.default);

exports.default = StoreCollection;


StoreCollection.prototype.getState = function () {
	return this.getChildren(true);
};

StoreCollection.prototype.setState = function (newValue, callback) {
	var _this2 = this;

	this.triggerWaitCount = this.calculateDiff(newValue, true);
	if (this.triggerWaitCount > 0) {
		var _setState = function _setState() {
			var childValues = {};
			var currentChildIds = _this2.getChildIds(true);
			if (newValue) {
				for (var i = 0; i < newValue.length; i++) {
					var newChildState = newValue[i];
					if (newChildState) {
						var childId = void 0;
						if (typeof newChildState === 'string') {
							// no change
							childId = newChildState; // id of UnchangedChild
							childValues[childId] = _this2._value[childId];
						} else {
							var id = newChildState.id,
							    classDefName = newChildState.classDefName,
							    value = newChildState.value,
							    displayName = newChildState.displayName;

							if (classDefName === undefined) {
								// delete Operation
								_this2.remove(id);
							} else {
								// update Operation or Addition
								_this2.requestStore(id, value, classDefName, displayName);
								childValues[id] = value;
							}
						}
						var idStillExist = currentChildIds && currentChildIds.indexOf(childId) > -1;
						if (idStillExist) {
							// remove them
							currentChildIds.splice(childId, 1);
						}
					}
				}
			}
			// todo: will this line of Codes ever reach as we handle remove above
			/*if(currentChildIds){
   	// remove all old Ids
   	currentChildIds.map((oldId)=>{
   		this.remove(oldId);
   	});
   }*/
			_this2._value = childValues;
		};
		//set state function is the one which triggers all the listeners attached to it
		// if listeners execution are going on, this will execute once they are done
		// else set state is executed immediately
		this.executeTriggerer(this, _setState, function () {
			callback && callback();
		});
	}

	return Number(this.triggerWaitCount > 0);
};

StoreCollection.prototype.getChildIds = function (asCopy) {
	var ids = Object.keys(this.children);
	return asCopy ? ids.slice() : ids;
};

StoreCollection.prototype.getChildren = function (asJson) {
	var children = [];
	var childKeys = Object.keys(this.children);
	for (var i = 0; i < childKeys.length; i++) {
		var childKey = childKeys[i];
		var storeObject = this.children[childKey];
		children.push(asJson ? storeObject.asJson() : storeObject);
	}
	return children;
};

//to-do think of ui point of view and the change the way they are instantiated here
StoreCollection.prototype.requestStore = function (id, state, classDefName, displayName, newStoreCallback) {
	var _this3 = this;

	var storeObject = this.children[id];
	if (storeObject) {
		return storeObject.setState(state);
	}

	var returnValue = void 0;
	var _requestStore = function _requestStore() {
		if (classDefName === 'Store') {
			storeObject = new _Store3.default(state, displayName, id);
		} else if (classDefName === 'StoreCollection') {
			storeObject = new StoreCollection(state, displayName, id);
		}

		storeObject.setConnector(_this3.triggerListeners.bind(_this3));
		storeObject.linkParentId(_this3.id);
		var newStoreObjId = storeObject.id;
		_this3.children[newStoreObjId] = storeObject;
		_this3._value[newStoreObjId] = storeObject.getValue();
		returnValue = storeObject;
		_this3.triggerListeners();
	};

	this.executeTriggerer(this, _requestStore, function () {
		newStoreCallback && newStoreCallback(returnValue);
	});
};

StoreCollection.prototype.remove = function (id) {
	var _this4 = this;

	var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	var storeObject = this.children[id];
	if (storeObject) {
		var _remove = function _remove() {
			storeObject.removeConnector();
			delete _this4.children[id];
			delete _this4._value[id];
			trigger && _this4.triggerListeners();
		};

		if (!trigger) {
			_remove.call(this);
		};

		this.executeTriggerer(this, _remove);
	}
};

StoreCollection.prototype.removeAll = function () {
	var _this5 = this;

	var childKeys = Object.keys(this.children);
	if (childKeys.length > 0) {
		var _removeAll = function _removeAll() {
			for (var i = 0; i < childKeys.length; i++) {
				var childKey = childKeys[i];
				_this5.remove(childKey, false);
			}
			_this5.triggerListeners();
		};

		this.executeTriggerer(this, _removeAll);
	}
};

// onlyComparison mode, our Diff is Log diff
// in false mode our diff is state object
StoreCollection.prototype.calculateDiff = function (value) {
	var onlyComparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var valueAsObj = (0, _helpers.arrayToObject)(value, 'id');

	var childrenKeys = Object.keys(this.children);
	var stateLen = value ? value.length : NaN;
	var currentStateLen = childrenKeys ? childrenKeys.length : 0;
	var isChanged = stateLen !== currentStateLen;
	var childUpdateCount = 0;

	var childrenForwardDiffs = [];
	var childrenBackwardDiffs = [];

	for (var i = 0; i < currentStateLen; i++) {
		var key = childrenKeys[i];
		var currentStoreObject = this.children[key];
		var childState = valueAsObj ? valueAsObj[currentStoreObject.id] : undefined;
		delete valueAsObj[currentStoreObject.id]; // need to do this to identify all deleted child

		if (childState) {
			// existing child update
			if (typeof childState !== 'string') {
				// no change this happens in diff mode , which onlyComparison
				var childValue = childState ? childState.value : undefined;
				if (onlyComparison) {
					var isChildUpdated = currentStoreObject.calculateDiff.call(currentStoreObject, childValue, onlyComparison);
					if (isChildUpdated) {
						childUpdateCount = childUpdateCount + 1;
					}
				} else {
					var diffValue = currentStoreObject.getDiff.call(currentStoreObject, childValue);
					if (typeof diffValue !== 'string') {
						isChanged = true;
					}
					var forward = diffValue.forward,
					    backward = diffValue.backward;

					childrenForwardDiffs.push(forward);
					childrenBackwardDiffs.push(backward);
				}
			}
		} else {
			if (onlyComparison) {
				childUpdateCount = childUpdateCount + 1;
			} else {
				childrenForwardDiffs.push(currentStoreObject.asJson());
				childrenBackwardDiffs.push(currentStoreObject.asJson(undefined, true));
			}
		}
	}

	var remainingChildKeys = valueAsObj ? Object.keys(valueAsObj) : null;
	var remianingChildCount = remainingChildKeys ? remainingChildKeys.length : 0;
	if (remianingChildCount) {
		if (onlyComparison) {
			childUpdateCount = remianingChildCount + childUpdateCount;
		} else {
			for (var _i = 0; _i < remianingChildCount; _i++) {
				var remainingChildKey = remainingChildKeys[_i];
				var remainingChild = valueAsObj[remainingChildKey];
				var deletedChildForwardDiff = {};
				deletedChildForwardDiff.id = remainingChild.id;
				deletedChildForwardDiff['classDefName'] = undefined;
				deletedChildForwardDiff['displayName'] = undefined;
				deletedChildForwardDiff['value'] = undefined;

				childrenForwardDiffs.push(deletedChildForwardDiff);
				childrenBackwardDiffs.push(remainingChild);
			}
		}
	}

	if (onlyComparison) {
		return childUpdateCount;
	}

	if (isChanged) {
		return {
			forward: this.asJson(childrenForwardDiffs),
			backward: this.asJson(childrenBackwardDiffs)
		};
	} else {
		return {
			forward: this.id,
			backward: this.id
		};
	}
};

StoreCollection.prototype.combineDiff = function (array1, array2, idName) {

	return (0, _helpers.combineArray)(array1, array2, idName, function (array1AsObj, array2Child, keyName) {
		var childId = typeof array2Child === 'string' ? array2Child : array2Child[keyName];
		return !array1AsObj[childId];
	});
};
// when we call apply diff, connect to next set of functions are not called
StoreCollection.prototype.applyDiff = function (value, callback) {
	var _this6 = this;

	this.unLinkConnector();
	this.setState(value, function () {
		_this6.linkConnector();
		callback();
	});
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOGEwNTYwYTc0ZDQ3MTM1YWRiNiIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDkiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9pcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmVJRC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1N0b3JlQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVEaWZmIiwidmFsdWUiLCJvbmx5Q29tcGFyaXNvbiIsImN1cnJlbnRWYWx1ZSIsIl92YWx1ZSIsImNoYW5nZWQiLCJjb21wYXJlciIsIlN0b3JlIiwic3RhY2tEZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJhc0pzb24iLCJpZCIsImRpc3BsYXlOYW1lIiwib2JqZWN0TmFtZSIsInVuZGVmaW5lZCIsImJpbmQiLCJpc0RlbGV0ZSIsImdldFN0YXRlIiwianNvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsInByb3RvdHlwZSIsImdldFZhbHVlIiwic2V0U3RhdGUiLCJuZXdWYWx1ZSIsImNhbGxiYWNrIiwiZGlkU3RhdGVDaGFuZ2VkIiwiX3NldFN0YXRlIiwidHJpZ2dlckxpc3RlbmVycyIsImV4ZWN1dGVUcmlnZ2VyZXIiLCJOdW1iZXIiLCJzaG91bGRMaXN0ZW5lcnNFeGVjdXRlIiwib2xkVmFsdWUiLCJjb21wYXJlRm4iLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJnZXREaWZmIiwiYXBwbHlEaWZmIiwic3RhdGVBc0pzb24iLCJpc0NoYW5nZWQiLCJhcnJheVRvT2JqZWN0IiwiY29tYmluZUFycmF5Iiwib2xkVmFsIiwibmV3VmFsIiwiY29tcGFyaXNvblZhbHVlIiwiYXJyYXkiLCJpZE5hbWUiLCJvYmplY3QiLCJpbmRleCIsImNoaWxkIiwibGVuZ3RoIiwiYXJyYXkxIiwiYXJyYXkyIiwic2hvdWxkQ29tYmluZUZuIiwiYXJyYXkxQXNPYmoiLCJhcnJheTJjaGlsZCIsImkiLCJwdXNoIiwiZGVmYXVsdCIsIlN0b3JlQ29sbGVjdGlvbiIsIlN0b3JlSUQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJwYXJlbnRJZCIsImxpbmtlZElkcyIsImxpbmtQYXJlbnRJZCIsInVuTGlua1BhcmVudElkIiwibGlua0lkIiwidW5MaW5rSWQiLCJpbmRleE9mIiwic3RhdGUiLCJjaGlsZHJlbiIsInRyaWdnZXJXYWl0Q291bnQiLCJnZXRDaGlsZHJlbiIsImNoaWxkVmFsdWVzIiwiY3VycmVudENoaWxkSWRzIiwiZ2V0Q2hpbGRJZHMiLCJuZXdDaGlsZFN0YXRlIiwiY2hpbGRJZCIsImNsYXNzRGVmTmFtZSIsInJlbW92ZSIsInJlcXVlc3RTdG9yZSIsImlkU3RpbGxFeGlzdCIsInNwbGljZSIsImFzQ29weSIsImlkcyIsIk9iamVjdCIsImtleXMiLCJzbGljZSIsImNoaWxkS2V5cyIsImNoaWxkS2V5Iiwic3RvcmVPYmplY3QiLCJuZXdTdG9yZUNhbGxiYWNrIiwicmV0dXJuVmFsdWUiLCJfcmVxdWVzdFN0b3JlIiwic2V0Q29ubmVjdG9yIiwibmV3U3RvcmVPYmpJZCIsInRyaWdnZXIiLCJfcmVtb3ZlIiwicmVtb3ZlQ29ubmVjdG9yIiwiY2FsbCIsInJlbW92ZUFsbCIsIl9yZW1vdmVBbGwiLCJ2YWx1ZUFzT2JqIiwiY2hpbGRyZW5LZXlzIiwic3RhdGVMZW4iLCJOYU4iLCJjdXJyZW50U3RhdGVMZW4iLCJjaGlsZFVwZGF0ZUNvdW50IiwiY2hpbGRyZW5Gb3J3YXJkRGlmZnMiLCJjaGlsZHJlbkJhY2t3YXJkRGlmZnMiLCJrZXkiLCJjdXJyZW50U3RvcmVPYmplY3QiLCJjaGlsZFN0YXRlIiwiY2hpbGRWYWx1ZSIsImlzQ2hpbGRVcGRhdGVkIiwiZGlmZlZhbHVlIiwicmVtYWluaW5nQ2hpbGRLZXlzIiwicmVtaWFuaW5nQ2hpbGRDb3VudCIsInJlbWFpbmluZ0NoaWxkS2V5IiwicmVtYWluaW5nQ2hpbGQiLCJkZWxldGVkQ2hpbGRGb3J3YXJkRGlmZiIsImNvbWJpbmVEaWZmIiwiYXJyYXkyQ2hpbGQiLCJrZXlOYW1lIiwidW5MaW5rQ29ubmVjdG9yIiwi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LEVBQTZCTixNQUE3QixFQUFxQyxVQUFDUSxXQUFELEVBQWN1RSxXQUFkLEVBQTJCQyxPQUEzQixFQUFxQztBQUNoRixNQUFNOUMsVUFBVSxPQUFPNkMsV0FBUCxLQUF1QixRQUF2QixHQUFrQ0EsV0FBbEMsR0FBZ0RBLFlBQVlDLE9BQVosQ0FBaEU7QUFDQSxTQUFPLENBQUN4RSxZQUFZMEIsT0FBWixDQUFSO0FBQ0EsRUFITSxDQUFQO0FBS0EsQ0FQRDtBQVFBO0FBQ0FyQixnQkFBZ0J0QyxTQUFoQixDQUEwQmdCLFNBQTFCLEdBQXNDLFVBQVNyQyxLQUFULEVBQWdCeUIsUUFBaEIsRUFBeUI7QUFBQTs7QUFDOUQsTUFBS3NHLGVBQUw7QUFDQSxNQUFLeEcsUUFBTCxDQUFjdkIsS0FBZCxFQUFxQixZQUFJO0FBQ3hCLFNBQUtnSSxhQUFMO0FBQ0F2RztBQUNBLEVBSEQ7QUFJQSxDQU5ELEMiLCJmaWxlIjoibGliL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJzdG9yZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdG9yZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdG9yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjhhMDU2MGE3NGQ0NzEzNWFkYjYiLCJpbXBvcnQgeyBpc0NoYW5nZWR9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgU3RvcmVJRCBmcm9tICcuL1N0b3JlSUQnO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVEaWZmKHZhbHVlLCBvbmx5Q29tcGFyaXNvbiA9IGZhbHNlKXtcblx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5fdmFsdWU7XG5cdGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cdGlmKHRoaXMuY29tcGFyZXIpe1xuXHRcdGNoYW5nZWQgPSB0aGlzLmNvbXBhcmVyKHZhbHVlLCBjdXJyZW50VmFsdWUpO1xuXHR9ZWxzZXtcblx0XHRjaGFuZ2VkID0gaXNDaGFuZ2VkKHZhbHVlLCBjdXJyZW50VmFsdWUpO1xuXHR9XG5cdFN0b3JlLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJTdG9yZTogZ2V0RGlmZjogXCIsIHZhbHVlLCBjdXJyZW50VmFsdWUgLCB0aGlzKTtcblx0aWYob25seUNvbXBhcmlzb24pe1xuXHRcdHJldHVybiBjaGFuZ2VkO1xuXHR9XG5cblx0cmV0dXJuIGNoYW5nZWQgPyB0aGlzLmFzSnNvbihjdXJyZW50VmFsdWUpIDogdGhpcy5pZDtcbn1cblxuXG4vKlxuKiAxLiBnZXRWYWx1ZSwgcmV0dXJuIHRoZSB3cmFwcGVkIHZhbHVlIGluc2lkZSB0aGlzIG9iamVjdFxuKiAzLiBnZXRTdGF0ZSBkb2VzIGV4YWN0bHkgd2hhdCBnZXRWYWx1ZSBkb2VzIChkdXBsaWNhdGlvbilcbiogNC4gc2V0U3RhdGUgc2V0IHRoZSB2YWx1ZSBpZiB0aGVyZSBpcyBhIGNoYW5nZSB0byBvbGRWYWx1ZSBhbmQgaW5BZGRpdGlvbiB0cmlnZ2VycyBhbGwgZGF0YUNoYW5nZSBsaXN0ZW5lcnNcbiogNS4gZ2V0RGlmZiByZXR1cm4gdGhlIHZhbHVlIGluIEpTT04gU3RydWN1dHVyZSB3aXRoIG1ldGFkYXRhIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgb2JqZWN0Ki9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIGV4dGVuZHMgU3RvcmVJRHtcblx0Y29uc3RydWN0b3IodmFsdWUsIGRpc3BsYXlOYW1lLCBvYmplY3ROYW1lLCBjb21wYXJlcil7XG5cdFx0c3VwZXIob2JqZWN0TmFtZSk7XG5cdFx0Ly9pbml0aWFsIHZhbHVlIGNhbid0IGJlIHVuZGVmaW5lZCwgaXQgaGFzIHRvIGJlIG51bGwgb3IgZ2l2ZW4gdmFsdWVcblx0XHR0aGlzLl92YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XG5cdFx0dGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXHRcdHRoaXMuY29tcGFyZXIgPSBjb21wYXJlcjtcblxuXHRcdHRoaXMuYXNKc29uID0gdGhpcy5hc0pzb24uYmluZCh0aGlzKTtcblx0fVxuXG5cdGFzSnNvbih2YWx1ZSwgaXNEZWxldGUpe1xuXHRcdHZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0U3RhdGUoKSA6IHZhbHVlO1xuXHRcdGNvbnN0IGpzb24gPSBzdXBlci5hc0pzb24oKTtcblx0XHRqc29uWydjbGFzc0RlZk5hbWUnXSA9IGlzRGVsZXRlID8gIHVuZGVmaW5lZCA6IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0XHRqc29uWydkaXNwbGF5TmFtZSddID0gaXNEZWxldGUgPyAgdW5kZWZpbmVkIDp0aGlzLmRpc3BsYXlOYW1lO1xuXHRcdGpzb25bJ3ZhbHVlJ10gPSBpc0RlbGV0ZSA/ICB1bmRlZmluZWQgOnZhbHVlO1xuXHRcdHJldHVybiBqc29uO1xuXHR9O1xufVxuXG5cblN0b3JlLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiB0aGlzLl92YWx1ZTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiB0aGlzLl92YWx1ZTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKG5ld1ZhbHVlLCBjYWxsYmFjayl7XG5cdGNvbnN0IGRpZFN0YXRlQ2hhbmdlZCA9IHRoaXMuY2FsY3VsYXRlRGlmZihuZXdWYWx1ZSwgdHJ1ZSk7XG5cblx0aWYoZGlkU3RhdGVDaGFuZ2VkKXtcblx0XHRjb25zdCBfc2V0U3RhdGUgPSAoKT0+e1xuXHRcdFx0dGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdHRoaXMudHJpZ2dlckxpc3RlbmVycygpO1xuXHRcdH07XG5cdFx0Ly9zZXQgc3RhdGUgZnVuY3Rpb24gaXMgdGhlIG9uZSB3aGljaCB0cmlnZ2VycyBhbGwgdGhlIGxpc3RlbmVycyBhdHRhY2hlZCB0byBpdFxuXHRcdC8vIGlmIGxpc3RlbmVycyBleGVjdXRpb24gYXJlIGdvaW5nIG9uLCB0aGlzIHdpbGwgZXhlY3V0ZSBvbmNlIHRoZXkgYXJlIGRvbmVcblx0XHQvLyBlbHNlIHNldCBzdGF0ZSBpcyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9zZXRTdGF0ZSwgKCk9Pntcblx0XHRcdFN0b3JlLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJTdG9yZTogX3NldFN0YXRlQ2FsbGJhY2s6IFwiICwgdGhpcyk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIE51bWJlcihkaWRTdGF0ZUNoYW5nZWQpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnNob3VsZExpc3RlbmVyc0V4ZWN1dGUgPSBmdW5jdGlvbihvbGRWYWx1ZSwgbmV3VmFsdWUpe1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIG5lZWQgYm90aCBmb3J3YXJkIGRpZmYgYW5kICBiYWNrd2FyZCBkaWZmXG5TdG9yZS5wcm90b3R5cGUuY2FsY3VsYXRlRGlmZiA9IGZ1bmN0aW9uICh2YWx1ZSwgb25seUNvbXBhcmlzb24gPSBmYWxzZSl7XG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuXHRjb25zdCBjb21wYXJlRm4gPSB0aGlzLmNvbXBhcmVyID8gdGhpcy5jb21wYXJlciA6IGlzQ2hhbmdlZDtcblx0Y29uc3QgY2hhbmdlZCA9IGNvbXBhcmVGbih2YWx1ZSwgY3VycmVudFZhbHVlKTtcblxuXHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cblxuXHRpZihjaGFuZ2VkKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmFzSnNvbihjdXJyZW50VmFsdWUpLFxuXHRcdFx0YmFja3dhcmQ6dGhpcy5hc0pzb24odmFsdWUpXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmlkLFxuXHRcdFx0YmFja3dhcmQ6dGhpcy5pZFxuXHRcdH07XG5cdH1cbn1cblxuLy8gRGlmZiByZXR1cm5zIHRoZSBEaWZmIFZhbHVlIGFzIEpTT05cblN0b3JlLnByb3RvdHlwZS5nZXREaWZmID0gZnVuY3Rpb24odmFsdWUpe1xuXHRyZXR1cm4gdGhpcy5jYWxjdWxhdGVEaWZmKHZhbHVlLCBmYWxzZSlcbn07XG5cblN0b3JlLnByb3RvdHlwZS5hcHBseURpZmYgPSBmdW5jdGlvbihzdGF0ZUFzSnNvbiwgY2FsbGJhY2spe1xuXHRpZih0eXBlb2Ygc3RhdGVBc0pzb24gIT09ICdzdHJpbmcnKXtcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlQXNKc29uLnZhbHVlLCBjYWxsYmFjayk7XG5cdH1cbn07XG5cblN0b3JlLnN0YWNrRGVidWcgPSBmYWxzZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1N0b3JlLmpzIiwiaW1wb3J0IHsgY29tcGFyZX0gZnJvbSAnZGlmZic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hhbmdlZChvbGRWYWwsIG5ld1ZhbCl7XG5cdGNvbnN0IGNvbXBhcmlzb25WYWx1ZSA9ICBjb21wYXJlKG9sZFZhbCwgbmV3VmFsKTtcblx0aWYoY29tcGFyaXNvblZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyYXkgLCBpZE5hbWUpe1xuXHRsZXQgb2JqZWN0ID0gbnVsbDtcblx0aWYoYXJyYXkpe1xuXHRcdG9iamVjdCA9IHt9O1xuXHRcdGxldCBpbmRleCwgaWQsIGNoaWxkO1xuXHRcdGZvcihpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKXtcblx0XHRcdGNoaWxkID0gYXJyYXlbaW5kZXhdO1xuXHRcdFx0aWYoY2hpbGQpe1xuXHRcdFx0XHRpZih0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRpZCA9IGNoaWxkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlkID0gY2hpbGRbaWROYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvYmplY3RbaWRdID0gY2hpbGQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lQXJyYXkoYXJyYXkxLCBhcnJheTIsIGlkTmFtZSwgc2hvdWxkQ29tYmluZUZuKXtcblx0Y29uc3QgYXJyYXkxQXNPYmogPSBhcnJheVRvT2JqZWN0KGFycmF5MSwgaWROYW1lKTtcblxuXHRsZXQgYXJyYXkyY2hpbGQ7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheTIubGVuZ3RoOyBpKyspe1xuXHRcdGFycmF5MmNoaWxkID0gYXJyYXkyW2ldO1xuXHRcdGlmKHNob3VsZENvbWJpbmVGbihhcnJheTFBc09iaiwgYXJyYXkyY2hpbGQsIGlkTmFtZSkpe1xuXHRcdFx0YXJyYXkxLnB1c2goYXJyYXkyY2hpbGQpXG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcnJheTE7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2hlbHBlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBTdG9yZSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCBTdG9yZUNvbGxlY3Rpb24gZnJvbSAnLi9TdG9yZUNvbGxlY3Rpb24nO1xuXG5leHBvcnQge1xuXHRTdG9yZSBhcyBkZWZhdWx0LFxuXHRTdG9yZUNvbGxlY3Rpb25cbn0gO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZnVuY3Rpb25zXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODdmZWUxZDhhYjRkYzQxMDcwOSIsImltcG9ydCBzdHJpbmdDb21wYXJlIGZyb20gJy4vc3RyaW5nQ29tcGFyZSdcbmltcG9ydCBudW1iZXJDb21wYXJlIGZyb20gJy4vbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2RhdGVDb21wYXJlJ1xuaW1wb3J0IGFycmF5Q29tcGFyZSBmcm9tICcuL2FycmF5Q29tcGFyZSdcbmltcG9ydCBvYmplY3RDb21wYXJlIGZyb20gJy4vb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBpcyBmcm9tICcuLy4uL2lzJ1xuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGNvbnN0ICBvbGRPYmpUeXBlID0gdHlwZW9mKG9sZE9iaik7XG4gICAgY29uc3QgIG5ld09ialR5cGUgPSB0eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzKG9sZE9iaiwgRGF0ZSkpXG4gICAgICAgIHJldHVybiBkYXRlQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKGlzKG9sZE9iaiwgQXJyYXkpKVxuICAgICAgICByZXR1cm4gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqLGNvbXBhcmUpO1xuICAgIGlmIChpcyhvbGRPYmosIE9iamVjdCkpXG4gICAgICAgIHJldHVybiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcblxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9jb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIi8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2xvY2FsZUNvbXBhcmVcbmZ1bmN0aW9uIHN0cmluZ0NvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlLCBpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSB0eXBlb2YgaXNDYXNlU2Vuc2l0aXZlICE9PSAndW5kZWZpbmVkJyA/IGlzQ2FzZVNlbnNpdGl2ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwgJiYgbmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAoaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gU3RyaW5nKG9sZFZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBuZXdWYWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKG9sZFZhbHVlKS5sb2NhbGVDb21wYXJlKG5ld1ZhbHVlKTtcbiAgICBpZiAocmVzdWx0IDwgLTEpXG4gICAgICAgIHJlc3VsdCA9IC0xO1xuICAgIGVsc2UgaWYgKHJlc3VsdCA+IDEpXG4gICAgICAgIHJlc3VsdCA9IDE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdDb21wYXJlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvc3RyaW5nQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gbnVtYmVyQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChpc05hTihvbGRWYWx1ZSkgJiYgaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VmFsdWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAob2xkVmFsdWUgPCBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRWYWx1ZSA+IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9udW1iZXJDb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICB2YXIgIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyICBuZXdUaW1lID0gbmV3VmFsdWUuZ2V0VGltZSgpO1xuICAgIGlmIChvbGRUaW1lIDwgbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRUaW1lID4gbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXNOYU4ob2xkVGltZSkgJiYgaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRUaW1lKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0ZUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIHZhciAgb2xkT2JqTGVuZ3RoID0gb2xkT2JqLmxlbmd0aDtcbiAgICB2YXIgIG5ld09iakxlbmd0aCA9IG5ld09iai5sZW5ndGg7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA8IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPiBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgZm9yICh2YXIgIGkgPSAwOyBpIDwgb2xkT2JqTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBhcnJheSBlbGVtZW50c1xuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtpXSwgbmV3T2JqW2ldKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcnJheUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cblxuICAgIGxldCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBvbGRPYmopXG4gICAge1xuICAgICAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBsZXQgY29tcGFyaXNvblZhbHVlO1xuICAgIGZvciAocHJvcCBpbiBuZXdPYmopXG4gICAge1xuICAgICAgICBpZiAoIW9sZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICBjb21wYXJpc29uVmFsdWUgPSBjb21wYXJlKG9sZE9ialtwcm9wXSwgbmV3T2JqW3Byb3BdKTtcbiAgICAgICAgaWYgKGNvbXBhcmlzb25WYWx1ZSAhPT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9vYmplY3RDb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2luZGV4LmpzIiwiZnVuY3Rpb24gaXMob2JqLCBUeXBlKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFR5cGUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChUeXBlID09PSBPYmplY3QpXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gQm9vbGVhbjtcbiAgICBpZiAoVHlwZSA9PT0gQXJyYXkpXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pcy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9pcy5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJztcblxuLy8gSWYgdGhlcmUgaXMgbm8gY2hhbmdlIHJldHVybnMgdW5kZWZpbmVkXG4vLyBpZiB0aGVyZSBpcyBhIGNoYW5nZSByZXR1cm5zIHRoZSBsYXRlc3QgdmFsdWVcbmZ1bmN0aW9uIGRpZmYoY29tcGFyZWRWYWx1ZSwgdmFsdWUpe1xuXHRjb25zdCBjb21wYXJpc29uVmFsdWUgPSAgY29tcGFyZShjb21wYXJlZFZhbHVlLCB2YWx1ZSk7XG5cblx0aWYoY29tcGFyaXNvblZhbHVlID09PSAwKXtcblx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9kaWZmLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2RpZmYuanMiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJ2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlSUQgZXh0ZW5kcyBGdW5jdGlvbnN7XG5cdGNvbnN0cnVjdG9yKGlkKXtcblx0XHRzdXBlcigpO1xuXHRcdGlmKGlkID09PSB1bmRlZmluZWQgfHwgaWQgPT09IG51bGwpe1xuXHRcdFx0dGhpcy5pZCA9ICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG5cdFx0fSBlbHNle1xuXHRcdFx0dGhpcy5pZCA9IGlkO1xuXHRcdH1cblx0XHR0aGlzLnBhcmVudElkID0gbnVsbDtcblx0XHR0aGlzLmxpbmtlZElkcyA9IG51bGw7XG5cblx0XHR0aGlzLmxpbmtQYXJlbnRJZCA9IHRoaXMubGlua1BhcmVudElkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51bkxpbmtQYXJlbnRJZCA9IHRoaXMudW5MaW5rUGFyZW50SWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxpbmtJZCA9IHRoaXMubGlua0lkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51bkxpbmtJZCA9IHRoaXMudW5MaW5rSWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmFzSnNvbiA9IHRoaXMuYXNKc29uLmJpbmQodGhpcyk7XG5cdH1cblxuXHRsaW5rUGFyZW50SWQoaWQpe1xuXHRcdHRoaXMucGFyZW50SWQgPSBpZDtcblx0fTtcblxuXHR1bkxpbmtQYXJlbnRJZCgpe1xuXHRcdHRoaXMucGFyZW50SWQgPSBudWxsO1xuXHR9O1xuXG5cdGxpbmtJZChpZCl7XG5cdFx0aWYoIXRoaXMubGlua2VkSWRzKXtcblx0XHRcdHRoaXMubGlua2VkSWRzID0gW11cblx0XHR9XG5cblx0XHRpZih0aGlzLmxpbmtlZElkcy5pbmRleE9mKGlkKSA+IC0xKXtcblx0XHRcdHRoaXMubGlua2VkSWRzLnB1c2goaWQpXG5cdFx0fVxuXHR9O1xuXG5cblx0dW5MaW5rSWQoaWQpe1xuXG5cdH07XG5cblx0Ly90b2RvOiBwYXJlbnRJZDogdGhpcy5wYXJlbnRJZCwgbGlua2VkSWRzOiB0aGlzLmxpbmtlZElkc1xuXHRhc0pzb24oKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aWQ6IHRoaXMuaWRcblx0XHR9O1xuXHR9O1xufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9TdG9yZUlELmpzIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTI5OGNlZDE1MWVmNGQ4MWUxYTBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidGlja2VyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfTWFuYWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gdG9Ebzogc3VwcG9ydCBib3RoIGNhbGxiYWNrIGFuZCBwcm9taXNlXG52YXIgVGlja0VudHJ5ID1cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgXCJ0aGlzXCIgYXJndW1lbnQgZm9yIHRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyLlxuICovXG5mdW5jdGlvbiBUaWNrRW50cnkoY29udGV4dCwgbGlzdGVuZXIpIHtcblx0dmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuXHR2YXIgcHJpb3JpdHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG5cblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tFbnRyeSk7XG5cblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0dGhpcy5leGVjdXRpb25Db3VudCA9IDA7XG59O1xuXG4vKi0tLS0gUHVibGljfFByb3RvdHlwZSBNZXRob2RzIC0tLSovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpY2tFbnRyeTtcblRpY2tFbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrRW50cnkgZGlzcG9zZTpcIiwgdGhpcyk7XG5cdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdHRoaXMubGlzdGVuZXIgPSBudWxsO1xuXHR0aGlzLmNhbGxiYWNrID0gbnVsbDtcblx0dGhpcy5wcmlvcml0eSA9IG51bGw7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSBOYU47XG59O1xuXG5UaWNrRW50cnkucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG5cdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwibWFuYWdlci5hZGQ6IFwiLCB0aGlzKTtcblx0X01hbmFnZXIyLmRlZmF1bHQuYWRkKHRoaXMpO1xufTtcblxuVGlja0VudHJ5LkhJR0ggPSAwO1xuVGlja0VudHJ5Lk5PUk1BTCA9IDE7XG5UaWNrRW50cnkuTE9XID0gMjtcblxuVGlja0VudHJ5LmFsbG93ZWRUaWNrQ291bnQgPSAxMDA7XG5UaWNrRW50cnkuZGVidWcgPSBmYWxzZTtcblRpY2tFbnRyeS5zdGFja0RlYnVnID0gZmFsc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UaWNrRW50cnkyLmRlZmF1bHQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1RpY2tFbnRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfVGlja0VudHJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RpY2tFbnRyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IDA7IC8vIGZvciBXaW5kb3dzIEVudlxuXG4vL1swLUhJR0gsIDEtTk9STUFMLCAyLUxPV11cbnZhciBwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG52YXIgd2FpdEVudHJpZXMgPSBudWxsO1xuXG52YXIgdGlja0NvdW50ID0gMDtcbnZhciBpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBvblRpY2soKSB7XG5cdHRpY2tDb3VudCsrO1xuXHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdGNvbnNvbGUubG9nKFwiVGljayBjb3VudDogXCIsIHRpY2tDb3VudCk7XG5cdH1cblx0aWYgKHRpY2tDb3VudCA8IF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCkge1xuXHRcdGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKTtcblx0XHRtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKTtcblx0XHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdFx0c3RvcCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLndhcm4oXCJBbmltYXRpb24gZnJhbWUgbG9vcCBleGVjdXRlZCB0byBpdHMgc2V0IGxpbWl0OiBcIiwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KTtcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFbnRyaWVzOiBcIiwgcHJpb3JpdHlFbnRyaWVzWzBdLCBwcmlvcml0eUVudHJpZXNbMV0sIHByaW9yaXR5RW50cmllc1syXSwgd2FpdEVudHJpZXMpO1xuXHRcdH1cblx0XHRyZXNldCgpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc3RvcCgpIHtcblx0dGlja0NvdW50ID0gMDtcblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcblx0dGlja01hbmFnZXIuc3RvcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcblx0c3RvcCgpO1xuXHRwcmlvcml0eUVudHJpZXMgPSBbbnVsbCwgbnVsbCwgbnVsbF07XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gbW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCkge1xuXHR2YXIgZW50cmllc0NvdW50ID0gd2FpdEVudHJpZXMgPyB3YWl0RW50cmllcy5sZW5ndGggOiAwO1xuXHRpZiAod2FpdEVudHJpZXMgJiYgZW50cmllc0NvdW50ID4gMCkge1xuXHRcdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBlbnRyaWVzQ291bnQ7IGluZGV4KyspIHtcblx0XHRcdHZhciB0aWNrRW50cnkgPSB3YWl0RW50cmllc1tpbmRleF07XG5cdFx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVQcmlvcml0eUVudHJpZXMoKSB7XG5cdGlzRXhlY3V0aW5nID0gdHJ1ZTtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpO1xuXHRcdFx0Ly9DbGVhciB0aGVtIG9uY2UgZXhlY3V0ZWRcblx0XHRcdHByaW9yaXR5RW50cmllc1tpbmRleF0gPSBudWxsO1xuXHRcdH1cblx0fVxuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlVGlja0VudHJpZXModGlja0VudHJpZXMpIHtcblx0Ly8gaW1wb3J0YW50IHRvIHVzZSBmb3ItbG9vcFxuXHQvLyB0aWNrRW50cmllcyBncm93cyBkeW5hbWljYWxseSBieSBvbmUgb2YgaXRzIGVudHJ5XG5cdC8vIGZvciBleGFtcGxlOiBsZXQgc2F5IHdlIGhhdmUgb25lIGVudHJ5LCBhbmQgZXhlY3V0aW5nIHRoYXQgZW50cnkgbWlnaHQgYWRkcyBhbm90aGVyIGVudHJ5XG5cdC8vIHdpdGggbWFwIGZ1bmN0aW9uIHdlIGNhbnQgZXhlY3V0ZSBkeW5hbWljYWxseSBncm93aW5nIGVudHJpZXMuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGlja0VudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGlja0VudHJ5ID0gdGlja0VudHJpZXNbaV07XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGV4ZWN1dGVUaWNrRW50cmllcyA6IGZvciBcIiwgaSwgdGlja0VudHJ5KTtcblx0XHR0aWNrRW50cnkubGlzdGVuZXIuY2FsbCh0aWNrRW50cnkuY29udGV4dCB8fCB0aWNrRW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cblx0XHRpZiAodGlja0VudHJ5LmNhbGxiYWNrKSB7XG5cdFx0XHR0aWNrRW50cnkuY2FsbGJhY2suY2FsbCh0aWNrRW50cnkuY2FsbGJhY2tbJ3RoaXMnXSk7XG5cdFx0fVxuXHRcdHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCsrO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnICYmIHRpY2tFbnRyeS5leGVjdXRpb25Db3VudCA+IDEpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRXhlY3V0ZWQgbW9yZSB0aGFuIG9uY2U6IFwiLCB0aWNrRW50cnkpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpIHtcblx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHByaW9yaXR5RW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbaW5kZXhdO1xuXHRcdGlmICh0aWNrRW50cmllcyAmJiB0aWNrRW50cmllcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjaygpIHtcblx0dmFyIHNob3VsZENvbnRpbnVlID0gb25UaWNrKCk7XG5cdGlmIChzaG91bGRDb250aW51ZSkge1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdH1cbn1cblxudmFyIFRpY2tNYW5hZ2VyID0gZnVuY3Rpb24gVGlja01hbmFnZXIoKSB7XG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrTWFuYWdlcik7XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRpY2tFbnRyeSkge1xuXHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogXCIsIHRpY2tFbnRyeSk7XG5cdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0dGhpcy5zdGFydCgpO1xuXHR9XG5cdGlmIChpc0V4ZWN1dGluZykge1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiAgd2FpdCBcIik7XG5cdFx0aWYgKCF3YWl0RW50cmllcykge1xuXHRcdFx0d2FpdEVudHJpZXMgPSBbXTtcblx0XHR9XG5cdFx0d2FpdEVudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdGlmICghcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSkge1xuXHRcdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IGluIFwiICsgcHJpb3JpdHkgKyBcIiA6IG5ldyBBcnJheVwiKTtcblx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHR9XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IGluIFwiICsgcHJpb3JpdHkgKyBcIiA6IHB1c2hcIik7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH1cbn07XG5cbi8vIFRvZG86IFN1cHBvcnQgZm9yIE5vZGVKUyBcblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdC8vIHdpbGwgcmVjZWl2ZXMgdGltZXN0YW1wIGFzIGFyZ3VtZW50XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogc3RhcnQgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHdpbmRvdykge1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBzdG9wIDogXCIsIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHR9XG59O1xuXG52YXIgdGlja01hbmFnZXIgPSBuZXcgVGlja01hbmFnZXIoKTtcblxuLy8gc2luZ2xldG9uSW5zdGFuYWNlXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrTWFuYWdlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBM09URTRNRGRtTkRrM05EWmxPRFpoWmpRNE15SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnhwWWk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlRXRnVZV2RsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVYVdOclJXNTBjbmtpTENKamIyNTBaWGgwSWl3aWJHbHpkR1Z1WlhJaUxDSmpZV3hzWW1GamF5SXNJbkJ5YVc5eWFYUjVJaXdpWlhobFkzVjBhVzl1UTI5MWJuUWlMQ0p3Y205MGIzUjVjR1VpTENKa2FYTndiM05sSWl3aWMzUmhZMnRFWldKMVp5SXNJbU52Ym5OdmJHVWlMQ0pzYjJjaUxDSk9ZVTRpTENKbGVHVmpkWFJsSWl3aVlXUmtJaXdpU0VsSFNDSXNJazVQVWsxQlRDSXNJa3hQVnlJc0ltRnNiRzkzWldSVWFXTnJRMjkxYm5RaUxDSmtaV0oxWnlJc0luSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSWl3aWNISnBiM0pwZEhsRmJuUnlhV1Z6SWl3aWQyRnBkRVZ1ZEhKcFpYTWlMQ0owYVdOclEyOTFiblFpTENKcGMwVjRaV04xZEdsdVp5SXNJbTl1VkdsamF5SXNJbVY0WldOMWRHVlFjbWx2Y21sMGVVVnVkSEpwWlhNaUxDSnRiM1psVjJGcGRHbHVaMFZ1ZEhKcFpYTkdiM0pGZUdWamRYUnBiMjRpTENKaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU0lzSW5OMGIzQWlMQ0ozWVhKdUlpd2ljbVZ6WlhRaUxDSjBhV05yVFdGdVlXZGxjaUlzSW1WdWRISnBaWE5EYjNWdWRDSXNJbXhsYm1kMGFDSXNJbWx1WkdWNElpd2lkR2xqYTBWdWRISjVJaXdpZEdsamEwVnVkSEpwWlhNaUxDSndkWE5vSWl3aVpYaGxZM1YwWlZScFkydEZiblJ5YVdWeklpd2lhU0lzSW1OaGJHd2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlJc0luTm9iM1ZzWkVOdmJuUnBiblZsSWl3aWQybHVaRzkzSWl3aWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJaXdpVkdsamEwMWhibUZuWlhJaUxDSnpkR0Z5ZENJc0ltTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3p0QlF6ZEVRVHM3T3pzN096czdRVUZGUVR0SlFVTnhRa0VzVXp0QlFVVndRanM3T3p0QlFVbEJMRzFDUVVGWlF5eFBRVUZhTEVWQlFYRkNReXhSUVVGeVFpeEZRVU5CTzBGQlFVRXNTMEZFSzBKRExGRkJReTlDTEhWRlFVUXdReXhKUVVNeFF6dEJRVUZCTEV0QlJHZEVReXhSUVVOb1JDeDFSVUZFTWtRc1EwRkRNMFE3TzBGQlFVRTdPMEZCUTBNc1RVRkJTMGdzVDBGQlRDeEhRVUZsUVN4UFFVRm1PMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSkJMRkZCUVdoQ08wRkJRMEVzVFVGQlMwTXNZMEZCVEN4SFFVRnpRaXhEUVVGMFFqdEJRVU5CTEVNN08wRkJTVVk3TzJ0Q1FXcENjVUpNTEZNN1FVRnRRbkpDUVN4VlFVRlZUU3hUUVVGV0xFTkJRVzlDUXl4UFFVRndRaXhIUVVFNFFpeFpRVUZWTzBGQlEzWkRVQ3hYUVVGVlVTeFZRVUZXTEVsQlFYZENReXhSUVVGUlF5eEhRVUZTTEVOQlFWa3NiMEpCUVZvc1JVRkJhME1zU1VGQmJFTXNRMEZCZUVJN1FVRkRRU3hOUVVGTFZDeFBRVUZNTEVkQlFXVXNTVUZCWmp0QlFVTkJMRTFCUVV0RExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEUxQlFVdERMR05CUVV3c1IwRkJjMEpOTEVkQlFYUkNPMEZCUTBFc1EwRlFSRHM3UVVGVFFWZ3NWVUZCVlUwc1UwRkJWaXhEUVVGdlFrMHNUMEZCY0VJc1IwRkJPRUlzV1VGQlZUdEJRVU4yUTFvc1YwRkJWVkVzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEdWQlFWb3NSVUZCTmtJc1NVRkJOMElzUTBGQmVFSTdRVUZEUVN4dFFrRkJVVWNzUjBGQlVpeERRVUZaTEVsQlFWbzdRVUZEUVN4RFFVaEVPenRCUVUxQllpeFZRVUZWWXl4SlFVRldMRWRCUVdsQ0xFTkJRV3BDTzBGQlEwRmtMRlZCUVZWbExFMUJRVllzUjBGQmJVSXNRMEZCYmtJN1FVRkRRV1lzVlVGQlZXZENMRWRCUVZZc1IwRkJaMElzUTBGQmFFSTdPMEZCUlVGb1FpeFZRVUZWYVVJc1owSkJRVllzUjBGQk5rSXNSMEZCTjBJN1FVRkRRV3BDTEZWQlFWVnJRaXhMUVVGV0xFZEJRV3RDTEV0QlFXeENPMEZCUTBGc1FpeFZRVUZWVVN4VlFVRldMRWRCUVhWQ0xFdEJRWFpDTEVNN096czdPenM3T3pzN096czdRVU16UTBFN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkJRVHM3T3pzN096czdRVUZEUVN4SlFVRkpWeXd3UWtGQk1FSXNRMEZCT1VJc1F5eERRVUZuUXpzN1FVRkZhRU03UVVGRFFTeEpRVUZKUXl4clFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1EwRkJkRUk3UVVGRFFTeEpRVUZKUXl4alFVRmpMRWxCUVd4Q096dEJRVVZCTEVsQlFVbERMRmxCUVZrc1EwRkJhRUk3UVVGRFFTeEpRVUZKUXl4alFVRmpMRXRCUVd4Q096dEJRVVZCTEZOQlFWTkRMRTFCUVZRc1IwRkJhVUk3UVVGRGFFSkdPMEZCUTBFc1MwRkJSeXh2UWtGQlZVb3NTMEZCWWl4RlFVRnRRanRCUVVOc1FsUXNWVUZCVVVNc1IwRkJVaXhEUVVGWkxHTkJRVm9zUlVGQk5FSlpMRk5CUVRWQ08wRkJRMEU3UVVGRFJDeExRVUZIUVN4WlFVRlpMRzlDUVVGVlRDeG5Ra0ZCZWtJc1JVRkJNRU03UVVGRGVrTlJPMEZCUTBGRE8wRkJRMEVzVFVGQlIwTXNlVUpCUVVnc1JVRkJOa0k3UVVGRE5VSkRPMEZCUTBFc1ZVRkJUeXhMUVVGUU8wRkJRMEU3UVVGRFJDeEZRVkJFTEUxQlQwODdRVUZEVG01Q0xGVkJRVkZ2UWl4SlFVRlNMRU5CUVdFc2EwUkJRV0lzUlVGQmFVVXNiMEpCUVZWYUxHZENRVUV6UlR0QlFVTkJMRTFCUVVjc2IwSkJRVlZETEV0QlFXSXNSVUZCYlVJN1FVRkRiRUpVTEZkQlFWRkRMRWRCUVZJc1EwRkJXU3hYUVVGYUxFVkJRWGxDVlN4blFrRkJaMElzUTBGQmFFSXNRMEZCZWtJc1JVRkJORU5CTEdkQ1FVRm5RaXhEUVVGb1FpeERRVUUxUXl4RlFVRXJSRUVzWjBKQlFXZENMRU5CUVdoQ0xFTkJRUzlFTEVWQlFXdEdReXhYUVVGc1JqdEJRVU5CTzBGQlEwUlRPMEZCUTBFc1UwRkJUeXhMUVVGUU8wRkJRMEU3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZGUVRzN1FVRkhSQ3hUUVVGVFJpeEpRVUZVTEVkQlFXVTdRVUZEWkU0c1lVRkJXU3hEUVVGYU8wRkJRMEZETEdWQlFXTXNTMEZCWkR0QlFVTkJVU3hoUVVGWlNDeEpRVUZhTzBGQlEwRTdPMEZCUlVRc1UwRkJVMFVzUzBGQlZDeEhRVUZuUWp0QlFVTm1SanRCUVVOQlVpeHRRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCYkVJN1FVRkRRVU1zWlVGQll5eEpRVUZrTzBGQlEwRTdPMEZCUjBRc1UwRkJVMHNzT0VKQlFWUXNSMEZCZVVNN1FVRkRlRU1zUzBGQlRVMHNaVUZCWlZnc1kwRkJaVUVzV1VGQldWa3NUVUZCTTBJc1IwRkJiME1zUTBGQmVrUTdRVUZEUVN4TFFVRkhXaXhsUVVGbFZ5eGxRVUZsTEVOQlFXcERMRVZCUVc5RE8wRkJRMjVETEU5QlFVa3NTVUZCU1VVc1VVRkJVU3hEUVVGb1FpeEZRVUZ2UWtFc1VVRkJVVVlzV1VGQk5VSXNSVUZCTUVORkxFOUJRVEZETEVWQlFXdEVPMEZCUTJwRUxFOUJRVWxETEZsQlFWbGtMRmxCUVZsaExFdEJRVm9zUTBGQmFFSTdRVUZFYVVRc1QwRkZla001UWl4UlFVWjVReXhIUVVVMVFpdENMRk5CUmpSQ0xFTkJSWHBETDBJc1VVRkdlVU03TzBGQlIycEVMRTlCUVVjc1EwRkJRMmRDTEdkQ1FVRm5RbWhDTEZGQlFXaENMRU5CUVVvc1JVRkJPRUk3UVVGRE4wSm5RaXh2UWtGQlowSm9RaXhSUVVGb1FpeEpRVUUwUWl4RlFVRTFRanRCUVVOQk8wRkJRMFFzVDBGQlRXZERMR05CUVdOb1FpeG5Ra0ZCWjBKb1FpeFJRVUZvUWl4RFFVRndRanRCUVVOQlowTXNaVUZCV1VNc1NVRkJXaXhEUVVGcFFrWXNVMEZCYWtJN1FVRkRRVHRCUVVORU8wRkJRMFJrTEdWQlFXTXNTVUZCWkR0QlFVTkJPenRCUVVWRUxGTkJRVk5KTEhOQ1FVRlVMRWRCUVdsRE8wRkJRMmhEUml4bFFVRmpMRWxCUVdRN1FVRkRRU3hOUVVGSkxFbEJRVWxYTEZGQlFWRXNRMEZCYUVJc1JVRkJiMEpCTEZGQlFWRmtMR2RDUVVGblFtRXNUVUZCTlVNc1JVRkJiMFJETEU5QlFYQkVMRVZCUVRSRU8wRkJRek5FTEUxQlFVbEZMR05CUVdOb1FpeG5Ra0ZCWjBKakxFdEJRV2hDTEVOQlFXeENPMEZCUTBFc1RVRkJSMFVzWlVGQlpVRXNXVUZCV1Vnc1RVRkJXaXhIUVVGeFFpeERRVUYyUXl4RlFVRXdRenRCUVVONlEwc3NjMEpCUVcxQ1JpeFhRVUZ1UWp0QlFVTkJPMEZCUTBGb1FpeHRRa0ZCWjBKakxFdEJRV2hDTEVsQlFYbENMRWxCUVhwQ08wRkJRMEU3UVVGRFJEdEJRVU5FV0N4bFFVRmpMRXRCUVdRN1FVRkRRVHM3UVVGRlJDeFRRVUZUWlN4clFrRkJWQ3hEUVVFMFFrWXNWMEZCTlVJc1JVRkJkME03UVVGRGRrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGSkxFbEJRVWxITEVsQlFVa3NRMEZCV2l4RlFVRmxRU3hKUVVGSlNDeFpRVUZaU0N4TlFVRXZRaXhGUVVGMVEwMHNSMEZCZGtNc1JVRkJNa003UVVGRE1VTXNUVUZCVFVvc1dVRkJXVU1zV1VGQldVY3NRMEZCV2l4RFFVRnNRanRCUVVOQkxITkNRVUZWTDBJc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxIZERRVUZhTEVWQlFYVkVOa0lzUTBGQmRrUXNSVUZCTUVSS0xGTkJRVEZFTEVOQlFYaENPMEZCUTBGQkxGbEJRVlZxUXl4UlFVRldMRU5CUVcxQ2MwTXNTVUZCYmtJc1EwRkJkMEpNTEZWQlFWVnNReXhQUVVGV0xFbEJRWEZDYTBNc1ZVRkJWV3BETEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQk4wTTdPMEZCUlVFc1RVRkJTV2xETEZWQlFWVm9ReXhSUVVGa0xFVkJRWGRDTzBGQlEzWkNaME1zWVVGQlZXaERMRkZCUVZZc1EwRkJiVUp4UXl4SlFVRnVRaXhEUVVGM1Frd3NWVUZCVldoRExGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJlRUk3UVVGRFFUdEJRVU5FWjBNc1dVRkJWVGxDTEdOQlFWWTdRVUZEUVN4TlFVRkhMRzlDUVVGVllTeExRVUZXTEVsQlFXMUNhVUlzVlVGQlZUbENMR05CUVZZc1IwRkJNa0lzUTBGQmFrUXNSVUZCYlVRN1FVRkRiRVJKTEZkQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQldpeEZRVUY1UTNsQ0xGTkJRWHBETzBGQlEwRTdRVUZEUkR0QlFVTkVPenRCUVVWRUxGTkJRVk5TTEhWQ1FVRlVMRWRCUVd0RE8wRkJRMnBETEUxQlFVa3NTVUZCU1U4c1VVRkJVU3hEUVVGb1FpeEZRVUZ2UWtFc1VVRkJVV1FzWjBKQlFXZENZU3hOUVVFMVF5eEZRVUZ2UkVNc1QwRkJjRVFzUlVGQk5FUTdRVUZETTBRc1RVRkJTVVVzWTBGQlkyaENMR2RDUVVGblFtTXNTMEZCYUVJc1EwRkJiRUk3UVVGRFFTeE5RVUZIUlN4bFFVRmxRU3haUVVGWlNDeE5RVUZhTEVkQlFYRkNMRU5CUVhaRExFVkJRVEJETzBGQlEzcERMRlZCUVU4c1MwRkJVRHRCUVVOQk8wRkJRMFE3UVVGRFJDeFJRVUZQTEVsQlFWQTdRVUZEUVRzN1FVRkZSQ3hUUVVGVFVTdzJRa0ZCVkN4SFFVRjNRenRCUVVOMlF5eExRVUZOUXl4cFFrRkJhVUpzUWl4UlFVRjJRanRCUVVOQkxFdEJRVWRyUWl4alFVRklMRVZCUVd0Q08wRkJRMnBDZGtJc05FSkJRVEJDZDBJc1QwRkJUME1zY1VKQlFWQXNRMEZCTmtKSUxEWkNRVUUzUWl4RFFVRXhRanRCUVVOQk8wRkJRMFE3TzBsQlJVdEpMRmNzUjBGRFRDeDFRa0ZCWVR0QlFVRkJPMEZCUTFvc1F6czdRVUZIUmtFc1dVRkJXWFpETEZOQlFWb3NRMEZCYzBKUExFZEJRWFJDTEVkQlFUUkNMRlZCUVZWelFpeFRRVUZXTEVWQlFYRkNPMEZCUTJoRUxIRkNRVUZWTTBJc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxIRkNRVUZhTEVWQlFXOURlVUlzVTBGQmNFTXNRMEZCZUVJN1FVRkRRU3hMUVVGSFVpeDVRa0ZCU0N4RlFVRTJRanRCUVVNMVFpeFBRVUZMYlVJc1MwRkJURHRCUVVOQk8wRkJRMFFzUzBGQlIzWkNMRmRCUVVnc1JVRkJaVHRCUVVOa0xITkNRVUZWWml4VlFVRldMRWxCUVhkQ1F5eFJRVUZSUXl4SFFVRlNMRU5CUVZrc01rSkJRVm9zUTBGQmVFSTdRVUZEUVN4TlFVRkhMRU5CUVVOWExGZEJRVW9zUlVGQlowSTdRVUZEWmtFc2FVSkJRV01zUlVGQlpEdEJRVU5CTzBGQlEwUkJMR05CUVZsblFpeEpRVUZhTEVOQlFXbENSaXhUUVVGcVFqdEJRVU5CTEVWQlRrUXNUVUZOVHp0QlFVRkJMRTFCUTBVdlFpeFJRVVJHTEVkQlEyVXJRaXhUUVVSbUxFTkJRMFV2UWl4UlFVUkdPenRCUVVWT0xFMUJRVWNzUTBGQlEyZENMR2RDUVVGblFtaENMRkZCUVdoQ0xFTkJRVW9zUlVGQk9FSTdRVUZETjBJc2RVSkJRVlZKTEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJlVUpPTEZGQlFYcENMRWRCUVd0RExHTkJRVGxETEVOQlFYaENPMEZCUTBGblFpeHRRa0ZCWjBKb1FpeFJRVUZvUWl4SlFVRTBRaXhGUVVFMVFqdEJRVU5CTzBGQlEwUXNjMEpCUVZWSkxGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCZVVKT0xGRkJRWHBDTEVkQlFXdERMRk5CUVRsRExFTkJRWGhDTzBGQlEwRXNUVUZCVFdkRExHTkJRV05vUWl4blFrRkJaMEpvUWl4UlFVRm9RaXhEUVVGd1FqdEJRVU5CWjBNc1kwRkJXVU1zU1VGQldpeERRVUZwUWtZc1UwRkJha0k3UVVGRFFUdEJRVVZFTEVOQmRFSkVPenRCUVhsQ1FUdEJRVU5CVlN4WlFVRlpka01zVTBGQldpeERRVUZ6UW5kRExFdEJRWFJDTEVkQlFUaENMRmxCUVZrN1FVRkRla01zUzBGQlIwZ3NUVUZCU0N4RlFVRlZPMEZCUTFRN1FVRkRRWGhDTERSQ1FVRXdRbmRDTEU5QlFVOURMSEZDUVVGUUxFTkJRVFpDU0N3MlFrRkJOMElzUTBGQk1VSTdRVUZEUVN4elFrRkJWV3BETEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N4MVFrRkJXaXhGUVVGeFExTXNkVUpCUVhKRExFTkJRWGhDTzBGQlEwRTdRVUZEUkN4RFFVNUVPenRCUVZOQk1FSXNXVUZCV1haRExGTkJRVm9zUTBGQmMwSnpRaXhKUVVGMFFpeEhRVUUyUWl4WlFVRlpPMEZCUTNoRExFdEJRVWRsTEUxQlFVZ3NSVUZCVlR0QlFVTlVMSE5DUVVGVmJrTXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSE5DUVVGYUxFVkJRVzlEVXl4MVFrRkJjRU1zUTBGQmVFSTdRVUZEUVhkQ0xGTkJRVTlKTEc5Q1FVRlFMRU5CUVRSQ05VSXNkVUpCUVRWQ08wRkJRMEU3UVVGRFJDeERRVXhFT3p0QlFVOUJMRWxCUVUxWkxHTkJRV01zU1VGQlNXTXNWMEZCU2l4RlFVRndRanM3UVVGRlFUdHJRa0ZEWldRc1Z5SXNJbVpwYkdVaU9pSnNhV0l2ZEdsamEyVnlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1hDSjBhV05yWlhKY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWRHbGphMlZ5WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW5ScFkydGxjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F4S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EzT1RFNE1EZG1ORGszTkRabE9EWmhaalE0TXlJc0ltbHRjRzl5ZENCdFlXNWhaMlZ5SUdaeWIyMGdKeTR2VFdGdVlXZGxjaWM3WEc1Y2JpOHZJSFJ2Ukc4NklITjFjSEJ2Y25RZ1ltOTBhQ0JqWVd4c1ltRmpheUJoYm1RZ2NISnZiV2x6WlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWR2xqYTBWdWRISjVYRzU3WEc1Y2RDOHFLbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyOWlhbVZqZEgwZ1kyOXVkR1Y0ZENBdElGUm9aU0JjSW5Sb2FYTmNJaUJoY21kMWJXVnVkQ0JtYjNJZ2RHaGxJR3hwYzNSbGJtVnlJR1oxYm1OMGFXOXVMbHh1WEhRZ0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dWZTQnNhWE4wWlc1bGNpNWNibHgwSUNvdlhHNWNkR052Ym5OMGNuVmpkRzl5S0dOdmJuUmxlSFFzSUd4cGMzUmxibVZ5TENCallXeHNZbUZqYXlBOUlHNTFiR3dzSUhCeWFXOXlhWFI1SUQwZ01DbGNibHgwZTF4dVhIUmNkSFJvYVhNdVkyOXVkR1Y0ZENBOUlHTnZiblJsZUhRN1hHNWNkRngwZEdocGN5NXNhWE4wWlc1bGNpQTlJR3hwYzNSbGJtVnlPMXh1WEhSY2RIUm9hWE11WTJGc2JHSmhZMnNnUFNCallXeHNZbUZqYXp0Y2JseDBYSFIwYUdsekxuQnlhVzl5YVhSNUlEMGdjSEpwYjNKcGRIazdYRzVjZEZ4MGRHaHBjeTVsZUdWamRYUnBiMjVEYjNWdWRDQTlJREE3WEc1Y2RIMWNibHh1ZlZ4dVhHNHZLaTB0TFMwZ1VIVmliR2xqZkZCeWIzUnZkSGx3WlNCTlpYUm9iMlJ6SUMwdExTb3ZYRzVjYmxScFkydEZiblJ5ZVM1d2NtOTBiM1I1Y0dVdVpHbHpjRzl6WlNBOUlHWjFibU4wYVc5dUtDbDdYRzVjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMFZ1ZEhKNUlHUnBjM0J2YzJVNlhDSXNJSFJvYVhNcE8xeHVYSFIwYUdsekxtTnZiblJsZUhRZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG14cGMzUmxibVZ5SUQwZ2JuVnNiRHRjYmx4MGRHaHBjeTVqWVd4c1ltRmpheUE5SUc1MWJHdzdYRzVjZEhSb2FYTXVjSEpwYjNKcGRIa2dQU0J1ZFd4c08xeHVYSFIwYUdsekxtVjRaV04xZEdsdmJrTnZkVzUwSUQwZ1RtRk9PMXh1ZlR0Y2JseHVWR2xqYTBWdWRISjVMbkJ5YjNSdmRIbHdaUzVsZUdWamRYUmxJRDBnWm5WdVkzUnBiMjRvS1h0Y2JseDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0p0WVc1aFoyVnlMbUZrWkRvZ1hDSXNJSFJvYVhNcE8xeHVYSFJ0WVc1aFoyVnlMbUZrWkNoMGFHbHpLVHRjYm4wN1hHNWNibHh1VkdsamEwVnVkSEo1TGtoSlIwZ2dQU0F3TzF4dVZHbGphMFZ1ZEhKNUxrNVBVazFCVENBOUlERTdYRzVVYVdOclJXNTBjbmt1VEU5WElEMGdNanRjYmx4dVZHbGphMFZ1ZEhKNUxtRnNiRzkzWldSVWFXTnJRMjkxYm5RZ1BTQXhNREE3WEc1VWFXTnJSVzUwY25rdVpHVmlkV2NnUFNCbVlXeHpaVHRjYmxScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklEMGdabUZzYzJVN1hHNWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5c2FXSXZWR2xqYTBWdWRISjVMbXB6SWl3aWFXMXdiM0owSUZScFkydGxjaUJtY205dElDY3VMMVJwWTJ0RmJuUnllU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZScFkydGxjanRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5cGJtUmxlQzVxY3lJc0ltbHRjRzl5ZENCVWFXTnJSVzUwY25rZ1puSnZiU0FuTGk5VWFXTnJSVzUwY25rbk8xeHViR1YwSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnTURzdkx5Qm1iM0lnVjJsdVpHOTNjeUJGYm5aY2JseHVMeTliTUMxSVNVZElMQ0F4TFU1UFVrMUJUQ3dnTWkxTVQxZGRYRzVzWlhRZ2NISnBiM0pwZEhsRmJuUnlhV1Z6SUQwZ1cyNTFiR3dzSUc1MWJHd3NJRzUxYkd4ZE8xeHViR1YwSUhkaGFYUkZiblJ5YVdWeklEMGdiblZzYkR0Y2JseHViR1YwSUhScFkydERiM1Z1ZENBOUlEQTdYRzVzWlhRZ2FYTkZlR1ZqZFhScGJtY2dQU0JtWVd4elpUdGNibHh1Wm5WdVkzUnBiMjRnYjI1VWFXTnJLQ2w3WEc1Y2RIUnBZMnREYjNWdWRDc3JPMXh1WEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjcGUxeHVYSFJjZEdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYXlCamIzVnVkRG9nWENJc0lIUnBZMnREYjNWdWRDazdYRzVjZEgxY2JseDBhV1lvZEdsamEwTnZkVzUwSUR3Z1ZHbGphMFZ1ZEhKNUxtRnNiRzkzWldSVWFXTnJRMjkxYm5RcGUxeHVYSFJjZEdWNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTW9LVHRjYmx4MFhIUnRiM1psVjJGcGRHbHVaMFZ1ZEhKcFpYTkdiM0pGZUdWamRYUnBiMjRvS1R0Y2JseDBYSFJwWmloaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU2dwS1h0Y2JseDBYSFJjZEhOMGIzQW9LVHRjYmx4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwWTI5dWMyOXNaUzUzWVhKdUtGd2lRVzVwYldGMGFXOXVJR1p5WVcxbElHeHZiM0FnWlhobFkzVjBaV1FnZEc4Z2FYUnpJSE5sZENCc2FXMXBkRG9nWENJc0lGUnBZMnRGYm5SeWVTNWhiR3h2ZDJWa1ZHbGphME52ZFc1MEtUdGNibHgwWEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjcGUxeHVYSFJjZEZ4MFkyOXVjMjlzWlM1c2IyY29YQ0pGYm5SeWFXVnpPaUJjSWl3Z2NISnBiM0pwZEhsRmJuUnlhV1Z6V3pCZExIQnlhVzl5YVhSNVJXNTBjbWxsYzFzeFhTeHdjbWx2Y21sMGVVVnVkSEpwWlhOYk1sMHNkMkZwZEVWdWRISnBaWE1wTzF4dVhIUmNkSDFjYmx4MFhIUnlaWE5sZENncE8xeHVYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwZlZ4dVhIUnlaWFIxY200Z2RISjFaVHRjYmx4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUhOMGIzQW9LWHRjYmx4MGRHbGphME52ZFc1MElEMGdNRHRjYmx4MGFYTkZlR1ZqZFhScGJtY2dQU0JtWVd4elpUdGNibHgwZEdsamEwMWhibUZuWlhJdWMzUnZjQ2dwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhObGRDZ3BlMXh1WEhSemRHOXdLQ2s3WEc1Y2RIQnlhVzl5YVhSNVJXNTBjbWxsY3lBOUlGdHVkV3hzTENCdWRXeHNMQ0J1ZFd4c1hUdGNibHgwZDJGcGRFVnVkSEpwWlhNZ1BTQnVkV3hzTzF4dWZWeHVYRzVjYm1aMWJtTjBhVzl1SUcxdmRtVlhZV2wwYVc1blJXNTBjbWxsYzBadmNrVjRaV04xZEdsdmJpZ3BlMXh1WEhSamIyNXpkQ0JsYm5SeWFXVnpRMjkxYm5RZ1BTQjNZV2wwUlc1MGNtbGxjeUEvSUNCM1lXbDBSVzUwY21sbGN5NXNaVzVuZEdnZ09pQXdPMXh1WEhScFppaDNZV2wwUlc1MGNtbGxjeUFtSmlCbGJuUnlhV1Z6UTI5MWJuUWdQaUF3S1NCN1hHNWNkRngwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUdWdWRISnBaWE5EYjNWdWREc2dhVzVrWlhnckt5bDdYRzVjZEZ4MFhIUnNaWFFnZEdsamEwVnVkSEo1SUQwZ2QyRnBkRVZ1ZEhKcFpYTmJhVzVrWlhoZE8xeHVYSFJjZEZ4MFkyOXVjM1FnZXlCd2NtbHZjbWwwZVNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhSY2RGeDBhV1lvSVhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjBwZTF4dVhIUmNkRngwWEhSd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkSUQwZ1cxMDdYRzVjZEZ4MFhIUjlYRzVjZEZ4MFhIUmpiMjV6ZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMDdYRzVjZEZ4MFhIUjBhV05yUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RIZGhhWFJGYm5SeWFXVnpJRDBnYm5Wc2JEdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1pYaGxZM1YwWlZCeWFXOXlhWFI1Ulc1MGNtbGxjeWdwZTF4dVhIUnBjMFY0WldOMWRHbHVaeUE5SUhSeWRXVTdYRzVjZEdadmNpaHNaWFFnYVc1a1pYZ2dQU0F3SURzZ2FXNWtaWGdnUENCd2NtbHZjbWwwZVVWdWRISnBaWE11YkdWdVozUm9PeUJwYm1SbGVDc3JLWHRjYmx4MFhIUnNaWFFnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmFXNWtaWGhkTzF4dVhIUmNkR2xtS0hScFkydEZiblJ5YVdWeklDWW1JSFJwWTJ0RmJuUnlhV1Z6TG14bGJtZDBhQ0ErSURBcElIdGNibHgwWEhSY2RHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWs3WEc1Y2RGeDBYSFF2TDBOc1pXRnlJSFJvWlcwZ2IyNWpaU0JsZUdWamRYUmxaRnh1WEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelcybHVaR1Y0WFNBOUlHNTFiR3c3WEc1Y2RGeDBmVnh1WEhSOVhHNWNkR2x6UlhobFkzVjBhVzVuSUQwZ1ptRnNjMlU3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lsN1hHNWNkQzh2SUdsdGNHOXlkR0Z1ZENCMGJ5QjFjMlVnWm05eUxXeHZiM0JjYmx4MEx5OGdkR2xqYTBWdWRISnBaWE1nWjNKdmQzTWdaSGx1WVcxcFkyRnNiSGtnWW5rZ2IyNWxJRzltSUdsMGN5QmxiblJ5ZVZ4dVhIUXZMeUJtYjNJZ1pYaGhiWEJzWlRvZ2JHVjBJSE5oZVNCM1pTQm9ZWFpsSUc5dVpTQmxiblJ5ZVN3Z1lXNWtJR1Y0WldOMWRHbHVaeUIwYUdGMElHVnVkSEo1SUcxcFoyaDBJR0ZrWkhNZ1lXNXZkR2hsY2lCbGJuUnllVnh1WEhRdkx5QjNhWFJvSUcxaGNDQm1kVzVqZEdsdmJpQjNaU0JqWVc1MElHVjRaV04xZEdVZ1pIbHVZVzFwWTJGc2JIa2daM0p2ZDJsdVp5QmxiblJ5YVdWekxseHVYSFJtYjNJb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvT3lCcEt5c3BlMXh1WEhSY2RHTnZibk4wSUhScFkydEZiblJ5ZVNBOUlIUnBZMnRGYm5SeWFXVnpXMmxkTzF4dVhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5QTZJR1p2Y2lCY0lpQXNJR2tzSUhScFkydEZiblJ5ZVNrN1hHNWNkRngwZEdsamEwVnVkSEo1TG14cGMzUmxibVZ5TG1OaGJHd29kR2xqYTBWdWRISjVMbU52Ym5SbGVIUWdmSHdnZEdsamEwVnVkSEo1TG14cGMzUmxibVZ5V3lkMGFHbHpKMTBwTzF4dVhHNWNkRngwYVdZZ0tIUnBZMnRGYm5SeWVTNWpZV3hzWW1GamF5a2dlMXh1WEhSY2RGeDBkR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOcld5ZDBhR2x6SjEwcE8xeHVYSFJjZEgxY2JseDBYSFIwYVdOclJXNTBjbmt1WlhobFkzVjBhVzl1UTI5MWJuUXJLenRjYmx4MFhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY2dKaVlnZEdsamEwVnVkSEo1TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDRnTVNsN1hHNWNkRngwWEhSamIyNXpiMnhsTG14dlp5aGNJa1Y0WldOMWRHVmtJRzF2Y21VZ2RHaGhiaUJ2Ym1ObE9pQmNJaXdnZEdsamEwVnVkSEo1S1R0Y2JseDBYSFI5WEc1Y2RIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1lYSmxVSEpwYjNKcGRIbEZiblJ5YVdWelJXMXdkSGtvS1h0Y2JseDBabTl5S0d4bGRDQnBibVJsZUNBOUlEQWdPeUJwYm1SbGVDQThJSEJ5YVc5eWFYUjVSVzUwY21sbGN5NXNaVzVuZEdnN0lHbHVaR1Y0S3lzcGUxeHVYSFJjZEd4bGRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXRwYm1SbGVGMDdYRzVjZEZ4MGFXWW9kR2xqYTBWdWRISnBaWE1nSmlZZ2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb0lENGdNQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJR1poYkhObFhHNWNkRngwZlZ4dVhIUjlYRzVjZEhKbGRIVnliaUIwY25WbE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5Z3BlMXh1WEhSamIyNXpkQ0J6YUc5MWJHUkRiMjUwYVc1MVpTQTlJRzl1VkdsamF5Z3BPMXh1WEhScFppaHphRzkxYkdSRGIyNTBhVzUxWlNsN1hHNWNkRngwY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUWdQU0IzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0hKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVTmhiR3hpWVdOcktUdGNibHgwZlZ4dWZWeHVYRzVqYkdGemN5QlVhV05yVFdGdVlXZGxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlLQ2w3WEc1Y2RIMWNibjFjYmx4dVZHbGphMDFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbUZrWkNBOUlHWjFibU4wYVc5dUlDaDBhV05yUlc1MGNua3BJSHRjYmx4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nWVdSa0lEb2dYQ0lnTENCMGFXTnJSVzUwY25rcE8xeHVYSFJwWmloaGNtVlFjbWx2Y21sMGVVVnVkSEpwWlhORmJYQjBlU2dwS1h0Y2JseDBYSFIwYUdsekxuTjBZWEowS0NsY2JseDBmVnh1WEhScFppaHBjMFY0WldOMWRHbHVaeWw3WEc1Y2RGeDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ1lXUmtJRG9nSUhkaGFYUWdYQ0lwTzF4dVhIUmNkR2xtS0NGM1lXbDBSVzUwY21sbGN5bDdYRzVjZEZ4MFhIUjNZV2wwUlc1MGNtbGxjeUE5SUZ0ZE8xeHVYSFJjZEgxY2JseDBYSFIzWVdsMFJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwWTI5dWMzUWdleUJ3Y21sdmNtbDBlU0I5SUQwZ2RHbGphMFZ1ZEhKNU8xeHVYSFJjZEdsbUtDRndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZEtYdGNibHgwWEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUdGa1pDQTZJR2x1SUZ3aUszQnlhVzl5YVhSNUsxd2lJRG9nYm1WM0lFRnljbUY1WENJcE8xeHVYSFJjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzNCeWFXOXlhWFI1WFNBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSVWFXTnJSVzUwY25rdWMzUmhZMnRFWldKMVp5QW1KaUJqYjI1emIyeGxMbXh2WnloY0lsUnBZMnROWVc1aFoyVnlPaUJoWkdRZ09pQnBiaUJjSWl0d2NtbHZjbWwwZVN0Y0lpQTZJSEIxYzJoY0lpazdYRzVjZEZ4MFkyOXVjM1FnZEdsamEwVnVkSEpwWlhNZ1BTQndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZE8xeHVYSFJjZEhScFkydEZiblJ5YVdWekxuQjFjMmdvZEdsamEwVnVkSEo1S1R0Y2JseDBmVnh1WEc1OU8xeHVYRzVjYmk4dklGUnZaRzg2SUZOMWNIQnZjblFnWm05eUlFNXZaR1ZLVXlCY2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzV6ZEdGeWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBhV1lvZDJsdVpHOTNLWHRjYmx4MFhIUXZMeUIzYVd4c0lISmxZMlZwZG1WeklIUnBiV1Z6ZEdGdGNDQmhjeUJoY21kMWJXVnVkRnh1WEhSY2RISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWs3WEc1Y2RGeDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ2MzUmhjblFnT2lCY0lpd2djbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRcE8xeHVYSFI5WEc1OU8xeHVYRzVjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkRzl3SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhScFppaDNhVzVrYjNjcGUxeHVYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJSE4wYjNBZ09pQmNJaXdnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUXBPMXh1WEhSY2RIZHBibVJ2ZHk1allXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTaHlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZKWkNrN1hHNWNkSDFjYm4wN1hHNWNibU52Ym5OMElIUnBZMnROWVc1aFoyVnlJRDBnYm1WM0lGUnBZMnROWVc1aFoyVnlLQ2s3WEc1Y2JpOHZJSE5wYm1kc1pYUnZia2x1YzNSaGJtRmpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkR2xqYTAxaGJtRm5aWEk3WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlOWVc1aFoyVnlMbXB6SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy90aWNrZXIvbGliL3RpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy90aWNrZXIvbGliL3RpY2tlci5qcyIsImltcG9ydCBFbnRyeSBmcm9tICcuL2VudHJ5JztcbmltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG51bGw7IC8vIGNvbm5lY3RvciBpcyByZXNwb25zaWJsZSBmb3Igc2VxdWVuY2luZyBmdW5jdGlvbnNcblx0ICAgIHRoaXMuZW5hYmxlQ29ubmVjdG9yID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IHJlc3BvbnNpYmxlIGZvciBpbml0aWF0aW5nIHRyaWdnZXJcbi8vIGlmIGNhbGxlZCB1c2luZyB0aGlzIGZ1bmN0aW9uIHdpbGwgbWFrZSBhIHN5bmNlZCBlZmZlY3Qgb2YgZXhlY3V0aW9uXG5GdW5jdGlvbnMucHJvdG90eXBlLmV4ZWN1dGVUcmlnZ2VyZXIgPSBmdW5jdGlvbihjb250ZXh0LCB0cmlnZ2VySW5pdGlhdGluZ2Z1bmN0aW9uLCB0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdGNvbnN0IF9leGVjdXRlVHJpZ2dlcmVyID0gKCk9Pntcblx0XHRsZXQgdGlja2VyO1xuXHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0dHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbi5jYWxsKGNvbnRleHQpO1xuXHRcdFx0aWYodHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRcdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0XHR0cmlnZ2VyZXJDYWxsYmFjayAmJiB0cmlnZ2VyZXJDYWxsYmFjaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgdHJpZ2dlcmVyQ2FsbGJhY2ssIG51bGwsIDIpO1xuXHRcdFx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCBfZXhlY3V0ZVRyaWdnZXJlciwgdHJpZ2dlcmVyQ2FsbGJhY2ssIDIpO1xuXHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHR9XG5cdH07XG5cdF9leGVjdXRlVHJpZ2dlcmVyKCk7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCwgZnVuYywgZXhlY3V0ZUxhdGVySW5OZXh0VGljayA9IGZhbHNlLCBwcmlvcml0eSA9IDAsIGxpc3RlbmVyQ2FsbGJhY2sgPSBudWxsKXtcblx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogXCIsIHRoaXMpO1xuICAgIGxldCBlbnRyeTtcbiAgICBpZiAoZXhlY3V0ZUxhdGVySW5OZXh0VGljayl7XG5cblx0ICAgICBjb25zdCB0aWNrZXJDYWxsYmFjayA9ICgpID0+IHtcblx0XHQgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgLSAxO1xuXHRcdCAgICBpZihsaXN0ZW5lckNhbGxiYWNrKXtcblx0XHRcdCAgICBsaXN0ZW5lckNhbGxiYWNrLmNhbGwobGlzdGVuZXJDYWxsYmFja1sndGhpcyddKVxuXHRcdCAgICB9XG5cdFx0ICAgIGlmKCB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHRcdCAgICB0aGlzLmxpc3RlbmVyc0RpZEV4ZWN1dGUoKTtcblx0XHQgICAgfVxuXHQgICAgfTtcbiAgICAgICAgY29uc3QgdGlja2VyID0gbmV3IFRpY2tlcihjb250ZXh0LCBmdW5jLCB0aWNrZXJDYWxsYmFjaywgcHJpb3JpdHkpO1xuXHQgICAgZW50cnkgPSBuZXcgRW50cnkodGlja2VyLCB0aWNrZXIuZXhlY3V0ZSk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBmcmFtZUVudHJpZXM6IFwiLCBlbnRyeSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbnRyaWVzLnB1c2goZW50cnkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW50cnkgPSBuZXcgRW50cnkoY29udGV4dCwgZnVuYyk7XG5cdCAgICBGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBlbnRyaWVzOiBcIiwgZW50cnkpO1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgfVxufTtcblxuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpc3RlbmVyc1dpbGxFeGVjdXRlID0gZnVuY3Rpb24oKXtcblxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5zaG91bGRMaXN0ZW5lcnNFeGVjdXRlID0gZnVuY3Rpb24oKXtcblx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBzaG91bGRMaXN0ZW5lcnNFeGVjdXRlOiBcIiwgdHJ1ZSwgdGhpcyk7XG5cdHJldHVybiB0cnVlO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saXN0ZW5lcnNEaWRFeGVjdXRlID0gZnVuY3Rpb24oKXtcblx0dGhpcy5lbmFibGVDb25uZWN0b3IgJiYgdGhpcy5jb25uZWN0b3IgJiYgdGhpcy5jb25uZWN0b3IoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LGZ1bmMsIGNhbGxiYWNrID0gbnVsbCl7XG5cdGxldCBlbnRyeSwgaTtcblx0Y29uc3Qge2ZyYW1lRW50cmllcywgZW50cmllc30gPSB0aGlzO1xuXG5cdGZvcihpID0gMDsgaSA8IGZyYW1lRW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdCAgICBjb25zdCBmcmFtZUVudHJ5ID0gIGZyYW1lRW50cmllc1tpXTtcblx0XHRlbnRyeSA9IGZyYW1lRW50cnkuY29udGV4dDtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRmcmFtZUVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdH0gZWxzZSB7IC8vIGZyYW1lIHRyaWdnZXIgTGlzdGVuZXJzIGFyZSBzdGlsbCBydW5uaW5nXG5cdFx0XHRcdGxldCB0aWNrZXJFbnRyeTtcblx0XHRcdFx0Y29uc3QgZGlzcG9zZURvbmVOb3RpZmllciA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdFx0XHR9IGVsc2V7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0dGlja2VyRW50cnkuZXhlY3V0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdGZvcihpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHRcdGVudHJ5ID0gZW50cmllc1tpXTtcblx0XHRpZihlbnRyeS5jb250ZXh0ID09PSBjb250ZXh0ICYmIGVudHJ5Lmxpc3RlbmVyID09PSBmdW5jKXtcblx0XHRcdGVudHJ5LmRpc3Bvc2UoKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNldENvbm5lY3RvciA9IGZ1bmN0aW9uKGNvbm5lY3Rvcil7XG5cdHRoaXMuY29ubmVjdG9yID0gY29ubmVjdG9yO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUNvbm5lY3RvciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuY29ubmVjdG9yID0gbnVsbDtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saW5rQ29ubmVjdG9yID0gZnVuY3Rpb24oKXtcblx0dGhpcy5lbmFibGVDb25uZWN0b3IgPSB0cnVlO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnVuTGlua0Nvbm5lY3RvciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZW5hYmxlQ29ubmVjdG9yID0gZmFsc2U7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG5cdGNvbnN0IHNob3VsZFRyaWdnZXIgPSB0aGlzLnNob3VsZExpc3RlbmVyc0V4ZWN1dGUoKTtcblx0aWYoc2hvdWxkVHJpZ2dlcil7XG5cdFx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBsaXN0ZW5lcnNXaWxsRXhlY3V0ZTogXCIsIHRoaXMpO1xuXHRcdHRoaXMubGlzdGVuZXJzV2lsbEV4ZWN1dGUoKTtcblx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyBcIiwgdGhpcyk7XG5cdFx0Y29uc3QgZW50cmllc0luZGV4VG9EaXNwb3NlID0gW107XG5cdFx0dGhpcy5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0dGhpcy5lbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdH0sIHRoaXMpO1xuXG5cblx0XHRpZih0aGlzLmZyYW1lRW50cmllcy5sZW5ndGggPiAwKXtcblx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oZW50cnksIGluZGV4KXtcblx0XHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdFx0dGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgKyAxO1xuXHRcdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLnB1c2goaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5SW5kZXgpe1xuXHRcdFx0XHR0aGlzLmZyYW1lRW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHRcdH0sIHRoaXMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzRGlkRXhlY3V0ZTogXCIsIHRoaXMpO1xuXHRcdFx0dGhpcy5saXN0ZW5lcnNEaWRFeGVjdXRlKCk7XG5cdFx0fVxuXHR9XG5cbn07XG5cbkZ1bmN0aW9ucy5zdGFja0RlYnVnID0gZmFsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2Z1bmN0aW9ucy5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9mdW5jdGlvbnMuanMiLCJpbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmdW5jKXtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmM7XG4gICAgfVxufVxuXG4vLyBNZXRob2QgYXZhaWxhYmxlIG9ubHkgb24gRW50cnkgaW5zdGFuY2Ugbm90IGluIENsYXNzXG5FbnRyeS5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpe1xuICAgIGlmKHRoaXMuY29udGV4dCBpbnN0YW5jZW9mIFRpY2tlcil7XG4gICAgICAgIHRoaXMuY29udGV4dC5kaXNwb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lciA9IG51bGw7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2VudHJ5LmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2VudHJ5LmpzIiwiaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IHthcnJheVRvT2JqZWN0LCBjb21iaW5lQXJyYXl9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlQ29sbGVjdGlvbiBleHRlbmRzIFN0b3Jle1xuXHRjb25zdHJ1Y3RvcihzdGF0ZSxkaXNwbGF5TmFtZSwgb2JqZWN0TmFtZSl7XG5cdFx0c3VwZXIobnVsbCwgZGlzcGxheU5hbWUsIG9iamVjdE5hbWUpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSB7fTtcblx0XHR0aGlzLl92YWx1ZSA9IHN0YXRlID8gKHN0YXRlLnZhbHVlID09PSB1bmRlZmluZWQgPyB7fSA6IHN0YXRlLnZhbHVlKSA6IHt9O1xuXHRcdHRoaXMudHJpZ2dlcldhaXRDb3VudCA9IDA7XG5cdH1cblxuXHRzaG91bGRMaXN0ZW5lcnNFeGVjdXRlKCl7XG5cdFx0aWYodGhpcy50cmlnZ2VyV2FpdENvdW50ID09PSAwIHx8IHRoaXMudHJpZ2dlcldhaXRDb3VudCA9PT0gMSl7XG5cdFx0XHR0aGlzLnRyaWdnZXJXYWl0Q291bnQgPT09IDEgJiYgdGhpcy50cmlnZ2VyV2FpdENvdW50LS07XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50cmlnZ2VyV2FpdENvdW50ID0gdGhpcy50cmlnZ2VyV2FpdENvdW50IC0gMTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0fVxuXG59XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gdGhpcy5nZXRDaGlsZHJlbih0cnVlKTtcbn07XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihuZXdWYWx1ZSwgY2FsbGJhY2spe1xuXHR0aGlzLnRyaWdnZXJXYWl0Q291bnQgPSB0aGlzLmNhbGN1bGF0ZURpZmYobmV3VmFsdWUsIHRydWUpO1xuXHRpZih0aGlzLnRyaWdnZXJXYWl0Q291bnQgPiAwKXtcblx0XHRjb25zdCBfc2V0U3RhdGUgPSAoKT0+e1xuXHRcdFx0bGV0IGNoaWxkVmFsdWVzID0ge307XG5cdFx0XHRjb25zdCBjdXJyZW50Q2hpbGRJZHMgPSB0aGlzLmdldENoaWxkSWRzKHRydWUpO1xuXHRcdFx0aWYobmV3VmFsdWUpe1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2hpbGRTdGF0ZSA9IG5ld1ZhbHVlW2ldO1xuXHRcdFx0XHRcdGlmKG5ld0NoaWxkU3RhdGUpe1xuXHRcdFx0XHRcdFx0bGV0IGNoaWxkSWQ7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgbmV3Q2hpbGRTdGF0ZSA9PT0gJ3N0cmluZycpeyAvLyBubyBjaGFuZ2Vcblx0XHRcdFx0XHRcdFx0Y2hpbGRJZCA9IG5ld0NoaWxkU3RhdGU7IC8vIGlkIG9mIFVuY2hhbmdlZENoaWxkXG5cdFx0XHRcdFx0XHRcdGNoaWxkVmFsdWVzW2NoaWxkSWRdID0gdGhpcy5fdmFsdWVbY2hpbGRJZF07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdHtpZCwgY2xhc3NEZWZOYW1lLCB2YWx1ZSwgZGlzcGxheU5hbWV9ID0gbmV3Q2hpbGRTdGF0ZTtcblx0XHRcdFx0XHRcdFx0aWYoY2xhc3NEZWZOYW1lID09PSB1bmRlZmluZWQpIHsgLy8gZGVsZXRlIE9wZXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKGlkKTtcblx0XHRcdFx0XHRcdFx0fSAgZWxzZSB7IC8vIHVwZGF0ZSBPcGVyYXRpb24gb3IgQWRkaXRpb25cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlcXVlc3RTdG9yZShpZCwgdmFsdWUsIGNsYXNzRGVmTmFtZSwgZGlzcGxheU5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkVmFsdWVzW2lkXSA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGlkU3RpbGxFeGlzdCA9IChjdXJyZW50Q2hpbGRJZHMgJiYgY3VycmVudENoaWxkSWRzLmluZGV4T2YoY2hpbGRJZCkgPiAtMSlcblx0XHRcdFx0XHRcdGlmKGlkU3RpbGxFeGlzdCl7IC8vIHJlbW92ZSB0aGVtXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRDaGlsZElkcy5zcGxpY2UoY2hpbGRJZCwxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHRvZG86IHdpbGwgdGhpcyBsaW5lIG9mIENvZGVzIGV2ZXIgcmVhY2ggYXMgd2UgaGFuZGxlIHJlbW92ZSBhYm92ZVxuXHRcdFx0LyppZihjdXJyZW50Q2hpbGRJZHMpe1xuXHRcdFx0XHQvLyByZW1vdmUgYWxsIG9sZCBJZHNcblx0XHRcdFx0Y3VycmVudENoaWxkSWRzLm1hcCgob2xkSWQpPT57XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmUob2xkSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0qL1xuXHRcdFx0dGhpcy5fdmFsdWUgPSBjaGlsZFZhbHVlcztcblx0XHR9O1xuXHRcdC8vc2V0IHN0YXRlIGZ1bmN0aW9uIGlzIHRoZSBvbmUgd2hpY2ggdHJpZ2dlcnMgYWxsIHRoZSBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gaXRcblx0XHQvLyBpZiBsaXN0ZW5lcnMgZXhlY3V0aW9uIGFyZSBnb2luZyBvbiwgdGhpcyB3aWxsIGV4ZWN1dGUgb25jZSB0aGV5IGFyZSBkb25lXG5cdFx0Ly8gZWxzZSBzZXQgc3RhdGUgaXMgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHR0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIodGhpcyxfc2V0U3RhdGUsICgpPT57XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIE51bWJlcih0aGlzLnRyaWdnZXJXYWl0Q291bnQgPiAwKTtcbn07XG5cblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRDaGlsZElkcyA9IGZ1bmN0aW9uKGFzQ29weSl7XG5cdGNvbnN0IGlkcyA9ICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0cmV0dXJuIGFzQ29weSA/IGlkcy5zbGljZSgpIDogaWRzO1xufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGFzSnNvbil7XG5cdGNvbnN0IGNoaWxkcmVuID0gW107XG5cdGNvbnN0IGNoaWxkS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY2hpbGRyZW4pO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRLZXlzLmxlbmd0aDsgaSsrKXtcblx0XHRjb25zdCBjaGlsZEtleSA9IGNoaWxkS2V5c1tpXTtcblx0XHRjb25zdCBzdG9yZU9iamVjdCA9IHRoaXMuY2hpbGRyZW5bY2hpbGRLZXldO1xuXHRcdGNoaWxkcmVuLnB1c2goYXNKc29uP3N0b3JlT2JqZWN0LmFzSnNvbigpOnN0b3JlT2JqZWN0KTtcblx0fVxuXHRyZXR1cm4gY2hpbGRyZW47XG59O1xuXG5cbi8vdG8tZG8gdGhpbmsgb2YgdWkgcG9pbnQgb2YgdmlldyBhbmQgdGhlIGNoYW5nZSB0aGUgd2F5IHRoZXkgYXJlIGluc3RhbnRpYXRlZCBoZXJlXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RTdG9yZSA9IGZ1bmN0aW9uKGlkLCBzdGF0ZSwgY2xhc3NEZWZOYW1lLCBkaXNwbGF5TmFtZSwgbmV3U3RvcmVDYWxsYmFjayl7XG5cdGxldCBzdG9yZU9iamVjdCA9IHRoaXMuY2hpbGRyZW5baWRdO1xuXHRpZihzdG9yZU9iamVjdCl7XG5cdFx0cmV0dXJuIHN0b3JlT2JqZWN0LnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdGxldCByZXR1cm5WYWx1ZTtcblx0Y29uc3QgX3JlcXVlc3RTdG9yZSA9ICgpPT57XG5cdFx0aWYoY2xhc3NEZWZOYW1lID09PSAnU3RvcmUnKXtcblx0XHRcdHN0b3JlT2JqZWN0ID0gbmV3IFN0b3JlKHN0YXRlLCBkaXNwbGF5TmFtZSwgaWQpO1xuXHRcdH0gZWxzZSBpZihjbGFzc0RlZk5hbWUgPT09ICdTdG9yZUNvbGxlY3Rpb24nKSB7XG5cdFx0XHRzdG9yZU9iamVjdCA9IG5ldyBTdG9yZUNvbGxlY3Rpb24oc3RhdGUsIGRpc3BsYXlOYW1lLCBpZCk7XG5cdFx0fVxuXG5cdFx0c3RvcmVPYmplY3Quc2V0Q29ubmVjdG9yKHRoaXMudHJpZ2dlckxpc3RlbmVycy5iaW5kKHRoaXMpKTtcblx0XHRzdG9yZU9iamVjdC5saW5rUGFyZW50SWQodGhpcy5pZCk7XG5cdFx0Y29uc3QgbmV3U3RvcmVPYmpJZCA9IHN0b3JlT2JqZWN0LmlkO1xuXHRcdHRoaXMuY2hpbGRyZW5bbmV3U3RvcmVPYmpJZF0gPSBzdG9yZU9iamVjdDtcblx0XHR0aGlzLl92YWx1ZVtuZXdTdG9yZU9iaklkXSA9IHN0b3JlT2JqZWN0LmdldFZhbHVlKCk7XG5cdFx0cmV0dXJuVmFsdWUgPSBzdG9yZU9iamVjdDtcblx0XHR0aGlzLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblx0fTtcblxuXHR0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIodGhpcyxfcmVxdWVzdFN0b3JlLCAoKT0+e1xuXHRcdG5ld1N0b3JlQ2FsbGJhY2sgJiYgbmV3U3RvcmVDYWxsYmFjayhyZXR1cm5WYWx1ZSk7XG5cdH0pO1xufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihpZCx0cmlnZ2VyID0gdHJ1ZSl7XG5cdGNvbnN0IHN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltpZF07XG5cdGlmKHN0b3JlT2JqZWN0KXtcblx0XHRjb25zdCBfcmVtb3ZlID0gKCk9Pntcblx0XHRcdHN0b3JlT2JqZWN0LnJlbW92ZUNvbm5lY3RvcigpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuY2hpbGRyZW5baWRdO1xuXHRcdFx0ZGVsZXRlIHRoaXMuX3ZhbHVlW2lkXTtcblx0XHRcdHRyaWdnZXIgJiYgdGhpcy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cdFx0fVxuXG5cdFx0aWYoIXRyaWdnZXIpe1xuXHRcdFx0X3JlbW92ZS5jYWxsKHRoaXMpO1xuXHRcdH07XG5cblx0XHR0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIodGhpcyxfcmVtb3ZlKVxuXHR9XG5cbn07XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oKXtcblx0Y29uc3QgY2hpbGRLZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbik7XG5cdGlmKGNoaWxkS2V5cy5sZW5ndGggPiAwKXtcblx0XHRjb25zdCBfcmVtb3ZlQWxsID0gKCk9Pntcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZEtleXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRjb25zdCBjaGlsZEtleSA9IGNoaWxkS2V5c1tpXTtcblx0XHRcdFx0dGhpcy5yZW1vdmUoY2hpbGRLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHJpZ2dlckxpc3RlbmVycygpO1xuXHRcdH1cblxuXHRcdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9yZW1vdmVBbGwpXG5cdH1cbn07XG5cbi8vIG9ubHlDb21wYXJpc29uIG1vZGUsIG91ciBEaWZmIGlzIExvZyBkaWZmXG4vLyBpbiBmYWxzZSBtb2RlIG91ciBkaWZmIGlzIHN0YXRlIG9iamVjdFxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5jYWxjdWxhdGVEaWZmID0gZnVuY3Rpb24odmFsdWUsIG9ubHlDb21wYXJpc29uID0gZmFsc2Upe1xuXHRjb25zdCB2YWx1ZUFzT2JqID0gYXJyYXlUb09iamVjdCh2YWx1ZSwgJ2lkJyk7XG5cblx0Y29uc3QgY2hpbGRyZW5LZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbik7XG5cdGNvbnN0IHN0YXRlTGVuID0gdmFsdWUgPyB2YWx1ZS5sZW5ndGggOiBOYU47XG5cdGNvbnN0IGN1cnJlbnRTdGF0ZUxlbiA9IGNoaWxkcmVuS2V5cyA/IGNoaWxkcmVuS2V5cy5sZW5ndGggOiAwO1xuXHRsZXQgaXNDaGFuZ2VkID0gc3RhdGVMZW4gIT09IGN1cnJlbnRTdGF0ZUxlbiA7XG5cdGxldCBjaGlsZFVwZGF0ZUNvdW50ID0gMDtcblxuXHRsZXQgY2hpbGRyZW5Gb3J3YXJkRGlmZnMgPSBbXTtcblx0bGV0IGNoaWxkcmVuQmFja3dhcmREaWZmcyA9IFtdO1xuXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBjdXJyZW50U3RhdGVMZW47IGkrKyl7XG5cdFx0Y29uc3Qga2V5ID0gY2hpbGRyZW5LZXlzW2ldO1xuXHRcdGNvbnN0IGN1cnJlbnRTdG9yZU9iamVjdCA9IHRoaXMuY2hpbGRyZW5ba2V5XTtcblx0XHRjb25zdCBjaGlsZFN0YXRlID0gdmFsdWVBc09iaiA/IHZhbHVlQXNPYmpbY3VycmVudFN0b3JlT2JqZWN0LmlkXTogdW5kZWZpbmVkO1xuXHRcdGRlbGV0ZSB2YWx1ZUFzT2JqW2N1cnJlbnRTdG9yZU9iamVjdC5pZF07IC8vIG5lZWQgdG8gZG8gdGhpcyB0byBpZGVudGlmeSBhbGwgZGVsZXRlZCBjaGlsZFxuXG5cdFx0aWYoY2hpbGRTdGF0ZSAgKXsgLy8gZXhpc3RpbmcgY2hpbGQgdXBkYXRlXG5cdFx0XHRpZih0eXBlb2YgY2hpbGRTdGF0ZSAhPT0gJ3N0cmluZycpeyAvLyBubyBjaGFuZ2UgdGhpcyBoYXBwZW5zIGluIGRpZmYgbW9kZSAsIHdoaWNoIG9ubHlDb21wYXJpc29uXG5cdFx0XHRcdGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFN0YXRlID8gY2hpbGRTdGF0ZS52YWx1ZSA6IHVuZGVmaW5lZDtcblx0XHRcdFx0aWYob25seUNvbXBhcmlzb24pe1xuXHRcdFx0XHRcdGNvbnN0IGlzQ2hpbGRVcGRhdGVkID0gY3VycmVudFN0b3JlT2JqZWN0LmNhbGN1bGF0ZURpZmYuY2FsbChjdXJyZW50U3RvcmVPYmplY3QsIGNoaWxkVmFsdWUsIG9ubHlDb21wYXJpc29uKTtcblx0XHRcdFx0XHRpZihpc0NoaWxkVXBkYXRlZCl7XG5cdFx0XHRcdFx0XHRjaGlsZFVwZGF0ZUNvdW50ID0gY2hpbGRVcGRhdGVDb3VudCArIDFcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGNvbnN0IGRpZmZWYWx1ZSA9IGN1cnJlbnRTdG9yZU9iamVjdC5nZXREaWZmLmNhbGwoY3VycmVudFN0b3JlT2JqZWN0LCBjaGlsZFZhbHVlKTtcblx0XHRcdFx0XHRpZih0eXBlb2YgZGlmZlZhbHVlICE9PSAnc3RyaW5nJyl7XG5cdFx0XHRcdFx0XHRpc0NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCB7Zm9yd2FyZCwgYmFja3dhcmQgfSA9IGRpZmZWYWx1ZTtcblx0XHRcdFx0XHRjaGlsZHJlbkZvcndhcmREaWZmcy5wdXNoKGZvcndhcmQpO1xuXHRcdFx0XHRcdGNoaWxkcmVuQmFja3dhcmREaWZmcy5wdXNoKGJhY2t3YXJkKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYob25seUNvbXBhcmlzb24pe1xuXHRcdFx0XHRjaGlsZFVwZGF0ZUNvdW50ID0gY2hpbGRVcGRhdGVDb3VudCArIDE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjaGlsZHJlbkZvcndhcmREaWZmcy5wdXNoKGN1cnJlbnRTdG9yZU9iamVjdC5hc0pzb24oKSk7XG5cdFx0XHRcdGNoaWxkcmVuQmFja3dhcmREaWZmcy5wdXNoKGN1cnJlbnRTdG9yZU9iamVjdC5hc0pzb24odW5kZWZpbmVkLCB0cnVlKSlcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHJlbWFpbmluZ0NoaWxkS2V5cyA9IHZhbHVlQXNPYmogPyBPYmplY3Qua2V5cyh2YWx1ZUFzT2JqKSA6IG51bGw7XG5cdGNvbnN0IHJlbWlhbmluZ0NoaWxkQ291bnQgPSByZW1haW5pbmdDaGlsZEtleXMgPyByZW1haW5pbmdDaGlsZEtleXMubGVuZ3RoIDogMDtcblx0aWYocmVtaWFuaW5nQ2hpbGRDb3VudCl7XG5cdFx0aWYob25seUNvbXBhcmlzb24pe1xuXHRcdFx0Y2hpbGRVcGRhdGVDb3VudCA9ICByZW1pYW5pbmdDaGlsZENvdW50ICsgY2hpbGRVcGRhdGVDb3VudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IHJlbWlhbmluZ0NoaWxkQ291bnQ7IGkrKyl7XG5cdFx0XHRcdGNvbnN0IHJlbWFpbmluZ0NoaWxkS2V5ID0gcmVtYWluaW5nQ2hpbGRLZXlzW2ldO1xuXHRcdFx0XHRjb25zdCByZW1haW5pbmdDaGlsZCA9IHZhbHVlQXNPYmpbcmVtYWluaW5nQ2hpbGRLZXldO1xuXHRcdFx0XHRjb25zdCBkZWxldGVkQ2hpbGRGb3J3YXJkRGlmZiA9IHt9O1xuXHRcdFx0XHRkZWxldGVkQ2hpbGRGb3J3YXJkRGlmZi5pZCA9IHJlbWFpbmluZ0NoaWxkLmlkO1xuXHRcdFx0XHRkZWxldGVkQ2hpbGRGb3J3YXJkRGlmZlsnY2xhc3NEZWZOYW1lJ10gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmWydkaXNwbGF5TmFtZSddID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRkZWxldGVkQ2hpbGRGb3J3YXJkRGlmZlsndmFsdWUnXSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRjaGlsZHJlbkZvcndhcmREaWZmcy5wdXNoKGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmKTtcblx0XHRcdFx0Y2hpbGRyZW5CYWNrd2FyZERpZmZzLnB1c2gocmVtYWluaW5nQ2hpbGQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0cmV0dXJuIGNoaWxkVXBkYXRlQ291bnQ7XG5cdH1cblxuXG5cdGlmKGlzQ2hhbmdlZCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcndhcmQ6dGhpcy5hc0pzb24oY2hpbGRyZW5Gb3J3YXJkRGlmZnMpLFxuXHRcdFx0YmFja3dhcmQ6dGhpcy5hc0pzb24oY2hpbGRyZW5CYWNrd2FyZERpZmZzKVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcndhcmQ6dGhpcy5pZCxcblx0XHRcdGJhY2t3YXJkOnRoaXMuaWRcblx0XHR9O1xuXHR9XG59O1xuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNvbWJpbmVEaWZmID0gZnVuY3Rpb24oYXJyYXkxLCBhcnJheTIsIGlkTmFtZSl7XG5cblx0cmV0dXJuIGNvbWJpbmVBcnJheShhcnJheTEsIGFycmF5MiwgaWROYW1lLCAoYXJyYXkxQXNPYmosIGFycmF5MkNoaWxkLCBrZXlOYW1lKT0+e1xuXHRcdGNvbnN0IGNoaWxkSWQgPSB0eXBlb2YgYXJyYXkyQ2hpbGQgPT09ICdzdHJpbmcnID8gYXJyYXkyQ2hpbGQgOiBhcnJheTJDaGlsZFtrZXlOYW1lXTtcblx0XHRyZXR1cm4gIWFycmF5MUFzT2JqW2NoaWxkSWRdO1xuXHR9KVxuXG59XG4vLyB3aGVuIHdlIGNhbGwgYXBwbHkgZGlmZiwgY29ubmVjdCB0byBuZXh0IHNldCBvZiBmdW5jdGlvbnMgYXJlIG5vdCBjYWxsZWRcblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlEaWZmID0gZnVuY3Rpb24odmFsdWUsIGNhbGxiYWNrKXtcblx0dGhpcy51bkxpbmtDb25uZWN0b3IoKTtcblx0dGhpcy5zZXRTdGF0ZSh2YWx1ZSwgKCk9Pntcblx0XHR0aGlzLmxpbmtDb25uZWN0b3IoKTtcblx0XHRjYWxsYmFjaygpXG5cdH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9TdG9yZUNvbGxlY3Rpb24uanMiXSwic291cmNlUm9vdCI6IiJ9