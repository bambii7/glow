"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        module.export.Glow = function () {
            function Glow() {
                _classCallCheck(this, Glow);
            }

            _createClass(Glow, [{
                key: "hslToRgb",
                value: function hslToRgb(hsl) {
                    var h, s, l, r, g, b, temp1, temp2;
                    // clone array
                    hsl = hsl.slice(0);

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
                    return [parseInt(r, 10), parseInt(g, 10), parseInt(b, 10)];
                }
            }, {
                key: "hueToRgb",
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
                key: "hexToHsl",
                value: function hexToHsl(hex) {
                    var rgb = this.hexToRgb(hex);
                    return this.rgbToHsl(rgb);
                }
            }, {
                key: "hslToHex",
                value: function hslToHex(hsl) {
                    var rgb = this.hslToRgb(hsl);
                    return this.rgbToHex(rgb);
                }
            }, {
                key: "hslToDegPercPerc",
                value: function hslToDegPercPerc(hsl) {
                    hsl[0] = Math.round(hsl[0] * 60);
                    if (hsl[0] < 0) {
                        hsl[0] += 360;
                    }

                    hsl[1] = Math.round(hsl[1] * 100);
                    hsl[2] = Math.round(hsl[2] * 100);
                    return hsl;
                }
            }, {
                key: "degPercPercToHsl",
                value: function degPercPercToHsl(hsl) {
                    hsl[0] /= 360;
                    hsl[1] /= 100;
                    hsl[2] /= 100;

                    return hsl;
                }
            }, {
                key: "rgbToHsl",
                value: function rgbToHsl(rgb) {
                    var max = 0,
                        min = 0,
                        maxAdd = 0,
                        maxSub = 0,
                        h = 0,
                        s = 0,
                        l = 0;

                    rgb = rgb.map(function (v) {
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

                    return this.hslToDegPercPerc([h, s, l]);
                }
            }, {
                key: "rgbToHex",
                value: function rgbToHex(rgb) {
                    return rgb.map(function (v) {
                        return v.toString(16);
                    }).join('').toUpperCase();
                }
            }, {
                key: "hexToRgb",
                value: function hexToRgb(hexValue) {
                    var hex = this.stringToHex(hexValue);
                    if (hex === null || hexValue === undefined) {
                        throw "not a valid hex value";
                    }
                    hex = hex.match(/.{1,2}/g);
                    return hex.map(function (v) {
                        return parseInt(v, 16);
                    });
                }
            }, {
                key: "expandShortHex",
                value: function expandShortHex(shortHex) {
                    return shortHex.split('').map(function (v) {
                        return v + v;
                    }).join('');
                }
            }, {
                key: "stringToHex",
                value: function stringToHex(hexString) {
                    var hex = /[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/.exec(hexString)[0];
                    hex = hex.length === 3 ? this.expandShortHex(hex) : hex;
                    return hex;
                }
            }]);

            return Glow;
        }();
        module.export.Color = function () {
            function Color() {
                _classCallCheck(this, Color);
            }

            _createClass(Color, [{
                key: "some",
                value: function some() {
                    return "some";
                }
            }, {
                key: "toString",
                value: function toString() {
                    return "Color";
                }
            }]);

            return Color;
        }(); //var Color = require('Color').Color

        module.export.Hex = function (_Color) {
            _inherits(Hex, _Color);

            function Hex() {
                _classCallCheck(this, Hex);

                return _possibleConstructorReturn(this, (Hex.__proto__ || Object.getPrototypeOf(Hex)).apply(this, arguments));
            }

            _createClass(Hex, [{
                key: "toString",
                value: function toString() {
                    return "Hex Color";
                }
            }]);

            return Hex;
        }(Color);
    }, {}] }, {}, [1]);
//# sourceMappingURL=glow-v1.0.0.js.map
//# sourceMappingURL=glow-v1.0.0.js.map
