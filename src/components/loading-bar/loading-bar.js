import { __assign } from "tslib";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { $el, createElem, setCss } from '../../dom-utils';
import { CssTransition } from '../../mixins';
import { type } from '../../utils';
import PREFIX from '../prefix';
// 全局配置
var DEFAULT_LOADINGBAR = {
    color: 'primary',
    height: 2,
    duration: 800,
    failedColor: 'error'
};
var timer;
function createLoadingBarInstance() {
    var LoadingBar = createElem('div');
    var LoadingBarInner = createElem('div');
    LoadingBar.className = "" + PREFIX.loadingBar;
    LoadingBarInner.className = PREFIX.loadingBar + "-inner";
    setColor('primary', LoadingBarInner);
    // 初始进度
    setCss(LoadingBarInner, 'width', '0%');
    // 设置进度条高度为全局配置的高度
    setTimeout(function () {
        var height = DEFAULT_LOADINGBAR.height + "px";
        setCss(LoadingBar, 'height', height);
    }, 0);
    LoadingBar.appendChild(LoadingBarInner);
    document.body.appendChild(LoadingBar);
    return LoadingBar;
}
// 设置进度函数
function r_update(options) {
    var LBar = $el("." + PREFIX.loadingBar);
    var LBarInner = $el("." + PREFIX.loadingBar + "-inner");
    // 设置进度
    setCss(LBarInner, 'width', options.percent + "%");
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
function hide() {
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
            setCss(elem, 'backgroundColor', DEFAULT_LOADINGBAR.failedColor);
            // 在隐藏的持续时间后初始化背景色
            setTimeout(function () {
                setCss(elem, 'backgroundColor', '');
            }, DEFAULT_LOADINGBAR.duration);
        }
        else {
            elem.classList.add(PREFIX.loadingBar + "-inner-failed-color-error");
            // 在隐藏的持续时间后设为初始颜色
            setTimeout(function () {
                elem.classList.remove(PREFIX.loadingBar + "-inner-failed-color-error");
            }, DEFAULT_LOADINGBAR.duration + 200);
        }
    }
    else if (status === 'primary') {
        // 是否使用全局配置的 color
        if (DEFAULT_LOADINGBAR.color && DEFAULT_LOADINGBAR.color !== 'primary') {
            setCss(elem, 'backgroundColor', DEFAULT_LOADINGBAR.color);
        }
        else {
            elem.classList.add(PREFIX.loadingBar + "-inner-color-primary");
        }
    }
}
var $LoadingBar = /** @class */ (function () {
    function $LoadingBar() {
        this.VERSION = 'v1.0';
        this.component = $el("." + PREFIX.loadingBar);
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
        hide();
    };
    $LoadingBar.prototype.error = function () {
        clearTimer();
        r_update({
            percent: 100,
            status: 'error',
            show: true
        });
        hide();
    };
    $LoadingBar.prototype.config = function (options) {
        if (options.color && type.isStr(options.color)) {
            DEFAULT_LOADINGBAR.color = options.color;
        }
        if (options.height && type.isNum(options.height)) {
            DEFAULT_LOADINGBAR.height = options.height;
        }
        if (options.duration && type.isNum(options.duration)) {
            DEFAULT_LOADINGBAR.duration = options.duration;
        }
        if (options.failedColor && type.isStr(options.failedColor)) {
            DEFAULT_LOADINGBAR.failedColor = options.failedColor;
        }
    };
    $LoadingBar.prototype.destroy = function () {
        clearTimer();
        // @ts-ignore
        document.body.removeChild($el("." + PREFIX.loadingBar));
    };
    return $LoadingBar;
}());
export default $LoadingBar;
