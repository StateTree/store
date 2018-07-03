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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(3);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = new _lib2.default(5, ' Number');

store.addListener(window, function () {
	console.log("Immediate");
});

store.addListener(window, function () {
	console.log("Later");
}, true);

store.setState(7, function () {
	console.log("Set State Callbac k");
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOGEwNTYwYTc0ZDQ3MTM1YWRiNiIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDkiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9pcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmVJRC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1N0b3JlQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbGN1bGF0ZURpZmYiLCJ2YWx1ZSIsIm9ubHlDb21wYXJpc29uIiwiY3VycmVudFZhbHVlIiwiX3ZhbHVlIiwiY2hhbmdlZCIsImNvbXBhcmVyIiwiU3RvcmUiLCJzdGFja0RlYnVnIiwiY29uc29sZSIsImxvZyIsImFzSnNvbiIsImlkIiwiZGlzcGxheU5hbWUiLCJvYmplY3ROYW1lIiwidW5kZWZpbmVkIiwiYmluZCIsImlzRGVsZXRlIiwiZ2V0U3RhdGUiLCJqc29uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwicHJvdG90eXBlIiwiZ2V0VmFsdWUiLCJzZXRTdGF0ZSIsIm5ld1ZhbHVlIiwiY2FsbGJhY2siLCJkaWRTdGF0ZUNoYW5nZWQiLCJfc2V0U3RhdGUiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwiZXhlY3V0ZVRyaWdnZXJlciIsIk51bWJlciIsInNob3VsZExpc3RlbmVyc0V4ZWN1dGUiLCJvbGRWYWx1ZSIsImNvbXBhcmVGbiIsImZvcndhcmQiLCJiYWNrd2FyZCIsImdldERpZmYiLCJhcHBseURpZmYiLCJzdGF0ZUFzSnNvbiIsImlzQ2hhbmdlZCIsImFycmF5VG9PYmplY3QiLCJjb21iaW5lQXJyYXkiLCJvbGRWYWwiLCJuZXdWYWwiLCJjb21wYXJpc29uVmFsdWUiLCJhcnJheSIsImlkTmFtZSIsIm9iamVjdCIsImluZGV4IiwiY2hpbGQiLCJsZW5ndGgiLCJhcnJheTEiLCJhcnJheTIiLCJzaG91bGRDb21iaW5lRm4iLCJhcnJheTFBc09iaiIsImFycmF5MmNoaWxkIiwiaSIsInB1c2giLCJkZWZhdWx0IiwiU3RvcmVDb2xsZWN0aW9uIiwiU3RvcmVJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInBhcmVudElkIiwibGlua2VkSWRzIiwibGlua1BhcmVudElkIiwidW5MaW5rUGFyZW50SWQiLCJsaW5rSWQiLCJ1bkxpbmtJZCIsImluZGV4T2YiLCJzdGF0ZSIsImNoaWxkcmVuIiwidHJpZ2dlcldhaXRDb3VudCIsImdldENoaWxkcmVuIiwiY2hpbGRWYWx1ZXMiLCJjdXJyZW50Q2hpbGRJZHMiLCJnZXRDaGlsZElkcyIsIm5ld0NoaWxkU3RhdGUiLCJjaGlsZElkIiwiY2xhc3NEZWZOYW1lIiwicmVtb3ZlIiwicmVxdWVzdFN0b3JlIiwiaWRTdGlsbEV4aXN0Iiwic3BsaWNlIiwiYXNDb3B5IiwiaWRzIiwiT2JqZWN0Iiwia2V5cyIsInNsaWNlIiwiY2hpbGRLZXlzIiwiY2hpbGRLZXkiLCJzdG9yZU9iamVjdCIsIm5ld1N0b3JlQ2FsbGJhY2siLCJyZXR1cm5WYWx1ZSIsIl9yZXF1ZXN0U3RvcmUiLCJzZXRDb25uZWN0b3IiLCJuZXdTdG9yZU9iaklkIiwidHJpZ2dlciIsIl9yZW1vdmUiLCJyZW1vdmVDb25uZWN0b3IiLCJjYWxsIiwicmVtb3ZlQWxsIiwiX3JlbW92ZUFsbCIsInZhbHVlQXNPYmoiLCJjaGlsZHJlbktleXMiLCJzdGF0ZUxlbiIsIk5hTiIsImN1cnJlbnRTdGF0ZUxlbiIsImNoaWxkVXBkYXRlQ291bnQiLCJjaGlsZHJlbkZvcndhcmREaWZmcyIsImNoaWxkcmVuQmFja3dhcmREaWZmcyIsImtleSIsImN1cnJlbnRTdG9yZU9iamVjdCIsImNoaWxkU3RhdGUiLCJjaGlsZFZhbHVlIiwiaXNDaGlsZFVwZGF0ZWQiLCJkaWZmVmFsdWUiLCJyZW1haW5pbmdDaGlsZEtleXMiLCJyZW1pYW5pbmdDaGlsZENvdW50IiwicmVtYWluaW5nQ2hpbGRLZXkiLCJyZW1haW5pbmdDaGlsZCIsImRlbGV0ZWRDaGlsZEZvcndhcmREaWZmIiwiY29tYmluZURpZmYiLCJhcnJheTJDaGlsZCIsImtleU5hbWUiLCJ1bkxpbmtDb25uZWN0b3IiLCJsaW5rQ29ubmVjdG9yIiwic3RvcmUiLCJhZGRMaXN0ZW5lciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFxRDtBQUFBLEtBQXZCQyxjQUF1Qix1RUFBTixLQUFNOztBQUNwRCxLQUFNQyxlQUFlLEtBQUtDLE1BQTFCO0FBQ0EsS0FBSUMsVUFBVSxLQUFkO0FBQ0EsS0FBRyxLQUFLQyxRQUFSLEVBQWlCO0FBQ2hCRCxZQUFVLEtBQUtDLFFBQUwsQ0FBY0wsS0FBZCxFQUFxQkUsWUFBckIsQ0FBVjtBQUNBLEVBRkQsTUFFSztBQUNKRSxZQUFVLHdCQUFVSixLQUFWLEVBQWlCRSxZQUFqQixDQUFWO0FBQ0E7QUFDREksT0FBTUMsVUFBTixJQUFvQkMsUUFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDVCxLQUFoQyxFQUF1Q0UsWUFBdkMsRUFBc0QsSUFBdEQsQ0FBcEI7QUFDQSxLQUFHRCxjQUFILEVBQWtCO0FBQ2pCLFNBQU9HLE9BQVA7QUFDQTs7QUFFRCxRQUFP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QUFqQixFQUF5Qk4sTUFBekIsRUFBZ0M7O0FBRXZFLFFBQU8sMkJBQWFLLE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCTixNQUE3QixFQUFxQyxVQUFDUSxXQUFELEVBQWN1RSxXQUFkLEVBQTJCQyxPQUEzQixFQUFxQztBQUNoRixNQUFNOUMsVUFBVSxPQUFPNkMsV0FBUCxLQUF1QixRQUF2QixHQUFrQ0EsV0FBbEMsR0FBZ0RBLFlBQVlDLE9BQVosQ0FBaEU7QUFDQSxTQUFPLENBQUN4RSxZQUFZMEIsT0FBWixDQUFSO0FBQ0EsRUFITSxDQUFQO0FBS0EsQ0FQRDtBQVFBO0FBQ0FyQixnQkFBZ0J0QyxTQUFoQixDQUEwQmdCLFNBQTFCLEdBQXNDLFVBQVNyQyxLQUFULEVBQWdCeUIsUUFBaEIsRUFBeUI7QUFBQTs7QUFDOUQsTUFBS3NHLGVBQUw7QUFDQSxNQUFLeEcsUUFBTCxDQUFjdkIsS0FBZCxFQUFxQixZQUFJO0FBQ3hCLFNBQUtnSSxhQUFMO0FBQ0F2RztBQUNBLEVBSEQ7QUFJQSxDQU5ELEM7Ozs7Ozs7OztBQ3BRQTs7Ozs7O0FBR0EsSUFBTXdHLFFBQVEsa0JBQVUsQ0FBVixFQUFZLFNBQVosQ0FBZDs7QUFFQUEsTUFBTUMsV0FBTixDQUFrQkMsTUFBbEIsRUFBMEIsWUFBSTtBQUM3QjNILFNBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsQ0FGRDs7QUFJQXdILE1BQU1DLFdBQU4sQ0FBa0JDLE1BQWxCLEVBQTBCLFlBQUk7QUFDN0IzSCxTQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLENBRkQsRUFFRyxJQUZIOztBQUlBd0gsTUFBTTFHLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLFlBQUk7QUFDckJmLFNBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLENBRkQsRSIsImZpbGUiOiJkZW1vL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN0b3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN0b3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN0b3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOGEwNTYwYTc0ZDQ3MTM1YWRiNiIsImltcG9ydCB7IGlzQ2hhbmdlZH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBTdG9yZUlEIGZyb20gJy4vU3RvcmVJRCc7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURpZmYodmFsdWUsIG9ubHlDb21wYXJpc29uID0gZmFsc2Upe1xuXHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLl92YWx1ZTtcblx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0aWYodGhpcy5jb21wYXJlcil7XG5cdFx0Y2hhbmdlZCA9IHRoaXMuY29tcGFyZXIodmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG5cdH1lbHNle1xuXHRcdGNoYW5nZWQgPSBpc0NoYW5nZWQodmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG5cdH1cblx0U3RvcmUuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlN0b3JlOiBnZXREaWZmOiBcIiwgdmFsdWUsIGN1cnJlbnRWYWx1ZSAsIHRoaXMpO1xuXHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cblxuXHRyZXR1cm4gY2hhbmdlZCA/IHRoaXMuYXNKc29uKGN1cnJlbnRWYWx1ZSkgOiB0aGlzLmlkO1xufVxuXG5cbi8qXG4qIDEuIGdldFZhbHVlLCByZXR1cm4gdGhlIHdyYXBwZWQgdmFsdWUgaW5zaWRlIHRoaXMgb2JqZWN0XG4qIDMuIGdldFN0YXRlIGRvZXMgZXhhY3RseSB3aGF0IGdldFZhbHVlIGRvZXMgKGR1cGxpY2F0aW9uKVxuKiA0LiBzZXRTdGF0ZSBzZXQgdGhlIHZhbHVlIGlmIHRoZXJlIGlzIGEgY2hhbmdlIHRvIG9sZFZhbHVlIGFuZCBpbkFkZGl0aW9uIHRyaWdnZXJzIGFsbCBkYXRhQ2hhbmdlIGxpc3RlbmVyc1xuKiA1LiBnZXREaWZmIHJldHVybiB0aGUgdmFsdWUgaW4gSlNPTiBTdHJ1Y3V0dXJlIHdpdGggbWV0YWRhdGEgSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvYmplY3QqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBTdG9yZUlEe1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgZGlzcGxheU5hbWUsIG9iamVjdE5hbWUsIGNvbXBhcmVyKXtcblx0XHRzdXBlcihvYmplY3ROYW1lKTtcblx0XHQvL2luaXRpYWwgdmFsdWUgY2FuJ3QgYmUgdW5kZWZpbmVkLCBpdCBoYXMgdG8gYmUgbnVsbCBvciBnaXZlbiB2YWx1ZVxuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcblx0XHR0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cdFx0dGhpcy5jb21wYXJlciA9IGNvbXBhcmVyO1xuXG5cdFx0dGhpcy5hc0pzb24gPSB0aGlzLmFzSnNvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YXNKc29uKHZhbHVlLCBpc0RlbGV0ZSl7XG5cdFx0dmFsdWUgPSB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXRTdGF0ZSgpIDogdmFsdWU7XG5cdFx0Y29uc3QganNvbiA9IHN1cGVyLmFzSnNvbigpO1xuXHRcdGpzb25bJ2NsYXNzRGVmTmFtZSddID0gaXNEZWxldGUgPyAgdW5kZWZpbmVkIDogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdGpzb25bJ2Rpc3BsYXlOYW1lJ10gPSBpc0RlbGV0ZSA/ICB1bmRlZmluZWQgOnRoaXMuZGlzcGxheU5hbWU7XG5cdFx0anNvblsndmFsdWUnXSA9IGlzRGVsZXRlID8gIHVuZGVmaW5lZCA6dmFsdWU7XG5cdFx0cmV0dXJuIGpzb247XG5cdH07XG59XG5cblxuU3RvcmUucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIHRoaXMuX3ZhbHVlO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIHRoaXMuX3ZhbHVlO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24obmV3VmFsdWUsIGNhbGxiYWNrKXtcblx0Y29uc3QgZGlkU3RhdGVDaGFuZ2VkID0gdGhpcy5jYWxjdWxhdGVEaWZmKG5ld1ZhbHVlLCB0cnVlKTtcblxuXHRpZihkaWRTdGF0ZUNoYW5nZWQpe1xuXHRcdGNvbnN0IF9zZXRTdGF0ZSA9ICgpPT57XG5cdFx0XHR0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdFx0dGhpcy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cdFx0fTtcblx0XHQvL3NldCBzdGF0ZSBmdW5jdGlvbiBpcyB0aGUgb25lIHdoaWNoIHRyaWdnZXJzIGFsbCB0aGUgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIGl0XG5cdFx0Ly8gaWYgbGlzdGVuZXJzIGV4ZWN1dGlvbiBhcmUgZ29pbmcgb24sIHRoaXMgd2lsbCBleGVjdXRlIG9uY2UgdGhleSBhcmUgZG9uZVxuXHRcdC8vIGVsc2Ugc2V0IHN0YXRlIGlzIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0dGhpcy5leGVjdXRlVHJpZ2dlcmVyKHRoaXMsX3NldFN0YXRlLCAoKT0+e1xuXHRcdFx0U3RvcmUuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlN0b3JlOiBfc2V0U3RhdGVDYWxsYmFjazogXCIgLCB0aGlzKTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gTnVtYmVyKGRpZFN0YXRlQ2hhbmdlZCk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSA9IGZ1bmN0aW9uKG9sZFZhbHVlLCBuZXdWYWx1ZSl7XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gbmVlZCBib3RoIGZvcndhcmQgZGlmZiBhbmQgIGJhY2t3YXJkIGRpZmZcblN0b3JlLnByb3RvdHlwZS5jYWxjdWxhdGVEaWZmID0gZnVuY3Rpb24gKHZhbHVlLCBvbmx5Q29tcGFyaXNvbiA9IGZhbHNlKXtcblx0Y29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5fdmFsdWU7XG5cdGNvbnN0IGNvbXBhcmVGbiA9IHRoaXMuY29tcGFyZXIgPyB0aGlzLmNvbXBhcmVyIDogaXNDaGFuZ2VkO1xuXHRjb25zdCBjaGFuZ2VkID0gY29tcGFyZUZuKHZhbHVlLCBjdXJyZW50VmFsdWUpO1xuXG5cdGlmKG9ubHlDb21wYXJpc29uKXtcblx0XHRyZXR1cm4gY2hhbmdlZDtcblx0fVxuXG5cdGlmKGNoYW5nZWQpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRmb3J3YXJkOnRoaXMuYXNKc29uKGN1cnJlbnRWYWx1ZSksXG5cdFx0XHRiYWNrd2FyZDp0aGlzLmFzSnNvbih2YWx1ZSlcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB7XG5cdFx0XHRmb3J3YXJkOnRoaXMuaWQsXG5cdFx0XHRiYWNrd2FyZDp0aGlzLmlkXG5cdFx0fTtcblx0fVxufVxuXG4vLyBEaWZmIHJldHVybnMgdGhlIERpZmYgVmFsdWUgYXMgSlNPTlxuU3RvcmUucHJvdG90eXBlLmdldERpZmYgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdHJldHVybiB0aGlzLmNhbGN1bGF0ZURpZmYodmFsdWUsIGZhbHNlKVxufTtcblxuU3RvcmUucHJvdG90eXBlLmFwcGx5RGlmZiA9IGZ1bmN0aW9uKHN0YXRlQXNKc29uLCBjYWxsYmFjayl7XG5cdGlmKHR5cGVvZiBzdGF0ZUFzSnNvbiAhPT0gJ3N0cmluZycpe1xuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGVBc0pzb24udmFsdWUsIGNhbGxiYWNrKTtcblx0fVxufTtcblxuU3RvcmUuc3RhY2tEZWJ1ZyA9IGZhbHNlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvU3RvcmUuanMiLCJpbXBvcnQgeyBjb21wYXJlfSBmcm9tICdkaWZmJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaXNDaGFuZ2VkKG9sZFZhbCwgbmV3VmFsKXtcblx0Y29uc3QgY29tcGFyaXNvblZhbHVlID0gIGNvbXBhcmUob2xkVmFsLCBuZXdWYWwpO1xuXHRpZihjb21wYXJpc29uVmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb09iamVjdChhcnJheSAsIGlkTmFtZSl7XG5cdGxldCBvYmplY3QgPSBudWxsO1xuXHRpZihhcnJheSl7XG5cdFx0b2JqZWN0ID0ge307XG5cdFx0bGV0IGluZGV4LCBpZCwgY2hpbGQ7XG5cdFx0Zm9yKGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4Kyspe1xuXHRcdFx0Y2hpbGQgPSBhcnJheVtpbmRleF07XG5cdFx0XHRpZihjaGlsZCl7XG5cdFx0XHRcdGlmKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHRcdGlkID0gY2hpbGQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWQgPSBjaGlsZFtpZE5hbWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9iamVjdFtpZF0gPSBjaGlsZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVBcnJheShhcnJheTEsIGFycmF5MiwgaWROYW1lLCBzaG91bGRDb21iaW5lRm4pe1xuXHRjb25zdCBhcnJheTFBc09iaiA9IGFycmF5VG9PYmplY3QoYXJyYXkxLCBpZE5hbWUpO1xuXG5cdGxldCBhcnJheTJjaGlsZDtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGFycmF5Mi5sZW5ndGg7IGkrKyl7XG5cdFx0YXJyYXkyY2hpbGQgPSBhcnJheTJbaV07XG5cdFx0aWYoc2hvdWxkQ29tYmluZUZuKGFycmF5MUFzT2JqLCBhcnJheTJjaGlsZCwgaWROYW1lKSl7XG5cdFx0XHRhcnJheTEucHVzaChhcnJheTJjaGlsZClcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFycmF5MTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaGVscGVycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IFN0b3JlQ29sbGVjdGlvbiBmcm9tICcuL1N0b3JlQ29sbGVjdGlvbic7XG5cbmV4cG9ydCB7XG5cdFN0b3JlIGFzIGRlZmF1bHQsXG5cdFN0b3JlQ29sbGVjdGlvblxufSA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZ1bmN0aW9uc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ODdmZWUxZDhhYjRkYzQxMDcwOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDQ4N2ZlZTFkOGFiNGRjNDEwNzA5IiwiaW1wb3J0IHN0cmluZ0NvbXBhcmUgZnJvbSAnLi9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vZGF0ZUNvbXBhcmUnXG5pbXBvcnQgYXJyYXlDb21wYXJlIGZyb20gJy4vYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGlzIGZyb20gJy4vLi4vaXMnXG5cbmZ1bmN0aW9uIGNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgY29uc3QgIG9sZE9ialR5cGUgPSB0eXBlb2Yob2xkT2JqKTtcbiAgICBjb25zdCAgbmV3T2JqVHlwZSA9IHR5cGVvZihuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09IG5ld09ialR5cGUpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9ialR5cGUsIG5ld09ialR5cGUpO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUoTnVtYmVyKG9sZE9iaiksIE51bWJlcihuZXdPYmopKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXMob2xkT2JqLCBEYXRlKSlcbiAgICAgICAgcmV0dXJuIGRhdGVDb21wYXJlKG9sZE9iaiwgbmV3T2JqKTtcbiAgICBpZiAoaXMob2xkT2JqLCBBcnJheSkpXG4gICAgICAgIHJldHVybiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmosY29tcGFyZSk7XG4gICAgaWYgKGlzKG9sZE9iaiwgT2JqZWN0KSlcbiAgICAgICAgcmV0dXJuIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmosIGNvbXBhcmUpO1xuXG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2NvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwiLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSlcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgZWxzZSBpZiAocmVzdWx0ID4gMSlcbiAgICAgICAgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ0NvbXBhcmU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBudW1iZXJDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSAmJiBpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFZhbHVlID4gbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBudW1iZXJDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9udW1iZXJDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBkYXRlQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcblxuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbCAmJiBuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHZhciAgb2xkVGltZSA9IG9sZFZhbHVlLmdldFRpbWUoKTtcbiAgICB2YXIgIG5ld1RpbWUgPSBuZXdWYWx1ZS5nZXRUaW1lKCk7XG4gICAgaWYgKG9sZFRpbWUgPCBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFRpbWUgPiBuZXdUaW1lKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpc05hTihvbGRUaW1lKSAmJiBpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAoaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRlQ29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL2RhdGVDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgdmFyICBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciAgbmV3T2JqTGVuZ3RoID0gbmV3T2JqLmxlbmd0aDtcbiAgICBpZiAob2xkT2JqTGVuZ3RoIDwgbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA+IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBmb3IgKHZhciAgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuXG4gICAgbGV0IHByb3A7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iailcbiAgICB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgZm9yIChwcm9wIGluIG5ld09iailcbiAgICB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvY29tcGFyZS9vYmplY3RDb21wYXJlLmpzIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvaW5kZXguanMiLCJmdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdClcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gU3RyaW5nO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2lzLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2lzLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2NvbXBhcmUnO1xuXG4vLyBJZiB0aGVyZSBpcyBubyBjaGFuZ2UgcmV0dXJucyB1bmRlZmluZWRcbi8vIGlmIHRoZXJlIGlzIGEgY2hhbmdlIHJldHVybnMgdGhlIGxhdGVzdCB2YWx1ZVxuZnVuY3Rpb24gZGlmZihjb21wYXJlZFZhbHVlLCB2YWx1ZSl7XG5cdGNvbnN0IGNvbXBhcmlzb25WYWx1ZSA9ICBjb21wYXJlKGNvbXBhcmVkVmFsdWUsIHZhbHVlKTtcblxuXHRpZihjb21wYXJpc29uVmFsdWUgPT09IDApe1xuXHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHR9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpZmY7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2RpZmYuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvZGlmZi5qcyIsImltcG9ydCBGdW5jdGlvbnMgZnJvbSAnZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVJRCBleHRlbmRzIEZ1bmN0aW9uc3tcblx0Y29uc3RydWN0b3IoaWQpe1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYoaWQgPT09IHVuZGVmaW5lZCB8fCBpZCA9PT0gbnVsbCl7XG5cdFx0XHR0aGlzLmlkID0gIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcblx0XHR9IGVsc2V7XG5cdFx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0fVxuXHRcdHRoaXMucGFyZW50SWQgPSBudWxsO1xuXHRcdHRoaXMubGlua2VkSWRzID0gbnVsbDtcblxuXHRcdHRoaXMubGlua1BhcmVudElkID0gdGhpcy5saW5rUGFyZW50SWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVuTGlua1BhcmVudElkID0gdGhpcy51bkxpbmtQYXJlbnRJZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubGlua0lkID0gdGhpcy5saW5rSWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVuTGlua0lkID0gdGhpcy51bkxpbmtJZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuYXNKc29uID0gdGhpcy5hc0pzb24uYmluZCh0aGlzKTtcblx0fVxuXG5cdGxpbmtQYXJlbnRJZChpZCl7XG5cdFx0dGhpcy5wYXJlbnRJZCA9IGlkO1xuXHR9O1xuXG5cdHVuTGlua1BhcmVudElkKCl7XG5cdFx0dGhpcy5wYXJlbnRJZCA9IG51bGw7XG5cdH07XG5cblx0bGlua0lkKGlkKXtcblx0XHRpZighdGhpcy5saW5rZWRJZHMpe1xuXHRcdFx0dGhpcy5saW5rZWRJZHMgPSBbXVxuXHRcdH1cblxuXHRcdGlmKHRoaXMubGlua2VkSWRzLmluZGV4T2YoaWQpID4gLTEpe1xuXHRcdFx0dGhpcy5saW5rZWRJZHMucHVzaChpZClcblx0XHR9XG5cdH07XG5cblxuXHR1bkxpbmtJZChpZCl7XG5cblx0fTtcblxuXHQvL3RvZG86IHBhcmVudElkOiB0aGlzLnBhcmVudElkLCBsaW5rZWRJZHM6IHRoaXMubGlua2VkSWRzXG5cdGFzSnNvbigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRpZDogdGhpcy5pZFxuXHRcdH07XG5cdH07XG59XG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1N0b3JlSUQuanMiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDUyOThjZWQxNTFlZjRkODFlMWEwIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0aWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9NYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyB0b0RvOiBzdXBwb3J0IGJvdGggY2FsbGJhY2sgYW5kIHByb21pc2VcbnZhciBUaWNrRW50cnkgPVxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBcInRoaXNcIiBhcmd1bWVudCBmb3IgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIuXG4gKi9cbmZ1bmN0aW9uIFRpY2tFbnRyeShjb250ZXh0LCBsaXN0ZW5lcikge1xuXHR2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG5cdHZhciBwcmlvcml0eSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcblxuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja0VudHJ5KTtcblxuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLmxpc3RlbmVyID0gbGlzdGVuZXI7XG5cdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gMDtcbn07XG5cbi8qLS0tLSBQdWJsaWN8UHJvdG90eXBlIE1ldGhvZHMgLS0tKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gVGlja0VudHJ5O1xuVGlja0VudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXHRUaWNrRW50cnkuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tFbnRyeSBkaXNwb3NlOlwiLCB0aGlzKTtcblx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0dGhpcy5saXN0ZW5lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuXHR0aGlzLnByaW9yaXR5ID0gbnVsbDtcblx0dGhpcy5leGVjdXRpb25Db3VudCA9IE5hTjtcbn07XG5cblRpY2tFbnRyeS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcblx0VGlja0VudHJ5LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJtYW5hZ2VyLmFkZDogXCIsIHRoaXMpO1xuXHRfTWFuYWdlcjIuZGVmYXVsdC5hZGQodGhpcyk7XG59O1xuXG5UaWNrRW50cnkuSElHSCA9IDA7XG5UaWNrRW50cnkuTk9STUFMID0gMTtcblRpY2tFbnRyeS5MT1cgPSAyO1xuXG5UaWNrRW50cnkuYWxsb3dlZFRpY2tDb3VudCA9IDEwMDtcblRpY2tFbnRyeS5kZWJ1ZyA9IGZhbHNlO1xuVGlja0VudHJ5LnN0YWNrRGVidWcgPSBmYWxzZTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RpY2tFbnRyeTIuZGVmYXVsdDtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfVGlja0VudHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9UaWNrRW50cnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGlja0VudHJ5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gMDsgLy8gZm9yIFdpbmRvd3MgRW52XG5cbi8vWzAtSElHSCwgMS1OT1JNQUwsIDItTE9XXVxudmFyIHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcbnZhciB3YWl0RW50cmllcyA9IG51bGw7XG5cbnZhciB0aWNrQ291bnQgPSAwO1xudmFyIGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIG9uVGljaygpIHtcblx0dGlja0NvdW50Kys7XG5cdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnKSB7XG5cdFx0Y29uc29sZS5sb2coXCJUaWNrIGNvdW50OiBcIiwgdGlja0NvdW50KTtcblx0fVxuXHRpZiAodGlja0NvdW50IDwgX1RpY2tFbnRyeTIuZGVmYXVsdC5hbGxvd2VkVGlja0NvdW50KSB7XG5cdFx0ZXhlY3V0ZVByaW9yaXR5RW50cmllcygpO1xuXHRcdG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpO1xuXHRcdGlmIChhcmVQcmlvcml0eUVudHJpZXNFbXB0eSgpKSB7XG5cdFx0XHRzdG9wKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBmcmFtZSBsb29wIGV4ZWN1dGVkIHRvIGl0cyBzZXQgbGltaXQ6IFwiLCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpO1xuXHRcdGlmIChfVGlja0VudHJ5Mi5kZWZhdWx0LmRlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkVudHJpZXM6IFwiLCBwcmlvcml0eUVudHJpZXNbMF0sIHByaW9yaXR5RW50cmllc1sxXSwgcHJpb3JpdHlFbnRyaWVzWzJdLCB3YWl0RW50cmllcyk7XG5cdFx0fVxuXHRcdHJlc2V0KCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuXHR0aWNrQ291bnQgPSAwO1xuXHRpc0V4ZWN1dGluZyA9IGZhbHNlO1xuXHR0aWNrTWFuYWdlci5zdG9wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuXHRzdG9wKCk7XG5cdHByaW9yaXR5RW50cmllcyA9IFtudWxsLCBudWxsLCBudWxsXTtcblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBtb3ZlV2FpdGluZ0VudHJpZXNGb3JFeGVjdXRpb24oKSB7XG5cdHZhciBlbnRyaWVzQ291bnQgPSB3YWl0RW50cmllcyA/IHdhaXRFbnRyaWVzLmxlbmd0aCA6IDA7XG5cdGlmICh3YWl0RW50cmllcyAmJiBlbnRyaWVzQ291bnQgPiAwKSB7XG5cdFx0Zm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGVudHJpZXNDb3VudDsgaW5kZXgrKykge1xuXHRcdFx0dmFyIHRpY2tFbnRyeSA9IHdhaXRFbnRyaWVzW2luZGV4XTtcblx0XHRcdHZhciBwcmlvcml0eSA9IHRpY2tFbnRyeS5wcmlvcml0eTtcblxuXHRcdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRcdHByaW9yaXR5RW50cmllc1twcmlvcml0eV0gPSBbXTtcblx0XHRcdH1cblx0XHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0XHR0aWNrRW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG5cdHdhaXRFbnRyaWVzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVByaW9yaXR5RW50cmllcygpIHtcblx0aXNFeGVjdXRpbmcgPSB0cnVlO1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcyk7XG5cdFx0XHQvL0NsZWFyIHRoZW0gb25jZSBleGVjdXRlZFxuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW2luZGV4XSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVUaWNrRW50cmllcyh0aWNrRW50cmllcykge1xuXHQvLyBpbXBvcnRhbnQgdG8gdXNlIGZvci1sb29wXG5cdC8vIHRpY2tFbnRyaWVzIGdyb3dzIGR5bmFtaWNhbGx5IGJ5IG9uZSBvZiBpdHMgZW50cnlcblx0Ly8gZm9yIGV4YW1wbGU6IGxldCBzYXkgd2UgaGF2ZSBvbmUgZW50cnksIGFuZCBleGVjdXRpbmcgdGhhdCBlbnRyeSBtaWdodCBhZGRzIGFub3RoZXIgZW50cnlcblx0Ly8gd2l0aCBtYXAgZnVuY3Rpb24gd2UgY2FudCBleGVjdXRlIGR5bmFtaWNhbGx5IGdyb3dpbmcgZW50cmllcy5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWNrRW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0aWNrRW50cnkgPSB0aWNrRW50cmllc1tpXTtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogZXhlY3V0ZVRpY2tFbnRyaWVzIDogZm9yIFwiLCBpLCB0aWNrRW50cnkpO1xuXHRcdHRpY2tFbnRyeS5saXN0ZW5lci5jYWxsKHRpY2tFbnRyeS5jb250ZXh0IHx8IHRpY2tFbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblxuXHRcdGlmICh0aWNrRW50cnkuY2FsbGJhY2spIHtcblx0XHRcdHRpY2tFbnRyeS5jYWxsYmFjay5jYWxsKHRpY2tFbnRyeS5jYWxsYmFja1sndGhpcyddKTtcblx0XHR9XG5cdFx0dGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50Kys7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcgJiYgdGlja0VudHJ5LmV4ZWN1dGlvbkNvdW50ID4gMSkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJFeGVjdXRlZCBtb3JlIHRoYW4gb25jZTogXCIsIHRpY2tFbnRyeSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkge1xuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcHJpb3JpdHlFbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1tpbmRleF07XG5cdFx0aWYgKHRpY2tFbnRyaWVzICYmIHRpY2tFbnRyaWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKCkge1xuXHR2YXIgc2hvdWxkQ29udGludWUgPSBvblRpY2soKTtcblx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUNhbGxiYWNrKTtcblx0fVxufVxuXG52YXIgVGlja01hbmFnZXIgPSBmdW5jdGlvbiBUaWNrTWFuYWdlcigpIHtcblx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpY2tNYW5hZ2VyKTtcbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodGlja0VudHJ5KSB7XG5cdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBcIiwgdGlja0VudHJ5KTtcblx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHR0aGlzLnN0YXJ0KCk7XG5cdH1cblx0aWYgKGlzRXhlY3V0aW5nKSB7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6ICB3YWl0IFwiKTtcblx0XHRpZiAoIXdhaXRFbnRyaWVzKSB7XG5cdFx0XHR3YWl0RW50cmllcyA9IFtdO1xuXHRcdH1cblx0XHR3YWl0RW50cmllcy5wdXNoKHRpY2tFbnRyeSk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0aWYgKCFwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldKSB7XG5cdFx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogaW4gXCIgKyBwcmlvcml0eSArIFwiIDogbmV3IEFycmF5XCIpO1xuXHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdH1cblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogaW4gXCIgKyBwcmlvcml0eSArIFwiIDogcHVzaFwiKTtcblx0XHR2YXIgdGlja0VudHJpZXMgPSBwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldO1xuXHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fVxufTtcblxuLy8gVG9kbzogU3VwcG9ydCBmb3IgTm9kZUpTIFxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0Ly8gd2lsbCByZWNlaXZlcyB0aW1lc3RhbXAgYXMgYXJndW1lbnRcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBzdGFydCA6IFwiLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cblRpY2tNYW5hZ2VyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuXHRpZiAod2luZG93KSB7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IHN0b3AgOiBcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdH1cbn07XG5cbnZhciB0aWNrTWFuYWdlciA9IG5ldyBUaWNrTWFuYWdlcigpO1xuXG4vLyBzaW5nbGV0b25JbnN0YW5hY2VcbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2tNYW5hZ2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OHZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMeTkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0EzT1RFNE1EZG1ORGszTkRabE9EWmhaalE0TXlJc0luZGxZbkJoWTJzNkx5OHZMaTlzYVdJdlZHbGphMFZ1ZEhKNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwyeHBZaTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VFdGdVlXZGxjaTVxY3lKZExDSnVZVzFsY3lJNld5SlVhV05yUlc1MGNua2lMQ0pqYjI1MFpYaDBJaXdpYkdsemRHVnVaWElpTENKallXeHNZbUZqYXlJc0luQnlhVzl5YVhSNUlpd2laWGhsWTNWMGFXOXVRMjkxYm5RaUxDSndjbTkwYjNSNWNHVWlMQ0prYVhOd2IzTmxJaXdpYzNSaFkydEVaV0oxWnlJc0ltTnZibk52YkdVaUxDSnNiMmNpTENKT1lVNGlMQ0psZUdWamRYUmxJaXdpWVdSa0lpd2lTRWxIU0NJc0lrNVBVazFCVENJc0lreFBWeUlzSW1Gc2JHOTNaV1JVYVdOclEyOTFiblFpTENKa1pXSjFaeUlzSW5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJaXdpY0hKcGIzSnBkSGxGYm5SeWFXVnpJaXdpZDJGcGRFVnVkSEpwWlhNaUxDSjBhV05yUTI5MWJuUWlMQ0pwYzBWNFpXTjFkR2x1WnlJc0ltOXVWR2xqYXlJc0ltVjRaV04xZEdWUWNtbHZjbWwwZVVWdWRISnBaWE1pTENKdGIzWmxWMkZwZEdsdVowVnVkSEpwWlhOR2IzSkZlR1ZqZFhScGIyNGlMQ0poY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTSXNJbk4wYjNBaUxDSjNZWEp1SWl3aWNtVnpaWFFpTENKMGFXTnJUV0Z1WVdkbGNpSXNJbVZ1ZEhKcFpYTkRiM1Z1ZENJc0lteGxibWQwYUNJc0ltbHVaR1Y0SWl3aWRHbGphMFZ1ZEhKNUlpd2lkR2xqYTBWdWRISnBaWE1pTENKd2RYTm9JaXdpWlhobFkzVjBaVlJwWTJ0RmJuUnlhV1Z6SWl3aWFTSXNJbU5oYkd3aUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheUlzSW5Ob2IzVnNaRU52Ym5ScGJuVmxJaXdpZDJsdVpHOTNJaXdpY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElpd2lWR2xqYTAxaGJtRm5aWElpTENKemRHRnlkQ0lzSW1OaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPenRCUXpkRVFUczdPenM3T3pzN1FVRkZRVHRKUVVOeFFrRXNVenRCUVVWd1FqczdPenRCUVVsQkxHMUNRVUZaUXl4UFFVRmFMRVZCUVhGQ1F5eFJRVUZ5UWl4RlFVTkJPMEZCUVVFc1MwRkVLMEpETEZGQlF5OUNMSFZGUVVRd1F5eEpRVU14UXp0QlFVRkJMRXRCUkdkRVF5eFJRVU5vUkN4MVJVRkVNa1FzUTBGRE0wUTdPMEZCUVVFN08wRkJRME1zVFVGQlMwZ3NUMEZCVEN4SFFVRmxRU3hQUVVGbU8wRkJRMEVzVFVGQlMwTXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBKQkxGRkJRV2hDTzBGQlEwRXNUVUZCUzBNc1kwRkJUQ3hIUVVGelFpeERRVUYwUWp0QlFVTkJMRU03TzBGQlNVWTdPMnRDUVdwQ2NVSk1MRk03UVVGdFFuSkNRU3hWUVVGVlRTeFRRVUZXTEVOQlFXOUNReXhQUVVGd1FpeEhRVUU0UWl4WlFVRlZPMEZCUTNaRFVDeFhRVUZWVVN4VlFVRldMRWxCUVhkQ1F5eFJRVUZSUXl4SFFVRlNMRU5CUVZrc2IwSkJRVm9zUlVGQmEwTXNTVUZCYkVNc1EwRkJlRUk3UVVGRFFTeE5RVUZMVkN4UFFVRk1MRWRCUVdVc1NVRkJaanRCUVVOQkxFMUJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeE5RVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRTFCUVV0RExHTkJRVXdzUjBGQmMwSk5MRWRCUVhSQ08wRkJRMEVzUTBGUVJEczdRVUZUUVZnc1ZVRkJWVTBzVTBGQlZpeERRVUZ2UWswc1QwRkJjRUlzUjBGQk9FSXNXVUZCVlR0QlFVTjJRMW9zVjBGQlZWRXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMR1ZCUVZvc1JVRkJOa0lzU1VGQk4wSXNRMEZCZUVJN1FVRkRRU3h0UWtGQlVVY3NSMEZCVWl4RFFVRlpMRWxCUVZvN1FVRkRRU3hEUVVoRU96dEJRVTFCWWl4VlFVRlZZeXhKUVVGV0xFZEJRV2xDTEVOQlFXcENPMEZCUTBGa0xGVkJRVlZsTEUxQlFWWXNSMEZCYlVJc1EwRkJia0k3UVVGRFFXWXNWVUZCVldkQ0xFZEJRVllzUjBGQlowSXNRMEZCYUVJN08wRkJSVUZvUWl4VlFVRlZhVUlzWjBKQlFWWXNSMEZCTmtJc1IwRkJOMEk3UVVGRFFXcENMRlZCUVZWclFpeExRVUZXTEVkQlFXdENMRXRCUVd4Q08wRkJRMEZzUWl4VlFVRlZVU3hWUVVGV0xFZEJRWFZDTEV0QlFYWkNMRU03T3pzN096czdPenM3T3pzN1FVTXpRMEU3T3pzN096czdPenM3T3pzN096czdPenM3UVVOQlFUczdPenM3T3pzN1FVRkRRU3hKUVVGSlZ5d3dRa0ZCTUVJc1EwRkJPVUlzUXl4RFFVRm5RenM3UVVGRmFFTTdRVUZEUVN4SlFVRkpReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUTBGQmRFSTdRVUZEUVN4SlFVRkpReXhqUVVGakxFbEJRV3hDT3p0QlFVVkJMRWxCUVVsRExGbEJRVmtzUTBGQmFFSTdRVUZEUVN4SlFVRkpReXhqUVVGakxFdEJRV3hDT3p0QlFVVkJMRk5CUVZORExFMUJRVlFzUjBGQmFVSTdRVUZEYUVKR08wRkJRMEVzUzBGQlJ5eHZRa0ZCVlVvc1MwRkJZaXhGUVVGdFFqdEJRVU5zUWxRc1ZVRkJVVU1zUjBGQlVpeERRVUZaTEdOQlFWb3NSVUZCTkVKWkxGTkJRVFZDTzBGQlEwRTdRVUZEUkN4TFFVRkhRU3haUVVGWkxHOUNRVUZWVEN4blFrRkJla0lzUlVGQk1FTTdRVUZEZWtOUk8wRkJRMEZETzBGQlEwRXNUVUZCUjBNc2VVSkJRVWdzUlVGQk5rSTdRVUZETlVKRE8wRkJRMEVzVlVGQlR5eExRVUZRTzBGQlEwRTdRVUZEUkN4RlFWQkVMRTFCVDA4N1FVRkRUbTVDTEZWQlFWRnZRaXhKUVVGU0xFTkJRV0VzYTBSQlFXSXNSVUZCYVVVc2IwSkJRVlZhTEdkQ1FVRXpSVHRCUVVOQkxFMUJRVWNzYjBKQlFWVkRMRXRCUVdJc1JVRkJiVUk3UVVGRGJFSlVMRmRCUVZGRExFZEJRVklzUTBGQldTeFhRVUZhTEVWQlFYbENWU3huUWtGQlowSXNRMEZCYUVJc1EwRkJla0lzUlVGQk5FTkJMR2RDUVVGblFpeERRVUZvUWl4RFFVRTFReXhGUVVFclJFRXNaMEpCUVdkQ0xFTkJRV2hDTEVOQlFTOUVMRVZCUVd0R1F5eFhRVUZzUmp0QlFVTkJPMEZCUTBSVE8wRkJRMEVzVTBGQlR5eExRVUZRTzBGQlEwRTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkZRVHM3UVVGSFJDeFRRVUZUUml4SlFVRlVMRWRCUVdVN1FVRkRaRTRzWVVGQldTeERRVUZhTzBGQlEwRkRMR1ZCUVdNc1MwRkJaRHRCUVVOQlVTeGhRVUZaU0N4SlFVRmFPMEZCUTBFN08wRkJSVVFzVTBGQlUwVXNTMEZCVkN4SFFVRm5RanRCUVVObVJqdEJRVU5CVWl4dFFrRkJhMElzUTBGQlF5eEpRVUZFTEVWQlFVOHNTVUZCVUN4RlFVRmhMRWxCUVdJc1EwRkJiRUk3UVVGRFFVTXNaVUZCWXl4SlFVRmtPMEZCUTBFN08wRkJSMFFzVTBGQlUwc3NPRUpCUVZRc1IwRkJlVU03UVVGRGVFTXNTMEZCVFUwc1pVRkJaVmdzWTBGQlpVRXNXVUZCV1Zrc1RVRkJNMElzUjBGQmIwTXNRMEZCZWtRN1FVRkRRU3hMUVVGSFdpeGxRVUZsVnl4bFFVRmxMRU5CUVdwRExFVkJRVzlETzBGQlEyNURMRTlCUVVrc1NVRkJTVVVzVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVVWXNXVUZCTlVJc1JVRkJNRU5GTEU5QlFURkRMRVZCUVd0RU8wRkJRMnBFTEU5QlFVbERMRmxCUVZsa0xGbEJRVmxoTEV0QlFWb3NRMEZCYUVJN1FVRkVhVVFzVDBGRmVrTTVRaXhSUVVaNVF5eEhRVVUxUWl0Q0xGTkJSalJDTEVOQlJYcERMMElzVVVGR2VVTTdPMEZCUjJwRUxFOUJRVWNzUTBGQlEyZENMR2RDUVVGblFtaENMRkZCUVdoQ0xFTkJRVW9zUlVGQk9FSTdRVUZETjBKblFpeHZRa0ZCWjBKb1FpeFJRVUZvUWl4SlFVRTBRaXhGUVVFMVFqdEJRVU5CTzBGQlEwUXNUMEZCVFdkRExHTkJRV05vUWl4blFrRkJaMEpvUWl4UlFVRm9RaXhEUVVGd1FqdEJRVU5CWjBNc1pVRkJXVU1zU1VGQldpeERRVUZwUWtZc1UwRkJha0k3UVVGRFFUdEJRVU5FTzBGQlEwUmtMR1ZCUVdNc1NVRkJaRHRCUVVOQk96dEJRVVZFTEZOQlFWTkpMSE5DUVVGVUxFZEJRV2xETzBGQlEyaERSaXhsUVVGakxFbEJRV1E3UVVGRFFTeE5RVUZKTEVsQlFVbFhMRkZCUVZFc1EwRkJhRUlzUlVGQmIwSkJMRkZCUVZGa0xHZENRVUZuUW1Fc1RVRkJOVU1zUlVGQmIwUkRMRTlCUVhCRUxFVkJRVFJFTzBGQlF6TkVMRTFCUVVsRkxHTkJRV05vUWl4blFrRkJaMEpqTEV0QlFXaENMRU5CUVd4Q08wRkJRMEVzVFVGQlIwVXNaVUZCWlVFc1dVRkJXVWdzVFVGQldpeEhRVUZ4UWl4RFFVRjJReXhGUVVFd1F6dEJRVU42UTBzc2MwSkJRVzFDUml4WFFVRnVRanRCUVVOQk8wRkJRMEZvUWl4dFFrRkJaMEpqTEV0QlFXaENMRWxCUVhsQ0xFbEJRWHBDTzBGQlEwRTdRVUZEUkR0QlFVTkVXQ3hsUVVGakxFdEJRV1E3UVVGRFFUczdRVUZGUkN4VFFVRlRaU3hyUWtGQlZDeERRVUUwUWtZc1YwRkJOVUlzUlVGQmQwTTdRVUZEZGtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZKTEVsQlFVbEhMRWxCUVVrc1EwRkJXaXhGUVVGbFFTeEpRVUZKU0N4WlFVRlpTQ3hOUVVFdlFpeEZRVUYxUTAwc1IwRkJka01zUlVGQk1rTTdRVUZETVVNc1RVRkJUVW9zV1VGQldVTXNXVUZCV1Vjc1EwRkJXaXhEUVVGc1FqdEJRVU5CTEhOQ1FVRlZMMElzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhkRFFVRmFMRVZCUVhWRU5rSXNRMEZCZGtRc1JVRkJNRVJLTEZOQlFURkVMRU5CUVhoQ08wRkJRMEZCTEZsQlFWVnFReXhSUVVGV0xFTkJRVzFDYzBNc1NVRkJia0lzUTBGQmQwSk1MRlZCUVZWc1F5eFBRVUZXTEVsQlFYRkNhME1zVlVGQlZXcERMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCTjBNN08wRkJSVUVzVFVGQlNXbERMRlZCUVZWb1F5eFJRVUZrTEVWQlFYZENPMEZCUTNaQ1owTXNZVUZCVldoRExGRkJRVllzUTBGQmJVSnhReXhKUVVGdVFpeERRVUYzUWt3c1ZVRkJWV2hETEZGQlFWWXNRMEZCYlVJc1RVRkJia0lzUTBGQmVFSTdRVUZEUVR0QlFVTkVaME1zV1VGQlZUbENMR05CUVZZN1FVRkRRU3hOUVVGSExHOUNRVUZWWVN4TFFVRldMRWxCUVcxQ2FVSXNWVUZCVlRsQ0xHTkJRVllzUjBGQk1rSXNRMEZCYWtRc1JVRkJiVVE3UVVGRGJFUkpMRmRCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCV2l4RlFVRjVRM2xDTEZOQlFYcERPMEZCUTBFN1FVRkRSRHRCUVVORU96dEJRVVZFTEZOQlFWTlNMSFZDUVVGVUxFZEJRV3RETzBGQlEycERMRTFCUVVrc1NVRkJTVThzVVVGQlVTeERRVUZvUWl4RlFVRnZRa0VzVVVGQlVXUXNaMEpCUVdkQ1lTeE5RVUUxUXl4RlFVRnZSRU1zVDBGQmNFUXNSVUZCTkVRN1FVRkRNMFFzVFVGQlNVVXNZMEZCWTJoQ0xHZENRVUZuUW1Nc1MwRkJhRUlzUTBGQmJFSTdRVUZEUVN4TlFVRkhSU3hsUVVGbFFTeFpRVUZaU0N4TlFVRmFMRWRCUVhGQ0xFTkJRWFpETEVWQlFUQkRPMEZCUTNwRExGVkJRVThzUzBGQlVEdEJRVU5CTzBGQlEwUTdRVUZEUkN4UlFVRlBMRWxCUVZBN1FVRkRRVHM3UVVGRlJDeFRRVUZUVVN3MlFrRkJWQ3hIUVVGM1F6dEJRVU4yUXl4TFFVRk5ReXhwUWtGQmFVSnNRaXhSUVVGMlFqdEJRVU5CTEV0QlFVZHJRaXhqUVVGSUxFVkJRV3RDTzBGQlEycENka0lzTkVKQlFUQkNkMElzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pJTERaQ1FVRTNRaXhEUVVFeFFqdEJRVU5CTzBGQlEwUTdPMGxCUlV0SkxGY3NSMEZEVEN4MVFrRkJZVHRCUVVGQk8wRkJRMW9zUXpzN1FVRkhSa0VzV1VGQldYWkRMRk5CUVZvc1EwRkJjMEpQTEVkQlFYUkNMRWRCUVRSQ0xGVkJRVlZ6UWl4VFFVRldMRVZCUVhGQ08wRkJRMmhFTEhGQ1FVRlZNMElzVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhGQ1FVRmFMRVZCUVc5RGVVSXNVMEZCY0VNc1EwRkJlRUk3UVVGRFFTeExRVUZIVWl4NVFrRkJTQ3hGUVVFMlFqdEJRVU0xUWl4UFFVRkxiVUlzUzBGQlREdEJRVU5CTzBGQlEwUXNTMEZCUjNaQ0xGZEJRVWdzUlVGQlpUdEJRVU5rTEhOQ1FVRlZaaXhWUVVGV0xFbEJRWGRDUXl4UlFVRlJReXhIUVVGU0xFTkJRVmtzTWtKQlFWb3NRMEZCZUVJN1FVRkRRU3hOUVVGSExFTkJRVU5YTEZkQlFVb3NSVUZCWjBJN1FVRkRaa0VzYVVKQlFXTXNSVUZCWkR0QlFVTkJPMEZCUTBSQkxHTkJRVmxuUWl4SlFVRmFMRU5CUVdsQ1JpeFRRVUZxUWp0QlFVTkJMRVZCVGtRc1RVRk5UenRCUVVGQkxFMUJRMFV2UWl4UlFVUkdMRWRCUTJVclFpeFRRVVJtTEVOQlEwVXZRaXhSUVVSR096dEJRVVZPTEUxQlFVY3NRMEZCUTJkQ0xHZENRVUZuUW1oQ0xGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMElzZFVKQlFWVkpMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQmVVSk9MRkZCUVhwQ0xFZEJRV3RETEdOQlFUbERMRU5CUVhoQ08wRkJRMEZuUWl4dFFrRkJaMEpvUWl4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc2MwSkJRVlZKTEZWQlFWWXNTVUZCZDBKRExGRkJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJlVUpPTEZGQlFYcENMRWRCUVd0RExGTkJRVGxETEVOQlFYaENPMEZCUTBFc1RVRkJUV2RETEdOQlFXTm9RaXhuUWtGQlowSm9RaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJaME1zWTBGQldVTXNTVUZCV2l4RFFVRnBRa1lzVTBGQmFrSTdRVUZEUVR0QlFVVkVMRU5CZEVKRU96dEJRWGxDUVR0QlFVTkJWU3haUVVGWmRrTXNVMEZCV2l4RFFVRnpRbmRETEV0QlFYUkNMRWRCUVRoQ0xGbEJRVms3UVVGRGVrTXNTMEZCUjBnc1RVRkJTQ3hGUVVGVk8wRkJRMVE3UVVGRFFYaENMRFJDUVVFd1FuZENMRTlCUVU5RExIRkNRVUZRTEVOQlFUWkNTQ3cyUWtGQk4wSXNRMEZCTVVJN1FVRkRRU3h6UWtGQlZXcERMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3gxUWtGQldpeEZRVUZ4UTFNc2RVSkJRWEpETEVOQlFYaENPMEZCUTBFN1FVRkRSQ3hEUVU1RU96dEJRVk5CTUVJc1dVRkJXWFpETEZOQlFWb3NRMEZCYzBKelFpeEpRVUYwUWl4SFFVRTJRaXhaUVVGWk8wRkJRM2hETEV0QlFVZGxMRTFCUVVnc1JVRkJWVHRCUVVOVUxITkNRVUZWYmtNc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxITkNRVUZhTEVWQlFXOURVeXgxUWtGQmNFTXNRMEZCZUVJN1FVRkRRWGRDTEZOQlFVOUpMRzlDUVVGUUxFTkJRVFJDTlVJc2RVSkJRVFZDTzBGQlEwRTdRVUZEUkN4RFFVeEVPenRCUVU5QkxFbEJRVTFaTEdOQlFXTXNTVUZCU1dNc1YwRkJTaXhGUVVGd1FqczdRVUZGUVR0clFrRkRaV1FzVnlJc0ltWnBiR1VpT2lKc2FXSXZkR2xqYTJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvWENKMGFXTnJaWEpjSWl3Z1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpZEdsamEyVnlYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJblJwWTJ0bGNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJRnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHRjYmlCY2RGeDBYSFJjZEdOdmJtWnBaM1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFhIUmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJRngwWEhSY2RGeDBaMlYwT2lCblpYUjBaWEpjYmlCY2RGeDBYSFI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXhLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTNPVEU0TURkbU5EazNORFpsT0RaaFpqUTRNeUlzSW1sdGNHOXlkQ0J0WVc1aFoyVnlJR1p5YjIwZ0p5NHZUV0Z1WVdkbGNpYzdYRzVjYmk4dklIUnZSRzg2SUhOMWNIQnZjblFnWW05MGFDQmpZV3hzWW1GamF5QmhibVFnY0hKdmJXbHpaVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHbGphMFZ1ZEhKNVhHNTdYRzVjZEM4cUtseHVYSFFnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnWTI5dWRHVjRkQ0F0SUZSb1pTQmNJblJvYVhOY0lpQmhjbWQxYldWdWRDQm1iM0lnZEdobElHeHBjM1JsYm1WeUlHWjFibU4wYVc5dUxseHVYSFFnS2lCQWNHRnlZVzBnZTJaMWJtTjBhVzl1ZlNCc2FYTjBaVzVsY2k1Y2JseDBJQ292WEc1Y2RHTnZibk4wY25WamRHOXlLR052Ym5SbGVIUXNJR3hwYzNSbGJtVnlMQ0JqWVd4c1ltRmpheUE5SUc1MWJHd3NJSEJ5YVc5eWFYUjVJRDBnTUNsY2JseDBlMXh1WEhSY2RIUm9hWE11WTI5dWRHVjRkQ0E5SUdOdmJuUmxlSFE3WEc1Y2RGeDBkR2hwY3k1c2FYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVYSFJjZEhSb2FYTXVZMkZzYkdKaFkyc2dQU0JqWVd4c1ltRmphenRjYmx4MFhIUjBhR2x6TG5CeWFXOXlhWFI1SUQwZ2NISnBiM0pwZEhrN1hHNWNkRngwZEdocGN5NWxlR1ZqZFhScGIyNURiM1Z1ZENBOUlEQTdYRzVjZEgxY2JseHVmVnh1WEc0dktpMHRMUzBnVUhWaWJHbGpmRkJ5YjNSdmRIbHdaU0JOWlhSb2IyUnpJQzB0TFNvdlhHNWNibFJwWTJ0RmJuUnllUzV3Y205MGIzUjVjR1V1WkdsemNHOXpaU0E5SUdaMWJtTjBhVzl1S0NsN1hHNWNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwVnVkSEo1SUdScGMzQnZjMlU2WENJc0lIUm9hWE1wTzF4dVhIUjBhR2x6TG1OdmJuUmxlSFFnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbXhwYzNSbGJtVnlJRDBnYm5Wc2JEdGNibHgwZEdocGN5NWpZV3hzWW1GamF5QTlJRzUxYkd3N1hHNWNkSFJvYVhNdWNISnBiM0pwZEhrZ1BTQnVkV3hzTzF4dVhIUjBhR2x6TG1WNFpXTjFkR2x2YmtOdmRXNTBJRDBnVG1GT08xeHVmVHRjYmx4dVZHbGphMFZ1ZEhKNUxuQnliM1J2ZEhsd1pTNWxlR1ZqZFhSbElEMGdablZ1WTNScGIyNG9LWHRjYmx4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSnRZVzVoWjJWeUxtRmtaRG9nWENJc0lIUm9hWE1wTzF4dVhIUnRZVzVoWjJWeUxtRmtaQ2gwYUdsektUdGNibjA3WEc1Y2JseHVWR2xqYTBWdWRISjVMa2hKUjBnZ1BTQXdPMXh1VkdsamEwVnVkSEo1TGs1UFVrMUJUQ0E5SURFN1hHNVVhV05yUlc1MGNua3VURTlYSUQwZ01qdGNibHh1VkdsamEwVnVkSEo1TG1Gc2JHOTNaV1JVYVdOclEyOTFiblFnUFNBeE1EQTdYRzVVYVdOclJXNTBjbmt1WkdWaWRXY2dQU0JtWVd4elpUdGNibFJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUQwZ1ptRnNjMlU3WEc1Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTlzYVdJdlZHbGphMFZ1ZEhKNUxtcHpJaXdpYVcxd2IzSjBJRlJwWTJ0bGNpQm1jbTl0SUNjdUwxUnBZMnRGYm5SeWVTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJwWTJ0bGNqdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwyeHBZaTlwYm1SbGVDNXFjeUlzSW1sdGNHOXlkQ0JVYVdOclJXNTBjbmtnWm5KdmJTQW5MaTlVYVdOclJXNTBjbmtuTzF4dWJHVjBJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdNRHN2THlCbWIzSWdWMmx1Wkc5M2N5QkZiblpjYmx4dUx5OWJNQzFJU1VkSUxDQXhMVTVQVWsxQlRDd2dNaTFNVDFkZFhHNXNaWFFnY0hKcGIzSnBkSGxGYm5SeWFXVnpJRDBnVzI1MWJHd3NJRzUxYkd3c0lHNTFiR3hkTzF4dWJHVjBJSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYmx4dWJHVjBJSFJwWTJ0RGIzVnVkQ0E5SURBN1hHNXNaWFFnYVhORmVHVmpkWFJwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVablZ1WTNScGIyNGdiMjVVYVdOcktDbDdYRzVjZEhScFkydERiM1Z1ZENzck8xeHVYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NwZTF4dVhIUmNkR052Ym5OdmJHVXViRzluS0Z3aVZHbGpheUJqYjNWdWREb2dYQ0lzSUhScFkydERiM1Z1ZENrN1hHNWNkSDFjYmx4MGFXWW9kR2xqYTBOdmRXNTBJRHdnVkdsamEwVnVkSEo1TG1Gc2JHOTNaV1JVYVdOclEyOTFiblFwZTF4dVhIUmNkR1Y0WldOMWRHVlFjbWx2Y21sMGVVVnVkSEpwWlhNb0tUdGNibHgwWEhSdGIzWmxWMkZwZEdsdVowVnVkSEpwWlhOR2IzSkZlR1ZqZFhScGIyNG9LVHRjYmx4MFhIUnBaaWhoY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTZ3BLWHRjYmx4MFhIUmNkSE4wYjNBb0tUdGNibHgwWEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MFhIUjlYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzI5c1pTNTNZWEp1S0Z3aVFXNXBiV0YwYVc5dUlHWnlZVzFsSUd4dmIzQWdaWGhsWTNWMFpXUWdkRzhnYVhSeklITmxkQ0JzYVcxcGREb2dYQ0lzSUZScFkydEZiblJ5ZVM1aGJHeHZkMlZrVkdsamEwTnZkVzUwS1R0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NwZTF4dVhIUmNkRngwWTI5dWMyOXNaUzVzYjJjb1hDSkZiblJ5YVdWek9pQmNJaXdnY0hKcGIzSnBkSGxGYm5SeWFXVnpXekJkTEhCeWFXOXlhWFI1Ulc1MGNtbGxjMXN4WFN4d2NtbHZjbWwwZVVWdWRISnBaWE5iTWwwc2QyRnBkRVZ1ZEhKcFpYTXBPMXh1WEhSY2RIMWNibHgwWEhSeVpYTmxkQ2dwTzF4dVhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBmVnh1WEhSeVpYUjFjbTRnZEhKMVpUdGNibHh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJSE4wYjNBb0tYdGNibHgwZEdsamEwTnZkVzUwSUQwZ01EdGNibHgwYVhORmVHVmpkWFJwYm1jZ1BTQm1ZV3h6WlR0Y2JseDBkR2xqYTAxaGJtRm5aWEl1YzNSdmNDZ3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWE5sZENncGUxeHVYSFJ6ZEc5d0tDazdYRzVjZEhCeWFXOXlhWFI1Ulc1MGNtbGxjeUE5SUZ0dWRXeHNMQ0J1ZFd4c0xDQnVkV3hzWFR0Y2JseDBkMkZwZEVWdWRISnBaWE1nUFNCdWRXeHNPMXh1ZlZ4dVhHNWNibVoxYm1OMGFXOXVJRzF2ZG1WWFlXbDBhVzVuUlc1MGNtbGxjMFp2Y2tWNFpXTjFkR2x2YmlncGUxeHVYSFJqYjI1emRDQmxiblJ5YVdWelEyOTFiblFnUFNCM1lXbDBSVzUwY21sbGN5QS9JQ0IzWVdsMFJXNTBjbWxsY3k1c1pXNW5kR2dnT2lBd08xeHVYSFJwWmloM1lXbDBSVzUwY21sbGN5QW1KaUJsYm5SeWFXVnpRMjkxYm5RZ1BpQXdLU0I3WEc1Y2RGeDBabTl5S0d4bGRDQnBibVJsZUNBOUlEQWdPeUJwYm1SbGVDQThJR1Z1ZEhKcFpYTkRiM1Z1ZERzZ2FXNWtaWGdyS3lsN1hHNWNkRngwWEhSc1pYUWdkR2xqYTBWdWRISjVJRDBnZDJGcGRFVnVkSEpwWlhOYmFXNWtaWGhkTzF4dVhIUmNkRngwWTI5dWMzUWdleUJ3Y21sdmNtbDBlU0I5SUQwZ2RHbGphMFZ1ZEhKNU8xeHVYSFJjZEZ4MGFXWW9JWEJ5YVc5eWFYUjVSVzUwY21sbGMxdHdjbWx2Y21sMGVWMHBlMXh1WEhSY2RGeDBYSFJ3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRJRDBnVzEwN1hHNWNkRngwWEhSOVhHNWNkRngwWEhSamIyNXpkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwN1hHNWNkRngwWEhSMGFXTnJSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkRngwZlZ4dVhIUjlYRzVjZEhkaGFYUkZiblJ5YVdWeklEMGdiblZzYkR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWlhobFkzVjBaVkJ5YVc5eWFYUjVSVzUwY21sbGN5Z3BlMXh1WEhScGMwVjRaV04xZEdsdVp5QTlJSFJ5ZFdVN1hHNWNkR1p2Y2loc1pYUWdhVzVrWlhnZ1BTQXdJRHNnYVc1a1pYZ2dQQ0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTXViR1Z1WjNSb095QnBibVJsZUNzcktYdGNibHgwWEhSc1pYUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iYVc1a1pYaGRPMXh1WEhSY2RHbG1LSFJwWTJ0RmJuUnlhV1Z6SUNZbUlIUnBZMnRGYm5SeWFXVnpMbXhsYm1kMGFDQStJREFwSUh0Y2JseDBYSFJjZEdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5azdYRzVjZEZ4MFhIUXZMME5zWldGeUlIUm9aVzBnYjI1alpTQmxlR1ZqZFhSbFpGeHVYSFJjZEZ4MGNISnBiM0pwZEhsRmJuUnlhV1Z6VzJsdVpHVjRYU0E5SUc1MWJHdzdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RHbHpSWGhsWTNWMGFXNW5JRDBnWm1Gc2MyVTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVjRaV04xZEdWVWFXTnJSVzUwY21sbGN5aDBhV05yUlc1MGNtbGxjeWw3WEc1Y2RDOHZJR2x0Y0c5eWRHRnVkQ0IwYnlCMWMyVWdabTl5TFd4dmIzQmNibHgwTHk4Z2RHbGphMFZ1ZEhKcFpYTWdaM0p2ZDNNZ1pIbHVZVzFwWTJGc2JIa2dZbmtnYjI1bElHOW1JR2wwY3lCbGJuUnllVnh1WEhRdkx5Qm1iM0lnWlhoaGJYQnNaVG9nYkdWMElITmhlU0IzWlNCb1lYWmxJRzl1WlNCbGJuUnllU3dnWVc1a0lHVjRaV04xZEdsdVp5QjBhR0YwSUdWdWRISjVJRzFwWjJoMElHRmtaSE1nWVc1dmRHaGxjaUJsYm5SeWVWeHVYSFF2THlCM2FYUm9JRzFoY0NCbWRXNWpkR2x2YmlCM1pTQmpZVzUwSUdWNFpXTjFkR1VnWkhsdVlXMXBZMkZzYkhrZ1ozSnZkMmx1WnlCbGJuUnlhV1Z6TGx4dVhIUm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dkR2xqYTBWdWRISnBaWE11YkdWdVozUm9PeUJwS3lzcGUxeHVYSFJjZEdOdmJuTjBJSFJwWTJ0RmJuUnllU0E5SUhScFkydEZiblJ5YVdWelcybGRPMXh1WEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3lBNklHWnZjaUJjSWlBc0lHa3NJSFJwWTJ0RmJuUnllU2s3WEc1Y2RGeDBkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlMbU5oYkd3b2RHbGphMFZ1ZEhKNUxtTnZiblJsZUhRZ2ZId2dkR2xqYTBWdWRISjVMbXhwYzNSbGJtVnlXeWQwYUdsekoxMHBPMXh1WEc1Y2RGeDBhV1lnS0hScFkydEZiblJ5ZVM1allXeHNZbUZqYXlrZ2UxeHVYSFJjZEZ4MGRHbGphMFZ1ZEhKNUxtTmhiR3hpWVdOckxtTmhiR3dvZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yV3lkMGFHbHpKMTBwTzF4dVhIUmNkSDFjYmx4MFhIUjBhV05yUlc1MGNua3VaWGhsWTNWMGFXOXVRMjkxYm5Rckt6dGNibHgwWEhScFppaFVhV05yUlc1MGNua3VaR1ZpZFdjZ0ppWWdkR2xqYTBWdWRISjVMbVY0WldOMWRHbHZia052ZFc1MElENGdNU2w3WEc1Y2RGeDBYSFJqYjI1emIyeGxMbXh2WnloY0lrVjRaV04xZEdWa0lHMXZjbVVnZEdoaGJpQnZibU5sT2lCY0lpd2dkR2xqYTBWdWRISjVLVHRjYmx4MFhIUjlYRzVjZEgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWVhKbFVISnBiM0pwZEhsRmJuUnlhV1Z6Ulcxd2RIa29LWHRjYmx4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElIQnlhVzl5YVhSNVJXNTBjbWxsY3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwZTF4dVhIUmNkR3hsZENCMGFXTnJSVzUwY21sbGN5QTlJSEJ5YVc5eWFYUjVSVzUwY21sbGMxdHBibVJsZUYwN1hHNWNkRngwYVdZb2RHbGphMFZ1ZEhKcFpYTWdKaVlnZEdsamEwVnVkSEpwWlhNdWJHVnVaM1JvSUQ0Z01Da2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sWEc1Y2RGeDBmVnh1WEhSOVhHNWNkSEpsZEhWeWJpQjBjblZsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlncGUxeHVYSFJqYjI1emRDQnphRzkxYkdSRGIyNTBhVzUxWlNBOUlHOXVWR2xqYXlncE8xeHVYSFJwWmloemFHOTFiR1JEYjI1MGFXNTFaU2w3WEc1Y2RGeDBjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRZ1BTQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVOaGJHeGlZV05yS1R0Y2JseDBmVnh1ZlZ4dVhHNWpiR0Z6Y3lCVWFXTnJUV0Z1WVdkbGNpQjdYRzVjZEdOdmJuTjBjblZqZEc5eUtDbDdYRzVjZEgxY2JuMWNibHh1VkdsamEwMWhibUZuWlhJdWNISnZkRzkwZVhCbExtRmtaQ0E5SUdaMWJtTjBhVzl1SUNoMGFXTnJSVzUwY25rcElIdGNibHgwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2dZV1JrSURvZ1hDSWdMQ0IwYVdOclJXNTBjbmtwTzF4dVhIUnBaaWhoY21WUWNtbHZjbWwwZVVWdWRISnBaWE5GYlhCMGVTZ3BLWHRjYmx4MFhIUjBhR2x6TG5OMFlYSjBLQ2xjYmx4MGZWeHVYSFJwWmlocGMwVjRaV04xZEdsdVp5bDdYRzVjZEZ4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nWVdSa0lEb2dJSGRoYVhRZ1hDSXBPMXh1WEhSY2RHbG1LQ0YzWVdsMFJXNTBjbWxsY3lsN1hHNWNkRngwWEhSM1lXbDBSVzUwY21sbGN5QTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUjNZV2wwUlc1MGNtbGxjeTV3ZFhOb0tIUnBZMnRGYm5SeWVTazdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkR2xtS0NGd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkS1h0Y2JseDBYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJR0ZrWkNBNklHbHVJRndpSzNCeWFXOXlhWFI1SzF3aUlEb2dibVYzSUVGeWNtRjVYQ0lwTzF4dVhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXM0J5YVc5eWFYUjVYU0E5SUZ0ZE8xeHVYSFJjZEgxY2JseDBYSFJVYVdOclJXNTBjbmt1YzNSaFkydEVaV0oxWnlBbUppQmpiMjV6YjJ4bExteHZaeWhjSWxScFkydE5ZVzVoWjJWeU9pQmhaR1FnT2lCcGJpQmNJaXR3Y21sdmNtbDBlU3RjSWlBNklIQjFjMmhjSWlrN1hHNWNkRngwWTI5dWMzUWdkR2xqYTBWdWRISnBaWE1nUFNCd2NtbHZjbWwwZVVWdWRISnBaWE5iY0hKcGIzSnBkSGxkTzF4dVhIUmNkSFJwWTJ0RmJuUnlhV1Z6TG5CMWMyZ29kR2xqYTBWdWRISjVLVHRjYmx4MGZWeHVYRzU5TzF4dVhHNWNiaTh2SUZSdlpHODZJRk4xY0hCdmNuUWdabTl5SUU1dlpHVktVeUJjYmxScFkydE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNXpkR0Z5ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGFXWW9kMmx1Wkc5M0tYdGNibHgwWEhRdkx5QjNhV3hzSUhKbFkyVnBkbVZ6SUhScGJXVnpkR0Z0Y0NCaGN5QmhjbWQxYldWdWRGeHVYSFJjZEhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpVbGtJRDBnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5azdYRzVjZEZ4MFZHbGphMFZ1ZEhKNUxuTjBZV05yUkdWaWRXY2dKaVlnWTI5dWMyOXNaUzVzYjJjb1hDSlVhV05yVFdGdVlXZGxjam9nYzNSaGNuUWdPaUJjSWl3Z2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FwTzF4dVhIUjlYRzU5TzF4dVhHNWNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHOXdJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJwWmloM2FXNWtiM2NwZTF4dVhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklITjBiM0FnT2lCY0lpd2djbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsU1dRcE8xeHVYSFJjZEhkcGJtUnZkeTVqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNoeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkpaQ2s3WEc1Y2RIMWNibjA3WEc1Y2JtTnZibk4wSUhScFkydE5ZVzVoWjJWeUlEMGdibVYzSUZScFkydE5ZVzVoWjJWeUtDazdYRzVjYmk4dklITnBibWRzWlhSdmJrbHVjM1JoYm1GalpWeHVaWGh3YjNKMElHUmxabUYxYkhRZ2RHbGphMDFoYm1GblpYSTdYRzVjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOU5ZVzVoWjJWeUxtcHpJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3RpY2tlci9saWIvdGlja2VyLmpzIiwiaW1wb3J0IEVudHJ5IGZyb20gJy4vZW50cnknO1xuaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gbnVsbDsgLy8gY29ubmVjdG9yIGlzIHJlc3BvbnNpYmxlIGZvciBzZXF1ZW5jaW5nIGZ1bmN0aW9uc1xuXHQgICAgdGhpcy5lbmFibGVDb25uZWN0b3IgPSB0cnVlO1xuICAgIH1cbn1cblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgcmVzcG9uc2libGUgZm9yIGluaXRpYXRpbmcgdHJpZ2dlclxuLy8gaWYgY2FsbGVkIHVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGEgc3luY2VkIGVmZmVjdCBvZiBleGVjdXRpb25cbkZ1bmN0aW9ucy5wcm90b3R5cGUuZXhlY3V0ZVRyaWdnZXJlciA9IGZ1bmN0aW9uKGNvbnRleHQsIHRyaWdnZXJJbml0aWF0aW5nZnVuY3Rpb24sIHRyaWdnZXJlckNhbGxiYWNrKXtcblx0Y29uc3QgX2V4ZWN1dGVUcmlnZ2VyZXIgPSAoKT0+e1xuXHRcdGxldCB0aWNrZXI7XG5cdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHR0cmlnZ2VySW5pdGlhdGluZ2Z1bmN0aW9uLmNhbGwoY29udGV4dCk7XG5cdFx0XHRpZih0cmlnZ2VyZXJDYWxsYmFjayl7XG5cdFx0XHRcdGlmKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0XHRcdHRyaWdnZXJlckNhbGxiYWNrICYmIHRyaWdnZXJlckNhbGxiYWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGlja2VyID0gbmV3IFRpY2tlcih0aGlzLCB0cmlnZ2VyZXJDYWxsYmFjaywgbnVsbCwgMik7XG5cdFx0XHRcdFx0dGlja2VyLmV4ZWN1dGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIF9leGVjdXRlVHJpZ2dlcmVyLCB0cmlnZ2VyZXJDYWxsYmFjaywgMik7XG5cdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWN1dGVUcmlnZ2VyZXIoKTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihjb250ZXh0LCBmdW5jLCBleGVjdXRlTGF0ZXJJbk5leHRUaWNrID0gZmFsc2UsIHByaW9yaXR5ID0gMCwgbGlzdGVuZXJDYWxsYmFjayA9IG51bGwpe1xuXHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGFkZExpc3RlbmVyOiBcIiwgdGhpcyk7XG4gICAgbGV0IGVudHJ5O1xuICAgIGlmIChleGVjdXRlTGF0ZXJJbk5leHRUaWNrKXtcblxuXHQgICAgIGNvbnN0IHRpY2tlckNhbGxiYWNrID0gKCkgPT4ge1xuXHRcdCAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCAtIDE7XG5cdFx0ICAgIGlmKGxpc3RlbmVyQ2FsbGJhY2spe1xuXHRcdFx0ICAgIGxpc3RlbmVyQ2FsbGJhY2suY2FsbChsaXN0ZW5lckNhbGxiYWNrWyd0aGlzJ10pXG5cdFx0ICAgIH1cblx0XHQgICAgaWYoIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApe1xuXHRcdFx0ICAgIEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzRGlkRXhlY3V0ZTogXCIsIHRoaXMpO1xuXHRcdFx0ICAgIHRoaXMubGlzdGVuZXJzRGlkRXhlY3V0ZSgpO1xuXHRcdCAgICB9XG5cdCAgICB9O1xuICAgICAgICBjb25zdCB0aWNrZXIgPSBuZXcgVGlja2VyKGNvbnRleHQsIGZ1bmMsIHRpY2tlckNhbGxiYWNrLCBwcmlvcml0eSk7XG5cdCAgICBlbnRyeSA9IG5ldyBFbnRyeSh0aWNrZXIsIHRpY2tlci5leGVjdXRlKTtcblx0ICAgIEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogYWRkTGlzdGVuZXI6IGZyYW1lRW50cmllczogXCIsIGVudHJ5KTtcbiAgICAgICAgdGhpcy5mcmFtZUVudHJpZXMucHVzaChlbnRyeSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyeSA9IG5ldyBFbnRyeShjb250ZXh0LCBmdW5jKTtcblx0ICAgIEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogYWRkTGlzdGVuZXI6IGVudHJpZXM6IFwiLCBlbnRyeSk7XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICB9XG59O1xuXG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUubGlzdGVuZXJzV2lsbEV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnNob3VsZExpc3RlbmVyc0V4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IHNob3VsZExpc3RlbmVyc0V4ZWN1dGU6IFwiLCB0cnVlLCB0aGlzKTtcblx0cmV0dXJuIHRydWU7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpc3RlbmVyc0RpZEV4ZWN1dGUgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmVuYWJsZUNvbm5lY3RvciAmJiB0aGlzLmNvbm5lY3RvciAmJiB0aGlzLmNvbm5lY3RvcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsZnVuYywgY2FsbGJhY2sgPSBudWxsKXtcblx0bGV0IGVudHJ5LCBpO1xuXHRjb25zdCB7ZnJhbWVFbnRyaWVzLCBlbnRyaWVzfSA9IHRoaXM7XG5cblx0Zm9yKGkgPSAwOyBpIDwgZnJhbWVFbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0ICAgIGNvbnN0IGZyYW1lRW50cnkgPSAgZnJhbWVFbnRyaWVzW2ldO1xuXHRcdGVudHJ5ID0gZnJhbWVFbnRyeS5jb250ZXh0O1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdGZyYW1lRW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0fSBlbHNlIHsgLy8gZnJhbWUgdHJpZ2dlciBMaXN0ZW5lcnMgYXJlIHN0aWxsIHJ1bm5pbmdcblx0XHRcdFx0bGV0IHRpY2tlckVudHJ5O1xuXHRcdFx0XHRjb25zdCBkaXNwb3NlRG9uZU5vdGlmaWVyID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0XHRcdH0gZWxzZXtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0aWNrZXJFbnRyeSA9IG5ldyBUaWNrZXIoZnJhbWVFbnRyeSxmcmFtZUVudHJ5LmRpc3Bvc2UsIGRpc3Bvc2VEb25lTm90aWZpZXIsIDMpO1xuXHRcdFx0XHR0aWNrZXJFbnRyeS5leGVjdXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0Zm9yKGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKyl7XG5cdFx0ZW50cnkgPSBlbnRyaWVzW2ldO1xuXHRcdGlmKGVudHJ5LmNvbnRleHQgPT09IGNvbnRleHQgJiYgZW50cnkubGlzdGVuZXIgPT09IGZ1bmMpe1xuXHRcdFx0ZW50cnkuZGlzcG9zZSgpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2V0Q29ubmVjdG9yID0gZnVuY3Rpb24oY29ubmVjdG9yKXtcblx0dGhpcy5jb25uZWN0b3IgPSBjb25uZWN0b3I7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUucmVtb3ZlQ29ubmVjdG9yID0gZnVuY3Rpb24oKXtcblx0dGhpcy5jb25uZWN0b3IgPSBudWxsO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLmxpbmtDb25uZWN0b3IgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmVuYWJsZUNvbm5lY3RvciA9IHRydWU7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUudW5MaW5rQ29ubmVjdG9yID0gZnVuY3Rpb24oKXtcblx0dGhpcy5lbmFibGVDb25uZWN0b3IgPSBmYWxzZTtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS50cmlnZ2VyTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcblx0Y29uc3Qgc2hvdWxkVHJpZ2dlciA9IHRoaXMuc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSgpO1xuXHRpZihzaG91bGRUcmlnZ2VyKXtcblx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc1dpbGxFeGVjdXRlOiBcIiwgdGhpcyk7XG5cdFx0dGhpcy5saXN0ZW5lcnNXaWxsRXhlY3V0ZSgpO1xuXHRcdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIFwiLCB0aGlzKTtcblx0XHRjb25zdCBlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UgPSBbXTtcblx0XHR0aGlzLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0aWYgKGVudHJ5Lmxpc3RlbmVyKSB7XG5cdFx0XHRcdGVudHJ5Lmxpc3RlbmVyLmFwcGx5KGVudHJ5LmNvbnRleHQgfHwgZW50cnkubGlzdGVuZXJbJ3RoaXMnXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHR0aGlzLmVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0fSwgdGhpcyk7XG5cblxuXHRcdGlmKHRoaXMuZnJhbWVFbnRyaWVzLmxlbmd0aCA+IDApe1xuXHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihlbnRyeSwgaW5kZXgpe1xuXHRcdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0XHR0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCArIDE7XG5cdFx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UucHVzaChpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0ZW50cmllc0luZGV4VG9EaXNwb3NlLmZvckVhY2goZnVuY3Rpb24oZW50cnlJbmRleCl7XG5cdFx0XHRcdHRoaXMuZnJhbWVFbnRyaWVzLnNwbGljZShlbnRyeUluZGV4LDEpO1xuXHRcdFx0fSwgdGhpcylcblx0XHR9IGVsc2Uge1xuXHRcdFx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBsaXN0ZW5lcnNEaWRFeGVjdXRlOiBcIiwgdGhpcyk7XG5cdFx0XHR0aGlzLmxpc3RlbmVyc0RpZEV4ZWN1dGUoKTtcblx0XHR9XG5cdH1cblxufTtcblxuRnVuY3Rpb25zLnN0YWNrRGVidWcgPSBmYWxzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZnVuY3Rpb25zLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2Z1bmN0aW9ucy5qcyIsImltcG9ydCBUaWNrZXIgZnJvbSAndGlja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZ1bmMpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuYztcbiAgICB9XG59XG5cbi8vIE1ldGhvZCBhdmFpbGFibGUgb25seSBvbiBFbnRyeSBpbnN0YW5jZSBub3QgaW4gQ2xhc3NcbkVudHJ5LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCl7XG4gICAgaWYodGhpcy5jb250ZXh0IGluc3RhbmNlb2YgVGlja2VyKXtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZW50cnkuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvZW50cnkuanMiLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQge2FycmF5VG9PYmplY3QsIGNvbWJpbmVBcnJheX0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVDb2xsZWN0aW9uIGV4dGVuZHMgU3RvcmV7XG5cdGNvbnN0cnVjdG9yKHN0YXRlLGRpc3BsYXlOYW1lLCBvYmplY3ROYW1lKXtcblx0XHRzdXBlcihudWxsLCBkaXNwbGF5TmFtZSwgb2JqZWN0TmFtZSk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IHt9O1xuXHRcdHRoaXMuX3ZhbHVlID0gc3RhdGUgPyAoc3RhdGUudmFsdWUgPT09IHVuZGVmaW5lZCA/IHt9IDogc3RhdGUudmFsdWUpIDoge307XG5cdFx0dGhpcy50cmlnZ2VyV2FpdENvdW50ID0gMDtcblx0fVxuXG5cdHNob3VsZExpc3RlbmVyc0V4ZWN1dGUoKXtcblx0XHRpZih0aGlzLnRyaWdnZXJXYWl0Q291bnQgPT09IDAgfHwgdGhpcy50cmlnZ2VyV2FpdENvdW50ID09PSAxKXtcblx0XHRcdHRoaXMudHJpZ2dlcldhaXRDb3VudCA9PT0gMSAmJiB0aGlzLnRyaWdnZXJXYWl0Q291bnQtLTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyaWdnZXJXYWl0Q291bnQgPSB0aGlzLnRyaWdnZXJXYWl0Q291bnQgLSAxO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHR9XG5cbn1cblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiB0aGlzLmdldENoaWxkcmVuKHRydWUpO1xufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKG5ld1ZhbHVlLCBjYWxsYmFjayl7XG5cdHRoaXMudHJpZ2dlcldhaXRDb3VudCA9IHRoaXMuY2FsY3VsYXRlRGlmZihuZXdWYWx1ZSwgdHJ1ZSk7XG5cdGlmKHRoaXMudHJpZ2dlcldhaXRDb3VudCA+IDApe1xuXHRcdGNvbnN0IF9zZXRTdGF0ZSA9ICgpPT57XG5cdFx0XHRsZXQgY2hpbGRWYWx1ZXMgPSB7fTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDaGlsZElkcyA9IHRoaXMuZ2V0Q2hpbGRJZHModHJ1ZSk7XG5cdFx0XHRpZihuZXdWYWx1ZSl7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VmFsdWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBuZXdDaGlsZFN0YXRlID0gbmV3VmFsdWVbaV07XG5cdFx0XHRcdFx0aWYobmV3Q2hpbGRTdGF0ZSl7XG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRJZDtcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiBuZXdDaGlsZFN0YXRlID09PSAnc3RyaW5nJyl7IC8vIG5vIGNoYW5nZVxuXHRcdFx0XHRcdFx0XHRjaGlsZElkID0gbmV3Q2hpbGRTdGF0ZTsgLy8gaWQgb2YgVW5jaGFuZ2VkQ2hpbGRcblx0XHRcdFx0XHRcdFx0Y2hpbGRWYWx1ZXNbY2hpbGRJZF0gPSB0aGlzLl92YWx1ZVtjaGlsZElkXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0e2lkLCBjbGFzc0RlZk5hbWUsIHZhbHVlLCBkaXNwbGF5TmFtZX0gPSBuZXdDaGlsZFN0YXRlO1xuXHRcdFx0XHRcdFx0XHRpZihjbGFzc0RlZk5hbWUgPT09IHVuZGVmaW5lZCkgeyAvLyBkZWxldGUgT3BlcmF0aW9uXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW1vdmUoaWQpO1xuXHRcdFx0XHRcdFx0XHR9ICBlbHNlIHsgLy8gdXBkYXRlIE9wZXJhdGlvbiBvciBBZGRpdGlvblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdFN0b3JlKGlkLCB2YWx1ZSwgY2xhc3NEZWZOYW1lLCBkaXNwbGF5TmFtZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y2hpbGRWYWx1ZXNbaWRdID0gdmFsdWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgaWRTdGlsbEV4aXN0ID0gKGN1cnJlbnRDaGlsZElkcyAmJiBjdXJyZW50Q2hpbGRJZHMuaW5kZXhPZihjaGlsZElkKSA+IC0xKVxuXHRcdFx0XHRcdFx0aWYoaWRTdGlsbEV4aXN0KXsgLy8gcmVtb3ZlIHRoZW1cblx0XHRcdFx0XHRcdFx0Y3VycmVudENoaWxkSWRzLnNwbGljZShjaGlsZElkLDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gdG9kbzogd2lsbCB0aGlzIGxpbmUgb2YgQ29kZXMgZXZlciByZWFjaCBhcyB3ZSBoYW5kbGUgcmVtb3ZlIGFib3ZlXG5cdFx0XHQvKmlmKGN1cnJlbnRDaGlsZElkcyl7XG5cdFx0XHRcdC8vIHJlbW92ZSBhbGwgb2xkIElkc1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRJZHMubWFwKChvbGRJZCk9Pntcblx0XHRcdFx0XHR0aGlzLnJlbW92ZShvbGRJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSovXG5cdFx0XHR0aGlzLl92YWx1ZSA9IGNoaWxkVmFsdWVzO1xuXHRcdH07XG5cdFx0Ly9zZXQgc3RhdGUgZnVuY3Rpb24gaXMgdGhlIG9uZSB3aGljaCB0cmlnZ2VycyBhbGwgdGhlIGxpc3RlbmVycyBhdHRhY2hlZCB0byBpdFxuXHRcdC8vIGlmIGxpc3RlbmVycyBleGVjdXRpb24gYXJlIGdvaW5nIG9uLCB0aGlzIHdpbGwgZXhlY3V0ZSBvbmNlIHRoZXkgYXJlIGRvbmVcblx0XHQvLyBlbHNlIHNldCBzdGF0ZSBpcyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9zZXRTdGF0ZSwgKCk9Pntcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gTnVtYmVyKHRoaXMudHJpZ2dlcldhaXRDb3VudCA+IDApO1xufTtcblxuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldENoaWxkSWRzID0gZnVuY3Rpb24oYXNDb3B5KXtcblx0Y29uc3QgaWRzID0gIE9iamVjdC5rZXlzKHRoaXMuY2hpbGRyZW4pO1xuXHRyZXR1cm4gYXNDb3B5ID8gaWRzLnNsaWNlKCkgOiBpZHM7XG59O1xuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldENoaWxkcmVuID0gZnVuY3Rpb24oYXNKc29uKXtcblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblx0Y29uc3QgY2hpbGRLZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbik7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZEtleXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRLZXlzW2ldO1xuXHRcdGNvbnN0IHN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltjaGlsZEtleV07XG5cdFx0Y2hpbGRyZW4ucHVzaChhc0pzb24/c3RvcmVPYmplY3QuYXNKc29uKCk6c3RvcmVPYmplY3QpO1xuXHR9XG5cdHJldHVybiBjaGlsZHJlbjtcbn07XG5cblxuLy90by1kbyB0aGluayBvZiB1aSBwb2ludCBvZiB2aWV3IGFuZCB0aGUgY2hhbmdlIHRoZSB3YXkgdGhleSBhcmUgaW5zdGFudGlhdGVkIGhlcmVcblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVxdWVzdFN0b3JlID0gZnVuY3Rpb24oaWQsIHN0YXRlLCBjbGFzc0RlZk5hbWUsIGRpc3BsYXlOYW1lLCBuZXdTdG9yZUNhbGxiYWNrKXtcblx0bGV0IHN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltpZF07XG5cdGlmKHN0b3JlT2JqZWN0KXtcblx0XHRyZXR1cm4gc3RvcmVPYmplY3Quc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0bGV0IHJldHVyblZhbHVlO1xuXHRjb25zdCBfcmVxdWVzdFN0b3JlID0gKCk9Pntcblx0XHRpZihjbGFzc0RlZk5hbWUgPT09ICdTdG9yZScpe1xuXHRcdFx0c3RvcmVPYmplY3QgPSBuZXcgU3RvcmUoc3RhdGUsIGRpc3BsYXlOYW1lLCBpZCk7XG5cdFx0fSBlbHNlIGlmKGNsYXNzRGVmTmFtZSA9PT0gJ1N0b3JlQ29sbGVjdGlvbicpIHtcblx0XHRcdHN0b3JlT2JqZWN0ID0gbmV3IFN0b3JlQ29sbGVjdGlvbihzdGF0ZSwgZGlzcGxheU5hbWUsIGlkKTtcblx0XHR9XG5cblx0XHRzdG9yZU9iamVjdC5zZXRDb25uZWN0b3IodGhpcy50cmlnZ2VyTGlzdGVuZXJzLmJpbmQodGhpcykpO1xuXHRcdHN0b3JlT2JqZWN0LmxpbmtQYXJlbnRJZCh0aGlzLmlkKTtcblx0XHRjb25zdCBuZXdTdG9yZU9iaklkID0gc3RvcmVPYmplY3QuaWQ7XG5cdFx0dGhpcy5jaGlsZHJlbltuZXdTdG9yZU9iaklkXSA9IHN0b3JlT2JqZWN0O1xuXHRcdHRoaXMuX3ZhbHVlW25ld1N0b3JlT2JqSWRdID0gc3RvcmVPYmplY3QuZ2V0VmFsdWUoKTtcblx0XHRyZXR1cm5WYWx1ZSA9IHN0b3JlT2JqZWN0O1xuXHRcdHRoaXMudHJpZ2dlckxpc3RlbmVycygpO1xuXHR9O1xuXG5cdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9yZXF1ZXN0U3RvcmUsICgpPT57XG5cdFx0bmV3U3RvcmVDYWxsYmFjayAmJiBuZXdTdG9yZUNhbGxiYWNrKHJldHVyblZhbHVlKTtcblx0fSk7XG59O1xuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGlkLHRyaWdnZXIgPSB0cnVlKXtcblx0Y29uc3Qgc3RvcmVPYmplY3QgPSB0aGlzLmNoaWxkcmVuW2lkXTtcblx0aWYoc3RvcmVPYmplY3Qpe1xuXHRcdGNvbnN0IF9yZW1vdmUgPSAoKT0+e1xuXHRcdFx0c3RvcmVPYmplY3QucmVtb3ZlQ29ubmVjdG9yKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5jaGlsZHJlbltpZF07XG5cdFx0XHRkZWxldGUgdGhpcy5fdmFsdWVbaWRdO1xuXHRcdFx0dHJpZ2dlciAmJiB0aGlzLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblx0XHR9XG5cblx0XHRpZighdHJpZ2dlcil7XG5cdFx0XHRfcmVtb3ZlLmNhbGwodGhpcyk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9yZW1vdmUpXG5cdH1cblxufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0aWYoY2hpbGRLZXlzLmxlbmd0aCA+IDApe1xuXHRcdGNvbnN0IF9yZW1vdmVBbGwgPSAoKT0+e1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRLZXlzW2ldO1xuXHRcdFx0XHR0aGlzLnJlbW92ZShjaGlsZEtleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5leGVjdXRlVHJpZ2dlcmVyKHRoaXMsX3JlbW92ZUFsbClcblx0fVxufTtcblxuLy8gb25seUNvbXBhcmlzb24gbW9kZSwgb3VyIERpZmYgaXMgTG9nIGRpZmZcbi8vIGluIGZhbHNlIG1vZGUgb3VyIGRpZmYgaXMgc3RhdGUgb2JqZWN0XG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNhbGN1bGF0ZURpZmYgPSBmdW5jdGlvbih2YWx1ZSwgb25seUNvbXBhcmlzb24gPSBmYWxzZSl7XG5cdGNvbnN0IHZhbHVlQXNPYmogPSBhcnJheVRvT2JqZWN0KHZhbHVlLCAnaWQnKTtcblxuXHRjb25zdCBjaGlsZHJlbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0Y29uc3Qgc3RhdGVMZW4gPSB2YWx1ZSA/IHZhbHVlLmxlbmd0aCA6IE5hTjtcblx0Y29uc3QgY3VycmVudFN0YXRlTGVuID0gY2hpbGRyZW5LZXlzID8gY2hpbGRyZW5LZXlzLmxlbmd0aCA6IDA7XG5cdGxldCBpc0NoYW5nZWQgPSBzdGF0ZUxlbiAhPT0gY3VycmVudFN0YXRlTGVuIDtcblx0bGV0IGNoaWxkVXBkYXRlQ291bnQgPSAwO1xuXG5cdGxldCBjaGlsZHJlbkZvcndhcmREaWZmcyA9IFtdO1xuXHRsZXQgY2hpbGRyZW5CYWNrd2FyZERpZmZzID0gW107XG5cblx0Zm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTdGF0ZUxlbjsgaSsrKXtcblx0XHRjb25zdCBrZXkgPSBjaGlsZHJlbktleXNbaV07XG5cdFx0Y29uc3QgY3VycmVudFN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltrZXldO1xuXHRcdGNvbnN0IGNoaWxkU3RhdGUgPSB2YWx1ZUFzT2JqID8gdmFsdWVBc09ialtjdXJyZW50U3RvcmVPYmplY3QuaWRdOiB1bmRlZmluZWQ7XG5cdFx0ZGVsZXRlIHZhbHVlQXNPYmpbY3VycmVudFN0b3JlT2JqZWN0LmlkXTsgLy8gbmVlZCB0byBkbyB0aGlzIHRvIGlkZW50aWZ5IGFsbCBkZWxldGVkIGNoaWxkXG5cblx0XHRpZihjaGlsZFN0YXRlICApeyAvLyBleGlzdGluZyBjaGlsZCB1cGRhdGVcblx0XHRcdGlmKHR5cGVvZiBjaGlsZFN0YXRlICE9PSAnc3RyaW5nJyl7IC8vIG5vIGNoYW5nZSB0aGlzIGhhcHBlbnMgaW4gZGlmZiBtb2RlICwgd2hpY2ggb25seUNvbXBhcmlzb25cblx0XHRcdFx0Y29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkU3RhdGUgPyBjaGlsZFN0YXRlLnZhbHVlIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRcdFx0Y29uc3QgaXNDaGlsZFVwZGF0ZWQgPSBjdXJyZW50U3RvcmVPYmplY3QuY2FsY3VsYXRlRGlmZi5jYWxsKGN1cnJlbnRTdG9yZU9iamVjdCwgY2hpbGRWYWx1ZSwgb25seUNvbXBhcmlzb24pO1xuXHRcdFx0XHRcdGlmKGlzQ2hpbGRVcGRhdGVkKXtcblx0XHRcdFx0XHRcdGNoaWxkVXBkYXRlQ291bnQgPSBjaGlsZFVwZGF0ZUNvdW50ICsgMVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0Y29uc3QgZGlmZlZhbHVlID0gY3VycmVudFN0b3JlT2JqZWN0LmdldERpZmYuY2FsbChjdXJyZW50U3RvcmVPYmplY3QsIGNoaWxkVmFsdWUpO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBkaWZmVmFsdWUgIT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRcdGlzQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHtmb3J3YXJkLCBiYWNrd2FyZCB9ID0gZGlmZlZhbHVlO1xuXHRcdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goZm9yd2FyZCk7XG5cdFx0XHRcdFx0Y2hpbGRyZW5CYWNrd2FyZERpZmZzLnB1c2goYmFja3dhcmQpO1xuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRcdGNoaWxkVXBkYXRlQ291bnQgPSBjaGlsZFVwZGF0ZUNvdW50ICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goY3VycmVudFN0b3JlT2JqZWN0LmFzSnNvbigpKTtcblx0XHRcdFx0Y2hpbGRyZW5CYWNrd2FyZERpZmZzLnB1c2goY3VycmVudFN0b3JlT2JqZWN0LmFzSnNvbih1bmRlZmluZWQsIHRydWUpKVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcmVtYWluaW5nQ2hpbGRLZXlzID0gdmFsdWVBc09iaiA/IE9iamVjdC5rZXlzKHZhbHVlQXNPYmopIDogbnVsbDtcblx0Y29uc3QgcmVtaWFuaW5nQ2hpbGRDb3VudCA9IHJlbWFpbmluZ0NoaWxkS2V5cyA/IHJlbWFpbmluZ0NoaWxkS2V5cy5sZW5ndGggOiAwO1xuXHRpZihyZW1pYW5pbmdDaGlsZENvdW50KXtcblx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRjaGlsZFVwZGF0ZUNvdW50ID0gIHJlbWlhbmluZ0NoaWxkQ291bnQgKyBjaGlsZFVwZGF0ZUNvdW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcmVtaWFuaW5nQ2hpbGRDb3VudDsgaSsrKXtcblx0XHRcdFx0Y29uc3QgcmVtYWluaW5nQ2hpbGRLZXkgPSByZW1haW5pbmdDaGlsZEtleXNbaV07XG5cdFx0XHRcdGNvbnN0IHJlbWFpbmluZ0NoaWxkID0gdmFsdWVBc09ialtyZW1haW5pbmdDaGlsZEtleV07XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmID0ge307XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmLmlkID0gcmVtYWluaW5nQ2hpbGQuaWQ7XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmWydjbGFzc0RlZk5hbWUnXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZGVsZXRlZENoaWxkRm9yd2FyZERpZmZbJ2Rpc3BsYXlOYW1lJ10gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmWyd2YWx1ZSddID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goZGVsZXRlZENoaWxkRm9yd2FyZERpZmYpO1xuXHRcdFx0XHRjaGlsZHJlbkJhY2t3YXJkRGlmZnMucHVzaChyZW1haW5pbmdDaGlsZClcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGlmKG9ubHlDb21wYXJpc29uKXtcblx0XHRyZXR1cm4gY2hpbGRVcGRhdGVDb3VudDtcblx0fVxuXG5cblx0aWYoaXNDaGFuZ2VkKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmFzSnNvbihjaGlsZHJlbkZvcndhcmREaWZmcyksXG5cdFx0XHRiYWNrd2FyZDp0aGlzLmFzSnNvbihjaGlsZHJlbkJhY2t3YXJkRGlmZnMpXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmlkLFxuXHRcdFx0YmFja3dhcmQ6dGhpcy5pZFxuXHRcdH07XG5cdH1cbn07XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuY29tYmluZURpZmYgPSBmdW5jdGlvbihhcnJheTEsIGFycmF5MiwgaWROYW1lKXtcblxuXHRyZXR1cm4gY29tYmluZUFycmF5KGFycmF5MSwgYXJyYXkyLCBpZE5hbWUsIChhcnJheTFBc09iaiwgYXJyYXkyQ2hpbGQsIGtleU5hbWUpPT57XG5cdFx0Y29uc3QgY2hpbGRJZCA9IHR5cGVvZiBhcnJheTJDaGlsZCA9PT0gJ3N0cmluZycgPyBhcnJheTJDaGlsZCA6IGFycmF5MkNoaWxkW2tleU5hbWVdO1xuXHRcdHJldHVybiAhYXJyYXkxQXNPYmpbY2hpbGRJZF07XG5cdH0pXG5cbn1cbi8vIHdoZW4gd2UgY2FsbCBhcHBseSBkaWZmLCBjb25uZWN0IHRvIG5leHQgc2V0IG9mIGZ1bmN0aW9ucyBhcmUgbm90IGNhbGxlZFxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseURpZmYgPSBmdW5jdGlvbih2YWx1ZSwgY2FsbGJhY2spe1xuXHR0aGlzLnVuTGlua0Nvbm5lY3RvcigpO1xuXHR0aGlzLnNldFN0YXRlKHZhbHVlLCAoKT0+e1xuXHRcdHRoaXMubGlua0Nvbm5lY3RvcigpO1xuXHRcdGNhbGxiYWNrKClcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1N0b3JlQ29sbGVjdGlvbi5qcyIsImltcG9ydCBTdG9yZSBmcm9tICcuLy4uL2xpYic7XG5pbXBvcnQge1N0b3JlQ29sbGVjdGlvbn0gZnJvbSAnLi8uLi9saWInO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSg1LCcgTnVtYmVyJyk7XG5cbnN0b3JlLmFkZExpc3RlbmVyKHdpbmRvdywgKCk9Pntcblx0Y29uc29sZS5sb2coXCJJbW1lZGlhdGVcIik7XG59KTtcblxuc3RvcmUuYWRkTGlzdGVuZXIod2luZG93LCAoKT0+e1xuXHRjb25zb2xlLmxvZyhcIkxhdGVyXCIpO1xufSwgdHJ1ZSk7XG5cbnN0b3JlLnNldFN0YXRlKDcsICgpPT57XG5cdGNvbnNvbGUubG9nKFwiU2V0IFN0YXRlIENhbGxiYWMga1wiKTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==