(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rabbit", [], factory);
	else if(typeof exports === 'object')
		exports["rabbit"] = factory();
	else
		root["rabbit"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/moment/locale/es-us.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/es-us.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
//! author : chrisrodz : https://github.com/chrisrodz

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   0
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
            '_'
        ),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
        monthsParse = [
            /^ene/i,
            /^feb/i,
            /^mar/i,
            /^abr/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^ago/i,
            /^sep/i,
            /^oct/i,
            /^nov/i,
            /^dic/i,
        ],
        monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esUs = moment.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
            '_'
        ),
        monthsShort: function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
            sameDay: function () {
                return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextDay: function () {
                return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextWeek: function () {
                return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastDay: function () {
                return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastWeek: function () {
                return (
                    '[el] dddd [pasado a la' +
                    (this.hours() !== 1 ? 's' : '') +
                    '] LT'
                );
            },
            sameElse: 'L',
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            w: 'una semana',
            ww: '%d semanas',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6, // The week that contains Jan 6th is the first week of the year.
        },
    });

    return esUs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-cn.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/zh-cn.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
//! author : uu109 : https://github.com/uu109

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   0
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    var zhCn = moment.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
        ),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
            '_'
        ),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    return '[下]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            lastDay: '[昨天]LT',
            lastWeek: function (now) {
                if (this.week() !== now.week()) {
                    return '[上]dddLT';
                } else {
                    return '[本]dddLT';
                }
            },
            sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            w: '1 周',
            ww: '%d 周',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年',
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    return zhCn;

})));


/***/ }),

/***/ "./node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|zh-cn(\\.js)?)$":
/*!****************************************************************************!*\
  !*** ./node_modules/moment/locale/ sync [/\\](es-us(\.js)?|zh-cn(\.js)?)$ ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|zh-cn(\\.js)?)$";

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
//! moment.js
//! version : 2.29.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    0
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            "object" !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = undefined;
                __webpack_require__("./node_modules/moment/locale sync recursive [/\\\\](es-us(\\.js)?|zh-cn(\\.js)?)$")("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));


/***/ }),

/***/ "./src/components/prefix.ts":
/*!**********************************!*\
  !*** ./src/components/prefix.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefixCls = 'rab-';
/* harmony default export */ __webpack_exports__["default"] = ({
    alert: prefixCls + "alert",
    avatar: prefixCls + "avatar",
    backtop: prefixCls + "back-top",
    badge: prefixCls + "badge",
    button: prefixCls + "btn",
    card: prefixCls + "card",
    collapse: prefixCls + "collapse",
    divider: prefixCls + "divider",
    drawer: prefixCls + "drawer",
    dropdown: prefixCls + "dropdown",
    icon: prefixCls + "icon",
    loadingBar: prefixCls + "loading-bar",
    message: prefixCls + "message",
    messageChild: prefixCls + "message-notice",
    modal: prefixCls + "modal",
    notice: prefixCls + "notice",
    poptip: prefixCls + "poptip",
    noticeChild: prefixCls + "notice-notice",
    progress: prefixCls + "progress",
    result: prefixCls + "result",
    switch: prefixCls + "switch",
    tabs: prefixCls + "tabs",
    spin: prefixCls + "spin",
    steps: prefixCls + "steps",
    time: prefixCls + "time",
    timeline: prefixCls + "timeline",
    tooltip: prefixCls + "tooltip"
});


/***/ }),

/***/ "./src/components/time/time.ts":
/*!*************************************!*\
  !*** ./src/components/time/time.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefix */ "./src/components/prefix.ts");
/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom-utils */ "./src/dom-utils/index.ts");



var Time = /** @class */ (function () {
    function Time() {
        this.VERSION = 'v1.0';
        this.components = (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.$el)('r-time', { all: true });
        this._create(this.components);
    }
    Time.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this.setTime(node);
            _this.handleClick(node);
            (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.removeAttrs)(node, ['time', 'type', 'hash', 'locale', 'interval']);
        });
    };
    Time.prototype.setTime = function (node) {
        var _a = this._attrs(node), type = _a.type, time = _a.time, locale = _a.locale, interval = _a.interval;
        var timeStamp = eval(time);
        var timer = function () {
            if (type === 'relative') {
                var relativeTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).locale(locale).fromNow();
                if (relativeTime === '几秒前') {
                    relativeTime = '刚刚';
                    // 小于60秒则说明是要通过每隔多少秒更新时间而不是每隔多少分钟
                    if (interval < 60) {
                        (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.setText)(node, moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf('second').format('s') + "\u79D2\u524D");
                    }
                    else {
                        (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.setText)(node, relativeTime);
                    }
                }
                else {
                    (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.setText)(node, relativeTime);
                }
            }
            else if (type === 'date') {
                var data = moment__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).format('YYYY-MM-DD');
                (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.setText)(node, data);
            }
            else if (type === 'datetime') {
                var dataTime = moment__WEBPACK_IMPORTED_MODULE_0___default()(timeStamp).format('YYYY-MM-DD-HH:mm:ss');
                (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.setText)(node, dataTime);
            }
            return timer;
        };
        // 立即执行定时器
        window.setInterval(timer(), interval * 1000);
    };
    Time.prototype.handleClick = function (node) {
        var hash = this._attrs(node).hash;
        if (!hash)
            return;
        node.classList.add(_prefix__WEBPACK_IMPORTED_MODULE_1__.default.time + "-with-hash");
        node.addEventListener('click', function () { return (window.location.hash = hash); });
    };
    Time.prototype._attrs = function (node) {
        return {
            time: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.getStrTypeAttr)(node, 'time', ''),
            type: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.getStrTypeAttr)(node, 'type', 'relative'),
            hash: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.getStrTypeAttr)(node, 'hash', ''),
            locale: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.getStrTypeAttr)(node, 'locale', 'zh-cn'),
            interval: (0,_dom_utils__WEBPACK_IMPORTED_MODULE_2__.getNumTypeAttr)(node, 'interval', 60)
        };
    };
    return Time;
}());
/* harmony default export */ __webpack_exports__["default"] = (Time);


/***/ }),

/***/ "./src/dom-utils/elem.ts":
/*!*******************************!*\
  !*** ./src/dom-utils/elem.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$el": function() { return /* binding */ $el; },
/* harmony export */   "createElem": function() { return /* binding */ createElem; },
/* harmony export */   "setCss": function() { return /* binding */ setCss; },
/* harmony export */   "setHtml": function() { return /* binding */ setHtml; },
/* harmony export */   "setText": function() { return /* binding */ setText; },
/* harmony export */   "getStrTypeAttr": function() { return /* binding */ getStrTypeAttr; },
/* harmony export */   "getBooleanTypeAttr": function() { return /* binding */ getBooleanTypeAttr; },
/* harmony export */   "getNumTypeAttr": function() { return /* binding */ getNumTypeAttr; },
/* harmony export */   "getArrTypeAttr": function() { return /* binding */ getArrTypeAttr; }
/* harmony export */ });
/**
 * 获取元素
 * @param node
 * @param options 选项 all 表示是否获取所有节点
 */
function $el(node, options) {
    if (options === null || options === void 0 ? void 0 : options.all) {
        return document.querySelectorAll(node);
    }
    else {
        return document.querySelector(node);
    }
}
function createElem(tagName) {
    return document.createElement(tagName);
}
function setCss(node, styeName, value) {
    return (node.style[styeName] = value);
}
function setHtml(node, value) {
    if (value || value === '') {
        return (node.innerHTML = value);
    }
    else {
        return node.innerHTML;
    }
}
function setText(node, value) {
    if (value || value === '') {
        return (node.textContent = value);
    }
    else {
        return node.textContent || '';
    }
}
// 2021-01-17 新增，在此后的开发才使用，此前的暂不修改
// 通用的标签属性获取方法
// 获取后的值由原先的字符串类型转换成对应类型
// Return String type
function getStrTypeAttr(node, attrName, defaultVal) {
    return node.getAttribute(attrName) || defaultVal;
}
// Return Boolean type
function getBooleanTypeAttr(node, attrName) {
    return node.getAttribute(attrName) === 'true';
}
// Return Number type
function getNumTypeAttr(node, attrName, defaultVal) {
    return Number(node.getAttribute(attrName)) || defaultVal;
}
// Return Array type
function getArrTypeAttr(node, attrName) {
    var _a;
    var attr = ((_a = node.getAttribute(attrName)) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '[]';
    var array = JSON.parse(attr);
    return array;
}


/***/ }),

/***/ "./src/dom-utils/index.ts":
/*!********************************************!*\
  !*** ./src/dom-utils/index.ts + 5 modules ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$el": function() { return /* reexport */ elem.$el; },
  "bind": function() { return /* reexport */ bind; },
  "createElem": function() { return /* reexport */ elem.createElem; },
  "getBooleanTypeAttr": function() { return /* reexport */ elem.getBooleanTypeAttr; },
  "getNumTypeAttr": function() { return /* reexport */ elem.getNumTypeAttr; },
  "getStrTypeAttr": function() { return /* reexport */ elem.getStrTypeAttr; },
  "nextAll": function() { return /* reexport */ nextAll; },
  "prevAll": function() { return /* reexport */ prevAll; },
  "removeAttrs": function() { return /* reexport */ removeAttrs; },
  "setCss": function() { return /* reexport */ elem.setCss; },
  "setHtml": function() { return /* reexport */ elem.setHtml; },
  "setText": function() { return /* reexport */ elem.setText; },
  "siblings": function() { return /* reexport */ siblings; },
  "slider": function() { return /* reexport */ slide; },
  "unbind": function() { return /* reexport */ unbind; }
});

;// CONCATENATED MODULE: ./src/dom-utils/bind.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * 解决事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
function bind(obj, type, callback) {
    if (obj.addEventListener) {
        // W3C内核
        obj.addEventListener(type, callback);
    }
    else {
        // IE内核
        obj.attachEvent("on" + type, callback);
    }
}
/**
 * 解决移除事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
function unbind(obj, type, callback) {
    if (obj.removeEventListener) {
        // W3C内核
        obj.removeEventListener(type, callback);
    }
    else {
        // IE内核
        obj.detachEvent("on" + type, callback);
    }
}

// EXTERNAL MODULE: ./src/dom-utils/elem.ts
var elem = __webpack_require__("./src/dom-utils/elem.ts");
;// CONCATENATED MODULE: ./src/dom-utils/prev&next.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
function prevAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var prevChildren = [];
    var i = 0;
    var length = Child.length;
    for (; i < length; i++) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        prevChildren.push(_child);
    }
    return prevChildren;
}
function nextAll(el) {
    var Parent = el.parentElement;
    var Child = Parent.children;
    var nextChildren = [];
    var length = Child.length;
    var start = 0;
    var i = length - 1;
    for (; i >= start; i--) {
        var _child = Child[i];
        if (_child == el) {
            break;
        }
        nextChildren.unshift(_child);
    }
    return nextChildren;
}

;// CONCATENATED MODULE: ./src/dom-utils/remove-attrs.ts
/**
 * 移除组件标签的自定义属性
 * 1.非关联css的属性
 * 2.仅取值属性
 * 3.非业务逻辑代码要用的属性
 */
function removeAttrs(elem, attrs) {
    var i = 0;
    var length = attrs.length;
    for (; i < length; i++) {
        var attr = attrs[i];
        elem.getAttribute(attr) || elem.getAttribute(attr) === ''
            ? elem.removeAttribute(attr)
            : null;
    }
}

;// CONCATENATED MODULE: ./src/dom-utils/siblings.ts
function siblings(elem) {
    var _a;
    var r = [];
    var n = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }
    return r;
}

;// CONCATENATED MODULE: ./src/dom-utils/slide.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
// @ts-nocheck
/* harmony default export */ var slide = (window.Slider = (function () {
    // 定义Slider对象
    var Slider = {
        slideDown: function (el, time) {
            void 0;
        },
        slideUp: function (el, time) {
            void 0;
        }
    };
    // I.定义一个TimerManager类
    // 1）构造函数
    function TimerManager() {
        this.timers = []; // 保存定时器
        this.args = []; // 保存定时器的参数
        this.isFiring = false;
    }
    // 2）静态方法：为element添加一个TimerManager实例
    TimerManager.makeInstance = function (element) {
        // 如果element.__TimerManager__上没有TimerManager，就为其添加一个
        if (!element.__TimerManager__ || element.__TimerManager__.constructor != TimerManager) {
            element.__TimerManager__ = new TimerManager();
        }
    };
    // 3）扩展TimerManager原型，分别实现add，fire，next方法
    TimerManager.prototype.add = function (timer, args) {
        this.timers.push(timer);
        this.args.push(args);
        this.fire();
    };
    TimerManager.prototype.fire = function () {
        if (!this.isFiring) {
            var timer = this.timers.shift(), // 取出定时器
            args = this.args.shift(); // 取出定时器参数
            if (timer && args) {
                this.isFiring = true;
                // 传入参数，执行定时器函数
                timer(args[0], args[1]);
            }
        }
    };
    TimerManager.prototype.next = function () {
        this.isFiring = false;
        this.fire();
    };
    // II. 修改动画函数并在定时器结束后调用element.__TimerManager__.next()
    // 1）下滑函数
    function fnSlideDown(element, time) {
        if (element.offsetHeight == 0) {
            //如果当前高度为0，则执行下拉动画
            // 获取元素总高度
            element.style.display = 'block'; // 1.显示元素，元素变为可见
            var totalHeight_1 = element.offsetHeight; // 2.保存总高度
            element.style.height = '0px'; // 3.再将元素高度设置为0，元素又变为不可见
            // 定义一个变量保存元素当前高度
            var currentHeight_1 = 0; // 当前元素高度为0
            // 计算每次增加的值
            var increment_1 = totalHeight_1 / (time / 10);
            // 开始循环定时器
            var timer_1 = setInterval(function () {
                // 增加一部分高度
                currentHeight_1 += increment_1;
                // 把当前高度赋值给height属性
                element.style.height = currentHeight_1 + "px";
                // 如果当前高度大于或等于总高度则关闭定时器
                if (currentHeight_1 >= totalHeight_1) {
                    // 关闭定时器
                    clearInterval(timer_1);
                    // 把高度设置为总高度
                    element.style.height = totalHeight_1 + "px";
                    if (element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        }
        else {
            // 如果当前高度不为0，则直接执行队列里的下一个函数
            if (element.__TimerManager__ && element.__TimerManager__.constructor == TimerManager) {
                element.__TimerManager__.next();
            }
        }
    }
    // 2）上拉函数
    function fnSlideUp(element, time) {
        if (element.offsetHeight > 0) {
            // 如果当前高度不为0，则执行上滑动画
            // 获取元素总高度
            var totalHeight_2 = element.offsetHeight;
            // 定义一个变量保存元素当前高度
            var currentHeight_2 = totalHeight_2;
            // 计算每次减去的值
            var decrement_1 = totalHeight_2 / (time / 10);
            // 开始循环定时器
            var timer_2 = setInterval(function () {
                // 减去当前高度的一部分
                currentHeight_2 -= decrement_1;
                // 把当前高度赋值给height属性
                element.style.height = currentHeight_2 + "px";
                // 如果当前高度小于等于0，就关闭定时器
                if (currentHeight_2 <= 0) {
                    // 关闭定时器
                    clearInterval(timer_2);
                    // 把元素display设置为none
                    element.style.display = 'none';
                    // 把元素高度值还原
                    element.style.height = totalHeight_2 + "px";
                    if (element.__TimerManager__ &&
                        element.__TimerManager__.constructor == TimerManager) {
                        element.__TimerManager__.next();
                    }
                }
            }, 10);
        }
        else {
            // 如果当前高度为0， 则直接执行队列里的下一个函数
            if (element.__TimerManager__ && element.__TimerManager__.constructor == TimerManager) {
                element.__TimerManager__.next();
            }
        }
    }
    // III.定义外部访问接口
    // 1）下拉接口
    Slider.slideDown = function (element, time) {
        TimerManager.makeInstance(element);
        element.__TimerManager__.add(fnSlideDown, arguments);
        return this;
    };
    // 2）上滑接口
    Slider.slideUp = function (element, time) {
        TimerManager.makeInstance(element);
        element.__TimerManager__.add(fnSlideUp, arguments);
        return this;
    };
    // 返回Slider对象
    return Slider;
})());

;// CONCATENATED MODULE: ./src/dom-utils/index.ts









/***/ }),

/***/ "./src/index.ts":
/*!************************************!*\
  !*** ./src/index.ts + 122 modules ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

// NAMESPACE OBJECT: ./src/rabbit-design.ts
var rabbit_design_namespaceObject = {};
__webpack_require__.r(rabbit_design_namespaceObject);
__webpack_require__.d(rabbit_design_namespaceObject, {
  "Alert": function() { return components_alert; },
  "Avatar": function() { return components_avatar; },
  "BackTop": function() { return components_back_top; },
  "Badge": function() { return components_badge; },
  "Button": function() { return components_button; },
  "Card": function() { return components_card; },
  "Collapse": function() { return components_collapse; },
  "Divider": function() { return components_divider; },
  "Drawer": function() { return components_drawer; },
  "Dropdown": function() { return components_dropdown; },
  "Loading": function() { return components_loading_bar; },
  "Message": function() { return components_message; },
  "Modal": function() { return components_modal; },
  "Notice": function() { return components_notice; },
  "Poptip": function() { return components_poptip; },
  "Progress": function() { return components_progress; },
  "Result": function() { return components_result; },
  "Spin": function() { return components_spin; },
  "Steps": function() { return components_steps; },
  "Switch": function() { return components_switch; },
  "Tabs": function() { return components_tabs; },
  "Time": function() { return components_time; },
  "Timeline": function() { return components_timeline; },
  "Tooltip": function() { return components_tooltip; }
});

;// CONCATENATED MODULE: ./src/mixins/warn.ts
function warn(msg) {
    console.error("[Rabbit] Error: " + msg);
    return;
}

// EXTERNAL MODULE: ./src/dom-utils/index.ts + 5 modules
var dom_utils = __webpack_require__("./src/dom-utils/index.ts");
;// CONCATENATED MODULE: ./src/mixins/arrow.ts
// 更新popver弹窗或下拉菜单的箭头方向

function scrollUpdate() {
    var tooltips = (0,dom_utils.$el)('.rab-tooltip-popper', { all: true });
    var poptips = (0,dom_utils.$el)('.rab-poptip-popper', { all: true });
    var scrollEv = function (target) {
        target.forEach(function (node) {
            var popperPlacement = node.dataset.popperPlacement;
            var xPlacement = node.getAttribute('x-placement');
            if (xPlacement != popperPlacement) {
                node.setAttribute('x-placement', popperPlacement);
            }
        });
    };
    // 当页面有这些组件存在时才做滚动监听
    if (tooltips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(tooltips); });
    }
    if (poptips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(poptips); });
    }
}
function toggleUpdate(popper, updateMode, reference, delay) {
    var setArrow = function () {
        var xPlacement = popper.getAttribute('x-placement');
        var popperPlacement = popper.dataset.popperPlacement;
        if (popperPlacement) {
            if (xPlacement === popperPlacement)
                return;
            popper.setAttribute('x-placement', popperPlacement);
        }
    };
    if (reference) {
        if (updateMode === 'hover') {
            reference.addEventListener(updateMode, function (e) {
                e.stopPropagation();
                if (delay) {
                    setTimeout(function () {
                        setArrow();
                    }, delay);
                }
                else {
                    setArrow();
                }
            });
        }
        else if (updateMode === 'click') {
            reference.addEventListener('click', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
        else if (updateMode === 'focus') {
            reference.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
    }
    setArrow();
}

;// CONCATENATED MODULE: ./src/mixins/css-transition.ts
function CssTransition(elem, _a) {
    var enterCls = _a.enterCls, leaveCls = _a.leaveCls, inOrOut = _a.inOrOut, rmCls = _a.rmCls, timeout = _a.timeout, hiddenParent = _a.hiddenParent;
    var removeClassAfterTransition = function (aniClassName) {
        if (rmCls) {
            setTimeout(function () {
                aniClassName ? elem.classList.remove(aniClassName) : '';
            }, timeout);
        }
    };
    if (inOrOut === 'in') {
        // 如果父元素被隐藏则变为显示
        if (hiddenParent) {
            hiddenParent.style.display = '';
            hiddenParent.style.opacity = '1';
        }
        if (elem.style.display === 'none')
            elem.style.display = '';
        if (elem.style.opacity === '0')
            elem.style.opacity = '1';
        elem.classList.add(enterCls);
        removeClassAfterTransition(enterCls);
    }
    else if (inOrOut === 'out') {
        if (elem.classList.contains(enterCls)) {
            elem.classList.replace(enterCls, leaveCls);
        }
        else {
            elem.classList.add(leaveCls);
        }
        removeClassAfterTransition(leaveCls);
        // 过渡效果持续时间后隐藏元素
        setTimeout(function () {
            if (hiddenParent)
                hiddenParent.style.display = 'none';
            elem.style.display = 'none';
            elem.style.opacity = '0';
        }, timeout);
    }
}

;// CONCATENATED MODULE: ./src/mixins/scrollable.ts

function scrollable_scrollable(_a) {
    var _b = _a.scroll, scroll = _b === void 0 ? false : _b, _c = _a.lock, lock = _c === void 0 ? false : _c, node = _a.node, tagName = _a.tagName;
    // 是否禁止对页面滚动条的修改
    // 页面是否可以滚动
    if (lock && !scroll) {
        (0,dom_utils.setCss)(document.body, 'paddingRight', '17px');
        (0,dom_utils.setCss)(document.body, 'overflow', 'hidden');
    }
    else {
        (0,dom_utils.setCss)(document.body, 'paddingRight', '');
        (0,dom_utils.setCss)(document.body, 'overflow', '');
    }
    var prevNode = node === null || node === void 0 ? void 0 : node.previousElementSibling;
    // 解决抽屉或对话框组件在同时打开多个的情况下，只关闭了一个窗口而页面滚动条恢复出现的bug
    if (prevNode) {
        var prevTagName = prevNode.tagName.toLocaleLowerCase().replace(/r-/, '');
        if (prevTagName === tagName) {
            // @ts-ignore
            if (prevNode.dataset[prevTagName + "Visable"] === 'true') {
                scrollable_scrollable({ scroll: false, lock: true });
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/mixins/cb-promise.ts
/**
 * 用于实例组件关闭后返回 promise，提供 then 接口在关闭后运行 callback
 * @param duration 组件关闭的时间，这里是用于组件没自己的配置项时，设为全局时间
 * @param compConfig 组件的配置项，这里是用于是否切换为组件自己设置的时间
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function usePromiseCallback(duration, compConfig) {
    // promise 触发的时机为默认时间
    var timeout = duration;
    // 当组件参数以对象形式传递，并且设置了自己的 duration则修改 promise的触发时机
    if (typeof compConfig === 'object') {
        if (compConfig.duration || compConfig.duration === 0) {
            timeout = compConfig.duration;
        }
        else {
            timeout = duration;
        }
    }
    return promiseCb(timeout);
}
function promiseCb(duration) {
    var timer = null;
    return new Promise(function (afterClose) {
        timer = setTimeout(afterClose, duration * 1000);
        // duration 为 0 则说明当前组件不自动关闭
        duration === 0 ? clearTimeout(timer) : timer;
    });
}

;// CONCATENATED MODULE: ./src/mixins/click-outside.ts


/**
 * 适用tooltip、poptip的点击空白处关闭
 */
function clickOutside(target, datasetVal, leaveCls) {
    var hideJudgment = function () {
        target.forEach(function (node) {
            if (node.dataset[datasetVal] === 'true') {
                node.dataset[datasetVal] = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls: leaveCls,
                    timeout: 200
                });
            }
        });
    };
    (0,dom_utils.bind)(document, 'focusout', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
    (0,dom_utils.bind)(document, 'click', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
}

;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js


function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe[incompatible-return]: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/validateModifiers.js


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === enums_top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









;// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


;// CONCATENATED MODULE: ./src/utils/check-type.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

var typeOf = function (r) {
    var s = Object.prototype.toString.call(r);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
var errMsg = function (right, wrong) {
    warn("The expected type accepted is " + right + ", but the error type currently in use is --> " + wrong);
    return false;
};
var isUndef = function (r) { return typeof r === 'undefined'; };
var isStr = function (r) {
    return typeof r === 'string' ? true : errMsg('string', typeOf(r));
};
var isNum = function (r) {
    return typeof r === 'number' ? true : errMsg('number', typeOf(r));
};
var isBol = function (r) {
    return typeof r === 'boolean' ? true : errMsg('boolean', typeOf(r));
};
/**
 *
 * @param r  函数名
 * @param param 回调附带的参数。有多个参数时使用数组传递
 */
var isFn = function (r, param) {
    return typeof r === 'function' ? r(param) : errMsg('function', typeOf(r));
};
var isObj = function (r) {
    return r.constructor === Object ? true : errMsg('object', typeOf(r));
};
var isArr = function (r) {
    return r.constructor === Array ? true : errMsg('array', typeOf(r));
};

;// CONCATENATED MODULE: ./src/utils/destroy.ts

function destroyElem(elem, _a) {
    var _b = _a.fadeOut, fadeOut = _b === void 0 ? false : _b, clsLeave = _a.clsLeave, clsEnter = _a.clsEnter, _c = _a.duration, duration = _c === void 0 ? 3 : _c, _d = _a.transitionTime, transitionTime = _d === void 0 ? 250 : _d, _e = _a.destroy, destroy = _e === void 0 ? true : _e;
    var timer = null;
    // 方式一：是否只用淡出效果
    if (fadeOut) {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: 'rab-fade-in',
            leaveCls: 'rab-fade-out',
            timeout: 250
        });
        return;
    }
    // 方式二：手动配置过渡效果和过渡时间
    timer = setTimeout(function () {
        isDismiss();
        CssTransition(elem, {
            inOrOut: 'out',
            enterCls: clsEnter,
            leaveCls: clsLeave,
            timeout: transitionTime
        });
    }, duration * 1000);
    // 自动关闭的延时为 0 则不关闭
    duration <= 0 ? clearTimeout(timer) : timer;
    // 判断需要销毁或者是仅隐藏元素
    function isDismiss() {
        setTimeout(function () {
            if (destroy) {
                elem.remove();
                elem = null; // 释放内存
            }
        }, transitionTime);
    }
}
function destroyElemByKey(options) {
    var prefixKey = options.prefixKey;
    var key = options.key;
    // 统一转换为字符串
    typeof key !== 'string' ? (key = key === null || key === void 0 ? void 0 : key.toString()) : key;
    // 传入的key是否选取得到对应的元素
    var target = document.querySelector("[" + prefixKey + "-key=\"" + key + "\"]");
    target ? destroyElem(target, options) : warn("The key value is invalid --> \"" + key + "\"");
}

;// CONCATENATED MODULE: ./src/utils/use-html-string.ts

/**
 * 设置属性是否支持传入 HTML 片段
 * @param elem
 * @param content
 * @param use
 */
function isUseHTMLString(elem, content, use) {
    use ? (0,dom_utils.setHtml)(elem, content) : (0,dom_utils.setText)(elem, content);
}

;// CONCATENATED MODULE: ./src/utils/validComps.ts
/**
 * 检查是否为有效并且正确的组件
 */
function validComps(target, compName) {
    if (!target) {
        throw new Error("The selected target element is does not exist --> \"" + target + "\"");
    }
    var targetName = target.tagName.toLowerCase().replace(/r-/, '');
    if (targetName !== compName) {
        throw new Error("The configured component was selected incorrectly. It is not a " + compName + " component");
    }
}

;// CONCATENATED MODULE: ./src/utils/index.ts






;// CONCATENATED MODULE: ./src/mixins/tooltip.ts



function _newCreatePopper(reference, popper, placement, offset) {
    return popper_createPopper(reference, popper, {
        placement: placement,
        modifiers: [
            {
                name: 'computeStyles',
                options: {
                    gpuAcceleration: false // 使用top/left属性。否则会和弹出器动画冲突
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: false // 避免重新计算弹出器位置从而造成位置牛头不对马嘴
                }
            },
            {
                name: 'offset',
                options: {
                    offset: [offset] // 自定义弹出器出现位置的偏移量
                }
            }
        ]
    });
}
function handleHoverShowAndHideEvents(_a) {
    var reference = _a.reference, popper = _a.popper, datasetVal = _a.datasetVal, showCb = _a.showCb, hideCb = _a.hideCb, delay = _a.delay, timer = _a.timer;
    (0,dom_utils.bind)(reference, 'mouseenter', function () {
        timer = setTimeout(function () {
            showEv();
        }, delay);
    });
    (0,dom_utils.bind)(reference, 'mouseleave', hideEv);
    // 通过设置 popper.dataset.tooltipShow 的方式可以判断提示框是否显示，
    // 并根据设置的值 "true" 和 "false" 来判断是否执行对应回调事件，
    // 避免出现鼠标快速经过但没有显示提示框，却依然执行了提示框消失时触发的回调
    function showEv() {
        popper.dataset[datasetVal] = 'show';
        showCb && isFn(showCb);
    }
    function hideEv() {
        clearTimeout(timer);
        if (popper.dataset[datasetVal] === 'show') {
            popper.dataset[datasetVal] = 'hide';
            hideCb && isFn(hideCb);
        }
        (0,dom_utils.unbind)(reference, 'mouseenter', showEv);
    }
}

;// CONCATENATED MODULE: ./src/mixins/index.ts









// EXTERNAL MODULE: ./src/components/prefix.ts
var prefix = __webpack_require__("./src/components/prefix.ts");
;// CONCATENATED MODULE: ./src/components/alert/alert.ts




var Alert = /** @class */ (function () {
    function Alert() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-alert', { all: true });
        this._create(this.components);
    }
    Alert.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'alert');
        var alertIcon = target === null || target === void 0 ? void 0 : target.querySelector("." + prefix.default.alert + "-icon");
        var alertMsg = target === null || target === void 0 ? void 0 : target.querySelector("." + prefix.default.alert + "-message");
        var alertDesc = target === null || target === void 0 ? void 0 : target.querySelector("." + prefix.default.alert + "-desc");
        return {
            // 设置消息标题
            get message() {
                return alertMsg;
            },
            set message(newVal) {
                if (newVal != alertMsg.innerHTML) {
                    (0,dom_utils.setHtml)(alertMsg, newVal);
                }
                return;
            },
            // 设置描述内容
            get desc() {
                return alertDesc;
            },
            set desc(newVal) {
                if (alertDesc) {
                    if (newVal != (0,dom_utils.setHtml)(alertDesc)) {
                        (0,dom_utils.setHtml)(alertDesc, newVal);
                    }
                    return;
                }
                else {
                    // 在目标alert标签需要里先有描述内容才能使用该方式动态更新内容
                    warn('Before setting the description of this alert tag, you need to add the attribute "desc" to the tag and add content or Spaces');
                }
            },
            // 自定义图标
            get icon() {
                return alertIcon;
            },
            set icon(newVal) {
                if (alertIcon) {
                    if (newVal != (0,dom_utils.setHtml)(alertIcon)) {
                        (0,dom_utils.setHtml)(alertIcon, newVal);
                    }
                    return;
                }
                else {
                    warn('This alert tag does not set the display icon');
                }
            }
        };
    };
    Alert.prototype.onClose = function (el, cb) {
        var target = document.querySelector(el);
        validComps(target, 'alert');
        // 将当前选中的组件作为参数返回出去
        var $this = target;
        var alertCloseBtn = target.querySelector("." + prefix.default.alert + "-close");
        (0,dom_utils.bind)(alertCloseBtn, 'click', function () { return isFn(cb, $this); });
    };
    Alert.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setIcon(node);
            _this._setMsg(node);
            _this._setDesc(node);
            _this._setCloseBtn(node);
            (0,dom_utils.removeAttrs)(node, ['message', 'desc', 'show-icon', 'closable', 'close-text']);
        });
    };
    Alert.prototype._setIcon = function (node) {
        var showIcon = this._isShowIcon(node);
        var type = this._getType(node);
        var iconType = '';
        if (!showIcon)
            return;
        if (type === 'info') {
            iconType = 'ios-information-circle';
        }
        if (type === 'success') {
            iconType = 'ios-checkmark-circle';
        }
        if (type === 'warning') {
            iconType = 'ios-alert';
        }
        if (type === 'error') {
            iconType = 'ios-close-circle';
        }
        if (this._getDesc(node)) {
            type === 'warning'
                ? (iconType = 'md-information-circle-outline')
                : (iconType += '-outline');
        }
        var AlertIcon = (0,dom_utils.createElem)('span');
        AlertIcon.className = prefix.default.alert + "-icon";
        AlertIcon.innerHTML = "<i class=\"rab-icon rab-icon-" + iconType + "\"></i>";
        node.classList.add(prefix.default.alert + "-with-icon");
        node.prepend(AlertIcon);
    };
    Alert.prototype._setCloseText = function (node) {
        return node.getAttribute('close-text') || '';
    };
    Alert.prototype._setMsg = function (node) {
        var AlertMessage = (0,dom_utils.createElem)('div');
        var content = this._getMsg(node);
        AlertMessage.className = prefix.default.alert + "-message";
        (0,dom_utils.setHtml)(AlertMessage, content);
        node.prepend(AlertMessage);
    };
    Alert.prototype._setDesc = function (node) {
        if (!this._getDesc(node))
            return;
        var AlertDesc = (0,dom_utils.createElem)('div');
        var content = this._getDesc(node);
        AlertDesc.className = prefix.default.alert + "-desc";
        (0,dom_utils.setHtml)(AlertDesc, content);
        node.classList.add(prefix.default.alert + "-with-desc");
        node.appendChild(AlertDesc);
    };
    Alert.prototype._setCloseBtn = function (node) {
        if (!this._isClosable(node))
            return;
        var AlertCloseBtn = (0,dom_utils.createElem)('a');
        var closeText = this._setCloseText(node);
        AlertCloseBtn.className = prefix.default.alert + "-close";
        var text = closeText ? closeText : '<i class="rab-icon rab-icon-ios-close"></i>';
        (0,dom_utils.setHtml)(AlertCloseBtn, text);
        AlertCloseBtn.addEventListener('click', function () { return destroyElem(node, { fadeOut: true }); });
        node.appendChild(AlertCloseBtn);
    };
    Alert.prototype._getType = function (node) {
        return node.getAttribute('type') || 'info';
    };
    Alert.prototype._isClosable = function (node) {
        return node.getAttribute('closable') === 'true';
    };
    Alert.prototype._isShowIcon = function (node) {
        return node.getAttribute('show-icon') === 'true';
    };
    Alert.prototype._getMsg = function (node) {
        return node.getAttribute('message') || '';
    };
    Alert.prototype._getDesc = function (node) {
        return node.getAttribute('desc') || '';
    };
    return Alert;
}());
/* harmony default export */ var alert_alert = (Alert);

;// CONCATENATED MODULE: ./src/components/alert/index.ts

/* harmony default export */ var components_alert = (alert_alert);

;// CONCATENATED MODULE: ./src/components/avatar/avatar.ts



var Avatar = /** @class */ (function () {
    function Avatar() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-avatar', { all: true });
        this._create(this.components);
    }
    Avatar.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setIcon(node);
            _this._setImage(node);
            _this._setSize(node);
            _this._setCustomContent(node);
            (0,dom_utils.removeAttrs)(node, ['icon', 'src', 'custom-icon']);
        });
    };
    Avatar.prototype._setIcon = function (node) {
        var hasIcon = this._getIcon(node);
        var customIcon = this._getCustmIcon(node);
        if (!hasIcon)
            return;
        if (hasIcon || customIcon) {
            (0,dom_utils.setHtml)(node, '');
            node.classList.add(prefix.default.avatar + "-icon");
        }
        if (customIcon) {
            (0,dom_utils.setHtml)(node, customIcon);
        }
        else {
            var AvatarIcon = (0,dom_utils.createElem)('i');
            AvatarIcon.className = "rab-icon rab-icon-" + hasIcon;
            node.appendChild(AvatarIcon);
        }
    };
    Avatar.prototype._setImage = function (node) {
        var hasSrc = this._getSrc(node);
        if (!hasSrc)
            return;
        var AvatarImage = (0,dom_utils.createElem)('img');
        // @ts-ignore
        AvatarImage.src = hasSrc;
        (0,dom_utils.setHtml)(node, '');
        node.classList.add(prefix.default.avatar + "-image");
        node.appendChild(AvatarImage);
    };
    // 自定义头像内容
    Avatar.prototype._setCustomContent = function (node) {
        if (node.getAttribute('rb-icon') || node.getAttribute('rb-src'))
            return;
        if ((0,dom_utils.setHtml)(node)) {
            var AvatarStrBox = (0,dom_utils.createElem)('span');
            AvatarStrBox.className = prefix.default.avatar + "-string";
            (0,dom_utils.setHtml)(AvatarStrBox, node.innerHTML);
            (0,dom_utils.setHtml)(node, '');
            node.appendChild(AvatarStrBox);
            this._setScale(node, AvatarStrBox);
        }
    };
    // 使文本容器大写适应头像容器并且不超出范围
    Avatar.prototype._setScale = function (node, children) {
        var avatarWidth = node.getBoundingClientRect().width;
        var childrenWidth = children.offsetWidth;
        if (avatarWidth - 8 < childrenWidth) {
            var newScale = "scale(" + (avatarWidth - 8) / childrenWidth + ") translateX(-50%)";
            (0,dom_utils.setCss)(children, 'transform', "scale(" + newScale + ") translateX(-50%)");
        }
        else {
            (0,dom_utils.setCss)(children, 'transform', 'scale(1) translateX(-50%)');
        }
    };
    // 设置头像尺寸
    Avatar.prototype._setSize = function (node) {
        var size = this._getSize(node);
        if (!size)
            return;
        (0,dom_utils.setCss)(node, 'width', size + "px");
        (0,dom_utils.setCss)(node, 'height', size + "px");
        (0,dom_utils.setCss)(node, 'lineHeight', size + "px");
        // 如果设置的尺寸超过40，且在有图标的情况下将其字体大写设为头像尺寸的一半
        if (size >= 40) {
            if (node.querySelector('.rab-icon')) {
                var newFontSize = Math.floor(size / 2) + "px";
                (0,dom_utils.setCss)(node, 'fontSize', newFontSize);
            }
        }
    };
    Avatar.prototype._getIcon = function (node) {
        return node.getAttribute('rb-icon') || '';
    };
    Avatar.prototype._getCustmIcon = function (node) {
        return node.getAttribute('rb-custom-icon') || '';
    };
    Avatar.prototype._getSrc = function (node) {
        return node.getAttribute('rb-src') || '';
    };
    Avatar.prototype._getSize = function (node) {
        var size = node.getAttribute('rb-size') || '';
        // 不获取这两个
        if (size === 'large' || size === 'small')
            return;
        // 尺寸设置为数值，则将字符串数值转换为数字
        var toNum = Number(size);
        if (toNum)
            return toNum;
        // 打印错误不包括设置了数值为0
        else if (toNum !== 0) {
            warn("You have set an invalid size value for the Avatar component --> \"" + size + "\"");
        }
    };
    return Avatar;
}());
/* harmony default export */ var avatar = (Avatar);

;// CONCATENATED MODULE: ./src/components/avatar/index.ts

/* harmony default export */ var components_avatar = (avatar);

;// CONCATENATED MODULE: ./src/components/back-top/back-top.ts


var BackTop = /** @class */ (function () {
    function BackTop() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-back-top', { all: true });
        this._create(this.components);
    }
    BackTop.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), right = _a.right, bottom = _a.bottom, height = _a.height, duration = _a.duration;
            _this._setRight(node, right);
            _this._setBottom(node, bottom);
            _this._setAppearance(node);
            _this._handleScroll(node, height);
            _this._handleClick(node, duration);
            (0,dom_utils.removeAttrs)(node, ['right', 'bottom', 'height', 'duration']);
        });
    };
    BackTop.prototype._setRight = function (node, right) {
        (0,dom_utils.setCss)(node, 'right', right + "px");
    };
    BackTop.prototype._setBottom = function (node, bottom) {
        (0,dom_utils.setCss)(node, 'bottom', bottom + "px");
    };
    BackTop.prototype._setAppearance = function (node) {
        if ((0,dom_utils.setHtml)(node) && (0,dom_utils.setHtml)(node) !== ' ') {
            (0,dom_utils.setHtml)(node, node.innerHTML);
        }
        else {
            var template = "<div class=\"" + prefix.default.backtop + "-inner\">\n                                  <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-up\"></i>\n                              </div>";
            (0,dom_utils.setHtml)(node, template);
        }
    };
    BackTop.prototype._handleScroll = function (node, height) {
        var visable = function (y) {
            var scrollY = Math.floor(y);
            var visibilityHeight = Math.floor(height);
            // 判断页面是否滚动到指定显示的高度
            scrollY >= visibilityHeight
                ? (0,dom_utils.setCss)(node, 'display', 'block')
                : (0,dom_utils.setCss)(node, 'display', '');
        };
        (0,dom_utils.bind)(window, 'scroll', function () {
            visable(window.scrollY);
        });
    };
    BackTop.prototype._handleClick = function (node, duration) {
        var _this = this;
        (0,dom_utils.bind)(node, 'click', function () {
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            _this._scrollTop(window, sTop, 0, duration);
        });
    };
    BackTop.prototype._scrollTop = function (el, from, to, duration) {
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame =
                window.webkitRequestAnimationFrame ||
                    // @ts-ignore
                    window.mozRequestAnimationFrame ||
                    // @ts-ignore
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        return window.setTimeout(callback, 1000 / 60);
                    };
        }
        var difference = Math.abs(from - to);
        var step = Math.ceil((difference / duration) * 25);
        var scroll = function (start, end, step) {
            var d = start + step > end ? end : start + step;
            if (start <= end && d == 0)
                return;
            d = start - step < end ? end : start - step;
            el === window ? window.scrollTo(d, d) : (el.scrollTop = d);
            window.requestAnimationFrame(function () { return scroll(d, end, step); });
        };
        scroll(from, to, step);
    };
    BackTop.prototype._attrs = function (node) {
        return {
            right: (0,dom_utils.getNumTypeAttr)(node, 'right', 30),
            bottom: (0,dom_utils.getNumTypeAttr)(node, 'bottom', 30),
            height: (0,dom_utils.getNumTypeAttr)(node, 'height', 400),
            duration: (0,dom_utils.getNumTypeAttr)(node, 'duration', 500)
        };
    };
    return BackTop;
}());
/* harmony default export */ var back_top = (BackTop);

;// CONCATENATED MODULE: ./src/components/back-top/index.ts

/* harmony default export */ var components_back_top = (back_top);

;// CONCATENATED MODULE: ./src/components/badge/badge.ts




var Badge = /** @class */ (function () {
    function Badge() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-badge', { all: true });
        this._create(this.components);
    }
    Badge.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'badge');
        var countContainer = target.querySelector("." + prefix.default.badge + "-count");
        var dotContainer = target.querySelector("." + prefix.default.badge + "-dot");
        var _a = Badge.prototype, _getMaxCount = _a._getMaxCount, _showZero = _a._showZero, _setMaxCount = _a._setMaxCount;
        var maxCount = _getMaxCount(target);
        var showZero = _showZero(target);
        return {
            get count() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set count(newVal) {
                if (countContainer && isNum(newVal)) {
                    if (newVal > maxCount) {
                        _setMaxCount(countContainer, maxCount);
                    }
                    else {
                        (0,dom_utils.setText)(countContainer, "" + newVal);
                        if (newVal <= 0 && !showZero) {
                            (0,dom_utils.setCss)(countContainer, 'display', 'none');
                        }
                        else {
                            (0,dom_utils.setCss)(countContainer, 'display', '');
                        }
                    }
                }
                else {
                    warn("The count value of this badge cannot be set --> \"" + el + "\"");
                }
            },
            get text() {
                return countContainer === null || countContainer === void 0 ? void 0 : countContainer.textContent;
            },
            set text(newVal) {
                if (!isStr(newVal)) {
                    warn("The text value of this badge cannot be set --> \"" + el + "\"");
                    return;
                }
                (0,dom_utils.setText)(countContainer, newVal);
            },
            get dot() {
                return dotContainer;
            },
            set dot(newVal) {
                if (!dotContainer) {
                    warn("Unable to set this badge to dot --> \"" + el + "\"");
                    return;
                }
                if (isBol(newVal) && newVal) {
                    (0,dom_utils.setCss)(dotContainer, 'display', '');
                }
                else {
                    (0,dom_utils.setCss)(dotContainer, 'display', 'none');
                }
            }
        };
    };
    Badge.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setCount(node);
            _this._setStatusWithColor(node);
            (0,dom_utils.removeAttrs)(node, [
                'count',
                'text',
                'status',
                'color',
                'show-zero',
                'max-count',
                'dot'
            ]);
        });
    };
    Badge.prototype._setCount = function (node) {
        var count = this._getCount(node);
        var maxCount = this._getMaxCount(node);
        var BadgeCount = (0,dom_utils.createElem)('sup');
        BadgeCount.className = prefix.default.badge + "-count";
        if (count || count === 0) {
            // 显示的数字大于maxCount时，显示${maxCount}+
            if (count > maxCount) {
                this._setMaxCount(BadgeCount, maxCount);
            }
            else {
                // 数字为 0 时隐藏或者展示 Badge
                if (count <= 0 && !this._showZero(node)) {
                    (0,dom_utils.setCss)(BadgeCount, 'display', 'none');
                }
                else {
                    (0,dom_utils.setText)(BadgeCount, "" + count);
                }
            }
            this._setDot(node, BadgeCount);
        }
        if (!this._getStatus(node) && !this._getColor(node)) {
            node.appendChild(BadgeCount);
            // 状态点外观不需要设置为独立展示
            this._setAlone(BadgeCount);
        }
        this._setText(node, BadgeCount);
        this._setOffset(node, BadgeCount);
    };
    Badge.prototype._setMaxCount = function (node, maxCount) {
        (0,dom_utils.setText)(node, maxCount + "+");
    };
    Badge.prototype._setDot = function (node, children) {
        if (!this._showDot(node))
            return;
        // 设置为小红点则不显示任何计数内容
        (0,dom_utils.setHtml)(children, '');
        (0,dom_utils.setCss)(children, 'display', '');
        children.className = prefix.default.badge + "-dot";
    };
    Badge.prototype._setText = function (parent, children) {
        // 区分与标签属性 status 或 color 配合的 text 属性
        if (!this._getStatus(parent) && !this._getColor(parent)) {
            var text = this._getText(parent);
            if (text) {
                (0,dom_utils.setCss)(children, 'display', '');
                (0,dom_utils.setText)(children, text);
            }
        }
    };
    Badge.prototype._setAlone = function (children) {
        if (!children.previousElementSibling) {
            children.classList.add(prefix.default.badge + "-count-alone");
        }
    };
    Badge.prototype._setOffset = function (parent, children) {
        var offset = this._getOffset(parent);
        (0,dom_utils.setCss)(children, 'marginTop', (offset === null || offset === void 0 ? void 0 : offset.x) + "px");
        (0,dom_utils.setCss)(children, 'marginRight', (offset === null || offset === void 0 ? void 0 : offset.y) + "px");
    };
    Badge.prototype._setStatusWithColor = function (node) {
        var status = this._getStatus(node);
        var color = this._getColor(node);
        var text = this._getText(node);
        if (!status && !color)
            return;
        var BadgeStatusDot = (0,dom_utils.createElem)('span');
        var BadgeStatusText = (0,dom_utils.createElem)('span');
        if ((text && status) || (text && color))
            (0,dom_utils.setText)(BadgeStatusText, text);
        var statusCls;
        var colorCls = '';
        status ? (statusCls = prefix.default.badge + "-status-" + status) : (statusCls = '');
        // 设置更多预设的状态点颜色，或者自定义颜色
        if (color === 'blue' ||
            color === 'green' ||
            color === 'red' ||
            color === 'yellow' ||
            color === 'magenta' ||
            color === 'volcano' ||
            color === 'orange' ||
            color === 'gold' ||
            color === 'lime' ||
            color === 'cyan' ||
            color === 'geekblue' ||
            color === 'purple') {
            colorCls = prefix.default.badge + "-status-" + color;
        }
        else {
            (0,dom_utils.setCss)(BadgeStatusDot, 'backgroundColor', color);
        }
        BadgeStatusDot.className = prefix.default.badge + "-status-dot " + statusCls + " " + colorCls;
        BadgeStatusText.className = prefix.default.badge + "-status-text";
        node.append(BadgeStatusDot, BadgeStatusText);
    };
    Badge.prototype._getCount = function (node) {
        return Number(node.getAttribute('count'));
    };
    Badge.prototype._getMaxCount = function (node) {
        return Number(node.getAttribute('max-count')) || 99;
    };
    Badge.prototype._getOffset = function (node) {
        // 转为真实数组，如果赋值是 offset = ['0','1'] 这样的则会报错
        var offset = JSON.parse(node.getAttribute('offset') || '[]');
        // 如果是数组，那么不论写了多少个值都只返回前两个
        if (isArr(offset) && offset.length > 0) {
            return {
                x: offset[0],
                y: offset[1]
            };
        }
    };
    Badge.prototype._getStatus = function (node) {
        return node.getAttribute('status') || '';
    };
    Badge.prototype._getColor = function (node) {
        return node.getAttribute('color') || '';
    };
    Badge.prototype._getText = function (node) {
        return node.getAttribute('text') || '';
    };
    Badge.prototype._showZero = function (node) {
        return node.getAttribute('show-zero') === 'true';
    };
    Badge.prototype._showDot = function (node) {
        return node.getAttribute('dot') === 'true';
    };
    return Badge;
}());
/* harmony default export */ var badge = (Badge);

;// CONCATENATED MODULE: ./src/components/badge/index.ts

/* harmony default export */ var components_badge = (badge);

;// CONCATENATED MODULE: ./src/components/button/button.ts



var Button = /** @class */ (function () {
    function Button() {
        this.VERSION = '1.0.2';
        this.components = (0,dom_utils.$el)("." + prefix.default.button, { all: true });
        this._getAllBtns(this.components);
    }
    Button.prototype.config = function (el) {
        var target = typeof el === 'string' ? (0,dom_utils.$el)(el) : el;
        validComps(target, 'button');
        return {
            get loading() {
                return false;
            },
            set loading(newVal) {
                if (!isBol(newVal))
                    return;
                var loadingIcon = target.querySelector("." + prefix.default.icon + "-loading-solid");
                // v1.0.1 修复加载中图标重复追加
                if (newVal) {
                    if (!loadingIcon) {
                        target.classList.add(prefix.default.button + "-loading");
                        target.prepend(Button.prototype._loadIcon());
                    }
                }
                else {
                    target.classList.remove(prefix.default.button + "-loading");
                    loadingIcon ? loadingIcon.remove() : '';
                }
            }
        };
    };
    Button.prototype._getAllBtns = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setLoading(node);
            _this._setIcon(node);
            (0,dom_utils.removeAttrs)(node, ['icon', 'loading']);
        });
    };
    Button.prototype._setLoading = function (node) {
        if (this._isLoading(node)) {
            if (node.innerHTML === '')
                node.classList.add(prefix.default.button + "-icon-only");
            node.classList.add(prefix.default.button + "-loading");
            node.prepend(this._loadIcon());
        }
    };
    Button.prototype._setIcon = function (node) {
        if (!this._getIcon(node))
            return;
        if (node.innerHTML === '') {
            var btnIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + this._getIcon(node) + "\"></i>";
            node.classList.add(prefix.default.button + "-icon-only");
            (0,dom_utils.setHtml)(node, btnIcon);
        }
        else {
            var Icon = (0,dom_utils.createElem)('i');
            Icon.className = prefix.default.icon + " " + prefix.default.icon + "-" + this._getIcon(node);
            node.prepend(Icon);
        }
    };
    Button.prototype._isLoading = function (node) {
        return node.getAttribute('loading') === 'true';
    };
    Button.prototype._loadIcon = function () {
        var LoadIcon = (0,dom_utils.createElem)('i');
        LoadIcon.className = "rab-load-loop " + prefix.default.icon + " " + prefix.default.icon + "-loading-solid";
        // v1.0.2 取消样式高度，否则加载中图标会和文字不在同一水平线上
        // setCss(LoadIcon, 'height', '25px');
        return LoadIcon;
    };
    Button.prototype._getIcon = function (node) {
        return node.getAttribute('icon') || '';
    };
    return Button;
}());
/* harmony default export */ var button_button = (Button);

;// CONCATENATED MODULE: ./src/components/button/index.ts

/* harmony default export */ var components_button = (button_button);

;// CONCATENATED MODULE: ./src/components/card/card.ts



var Card = /** @class */ (function () {
    function Card() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-card', { all: true });
        this._create(this.components);
    }
    Card.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'card');
        var CardTitle = target.querySelector("." + prefix.default.card + "-head");
        var CardExtra = target.querySelector("." + prefix.default.card + "-extra");
        return {
            get title() {
                return (0,dom_utils.setHtml)(CardTitle);
            },
            set title(newVal) {
                if (isStr(newVal))
                    (0,dom_utils.setHtml)(CardTitle, newVal);
            },
            get extra() {
                return (0,dom_utils.setHtml)(CardExtra);
            },
            set extra(newVal) {
                if (isStr(newVal))
                    (0,dom_utils.setHtml)(CardExtra, newVal);
            }
        };
    };
    Card.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createCardNodes(node);
            (0,dom_utils.removeAttrs)(node, ['title', 'extra', 'shadow']);
        });
    };
    Card.prototype._createCardNodes = function (node) {
        var CardHead = (0,dom_utils.createElem)('div');
        var CardExtra = (0,dom_utils.createElem)('div');
        var CardBody = (0,dom_utils.createElem)('div');
        this._setCls(CardHead, CardExtra, CardBody);
        this._setContent(node, CardBody);
        this._setTitle(node, CardHead);
        this._setExtra(node, CardExtra);
        this._setShadow(node);
    };
    Card.prototype._setCls = function (node1, node2, node3) {
        node1.className = prefix.default.card + "-head";
        node2.className = prefix.default.card + "-extra";
        node3.className = prefix.default.card + "-body";
    };
    Card.prototype._setTitle = function (parent, children) {
        var title = this._attrs(parent).title;
        if (!title)
            return;
        (0,dom_utils.setHtml)(children, title);
        // 这里如果用 appendChild 会把头部节点放到内容节点后面
        parent.prepend(children);
    };
    Card.prototype._setContent = function (parent, children) {
        var contentNode = Array.from(parent.children);
        contentNode.forEach(function (node) {
            children.appendChild(node);
        });
        parent.appendChild(children);
    };
    Card.prototype._setExtra = function (parent, children) {
        var extra = this._attrs(parent).extra;
        if (!extra)
            return;
        (0,dom_utils.setHtml)(children, extra);
        parent.appendChild(children);
    };
    Card.prototype._setShadow = function (node) {
        var shadow = this._attrs(node).shadow;
        if (shadow) {
            node.classList.add(prefix.default.card + "-shadow");
        }
    };
    Card.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            extra: (0,dom_utils.getStrTypeAttr)(node, 'extra', ''),
            shadow: (0,dom_utils.getBooleanTypeAttr)(node, 'shadow')
        };
    };
    return Card;
}());
/* harmony default export */ var card = (Card);

;// CONCATENATED MODULE: ./src/components/card/index.ts

/* harmony default export */ var components_card = (card);

// EXTERNAL MODULE: ./src/dom-utils/elem.ts
var elem = __webpack_require__("./src/dom-utils/elem.ts");
;// CONCATENATED MODULE: ./src/components/collapse/collapse.ts




var Collapse = /** @class */ (function () {
    function Collapse() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-collapse', { all: true });
        this._create(this.components);
    }
    Collapse.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'collapse');
        var _a = Collapse.prototype, _attrs = _a._attrs, _dataSetActiveKey = _a._dataSetActiveKey, _openByKey = _a._openByKey;
        var activeKey = JSON.parse(target.dataset.activeKey);
        return {
            get activeKey() {
                return activeKey;
            },
            set activeKey(newVal) {
                if (newVal == activeKey)
                    return;
                _dataSetActiveKey(target, newVal);
                _openByKey(target, newVal, target.getAttribute('accordion'));
            },
            events: function (_a) {
                var onChange = _a.onChange;
                var panels = target.querySelectorAll('r-collapse-panel');
                // 储存已展开面板的 key
                var key = [];
                var pushKey = function (el, toggle) {
                    var accordion = _attrs(target).accordion;
                    // @ts-ignore
                    var panelKey = el.dataset.panelKey;
                    if (el.classList.contains(prefix.default.collapse + "-item-active")) {
                        key.push(panelKey);
                    }
                    else if (toggle) {
                        var idx = key.indexOf(panelKey);
                        idx > -1 ? key.splice(idx, 1) : '';
                    }
                    // 手风琴模式下每展开一个面板就删除其他的 key
                    if (accordion) {
                        (0,dom_utils.siblings)(el).forEach(function (o) {
                            var otherIdx = key.indexOf(o.dataset.panelKey);
                            otherIdx > -1 ? key.splice(otherIdx, 1) : '';
                        });
                    }
                };
                panels.forEach(function (panel) {
                    var header = panel.querySelector("." + prefix.default.collapse + "-header");
                    // 存放初始化面板时默认已展开的 key
                    pushKey(panel, false);
                    (0,dom_utils.bind)(header, 'click', function () {
                        // 这里用定时器是为了跟移除显示面板样式类名的时机同步
                        setTimeout(function () {
                            pushKey(panel, true);
                            onChange && isFn(onChange, key);
                        }, 150);
                    });
                });
            }
        };
    };
    Collapse.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), simple = _a.simple, ghost = _a.ghost, defaultactivekey = _a.defaultactivekey, accordion = _a.accordion;
            _this._dataSetActiveKey(node, defaultactivekey);
            _this._setGhost(node, ghost);
            _this._setSimple(node, simple);
            _this._createChildNodes(node);
            _this._openByKey(node, defaultactivekey, accordion);
            (0,dom_utils.removeAttrs)(node, ['simple', 'ghost', 'defaultactivekey']);
        });
    };
    Collapse.prototype._dataSetActiveKey = function (node, activeKey) {
        if (activeKey) {
            // @ts-ignore
            node.dataset['activeKey'] = Array.isArray(activeKey) ? "[" + activeKey + "]" : activeKey;
        }
    };
    Collapse.prototype._setGhost = function (node, ghost) {
        ghost ? node.classList.add(prefix.default.collapse + "-ghost") : '';
    };
    Collapse.prototype._setSimple = function (node, simple) {
        simple ? node.classList.add(prefix.default.collapse + "-simple") : '';
    };
    Collapse.prototype._createChildNodes = function (node) {
        var collapsePanels = node.querySelectorAll('r-collapse-panel');
        this._setPanel(node, collapsePanels);
    };
    Collapse.prototype._setPanel = function (parent, panels) {
        var _this = this;
        // 遍历所有面板节点
        panels.forEach(function (panel, index) {
            var _a = _this._attrs(panel), key = _a.key, title = _a.title, hideArrow = _a.hideArrow;
            // @ts-ignore
            // 面板的 key 如果没填则默认为索引值
            panel.dataset.panelKey = !key ? index : key;
            // 保存面板原先的第一个节点，也就是要填充的内容
            var content = panel.firstElementChild;
            var arrowIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-arrow-forward\"></i>";
            var template = "\n                 <div class=\"" + prefix.default.collapse + "-header\">\n                    " + (!hideArrow ? arrowIcon : '') + " " + title + "\n                 </div>\n                 <div class=\"" + prefix.default.collapse + "-content\">\n                    <div class=\"" + prefix.default.collapse + "-content-box\"></div>\n                 </div>";
            // 清空面板原先的所有内容
            (0,elem.setHtml)(panel, '');
            // 追加html模板
            (0,elem.setHtml)(panel, template);
            // 将原先的占位内容填充至面板内容盒子
            var panelContentBox = panel.querySelector("." + prefix.default.collapse + "-content-box");
            content ? panelContentBox === null || panelContentBox === void 0 ? void 0 : panelContentBox.appendChild(content) : null;
            (0,elem.setCss)(panel, 'display', 'block');
            _this._handleToggle(parent, panel);
            (0,dom_utils.removeAttrs)(panel, ['key', 'title', 'hide-arrow']);
        });
    };
    Collapse.prototype._handleToggle = function (parent, panel) {
        var _this = this;
        var accordion = this._attrs(parent).accordion;
        var collapseHeader = panel.querySelector("." + prefix.default.collapse + "-header");
        var collapseContent = panel.querySelector("." + prefix.default.collapse + "-content");
        (0,dom_utils.bind)(collapseHeader, 'click', function () { return _this._slide(panel, collapseContent, accordion); });
    };
    Collapse.prototype._slide = function (p, c, accordion) {
        var activeCls = prefix.default.collapse + "-item-active";
        var slideUp = function (arg1, arg2) {
            dom_utils.slider.slideUp(arg2, 150);
            setTimeout(function () {
                arg1.classList.remove(activeCls);
            }, 150);
        };
        if (p.classList.contains(activeCls)) {
            slideUp(p, c);
        }
        else {
            dom_utils.slider.slideDown(c, 150);
            p.classList.add(activeCls);
        }
        // 手风琴模式
        if (accordion) {
            // 获取除了已展开的面板外的所有其他面板
            (0,dom_utils.siblings)(p).forEach(function (otherP) {
                var otherC = otherP.querySelector("." + prefix.default.collapse + "-content");
                slideUp(otherP, otherC);
            });
        }
    };
    Collapse.prototype._openByKey = function (node, key, accordion) {
        // 获取选中的 key 的面板
        var selected;
        var open = function () {
            if (selected) {
                selected.classList.add(prefix.default.collapse + "-item-active");
                if (accordion) {
                    (0,dom_utils.siblings)(selected).forEach(function (o) {
                        o.classList.remove(prefix.default.collapse + "-item-active");
                    });
                }
            }
        };
        // 如果 activeKey 是数组则对其进行遍历获取所有面板
        // 且如果是手风琴模式则只选取数组的第一项，只展开一个面板
        if (Array.isArray(key)) {
            var length_1 = key.length;
            // length == 1 说明数组只有一项所以不必对其进行遍历
            if (accordion || length_1 == 1) {
                selected = node.querySelector("[data-panel-key=\"" + key[0] + "\"]");
                open();
            }
            else {
                var i = 0;
                for (; i < length_1; i++) {
                    selected = node.querySelector("[data-panel-key=\"" + key[i] + "\"]");
                    open();
                }
            }
        }
        else {
            selected = node.querySelector("[data-panel-key=\"" + key + "\"]");
            open();
        }
    };
    Collapse.prototype._attrs = function (node) {
        return {
            key: (0,elem.getStrTypeAttr)(node, 'key', ''),
            title: (0,elem.getStrTypeAttr)(node, 'title', ''),
            ghost: (0,elem.getBooleanTypeAttr)(node, 'ghost'),
            simple: (0,elem.getBooleanTypeAttr)(node, 'simple'),
            hideArrow: (0,elem.getBooleanTypeAttr)(node, 'hide-arrow'),
            accordion: (0,elem.getBooleanTypeAttr)(node, 'accordion'),
            defaultactivekey: (0,elem.getStrTypeAttr)(node, 'defaultactivekey', '') &&
                (0,elem.getArrTypeAttr)(node, 'defaultactivekey')
        };
    };
    return Collapse;
}());
/* harmony default export */ var collapse = (Collapse);

;// CONCATENATED MODULE: ./src/components/collapse/index.ts

/* harmony default export */ var components_collapse = (collapse);

;// CONCATENATED MODULE: ./src/components/divider/divider.ts


var Divider = /** @class */ (function () {
    function Divider() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-divider', { all: true });
        this._create(this.components);
    }
    Divider.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setType(node);
            _this._setDashed(node);
            _this._setPlain(node);
            _this._setTitle(node);
            (0,dom_utils.removeAttrs)(node, ['dashed', 'plain', 'orientation']);
        });
    };
    Divider.prototype._setType = function (node) {
        var type = this._attrs(node).type;
        node.setAttribute('type', "" + type);
    };
    Divider.prototype._setDashed = function (node) {
        var dashed = this._attrs(node).dashed;
        if (dashed) {
            node.classList.add(prefix.default.divider + "-dashed");
        }
    };
    Divider.prototype._setPlain = function (node) {
        var plain = this._attrs(node).plain;
        if (plain) {
            node.classList.add(prefix.default.divider + "-plain");
        }
    };
    Divider.prototype._setOrientation = function (node) {
        var orientation = this._attrs(node).orientation;
        node.classList.add(prefix.default.divider + "-with-text-" + orientation);
    };
    Divider.prototype._setTitle = function (node) {
        if (node.innerHTML == '' || node.innerHTML == ' ')
            return;
        this._setOrientation(node);
        var DividerText = (0,dom_utils.createElem)('span');
        DividerText.className = prefix.default.divider + "-inner-text";
        DividerText.innerHTML = node.innerHTML;
        node.classList.add(prefix.default.divider + "-with-text");
        node.innerHTML = '';
        node.appendChild(DividerText);
    };
    Divider.prototype._attrs = function (node) {
        return {
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', 'horizontal'),
            orientation: (0,dom_utils.getStrTypeAttr)(node, 'orientation', 'center'),
            dashed: (0,dom_utils.getBooleanTypeAttr)(node, 'dashed'),
            plain: (0,dom_utils.getBooleanTypeAttr)(node, 'plain')
        };
    };
    return Divider;
}());
/* harmony default export */ var divider = (Divider);

;// CONCATENATED MODULE: ./src/components/divider/index.ts

/* harmony default export */ var components_divider = (divider);

;// CONCATENATED MODULE: ./src/components/drawer/drawer.ts




var Drawer = /** @class */ (function () {
    function Drawer() {
        this.VERSION = 'v1.0.1';
        this.components = (0,dom_utils.$el)('r-drawer', { all: true });
        this._create(this.components);
    }
    Drawer.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'drawer');
        var _a = Drawer.prototype, _handleVisable = _a._handleVisable, _attrs = _a._attrs;
        var DrawerMask = target.querySelector("." + prefix.default.drawer + "-mask");
        var DrawerWrap = target.querySelector("." + prefix.default.drawer + "-wrap");
        var _Drawer = target.querySelector("." + prefix.default.drawer);
        var DrawerTitle = target.querySelector("." + prefix.default.drawer + "-header-inner");
        var DrawerClose = target.querySelector("." + prefix.default.drawer + "-close");
        return {
            get title() {
                return (0,dom_utils.setHtml)(DrawerTitle);
            },
            set title(newVal) {
                if (!isStr(newVal))
                    return;
                (0,dom_utils.setHtml)(DrawerTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (!isBol(newVal))
                    return;
                _handleVisable(newVal, target, [DrawerMask, DrawerWrap, _Drawer]);
            },
            events: function (_a) {
                var onClose = _a.onClose;
                // v1.0.1 改用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (DrawerClose)
                    DrawerClose.onclick = function () { return onClose && isFn(onClose); };
                if (_attrs(target).maskClosable === 'true')
                    DrawerWrap.onclick = function () { return onClose && isFn(onClose); };
            }
        };
    };
    Drawer.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createDrawerNodes(node);
            (0,dom_utils.setCss)(node, 'display', 'block');
            (0,dom_utils.removeAttrs)(node, [
                'title',
                'width',
                'height',
                'mask',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll'
            ]);
        });
    };
    Drawer.prototype._createDrawerNodes = function (node) {
        var DrawerMask = (0,dom_utils.createElem)('div');
        var DrawerWrap = (0,dom_utils.createElem)('div');
        var Drawer = (0,dom_utils.createElem)('div');
        var DrawerContent = (0,dom_utils.createElem)('div');
        var DrawerClose = (0,dom_utils.createElem)('a');
        var DrawerHeader = (0,dom_utils.createElem)('div');
        var DrawerHeaderInner = (0,dom_utils.createElem)('div');
        var DrawerBody = (0,dom_utils.createElem)('div');
        this._setCls([
            DrawerMask,
            DrawerWrap,
            Drawer,
            DrawerContent,
            DrawerClose,
            DrawerHeader,
            DrawerHeaderInner,
            DrawerBody
        ]);
        this._setSize(node, Drawer);
        this._setPlacement(node, Drawer);
        this._setOpenInContainer(node, DrawerMask, DrawerWrap, Drawer);
        this._initVisible(node, DrawerMask, DrawerWrap, Drawer);
        this._handleClose(node, [DrawerMask, DrawerWrap, Drawer], DrawerClose);
        DrawerWrap.appendChild(Drawer);
        Drawer.appendChild(DrawerContent);
        this._setClosable(node, DrawerContent, DrawerClose);
        this._setHeader(node, DrawerContent, DrawerHeader, DrawerHeaderInner);
        DrawerContent.appendChild(DrawerBody);
        this._setBodyContent(node, DrawerBody);
        this._setMask(node, DrawerMask, DrawerWrap, DrawerContent);
        node.appendChild(DrawerWrap);
    };
    Drawer.prototype._setCls = function (elms) {
        var elmsCls = [
            prefix.default.drawer + "-mask",
            prefix.default.drawer + "-wrap",
            "" + prefix.default.drawer,
            prefix.default.drawer + "-content",
            prefix.default.drawer + "-close",
            prefix.default.drawer + "-header",
            prefix.default.drawer + "-header-inner",
            prefix.default.drawer + "-body"
        ];
        var i = 0;
        var length = elms.length;
        for (; i < length; i++) {
            var elm = elms[i];
            elm.className = elmsCls[i];
        }
    };
    Drawer.prototype._setSize = function (parent, children) {
        var _a = this._attrs(parent), width = _a.width, height = _a.height, placement = _a.placement;
        if (placement === 'top' || placement === 'bottom') {
            (0,dom_utils.setCss)(children, 'height', height);
        }
        else if (placement === 'left' || placement === 'right') {
            children.style.width = width;
            (0,dom_utils.setCss)(children, 'width', width);
        }
    };
    Drawer.prototype._setPlacement = function (parent, children) {
        var placement = this._attrs(parent).placement;
        children.classList.add(prefix.default.drawer + "-" + placement);
    };
    Drawer.prototype._setOpenInContainer = function (parent, drawerMask, drawerWrap, drawer) {
        var inner = this._attrs(parent).inner;
        if (!inner)
            return;
        drawerMask.classList.add(prefix.default.drawer + "-mask-inner");
        drawerWrap.classList.add(prefix.default.drawer + "-wrap-inner");
        drawer.classList.add(prefix.default.drawer + "-inner");
    };
    Drawer.prototype._setMask = function (parent, drawerMask, drawerWrap, drawerContent) {
        var mask = this._attrs(parent).mask;
        if (parent.getAttribute('mask') == null)
            mask = true;
        if (!mask) {
            drawerWrap.classList.add(prefix.default.drawer + "-no-mask");
            drawerContent.classList.add(prefix.default.drawer + "-content-no-mask");
            return;
        }
        parent.appendChild(drawerMask);
    };
    Drawer.prototype._setClosable = function (parent, children, drawerClose) {
        var closable = this._attrs(parent).closable;
        if (!closable)
            return;
        (0,dom_utils.setHtml)(drawerClose, "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>");
        children.appendChild(drawerClose);
    };
    Drawer.prototype._setHeader = function (parent, drawerContent, drawerHeader, drawerTitle) {
        var _a;
        var title = this._attrs(parent).title;
        if (!title) {
            (_a = drawerContent.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(prefix.default.drawer + "-no-header");
            return;
        }
        (0,dom_utils.setHtml)(drawerTitle, title);
        drawerHeader.appendChild(drawerTitle);
        drawerContent.appendChild(drawerHeader);
    };
    Drawer.prototype._setBodyContent = function (parent, children) {
        var drawerBodycontent = parent.firstElementChild;
        if (drawerBodycontent)
            children.appendChild(drawerBodycontent);
    };
    Drawer.prototype._initVisible = function (parent, drawerMask, drawerWrap, drawer) {
        var visible = this._attrs(parent).visible;
        // @ts-ignore
        parent.dataset.drawerVisable = "" + visible;
        if (visible)
            return;
        drawerWrap.classList.add(prefix.default.drawer + "-hidden");
        (0,dom_utils.setCss)(drawerMask, 'display', 'none');
        (0,dom_utils.setCss)(drawer, 'display', 'none');
    };
    Drawer.prototype._handleVisable = function (visable, target, children) {
        var _a = Drawer.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Drawer.prototype._handleClose = function (parent, hiddenElm, triggerElm) {
        var _hide = Drawer.prototype._hide;
        // triggerElm 表示右上角关闭按钮
        (0,dom_utils.bind)(triggerElm, 'click', function () { return _hide(parent, hiddenElm); });
        (0,dom_utils.bind)(hiddenElm[1], 'click', function () { return _hide(parent, hiddenElm); });
        (0,dom_utils.bind)(hiddenElm[2], 'click', function (e) { return e.stopPropagation(); });
    };
    Drawer.prototype._show = function (parent, showElm) {
        var _attrs = Drawer.prototype._attrs;
        var _a = _attrs(parent), inner = _a.inner, placement = _a.placement, scrollable = _a.scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // 设置为在当前 dom 里打开则不隐藏 body 滚动条
        if (!inner)
            scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.drawerVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示抽屉的父容器wrap
        // showElm[2] 表示抽屉主体
        showElm[1].classList.contains(prefix.default.drawer + "-hidden") &&
            showElm[1].classList.remove(prefix.default.drawer + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            rmCls: true,
            timeout: 250
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: prefix.default.drawer + "-" + placement + "-move-enter",
            rmCls: true,
            timeout: 550
        });
    };
    Drawer.prototype._hide = function (parent, hiddenElm) {
        var placement = Drawer.prototype._attrs(parent).placement;
        // @ts-ignore
        // 设置为隐藏状态
        parent.dataset.drawerVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示抽屉的父容器wrap
        // hiddenElm[2] 表示抽屉主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: prefix.default.drawer + "-" + placement + "-move-leave",
            rmCls: true,
            timeout: 490
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(prefix.default.drawer + "-hidden");
            (0,dom_utils.setCss)(hiddenElm[2], 'display', 'none');
            scrollable_scrollable({ scroll: true, lock: true, node: parent, tagName: 'drawer' });
        }, 490);
    };
    Drawer.prototype._attrs = function (node) {
        return {
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            width: (0,dom_utils.getStrTypeAttr)(node, 'width', '256px'),
            height: (0,dom_utils.getStrTypeAttr)(node, 'height', '256px'),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'right'),
            mask: (0,dom_utils.getBooleanTypeAttr)(node, 'mask'),
            inner: (0,dom_utils.getBooleanTypeAttr)(node, 'inner'),
            visible: (0,dom_utils.getBooleanTypeAttr)(node, 'visible'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable'),
            scrollable: (0,dom_utils.getBooleanTypeAttr)(node, 'scrollable'),
            lockScroll: (0,dom_utils.getBooleanTypeAttr)(node, 'lock-scroll'),
            maskClosable: (0,dom_utils.getStrTypeAttr)(node, 'mask-closable', 'true')
        };
    };
    return Drawer;
}());
/* harmony default export */ var drawer = (Drawer);

;// CONCATENATED MODULE: ./src/components/drawer/index.ts

/* harmony default export */ var components_drawer = (drawer);

;// CONCATENATED MODULE: ./src/components/dropdown/dropdown.ts




var defalutDpdDelay = 100;
var dpdShowTimer;
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-dropdown', { all: true });
        this._create(this.components);
    }
    Dropdown.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'dropdown');
        return {
            events: function (_a) {
                var onClick = _a.onClick;
                var children = target.querySelectorAll('r-dropdown-item');
                children.forEach(function (child, index) {
                    (0,dom_utils.bind)(child, 'click', function () {
                        child.getAttribute('disabled') !== ''
                            ? onClick && isFn(onClick, index)
                            : undefined;
                    });
                });
            }
        };
    };
    Dropdown.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            // 判断是否由两个子节点组成
            if (node.childElementCount > 2) {
                warn('The content of a component dropdown can only be composed of two element nodes, the first being the reference element and the second being the drop-down item');
            }
            // 将第一个子元素作为宿主元素
            var refElm = node.firstElementChild;
            // 最后一个子元素即菜单项
            var menuItem = node.lastElementChild;
            // 清空旧内容，防止获取的元素不正确
            (0,dom_utils.setHtml)(node, '');
            var DropdownRef = _this._setReferenceElm(node, refElm);
            var DropdownMenu = _this._setMenuItem(node, menuItem);
            _this._handleTrigger(node, DropdownRef, DropdownMenu);
            _this._setTransformOrigin(node, DropdownMenu);
            (0,dom_utils.removeAttrs)(node, ['trigger', 'placement']);
        });
    };
    Dropdown.prototype._setReferenceElm = function (node, refElm) {
        var DropdownRel = (0,dom_utils.createElem)('div');
        DropdownRel.className = prefix.default.dropdown + "-rel";
        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);
        return DropdownRel;
    };
    Dropdown.prototype._setMenuItem = function (node, menuItem) {
        var DropdownMenu = (0,dom_utils.createElem)('div');
        DropdownMenu.className = 'rab-select-dropdown';
        this._initVisable(DropdownMenu);
        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);
        (0,dom_utils.setCss)(menuItem, 'display', 'block');
        return DropdownMenu;
    };
    Dropdown.prototype._initVisable = function (dpdMenu) {
        (0,dom_utils.setCss)(dpdMenu, 'display', 'none');
        dpdMenu.dataset.dropdownVisable = 'false';
    };
    Dropdown.prototype._setTransformOrigin = function (parent, dpdMenu) {
        var placement = this._attrs(parent).placement;
        // 根据 placement 设置源方向。
        // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
        // left 和 right 开头的则无需设置。
        if (/^top|right-end|left-end/.test(placement)) {
            (0,dom_utils.setCss)(dpdMenu, 'transformOrigin', 'center bottom');
        }
        else if (/^bottom|right-start|left-start/.test(placement)) {
            (0,dom_utils.setCss)(dpdMenu, 'transformOrigin', 'center top');
        }
        // TODO: 根据 popper 的方向动态改变源方向
        // dpdMenu.dataset.popperPlacement;
    };
    Dropdown.prototype._handleTrigger = function (parent, dpdRef, dpdMenu) {
        var _a = this._attrs(parent), trigger = _a.trigger, placement = _a.placement;
        var setPopper = function () { return _newCreatePopper(dpdRef, dpdMenu, placement, 0); };
        var show = function () {
            setPopper();
            dpdMenu.dataset.dropdownVisable = 'true';
            CssTransition(dpdMenu, {
                inOrOut: 'in',
                enterCls: 'transition-drop-enter',
                rmCls: true,
                timeout: 300
            });
        };
        var hidden = function () {
            if (dpdMenu.dataset.dropdownVisable === 'true') {
                dpdMenu.dataset.dropdownVisable = 'false';
                CssTransition(dpdMenu, {
                    inOrOut: 'out',
                    leaveCls: 'transition-drop-leave',
                    rmCls: true,
                    timeout: 280
                });
            }
        };
        // 通过点击宿主元素的次数判断是否显示或隐藏菜单项
        var clicksIsVisable = function (clicks) { return (clicks % 2 == 0 ? hidden() : show()); };
        if (trigger === 'hover') {
            (0,dom_utils.bind)(parent, 'mouseenter', function () {
                dpdShowTimer = setTimeout(function () {
                    show();
                }, defalutDpdDelay);
            });
            (0,dom_utils.bind)(parent, 'mouseleave', function () {
                clearTimeout(dpdShowTimer);
                hidden();
            });
        }
        else if (trigger === 'click') {
            // 初始当前的点击次数
            var currentClicks_1 = 1;
            (0,dom_utils.bind)(dpdRef, 'click', function () { return clicksIsVisable(currentClicks_1++); });
            (0,dom_utils.bind)(dpdRef, 'focusin', show);
            (0,dom_utils.bind)(dpdRef, 'focusout', function () {
                currentClicks_1++;
                hidden();
            });
        }
        else if (trigger === 'contextMenu') {
            // 初始当前的右击次数
            var currentRightClick_1 = 1;
            (0,dom_utils.bind)(dpdRef, 'contextmenu', function (e) {
                e.preventDefault();
                clicksIsVisable(currentRightClick_1++);
            });
            (0,dom_utils.bind)(dpdRef, 'focusout', function () {
                currentRightClick_1++;
                hidden();
            });
        }
    };
    Dropdown.prototype._attrs = function (node) {
        return {
            trigger: (0,dom_utils.getStrTypeAttr)(node, 'trigger', 'hover'),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'bottom')
        };
    };
    return Dropdown;
}());
// 通过点击事件冒泡的方式处理单击下拉菜单项隐藏菜单
function handleDropdownItemClickHidden() {
    (0,dom_utils.bind)(document, 'click', function (e) {
        var target = e.target;
        // 获取点击的目标元素名
        var tagName = target.tagName.toLocaleLowerCase();
        if (tagName === 'r-dropdown-item') {
            // 是否为禁用项
            if (target.getAttribute('disabled') === '')
                return;
            // 获取菜单项的最外层容器 div.rab-select-dropdown
            var dropdownMenu = target.parentElement.parentElement;
            // 设置为隐藏状态
            dropdownMenu.dataset.dropdownVisable = 'false';
            CssTransition(dropdownMenu, {
                inOrOut: 'out',
                leaveCls: 'transition-drop-leave',
                rmCls: true,
                timeout: 280
            });
        }
    });
}
handleDropdownItemClickHidden();
/* harmony default export */ var dropdown = (Dropdown);

;// CONCATENATED MODULE: ./src/components/dropdown/index.ts

/* harmony default export */ var components_dropdown = (dropdown);

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./src/components/loading-bar/loading-bar.ts

/* eslint-disable @typescript-eslint/no-non-null-assertion */




// 全局配置
var DEFAULT_LOADINGBAR = {
    color: 'primary',
    height: 2,
    duration: 800,
    failedColor: 'error'
};
var timer;
function createLoadingBarInstance() {
    var LoadingBar = (0,dom_utils.createElem)('div');
    var LoadingBarInner = (0,dom_utils.createElem)('div');
    LoadingBar.className = "" + prefix.default.loadingBar;
    LoadingBarInner.className = prefix.default.loadingBar + "-inner";
    setColor('primary', LoadingBarInner);
    // 初始进度
    (0,dom_utils.setCss)(LoadingBarInner, 'width', '0%');
    // 设置进度条高度为全局配置的高度
    setTimeout(function () {
        var height = DEFAULT_LOADINGBAR.height + "px";
        (0,dom_utils.setCss)(LoadingBar, 'height', height);
    }, 0);
    LoadingBar.appendChild(LoadingBarInner);
    document.body.appendChild(LoadingBar);
    return LoadingBar;
}
// 设置进度函数
function r_update(options) {
    var LBar = (0,dom_utils.$el)("." + prefix.default.loadingBar);
    var LBarInner = (0,dom_utils.$el)("." + prefix.default.loadingBar + "-inner");
    // 设置进度
    (0,dom_utils.setCss)(LBarInner, 'width', options.percent + "%");
    var transitionConfig = {
        rmCls: true,
        timeout: 200,
        enterCls: 'rab-fade-in',
        leaveCls: 'rab-fade-out',
        hiddenParent: LBar
    };
    // 是否显示隐藏
    if (options.show) {
        CssTransition(LBarInner, __assign({ inOrOut: 'in' }, transitionConfig));
    }
    else {
        CssTransition(LBarInner, __assign({ inOrOut: 'out' }, transitionConfig));
    }
    setColor(options.status, LBarInner);
}
// 隐藏进度条
function loading_bar_hide() {
    setTimeout(function () {
        r_update({
            show: false
        });
        setTimeout(function () {
            r_update({
                percent: 0
            });
        }, 200);
    }, DEFAULT_LOADINGBAR.duration);
}
function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}
// 设置进度条状态背景颜色
function setColor(status, elem) {
    if (status === 'error') {
        // 是否使用全局配置的 failedColor
        if (DEFAULT_LOADINGBAR.failedColor && DEFAULT_LOADINGBAR.failedColor !== 'error') {
            (0,dom_utils.setCss)(elem, 'backgroundColor', DEFAULT_LOADINGBAR.failedColor);
            // 在隐藏的持续时间后初始化背景色
            setTimeout(function () {
                (0,dom_utils.setCss)(elem, 'backgroundColor', '');
            }, DEFAULT_LOADINGBAR.duration);
        }
        else {
            elem.classList.add(prefix.default.loadingBar + "-inner-failed-color-error");
            // 在隐藏的持续时间后设为初始颜色
            setTimeout(function () {
                elem.classList.remove(prefix.default.loadingBar + "-inner-failed-color-error");
            }, DEFAULT_LOADINGBAR.duration + 200);
        }
    }
    else if (status === 'primary') {
        // 是否使用全局配置的 color
        if (DEFAULT_LOADINGBAR.color && DEFAULT_LOADINGBAR.color !== 'primary') {
            (0,dom_utils.setCss)(elem, 'backgroundColor', DEFAULT_LOADINGBAR.color);
        }
        else {
            elem.classList.add(prefix.default.loadingBar + "-inner-color-primary");
        }
    }
}
var $LoadingBar = /** @class */ (function () {
    function $LoadingBar() {
        this.VERSION = 'v1.0';
        this.component = (0,dom_utils.$el)("." + prefix.default.loadingBar);
        createLoadingBarInstance();
    }
    $LoadingBar.prototype.statr = function () {
        if (timer)
            return;
        var percent = 0;
        timer = setInterval(function () {
            // 计算随机进度
            percent += Math.floor(Math.random() * 3 + 1);
            // 终止
            if (percent > 95) {
                clearTimer();
            }
            r_update({
                percent: percent,
                status: 'primary',
                show: true
            });
        }, 200);
    };
    $LoadingBar.prototype.update = function (percent) {
        clearTimer();
        r_update({
            percent: percent,
            status: 'success',
            show: true
        });
    };
    $LoadingBar.prototype.finish = function () {
        clearTimer();
        r_update({
            percent: 100,
            status: 'primary',
            show: true
        });
        loading_bar_hide();
    };
    $LoadingBar.prototype.error = function () {
        clearTimer();
        r_update({
            percent: 100,
            status: 'error',
            show: true
        });
        loading_bar_hide();
    };
    $LoadingBar.prototype.config = function (options) {
        if (options.color && isStr(options.color)) {
            DEFAULT_LOADINGBAR.color = options.color;
        }
        if (options.height && isNum(options.height)) {
            DEFAULT_LOADINGBAR.height = options.height;
        }
        if (options.duration && isNum(options.duration)) {
            DEFAULT_LOADINGBAR.duration = options.duration;
        }
        if (options.failedColor && isStr(options.failedColor)) {
            DEFAULT_LOADINGBAR.failedColor = options.failedColor;
        }
    };
    $LoadingBar.prototype.destroy = function () {
        clearTimer();
        // @ts-ignore
        document.body.removeChild((0,dom_utils.$el)("." + prefix.default.loadingBar));
    };
    return $LoadingBar;
}());
/* harmony default export */ var loading_bar = ($LoadingBar);

;// CONCATENATED MODULE: ./src/components/loading-bar/index.ts

var Loading = new loading_bar();
/* harmony default export */ var components_loading_bar = (Loading);

;// CONCATENATED MODULE: ./src/components/message/message.ts





var prefixKey = 'rb-message';
var MsgMoveEnter = prefix.default.message + "-move-enter";
var MsgMoveLeave = prefix.default.message + "-move-leave";
var iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};
var DEFAULT_MESSAGE = {
    top: 24,
    duration: 3
};
var zIndex = 1010;
// 创建实例的最外层父容器
function createMessageInstanceWrapper() {
    var MsgWrapper = (0,dom_utils.createElem)('div');
    MsgWrapper.className = "" + prefix.default.message;
    (0,dom_utils.setCss)(MsgWrapper, 'zIndex', "" + zIndex);
    setTimeout(function () {
        (0,dom_utils.setCss)(MsgWrapper, 'top', DEFAULT_MESSAGE.top + "px");
    }, 0);
    document.body.appendChild(MsgWrapper);
    return MsgWrapper;
}
var $Message = /** @class */ (function () {
    function $Message() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.instances = [];
        createMessageInstanceWrapper();
    }
    $Message.prototype.info = function (config) {
        this._createInstance('info', config);
        // message 结束时提供 then 接口在关闭后运行 callback
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.success = function (config) {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.warning = function (config) {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.error = function (config) {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.loading = function (config) {
        this._createInstance('loading', config);
        return usePromiseCallback(DEFAULT_MESSAGE.duration, config);
    };
    $Message.prototype.config = function (options) {
        if (options.top && isNum(options.top)) {
            DEFAULT_MESSAGE.top = options.top;
        }
        if ((options.duration && isNum(options.duration)) || options.duration === 0) {
            DEFAULT_MESSAGE.duration = options.duration;
        }
    };
    $Message.prototype.destroy = function (key) {
        // 通过设置的 key 消除
        if (key && (isStr(key) || isNum(key))) {
            destroyElemByKey({
                key: key,
                duration: 0.1,
                prefixKey: prefixKey,
                clsLeave: MsgMoveLeave
            });
        }
        else {
            // 销毁所有实例
            this.instances.forEach(function (instance) {
                destroyElem(instance, {
                    duration: 0.1,
                    clsLeave: MsgMoveLeave
                });
            });
            // 清空存放的所有实例
            this.instances.length = 0;
        }
    };
    $Message.prototype._autoSetZindex = function () {
        // 每次创建实例自动增加最外层父容器的层级
        zIndex++;
        (0,dom_utils.setCss)((0,dom_utils.$el)("." + prefix.default.message), 'zIndex', "" + zIndex);
    };
    $Message.prototype._createInstance = function (_type, config) {
        var _a;
        this._autoSetZindex();
        var Message = (0,dom_utils.createElem)('div');
        var MsgContentWrap = (0,dom_utils.createElem)('div');
        var MsgContentBox = (0,dom_utils.createElem)('div');
        var MsgInfoBox = (0,dom_utils.createElem)('div');
        var MsgIcon = (0,dom_utils.createElem)('i');
        var MsgText = (0,dom_utils.createElem)('span');
        this._setCls(_type, [Message, MsgContentWrap, MsgContentBox, MsgInfoBox, MsgIcon]);
        this._setContent(MsgText, config);
        this._setIcon(_type, MsgIcon);
        // 参数 config 为字符串
        if (typeof config === 'string') {
            this._autoClose(Message, DEFAULT_MESSAGE.duration);
        }
        // 参数 config 为对象
        if (typeof config === 'object') {
            var key = config.key;
            var closable = config.closable, duration = config.duration, onClose = config.onClose, background = config.background;
            if (isUndef(closable))
                closable = false;
            if (isUndef(onClose))
                onClose = function () { return void 0; };
            if (isUndef(background))
                background = false;
            // 为每个实例自己的 duration 参数设置默认值，如果有传入值则使用自定义的值
            if (isUndef(duration))
                duration = DEFAULT_MESSAGE.duration;
            // 当全局的 duration 不为 3 时说明进行了全局配置进行改变
            if (DEFAULT_MESSAGE.duration !== 3)
                duration = DEFAULT_MESSAGE.duration;
            this._setClosable(closable, Message, MsgContentWrap, onClose);
            this._setBackground(Message, MsgContentWrap, background);
            this._autoClose(Message, duration);
            this._setKey(Message, key);
        }
        MsgContentWrap.appendChild(MsgContentBox);
        MsgContentBox.append(MsgInfoBox);
        MsgInfoBox.append(MsgIcon, MsgText);
        Message.appendChild(MsgContentWrap);
        (_a = (0,dom_utils.$el)("." + prefix.default.message)) === null || _a === void 0 ? void 0 : _a.appendChild(Message);
        // 存放每次创建的实例
        this.instances.push(Message);
        CssTransition(Message, {
            inOrOut: 'in',
            enterCls: MsgMoveEnter,
            rmCls: true,
            timeout: 250
        });
        return Message;
    };
    $Message.prototype._setCls = function (type, elems) {
        var nodesCls = [
            "" + prefix.default.messageChild,
            prefix.default.messageChild + "-content " + prefix.default.messageChild + "-content-" + type,
            prefix.default.messageChild + "-content-text",
            prefix.default.message + "-" + type,
            "" + prefix.default.icon
        ];
        elems.forEach(function (elem, i) {
            elem.className = nodesCls[i];
        });
    };
    $Message.prototype._setIcon = function (type, icon) {
        if (type === 'loading') {
            icon.classList.add('rab-load-loop');
        }
        // @ts-ignore
        icon.classList.add(prefix.default.icon + "-" + iconTypes[type]);
    };
    $Message.prototype._setContent = function (node, config) {
        if (typeof config === 'string') {
            isUseHTMLString(node, config, false);
        }
        else if (typeof config === 'object' && config.content) {
            isUseHTMLString(node, config.content, config.dangerouslyUseHTMLString);
        }
    };
    $Message.prototype._setClosable = function (closable, parent, children, onClose) {
        if (!closable)
            return;
        parent.classList.add(prefix.default.messageChild + "-closable");
        var MsgCloseBtn = (0,dom_utils.createElem)('a');
        MsgCloseBtn.className = prefix.default.messageChild + "-close";
        (0,dom_utils.setHtml)(MsgCloseBtn, "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>");
        this._handleClose(parent, MsgCloseBtn, onClose);
        children.appendChild(MsgCloseBtn);
    };
    $Message.prototype._setKey = function (node, key) {
        if (!key)
            return;
        node.setAttribute(prefixKey + "-key", key);
    };
    $Message.prototype._autoClose = function (node, duration) {
        destroyElem(node, {
            duration: duration,
            clsLeave: MsgMoveLeave
        });
    };
    $Message.prototype._handleClose = function (parent, closeBtn, onClose) {
        closeBtn.addEventListener('click', function () {
            // 手动关闭后的回调
            isFn(onClose);
            destroyElem(parent, {
                duration: 0.1,
                clsEnter: MsgMoveEnter,
                clsLeave: MsgMoveLeave
            });
        });
    };
    $Message.prototype._setBackground = function (node, children, background) {
        if (!background)
            return;
        node.classList.add(prefix.default.messageChild + "-with-background");
        children.classList.add(prefix.default.messageChild + "-content-background");
    };
    return $Message;
}());
/* harmony default export */ var message = ($Message);

;// CONCATENATED MODULE: ./src/components/message/index.ts

var Message = new message();
/* harmony default export */ var components_message = (Message);

;// CONCATENATED MODULE: ./src/components/modal/modal.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */





var RABBIT_BTN = new components_button();
var Modal = /** @class */ (function () {
    function Modal() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-modal', { all: true });
        this._create(this.components);
    }
    Modal.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'modal');
        var _a = Modal.prototype, _attrs = _a._attrs, _getModalNode = _a._getModalNode, _handleVisable = _a._handleVisable;
        var loading = _attrs(target).loading;
        var M_Child = _getModalNode(target);
        return {
            get title() {
                return (0,dom_utils.setHtml)(M_Child.modalTitle);
            },
            set title(newVal) {
                if (isStr(newVal))
                    (0,dom_utils.setHtml)(M_Child.modalTitle, newVal);
            },
            get visable() {
                return false;
            },
            set visable(newVal) {
                if (isBol(newVal)) {
                    // 当设置modal为隐藏状态并且确定按钮是加载中的状态则初始化它
                    if (!newVal) {
                        if (loading)
                            RABBIT_BTN.config(M_Child.modalOkBtn).loading = newVal;
                    }
                    _handleVisable(newVal, target, [
                        M_Child.modalMask,
                        M_Child.modalWrap,
                        M_Child.modal
                    ]);
                }
            },
            events: function (_a) {
                var onOk = _a.onOk, onCancel = _a.onCancel;
                var _b = _attrs(target), closable = _b.closable, maskClosable = _b.maskClosable;
                var okEv = function () {
                    // 是否设置按钮为加载中状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = loading;
                    onOk && isFn(onOk);
                };
                var cancelEv = function () {
                    // 如果按钮为加载中状态则初始化其状态
                    if (loading)
                        RABBIT_BTN.config(M_Child.modalOkBtn).loading = !loading;
                    // 防止关闭modal后按键esc依然可以触发事件
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? false : ''); };
                    onCancel && isFn(onCancel);
                };
                // 由于内部的_handleClose方法使用addEventListener为触发关闭模态框的元素绑定点击事件，
                // 从而与这里绑定的事件造成冲突，一个回调事件同时多次触发的问题
                // 因此使用on事件绑定，防止触发回调事件的次数随着每次点击而不断的重复叠加
                if (maskClosable === 'true') {
                    // @ts-ignore
                    M_Child.modalWrap.onclick = function () { return cancelEv(); };
                    // @ts-ignore
                    M_Child.modal.onclick = function (e) { return e.stopPropagation(); };
                }
                if (closable === 'true') {
                    // @ts-ignore
                    M_Child.modalClose.onclick = function () { return cancelEv(); };
                    window.onkeydown = function (e) { return (e.key === 'Escape' ? cancelEv() : ''); };
                }
                // @ts-ignore
                M_Child.modalOkBtn.onclick = function () { return okEv(); };
                // @ts-ignore
                M_Child.modalCancelBtn.onclick = function () { return cancelEv(); };
            }
        };
    };
    Modal.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createTemplate(node);
            (0,dom_utils.setCss)(node, 'display', 'block');
            (0,dom_utils.removeAttrs)(node, [
                'width',
                'title',
                'ok-text',
                'class-name',
                'cancel-text',
                'mask',
                'visable',
                'scrollable',
                'fullscreen',
                'lock-scroll',
                'footer-hide'
            ]);
        });
    };
    Modal.prototype._createTemplate = function (node) {
        // 获取最初 modal容器下的占位内容
        var placeholderContent = node.firstElementChild;
        var _a = this._attrs(node), width = _a.width, title = _a.title, zIndex = _a.zIndex, okText = _a.okText, cancelText = _a.cancelText, className = _a.className;
        var template = "\n          <div class=\"" + prefix.default.modal + "-mask\" style=\"z-index:" + zIndex + "\"></div>\n          <div class=\"" + prefix.default.modal + "-wrap " + className + "\" style=\"z-index:" + zIndex + "\">\n              <div class=\"" + prefix.default.modal + "\" style=\"width: " + width + "\">\n                  <div class=\"" + prefix.default.modal + "-content\">\n                      <a class=\"" + prefix.default.modal + "-close\">\n                        <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>\n                      </a>\n                      <div class=\"" + prefix.default.modal + "-header\">\n                          <div class=\"" + prefix.default.modal + "-header-inner\">" + title + "</div>\n                      </div>\n                      <div class=\"" + prefix.default.modal + "-body\"></div>\n                      <div class=\"" + prefix.default.modal + "-footer\">\n                          <button type=\"button\" class=\"rab-btn rab-btn-text\" id=\"modalBtn1\">" + cancelText + "</button>\n                          <button type=\"button\" class=\"rab-btn rab-btn-primary\" id=\"modalBtn2\">" + okText + "</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      ";
        (0,dom_utils.setHtml)(node, template);
        this._initVisable(node);
        this._setHeader(node);
        // @ts-ignore
        this._setContent(node, placeholderContent);
        this._setMask(node);
        this._setFullScreen(node);
        this._setClosable(node);
        this._setFooterHide(node);
        this._handleClose(node);
    };
    Modal.prototype._initVisable = function (node) {
        var _a = this._attrs(node), visable = _a.visable, scrollable = _a.scrollable;
        var _b = this._getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
        var lockScroll = this._attrs(node).lockScroll;
        !node.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        if (visable) {
            (0,dom_utils.setCss)(modalMask, 'display', '');
            modalWrap.classList.remove(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(modal, 'display', '');
            scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
        }
        else {
            (0,dom_utils.setCss)(modalMask, 'display', 'none');
            modalWrap.classList.add(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(modal, 'display', 'none');
        }
        // @ts-ignore
        // 设置初始显示状态
        node.dataset.modalVisable = visable;
    };
    Modal.prototype._setHeader = function (node) {
        var title = this._attrs(node).title;
        if (!title) {
            var modalHeader = node.querySelector("." + prefix.default.modal + "-header");
            modalHeader === null || modalHeader === void 0 ? void 0 : modalHeader.remove();
        }
    };
    Modal.prototype._setContent = function (node, content) {
        var modalBody = node.querySelector("." + prefix.default.modal + "-body");
        if (content)
            modalBody === null || modalBody === void 0 ? void 0 : modalBody.appendChild(content);
    };
    Modal.prototype._setMask = function (node) {
        var _a = this, _attrs = _a._attrs, _getModalNode = _a._getModalNode;
        var mask = _attrs(node).mask;
        if (mask === 'false') {
            var _b = _getModalNode(node), modalMask = _b.modalMask, modalWrap = _b.modalWrap, modal = _b.modal;
            modalMask.remove();
            modalWrap.classList.add(prefix.default.modal + "-no-mask");
            modal.classList.add(prefix.default.modal + "-content-no-mask");
        }
    };
    Modal.prototype._setFullScreen = function (node) {
        var fullscreen = this._attrs(node).fullscreen;
        if (fullscreen) {
            var modal = this._getModalNode(node).modal;
            modal.classList.add(prefix.default.modal + "-fullscreen");
        }
    };
    Modal.prototype._setClosable = function (node) {
        var closable = this._attrs(node).closable;
        if (closable === 'false') {
            var modalClose = this._getModalNode(node).modalClose;
            modalClose.remove();
        }
    };
    Modal.prototype._setFooterHide = function (node) {
        var footerHide = this._attrs(node).footerHide;
        if (footerHide) {
            var modalFooter = node.querySelector("." + prefix.default.modal + "-footer");
            modalFooter === null || modalFooter === void 0 ? void 0 : modalFooter.remove();
        }
    };
    Modal.prototype._handleVisable = function (visable, target, children) {
        var _a = Modal.prototype, _show = _a._show, _hide = _a._hide;
        visable ? _show(target, children) : _hide(target, children);
    };
    Modal.prototype._handleClose = function (parent) {
        var _a = this, _attrs = _a._attrs, _hide = _a._hide, _getModalNode = _a._getModalNode;
        var _b = _attrs(parent), closable = _b.closable, maskClosable = _b.maskClosable, loading = _b.loading;
        var _c = _getModalNode(parent), modalMask = _c.modalMask, modalWrap = _c.modalWrap, modal = _c.modal, modalClose = _c.modalClose, modalOkBtn = _c.modalOkBtn, modalCancelBtn = _c.modalCancelBtn;
        var hidden = function () { return _hide(parent, [modalMask, modalWrap, modal]); };
        // 右上角关闭按钮
        // ESC 键关闭
        if (closable === 'true') {
            (0,dom_utils.bind)(modalClose, 'click', function () { return hidden(); });
            (0,dom_utils.bind)(window, 'keydown', function (e) { return (e.key === 'Escape' ? hidden() : ''); });
        }
        // 遮盖层关闭
        if (maskClosable === 'true') {
            (0,dom_utils.bind)(modalWrap, 'click', function () { return hidden(); });
            (0,dom_utils.bind)(modal, 'click', function (e) { return e.stopPropagation(); });
        }
        // 确定和取消按钮关闭
        //非加载中状态可以点击关闭模态框
        if (!loading)
            (0,dom_utils.bind)(modalOkBtn, 'click', function () { return hidden(); });
        (0,dom_utils.bind)(modalCancelBtn, 'click', function () { return hidden(); });
    };
    Modal.prototype._show = function (parent, showElm) {
        var _attrs = Modal.prototype._attrs;
        var scrollable = _attrs(parent).scrollable;
        var lockScroll = _attrs(parent).lockScroll;
        !parent.getAttribute('lock-scroll') ? (lockScroll = true) : lockScroll;
        // @ts-ignore
        // 设置当前为显示状态
        parent.dataset.modalVisable = 'true';
        // showElm[0] 表示遮盖层
        // showElm[1] 表示模态框的父容器wrap
        // showElm[2] 表示模态框主体
        showElm[1].classList.contains(prefix.default.modal + "-hidden") &&
            showElm[1].classList.remove(prefix.default.modal + "-hidden");
        CssTransition(showElm[0], {
            inOrOut: 'in',
            enterCls: 'rab-fade-in',
            timeout: 250,
            rmCls: true
        });
        CssTransition(showElm[2], {
            inOrOut: 'in',
            enterCls: 'zoom-big-enter',
            timeout: 250,
            rmCls: true
        });
        scrollable_scrollable({ scroll: scrollable, lock: lockScroll });
    };
    Modal.prototype._hide = function (parent, hiddenElm) {
        // @ts-ignore
        // 设置当前为隐藏状态
        parent.dataset.modalVisable = 'false';
        // hiddenElm[0] 表示遮盖层
        // hiddenElm[1] 表示模态框的父容器wrap
        // hiddenElm[2] 表示模态框主体
        CssTransition(hiddenElm[0], {
            inOrOut: 'out',
            leaveCls: 'rab-fade-out',
            rmCls: true,
            timeout: 250
        });
        CssTransition(hiddenElm[2], {
            inOrOut: 'out',
            leaveCls: 'zoom-big-leave',
            rmCls: true,
            timeout: 250
        });
        setTimeout(function () {
            hiddenElm[1].classList.add(prefix.default.modal + "-hidden");
            (0,dom_utils.setCss)(hiddenElm[2], 'display', 'none');
            scrollable_scrollable({ scroll: true, lock: true, node: parent, tagName: 'modal' });
        }, 240);
    };
    Modal.prototype._getModalNode = function (node) {
        var modalMask = node.querySelector("." + prefix.default.modal + "-mask");
        var modalWrap = node.querySelector("." + prefix.default.modal + "-wrap");
        var modal = modalWrap.querySelector("." + prefix.default.modal);
        var modalClose = modalWrap.querySelector("." + prefix.default.modal + "-close");
        var modalTitle = modal.querySelector("." + prefix.default.modal + "-header-inner");
        var modalOkBtn = modal.querySelector('#modalBtn2');
        var modalCancelBtn = modal.querySelector('#modalBtn1');
        return {
            modalMask: modalMask,
            modalWrap: modalWrap,
            modal: modal,
            modalClose: modalClose,
            modalTitle: modalTitle,
            modalOkBtn: modalOkBtn,
            modalCancelBtn: modalCancelBtn
        };
    };
    Modal.prototype._attrs = function (node) {
        return {
            mask: (0,dom_utils.getStrTypeAttr)(node, 'mask', 'true'),
            width: (0,dom_utils.getStrTypeAttr)(node, 'width', '520px'),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            okText: (0,dom_utils.getStrTypeAttr)(node, 'ok-text', '确定'),
            closable: (0,dom_utils.getStrTypeAttr)(node, 'closable', 'true'),
            className: (0,dom_utils.getStrTypeAttr)(node, 'class-name', ''),
            cancelText: (0,dom_utils.getStrTypeAttr)(node, 'cancel-text', '取消'),
            maskClosable: (0,dom_utils.getStrTypeAttr)(node, 'mask-closable', 'true'),
            zIndex: (0,dom_utils.getNumTypeAttr)(node, 'z-index', 1000),
            visable: (0,dom_utils.getBooleanTypeAttr)(node, 'visable'),
            loading: (0,dom_utils.getBooleanTypeAttr)(node, 'loading'),
            scrollable: (0,dom_utils.getBooleanTypeAttr)(node, 'scrollable'),
            lockScroll: (0,dom_utils.getBooleanTypeAttr)(node, 'lock-scroll'),
            fullscreen: (0,dom_utils.getBooleanTypeAttr)(node, 'fullscreen'),
            footerHide: (0,dom_utils.getBooleanTypeAttr)(node, 'footer-hide')
        };
    };
    return Modal;
}());
/* harmony default export */ var modal = (Modal);

;// CONCATENATED MODULE: ./src/components/modal/index.ts

/* harmony default export */ var components_modal = (modal);

;// CONCATENATED MODULE: ./src/components/notice/notice.ts





var NotPrefixKey = 'rb-notice';
var NotMoveEnter = prefix.default.notice + "-move-enter";
var NotMoveLeave = prefix.default.notice + "-move-leave";
var notice_iconTypes = {
    info: 'ios-information-circle',
    success: 'ios-checkmark-circle',
    warning: 'ios-alert',
    error: 'ios-close-circle',
    loading: 'loading-solid'
};
var DEFAULT_NOTICE = {
    top: 24,
    duration: 4.5
};
var notice_zIndex = 1180;
// 创建实例的最外层父容器
function createNoticeInsanceWrapper() {
    var NoticeWrapper = (0,dom_utils.createElem)('div');
    NoticeWrapper.className = "" + prefix.default.notice;
    (0,dom_utils.setCss)(NoticeWrapper, 'zIndex', "" + notice_zIndex);
    (0,dom_utils.setCss)(NoticeWrapper, 'right', '0');
    setTimeout(function () { return (0,dom_utils.setCss)(NoticeWrapper, 'top', DEFAULT_NOTICE.top + "px"); }, 0);
    document.body.appendChild(NoticeWrapper);
    return NoticeWrapper;
}
var $Notice = /** @class */ (function () {
    function $Notice() {
        this.VERSION = 'v1.0';
        // 存储已经创建的实例，在 destroy方法里需要用到
        this.instances = [];
        createNoticeInsanceWrapper();
    }
    $Notice.prototype.open = function (config) {
        this._createInstance('normal', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.info = function (config) {
        this._createInstance('info', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.success = function (config) {
        this._createInstance('success', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.warning = function (config) {
        this._createInstance('warning', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.error = function (config) {
        this._createInstance('error', config);
        return usePromiseCallback(DEFAULT_NOTICE.duration, config.duration);
    };
    $Notice.prototype.config = function (options) {
        if (options.top) {
            DEFAULT_NOTICE.top = options.top;
        }
        if (options.duration || options.duration === 0) {
            DEFAULT_NOTICE.duration = options.duration;
        }
    };
    $Notice.prototype.close = function (key) {
        destroyElemByKey({
            key: key,
            duration: 0.1,
            clsLeave: NotMoveLeave,
            prefixKey: NotPrefixKey
        });
    };
    $Notice.prototype.destroy = function () {
        this.instances.forEach(function (instance) {
            destroyElem(instance, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        });
        // 清空存放的所有实例
        this.instances.length = 0;
    };
    $Notice.prototype._autoSetZindex = function () {
        notice_zIndex++;
        (0,dom_utils.setCss)((0,dom_utils.$el)("." + prefix.default.notice), 'zIndex', "" + notice_zIndex);
    };
    $Notice.prototype._createInstance = function (type, config) {
        var _a;
        this._autoSetZindex();
        var Notice = (0,dom_utils.createElem)('div');
        var NoticeContent = (0,dom_utils.createElem)('div');
        var NoticeCustomContent = (0,dom_utils.createElem)('div');
        var NoticeTitle = (0,dom_utils.createElem)('div');
        var NoticeDesc = (0,dom_utils.createElem)('div');
        this._setCls(type, [Notice, NoticeContent, NoticeCustomContent, NoticeTitle, NoticeDesc], config.className);
        this._setKey(Notice, config.key);
        this._setTitle(NoticeTitle, config.title, config.dangerouslyUseHTMLString);
        this._setDesc(Notice, NoticeCustomContent, NoticeDesc, config.desc, config.dangerouslyUseHTMLString);
        this._setIcon(type, NoticeCustomContent, NoticeDesc, config.icon);
        this._setClosable(Notice, config.closable, config.onClose);
        this._customStyle(Notice, config.style);
        NoticeCustomContent.append(NoticeTitle, NoticeDesc);
        NoticeContent.appendChild(NoticeCustomContent);
        Notice.appendChild(NoticeContent);
        (_a = document.querySelector("." + prefix.default.notice)) === null || _a === void 0 ? void 0 : _a.appendChild(Notice);
        CssTransition(Notice, {
            inOrOut: 'in',
            enterCls: NotMoveEnter
        });
        this.instances.push(Notice);
        this._handleNoticeClick(Notice, config.onClick);
        this._autoClose(Notice, config.duration);
        return Notice;
    };
    $Notice.prototype._setCls = function (type, nodes, customCls) {
        var nodesCls = [
            prefix.default.noticeChild + " " + (customCls ? customCls : ''),
            prefix.default.noticeChild + "-content",
            prefix.default.noticeChild + "-custom-content " + prefix.default.notice + "-with-" + type,
            prefix.default.notice + "-title",
            prefix.default.notice + "-desc"
        ];
        var i = 0;
        var length = nodes.length;
        for (; i < length; i++) {
            var node = nodes[i];
            node.className = nodesCls[i];
        }
    };
    $Notice.prototype._setKey = function (node, key) {
        if (!key)
            return;
        node.setAttribute(NotPrefixKey + "-key", key);
    };
    $Notice.prototype._setTitle = function (node, title, dangerouslyUseHTMLString) {
        // 必须设置一个通知提醒标题
        if (!title) {
            warn('You must set a notification to remind the title');
            return;
        }
        // 是否支持传入 HTML 片段
        isUseHTMLString(node, title, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setDesc = function (parent, children_custm, child_desc, desc, dangerouslyUseHTMLString) {
        if (!desc)
            return;
        parent.classList.add(prefix.default.noticeChild + "-with-desc");
        children_custm.classList.add(prefix.default.notice + "-with-desc");
        // 是否支持传入 HTML 片段
        isUseHTMLString(child_desc, desc, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setIcon = function (type, child_custom, child_desc, customIcon) {
        // 不带状态图标的类型
        if (type === 'noraml')
            return;
        if (type !== 'normal' || customIcon) {
            child_custom.classList.add(prefix.default.notice + "-with-icon");
        }
        var isOutline = '';
        // 带有状态图标并且是否带有提示内容，如果有则将图标设为 outline 外观
        if (child_desc.innerHTML)
            isOutline = '-outline';
        var NoticeIcon = (0,dom_utils.createElem)('span');
        NoticeIcon.className = prefix.default.notice + "-icon " + prefix.default.notice + "-icon-" + type;
        // 是否自定义状态图标
        if (customIcon) {
            (0,dom_utils.setHtml)(NoticeIcon, customIcon);
        }
        else {
            // @ts-ignore
            var defaultIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-" + notice_iconTypes[type] + isOutline + "\"></i>";
            (0,dom_utils.setHtml)(NoticeIcon, defaultIcon);
        }
        child_custom.prepend(NoticeIcon);
    };
    $Notice.prototype._setClosable = function (parent, closable, onClose) {
        // 默认显示右上角关闭按钮
        isUndef(closable) ? (closable = true) : closable;
        if (!closable)
            return;
        parent.classList.add(prefix.default.noticeChild + "-closable");
        var NoticeClose = (0,dom_utils.createElem)('a');
        var closeIcon = "<i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-close\"></i>";
        NoticeClose.className = prefix.default.noticeChild + "-close";
        (0,dom_utils.setHtml)(NoticeClose, closeIcon);
        this._handleClose(parent, NoticeClose, onClose);
        parent.appendChild(NoticeClose);
    };
    // 自定义内联样式
    $Notice.prototype._customStyle = function (node, style) {
        if (!style)
            return;
        (0,dom_utils.setCss)(node, 'cssText', style);
    };
    // 点击通知时触发的回调函数
    $Notice.prototype._handleNoticeClick = function (parent, onClick) {
        parent.onclick = function (e) {
            e.stopPropagation();
            if (onClick)
                isFn(onClick);
        };
    };
    $Notice.prototype._handleClose = function (parent, closeBtn, onClose) {
        closeBtn.onclick = function (e) {
            e.stopPropagation();
            if (onClose)
                isFn(onClose);
            destroyElem(parent, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        };
    };
    $Notice.prototype._autoClose = function (instance, duration) {
        // 为每个实例自己的 duration参数设置默认值，如果有传入值则使用自定义的值
        isUndef(duration) ? (duration = DEFAULT_NOTICE.duration) : duration;
        destroyElem(instance, {
            duration: duration,
            clsLeave: NotMoveLeave
        });
    };
    return $Notice;
}());
/* harmony default export */ var notice = ($Notice);

;// CONCATENATED MODULE: ./src/components/notice/index.ts

var Notice = new notice();
/* harmony default export */ var components_notice = (Notice);

;// CONCATENATED MODULE: ./src/components/poptip/poptip.ts






var defalutPoptipDelay = 100;
var poptipShowTimer;
var poptipEvTimer;
var Poptip = /** @class */ (function () {
    function Poptip() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-poptip', { all: true });
        this._create(this.components);
        this.children = (0,dom_utils.$el)("." + prefix.default.poptip + "-popper", { all: true });
        clickOutside(this.children, 'poptipShow', 'zoom-big-fast-leave');
        scrollUpdate();
    }
    Poptip.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'poptip');
        var attrs = Poptip.prototype.attrs;
        var PoptipRef = target.querySelector("." + prefix.default.poptip + "-rel");
        var PoptipPopper = target.querySelector("." + prefix.default.poptip + "-popper");
        var PoptipContent = target.querySelector("." + prefix.default.poptip + "-body-content-inner");
        var PoptipTitle;
        var OkBtn;
        var CancelBtn;
        // 判断要设置的提示框标题是否是确认对话框的标题
        // 判断是否要获取确认对话框的确定和取消按钮
        if (attrs(target).isConfirm) {
            PoptipTitle = target.querySelector("." + prefix.default.poptip + "-body-message");
            OkBtn = target.querySelector("." + prefix.default.button + "-primary." + prefix.default.button + "-sm");
            CancelBtn = target.querySelector("." + prefix.default.button + "-text." + prefix.default.button + "-sm");
        }
        else {
            PoptipTitle = target.querySelector("." + prefix.default.poptip + "-title-inner");
        }
        return {
            get title() {
                return (0,dom_utils.setHtml)(PoptipTitle);
            },
            set title(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(PoptipTitle, newVal);
            },
            get content() {
                return (0,dom_utils.setHtml)(PoptipContent);
            },
            set content(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(PoptipContent, newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide, onOk = _a.onOk, onCancel = _a.onCancel;
                var triggerMode = attrs(target).trigger;
                var showEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'true')
                        onShow && isFn(onShow);
                };
                var hideEv = function () {
                    if (PoptipPopper.dataset.poptipShow === 'false')
                        onHide && isFn(onHide);
                };
                var clickEv = function () {
                    showEv();
                    hideEv();
                };
                if (triggerMode === 'click') {
                    (0,dom_utils.bind)(PoptipRef, 'click', clickEv);
                }
                else if (triggerMode === 'focus') {
                    (0,dom_utils.bind)(target, 'mousedown', showEv);
                    (0,dom_utils.bind)(target, 'mouseup', hideEv);
                }
                else if (triggerMode === 'hover') {
                    handleHoverShowAndHideEvents({
                        reference: target,
                        popper: PoptipPopper,
                        datasetVal: 'poptipStatus',
                        showCb: onShow,
                        hideCb: onHide,
                        delay: defalutPoptipDelay,
                        timer: poptipEvTimer
                    });
                }
                // 确认对话框的确定和取消按钮都要触发提示框隐藏
                if (OkBtn) {
                    (0,dom_utils.bind)(OkBtn, 'click', function () {
                        hideEv();
                        onOk && isFn(onOk);
                    });
                }
                if (CancelBtn) {
                    (0,dom_utils.bind)(OkBtn, 'click', function () {
                        hideEv();
                        onCancel && isFn(onCancel);
                    });
                }
            }
        };
    };
    Poptip.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node, i) {
            _this._createPoptipNodes(node, i);
            (0,dom_utils.removeAttrs)(node, [
                'width',
                'title',
                'content',
                'ok-text',
                'padding',
                'disabled',
                'placement',
                'word-wrap',
                'cancel-text'
            ]);
        });
    };
    Poptip.prototype._createPoptipNodes = function (node, i) {
        var attrs = this.attrs(node);
        if (attrs.isConfirm)
            node.className = prefix.default.poptip + "-confirm";
        var uid = "poptip" + i;
        var referenceElem = node.firstElementChild;
        var PoptipRel = (0,dom_utils.createElem)('div');
        PoptipRel.className = prefix.default.poptip + "-rel";
        PoptipRel.appendChild(referenceElem);
        var whatModel = attrs.isConfirm ? this._confirmTpl(attrs) : this._normalTpl(attrs);
        var template = "\n            <div class=\"" + prefix.default.poptip + "-popper\" x-placement=" + attrs.placement + " data-poptip-uid=" + uid + ">\n                <div class=\"" + prefix.default.poptip + "-content\">\n                    <div class=\"" + prefix.default.poptip + "-arrow\" data-popper-arrow></div>\n                    <div class=\"" + prefix.default.poptip + "-inner\">" + whatModel + "</div>\n                </div>\n            </div>\n        ";
        (0,dom_utils.setHtml)(node, template);
        this._setWidth(attrs, uid);
        var Popper = (0,dom_utils.$el)("[data-poptip-uid=" + uid + "]");
        Popper === null || Popper === void 0 ? void 0 : Popper.before(PoptipRel);
        // 初始化 display
        (0,dom_utils.setCss)(Popper, 'display', 'none');
        if (!attrs.isDisabled) {
            // @ts-ignore
            this._triggerDisplay(attrs.trigger, node, PoptipRel, Popper, attrs);
        }
    };
    Poptip.prototype._normalTpl = function (attrs) {
        var setPadding = attrs.padding ? "padding:" + attrs.padding : '';
        var isShowTitle = !attrs.isWordWrap && attrs.title
            ? "<div class=\"" + prefix.default.poptip + "-title\" style=\"" + setPadding + "\">\n                      <div class=\"" + prefix.default.poptip + "-title-inner\">" + attrs.title + "</div>\n                   </div>"
            : '';
        var template = "\n            " + isShowTitle + "\n            <div class=\"" + prefix.default.poptip + "-body\" style=\"" + setPadding + "\">\n                <div class=\"" + prefix.default.poptip + "-body-content\">\n                <div class=\"" + prefix.default.poptip + "-body-content-inner\">" + attrs.content + "</div>\n                </div>\n            </div>\n            ";
        return template;
    };
    Poptip.prototype._confirmTpl = function (attrs) {
        var template = "\n          <div class=\"" + prefix.default.poptip + "-body\">\n              <i class=\"" + prefix.default.icon + " " + prefix.default.icon + "-ios-help-circle\"></i>\n              <div class=\"" + prefix.default.poptip + "-body-message\">" + attrs.title + "</div>\n          </div>\n          <div class=\"" + prefix.default.poptip + "-footer\">\n              <button class=\"" + prefix.default.button + " " + prefix.default.button + "-text " + prefix.default.button + "-sm\">" + attrs.cancelText + "</button>\n              <button class=\"" + prefix.default.button + " " + prefix.default.button + "-primary " + prefix.default.button + "-sm\">" + attrs.okText + "</button>\n          </div>\n      ";
        return template;
    };
    Poptip.prototype._setWidth = function (attrs, uid) {
        var popper = document.querySelector("[data-poptip-uid=" + uid + "]");
        if (attrs.width) {
            (0,dom_utils.setCss)(popper, 'width', attrs.width + "px");
        }
        if (attrs.isWordWrap) {
            var popperContent = popper === null || popper === void 0 ? void 0 : popper.querySelector("." + prefix.default.poptip + "-body-content");
            popperContent === null || popperContent === void 0 ? void 0 : popperContent.classList.add(prefix.default.poptip + "-body-content-word-wrap");
        }
    };
    Poptip.prototype._triggerDisplay = function (trigger, parent, referenceChild, popper, poptipAttrs) {
        if (trigger !== 'click' && trigger !== 'hover' && trigger !== 'focus') {
            warn("The Poptip attribute trigger got an invalid trigger mode --> '" + trigger + "'");
            return;
        }
        var _initPoptip = this._initPoptip;
        var common = {
            rmCls: true,
            enterCls: 'zoom-big-fast-enter',
            leaveCls: 'zoom-big-fast-leave',
            timeout: 200
        };
        // 通过设置 popper.dataset.poptipShow 来判断是否隐藏或显示
        var show = function () {
            popper.dataset.poptipShow = 'true';
            CssTransition(popper, __assign({ inOrOut: 'in' }, common));
            _initPoptip(parent, popper, poptipAttrs);
        };
        var hide = function () {
            popper.dataset.poptipShow = 'false';
            CssTransition(popper, __assign({ inOrOut: 'out' }, common));
        };
        var judgmentIsVisible = function () { return (popper.dataset.poptipShow === 'true' ? hide() : show()); };
        if (trigger === 'click' || trigger === 'focus') {
            _initPoptip(parent, popper, poptipAttrs);
            toggleUpdate(popper, trigger, parent);
        }
        if (trigger === 'click') {
            (0,dom_utils.bind)(referenceChild, 'click', judgmentIsVisible);
        }
        else if (trigger === 'focus' && !poptipAttrs.isConfirm) {
            (0,dom_utils.bind)(referenceChild, 'mousedown', judgmentIsVisible);
            (0,dom_utils.bind)(referenceChild, 'mouseup', hide);
        }
        else if (trigger === 'hover' && !poptipAttrs.isConfirm) {
            (0,dom_utils.bind)(parent, 'mouseenter', function () {
                poptipShowTimer = setTimeout(function () {
                    show();
                }, defalutPoptipDelay);
            });
            (0,dom_utils.bind)(parent, 'mouseleave', function () {
                clearTimeout(poptipShowTimer);
                hide();
            });
            toggleUpdate(popper, 'hover', parent, defalutPoptipDelay);
        }
        // 确认对话框的确定和取消按钮触发隐藏
        if (poptipAttrs.isConfirm) {
            var confirmOkBtn = popper.querySelector("." + prefix.default.button + "-primary." + prefix.default.button + "-sm");
            var confirmCancelBtn = popper.querySelector("." + prefix.default.button + "-text." + prefix.default.button + "-sm");
            confirmOkBtn.addEventListener('click', judgmentIsVisible);
            confirmCancelBtn.addEventListener('click', judgmentIsVisible);
        }
    };
    Poptip.prototype._initPoptip = function (reference, popper, poptipAttrs) {
        var NCP = _newCreatePopper(reference, popper, poptipAttrs.placement, poptipAttrs.offset);
        return NCP;
    };
    Poptip.prototype.attrs = function (node) {
        return {
            // number type
            width: (0,dom_utils.getNumTypeAttr)(node, 'width', 0),
            offset: (0,dom_utils.getNumTypeAttr)(node, 'offset', 0),
            // string type
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            okText: (0,dom_utils.getStrTypeAttr)(node, 'ok-text', '确定'),
            content: (0,dom_utils.getStrTypeAttr)(node, 'content', ''),
            trigger: (0,dom_utils.getStrTypeAttr)(node, 'trigger', 'click'),
            padding: (0,dom_utils.getStrTypeAttr)(node, 'padding', ''),
            placement: (0,dom_utils.getStrTypeAttr)(node, 'placement', 'top'),
            cancelText: (0,dom_utils.getStrTypeAttr)(node, 'cancel-text', '取消'),
            // boolean type
            isConfirm: (0,dom_utils.getBooleanTypeAttr)(node, 'confirm'),
            isDisabled: (0,dom_utils.getBooleanTypeAttr)(node, 'disabled'),
            isWordWrap: (0,dom_utils.getBooleanTypeAttr)(node, 'word-wrap')
        };
    };
    return Poptip;
}());
/* harmony default export */ var poptip = (Poptip);

;// CONCATENATED MODULE: ./src/components/poptip/index.ts

/* harmony default export */ var components_poptip = (poptip);

;// CONCATENATED MODULE: ./src/components/progress/progress.ts



var PrgesIconType = {
    success: '<i class="rab-icon rab-icon-ios-checkmark-circle"></i>',
    warning: '<i class="rab-icon rab-icon-ios-alert"></i>',
    wrong: '<i class="rab-icon rab-icon-ios-close-circle"></i>'
};
var Progress = /** @class */ (function () {
    function Progress() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-progress', { all: true });
        this._create(this.components);
    }
    Progress.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'progress');
        var progress = target.querySelector("." + prefix.default.progress + "-bg");
        var progressSucs = target.querySelector("." + prefix.default.progress + "-success-bg");
        var progressText = target.querySelector("." + prefix.default.progress + "-inner-text");
        return {
            get percent() {
                return progress;
            },
            set percent(newVal) {
                if (!isNum(newVal) || newVal == progress.style.width)
                    return;
                if (progressText)
                    (0,dom_utils.setHtml)(progressText, newVal + "%");
                (0,dom_utils.setCss)(progress, 'width', newVal + "%");
            },
            get successPercent() {
                return progressSucs;
            },
            set successPercent(newVal) {
                if (!isNum(newVal) || newVal == progressSucs.style.width)
                    return;
                (0,dom_utils.setCss)(progressSucs, 'width', newVal + "%");
            }
        };
    };
    Progress.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createChildNodes(node);
            (0,dom_utils.removeAttrs)(node, [
                'rb-percent',
                'rb-show-text',
                'rb-text-inside',
                'rb-stroke-width',
                'rb-stroke-color',
                'rb-success-percent'
            ]);
        });
    };
    Progress.prototype._createChildNodes = function (wrapper) {
        var PgrsOuter = (0,dom_utils.createElem)('div');
        var PgrsInner = (0,dom_utils.createElem)('div');
        var PgrsBar = (0,dom_utils.createElem)('div');
        var PgrsBarSucess = (0,dom_utils.createElem)('div');
        PgrsOuter.className = prefix.default.progress + "-outer";
        PgrsInner.className = prefix.default.progress + "-inner";
        PgrsBar.className = prefix.default.progress + "-bg";
        PgrsBarSucess.className = prefix.default.progress + "-success-bg";
        this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeColor(wrapper, PgrsBar);
        PgrsInner.append(PgrsBar, PgrsBarSucess);
        PgrsOuter.appendChild(PgrsInner);
        wrapper.appendChild(PgrsOuter);
        this._showText(wrapper, PgrsBar);
    };
    Progress.prototype._setPercent = function (wrapper, bar, successBar) {
        var percent = this._getPercent(wrapper) + "%";
        var successPercent = this._getSuccessPercent(wrapper) + "%";
        (0,dom_utils.setCss)(bar, 'width', percent);
        (0,dom_utils.setCss)(successBar, 'width', successPercent);
    };
    Progress.prototype._setStrokeWidth = function (wrapper, bar, successBar) {
        var strokeWidth = this._getStrokeWidth(wrapper) + "px";
        (0,dom_utils.setCss)(bar, 'height', strokeWidth);
        (0,dom_utils.setCss)(successBar, 'height', strokeWidth);
    };
    Progress.prototype._showText = function (wrapper, PgrsBar) {
        if (!this._isShowText(wrapper))
            return;
        var PgrsTextWrapper = (0,dom_utils.createElem)('div');
        var PgresText = (0,dom_utils.createElem)('span');
        PgrsTextWrapper.className = prefix.default.progress + "-text";
        PgresText.className = prefix.default.progress + "-inner-text";
        var percentText = this._getPercent(wrapper) + "%";
        (0,dom_utils.setText)(PgresText, percentText);
        if (!this._isTextInside(wrapper)) {
            wrapper.className = prefix.default.progress + "-show-info";
            if (this._getStatus(wrapper) === 'success') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.success);
            }
            else if (this._getStatus(wrapper) === 'warning') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.warning);
            }
            else if (this._getStatus(wrapper) === 'wrong') {
                (0,dom_utils.setHtml)(PgresText, PrgesIconType.wrong);
            }
            PgrsTextWrapper.appendChild(PgresText);
            wrapper.appendChild(PgrsTextWrapper);
        }
        else {
            PgrsBar.appendChild(PgresText);
        }
    };
    Progress.prototype._setStrokeColor = function (wrapper, PgrsBar) {
        var _a = this._getStrokeColor(wrapper), from = _a.from, to = _a.to;
        if (from.length || to.length) {
            var strokeColor = "linear-gradient(to right, " + from + " 0%, " + to + " 100%)";
            (0,dom_utils.setCss)(PgrsBar, 'backgroundImage', strokeColor);
        }
    };
    Progress.prototype._getStatus = function (node) {
        return node.getAttribute('status');
    };
    Progress.prototype._getPercent = function (node) {
        return node.getAttribute('percent') || '0';
    };
    Progress.prototype._getSuccessPercent = function (node) {
        return node.getAttribute('success-percent') || '0';
    };
    Progress.prototype._getStrokeWidth = function (node) {
        return node.getAttribute('stroke-width') || '10';
    };
    Progress.prototype._getStrokeColor = function (node) {
        var _a;
        if (!node.getAttribute('stroke-color')) {
            return {
                from: [],
                to: []
            };
        }
        else {
            /**
             * 转为真实数组
             * "['','']" -> ['','']
             */
            var strArr = ((_a = node.getAttribute('stroke-color')) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"')) || '';
            var colorArr = JSON.parse(strArr);
            return {
                from: colorArr[0],
                to: colorArr[1]
            };
        }
    };
    Progress.prototype._isTextInside = function (node) {
        return node.getAttribute('text-inside') === 'true';
    };
    Progress.prototype._isShowText = function (node) {
        if (node.getAttribute('show-text') === 'false')
            return false;
        else
            return true;
    };
    return Progress;
}());
/* harmony default export */ var progress = (Progress);

;// CONCATENATED MODULE: ./src/components/progress/index.ts

/* harmony default export */ var components_progress = (progress);

;// CONCATENATED MODULE: ./assets/result-403.svg
/* harmony default export */ var result_403 = (".././fonts/result-403.svg");
;// CONCATENATED MODULE: ./assets/result-404.svg
/* harmony default export */ var result_404 = (".././fonts/result-404.svg");
;// CONCATENATED MODULE: ./assets/result-500.svg
/* harmony default export */ var result_500 = (".././fonts/result-500.svg");
;// CONCATENATED MODULE: ./src/components/result/result.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */





var Result = /** @class */ (function () {
    function Result() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-result', { all: true });
        this._create(this.components);
    }
    Result.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var _a = _this._attrs(node), status = _a.status, title = _a.title, subTitle = _a.subTitle, icon = _a.icon, extra = _a.extra;
            var oldChild = node.firstElementChild;
            _this._setMainTemplate(node);
            _this._setStatus(node, status);
            _this._setTitle(node, title, subTitle);
            _this._setExtraContent(node, extra);
            _this._setComplexDesc(node, oldChild);
            _this._setCustomIcon(node, icon);
            (0,dom_utils.removeAttrs)(node, ['title', 'subtitle', 'status', 'icon', 'extra']);
        });
    };
    Result.prototype._setMainTemplate = function (node) {
        var template = "\n          <div class=\"" + prefix.default.result + "-icon\">\n             <i class=\"" + prefix.default.icon + "\"></i>\n          </div>\n          <div class=\"" + prefix.default.result + "-title\"></div>\n          <div class=\"" + prefix.default.result + "-subtitle\"></div> \n          <div class=\"" + prefix.default.result + "-content\"></div>\n          <div class=\"" + prefix.default.result + "-extra\"></div>\n        ";
        (0,dom_utils.setHtml)(node, template);
    };
    Result.prototype._setStatus = function (node, status) {
        node.classList.add(prefix.default.result + "-" + status);
        var ResultIcon = node.querySelector("." + prefix.default.result + "-icon");
        var I = ResultIcon.querySelector('i');
        var iconType = this._getStatusIcon(status);
        var otherStatus = ['403', '404', '500'];
        if (otherStatus.includes(status)) {
            ResultIcon.classList.add(prefix.default.result + "-image");
            ResultIcon.removeChild(I);
            (0,dom_utils.setHtml)(ResultIcon, "<img src=\"" + iconType + "\" alt=\"result\" />");
        }
        else {
            I.classList.add(prefix.default.icon + "-" + iconType);
        }
    };
    Result.prototype._setTitle = function (node, title, subTitle) {
        var ResultTitle = node.querySelector("." + prefix.default.result + "-title");
        var ResultSubTitle = node.querySelector("." + prefix.default.result + "-subtitle");
        (0,dom_utils.setHtml)(ResultTitle, title);
        (0,dom_utils.setHtml)(ResultSubTitle, subTitle);
    };
    Result.prototype._setExtraContent = function (node, content) {
        var ResultExtra = node.querySelector("." + prefix.default.result + "-extra");
        (0,dom_utils.setHtml)(ResultExtra, content);
    };
    Result.prototype._setCustomIcon = function (node, icon) {
        if (!icon)
            return;
        var ResultIcon = node.querySelector("." + prefix.default.result + "-icon > i");
        ResultIcon.className = prefix.default.icon + " " + prefix.default.icon + "-" + icon;
    };
    Result.prototype._setComplexDesc = function (node, child) {
        var ResultContent = node.querySelector("." + prefix.default.result + "-content");
        if (!child) {
            node.removeChild(ResultContent);
            return;
        }
        ResultContent === null || ResultContent === void 0 ? void 0 : ResultContent.appendChild(child);
    };
    Result.prototype._getStatusIcon = function (status) {
        var icons = {
            info: 'ios-alert',
            success: 'ios-checkmark-circle',
            warning: 'ios-warning',
            error: 'ios-close-circle',
            '403': result_403,
            '404': result_404,
            '500': result_500
        };
        // @ts-ignore
        return icons[status] || icons.info;
    };
    Result.prototype._attrs = function (node) {
        return {
            status: (0,dom_utils.getStrTypeAttr)(node, 'status', 'info'),
            icon: (0,dom_utils.getStrTypeAttr)(node, 'icon', ''),
            title: (0,dom_utils.getStrTypeAttr)(node, 'title', ''),
            extra: (0,dom_utils.getStrTypeAttr)(node, 'extra', ''),
            subTitle: (0,dom_utils.getStrTypeAttr)(node, 'subtitle', '')
        };
    };
    return Result;
}());
/* harmony default export */ var result = (Result);

;// CONCATENATED MODULE: ./src/components/result/index.ts

/* harmony default export */ var components_result = (result);

;// CONCATENATED MODULE: ./src/components/spin/spin.ts




var spinZIndex = 2010;
var Spin = /** @class */ (function () {
    function Spin() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-spin', { all: true });
        this._create(this.components);
    }
    Spin.prototype.show = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.content, content = _c === void 0 ? '' : _c;
        scrollable_scrollable({ scroll: false, lock: false });
        var template = "\n        <div class=\"" + prefix.default.spin + "-fullscreen " + prefix.default.spin + "-fullscreen-wrapper\"\n         style=\"z-index: " + spinZIndex++ + "\">\n          <r-spin fix class=\"" + prefix.default.spin + "-fullscreen \n           " + (content ? prefix.default.spin + "-show-text" : '') + "\" size=\"large\">\n            " + this._createChildTemplate(content) + "\n          </r-spin>\n         </div>\n         ";
        var fragment = document.createRange().createContextualFragment(template);
        document.body.appendChild(fragment);
        CssTransition((0,dom_utils.$el)("." + prefix.default.spin + "-fullscreen"), {
            inOrOut: 'in',
            enterCls: 'rab-fade-in'
        });
    };
    Spin.prototype.hide = function () {
        scrollable_scrollable({ scroll: true, lock: true });
        var spinElem = (0,dom_utils.$el)("." + prefix.default.spin + "-fullscreen");
        if (spinElem)
            destroyElem(spinElem, { fadeOut: true });
    };
    Spin.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var customContent = (0,dom_utils.setHtml)(node);
            customContent ? node.classList.add(prefix.default.spin + "-show-text") : '';
            (0,dom_utils.setHtml)(node, _this._createChildTemplate(customContent));
        });
    };
    Spin.prototype._createChildTemplate = function (content) {
        var template = "\n          <div class=\"" + prefix.default.spin + "-main\">\n            <span class=\"" + prefix.default.spin + "-dot\"></span>\n            <div class=\"" + prefix.default.spin + "-text\">" + content + "</div>\n          </div>\n        ";
        return template;
    };
    return Spin;
}());
/* harmony default export */ var spin = (Spin);

;// CONCATENATED MODULE: ./src/components/spin/index.ts

/* harmony default export */ var components_spin = (spin);

;// CONCATENATED MODULE: ./src/components/steps/steps.ts
/* eslint-disable @typescript-eslint/no-non-null-assertion */




var Steps = /** @class */ (function () {
    function Steps() {
        this.VERSION = '1.0';
        this.components = (0,dom_utils.$el)('r-steps', { all: true });
        this._create(this.components);
    }
    Steps.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'steps');
        var _a = Steps.prototype, _updateStatus = _a._updateStatus, _getCurrent = _a._getCurrent;
        var oldCurrent = _getCurrent(target);
        return {
            setSteps: function (_a) {
                var current = _a.current, status = _a.status;
                if (current !== oldCurrent) {
                    if (!current && current !== 0) {
                        warn('The current property is missing in the Steps configuration');
                        return;
                    }
                    else if ((current && isNum(current)) || (status && isStr(status))) {
                        _updateStatus(target, current, status);
                    }
                }
            },
            setChildren: function (_a) {
                var idx = _a.idx, title = _a.title, content = _a.content;
                // 如果没有传入索引值则默认为第一个
                if (!idx)
                    idx = 0;
                var ChildCurrent = target.children[idx];
                var ChildTitle = ChildCurrent.querySelector("." + prefix.default.steps + "-title");
                var ChildContent = ChildCurrent.querySelector("." + prefix.default.steps + "-content");
                if (title && isStr(title))
                    (0,dom_utils.setText)(ChildTitle, title);
                if (content && isStr(content))
                    (0,dom_utils.setText)(ChildContent, content);
            }
        };
    };
    Steps.prototype._create = function (components) {
        var _this_1 = this;
        components.forEach(function (node) {
            _this_1._setDirection(node);
            _this_1._updateStatus(node, _this_1._getCurrent(node));
            _this_1._createStepItem(node);
            (0,dom_utils.removeAttrs)(node, ['status']);
        });
    };
    Steps.prototype._createStepItem = function (node) {
        // 该父节点下的所有 r-step 标签
        var children = node.children;
        var i = 0;
        var length = children.length;
        for (; i < length; i++) {
            var child = children[i];
            var uid = "steps" + i;
            var idxText = "" + (i + 1);
            var title = this._getTitle(child);
            var content = this._getContent(child);
            child.innerHTML = "\n             <div class=\"" + prefix.default.steps + "-tail\"><i></i></div>\n             <div class=\"" + prefix.default.steps + "-head\">\n                 <div class=\"" + prefix.default.steps + "-head-inner\">\n                    <span data-steps-uid=" + uid + " data-step=\"current\">" + idxText + "</span>\n                 </div>\n             </div>\n             <div class=\"" + prefix.default.steps + "-main\">\n                 <div class=\"" + prefix.default.steps + "-title\">" + title + "</div>\n                 <div class=\"" + prefix.default.steps + "-content\">" + content + "</div>\n             </div>\n            ";
            this._setCustomIcon(child);
            this._setNextErrorStatus(child);
            this._autoSetFinishOrErrorIcon(child, i);
            (0,dom_utils.removeAttrs)(child, ['title', 'content', 'icon']);
        }
    };
    Steps.prototype._setDirection = function (node) {
        if (!node.getAttribute('direction'))
            node.setAttribute('direction', 'horizontal');
    };
    Steps.prototype._updateStatus = function (parent, current, status) {
        var _this = Steps.prototype;
        var total = parent.children.length - 1;
        var currentStep = parent.children[current];
        validComps(currentStep, 'step');
        _this._validIndexCheck(total, current, currentStep);
        var isParentStatus = parent.getAttribute('status');
        var isChildStatus = currentStep.getAttribute('status');
        var currentStatus;
        // 如果当前步骤没有状态则默认设为 process 状态
        if (!isParentStatus && !isChildStatus) {
            currentStatus = 'process';
            // 父节点有设置状态并且当前选中的子节点没有设置，则采用父节点的状态，否则反之
        }
        else if (isParentStatus && !isChildStatus) {
            currentStatus = isParentStatus;
        }
        else if (isChildStatus && isChildStatus !== 'wait') {
            currentStatus = isChildStatus;
        }
        else {
            currentStatus = 'process';
        }
        _this._setCurrentStatus(currentStep, !status ? currentStatus : status);
        _this._setPrevStatus(currentStep);
        _this._setNextStatus(currentStep);
        _this._setNextErrorStatus(currentStep);
        setTimeout(function () { return _this._autoSetFinishOrErrorIcon(currentStep, current); }, 0);
    };
    Steps.prototype._setCurrentStatus = function (node, status) {
        if (status) {
            node.setAttribute('status', status);
        }
        else {
            // 如果没有设置status则默认为wait
            node.setAttribute('status', this._geStatus(node) || 'wait');
        }
    };
    Steps.prototype._setPrevStatus = function (node) {
        var _this_1 = this;
        (0,dom_utils.prevAll)(node).forEach(function (prevNode) {
            // 除去最开始的步骤，当前步骤是正在进行中的，那么它前面的状态一定是完成或者错误
            // 因此，前面的步骤不能随便的设为等待或进行中状态
            // 除了 error 状态其余前面的节点都覆盖为 finish 状态
            if (_this_1._geStatus(prevNode) !== 'error') {
                _this_1._setCurrentStatus(prevNode, 'finish');
            }
        });
    };
    Steps.prototype._setNextStatus = function (node) {
        var _this_1 = this;
        // 从当前节点位置开始，设置其后面的所有节点状态为 wait
        (0,dom_utils.nextAll)(node).forEach(function (nextNode) { return _this_1._setCurrentStatus(nextNode); });
    };
    Steps.prototype._setNextErrorStatus = function (node) {
        if (this._geStatus(node) === 'error' &&
            node.previousElementSibling &&
            this._geStatus(node.previousElementSibling) === 'error') {
            node.previousElementSibling.classList.add(prefix.default.steps + "-next-error");
        }
    };
    // 设置已被标记状态为成功或失败的图标
    Steps.prototype._autoSetFinishOrErrorIcon = function (node, current) {
        var _this_1 = this;
        if (this._getIcon(node))
            return;
        var prefixIconCls = prefix.default.steps + "-icon " + prefix.default.icon + " " + prefix.default.icon + "-";
        var currentStatus = this._geStatus(node);
        var setFinishOrErrorIcon = function (status, children) {
            if (status === 'finish' || status === 'error') {
                (0,dom_utils.setHtml)(children, '');
                if (status === 'finish')
                    children.className = prefixIconCls + "ios-checkmark";
                if (status === 'error')
                    children.className = prefixIconCls + "ios-close";
            }
        };
        // 判断当前选中的步骤的状态是完成还是错误
        if (currentStatus === 'finish' || currentStatus === 'error') {
            var uid = "[data-steps-uid=" + current + "]";
            var HeadInner = node.querySelector(uid);
            setFinishOrErrorIcon(currentStatus, HeadInner);
        }
        // 判断之前的所有步骤的状态
        (0,dom_utils.prevAll)(node).forEach(function (prevNode) {
            var prevStatus = _this_1._geStatus(prevNode);
            // 如果之前的步骤的状态存在有完成或者是错误的则添加对应图标
            if (prevStatus === 'finish' || prevStatus === 'error') {
                var HeadInner = prevNode.querySelector('[data-step="current"]');
                setFinishOrErrorIcon(prevStatus, HeadInner);
            }
        });
    };
    Steps.prototype._setCustomIcon = function (node) {
        var iconType = this._getIcon(node);
        if (!iconType)
            return;
        node.classList.add(prefix.default.steps + "-custom");
        var child = node.querySelector("." + prefix.default.steps + "-head-inner").children[0];
        (0,dom_utils.setHtml)(child, '');
        child.className = prefix.default.steps + "-icon " + prefix.default.icon + " " + prefix.default.icon + "-" + iconType;
    };
    Steps.prototype._getCurrent = function (node) {
        return Number(node.getAttribute('current')) || 0;
    };
    Steps.prototype._geStatus = function (node) {
        return node.getAttribute('status');
    };
    Steps.prototype._getTitle = function (node) {
        return node.getAttribute('title') || '';
    };
    Steps.prototype._getContent = function (node) {
        return node.getAttribute('content') || '';
    };
    Steps.prototype._getIcon = function (node) {
        return node.getAttribute('icon') || '';
    };
    // 判断设置的索引值是否超过了最大索引值
    Steps.prototype._validIndexCheck = function (total, current, inode) {
        // 如果超过最大索引值则该节点是不存在的
        if (!inode) {
            warn("The current total number of steps is only " + total + ", you cannot set it to " + current);
            return;
        }
    };
    return Steps;
}());
/* harmony default export */ var steps = (Steps);

;// CONCATENATED MODULE: ./src/components/steps/index.ts

/* harmony default export */ var components_steps = (steps);

;// CONCATENATED MODULE: ./src/components/switch/switch.ts



var Switch = /** @class */ (function () {
    function Switch() {
        this.VERSION = '1.0';
        this.components = (0,dom_utils.$el)('r-switch', { all: true });
        this._create(this.components);
    }
    Switch.prototype.onChange = function (elem, cb) {
        var _this = this;
        var target = (0,dom_utils.$el)(elem);
        validComps(target, 'switch');
        // 将当前选中的组件作为参数返回出去
        var $this = target;
        (0,dom_utils.bind)(target, 'click', function () {
            var status = _this._getStatus(target);
            isFn(cb, [status, $this]);
        });
    };
    Switch.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._init(node);
            _this._handleChange(node, _this._getStatus(node));
        });
    };
    Switch.prototype._init = function (node) {
        // 初始化按键切换索引
        node.setAttribute('tabindex', '0');
        // 初始化未选中状态的开关
        if (node.getAttribute('checked') !== 'true') {
            node.setAttribute('checked', 'false');
        }
        this._setStatusText(node, this._getStatus(node));
        this._setStatusColor(node, this._getStatus(node));
    };
    // 设置自定义的状态文本
    Switch.prototype._setStatusText = function (node, status) {
        var _a = this._getStatusText(node), openText = _a.openText, closeText = _a.closeText;
        if (!openText || !closeText)
            return;
        // 创建文本容器
        var TextBox = document.createElement('span');
        TextBox.className = prefix.default.switch + "-inner";
        node.appendChild(TextBox);
        status ? (0,dom_utils.setHtml)(TextBox, openText) : (0,dom_utils.setHtml)(TextBox, closeText);
    };
    // 设置自定义的状态颜色
    Switch.prototype._setStatusColor = function (node, status) {
        var _a = this._getColor(node), trueColor = _a.trueColor, falseColor = _a.falseColor;
        if (!trueColor || !falseColor)
            return;
        if (status) {
            (0,dom_utils.setCss)(node, 'borderColor', trueColor);
            (0,dom_utils.setCss)(node, 'backgroundColor', trueColor);
        }
        else {
            (0,dom_utils.setCss)(node, 'borderColor', falseColor);
            (0,dom_utils.setCss)(node, 'backgroundColor', falseColor);
        }
    };
    Switch.prototype._handleChange = function (node, status) {
        var _this = this;
        var ev_change = function () {
            if (_this._isDisabled(node))
                return false;
            if (_this._isLoading(node))
                return false;
            status ? (status = false) : (status = true);
            node.setAttribute('checked', "" + status);
            var _a = _this._getStatusText(node), openText = _a.openText, closeText = _a.closeText;
            _this._changeStatusText(node, status, openText, closeText);
            _this._setStatusColor(node, status);
        };
        node.addEventListener('click', ev_change);
    };
    Switch.prototype._changeStatusText = function (node, status, openText, closeText) {
        // 获取当前开关下的文本容器
        var TextBox = node.querySelector("." + prefix.default.switch + "-inner");
        if (TextBox) {
            status ? (0,dom_utils.setHtml)(TextBox, openText) : (0,dom_utils.setHtml)(TextBox, closeText);
        }
    };
    Switch.prototype._getStatus = function (node) {
        // 转换为真实布尔类型
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return JSON.parse(node.getAttribute('checked'));
    };
    Switch.prototype._isDisabled = function (node) {
        return (node.getAttribute('disabled') === 'disabled' ||
            node.getAttribute('disabled') === 'true' ||
            node.getAttribute('disabled') === '');
    };
    Switch.prototype._isLoading = function (node) {
        return node.getAttribute('rb-loading') === 'true';
    };
    Switch.prototype._getStatusText = function (node) {
        return {
            openText: node.getAttribute('rb-open'),
            closeText: node.getAttribute('rb-close')
        };
    };
    Switch.prototype._getColor = function (node) {
        return {
            trueColor: node.getAttribute('rb-true-color'),
            falseColor: node.getAttribute('rb-false-color')
        };
    };
    return Switch;
}());
/* harmony default export */ var switch_switch = (Switch);

;// CONCATENATED MODULE: ./src/components/switch/index.ts

/* harmony default export */ var components_switch = (switch_switch);

;// CONCATENATED MODULE: ./src/components/tabs/tabs.ts



var Tabs = /** @class */ (function () {
    function Tabs() {
        this.VERSION = '1.0';
        this.components = (0,dom_utils.$el)('r-tabs', { all: true });
        this._create(this.components);
    }
    Tabs.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'tabs');
        var TabTabs = target.querySelectorAll("." + prefix.default.tabs + "-tab");
        var TabPanes = target.querySelectorAll('r-tab-pane');
        var _a = Tabs.prototype, _changeTab = _a._changeTab, _changePane = _a._changePane;
        return {
            get activeKey() {
                return '0';
            },
            set activeKey(newVal) {
                if (!isStr(newVal))
                    return;
                TabPanes.forEach(function (pane, i) {
                    var p = pane;
                    if (newVal !== p.dataset.paneKey)
                        return;
                    _changeTab(TabTabs[i], true);
                    _changePane([false, p.parentElement, i, 'true', p]);
                });
            },
            events: function (_a) {
                var onClick = _a.onClick, onTabRemove = _a.onTabRemove;
                TabTabs.forEach(function (tab, i) {
                    var tabClose = tab.querySelector("." + prefix.default.tabs + "-close");
                    var clickEv = function () {
                        var TabPane = TabPanes[i];
                        var key = TabPane.dataset.paneKey;
                        onClick && isFn(onClick, key);
                        if (!tabClose)
                            return;
                        onTabRemove && isFn(onTabRemove, key);
                    };
                    (0,dom_utils.bind)(tab, 'click', clickEv);
                    if (!tabClose)
                        return;
                    (0,dom_utils.bind)(tabClose, 'click', clickEv);
                });
            }
        };
    };
    Tabs.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var tabPanes = node.querySelectorAll('r-tab-pane');
            var _a = _this._attrs(node), defaultActivekey = _a.defaultActivekey, size = _a.size, type = _a.type, closable = _a.closable, animated = _a.animated;
            _this._setType(node, type);
            _this._setSize(node, type, size);
            _this._setNoAnimation(node, animated);
            _this._setBodyTemplate(node);
            _this._setTabPane([node, tabPanes, defaultActivekey, type, animated, closable]);
            (0,dom_utils.removeAttrs)(node, ['defaultActivekey', 'type', 'size', 'closable', 'animated']);
        });
    };
    Tabs.prototype._setType = function (node, type) {
        if (type !== 'card')
            return;
        node.classList.add(prefix.default.tabs + "-" + type);
    };
    Tabs.prototype._setSize = function (node, type, size) {
        if (type !== 'line' || size !== 'small')
            return;
        node.classList.add(prefix.default.tabs + "-mini");
    };
    Tabs.prototype._setNoAnimation = function (node, animated) {
        if (animated === 'true')
            return;
        node.classList.add(prefix.default.tabs + "-no-animation");
    };
    Tabs.prototype._setBodyTemplate = function (node) {
        var template = "\n          <div class=\"" + prefix.default.tabs + "-bar\">\n              <div tabindex=\"0\" class=\"" + prefix.default.tabs + "-nav-container\">\n                  <div class=\"" + prefix.default.tabs + "-nav-wrap\">\n                     <div class=\"" + prefix.default.tabs + "-nav\"></div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"" + prefix.default.tabs + "-content " + prefix.default.tabs + "-content-animated\"></div>";
        (0,dom_utils.setHtml)(node, template);
    };
    Tabs.prototype._setTabPane = function (args) {
        var _this = this;
        var node = args[0], panes = args[1], activekey = args[2], type = args[3], animated = args[4], closable = args[5];
        var TabNav = node.querySelector("." + prefix.default.tabs + "-nav");
        var TabPaneContainer = node.querySelector("." + prefix.default.tabs + "-content");
        var Fragment = document.createDocumentFragment();
        panes.forEach(function (pane, idx) {
            var _a = _this._paneAttrs(pane), key = _a.key, tab = _a.tab, icon = _a.icon, separateClose = _a.closable, disabled = _a.disabled;
            var TabsTab = _this._setTab(TabNav, tab);
            _this._setTabIcon(TabsTab, icon);
            _this._setTabClosable([TabsTab, type, closable, separateClose]);
            _this._setTabDisabled(TabsTab, disabled);
            (0,dom_utils.setCss)(pane, 'display', "" + (animated === 'true' ? 'block' : 'none'));
            _this._setPaneKey(pane, key, idx);
            _this._setActive([closable, TabPaneContainer, TabsTab, pane, activekey, idx, animated]);
            _this._handleToggle([closable, TabsTab, pane, idx, disabled, animated]);
            _this._handleRemove(TabsTab, pane);
            Fragment.appendChild(pane);
            (0,dom_utils.removeAttrs)(pane, ['key', 'tab', 'icon', 'disabled', 'closable']);
        });
        TabPaneContainer === null || TabPaneContainer === void 0 ? void 0 : TabPaneContainer.appendChild(Fragment);
    };
    Tabs.prototype._setTab = function (tabsNav, content) {
        var TabsTab = (0,dom_utils.createElem)('div');
        TabsTab.className = prefix.default.tabs + "-tab";
        (0,dom_utils.setHtml)(TabsTab, content);
        tabsNav.appendChild(TabsTab);
        return TabsTab;
    };
    Tabs.prototype._setTabIcon = function (tabElm, icon) {
        if (!icon)
            return;
        var Icon = (0,dom_utils.createElem)('icon');
        Icon.className = prefix.default.icon + " " + prefix.default.icon + "-" + icon;
        tabElm.prepend(Icon);
    };
    Tabs.prototype._setTabClosable = function (args) {
        var tabElm = args[0], type = args[1], closable = args[2], separateClose = args[3];
        if (!closable || type !== 'card')
            return;
        var CloseIcon = (0,dom_utils.createElem)('icon');
        CloseIcon.className = prefix.default.icon + " " + prefix.default.icon + "-ios-close " + prefix.default.tabs + "-close";
        // 单独设置当前选项是否可以关闭页签
        if (separateClose === 'false')
            return;
        tabElm.appendChild(CloseIcon);
    };
    Tabs.prototype._setTabDisabled = function (tabsTab, disabled) {
        if (!disabled)
            return;
        tabsTab.classList.add(prefix.default.tabs + "-tab-disabled");
    };
    Tabs.prototype._setPaneKey = function (pane, key, idx) {
        // 当前面板的 key 如果不填则默认为其索引值
        // @ts-ignore
        pane.dataset.paneKey = !key ? idx : key;
    };
    Tabs.prototype._setActive = function (args) {
        var closable = args[0], paneContainer = args[1], tabsTab = args[2], pane = args[3], activekey = args[4], idx = args[5], animated = args[6];
        // @ts-ignore
        var isEqual = activekey === pane.dataset.paneKey;
        if (isEqual) {
            this._changeTab(tabsTab);
            this._changePane([closable, paneContainer, idx]);
        }
        (0,dom_utils.setCss)(pane, 'visibility', "" + (isEqual ? 'visible' : 'hidden'));
        if (animated === 'false') {
            (0,dom_utils.setCss)(pane, 'display', "" + (isEqual ? 'block' : 'none'));
        }
    };
    Tabs.prototype._handleToggle = function (args) {
        var _this = this;
        var closable = args[0], tabsTab = args[1], pane = args[2], idx = args[3], disabled = args[4], animated = args[5];
        (0,dom_utils.bind)(tabsTab, 'click', function () {
            if (disabled)
                return false;
            _this._changeTab(tabsTab);
            _this._changePane([closable, pane.parentElement, idx, animated, pane]);
        });
    };
    Tabs.prototype._handleRemove = function (tabsTab, pane) {
        var _this = this;
        var TabClose = tabsTab.querySelector("." + prefix.default.tabs + "-close");
        if (!TabClose)
            return;
        /**
         * @param elm1 tabs的选项
         * @param elm2 tabs的面板
         */
        var changeActive = function (elm1, elm2) {
            if (tabsTab.classList.contains(prefix.default.tabs + "-tab-active")) {
                _this._changeTab(elm1, false);
            }
            (0,dom_utils.setCss)(elm2, 'display', 'block');
            (0,dom_utils.setCss)(elm2, 'visibility', 'visible');
        };
        var removeEv = function () {
            var prevTab = tabsTab.previousElementSibling;
            var nextTab = tabsTab.nextElementSibling;
            var prevPane = pane.previousElementSibling;
            var nextPane = pane.nextElementSibling;
            if (nextTab && nextPane) {
                changeActive(nextTab, nextPane);
            }
            else if (prevTab && prevPane) {
                changeActive(prevTab, prevPane);
            }
            tabsTab.remove();
            pane.remove();
        };
        (0,dom_utils.bind)(TabClose, 'click', function (e) {
            e.stopPropagation();
            removeEv();
        });
    };
    Tabs.prototype._changeTab = function (tabsTab, siblingsChange) {
        if (siblingsChange === void 0) { siblingsChange = true; }
        tabsTab.classList.add(prefix.default.tabs + "-tab-active");
        tabsTab.classList.add(prefix.default.tabs + "-tab-focused");
        if (!siblingsChange)
            return;
        (0,dom_utils.siblings)(tabsTab).forEach(function (o) {
            o.classList.remove(prefix.default.tabs + "-tab-active");
            o.classList.remove(prefix.default.tabs + "-tab-focused");
        });
    };
    Tabs.prototype._changePane = function (args) {
        var closable = args[0], paneContainer = args[1], idx = args[2], animated = args[3], pane = args[4];
        // 如果选项卡启用了可关闭功能，则不使用动画切换，这为了减少 tab 删除操作的工作量
        if (!closable) {
            var translateX = idx * 100;
            (0,dom_utils.setCss)(paneContainer, 'transform', "translateX(-" + translateX + "%)");
        }
        // 是否要一并更改面板项
        if (!pane)
            return;
        (0,dom_utils.setCss)(pane, 'display', 'block');
        (0,dom_utils.setCss)(pane, 'visibility', 'visible');
        (0,dom_utils.siblings)(pane).forEach(function (o) {
            if (animated === 'false' || closable)
                (0,dom_utils.setCss)(o, 'display', 'none');
            (0,dom_utils.setCss)(o, 'visibility', 'hidden');
        });
    };
    Tabs.prototype._attrs = function (node) {
        return {
            defaultActivekey: (0,dom_utils.getStrTypeAttr)(node, 'defaultActivekey', '0'),
            type: (0,dom_utils.getStrTypeAttr)(node, 'type', 'line'),
            size: (0,dom_utils.getStrTypeAttr)(node, 'size', 'default'),
            animated: (0,dom_utils.getStrTypeAttr)(node, 'animated', 'true'),
            closable: (0,dom_utils.getBooleanTypeAttr)(node, 'closable')
        };
    };
    Tabs.prototype._paneAttrs = function (pane) {
        return {
            tab: (0,dom_utils.getStrTypeAttr)(pane, 'tab', ''),
            key: (0,dom_utils.getStrTypeAttr)(pane, 'key', ''),
            icon: (0,dom_utils.getStrTypeAttr)(pane, 'icon', ''),
            closable: (0,dom_utils.getStrTypeAttr)(pane, 'closable', 'true'),
            disabled: (0,dom_utils.getBooleanTypeAttr)(pane, 'disabled')
        };
    };
    return Tabs;
}());
/* harmony default export */ var tabs = (Tabs);

;// CONCATENATED MODULE: ./src/components/tabs/index.ts

/* harmony default export */ var components_tabs = (tabs);

// EXTERNAL MODULE: ./src/components/time/time.ts
var time = __webpack_require__("./src/components/time/time.ts");
;// CONCATENATED MODULE: ./src/components/time/index.ts

/* harmony default export */ var components_time = (time.default);

;// CONCATENATED MODULE: ./src/components/timeline/timeline.ts


var Timeline = /** @class */ (function () {
    function Timeline() {
        this.VERSION = '1.0';
        this.components = (0,dom_utils.$el)('r-timeline > r-timeline-item', { all: true });
        this._create(this.components);
    }
    Timeline.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var TimelineItem = node;
            var TimelineTail = (0,dom_utils.createElem)('div');
            var TimelineHead = (0,dom_utils.createElem)('div');
            var TimelineContent = (0,dom_utils.createElem)('div');
            _this._setCls(TimelineTail, TimelineHead, TimelineContent);
            _this._setColor(TimelineItem, TimelineHead);
            _this._setDot(TimelineItem, TimelineHead);
            _this._setContent(TimelineItem, TimelineContent);
            TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);
            (0,dom_utils.removeAttrs)(TimelineItem, ['dot']);
        });
    };
    Timeline.prototype._setCls = function (node1, node2, node3) {
        node1.className = prefix.default.timeline + "-item-tail";
        node2.className = prefix.default.timeline + "-item-head";
        node3.className = prefix.default.timeline + "-item-content";
    };
    Timeline.prototype._setContent = function (parent, node1) {
        (0,dom_utils.setHtml)(node1, parent.innerHTML);
        // 清空原先的内容
        (0,dom_utils.setHtml)(parent, '');
    };
    Timeline.prototype._setColor = function (parent, node) {
        var colors = this._getStatusColor(parent);
        // 设置预设颜色或者自定义颜色
        if (colors === 'blue' || colors === 'red' || colors === 'gray' || colors === 'green') {
            node.classList.add(prefix.default.timeline + "-item-head-" + colors);
        }
        else {
            (0,dom_utils.setCss)(node, 'color', colors);
            (0,dom_utils.setCss)(node, 'borderColor', colors);
        }
    };
    // 自定义时间轴点的内容
    Timeline.prototype._setDot = function (parent, node) {
        if (!this._getDotContent(parent))
            return;
        node.classList.add(prefix.default.timeline + "-item-head-custom");
        var content = this._getDotContent(parent);
        (0,dom_utils.setHtml)(node, content);
    };
    Timeline.prototype._getStatusColor = function (node) {
        return node.getAttribute('color') || 'blue';
    };
    Timeline.prototype._getDotContent = function (parent) {
        return parent.getAttribute('dot') || '';
    };
    return Timeline;
}());
/* harmony default export */ var timeline = (Timeline);

;// CONCATENATED MODULE: ./src/components/timeline/index.ts

/* harmony default export */ var components_timeline = (timeline);

;// CONCATENATED MODULE: ./src/components/tooltip/tooltip.ts




var tooltipShowTimer;
var tooltipEvTimer;
var Tooltip = /** @class */ (function () {
    function Tooltip() {
        this.VERSION = 'v1.0';
        this.components = (0,dom_utils.$el)('r-tooltip', { all: true });
        this._create(this.components);
        scrollUpdate();
    }
    Tooltip.prototype.config = function (el) {
        var target = (0,dom_utils.$el)(el);
        validComps(target, 'tooltip');
        var _a = Tooltip.prototype, _getDelay = _a._getDelay, _getIsAlways = _a._getIsAlways, _getIsDisabled = _a._getIsDisabled;
        var popper = target.querySelector("." + prefix.default.tooltip + "-popper");
        var popperText = target.querySelector("." + prefix.default.tooltip + "-inner");
        return {
            get content() {
                return (0,dom_utils.setText)(popperText);
            },
            set content(newVal) {
                if (isStr(newVal) || isNum(newVal))
                    (0,dom_utils.setHtml)(popperText, "" + newVal);
            },
            events: function (_a) {
                var onShow = _a.onShow, onHide = _a.onHide;
                if (_getIsAlways(target) || _getIsDisabled(target))
                    return;
                var delay = _getDelay(target);
                handleHoverShowAndHideEvents({
                    reference: target,
                    popper: popper,
                    datasetVal: 'tooltipShow',
                    showCb: onShow,
                    hideCb: onHide,
                    delay: delay,
                    timer: tooltipEvTimer
                });
            }
        };
    };
    Tooltip.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._createTooltipNodes(node);
            (0,dom_utils.removeAttrs)(node, ['content', 'theme', 'delay', 'max-width', 'disabled', 'always']);
        });
    };
    Tooltip.prototype._createTooltipNodes = function (reference) {
        var TooltipRef = (0,dom_utils.createElem)('div');
        var TooltipPopper = (0,dom_utils.createElem)('div');
        var TooltipContent = (0,dom_utils.createElem)('div');
        var TooltipArrow = (0,dom_utils.createElem)('div');
        var TooltipInner = (0,dom_utils.createElem)('div');
        this._setCls(reference, [
            TooltipRef,
            TooltipPopper,
            TooltipContent,
            TooltipArrow,
            TooltipInner
        ]);
        this._setTip(reference, TooltipInner);
        this._setMaxWidth(reference, TooltipInner);
        var disabledShow = this._getIsDisabled(reference);
        var alwaysShow = this._setIsAlwaysShow(reference, TooltipPopper);
        // 如果 tooltip 没有设置为总是可见或者禁用显示，则正常鼠标移入移出事件
        if (!alwaysShow && !disabledShow) {
            this._triggerDisplay('enter', reference, TooltipPopper);
            this._triggerDisplay('leave', reference, TooltipPopper);
        }
        var firstElementChild = reference.firstElementChild;
        // 只选取第一个子元素作为宿主元素
        if (firstElementChild)
            TooltipRef.appendChild(firstElementChild);
        TooltipPopper.appendChild(TooltipContent);
        TooltipPopper.append(TooltipArrow, TooltipInner);
        reference.append(TooltipRef, TooltipPopper);
    };
    Tooltip.prototype._setCls = function (reference, nodes) {
        // 获取主题颜色
        var theme = this._getTheme(reference);
        var nodesCls = [
            prefix.default.tooltip + "-rel",
            prefix.default.tooltip + "-popper " + prefix.default.tooltip + "-" + theme,
            prefix.default.tooltip + "-content",
            prefix.default.tooltip + "-arrow",
            prefix.default.tooltip + "-inner"
        ];
        // 批量添加样式类名
        var i = 0;
        var length = nodes.length;
        for (; i < length; i++) {
            var node = nodes[i];
            node.className = "" + nodesCls[i];
        }
    };
    Tooltip.prototype._triggerDisplay = function (trigger, reference, popper) {
        var _this = this;
        var ev = function () {
            if (trigger === 'enter')
                _this._initSetPopper(reference, popper);
            CssTransition(popper, {
                inOrOut: trigger === 'enter' ? 'in' : 'out',
                rmCls: true,
                enterCls: 'zoom-big-fast-enter',
                leaveCls: 'zoom-big-fast-leave',
                timeout: 85
            });
        };
        var delay = this._getDelay(reference);
        if (trigger === 'enter') {
            reference.addEventListener('mouseenter', function () {
                tooltipShowTimer = setTimeout(function () {
                    ev();
                }, delay);
            });
            toggleUpdate(popper, 'hover', reference, delay);
        }
        else {
            reference.addEventListener('mouseleave', function () {
                clearTimeout(tooltipShowTimer);
                ev();
            });
        }
    };
    Tooltip.prototype._setTip = function (reference, popper) {
        return (popper.textContent = this._getTip(reference));
    };
    Tooltip.prototype._setMaxWidth = function (reference, popper) {
        var maxWidth = this._getMaxWidth(reference);
        if (maxWidth <= 0)
            return;
        (0,dom_utils.setCss)(popper, 'maxWidth', maxWidth + "px");
        popper.classList.add(prefix.default.tooltip + "-inner-with-width");
    };
    Tooltip.prototype._initSetPopper = function (reference, popper) {
        var offset = this._getOffset(reference);
        var placement = this._getPlacement(reference);
        popper.setAttribute('x-placement', placement);
        return _newCreatePopper(reference, popper, placement, offset);
    };
    Tooltip.prototype._setIsAlwaysShow = function (reference, popper) {
        var isAlways = this._getIsAlways(reference);
        if (isAlways) {
            (0,dom_utils.setCss)(popper, 'display', '');
            this._initSetPopper(reference, popper);
            return true;
        }
        (0,dom_utils.setCss)(popper, 'display', 'none');
    };
    Tooltip.prototype._getTip = function (node) {
        return node.getAttribute('content') || '';
    };
    Tooltip.prototype._getPlacement = function (node) {
        return node.getAttribute('placement') || 'bottom';
    };
    Tooltip.prototype._getDelay = function (node) {
        // 默认 100毫秒的延迟，防止鼠标快速经过时也会显示tooltip
        return Number(node.getAttribute('delay')) || 100;
    };
    Tooltip.prototype._getIsAlways = function (node) {
        return node.getAttribute('always') === 'true';
    };
    Tooltip.prototype._getIsDisabled = function (node) {
        return node.getAttribute('disabled') === 'true';
    };
    Tooltip.prototype._getTheme = function (node) {
        return node.getAttribute('theme') || 'dark';
    };
    Tooltip.prototype._getMaxWidth = function (node) {
        return Number(node.getAttribute('max-width')) || 0;
    };
    Tooltip.prototype._getOffset = function (node) {
        return Number(node.getAttribute('offset')) || 0;
    };
    return Tooltip;
}());
/* harmony default export */ var tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/components/tooltip/index.ts

/* harmony default export */ var components_tooltip = (tooltip);

;// CONCATENATED MODULE: ./src/rabbit-design.ts


























;// CONCATENATED MODULE: ./src/styles/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/index.ts


// @ts-ignore
/* harmony default export */ var src = (window.Rabbit = rabbit_design_namespaceObject);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=rabbit.js.map