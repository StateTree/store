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
		value: function asJson(value, isDelete, onlyValue) {
			value = value === undefined ? this.getState() : value;
			if (onlyValue) {
				return value;
			}
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


StoreCollection.prototype.getState = function (onlyValue) {
	return this.getChildren(true, onlyValue);
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

StoreCollection.prototype.getChildren = function (asJson, onlyValue) {
	var children = [];
	var childKeys = Object.keys(this.children);
	for (var i = 0; i < childKeys.length; i++) {
		var childKey = childKeys[i];
		var storeObject = this.children[childKey];
		children.push(asJson ? storeObject.asJson(undefined, undefined, onlyValue) : storeObject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxYzNhNmUzYWZmZjM1ODkzNTMzNSIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDkiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2NvbXBhcmUvYXJyYXlDb21wYXJlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vL2xpYi9pcy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU3RvcmVJRC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1Mjk4Y2VkMTUxZWY0ZDgxZTFhMCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vbGliL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy9saWIvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1N0b3JlQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbGN1bGF0ZURpZmYiLCJ2YWx1ZSIsIm9ubHlDb21wYXJpc29uIiwiY3VycmVudFZhbHVlIiwiX3ZhbHVlIiwiY2hhbmdlZCIsImNvbXBhcmVyIiwiU3RvcmUiLCJzdGFja0RlYnVnIiwiY29uc29sZSIsImxvZyIsImFzSnNvbiIsImlkIiwiZGlzcGxheU5hbWUiLCJvYmplY3ROYW1lIiwidW5kZWZpbmVkIiwiYmluZCIsImlzRGVsZXRlIiwib25seVZhbHVlIiwiZ2V0U3RhdGUiLCJqc29uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwicHJvdG90eXBlIiwiZ2V0VmFsdWUiLCJzZXRTdGF0ZSIsIm5ld1ZhbHVlIiwiY2FsbGJhY2siLCJkaWRTdGF0ZUNoYW5nZWQiLCJfc2V0U3RhdGUiLCJ0cmlnZ2VyTGlzdGVuZXJzIiwiZXhlY3V0ZVRyaWdnZXJlciIsIk51bWJlciIsInNob3VsZExpc3RlbmVyc0V4ZWN1dGUiLCJvbGRWYWx1ZSIsImNvbXBhcmVGbiIsImZvcndhcmQiLCJiYWNrd2FyZCIsImdldERpZmYiLCJhcHBseURpZmYiLCJzdGF0ZUFzSnNvbiIsImlzQ2hhbmdlZCIsImFycmF5VG9PYmplY3QiLCJjb21iaW5lQXJyYXkiLCJvbGRWYWwiLCJuZXdWYWwiLCJjb21wYXJpc29uVmFsdWUiLCJhcnJheSIsImlkTmFtZSIsIm9iamVjdCIsImluZGV4IiwiY2hpbGQiLCJsZW5ndGgiLCJhcnJheTEiLCJhcnJheTIiLCJzaG91bGRDb21iaW5lRm4iLCJhcnJheTFBc09iaiIsImFycmF5MmNoaWxkIiwiaSIsInB1c2giLCJkZWZhdWx0IiwiU3RvcmVDb2xsZWN0aW9uIiwiU3RvcmVJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsInBhcmVudElkIiwibGlua2VkSWRzIiwibGlua1BhcmVudElkIiwidW5MaW5rUGFyZW50SWQiLCJsaW5rSWQiLCJ1bkxpbmtJZCIsImluZGV4T2YiLCJzdGF0ZSIsImNoaWxkcmVuIiwidHJpZ2dlcldhaXRDb3VudCIsImdldENoaWxkcmVuIiwiY2hpbGRWYWx1ZXMiLCJjdXJyZW50Q2hpbGRJZHMiLCJnZXRDaGlsZElkcyIsIm5ld0NoaWxkU3RhdGUiLCJjaGlsZElkIiwiY2xhc3NEZWZOYW1lIiwicmVtb3ZlIiwicmVxdWVzdFN0b3JlIiwiaWRTdGlsbEV4aXN0Iiwic3BsaWNlIiwiYXNDb3B5IiwiaWRzIiwiT2JqZWN0Iiwia2V5cyIsInNsaWNlIiwiY2hpbGRLZXlzIiwiY2hpbGRLZXkiLCJzdG9yZU9iamVjdCIsIm5ld1N0b3JlQ2FsbGJhY2siLCJyZXR1cm5WYWx1ZSIsIl9yZXF1ZXN0U3RvcmUiLCJzZXRDb25uZWN0b3IiLCJuZXdTdG9yZU9iaklkIiwidHJpZ2dlciIsIl9yZW1vdmUiLCJyZW1vdmVDb25uZWN0b3IiLCJjYWxsIiwicmVtb3ZlQWxsIiwiX3JlbW92ZUFsbCIsInZhbHVlQXNPYmoiLCJjaGlsZHJlbktleXMiLCJzdGF0ZUxlbiIsIk5hTiIsImN1cnJlbnRTdGF0ZUxlbiIsImNoaWxkVXBkYXRlQ291bnQiLCJjaGlsZHJlbkZvcndhcmREaWZmcyIsImNoaWxkcmVuQmFja3dhcmREaWZmcyIsImtleSIsImN1cnJlbnRTdG9yZU9iamVjdCIsImNoaWxkU3RhdGUiLCJjaGlsZFZhbHVlIiwiaXNDaGlsZFVwZGF0ZWQiLCJkaWZmVmFsdWUiLCJyZW1haW5pbmdDaGlsZEtleXMiLCJyZW1pYW5pbmdDaGlsZENvdW50IiwicmVtYWluaW5nQ2hpbGRLZXkiLCJyZW1haW5pbmdDaGlsZCIsImRlbGV0ZWRDaGlsZEZvcndhcmREaWZmIiwiY29tYmluZURpZmYiLCJhcnJheTJDaGlsZCIsImtleU5hbWUiLCJ1bkxpbmtDb25uZWN0b3IiLCJsaW5rQ29ubmVjdG9yIiwic3RvcmUiLCJhZGRMaXN0ZW5lciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUFxRDtBQUFBLEtBQXZCQyxjQUF1Qix1RUFBTixLQUFNOztBQUNwRCxLQUFNQyxlQUFlLEtBQUtDLE1BQTFCO0FBQ0EsS0FBSUMsVUFBVSxLQUFkO0FBQ0EsS0FBRyxLQUFLQyxRQUFSLEVBQWlCO0FBQ2hCRCxZQUFVLEtBQUtDLFFBQUwsQ0FBY0wsS0FBZCxFQUFxQkUsWUFBckIsQ0FBVjtBQUNBLEVBRkQsTUFFSztBQUNKRSxZQUFVLHdCQUFVSixLQUFWLEVBQWlCRSxZQUFqQixDQUFWO0FBQ0E7QUFDREksT0FBTUMsVUFBTixJQUFvQkMsUUFBUUMsR0FBUixDQUFZLGtCQUFaLEVBQWdDVCxLQUFoQyxFQUF1Q0UsWUFBdkMsRUFBc0QsSUFBdEQsQ0FBcEI7QUFDQSxLQUFHRCxjQUFILEVBQWtCO0FBQ2pCLFNBQU9HLE9BQVA7QUFD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QkFBWjtBQUNBLENBRkQsRSIsImZpbGUiOiJkZW1vL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInN0b3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN0b3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN0b3JlXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzNhNmUzYWZmZjM1ODkzNTMzNSIsImltcG9ydCB7IGlzQ2hhbmdlZH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBTdG9yZUlEIGZyb20gJy4vU3RvcmVJRCc7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZURpZmYodmFsdWUsIG9ubHlDb21wYXJpc29uID0gZmFsc2Upe1xuXHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLl92YWx1ZTtcblx0bGV0IGNoYW5nZWQgPSBmYWxzZTtcblx0aWYodGhpcy5jb21wYXJlcil7XG5cdFx0Y2hhbmdlZCA9IHRoaXMuY29tcGFyZXIodmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG5cdH1lbHNle1xuXHRcdGNoYW5nZWQgPSBpc0NoYW5nZWQodmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG5cdH1cblx0U3RvcmUuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlN0b3JlOiBnZXREaWZmOiBcIiwgdmFsdWUsIGN1cnJlbnRWYWx1ZSAsIHRoaXMpO1xuXHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0cmV0dXJuIGNoYW5nZWQ7XG5cdH1cblxuXHRyZXR1cm4gY2hhbmdlZCA/IHRoaXMuYXNKc29uKGN1cnJlbnRWYWx1ZSkgOiB0aGlzLmlkO1xufVxuXG5cbi8qXG4qIDEuIGdldFZhbHVlLCByZXR1cm4gdGhlIHdyYXBwZWQgdmFsdWUgaW5zaWRlIHRoaXMgb2JqZWN0XG4qIDMuIGdldFN0YXRlIGRvZXMgZXhhY3RseSB3aGF0IGdldFZhbHVlIGRvZXMgKGR1cGxpY2F0aW9uKVxuKiA0LiBzZXRTdGF0ZSBzZXQgdGhlIHZhbHVlIGlmIHRoZXJlIGlzIGEgY2hhbmdlIHRvIG9sZFZhbHVlIGFuZCBpbkFkZGl0aW9uIHRyaWdnZXJzIGFsbCBkYXRhQ2hhbmdlIGxpc3RlbmVyc1xuKiA1LiBnZXREaWZmIHJldHVybiB0aGUgdmFsdWUgaW4gSlNPTiBTdHJ1Y3V0dXJlIHdpdGggbWV0YWRhdGEgSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBvYmplY3QqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBTdG9yZUlEe1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSwgZGlzcGxheU5hbWUsIG9iamVjdE5hbWUsIGNvbXBhcmVyKXtcblx0XHRzdXBlcihvYmplY3ROYW1lKTtcblx0XHQvL2luaXRpYWwgdmFsdWUgY2FuJ3QgYmUgdW5kZWZpbmVkLCBpdCBoYXMgdG8gYmUgbnVsbCBvciBnaXZlbiB2YWx1ZVxuXHRcdHRoaXMuX3ZhbHVlID0gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcblx0XHR0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cdFx0dGhpcy5jb21wYXJlciA9IGNvbXBhcmVyO1xuXG5cdFx0dGhpcy5hc0pzb24gPSB0aGlzLmFzSnNvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YXNKc29uKHZhbHVlLCBpc0RlbGV0ZSwgb25seVZhbHVlKXtcblx0XHR2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmdldFN0YXRlKCkgOiB2YWx1ZTtcblx0XHRpZihvbmx5VmFsdWUpe1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0XHRjb25zdCBqc29uID0gc3VwZXIuYXNKc29uKCk7XG5cdFx0anNvblsnY2xhc3NEZWZOYW1lJ10gPSBpc0RlbGV0ZSA/ICB1bmRlZmluZWQgOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0anNvblsnZGlzcGxheU5hbWUnXSA9IGlzRGVsZXRlID8gIHVuZGVmaW5lZCA6dGhpcy5kaXNwbGF5TmFtZTtcblx0XHRqc29uWyd2YWx1ZSddID0gaXNEZWxldGUgPyAgdW5kZWZpbmVkIDp2YWx1ZTtcblx0XHRyZXR1cm4ganNvbjtcblx0fTtcbn1cblxuXG5TdG9yZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gdGhpcy5fdmFsdWU7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbigpe1xuXHRyZXR1cm4gdGhpcy5fdmFsdWU7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihuZXdWYWx1ZSwgY2FsbGJhY2spe1xuXHRjb25zdCBkaWRTdGF0ZUNoYW5nZWQgPSB0aGlzLmNhbGN1bGF0ZURpZmYobmV3VmFsdWUsIHRydWUpO1xuXG5cdGlmKGRpZFN0YXRlQ2hhbmdlZCl7XG5cdFx0Y29uc3QgX3NldFN0YXRlID0gKCk9Pntcblx0XHRcdHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHR0aGlzLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblx0XHR9O1xuXHRcdC8vc2V0IHN0YXRlIGZ1bmN0aW9uIGlzIHRoZSBvbmUgd2hpY2ggdHJpZ2dlcnMgYWxsIHRoZSBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gaXRcblx0XHQvLyBpZiBsaXN0ZW5lcnMgZXhlY3V0aW9uIGFyZSBnb2luZyBvbiwgdGhpcyB3aWxsIGV4ZWN1dGUgb25jZSB0aGV5IGFyZSBkb25lXG5cdFx0Ly8gZWxzZSBzZXQgc3RhdGUgaXMgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHR0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIodGhpcyxfc2V0U3RhdGUsICgpPT57XG5cdFx0XHRTdG9yZS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiU3RvcmU6IF9zZXRTdGF0ZUNhbGxiYWNrOiBcIiAsIHRoaXMpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBOdW1iZXIoZGlkU3RhdGVDaGFuZ2VkKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zaG91bGRMaXN0ZW5lcnNFeGVjdXRlID0gZnVuY3Rpb24ob2xkVmFsdWUsIG5ld1ZhbHVlKXtcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBuZWVkIGJvdGggZm9yd2FyZCBkaWZmIGFuZCAgYmFja3dhcmQgZGlmZlxuU3RvcmUucHJvdG90eXBlLmNhbGN1bGF0ZURpZmYgPSBmdW5jdGlvbiAodmFsdWUsIG9ubHlDb21wYXJpc29uID0gZmFsc2Upe1xuXHRjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLl92YWx1ZTtcblx0Y29uc3QgY29tcGFyZUZuID0gdGhpcy5jb21wYXJlciA/IHRoaXMuY29tcGFyZXIgOiBpc0NoYW5nZWQ7XG5cdGNvbnN0IGNoYW5nZWQgPSBjb21wYXJlRm4odmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG5cblx0aWYob25seUNvbXBhcmlzb24pe1xuXHRcdHJldHVybiBjaGFuZ2VkO1xuXHR9XG5cblx0aWYoY2hhbmdlZCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcndhcmQ6dGhpcy5hc0pzb24oY3VycmVudFZhbHVlKSxcblx0XHRcdGJhY2t3YXJkOnRoaXMuYXNKc29uKHZhbHVlKVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGZvcndhcmQ6dGhpcy5pZCxcblx0XHRcdGJhY2t3YXJkOnRoaXMuaWRcblx0XHR9O1xuXHR9XG59XG5cbi8vIERpZmYgcmV0dXJucyB0aGUgRGlmZiBWYWx1ZSBhcyBKU09OXG5TdG9yZS5wcm90b3R5cGUuZ2V0RGlmZiA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0cmV0dXJuIHRoaXMuY2FsY3VsYXRlRGlmZih2YWx1ZSwgZmFsc2UpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuYXBwbHlEaWZmID0gZnVuY3Rpb24oc3RhdGVBc0pzb24sIGNhbGxiYWNrKXtcblx0aWYodHlwZW9mIHN0YXRlQXNKc29uICE9PSAnc3RyaW5nJyl7XG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZUFzSnNvbi52YWx1ZSwgY2FsbGJhY2spO1xuXHR9XG59O1xuXG5TdG9yZS5zdGFja0RlYnVnID0gZmFsc2U7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9TdG9yZS5qcyIsImltcG9ydCB7IGNvbXBhcmV9IGZyb20gJ2RpZmYnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NoYW5nZWQob2xkVmFsLCBuZXdWYWwpe1xuXHRjb25zdCBjb21wYXJpc29uVmFsdWUgPSAgY29tcGFyZShvbGRWYWwsIG5ld1ZhbCk7XG5cdGlmKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvT2JqZWN0KGFycmF5ICwgaWROYW1lKXtcblx0bGV0IG9iamVjdCA9IG51bGw7XG5cdGlmKGFycmF5KXtcblx0XHRvYmplY3QgPSB7fTtcblx0XHRsZXQgaW5kZXgsIGlkLCBjaGlsZDtcblx0XHRmb3IoaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKyl7XG5cdFx0XHRjaGlsZCA9IGFycmF5W2luZGV4XTtcblx0XHRcdGlmKGNoaWxkKXtcblx0XHRcdFx0aWYodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyl7XG5cdFx0XHRcdFx0aWQgPSBjaGlsZDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZCA9IGNoaWxkW2lkTmFtZV07XG5cdFx0XHRcdH1cblx0XHRcdFx0b2JqZWN0W2lkXSA9IGNoaWxkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUFycmF5KGFycmF5MSwgYXJyYXkyLCBpZE5hbWUsIHNob3VsZENvbWJpbmVGbil7XG5cdGNvbnN0IGFycmF5MUFzT2JqID0gYXJyYXlUb09iamVjdChhcnJheTEsIGlkTmFtZSk7XG5cblx0bGV0IGFycmF5MmNoaWxkO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkyLmxlbmd0aDsgaSsrKXtcblx0XHRhcnJheTJjaGlsZCA9IGFycmF5MltpXTtcblx0XHRpZihzaG91bGRDb21iaW5lRm4oYXJyYXkxQXNPYmosIGFycmF5MmNoaWxkLCBpZE5hbWUpKXtcblx0XHRcdGFycmF5MS5wdXNoKGFycmF5MmNoaWxkKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXJyYXkxO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9oZWxwZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgU3RvcmVDb2xsZWN0aW9uIGZyb20gJy4vU3RvcmVDb2xsZWN0aW9uJztcblxuZXhwb3J0IHtcblx0U3RvcmUgYXMgZGVmYXVsdCxcblx0U3RvcmVDb2xsZWN0aW9uXG59IDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZ1bmN0aW9uc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZnVuY3Rpb25zXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ4N2ZlZTFkOGFiNGRjNDEwNzA5XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDkiLCJpbXBvcnQgc3RyaW5nQ29tcGFyZSBmcm9tICcuL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL251bWJlckNvbXBhcmUnXG5pbXBvcnQgZGF0ZUNvbXBhcmUgZnJvbSAnLi9kYXRlQ29tcGFyZSdcbmltcG9ydCBhcnJheUNvbXBhcmUgZnJvbSAnLi9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL29iamVjdENvbXBhcmUnXG5pbXBvcnQgaXMgZnJvbSAnLi8uLi9pcydcblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBjb25zdCAgb2xkT2JqVHlwZSA9IHR5cGVvZihvbGRPYmopO1xuICAgIGNvbnN0ICBuZXdPYmpUeXBlID0gdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSlcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpcyhvbGRPYmosIERhdGUpKVxuICAgICAgICByZXR1cm4gZGF0ZUNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChpcyhvbGRPYmosIEFycmF5KSlcbiAgICAgICAgcmV0dXJuIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaixjb21wYXJlKTtcbiAgICBpZiAoaXMob2xkT2JqLCBPYmplY3QpKVxuICAgICAgICByZXR1cm4gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvY29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL2NvbXBhcmUuanMiLCIvL2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9sb2NhbGVDb21wYXJlXG5mdW5jdGlvbiBzdHJpbmdDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgaXNDYXNlU2Vuc2l0aXZlID0gdHlwZW9mIGlzQ2FzZVNlbnNpdGl2ZSAhPT0gJ3VuZGVmaW5lZCcgPyBpc0Nhc2VTZW5zaXRpdmUgOiBmYWxzZTtcblxuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsICYmIG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICBvbGRWYWx1ZSA9IFN0cmluZyhvbGRWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgbmV3VmFsdWUgPSBTdHJpbmcobmV3VmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IFN0cmluZyhvbGRWYWx1ZSkubG9jYWxlQ29tcGFyZShuZXdWYWx1ZSk7XG4gICAgaWYgKHJlc3VsdCA8IC0xKVxuICAgICAgICByZXN1bHQgPSAtMTtcbiAgICBlbHNlIGlmIChyZXN1bHQgPiAxKVxuICAgICAgICByZXN1bHQgPSAxO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nQ29tcGFyZTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvc3RyaW5nQ29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlckNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgdmFyICBvbGRUaW1lID0gb2xkVmFsdWUuZ2V0VGltZSgpO1xuICAgIHZhciAgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGVDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2RhdGVDb21wYXJlLmpzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICB2YXIgIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyICBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGZvciAodmFyICBpID0gMDsgaSA8IG9sZE9iakxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbaV0sIG5ld09ialtpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2FycmF5Q29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL2FycmF5Q29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG5cbiAgICBsZXQgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFuZXdPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFvbGRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdENvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJpbXBvcnQgRnVuY3Rpb25zIGZyb20gJy4vZnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25zO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbmRleC5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9pbmRleC5qcyIsImZ1bmN0aW9uIGlzKG9iaiwgVHlwZSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCBvYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBUeXBlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoVHlwZSA9PT0gT2JqZWN0KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBTdHJpbmc7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IE51bWJlcjtcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdib29sZWFuJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IEJvb2xlYW47XG4gICAgaWYgKFR5cGUgPT09IEFycmF5KVxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaXMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvaXMuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSc7XG5cbi8vIElmIHRoZXJlIGlzIG5vIGNoYW5nZSByZXR1cm5zIHVuZGVmaW5lZFxuLy8gaWYgdGhlcmUgaXMgYSBjaGFuZ2UgcmV0dXJucyB0aGUgbGF0ZXN0IHZhbHVlXG5mdW5jdGlvbiBkaWZmKGNvbXBhcmVkVmFsdWUsIHZhbHVlKXtcblx0Y29uc3QgY29tcGFyaXNvblZhbHVlID0gIGNvbXBhcmUoY29tcGFyZWRWYWx1ZSwgdmFsdWUpO1xuXG5cdGlmKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCl7XG5cdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZGlmZi5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9kaWZmLmpzIiwiaW1wb3J0IEZ1bmN0aW9ucyBmcm9tICdmdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZUlEIGV4dGVuZHMgRnVuY3Rpb25ze1xuXHRjb25zdHJ1Y3RvcihpZCl7XG5cdFx0c3VwZXIoKTtcblx0XHRpZihpZCA9PT0gdW5kZWZpbmVkIHx8IGlkID09PSBudWxsKXtcblx0XHRcdHRoaXMuaWQgPSAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpO1xuXHRcdH0gZWxzZXtcblx0XHRcdHRoaXMuaWQgPSBpZDtcblx0XHR9XG5cdFx0dGhpcy5wYXJlbnRJZCA9IG51bGw7XG5cdFx0dGhpcy5saW5rZWRJZHMgPSBudWxsO1xuXG5cdFx0dGhpcy5saW5rUGFyZW50SWQgPSB0aGlzLmxpbmtQYXJlbnRJZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudW5MaW5rUGFyZW50SWQgPSB0aGlzLnVuTGlua1BhcmVudElkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5saW5rSWQgPSB0aGlzLmxpbmtJZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudW5MaW5rSWQgPSB0aGlzLnVuTGlua0lkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5hc0pzb24gPSB0aGlzLmFzSnNvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0bGlua1BhcmVudElkKGlkKXtcblx0XHR0aGlzLnBhcmVudElkID0gaWQ7XG5cdH07XG5cblx0dW5MaW5rUGFyZW50SWQoKXtcblx0XHR0aGlzLnBhcmVudElkID0gbnVsbDtcblx0fTtcblxuXHRsaW5rSWQoaWQpe1xuXHRcdGlmKCF0aGlzLmxpbmtlZElkcyl7XG5cdFx0XHR0aGlzLmxpbmtlZElkcyA9IFtdXG5cdFx0fVxuXG5cdFx0aWYodGhpcy5saW5rZWRJZHMuaW5kZXhPZihpZCkgPiAtMSl7XG5cdFx0XHR0aGlzLmxpbmtlZElkcy5wdXNoKGlkKVxuXHRcdH1cblx0fTtcblxuXG5cdHVuTGlua0lkKGlkKXtcblxuXHR9O1xuXG5cdC8vdG9kbzogcGFyZW50SWQ6IHRoaXMucGFyZW50SWQsIGxpbmtlZElkczogdGhpcy5saW5rZWRJZHNcblx0YXNKc29uKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiB0aGlzLmlkXG5cdFx0fTtcblx0fTtcbn1cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvU3RvcmVJRC5qcyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUyOThjZWQxNTFlZjRkODFlMWEwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTI5OGNlZDE1MWVmNGQ4MWUxYTAiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRpY2tlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0aWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX01hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG52YXIgX01hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIHRvRG86IHN1cHBvcnQgYm90aCBjYWxsYmFjayBhbmQgcHJvbWlzZVxudmFyIFRpY2tFbnRyeSA9XG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIFwidGhpc1wiIGFyZ3VtZW50IGZvciB0aGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lci5cbiAqL1xuZnVuY3Rpb24gVGlja0VudHJ5KGNvbnRleHQsIGxpc3RlbmVyKSB7XG5cdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0dmFyIHByaW9yaXR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuXG5cdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaWNrRW50cnkpO1xuXG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdHRoaXMuZXhlY3V0aW9uQ291bnQgPSAwO1xufTtcblxuLyotLS0tIFB1YmxpY3xQcm90b3R5cGUgTWV0aG9kcyAtLS0qL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNrRW50cnk7XG5UaWNrRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdFRpY2tFbnRyeS5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja0VudHJ5IGRpc3Bvc2U6XCIsIHRoaXMpO1xuXHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHR0aGlzLmxpc3RlbmVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjayA9IG51bGw7XG5cdHRoaXMucHJpb3JpdHkgPSBudWxsO1xuXHR0aGlzLmV4ZWN1dGlvbkNvdW50ID0gTmFOO1xufTtcblxuVGlja0VudHJ5LnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuXHRUaWNrRW50cnkuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIm1hbmFnZXIuYWRkOiBcIiwgdGhpcyk7XG5cdF9NYW5hZ2VyMi5kZWZhdWx0LmFkZCh0aGlzKTtcbn07XG5cblRpY2tFbnRyeS5ISUdIID0gMDtcblRpY2tFbnRyeS5OT1JNQUwgPSAxO1xuVGlja0VudHJ5LkxPVyA9IDI7XG5cblRpY2tFbnRyeS5hbGxvd2VkVGlja0NvdW50ID0gMTAwO1xuVGlja0VudHJ5LmRlYnVnID0gZmFsc2U7XG5UaWNrRW50cnkuc3RhY2tEZWJ1ZyA9IGZhbHNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGlja0VudHJ5Mi5kZWZhdWx0O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9UaWNrRW50cnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX1RpY2tFbnRyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UaWNrRW50cnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSAwOyAvLyBmb3IgV2luZG93cyBFbnZcblxuLy9bMC1ISUdILCAxLU5PUk1BTCwgMi1MT1ddXG52YXIgcHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xudmFyIHdhaXRFbnRyaWVzID0gbnVsbDtcblxudmFyIHRpY2tDb3VudCA9IDA7XG52YXIgaXNFeGVjdXRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gb25UaWNrKCkge1xuXHR0aWNrQ291bnQrKztcblx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRjb25zb2xlLmxvZyhcIlRpY2sgY291bnQ6IFwiLCB0aWNrQ291bnQpO1xuXHR9XG5cdGlmICh0aWNrQ291bnQgPCBfVGlja0VudHJ5Mi5kZWZhdWx0LmFsbG93ZWRUaWNrQ291bnQpIHtcblx0XHRleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCk7XG5cdFx0bW92ZVdhaXRpbmdFbnRyaWVzRm9yRXhlY3V0aW9uKCk7XG5cdFx0aWYgKGFyZVByaW9yaXR5RW50cmllc0VtcHR5KCkpIHtcblx0XHRcdHN0b3AoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS53YXJuKFwiQW5pbWF0aW9uIGZyYW1lIGxvb3AgZXhlY3V0ZWQgdG8gaXRzIHNldCBsaW1pdDogXCIsIF9UaWNrRW50cnkyLmRlZmF1bHQuYWxsb3dlZFRpY2tDb3VudCk7XG5cdFx0aWYgKF9UaWNrRW50cnkyLmRlZmF1bHQuZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiRW50cmllczogXCIsIHByaW9yaXR5RW50cmllc1swXSwgcHJpb3JpdHlFbnRyaWVzWzFdLCBwcmlvcml0eUVudHJpZXNbMl0sIHdhaXRFbnRyaWVzKTtcblx0XHR9XG5cdFx0cmVzZXQoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG5cdHRpY2tDb3VudCA9IDA7XG5cdGlzRXhlY3V0aW5nID0gZmFsc2U7XG5cdHRpY2tNYW5hZ2VyLnN0b3AoKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKSB7XG5cdHN0b3AoKTtcblx0cHJpb3JpdHlFbnRyaWVzID0gW251bGwsIG51bGwsIG51bGxdO1xuXHR3YWl0RW50cmllcyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIG1vdmVXYWl0aW5nRW50cmllc0ZvckV4ZWN1dGlvbigpIHtcblx0dmFyIGVudHJpZXNDb3VudCA9IHdhaXRFbnRyaWVzID8gd2FpdEVudHJpZXMubGVuZ3RoIDogMDtcblx0aWYgKHdhaXRFbnRyaWVzICYmIGVudHJpZXNDb3VudCA+IDApIHtcblx0XHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZW50cmllc0NvdW50OyBpbmRleCsrKSB7XG5cdFx0XHR2YXIgdGlja0VudHJ5ID0gd2FpdEVudHJpZXNbaW5kZXhdO1xuXHRcdFx0dmFyIHByaW9yaXR5ID0gdGlja0VudHJ5LnByaW9yaXR5O1xuXG5cdFx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdFx0cHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW3ByaW9yaXR5XTtcblx0XHRcdHRpY2tFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0XHR9XG5cdH1cblx0d2FpdEVudHJpZXMgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlUHJpb3JpdHlFbnRyaWVzKCkge1xuXHRpc0V4ZWN1dGluZyA9IHRydWU7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0ZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKTtcblx0XHRcdC8vQ2xlYXIgdGhlbSBvbmNlIGV4ZWN1dGVkXG5cdFx0XHRwcmlvcml0eUVudHJpZXNbaW5kZXhdID0gbnVsbDtcblx0XHR9XG5cdH1cblx0aXNFeGVjdXRpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVRpY2tFbnRyaWVzKHRpY2tFbnRyaWVzKSB7XG5cdC8vIGltcG9ydGFudCB0byB1c2UgZm9yLWxvb3Bcblx0Ly8gdGlja0VudHJpZXMgZ3Jvd3MgZHluYW1pY2FsbHkgYnkgb25lIG9mIGl0cyBlbnRyeVxuXHQvLyBmb3IgZXhhbXBsZTogbGV0IHNheSB3ZSBoYXZlIG9uZSBlbnRyeSwgYW5kIGV4ZWN1dGluZyB0aGF0IGVudHJ5IG1pZ2h0IGFkZHMgYW5vdGhlciBlbnRyeVxuXHQvLyB3aXRoIG1hcCBmdW5jdGlvbiB3ZSBjYW50IGV4ZWN1dGUgZHluYW1pY2FsbHkgZ3Jvd2luZyBlbnRyaWVzLlxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRpY2tFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyeSA9IHRpY2tFbnRyaWVzW2ldO1xuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBleGVjdXRlVGlja0VudHJpZXMgOiBmb3IgXCIsIGksIHRpY2tFbnRyeSk7XG5cdFx0dGlja0VudHJ5Lmxpc3RlbmVyLmNhbGwodGlja0VudHJ5LmNvbnRleHQgfHwgdGlja0VudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXG5cdFx0aWYgKHRpY2tFbnRyeS5jYWxsYmFjaykge1xuXHRcdFx0dGlja0VudHJ5LmNhbGxiYWNrLmNhbGwodGlja0VudHJ5LmNhbGxiYWNrWyd0aGlzJ10pO1xuXHRcdH1cblx0XHR0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQrKztcblx0XHRpZiAoX1RpY2tFbnRyeTIuZGVmYXVsdC5kZWJ1ZyAmJiB0aWNrRW50cnkuZXhlY3V0aW9uQ291bnQgPiAxKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNlOiBcIiwgdGlja0VudHJ5KTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSB7XG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwcmlvcml0eUVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0dmFyIHRpY2tFbnRyaWVzID0gcHJpb3JpdHlFbnRyaWVzW2luZGV4XTtcblx0XHRpZiAodGlja0VudHJpZXMgJiYgdGlja0VudHJpZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2soKSB7XG5cdHZhciBzaG91bGRDb250aW51ZSA9IG9uVGljaygpO1xuXHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdEFuaW1hdGlvbkZyYW1lQ2FsbGJhY2spO1xuXHR9XG59XG5cbnZhciBUaWNrTWFuYWdlciA9IGZ1bmN0aW9uIFRpY2tNYW5hZ2VyKCkge1xuXHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGlja01hbmFnZXIpO1xufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0aWNrRW50cnkpIHtcblx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IGFkZCA6IFwiLCB0aWNrRW50cnkpO1xuXHRpZiAoYXJlUHJpb3JpdHlFbnRyaWVzRW1wdHkoKSkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXHRpZiAoaXNFeGVjdXRpbmcpIHtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogYWRkIDogIHdhaXQgXCIpO1xuXHRcdGlmICghd2FpdEVudHJpZXMpIHtcblx0XHRcdHdhaXRFbnRyaWVzID0gW107XG5cdFx0fVxuXHRcdHdhaXRFbnRyaWVzLnB1c2godGlja0VudHJ5KTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcHJpb3JpdHkgPSB0aWNrRW50cnkucHJpb3JpdHk7XG5cblx0XHRpZiAoIXByaW9yaXR5RW50cmllc1twcmlvcml0eV0pIHtcblx0XHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBpbiBcIiArIHByaW9yaXR5ICsgXCIgOiBuZXcgQXJyYXlcIik7XG5cdFx0XHRwcmlvcml0eUVudHJpZXNbcHJpb3JpdHldID0gW107XG5cdFx0fVxuXHRcdF9UaWNrRW50cnkyLmRlZmF1bHQuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlRpY2tNYW5hZ2VyOiBhZGQgOiBpbiBcIiArIHByaW9yaXR5ICsgXCIgOiBwdXNoXCIpO1xuXHRcdHZhciB0aWNrRW50cmllcyA9IHByaW9yaXR5RW50cmllc1twcmlvcml0eV07XG5cdFx0dGlja0VudHJpZXMucHVzaCh0aWNrRW50cnkpO1xuXHR9XG59O1xuXG4vLyBUb2RvOiBTdXBwb3J0IGZvciBOb2RlSlMgXG5UaWNrTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHQvLyB3aWxsIHJlY2VpdmVzIHRpbWVzdGFtcCBhcyBhcmd1bWVudFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0QW5pbWF0aW9uRnJhbWVDYWxsYmFjayk7XG5cdFx0X1RpY2tFbnRyeTIuZGVmYXVsdC5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiVGlja01hbmFnZXI6IHN0YXJ0IDogXCIsIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxuVGlja01hbmFnZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh3aW5kb3cpIHtcblx0XHRfVGlja0VudHJ5Mi5kZWZhdWx0LnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJUaWNrTWFuYWdlcjogc3RvcCA6IFwiLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCk7XG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RBbmltYXRpb25GcmFtZUlkKTtcblx0fVxufTtcblxudmFyIHRpY2tNYW5hZ2VyID0gbmV3IFRpY2tNYW5hZ2VyKCk7XG5cbi8vIHNpbmdsZXRvbkluc3RhbmFjZVxuZXhwb3J0cy5kZWZhdWx0ID0gdGlja01hbmFnZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQTNPVEU0TURkbU5EazNORFpsT0RaaFpqUTRNeUlzSW5kbFluQmhZMnM2THk4dkxpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5c2FXSXZUV0Z1WVdkbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKVWFXTnJSVzUwY25raUxDSmpiMjUwWlhoMElpd2liR2x6ZEdWdVpYSWlMQ0pqWVd4c1ltRmpheUlzSW5CeWFXOXlhWFI1SWl3aVpYaGxZM1YwYVc5dVEyOTFiblFpTENKd2NtOTBiM1I1Y0dVaUxDSmthWE53YjNObElpd2ljM1JoWTJ0RVpXSjFaeUlzSW1OdmJuTnZiR1VpTENKc2IyY2lMQ0pPWVU0aUxDSmxlR1ZqZFhSbElpd2lZV1JrSWl3aVNFbEhTQ0lzSWs1UFVrMUJUQ0lzSWt4UFZ5SXNJbUZzYkc5M1pXUlVhV05yUTI5MWJuUWlMQ0prWldKMVp5SXNJbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lpd2ljSEpwYjNKcGRIbEZiblJ5YVdWeklpd2lkMkZwZEVWdWRISnBaWE1pTENKMGFXTnJRMjkxYm5RaUxDSnBjMFY0WldOMWRHbHVaeUlzSW05dVZHbGpheUlzSW1WNFpXTjFkR1ZRY21sdmNtbDBlVVZ1ZEhKcFpYTWlMQ0p0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0aUxDSmhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNJc0luTjBiM0FpTENKM1lYSnVJaXdpY21WelpYUWlMQ0owYVdOclRXRnVZV2RsY2lJc0ltVnVkSEpwWlhORGIzVnVkQ0lzSW14bGJtZDBhQ0lzSW1sdVpHVjRJaXdpZEdsamEwVnVkSEo1SWl3aWRHbGphMFZ1ZEhKcFpYTWlMQ0p3ZFhOb0lpd2laWGhsWTNWMFpWUnBZMnRGYm5SeWFXVnpJaXdpYVNJc0ltTmhiR3dpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVkRZV3hzWW1GamF5SXNJbk5vYjNWc1pFTnZiblJwYm5WbElpd2lkMmx1Wkc5M0lpd2ljbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSWl3aVZHbGphMDFoYm1GblpYSWlMQ0p6ZEdGeWRDSXNJbU5oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJRemRFUVRzN096czdPenM3UVVGRlFUdEpRVU54UWtFc1V6dEJRVVZ3UWpzN096dEJRVWxCTEcxQ1FVRlpReXhQUVVGYUxFVkJRWEZDUXl4UlFVRnlRaXhGUVVOQk8wRkJRVUVzUzBGRUswSkRMRkZCUXk5Q0xIVkZRVVF3UXl4SlFVTXhRenRCUVVGQkxFdEJSR2RFUXl4UlFVTm9SQ3gxUlVGRU1rUXNRMEZETTBRN08wRkJRVUU3TzBGQlEwTXNUVUZCUzBnc1QwRkJUQ3hIUVVGbFFTeFBRVUZtTzBGQlEwRXNUVUZCUzBNc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRRU3hOUVVGTFF5eFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBFc1RVRkJTME1zWTBGQlRDeEhRVUZ6UWl4RFFVRjBRanRCUVVOQkxFTTdPMEZCU1VZN08ydENRV3BDY1VKTUxGTTdRVUZ0UW5KQ1FTeFZRVUZWVFN4VFFVRldMRU5CUVc5Q1F5eFBRVUZ3UWl4SFFVRTRRaXhaUVVGVk8wRkJRM1pEVUN4WFFVRlZVU3hWUVVGV0xFbEJRWGRDUXl4UlFVRlJReXhIUVVGU0xFTkJRVmtzYjBKQlFWb3NSVUZCYTBNc1NVRkJiRU1zUTBGQmVFSTdRVUZEUVN4TlFVRkxWQ3hQUVVGTUxFZEJRV1VzU1VGQlpqdEJRVU5CTEUxQlFVdERMRkZCUVV3c1IwRkJaMElzU1VGQmFFSTdRVUZEUVN4TlFVRkxReXhSUVVGTUxFZEJRV2RDTEVsQlFXaENPMEZCUTBFc1RVRkJTME1zVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxFMUJRVXRETEdOQlFVd3NSMEZCYzBKTkxFZEJRWFJDTzBGQlEwRXNRMEZRUkRzN1FVRlRRVmdzVlVGQlZVMHNVMEZCVml4RFFVRnZRazBzVDBGQmNFSXNSMEZCT0VJc1dVRkJWVHRCUVVOMlExb3NWMEZCVlZFc1ZVRkJWaXhKUVVGM1FrTXNVVUZCVVVNc1IwRkJVaXhEUVVGWkxHVkJRVm9zUlVGQk5rSXNTVUZCTjBJc1EwRkJlRUk3UVVGRFFTeHRRa0ZCVVVjc1IwRkJVaXhEUVVGWkxFbEJRVm83UVVGRFFTeERRVWhFT3p0QlFVMUJZaXhWUVVGVll5eEpRVUZXTEVkQlFXbENMRU5CUVdwQ08wRkJRMEZrTEZWQlFWVmxMRTFCUVZZc1IwRkJiVUlzUTBGQmJrSTdRVUZEUVdZc1ZVRkJWV2RDTEVkQlFWWXNSMEZCWjBJc1EwRkJhRUk3TzBGQlJVRm9RaXhWUVVGVmFVSXNaMEpCUVZZc1IwRkJOa0lzUjBGQk4wSTdRVUZEUVdwQ0xGVkJRVlZyUWl4TFFVRldMRWRCUVd0Q0xFdEJRV3hDTzBGQlEwRnNRaXhWUVVGVlVTeFZRVUZXTEVkQlFYVkNMRXRCUVhaQ0xFTTdPenM3T3pzN096czdPenM3UVVNelEwRTdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096czdPenM3UVVGRFFTeEpRVUZKVnl3d1FrRkJNRUlzUTBGQk9VSXNReXhEUVVGblF6czdRVUZGYUVNN1FVRkRRU3hKUVVGSlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGRUxFVkJRVThzU1VGQlVDeEZRVUZoTEVsQlFXSXNRMEZCZEVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEVsQlFXeENPenRCUVVWQkxFbEJRVWxETEZsQlFWa3NRMEZCYUVJN1FVRkRRU3hKUVVGSlF5eGpRVUZqTEV0QlFXeENPenRCUVVWQkxGTkJRVk5ETEUxQlFWUXNSMEZCYVVJN1FVRkRhRUpHTzBGQlEwRXNTMEZCUnl4dlFrRkJWVW9zUzBGQllpeEZRVUZ0UWp0QlFVTnNRbFFzVlVGQlVVTXNSMEZCVWl4RFFVRlpMR05CUVZvc1JVRkJORUpaTEZOQlFUVkNPMEZCUTBFN1FVRkRSQ3hMUVVGSFFTeFpRVUZaTEc5Q1FVRlZUQ3huUWtGQmVrSXNSVUZCTUVNN1FVRkRla05STzBGQlEwRkRPMEZCUTBFc1RVRkJSME1zZVVKQlFVZ3NSVUZCTmtJN1FVRkROVUpETzBGQlEwRXNWVUZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSQ3hGUVZCRUxFMUJUMDg3UVVGRFRtNUNMRlZCUVZGdlFpeEpRVUZTTEVOQlFXRXNhMFJCUVdJc1JVRkJhVVVzYjBKQlFWVmFMR2RDUVVFelJUdEJRVU5CTEUxQlFVY3NiMEpCUVZWRExFdEJRV0lzUlVGQmJVSTdRVUZEYkVKVUxGZEJRVkZETEVkQlFWSXNRMEZCV1N4WFFVRmFMRVZCUVhsQ1ZTeG5Ra0ZCWjBJc1EwRkJhRUlzUTBGQmVrSXNSVUZCTkVOQkxHZENRVUZuUWl4RFFVRm9RaXhEUVVFMVF5eEZRVUVyUkVFc1owSkJRV2RDTEVOQlFXaENMRU5CUVM5RUxFVkJRV3RHUXl4WFFVRnNSanRCUVVOQk8wRkJRMFJUTzBGQlEwRXNVMEZCVHl4TFFVRlFPMEZCUTBFN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRlFUczdRVUZIUkN4VFFVRlRSaXhKUVVGVUxFZEJRV1U3UVVGRFpFNHNZVUZCV1N4RFFVRmFPMEZCUTBGRExHVkJRV01zUzBGQlpEdEJRVU5CVVN4aFFVRlpTQ3hKUVVGYU8wRkJRMEU3TzBGQlJVUXNVMEZCVTBVc1MwRkJWQ3hIUVVGblFqdEJRVU5tUmp0QlFVTkJVaXh0UWtGQmEwSXNRMEZCUXl4SlFVRkVMRVZCUVU4c1NVRkJVQ3hGUVVGaExFbEJRV0lzUTBGQmJFSTdRVUZEUVVNc1pVRkJZeXhKUVVGa08wRkJRMEU3TzBGQlIwUXNVMEZCVTBzc09FSkJRVlFzUjBGQmVVTTdRVUZEZUVNc1MwRkJUVTBzWlVGQlpWZ3NZMEZCWlVFc1dVRkJXVmtzVFVGQk0wSXNSMEZCYjBNc1EwRkJla1E3UVVGRFFTeExRVUZIV2l4bFFVRmxWeXhsUVVGbExFTkJRV3BETEVWQlFXOURPMEZCUTI1RExFOUJRVWtzU1VGQlNVVXNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVVZc1dVRkJOVUlzUlVGQk1FTkZMRTlCUVRGRExFVkJRV3RFTzBGQlEycEVMRTlCUVVsRExGbEJRVmxrTEZsQlFWbGhMRXRCUVZvc1EwRkJhRUk3UVVGRWFVUXNUMEZGZWtNNVFpeFJRVVo1UXl4SFFVVTFRaXRDTEZOQlJqUkNMRU5CUlhwREwwSXNVVUZHZVVNN08wRkJSMnBFTEU5QlFVY3NRMEZCUTJkQ0xHZENRVUZuUW1oQ0xGRkJRV2hDTEVOQlFVb3NSVUZCT0VJN1FVRkROMEpuUWl4dlFrRkJaMEpvUWl4UlFVRm9RaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkJPMEZCUTBRc1QwRkJUV2RETEdOQlFXTm9RaXhuUWtGQlowSm9RaXhSUVVGb1FpeERRVUZ3UWp0QlFVTkJaME1zWlVGQldVTXNTVUZCV2l4RFFVRnBRa1lzVTBGQmFrSTdRVUZEUVR0QlFVTkVPMEZCUTBSa0xHVkJRV01zU1VGQlpEdEJRVU5CT3p0QlFVVkVMRk5CUVZOSkxITkNRVUZVTEVkQlFXbERPMEZCUTJoRFJpeGxRVUZqTEVsQlFXUTdRVUZEUVN4TlFVRkpMRWxCUVVsWExGRkJRVkVzUTBGQmFFSXNSVUZCYjBKQkxGRkJRVkZrTEdkQ1FVRm5RbUVzVFVGQk5VTXNSVUZCYjBSRExFOUJRWEJFTEVWQlFUUkVPMEZCUXpORUxFMUJRVWxGTEdOQlFXTm9RaXhuUWtGQlowSmpMRXRCUVdoQ0xFTkJRV3hDTzBGQlEwRXNUVUZCUjBVc1pVRkJaVUVzV1VGQldVZ3NUVUZCV2l4SFFVRnhRaXhEUVVGMlF5eEZRVUV3UXp0QlFVTjZRMHNzYzBKQlFXMUNSaXhYUVVGdVFqdEJRVU5CTzBGQlEwRm9RaXh0UWtGQlowSmpMRXRCUVdoQ0xFbEJRWGxDTEVsQlFYcENPMEZCUTBFN1FVRkRSRHRCUVVORVdDeGxRVUZqTEV0QlFXUTdRVUZEUVRzN1FVRkZSQ3hUUVVGVFpTeHJRa0ZCVkN4RFFVRTBRa1lzVjBGQk5VSXNSVUZCZDBNN1FVRkRka003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkpMRWxCUVVsSExFbEJRVWtzUTBGQldpeEZRVUZsUVN4SlFVRkpTQ3haUVVGWlNDeE5RVUV2UWl4RlFVRjFRMDBzUjBGQmRrTXNSVUZCTWtNN1FVRkRNVU1zVFVGQlRVb3NXVUZCV1VNc1dVRkJXVWNzUTBGQldpeERRVUZzUWp0QlFVTkJMSE5DUVVGVkwwSXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSGREUVVGYUxFVkJRWFZFTmtJc1EwRkJka1FzUlVGQk1FUktMRk5CUVRGRUxFTkJRWGhDTzBGQlEwRkJMRmxCUVZWcVF5eFJRVUZXTEVOQlFXMUNjME1zU1VGQmJrSXNRMEZCZDBKTUxGVkJRVlZzUXl4UFFVRldMRWxCUVhGQ2EwTXNWVUZCVldwRExGRkJRVllzUTBGQmJVSXNUVUZCYmtJc1EwRkJOME03TzBGQlJVRXNUVUZCU1dsRExGVkJRVlZvUXl4UlFVRmtMRVZCUVhkQ08wRkJRM1pDWjBNc1lVRkJWV2hETEZGQlFWWXNRMEZCYlVKeFF5eEpRVUZ1UWl4RFFVRjNRa3dzVlVGQlZXaERMRkZCUVZZc1EwRkJiVUlzVFVGQmJrSXNRMEZCZUVJN1FVRkRRVHRCUVVORVowTXNXVUZCVlRsQ0xHTkJRVlk3UVVGRFFTeE5RVUZITEc5Q1FVRlZZU3hMUVVGV0xFbEJRVzFDYVVJc1ZVRkJWVGxDTEdOQlFWWXNSMEZCTWtJc1EwRkJha1FzUlVGQmJVUTdRVUZEYkVSSkxGZEJRVkZETEVkQlFWSXNRMEZCV1N3eVFrRkJXaXhGUVVGNVEzbENMRk5CUVhwRE8wRkJRMEU3UVVGRFJEdEJRVU5FT3p0QlFVVkVMRk5CUVZOU0xIVkNRVUZVTEVkQlFXdERPMEZCUTJwRExFMUJRVWtzU1VGQlNVOHNVVUZCVVN4RFFVRm9RaXhGUVVGdlFrRXNVVUZCVVdRc1owSkJRV2RDWVN4TlFVRTFReXhGUVVGdlJFTXNUMEZCY0VRc1JVRkJORVE3UVVGRE0wUXNUVUZCU1VVc1kwRkJZMmhDTEdkQ1FVRm5RbU1zUzBGQmFFSXNRMEZCYkVJN1FVRkRRU3hOUVVGSFJTeGxRVUZsUVN4WlFVRlpTQ3hOUVVGYUxFZEJRWEZDTEVOQlFYWkRMRVZCUVRCRE8wRkJRM3BETEZWQlFVOHNTMEZCVUR0QlFVTkJPMEZCUTBRN1FVRkRSQ3hSUVVGUExFbEJRVkE3UVVGRFFUczdRVUZGUkN4VFFVRlRVU3cyUWtGQlZDeEhRVUYzUXp0QlFVTjJReXhMUVVGTlF5eHBRa0ZCYVVKc1FpeFJRVUYyUWp0QlFVTkJMRXRCUVVkclFpeGpRVUZJTEVWQlFXdENPMEZCUTJwQ2RrSXNORUpCUVRCQ2QwSXNUMEZCVDBNc2NVSkJRVkFzUTBGQk5rSklMRFpDUVVFM1FpeERRVUV4UWp0QlFVTkJPMEZCUTBRN08wbEJSVXRKTEZjc1IwRkRUQ3gxUWtGQllUdEJRVUZCTzBGQlExb3NRenM3UVVGSFJrRXNXVUZCV1haRExGTkJRVm9zUTBGQmMwSlBMRWRCUVhSQ0xFZEJRVFJDTEZWQlFWVnpRaXhUUVVGV0xFVkJRWEZDTzBGQlEyaEVMSEZDUVVGVk0wSXNWVUZCVml4SlFVRjNRa01zVVVGQlVVTXNSMEZCVWl4RFFVRlpMSEZDUVVGYUxFVkJRVzlEZVVJc1UwRkJjRU1zUTBGQmVFSTdRVUZEUVN4TFFVRkhVaXg1UWtGQlNDeEZRVUUyUWp0QlFVTTFRaXhQUVVGTGJVSXNTMEZCVER0QlFVTkJPMEZCUTBRc1MwRkJSM1pDTEZkQlFVZ3NSVUZCWlR0QlFVTmtMSE5DUVVGVlppeFZRVUZXTEVsQlFYZENReXhSUVVGUlF5eEhRVUZTTEVOQlFWa3NNa0pCUVZvc1EwRkJlRUk3UVVGRFFTeE5RVUZITEVOQlFVTlhMRmRCUVVvc1JVRkJaMEk3UVVGRFprRXNhVUpCUVdNc1JVRkJaRHRCUVVOQk8wRkJRMFJCTEdOQlFWbG5RaXhKUVVGYUxFTkJRV2xDUml4VFFVRnFRanRCUVVOQkxFVkJUa1FzVFVGTlR6dEJRVUZCTEUxQlEwVXZRaXhSUVVSR0xFZEJRMlVyUWl4VFFVUm1MRU5CUTBVdlFpeFJRVVJHT3p0QlFVVk9MRTFCUVVjc1EwRkJRMmRDTEdkQ1FVRm5RbWhDTEZGQlFXaENMRU5CUVVvc1JVRkJPRUk3UVVGRE4wSXNkVUpCUVZWSkxGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTd3lRa0ZCZVVKT0xGRkJRWHBDTEVkQlFXdERMR05CUVRsRExFTkJRWGhDTzBGQlEwRm5RaXh0UWtGQlowSm9RaXhSUVVGb1FpeEpRVUUwUWl4RlFVRTFRanRCUVVOQk8wRkJRMFFzYzBKQlFWVkpMRlZCUVZZc1NVRkJkMEpETEZGQlFWRkRMRWRCUVZJc1EwRkJXU3d5UWtGQmVVSk9MRkZCUVhwQ0xFZEJRV3RETEZOQlFUbERMRU5CUVhoQ08wRkJRMEVzVFVGQlRXZERMR05CUVdOb1FpeG5Ra0ZCWjBKb1FpeFJRVUZvUWl4RFFVRndRanRCUVVOQlowTXNZMEZCV1VNc1NVRkJXaXhEUVVGcFFrWXNVMEZCYWtJN1FVRkRRVHRCUVVWRUxFTkJkRUpFT3p0QlFYbENRVHRCUVVOQlZTeFpRVUZaZGtNc1UwRkJXaXhEUVVGelFuZERMRXRCUVhSQ0xFZEJRVGhDTEZsQlFWazdRVUZEZWtNc1MwRkJSMGdzVFVGQlNDeEZRVUZWTzBGQlExUTdRVUZEUVhoQ0xEUkNRVUV3UW5kQ0xFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ1NDdzJRa0ZCTjBJc1EwRkJNVUk3UVVGRFFTeHpRa0ZCVldwRExGVkJRVllzU1VGQmQwSkRMRkZCUVZGRExFZEJRVklzUTBGQldTeDFRa0ZCV2l4RlFVRnhRMU1zZFVKQlFYSkRMRU5CUVhoQ08wRkJRMEU3UVVGRFJDeERRVTVFT3p0QlFWTkJNRUlzV1VGQldYWkRMRk5CUVZvc1EwRkJjMEp6UWl4SlFVRjBRaXhIUVVFMlFpeFpRVUZaTzBGQlEzaERMRXRCUVVkbExFMUJRVWdzUlVGQlZUdEJRVU5VTEhOQ1FVRlZia01zVlVGQlZpeEpRVUYzUWtNc1VVRkJVVU1zUjBGQlVpeERRVUZaTEhOQ1FVRmFMRVZCUVc5RFV5eDFRa0ZCY0VNc1EwRkJlRUk3UVVGRFFYZENMRk5CUVU5SkxHOUNRVUZRTEVOQlFUUkNOVUlzZFVKQlFUVkNPMEZCUTBFN1FVRkRSQ3hEUVV4RU96dEJRVTlCTEVsQlFVMVpMR05CUVdNc1NVRkJTV01zVjBGQlNpeEZRVUZ3UWpzN1FVRkZRVHRyUWtGRFpXUXNWeUlzSW1acGJHVWlPaUpzYVdJdmRHbGphMlZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9YQ0owYVdOclpYSmNJaXdnVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lkR2xqYTJWeVhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0luUnBZMnRsY2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeEtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NBM09URTRNRGRtTkRrM05EWmxPRFpoWmpRNE15SXNJbWx0Y0c5eWRDQnRZVzVoWjJWeUlHWnliMjBnSnk0dlRXRnVZV2RsY2ljN1hHNWNiaTh2SUhSdlJHODZJSE4xY0hCdmNuUWdZbTkwYUNCallXeHNZbUZqYXlCaGJtUWdjSEp2YldselpWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdsamEwVnVkSEo1WEc1N1hHNWNkQzhxS2x4dVhIUWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdZMjl1ZEdWNGRDQXRJRlJvWlNCY0luUm9hWE5jSWlCaGNtZDFiV1Z1ZENCbWIzSWdkR2hsSUd4cGMzUmxibVZ5SUdaMWJtTjBhVzl1TGx4dVhIUWdLaUJBY0dGeVlXMGdlMloxYm1OMGFXOXVmU0JzYVhOMFpXNWxjaTVjYmx4MElDb3ZYRzVjZEdOdmJuTjBjblZqZEc5eUtHTnZiblJsZUhRc0lHeHBjM1JsYm1WeUxDQmpZV3hzWW1GamF5QTlJRzUxYkd3c0lIQnlhVzl5YVhSNUlEMGdNQ2xjYmx4MGUxeHVYSFJjZEhSb2FYTXVZMjl1ZEdWNGRDQTlJR052Ym5SbGVIUTdYRzVjZEZ4MGRHaHBjeTVzYVhOMFpXNWxjaUE5SUd4cGMzUmxibVZ5TzF4dVhIUmNkSFJvYVhNdVkyRnNiR0poWTJzZ1BTQmpZV3hzWW1GamF6dGNibHgwWEhSMGFHbHpMbkJ5YVc5eWFYUjVJRDBnY0hKcGIzSnBkSGs3WEc1Y2RGeDBkR2hwY3k1bGVHVmpkWFJwYjI1RGIzVnVkQ0E5SURBN1hHNWNkSDFjYmx4dWZWeHVYRzR2S2kwdExTMGdVSFZpYkdsamZGQnliM1J2ZEhsd1pTQk5aWFJvYjJSeklDMHRMU292WEc1Y2JsUnBZMnRGYm5SeWVTNXdjbTkwYjNSNWNHVXVaR2x6Y0c5elpTQTlJR1oxYm1OMGFXOXVLQ2w3WEc1Y2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTBWdWRISjVJR1JwYzNCdmMyVTZYQ0lzSUhSb2FYTXBPMXh1WEhSMGFHbHpMbU52Ym5SbGVIUWdQU0J1ZFd4c08xeHVYSFIwYUdsekxteHBjM1JsYm1WeUlEMGdiblZzYkR0Y2JseDBkR2hwY3k1allXeHNZbUZqYXlBOUlHNTFiR3c3WEc1Y2RIUm9hWE11Y0hKcGIzSnBkSGtnUFNCdWRXeHNPMXh1WEhSMGFHbHpMbVY0WldOMWRHbHZia052ZFc1MElEMGdUbUZPTzF4dWZUdGNibHh1VkdsamEwVnVkSEo1TG5CeWIzUnZkSGx3WlM1bGVHVmpkWFJsSUQwZ1puVnVZM1JwYjI0b0tYdGNibHgwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKdFlXNWhaMlZ5TG1Ga1pEb2dYQ0lzSUhSb2FYTXBPMXh1WEhSdFlXNWhaMlZ5TG1Ga1pDaDBhR2x6S1R0Y2JuMDdYRzVjYmx4dVZHbGphMFZ1ZEhKNUxraEpSMGdnUFNBd08xeHVWR2xqYTBWdWRISjVMazVQVWsxQlRDQTlJREU3WEc1VWFXTnJSVzUwY25rdVRFOVhJRDBnTWp0Y2JseHVWR2xqYTBWdWRISjVMbUZzYkc5M1pXUlVhV05yUTI5MWJuUWdQU0F4TURBN1hHNVVhV05yUlc1MGNua3VaR1ZpZFdjZ1BTQm1ZV3h6WlR0Y2JsUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JRDBnWm1Gc2MyVTdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXNhV0l2VkdsamEwVnVkSEo1TG1weklpd2lhVzF3YjNKMElGUnBZMnRsY2lCbWNtOXRJQ2N1TDFScFkydEZiblJ5ZVNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGUnBZMnRsY2p0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDJ4cFlpOXBibVJsZUM1cWN5SXNJbWx0Y0c5eWRDQlVhV05yUlc1MGNua2dabkp2YlNBbkxpOVVhV05yUlc1MGNua25PMXh1YkdWMElISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVWxrSUQwZ01Ec3ZMeUJtYjNJZ1YybHVaRzkzY3lCRmJuWmNibHh1THk5Yk1DMUlTVWRJTENBeExVNVBVazFCVEN3Z01pMU1UMWRkWEc1c1pYUWdjSEpwYjNKcGRIbEZiblJ5YVdWeklEMGdXMjUxYkd3c0lHNTFiR3dzSUc1MWJHeGRPMXh1YkdWMElIZGhhWFJGYm5SeWFXVnpJRDBnYm5Wc2JEdGNibHh1YkdWMElIUnBZMnREYjNWdWRDQTlJREE3WEc1c1pYUWdhWE5GZUdWamRYUnBibWNnUFNCbVlXeHpaVHRjYmx4dVpuVnVZM1JwYjI0Z2IyNVVhV05yS0NsN1hHNWNkSFJwWTJ0RGIzVnVkQ3NyTzF4dVhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY3BlMXh1WEhSY2RHTnZibk52YkdVdWJHOW5LRndpVkdsamF5QmpiM1Z1ZERvZ1hDSXNJSFJwWTJ0RGIzVnVkQ2s3WEc1Y2RIMWNibHgwYVdZb2RHbGphME52ZFc1MElEd2dWR2xqYTBWdWRISjVMbUZzYkc5M1pXUlVhV05yUTI5MWJuUXBlMXh1WEhSY2RHVjRaV04xZEdWUWNtbHZjbWwwZVVWdWRISnBaWE1vS1R0Y2JseDBYSFJ0YjNabFYyRnBkR2x1WjBWdWRISnBaWE5HYjNKRmVHVmpkWFJwYjI0b0tUdGNibHgwWEhScFppaGhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNncEtYdGNibHgwWEhSY2RITjBiM0FvS1R0Y2JseDBYSFJjZEhKbGRIVnliaUJtWVd4elpUdGNibHgwWEhSOVhHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFkyOXVjMjlzWlM1M1lYSnVLRndpUVc1cGJXRjBhVzl1SUdaeVlXMWxJR3h2YjNBZ1pYaGxZM1YwWldRZ2RHOGdhWFJ6SUhObGRDQnNhVzFwZERvZ1hDSXNJRlJwWTJ0RmJuUnllUzVoYkd4dmQyVmtWR2xqYTBOdmRXNTBLVHRjYmx4MFhIUnBaaWhVYVdOclJXNTBjbmt1WkdWaWRXY3BlMXh1WEhSY2RGeDBZMjl1YzI5c1pTNXNiMmNvWENKRmJuUnlhV1Z6T2lCY0lpd2djSEpwYjNKcGRIbEZiblJ5YVdWeld6QmRMSEJ5YVc5eWFYUjVSVzUwY21sbGMxc3hYU3h3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJNbDBzZDJGcGRFVnVkSEpwWlhNcE8xeHVYSFJjZEgxY2JseDBYSFJ5WlhObGRDZ3BPMXh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYSFJ5WlhSMWNtNGdkSEoxWlR0Y2JseHVmVnh1WEc1Y2JtWjFibU4wYVc5dUlITjBiM0FvS1h0Y2JseDBkR2xqYTBOdmRXNTBJRDBnTUR0Y2JseDBhWE5GZUdWamRYUnBibWNnUFNCbVlXeHpaVHRjYmx4MGRHbGphMDFoYm1GblpYSXVjM1J2Y0NncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYTmxkQ2dwZTF4dVhIUnpkRzl3S0NrN1hHNWNkSEJ5YVc5eWFYUjVSVzUwY21sbGN5QTlJRnR1ZFd4c0xDQnVkV3hzTENCdWRXeHNYVHRjYmx4MGQyRnBkRVZ1ZEhKcFpYTWdQU0J1ZFd4c08xeHVmVnh1WEc1Y2JtWjFibU4wYVc5dUlHMXZkbVZYWVdsMGFXNW5SVzUwY21sbGMwWnZja1Y0WldOMWRHbHZiaWdwZTF4dVhIUmpiMjV6ZENCbGJuUnlhV1Z6UTI5MWJuUWdQU0IzWVdsMFJXNTBjbWxsY3lBL0lDQjNZV2wwUlc1MGNtbGxjeTVzWlc1bmRHZ2dPaUF3TzF4dVhIUnBaaWgzWVdsMFJXNTBjbWxsY3lBbUppQmxiblJ5YVdWelEyOTFiblFnUGlBd0tTQjdYRzVjZEZ4MFptOXlLR3hsZENCcGJtUmxlQ0E5SURBZ095QnBibVJsZUNBOElHVnVkSEpwWlhORGIzVnVkRHNnYVc1a1pYZ3JLeWw3WEc1Y2RGeDBYSFJzWlhRZ2RHbGphMFZ1ZEhKNUlEMGdkMkZwZEVWdWRISnBaWE5iYVc1a1pYaGRPMXh1WEhSY2RGeDBZMjl1YzNRZ2V5QndjbWx2Y21sMGVTQjlJRDBnZEdsamEwVnVkSEo1TzF4dVhIUmNkRngwYVdZb0lYQnlhVzl5YVhSNVJXNTBjbWxsYzF0d2NtbHZjbWwwZVYwcGUxeHVYSFJjZEZ4MFhIUndjbWx2Y21sMGVVVnVkSEpwWlhOYmNISnBiM0pwZEhsZElEMGdXMTA3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBYSFJqYjI1emRDQjBhV05yUlc1MGNtbGxjeUE5SUhCeWFXOXlhWFI1Ulc1MGNtbGxjMXR3Y21sdmNtbDBlVjA3WEc1Y2RGeDBYSFIwYVdOclJXNTBjbWxsY3k1d2RYTm9LSFJwWTJ0RmJuUnllU2s3WEc1Y2RGeDBmVnh1WEhSOVhHNWNkSGRoYVhSRmJuUnlhV1Z6SUQwZ2JuVnNiRHRjYm4xY2JseHVablZ1WTNScGIyNGdaWGhsWTNWMFpWQnlhVzl5YVhSNVJXNTBjbWxsY3lncGUxeHVYSFJwYzBWNFpXTjFkR2x1WnlBOUlIUnlkV1U3WEc1Y2RHWnZjaWhzWlhRZ2FXNWtaWGdnUFNBd0lEc2dhVzVrWlhnZ1BDQndjbWx2Y21sMGVVVnVkSEpwWlhNdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1h0Y2JseDBYSFJzWlhRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJhVzVrWlhoZE8xeHVYSFJjZEdsbUtIUnBZMnRGYm5SeWFXVnpJQ1ltSUhScFkydEZiblJ5YVdWekxteGxibWQwYUNBK0lEQXBJSHRjYmx4MFhIUmNkR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeWgwYVdOclJXNTBjbWxsY3lrN1hHNWNkRngwWEhRdkwwTnNaV0Z5SUhSb1pXMGdiMjVqWlNCbGVHVmpkWFJsWkZ4dVhIUmNkRngwY0hKcGIzSnBkSGxGYm5SeWFXVnpXMmx1WkdWNFhTQTlJRzUxYkd3N1hHNWNkRngwZlZ4dVhIUjlYRzVjZEdselJYaGxZM1YwYVc1bklEMGdabUZzYzJVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdWNFpXTjFkR1ZVYVdOclJXNTBjbWxsY3loMGFXTnJSVzUwY21sbGN5bDdYRzVjZEM4dklHbHRjRzl5ZEdGdWRDQjBieUIxYzJVZ1ptOXlMV3h2YjNCY2JseDBMeThnZEdsamEwVnVkSEpwWlhNZ1ozSnZkM01nWkhsdVlXMXBZMkZzYkhrZ1lua2diMjVsSUc5bUlHbDBjeUJsYm5SeWVWeHVYSFF2THlCbWIzSWdaWGhoYlhCc1pUb2diR1YwSUhOaGVTQjNaU0JvWVhabElHOXVaU0JsYm5SeWVTd2dZVzVrSUdWNFpXTjFkR2x1WnlCMGFHRjBJR1Z1ZEhKNUlHMXBaMmgwSUdGa1pITWdZVzV2ZEdobGNpQmxiblJ5ZVZ4dVhIUXZMeUIzYVhSb0lHMWhjQ0JtZFc1amRHbHZiaUIzWlNCallXNTBJR1Y0WldOMWRHVWdaSGx1WVcxcFkyRnNiSGtnWjNKdmQybHVaeUJsYm5SeWFXVnpMbHh1WEhSbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHbGphMFZ1ZEhKcFpYTXViR1Z1WjNSb095QnBLeXNwZTF4dVhIUmNkR052Ym5OMElIUnBZMnRGYm5SeWVTQTlJSFJwWTJ0RmJuUnlhV1Z6VzJsZE8xeHVYSFJjZEZScFkydEZiblJ5ZVM1emRHRmphMFJsWW5WbklDWW1JR052Ym5OdmJHVXViRzluS0Z3aVZHbGphMDFoYm1GblpYSTZJR1Y0WldOMWRHVlVhV05yUlc1MGNtbGxjeUE2SUdadmNpQmNJaUFzSUdrc0lIUnBZMnRGYm5SeWVTazdYRzVjZEZ4MGRHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeUxtTmhiR3dvZEdsamEwVnVkSEo1TG1OdmJuUmxlSFFnZkh3Z2RHbGphMFZ1ZEhKNUxteHBjM1JsYm1WeVd5ZDBhR2x6SjEwcE8xeHVYRzVjZEZ4MGFXWWdLSFJwWTJ0RmJuUnllUzVqWVd4c1ltRmpheWtnZTF4dVhIUmNkRngwZEdsamEwVnVkSEo1TG1OaGJHeGlZV05yTG1OaGJHd29kR2xqYTBWdWRISjVMbU5oYkd4aVlXTnJXeWQwYUdsekoxMHBPMXh1WEhSY2RIMWNibHgwWEhSMGFXTnJSVzUwY25rdVpYaGxZM1YwYVc5dVEyOTFiblFyS3p0Y2JseDBYSFJwWmloVWFXTnJSVzUwY25rdVpHVmlkV2NnSmlZZ2RHbGphMFZ1ZEhKNUxtVjRaV04xZEdsdmJrTnZkVzUwSUQ0Z01TbDdYRzVjZEZ4MFhIUmpiMjV6YjJ4bExteHZaeWhjSWtWNFpXTjFkR1ZrSUcxdmNtVWdkR2hoYmlCdmJtTmxPaUJjSWl3Z2RHbGphMFZ1ZEhKNUtUdGNibHgwWEhSOVhHNWNkSDFjYm4xY2JseHVablZ1WTNScGIyNGdZWEpsVUhKcGIzSnBkSGxGYm5SeWFXVnpSVzF3ZEhrb0tYdGNibHgwWm05eUtHeGxkQ0JwYm1SbGVDQTlJREFnT3lCcGJtUmxlQ0E4SUhCeWFXOXlhWFI1Ulc1MGNtbGxjeTVzWlc1bmRHZzdJR2x1WkdWNEt5c3BlMXh1WEhSY2RHeGxkQ0IwYVdOclJXNTBjbWxsY3lBOUlIQnlhVzl5YVhSNVJXNTBjbWxsYzF0cGJtUmxlRjA3WEc1Y2RGeDBhV1lvZEdsamEwVnVkSEpwWlhNZ0ppWWdkR2xqYTBWdWRISnBaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdaaGJITmxYRzVjZEZ4MGZWeHVYSFI5WEc1Y2RISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1ZEWVd4c1ltRmpheWdwZTF4dVhIUmpiMjV6ZENCemFHOTFiR1JEYjI1MGFXNTFaU0E5SUc5dVZHbGpheWdwTzF4dVhIUnBaaWh6YUc5MWJHUkRiMjUwYVc1MVpTbDdYRzVjZEZ4MGNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FnUFNCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVU5oYkd4aVlXTnJLVHRjYmx4MGZWeHVmVnh1WEc1amJHRnpjeUJVYVdOclRXRnVZV2RsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0NsN1hHNWNkSDFjYm4xY2JseHVWR2xqYTAxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1Ga1pDQTlJR1oxYm1OMGFXOXVJQ2gwYVdOclJXNTBjbmtwSUh0Y2JseDBWR2xqYTBWdWRISjVMbk4wWVdOclJHVmlkV2NnSmlZZ1kyOXVjMjlzWlM1c2IyY29YQ0pVYVdOclRXRnVZV2RsY2pvZ1lXUmtJRG9nWENJZ0xDQjBhV05yUlc1MGNua3BPMXh1WEhScFppaGhjbVZRY21sdmNtbDBlVVZ1ZEhKcFpYTkZiWEIwZVNncEtYdGNibHgwWEhSMGFHbHpMbk4wWVhKMEtDbGNibHgwZlZ4dVhIUnBaaWhwYzBWNFpXTjFkR2x1WnlsN1hHNWNkRngwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2dZV1JrSURvZ0lIZGhhWFFnWENJcE8xeHVYSFJjZEdsbUtDRjNZV2wwUlc1MGNtbGxjeWw3WEc1Y2RGeDBYSFIzWVdsMFJXNTBjbWxsY3lBOUlGdGRPMXh1WEhSY2RIMWNibHgwWEhSM1lXbDBSVzUwY21sbGN5NXdkWE5vS0hScFkydEZiblJ5ZVNrN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFkyOXVjM1FnZXlCd2NtbHZjbWwwZVNCOUlEMGdkR2xqYTBWdWRISjVPMXh1WEhSY2RHbG1LQ0Z3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRLWHRjYmx4MFhIUmNkRlJwWTJ0RmJuUnllUzV6ZEdGamEwUmxZblZuSUNZbUlHTnZibk52YkdVdWJHOW5LRndpVkdsamEwMWhibUZuWlhJNklHRmtaQ0E2SUdsdUlGd2lLM0J5YVc5eWFYUjVLMXdpSURvZ2JtVjNJRUZ5Y21GNVhDSXBPMXh1WEhSY2RGeDBjSEpwYjNKcGRIbEZiblJ5YVdWelczQnlhVzl5YVhSNVhTQTlJRnRkTzF4dVhIUmNkSDFjYmx4MFhIUlVhV05yUlc1MGNua3VjM1JoWTJ0RVpXSjFaeUFtSmlCamIyNXpiMnhsTG14dlp5aGNJbFJwWTJ0TllXNWhaMlZ5T2lCaFpHUWdPaUJwYmlCY0lpdHdjbWx2Y21sMGVTdGNJaUE2SUhCMWMyaGNJaWs3WEc1Y2RGeDBZMjl1YzNRZ2RHbGphMFZ1ZEhKcFpYTWdQU0J3Y21sdmNtbDBlVVZ1ZEhKcFpYTmJjSEpwYjNKcGRIbGRPMXh1WEhSY2RIUnBZMnRGYm5SeWFXVnpMbkIxYzJnb2RHbGphMFZ1ZEhKNUtUdGNibHgwZlZ4dVhHNTlPMXh1WEc1Y2JpOHZJRlJ2Wkc4NklGTjFjSEJ2Y25RZ1ptOXlJRTV2WkdWS1V5QmNibFJwWTJ0TllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1emRHRnlkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwYVdZb2QybHVaRzkzS1h0Y2JseDBYSFF2THlCM2FXeHNJSEpsWTJWcGRtVnpJSFJwYldWemRHRnRjQ0JoY3lCaGNtZDFiV1Z1ZEZ4dVhIUmNkSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlVsa0lEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWRFlXeHNZbUZqYXlrN1hHNWNkRngwVkdsamEwVnVkSEo1TG5OMFlXTnJSR1ZpZFdjZ0ppWWdZMjl1YzI5c1pTNXNiMmNvWENKVWFXTnJUV0Z1WVdkbGNqb2djM1JoY25RZ09pQmNJaXdnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbFNXUXBPMXh1WEhSOVhHNTlPMXh1WEc1Y2JsUnBZMnROWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzV6ZEc5d0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUnBaaWgzYVc1a2IzY3BlMXh1WEhSY2RGUnBZMnRGYm5SeWVTNXpkR0ZqYTBSbFluVm5JQ1ltSUdOdmJuTnZiR1V1Ykc5bktGd2lWR2xqYTAxaGJtRm5aWEk2SUhOMGIzQWdPaUJjSWl3Z2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxTV1FwTzF4dVhIUmNkSGRwYm1SdmR5NWpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU2h5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldWSlpDazdYRzVjZEgxY2JuMDdYRzVjYm1OdmJuTjBJSFJwWTJ0TllXNWhaMlZ5SUQwZ2JtVjNJRlJwWTJ0TllXNWhaMlZ5S0NrN1hHNWNiaTh2SUhOcGJtZHNaWFJ2YmtsdWMzUmhibUZqWlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamEwMWhibUZuWlhJN1hHNWNibHh1WEc1Y2JseHVYRzVjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMMnhwWWk5TllXNWhaMlZ5TG1weklsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9ub2RlX21vZHVsZXMvdGlja2VyL2xpYi90aWNrZXIuanMiLCJpbXBvcnQgRW50cnkgZnJvbSAnLi9lbnRyeSc7XG5pbXBvcnQgVGlja2VyIGZyb20gJ3RpY2tlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBudWxsOyAvLyBjb25uZWN0b3IgaXMgcmVzcG9uc2libGUgZm9yIHNlcXVlbmNpbmcgZnVuY3Rpb25zXG5cdCAgICB0aGlzLmVuYWJsZUNvbm5lY3RvciA9IHRydWU7XG4gICAgfVxufVxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCByZXNwb25zaWJsZSBmb3IgaW5pdGlhdGluZyB0cmlnZ2VyXG4vLyBpZiBjYWxsZWQgdXNpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIG1ha2UgYSBzeW5jZWQgZWZmZWN0IG9mIGV4ZWN1dGlvblxuRnVuY3Rpb25zLnByb3RvdHlwZS5leGVjdXRlVHJpZ2dlcmVyID0gZnVuY3Rpb24oY29udGV4dCwgdHJpZ2dlckluaXRpYXRpbmdmdW5jdGlvbiwgdHJpZ2dlcmVyQ2FsbGJhY2spe1xuXHRjb25zdCBfZXhlY3V0ZVRyaWdnZXJlciA9ICgpPT57XG5cdFx0bGV0IHRpY2tlcjtcblx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdHRyaWdnZXJJbml0aWF0aW5nZnVuY3Rpb24uY2FsbChjb250ZXh0KTtcblx0XHRcdGlmKHRyaWdnZXJlckNhbGxiYWNrKXtcblx0XHRcdFx0aWYodGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHRcdFx0dHJpZ2dlcmVyQ2FsbGJhY2sgJiYgdHJpZ2dlcmVyQ2FsbGJhY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aWNrZXIgPSBuZXcgVGlja2VyKHRoaXMsIHRyaWdnZXJlckNhbGxiYWNrLCBudWxsLCAyKTtcblx0XHRcdFx0XHR0aWNrZXIuZXhlY3V0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tlciA9IG5ldyBUaWNrZXIodGhpcywgX2V4ZWN1dGVUcmlnZ2VyZXIsIHRyaWdnZXJlckNhbGxiYWNrLCAyKTtcblx0XHRcdHRpY2tlci5leGVjdXRlKCk7XG5cdFx0fVxuXHR9O1xuXHRfZXhlY3V0ZVRyaWdnZXJlcigpO1xufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKGNvbnRleHQsIGZ1bmMsIGV4ZWN1dGVMYXRlckluTmV4dFRpY2sgPSBmYWxzZSwgcHJpb3JpdHkgPSAwLCBsaXN0ZW5lckNhbGxiYWNrID0gbnVsbCl7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogYWRkTGlzdGVuZXI6IFwiLCB0aGlzKTtcbiAgICBsZXQgZW50cnk7XG4gICAgaWYgKGV4ZWN1dGVMYXRlckluTmV4dFRpY2spe1xuXG5cdCAgICAgY29uc3QgdGlja2VyQ2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0ICAgIHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50IC0gMTtcblx0XHQgICAgaWYobGlzdGVuZXJDYWxsYmFjayl7XG5cdFx0XHQgICAgbGlzdGVuZXJDYWxsYmFjay5jYWxsKGxpc3RlbmVyQ2FsbGJhY2tbJ3RoaXMnXSlcblx0XHQgICAgfVxuXHRcdCAgICBpZiggdGhpcy5leGVjdXRpbmdMYXRlckluTmV4dFRpY2tDb3VudCA9PT0gMCl7XG5cdFx0XHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBsaXN0ZW5lcnNEaWRFeGVjdXRlOiBcIiwgdGhpcyk7XG5cdFx0XHQgICAgdGhpcy5saXN0ZW5lcnNEaWRFeGVjdXRlKCk7XG5cdFx0ICAgIH1cblx0ICAgIH07XG4gICAgICAgIGNvbnN0IHRpY2tlciA9IG5ldyBUaWNrZXIoY29udGV4dCwgZnVuYywgdGlja2VyQ2FsbGJhY2ssIHByaW9yaXR5KTtcblx0ICAgIGVudHJ5ID0gbmV3IEVudHJ5KHRpY2tlciwgdGlja2VyLmV4ZWN1dGUpO1xuXHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogZnJhbWVFbnRyaWVzOiBcIiwgZW50cnkpO1xuICAgICAgICB0aGlzLmZyYW1lRW50cmllcy5wdXNoKGVudHJ5KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudHJ5ID0gbmV3IEVudHJ5KGNvbnRleHQsIGZ1bmMpO1xuXHQgICAgRnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgOiBhZGRMaXN0ZW5lcjogZW50cmllczogXCIsIGVudHJ5KTtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbn07XG5cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5saXN0ZW5lcnNXaWxsRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUuc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogc2hvdWxkTGlzdGVuZXJzRXhlY3V0ZTogXCIsIHRydWUsIHRoaXMpO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUubGlzdGVuZXJzRGlkRXhlY3V0ZSA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZW5hYmxlQ29ubmVjdG9yICYmIHRoaXMuY29ubmVjdG9yICYmIHRoaXMuY29ubmVjdG9yKCk7XG59O1xuXG5GdW5jdGlvbnMucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oY29udGV4dCxmdW5jLCBjYWxsYmFjayA9IG51bGwpe1xuXHRsZXQgZW50cnksIGk7XG5cdGNvbnN0IHtmcmFtZUVudHJpZXMsIGVudHJpZXN9ID0gdGhpcztcblxuXHRmb3IoaSA9IDA7IGkgPCBmcmFtZUVudHJpZXMubGVuZ3RoOyBpKyspe1xuXHQgICAgY29uc3QgZnJhbWVFbnRyeSA9ICBmcmFtZUVudHJpZXNbaV07XG5cdFx0ZW50cnkgPSBmcmFtZUVudHJ5LmNvbnRleHQ7XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRpZih0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ID09PSAwKXtcblx0XHRcdFx0ZnJhbWVFbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHR9IGVsc2UgeyAvLyBmcmFtZSB0cmlnZ2VyIExpc3RlbmVycyBhcmUgc3RpbGwgcnVubmluZ1xuXHRcdFx0XHRsZXQgdGlja2VyRW50cnk7XG5cdFx0XHRcdGNvbnN0IGRpc3Bvc2VEb25lTm90aWZpZXIgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0fSBlbHNle1xuXHRcdFx0XHRcdFx0dGlja2VyRW50cnkgPSBuZXcgVGlja2VyKGZyYW1lRW50cnksZnJhbWVFbnRyeS5kaXNwb3NlLCBkaXNwb3NlRG9uZU5vdGlmaWVyLCAzKTtcblx0XHRcdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdHRpY2tlckVudHJ5ID0gbmV3IFRpY2tlcihmcmFtZUVudHJ5LGZyYW1lRW50cnkuZGlzcG9zZSwgZGlzcG9zZURvbmVOb3RpZmllciwgMyk7XG5cdFx0XHRcdHRpY2tlckVudHJ5LmV4ZWN1dGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRmb3IoaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKXtcblx0XHRlbnRyeSA9IGVudHJpZXNbaV07XG5cdFx0aWYoZW50cnkuY29udGV4dCA9PT0gY29udGV4dCAmJiBlbnRyeS5saXN0ZW5lciA9PT0gZnVuYyl7XG5cdFx0XHRlbnRyeS5kaXNwb3NlKCk7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuRnVuY3Rpb25zLnByb3RvdHlwZS5zZXRDb25uZWN0b3IgPSBmdW5jdGlvbihjb25uZWN0b3Ipe1xuXHR0aGlzLmNvbm5lY3RvciA9IGNvbm5lY3Rvcjtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS5yZW1vdmVDb25uZWN0b3IgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmNvbm5lY3RvciA9IG51bGw7XG59XG5cbkZ1bmN0aW9ucy5wcm90b3R5cGUubGlua0Nvbm5lY3RvciA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuZW5hYmxlQ29ubmVjdG9yID0gdHJ1ZTtcbn1cblxuRnVuY3Rpb25zLnByb3RvdHlwZS51bkxpbmtDb25uZWN0b3IgPSBmdW5jdGlvbigpe1xuXHR0aGlzLmVuYWJsZUNvbm5lY3RvciA9IGZhbHNlO1xufVxuXG5GdW5jdGlvbnMucHJvdG90eXBlLnRyaWdnZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBzaG91bGRUcmlnZ2VyID0gdGhpcy5zaG91bGRMaXN0ZW5lcnNFeGVjdXRlKCk7XG5cdGlmKHNob3VsZFRyaWdnZXIpe1xuXHRcdEZ1bmN0aW9ucy5zdGFja0RlYnVnICYmIGNvbnNvbGUubG9nKFwiRnVuY3Rpb25zOiB0cmlnZ2VyTGlzdGVuZXJzIDogbGlzdGVuZXJzV2lsbEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHR0aGlzLmxpc3RlbmVyc1dpbGxFeGVjdXRlKCk7XG5cdFx0RnVuY3Rpb25zLnN0YWNrRGVidWcgJiYgY29uc29sZS5sb2coXCJGdW5jdGlvbnM6IHRyaWdnZXJMaXN0ZW5lcnMgXCIsIHRoaXMpO1xuXHRcdGNvbnN0IGVudHJpZXNJbmRleFRvRGlzcG9zZSA9IFtdO1xuXHRcdHRoaXMuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRpZiAoZW50cnkubGlzdGVuZXIpIHtcblx0XHRcdFx0ZW50cnkubGlzdGVuZXIuYXBwbHkoZW50cnkuY29udGV4dCB8fCBlbnRyeS5saXN0ZW5lclsndGhpcyddKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdHRoaXMuZW50cmllcy5zcGxpY2UoZW50cnlJbmRleCwxKTtcblx0XHR9LCB0aGlzKTtcblxuXG5cdFx0aWYodGhpcy5mcmFtZUVudHJpZXMubGVuZ3RoID4gMCl7XG5cdFx0XHR0aGlzLmZyYW1lRW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGVudHJ5LCBpbmRleCl7XG5cdFx0XHRcdGlmIChlbnRyeS5saXN0ZW5lcikge1xuXHRcdFx0XHRcdHRoaXMuZXhlY3V0aW5nTGF0ZXJJbk5leHRUaWNrQ291bnQgPSB0aGlzLmV4ZWN1dGluZ0xhdGVySW5OZXh0VGlja0NvdW50ICsgMTtcblx0XHRcdFx0XHRlbnRyeS5saXN0ZW5lci5hcHBseShlbnRyeS5jb250ZXh0IHx8IGVudHJ5Lmxpc3RlbmVyWyd0aGlzJ10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVudHJpZXNJbmRleFRvRGlzcG9zZS5wdXNoKGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRlbnRyaWVzSW5kZXhUb0Rpc3Bvc2UuZm9yRWFjaChmdW5jdGlvbihlbnRyeUluZGV4KXtcblx0XHRcdFx0dGhpcy5mcmFtZUVudHJpZXMuc3BsaWNlKGVudHJ5SW5kZXgsMSk7XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRGdW5jdGlvbnMuc3RhY2tEZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIkZ1bmN0aW9uczogdHJpZ2dlckxpc3RlbmVycyA6IGxpc3RlbmVyc0RpZEV4ZWN1dGU6IFwiLCB0aGlzKTtcblx0XHRcdHRoaXMubGlzdGVuZXJzRGlkRXhlY3V0ZSgpO1xuXHRcdH1cblx0fVxuXG59O1xuXG5GdW5jdGlvbnMuc3RhY2tEZWJ1ZyA9IGZhbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9mdW5jdGlvbnMuanNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjazovLy9saWIvZnVuY3Rpb25zLmpzIiwiaW1wb3J0IFRpY2tlciBmcm9tICd0aWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgZnVuYyl7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jO1xuICAgIH1cbn1cblxuLy8gTWV0aG9kIGF2YWlsYWJsZSBvbmx5IG9uIEVudHJ5IGluc3RhbmNlIG5vdCBpbiBDbGFzc1xuRW50cnkucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKXtcbiAgICBpZih0aGlzLmNvbnRleHQgaW5zdGFuY2VvZiBUaWNrZXIpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXIgPSBudWxsO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9lbnRyeS5qc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrOi8vL2xpYi9lbnRyeS5qcyIsImltcG9ydCBTdG9yZSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCB7YXJyYXlUb09iamVjdCwgY29tYmluZUFycmF5fSBmcm9tICcuL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZUNvbGxlY3Rpb24gZXh0ZW5kcyBTdG9yZXtcblx0Y29uc3RydWN0b3Ioc3RhdGUsZGlzcGxheU5hbWUsIG9iamVjdE5hbWUpe1xuXHRcdHN1cGVyKG51bGwsIGRpc3BsYXlOYW1lLCBvYmplY3ROYW1lKTtcblx0XHR0aGlzLmNoaWxkcmVuID0ge307XG5cdFx0dGhpcy5fdmFsdWUgPSBzdGF0ZSA/IChzdGF0ZS52YWx1ZSA9PT0gdW5kZWZpbmVkID8ge30gOiBzdGF0ZS52YWx1ZSkgOiB7fTtcblx0XHR0aGlzLnRyaWdnZXJXYWl0Q291bnQgPSAwO1xuXHR9XG5cblx0c2hvdWxkTGlzdGVuZXJzRXhlY3V0ZSgpe1xuXHRcdGlmKHRoaXMudHJpZ2dlcldhaXRDb3VudCA9PT0gMCB8fCB0aGlzLnRyaWdnZXJXYWl0Q291bnQgPT09IDEpe1xuXHRcdFx0dGhpcy50cmlnZ2VyV2FpdENvdW50ID09PSAxICYmIHRoaXMudHJpZ2dlcldhaXRDb3VudC0tO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHJpZ2dlcldhaXRDb3VudCA9IHRoaXMudHJpZ2dlcldhaXRDb3VudCAtIDE7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdH1cblxufVxuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmdldFN0YXRlID0gZnVuY3Rpb24ob25seVZhbHVlKXtcblx0cmV0dXJuIHRoaXMuZ2V0Q2hpbGRyZW4odHJ1ZSwgb25seVZhbHVlKTtcbn07XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbihuZXdWYWx1ZSwgY2FsbGJhY2spe1xuXHR0aGlzLnRyaWdnZXJXYWl0Q291bnQgPSB0aGlzLmNhbGN1bGF0ZURpZmYobmV3VmFsdWUsIHRydWUpO1xuXHRpZih0aGlzLnRyaWdnZXJXYWl0Q291bnQgPiAwKXtcblx0XHRjb25zdCBfc2V0U3RhdGUgPSAoKT0+e1xuXHRcdFx0bGV0IGNoaWxkVmFsdWVzID0ge307XG5cdFx0XHRjb25zdCBjdXJyZW50Q2hpbGRJZHMgPSB0aGlzLmdldENoaWxkSWRzKHRydWUpO1xuXHRcdFx0aWYobmV3VmFsdWUpe1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2hpbGRTdGF0ZSA9IG5ld1ZhbHVlW2ldO1xuXHRcdFx0XHRcdGlmKG5ld0NoaWxkU3RhdGUpe1xuXHRcdFx0XHRcdFx0bGV0IGNoaWxkSWQ7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgbmV3Q2hpbGRTdGF0ZSA9PT0gJ3N0cmluZycpeyAvLyBubyBjaGFuZ2Vcblx0XHRcdFx0XHRcdFx0Y2hpbGRJZCA9IG5ld0NoaWxkU3RhdGU7IC8vIGlkIG9mIFVuY2hhbmdlZENoaWxkXG5cdFx0XHRcdFx0XHRcdGNoaWxkVmFsdWVzW2NoaWxkSWRdID0gdGhpcy5fdmFsdWVbY2hpbGRJZF07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb25zdHtpZCwgY2xhc3NEZWZOYW1lLCB2YWx1ZSwgZGlzcGxheU5hbWV9ID0gbmV3Q2hpbGRTdGF0ZTtcblx0XHRcdFx0XHRcdFx0aWYoY2xhc3NEZWZOYW1lID09PSB1bmRlZmluZWQpIHsgLy8gZGVsZXRlIE9wZXJhdGlvblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlKGlkKTtcblx0XHRcdFx0XHRcdFx0fSAgZWxzZSB7IC8vIHVwZGF0ZSBPcGVyYXRpb24gb3IgQWRkaXRpb25cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJlcXVlc3RTdG9yZShpZCwgdmFsdWUsIGNsYXNzRGVmTmFtZSwgZGlzcGxheU5hbWUpO1xuXHRcdFx0XHRcdFx0XHRcdGNoaWxkVmFsdWVzW2lkXSA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGlkU3RpbGxFeGlzdCA9IChjdXJyZW50Q2hpbGRJZHMgJiYgY3VycmVudENoaWxkSWRzLmluZGV4T2YoY2hpbGRJZCkgPiAtMSlcblx0XHRcdFx0XHRcdGlmKGlkU3RpbGxFeGlzdCl7IC8vIHJlbW92ZSB0aGVtXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRDaGlsZElkcy5zcGxpY2UoY2hpbGRJZCwxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHRvZG86IHdpbGwgdGhpcyBsaW5lIG9mIENvZGVzIGV2ZXIgcmVhY2ggYXMgd2UgaGFuZGxlIHJlbW92ZSBhYm92ZVxuXHRcdFx0LyppZihjdXJyZW50Q2hpbGRJZHMpe1xuXHRcdFx0XHQvLyByZW1vdmUgYWxsIG9sZCBJZHNcblx0XHRcdFx0Y3VycmVudENoaWxkSWRzLm1hcCgob2xkSWQpPT57XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmUob2xkSWQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0qL1xuXHRcdFx0dGhpcy5fdmFsdWUgPSBjaGlsZFZhbHVlcztcblx0XHR9O1xuXHRcdC8vc2V0IHN0YXRlIGZ1bmN0aW9uIGlzIHRoZSBvbmUgd2hpY2ggdHJpZ2dlcnMgYWxsIHRoZSBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gaXRcblx0XHQvLyBpZiBsaXN0ZW5lcnMgZXhlY3V0aW9uIGFyZSBnb2luZyBvbiwgdGhpcyB3aWxsIGV4ZWN1dGUgb25jZSB0aGV5IGFyZSBkb25lXG5cdFx0Ly8gZWxzZSBzZXQgc3RhdGUgaXMgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHR0aGlzLmV4ZWN1dGVUcmlnZ2VyZXIodGhpcyxfc2V0U3RhdGUsICgpPT57XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIE51bWJlcih0aGlzLnRyaWdnZXJXYWl0Q291bnQgPiAwKTtcbn07XG5cblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRDaGlsZElkcyA9IGZ1bmN0aW9uKGFzQ29weSl7XG5cdGNvbnN0IGlkcyA9ICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0cmV0dXJuIGFzQ29weSA/IGlkcy5zbGljZSgpIDogaWRzO1xufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uKGFzSnNvbiwgb25seVZhbHVlKXtcblx0Y29uc3QgY2hpbGRyZW4gPSBbXTtcblx0Y29uc3QgY2hpbGRLZXlzID0gT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbik7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBjaGlsZEtleXMubGVuZ3RoOyBpKyspe1xuXHRcdGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRLZXlzW2ldO1xuXHRcdGNvbnN0IHN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltjaGlsZEtleV07XG5cdFx0Y2hpbGRyZW4ucHVzaChhc0pzb24gPyBzdG9yZU9iamVjdC5hc0pzb24odW5kZWZpbmVkLCB1bmRlZmluZWQsIG9ubHlWYWx1ZSk6c3RvcmVPYmplY3QpO1xuXHR9XG5cdHJldHVybiBjaGlsZHJlbjtcbn07XG5cblxuLy90by1kbyB0aGluayBvZiB1aSBwb2ludCBvZiB2aWV3IGFuZCB0aGUgY2hhbmdlIHRoZSB3YXkgdGhleSBhcmUgaW5zdGFudGlhdGVkIGhlcmVcblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVxdWVzdFN0b3JlID0gZnVuY3Rpb24oaWQsIHN0YXRlLCBjbGFzc0RlZk5hbWUsIGRpc3BsYXlOYW1lLCBuZXdTdG9yZUNhbGxiYWNrKXtcblx0bGV0IHN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltpZF07XG5cdGlmKHN0b3JlT2JqZWN0KXtcblx0XHRyZXR1cm4gc3RvcmVPYmplY3Quc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0bGV0IHJldHVyblZhbHVlO1xuXHRjb25zdCBfcmVxdWVzdFN0b3JlID0gKCk9Pntcblx0XHRpZihjbGFzc0RlZk5hbWUgPT09ICdTdG9yZScpe1xuXHRcdFx0c3RvcmVPYmplY3QgPSBuZXcgU3RvcmUoc3RhdGUsIGRpc3BsYXlOYW1lLCBpZCk7XG5cdFx0fSBlbHNlIGlmKGNsYXNzRGVmTmFtZSA9PT0gJ1N0b3JlQ29sbGVjdGlvbicpIHtcblx0XHRcdHN0b3JlT2JqZWN0ID0gbmV3IFN0b3JlQ29sbGVjdGlvbihzdGF0ZSwgZGlzcGxheU5hbWUsIGlkKTtcblx0XHR9XG5cblx0XHRzdG9yZU9iamVjdC5zZXRDb25uZWN0b3IodGhpcy50cmlnZ2VyTGlzdGVuZXJzLmJpbmQodGhpcykpO1xuXHRcdHN0b3JlT2JqZWN0LmxpbmtQYXJlbnRJZCh0aGlzLmlkKTtcblx0XHRjb25zdCBuZXdTdG9yZU9iaklkID0gc3RvcmVPYmplY3QuaWQ7XG5cdFx0dGhpcy5jaGlsZHJlbltuZXdTdG9yZU9iaklkXSA9IHN0b3JlT2JqZWN0O1xuXHRcdHRoaXMuX3ZhbHVlW25ld1N0b3JlT2JqSWRdID0gc3RvcmVPYmplY3QuZ2V0VmFsdWUoKTtcblx0XHRyZXR1cm5WYWx1ZSA9IHN0b3JlT2JqZWN0O1xuXHRcdHRoaXMudHJpZ2dlckxpc3RlbmVycygpO1xuXHR9O1xuXG5cdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9yZXF1ZXN0U3RvcmUsICgpPT57XG5cdFx0bmV3U3RvcmVDYWxsYmFjayAmJiBuZXdTdG9yZUNhbGxiYWNrKHJldHVyblZhbHVlKTtcblx0fSk7XG59O1xuXG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGlkLHRyaWdnZXIgPSB0cnVlKXtcblx0Y29uc3Qgc3RvcmVPYmplY3QgPSB0aGlzLmNoaWxkcmVuW2lkXTtcblx0aWYoc3RvcmVPYmplY3Qpe1xuXHRcdGNvbnN0IF9yZW1vdmUgPSAoKT0+e1xuXHRcdFx0c3RvcmVPYmplY3QucmVtb3ZlQ29ubmVjdG9yKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5jaGlsZHJlbltpZF07XG5cdFx0XHRkZWxldGUgdGhpcy5fdmFsdWVbaWRdO1xuXHRcdFx0dHJpZ2dlciAmJiB0aGlzLnRyaWdnZXJMaXN0ZW5lcnMoKTtcblx0XHR9XG5cblx0XHRpZighdHJpZ2dlcil7XG5cdFx0XHRfcmVtb3ZlLmNhbGwodGhpcyk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZXhlY3V0ZVRyaWdnZXJlcih0aGlzLF9yZW1vdmUpXG5cdH1cblxufTtcblxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbigpe1xuXHRjb25zdCBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0aWYoY2hpbGRLZXlzLmxlbmd0aCA+IDApe1xuXHRcdGNvbnN0IF9yZW1vdmVBbGwgPSAoKT0+e1xuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNoaWxkS2V5cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRLZXlzW2ldO1xuXHRcdFx0XHR0aGlzLnJlbW92ZShjaGlsZEtleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50cmlnZ2VyTGlzdGVuZXJzKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5leGVjdXRlVHJpZ2dlcmVyKHRoaXMsX3JlbW92ZUFsbClcblx0fVxufTtcblxuLy8gb25seUNvbXBhcmlzb24gbW9kZSwgb3VyIERpZmYgaXMgTG9nIGRpZmZcbi8vIGluIGZhbHNlIG1vZGUgb3VyIGRpZmYgaXMgc3RhdGUgb2JqZWN0XG5TdG9yZUNvbGxlY3Rpb24ucHJvdG90eXBlLmNhbGN1bGF0ZURpZmYgPSBmdW5jdGlvbih2YWx1ZSwgb25seUNvbXBhcmlzb24gPSBmYWxzZSl7XG5cdGNvbnN0IHZhbHVlQXNPYmogPSBhcnJheVRvT2JqZWN0KHZhbHVlLCAnaWQnKTtcblxuXHRjb25zdCBjaGlsZHJlbktleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKTtcblx0Y29uc3Qgc3RhdGVMZW4gPSB2YWx1ZSA/IHZhbHVlLmxlbmd0aCA6IE5hTjtcblx0Y29uc3QgY3VycmVudFN0YXRlTGVuID0gY2hpbGRyZW5LZXlzID8gY2hpbGRyZW5LZXlzLmxlbmd0aCA6IDA7XG5cdGxldCBpc0NoYW5nZWQgPSBzdGF0ZUxlbiAhPT0gY3VycmVudFN0YXRlTGVuIDtcblx0bGV0IGNoaWxkVXBkYXRlQ291bnQgPSAwO1xuXG5cdGxldCBjaGlsZHJlbkZvcndhcmREaWZmcyA9IFtdO1xuXHRsZXQgY2hpbGRyZW5CYWNrd2FyZERpZmZzID0gW107XG5cblx0Zm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTdGF0ZUxlbjsgaSsrKXtcblx0XHRjb25zdCBrZXkgPSBjaGlsZHJlbktleXNbaV07XG5cdFx0Y29uc3QgY3VycmVudFN0b3JlT2JqZWN0ID0gdGhpcy5jaGlsZHJlbltrZXldO1xuXHRcdGNvbnN0IGNoaWxkU3RhdGUgPSB2YWx1ZUFzT2JqID8gdmFsdWVBc09ialtjdXJyZW50U3RvcmVPYmplY3QuaWRdOiB1bmRlZmluZWQ7XG5cdFx0ZGVsZXRlIHZhbHVlQXNPYmpbY3VycmVudFN0b3JlT2JqZWN0LmlkXTsgLy8gbmVlZCB0byBkbyB0aGlzIHRvIGlkZW50aWZ5IGFsbCBkZWxldGVkIGNoaWxkXG5cblx0XHRpZihjaGlsZFN0YXRlICApeyAvLyBleGlzdGluZyBjaGlsZCB1cGRhdGVcblx0XHRcdGlmKHR5cGVvZiBjaGlsZFN0YXRlICE9PSAnc3RyaW5nJyl7IC8vIG5vIGNoYW5nZSB0aGlzIGhhcHBlbnMgaW4gZGlmZiBtb2RlICwgd2hpY2ggb25seUNvbXBhcmlzb25cblx0XHRcdFx0Y29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkU3RhdGUgPyBjaGlsZFN0YXRlLnZhbHVlIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRcdFx0Y29uc3QgaXNDaGlsZFVwZGF0ZWQgPSBjdXJyZW50U3RvcmVPYmplY3QuY2FsY3VsYXRlRGlmZi5jYWxsKGN1cnJlbnRTdG9yZU9iamVjdCwgY2hpbGRWYWx1ZSwgb25seUNvbXBhcmlzb24pO1xuXHRcdFx0XHRcdGlmKGlzQ2hpbGRVcGRhdGVkKXtcblx0XHRcdFx0XHRcdGNoaWxkVXBkYXRlQ291bnQgPSBjaGlsZFVwZGF0ZUNvdW50ICsgMVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0Y29uc3QgZGlmZlZhbHVlID0gY3VycmVudFN0b3JlT2JqZWN0LmdldERpZmYuY2FsbChjdXJyZW50U3RvcmVPYmplY3QsIGNoaWxkVmFsdWUpO1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBkaWZmVmFsdWUgIT09ICdzdHJpbmcnKXtcblx0XHRcdFx0XHRcdGlzQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHtmb3J3YXJkLCBiYWNrd2FyZCB9ID0gZGlmZlZhbHVlO1xuXHRcdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goZm9yd2FyZCk7XG5cdFx0XHRcdFx0Y2hpbGRyZW5CYWNrd2FyZERpZmZzLnB1c2goYmFja3dhcmQpO1xuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRcdGNoaWxkVXBkYXRlQ291bnQgPSBjaGlsZFVwZGF0ZUNvdW50ICsgMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goY3VycmVudFN0b3JlT2JqZWN0LmFzSnNvbigpKTtcblx0XHRcdFx0Y2hpbGRyZW5CYWNrd2FyZERpZmZzLnB1c2goY3VycmVudFN0b3JlT2JqZWN0LmFzSnNvbih1bmRlZmluZWQsIHRydWUpKVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgcmVtYWluaW5nQ2hpbGRLZXlzID0gdmFsdWVBc09iaiA/IE9iamVjdC5rZXlzKHZhbHVlQXNPYmopIDogbnVsbDtcblx0Y29uc3QgcmVtaWFuaW5nQ2hpbGRDb3VudCA9IHJlbWFpbmluZ0NoaWxkS2V5cyA/IHJlbWFpbmluZ0NoaWxkS2V5cy5sZW5ndGggOiAwO1xuXHRpZihyZW1pYW5pbmdDaGlsZENvdW50KXtcblx0XHRpZihvbmx5Q29tcGFyaXNvbil7XG5cdFx0XHRjaGlsZFVwZGF0ZUNvdW50ID0gIHJlbWlhbmluZ0NoaWxkQ291bnQgKyBjaGlsZFVwZGF0ZUNvdW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcmVtaWFuaW5nQ2hpbGRDb3VudDsgaSsrKXtcblx0XHRcdFx0Y29uc3QgcmVtYWluaW5nQ2hpbGRLZXkgPSByZW1haW5pbmdDaGlsZEtleXNbaV07XG5cdFx0XHRcdGNvbnN0IHJlbWFpbmluZ0NoaWxkID0gdmFsdWVBc09ialtyZW1haW5pbmdDaGlsZEtleV07XG5cdFx0XHRcdGNvbnN0IGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmID0ge307XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmLmlkID0gcmVtYWluaW5nQ2hpbGQuaWQ7XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmWydjbGFzc0RlZk5hbWUnXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZGVsZXRlZENoaWxkRm9yd2FyZERpZmZbJ2Rpc3BsYXlOYW1lJ10gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGRlbGV0ZWRDaGlsZEZvcndhcmREaWZmWyd2YWx1ZSddID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdGNoaWxkcmVuRm9yd2FyZERpZmZzLnB1c2goZGVsZXRlZENoaWxkRm9yd2FyZERpZmYpO1xuXHRcdFx0XHRjaGlsZHJlbkJhY2t3YXJkRGlmZnMucHVzaChyZW1haW5pbmdDaGlsZClcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGlmKG9ubHlDb21wYXJpc29uKXtcblx0XHRyZXR1cm4gY2hpbGRVcGRhdGVDb3VudDtcblx0fVxuXG5cblx0aWYoaXNDaGFuZ2VkKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmFzSnNvbihjaGlsZHJlbkZvcndhcmREaWZmcyksXG5cdFx0XHRiYWNrd2FyZDp0aGlzLmFzSnNvbihjaGlsZHJlbkJhY2t3YXJkRGlmZnMpXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Zm9yd2FyZDp0aGlzLmlkLFxuXHRcdFx0YmFja3dhcmQ6dGhpcy5pZFxuXHRcdH07XG5cdH1cbn07XG5cblN0b3JlQ29sbGVjdGlvbi5wcm90b3R5cGUuY29tYmluZURpZmYgPSBmdW5jdGlvbihhcnJheTEsIGFycmF5MiwgaWROYW1lKXtcblxuXHRyZXR1cm4gY29tYmluZUFycmF5KGFycmF5MSwgYXJyYXkyLCBpZE5hbWUsIChhcnJheTFBc09iaiwgYXJyYXkyQ2hpbGQsIGtleU5hbWUpPT57XG5cdFx0Y29uc3QgY2hpbGRJZCA9IHR5cGVvZiBhcnJheTJDaGlsZCA9PT0gJ3N0cmluZycgPyBhcnJheTJDaGlsZCA6IGFycmF5MkNoaWxkW2tleU5hbWVdO1xuXHRcdHJldHVybiAhYXJyYXkxQXNPYmpbY2hpbGRJZF07XG5cdH0pXG5cbn1cbi8vIHdoZW4gd2UgY2FsbCBhcHBseSBkaWZmLCBjb25uZWN0IHRvIG5leHQgc2V0IG9mIGZ1bmN0aW9ucyBhcmUgbm90IGNhbGxlZFxuU3RvcmVDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseURpZmYgPSBmdW5jdGlvbih2YWx1ZSwgY2FsbGJhY2spe1xuXHR0aGlzLnVuTGlua0Nvbm5lY3RvcigpO1xuXHR0aGlzLnNldFN0YXRlKHZhbHVlLCAoKT0+e1xuXHRcdHRoaXMubGlua0Nvbm5lY3RvcigpO1xuXHRcdGNhbGxiYWNrKClcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL1N0b3JlQ29sbGVjdGlvbi5qcyIsImltcG9ydCBTdG9yZSBmcm9tICcuLy4uL2xpYic7XG5pbXBvcnQge1N0b3JlQ29sbGVjdGlvbn0gZnJvbSAnLi8uLi9saWInO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSg1LCcgTnVtYmVyJyk7XG5cbnN0b3JlLmFkZExpc3RlbmVyKHdpbmRvdywgKCk9Pntcblx0Y29uc29sZS5sb2coXCJJbW1lZGlhdGVcIik7XG59KTtcblxuc3RvcmUuYWRkTGlzdGVuZXIod2luZG93LCAoKT0+e1xuXHRjb25zb2xlLmxvZyhcIkxhdGVyXCIpO1xufSwgdHJ1ZSk7XG5cbnN0b3JlLnNldFN0YXRlKDcsICgpPT57XG5cdGNvbnNvbGUubG9nKFwiU2V0IFN0YXRlIENhbGxiYWMga1wiKTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==