(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var _HSL = __webpack_require__(3);

var _HSL2 = _interopRequireDefault(_HSL);

var _Color = __webpack_require__(1);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Palette = function () {
  function Palette(hsl) {
    _classCallCheck(this, Palette);

    if (!(hsl instanceof _Color2.default)) {
      throw "parameter must be an istance of `Color`";
    }
    hsl = hsl instanceof _HSL2.default ? hsl : hsl.toHsl();
    this.value = hsl;
  }

  _createClass(Palette, [{
    key: 'log',
    value: function log() {
      var palette = this.toPalette();
      palette.forEach(function (color) {
        var hex = new _HSL2.default(color).toHex();
        console.log('%c Glow!', 'background: ' + hex + '; color: #FFF');
      });
    }
  }]);

  return Palette;
}();

exports.default = Palette;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var regex = /(\d+),(\d+),(\d+)/;

var Color = function () {
  function Color() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Color);

    if (!this.isValid(str)) {
      throw "not a valid value";
    }
    this.value = str;
  }

  _createClass(Color, [{
    key: 'parseString',
    value: function parseString(str) {
      var res = regex.exec(str);
      res.shift();
      return res.map(function (v) {
        return parseInt(v);
      });
    }
  }, {
    key: 'isValid',
    value: function isValid(str) {
      return regex.test(str) || Array.isArray(str) && str.length === 3;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.value.join(',');
    }
  }, {
    key: 'toArray',
    value: function toArray() {
      return this.value;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(val) {
      this._value = Array.isArray(val) ? val : this.parseString(val);
    }
  }]);

  return Color;
}();

exports.default = Color;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Color2 = __webpack_require__(1);

var _Color3 = _interopRequireDefault(_Color2);

var _HSL = __webpack_require__(3);

var _HSL2 = _interopRequireDefault(_HSL);

var _Hex = __webpack_require__(4);

var _Hex2 = _interopRequireDefault(_Hex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RGB = function (_Color) {
  _inherits(RGB, _Color);

  function RGB() {
    _classCallCheck(this, RGB);

    return _possibleConstructorReturn(this, (RGB.__proto__ || Object.getPrototypeOf(RGB)).apply(this, arguments));
  }

  _createClass(RGB, [{
    key: 'toHex',
    value: function toHex() {
      var hex = this.value.map(function (v) {
        var str = v.toString(16);
        str = str.length === 1 ? '0' + str : str;
        return str;
      }).join('').toUpperCase();
      return new _Hex2.default(hex);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var rgb = _get(RGB.prototype.__proto__ || Object.getPrototypeOf(RGB.prototype), 'toString', this).call(this);
      return 'rgb(' + rgb + ')';
    }
  }, {
    key: 'toDegPercPerc',
    value: function toDegPercPerc(hsl) {
      hsl[0] = Math.round(hsl[0] * 60);
      if (hsl[0] < 0) {
        hsl[0] += 360;
      }
      hsl[1] = Math.round(hsl[1] * 100);
      hsl[2] = Math.round(hsl[2] * 100);
      return hsl;
    }
  }, {
    key: 'toHsl',
    value: function toHsl() {
      var max = 0,
          min = 0,
          maxAdd = 0,
          maxSub = 0,
          h = 0,
          s = 0,
          l = 0,
          hsl = void 0;

      var rgb = this.value.map(function (v) {
        return v / 255;
      });
      max = Math.max.apply(null, rgb);
      min = Math.min.apply(null, rgb);
      maxAdd = max + min;
      maxSub = max - min;
      l = maxAdd / 2;

      if (min !== max) {
        if (l < 0.5) {
          s = maxSub / maxAdd;
        } else {
          s = maxSub / (2 - max - min);
        }

        switch (max) {
          case rgb[0]:
            //red
            h = (rgb[1] - rgb[2]) / maxSub;
            break;
          case rgb[1]:
            //green
            h = (rgb[2] - rgb[0]) / maxSub + 2;
            break;
          case rgb[2]:
            // blue
            h = (rgb[0] - rgb[1]) / maxSub + 4;
            break;
        }
      }

      hsl = this.toDegPercPerc([h, s, l]);
      return new _HSL2.default(hsl);
    }
  }]);

  return RGB;
}(_Color3.default);

exports.default = RGB;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Color2 = __webpack_require__(1);

var _Color3 = _interopRequireDefault(_Color2);

var _RGB = __webpack_require__(2);

var _RGB2 = _interopRequireDefault(_RGB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HSL = function (_Color) {
  _inherits(HSL, _Color);

  function HSL() {
    _classCallCheck(this, HSL);

    return _possibleConstructorReturn(this, (HSL.__proto__ || Object.getPrototypeOf(HSL)).apply(this, arguments));
  }

  _createClass(HSL, [{
    key: 'toHex',
    value: function toHex() {
      return this.toRgb().toHex();
    }
  }, {
    key: 'toString',
    value: function toString() {
      var hsl = _get(HSL.prototype.__proto__ || Object.getPrototypeOf(HSL.prototype), 'toString', this).call(this);
      return 'hsl(' + hsl + ')';
    }
  }, {
    key: 'complementary',
    value: function complementary() {
      var hsl = new HSL(this.toString());
      hsl.hue += 180;
      return hsl;
    }
  }, {
    key: 'toRgb',
    value: function toRgb() {
      var h = void 0,
          s = void 0,
          l = void 0,
          r = void 0,
          g = void 0,
          b = void 0,
          temp1 = void 0,
          temp2 = void 0,
          hsl = void 0,
          rgb = void 0;

      // clone array
      hsl = this.value.slice(0);
      hsl = this.degPercPercToHsl(hsl);
      h = hsl[0];
      s = hsl[1];
      l = hsl[2];

      // greyscale
      if (s === 0) {
        r = Math.round(l * 255);
        g = Math.round(l * 255);
        b = Math.round(l * 255);
      } else {
        temp2 = l < 0.5 ? l * (1 + s) : l + s - s * l;
        temp1 = 2 * l - temp2;

        r = Math.round(255 * this.hueToRgb(temp1, temp2, h + 1 / 3));
        g = Math.round(255 * this.hueToRgb(temp1, temp2, h));
        b = Math.round(255 * this.hueToRgb(temp1, temp2, h - 0.3333));
      }
      rgb = new _RGB2.default([parseInt(r, 10), parseInt(g, 10), parseInt(b, 10)]);
      return rgb;
    }
  }, {
    key: 'hueToRgb',
    value: function hueToRgb(temp1, temp2, hue) {
      var rgbValue = 0;
      if (hue < 0) {
        hue += 1;
      }
      if (hue > 1) {
        hue -= 1;
      }

      if (6 * hue < 1) {
        // red
        rgbValue = temp1 + (temp2 - temp1) * 6 * hue;
      } else if (2 * hue < 1) {
        // green
        rgbValue = temp2;
      } else if (3 * hue < 2) {
        // blue
        rgbValue = temp1 + (temp2 - temp1) * (0.6666 - hue) * 6;
      }
      return rgbValue;
    }
  }, {
    key: 'degPercPercToHsl',
    value: function degPercPercToHsl(hsl) {
      hsl[0] /= 360;
      hsl[1] /= 100;
      hsl[2] /= 100;
      return hsl;
    }
  }, {
    key: 'hue',
    get: function get() {
      return this.value[0];
    },
    set: function set(val) {
      this.value[0] = Math.round(Math.abs(val % 360));
    }
  }, {
    key: 'saturation',
    get: function get() {
      return this.value[1];
    },
    set: function set(val) {
      val = val > 100 ? 100 : val;
      val = val < 0 ? 0 : val;
      this.value[1] = Math.round(val);
    }
  }, {
    key: 'lightness',
    get: function get() {
      return this.value[2];
    },
    set: function set(val) {
      val = val > 100 ? 100 : val;
      val = val < 0 ? 0 : val;
      this.value[2] = Math.round(val);
    }
  }]);

  return HSL;
}(_Color3.default);

exports.default = HSL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color2 = __webpack_require__(1);

var _Color3 = _interopRequireDefault(_Color2);

var _RGB = __webpack_require__(2);

var _RGB2 = _interopRequireDefault(_RGB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hexRegex = /[A-F0-9]{6}|[A-F0-9]{3}/i;

var Hex = function (_Color) {
  _inherits(Hex, _Color);

  function Hex() {
    _classCallCheck(this, Hex);

    return _possibleConstructorReturn(this, (Hex.__proto__ || Object.getPrototypeOf(Hex)).apply(this, arguments));
  }

  _createClass(Hex, [{
    key: 'parseString',
    value: function parseString(str) {
      var hex = hexRegex.exec(str)[0];
      hex = hex.length === 3 ? Hex.expandShortHex(hex) : hex;
      return hex;
    }
  }, {
    key: 'isValid',
    value: function isValid(str) {
      return hexRegex.test(str);
    }
  }, {
    key: 'toRgb',
    value: function toRgb() {
      var hex = this.value.match(/.{1,2}/g);
      var rgb = hex.map(function (v) {
        return parseInt(v, 16);
      });
      return new _RGB2.default(rgb);
    }
  }, {
    key: 'toHsl',
    value: function toHsl() {
      return this.toRgb().toHsl();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '#' + this.value;
    }
  }], [{
    key: 'expandShortHex',
    value: function expandShortHex(shortHex) {
      return shortHex.split('').map(function (v) {
        return v + v;
      }).join('');
    }
  }]);

  return Hex;
}(_Color3.default);

exports.default = Hex;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shades = exports.Triad = exports.Compound = exports.Complementary = exports.Analogous = exports.Monochromatic = exports.Palette = exports.HSL = exports.RGB = exports.Hex = exports.Color = exports.Glow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(1);

var _Color2 = _interopRequireDefault(_Color);

var _Hex = __webpack_require__(4);

var _Hex2 = _interopRequireDefault(_Hex);

var _RGB = __webpack_require__(2);

var _RGB2 = _interopRequireDefault(_RGB);

var _HSL = __webpack_require__(3);

var _HSL2 = _interopRequireDefault(_HSL);

var _Palette = __webpack_require__(0);

var _Palette2 = _interopRequireDefault(_Palette);

var _Monochromatic = __webpack_require__(6);

var _Monochromatic2 = _interopRequireDefault(_Monochromatic);

var _Analogous = __webpack_require__(7);

var _Analogous2 = _interopRequireDefault(_Analogous);

var _Complementary = __webpack_require__(8);

var _Complementary2 = _interopRequireDefault(_Complementary);

var _Compound = __webpack_require__(9);

var _Compound2 = _interopRequireDefault(_Compound);

var _Triad = __webpack_require__(10);

var _Triad2 = _interopRequireDefault(_Triad);

var _Shades = __webpack_require__(11);

var _Shades2 = _interopRequireDefault(_Shades);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(12);

var Glow = function () {
  function Glow() {
    _classCallCheck(this, Glow);
  }

  _createClass(Glow, [{
    key: 'hexToHsl',
    value: function hexToHsl(hex) {
      var rgb = this.hexToRgb(hex);
      return this.rgbToHsl(rgb);
    }
  }, {
    key: 'hslToHex',
    value: function hslToHex(hsl) {
      var rgb = this.hslToRgb(hsl);
      return this.rgbToHex(rgb);
    }
  }]);

  return Glow;
}();

exports.Glow = Glow;
exports.Color = _Color2.default;
exports.Hex = _Hex2.default;
exports.RGB = _RGB2.default;
exports.HSL = _HSL2.default;
exports.Palette = _Palette2.default;
exports.Monochromatic = _Monochromatic2.default;
exports.Analogous = _Analogous2.default;
exports.Complementary = _Complementary2.default;
exports.Compound = _Compound2.default;
exports.Triad = _Triad2.default;
exports.Shades = _Shades2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Monochromatic = function (_Palette) {
  _inherits(Monochromatic, _Palette);

  function Monochromatic() {
    _classCallCheck(this, Monochromatic);

    return _possibleConstructorReturn(this, (Monochromatic.__proto__ || Object.getPrototypeOf(Monochromatic)).apply(this, arguments));
  }

  _createClass(Monochromatic, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.05,
          palette = [],
          i = 0;
      for (i; i < 5; i++) {
        this.value.saturation -= this.value.saturation * diff;
        this.value.lightness -= this.value.lightness * diff;
        palette.push(this.value.toString());
      }
      return palette;
    }
  }]);

  return Monochromatic;
}(_Palette3.default);

exports.default = Monochromatic;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Analogous = function (_Palette) {
  _inherits(Analogous, _Palette);

  function Analogous() {
    _classCallCheck(this, Analogous);

    return _possibleConstructorReturn(this, (Analogous.__proto__ || Object.getPrototypeOf(Analogous)).apply(this, arguments));
  }

  _createClass(Analogous, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.05,
          palette = [],
          i = 0;
      this.value.hue -= this.value.hue * (diff * 2);
      for (i; i < 5; i++) {
        this.value.hue -= this.value.hue * diff;
        palette.push(this.value.toString());
      }
      return palette;
    }
  }]);

  return Analogous;
}(_Palette3.default);

exports.default = Analogous;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Complementary = function (_Palette) {
  _inherits(Complementary, _Palette);

  function Complementary() {
    _classCallCheck(this, Complementary);

    return _possibleConstructorReturn(this, (Complementary.__proto__ || Object.getPrototypeOf(Complementary)).apply(this, arguments));
  }

  _createClass(Complementary, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.05,
          palette = [],
          i = 0;

      palette.push(this.value.toString());

      // step up
      this.value.lightness += this.value.lightness * diff;
      palette.push(this.value.toString());
      // step down
      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * (diff * 2);
      palette.push(this.value.toString());

      // get complementary
      this.value.hue -= 180;
      palette.push(this.value.toString());

      this.value.saturation += this.value.saturation * diff;
      this.value.lightness += this.value.lightness * diff;

      palette.push(this.value.toString());

      return palette;
    }
  }]);

  return Complementary;
}(_Palette3.default);

exports.default = Complementary;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compound = function (_Palette) {
  _inherits(Compound, _Palette);

  function Compound() {
    _classCallCheck(this, Compound);

    return _possibleConstructorReturn(this, (Compound.__proto__ || Object.getPrototypeOf(Compound)).apply(this, arguments));
  }

  _createClass(Compound, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.10,
          palette = [],
          i = 0;

      palette.push(this.value.toString());

      this.value.hue -= 40;
      palette.push(this.value.toString());

      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * diff;
      palette.push(this.value.toString());
      this.value.saturation += this.value.saturation * diff;
      this.value.lightness += this.value.lightness * diff;

      this.value.hue -= 140;
      palette.push(this.value.toString());

      this.value.hue += 20;
      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * diff;
      palette.push(this.value.toString());

      return palette;
    }
  }]);

  return Compound;
}(_Palette3.default);

exports.default = Compound;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Triad = function (_Palette) {
  _inherits(Triad, _Palette);

  function Triad() {
    _classCallCheck(this, Triad);

    return _possibleConstructorReturn(this, (Triad.__proto__ || Object.getPrototypeOf(Triad)).apply(this, arguments));
  }

  _createClass(Triad, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.10,
          palette = [],
          i = 0;

      palette.push(this.value.toString());

      this.value.hue -= 120;
      palette.push(this.value.toString());

      this.value.hue -= 120;
      palette.push(this.value.toString());

      this.value.hue -= 120;
      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * diff;
      palette.push(this.value.toString());

      this.value.hue -= 120;
      palette.push(this.value.toString());

      return palette;
    }
  }]);

  return Triad;
}(_Palette3.default);

exports.default = Triad;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Palette2 = __webpack_require__(0);

var _Palette3 = _interopRequireDefault(_Palette2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shades = function (_Palette) {
  _inherits(Shades, _Palette);

  function Shades() {
    _classCallCheck(this, Shades);

    return _possibleConstructorReturn(this, (Shades.__proto__ || Object.getPrototypeOf(Shades)).apply(this, arguments));
  }

  _createClass(Shades, [{
    key: 'toPalette',
    value: function toPalette() {
      var diff = 0.10,
          palette = [],
          i = 0;

      palette.push(this.value.toString());

      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * diff;
      palette.push(this.value.toString());

      this.value.saturation -= this.value.saturation * diff;
      this.value.lightness -= this.value.lightness * diff;
      palette.push(this.value.toString());

      this.value.saturation += this.value.saturation * (diff * 3);
      this.value.lightness += this.value.lightness * (diff * 3);
      palette.push(this.value.toString());

      this.value.saturation += this.value.saturation * diff;
      this.value.lightness += this.value.lightness * diff;
      palette.push(this.value.toString());

      return palette;
    }
  }]);

  return Shades;
}(_Palette3.default);

exports.default = Shades;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function () {};

module.exports = exports["default"];

/***/ })
/******/ ]);
});