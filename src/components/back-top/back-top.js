import { $el, bind, getNumTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';
var BackTop = /** @class */ (function () {
    function BackTop() {
        this.VERSION = 'v1.0';
        this.components = $el('r-back-top', { all: true });
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
            removeAttrs(node, ['right', 'bottom', 'height', 'duration']);
        });
    };
    BackTop.prototype._setRight = function (node, right) {
        setCss(node, 'right', right + "px");
    };
    BackTop.prototype._setBottom = function (node, bottom) {
        setCss(node, 'bottom', bottom + "px");
    };
    BackTop.prototype._setAppearance = function (node) {
        if (setHtml(node) && setHtml(node) !== ' ') {
            setHtml(node, node.innerHTML);
        }
        else {
            var template = "<div class=\"" + PREFIX.backtop + "-inner\">\n                                  <i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-arrow-up\"></i>\n                              </div>";
            setHtml(node, template);
        }
    };
    BackTop.prototype._handleScroll = function (node, height) {
        var visable = function (y) {
            var scrollY = Math.floor(y);
            var visibilityHeight = Math.floor(height);
            // 判断页面是否滚动到指定显示的高度
            scrollY >= visibilityHeight
                ? setCss(node, 'display', 'block')
                : setCss(node, 'display', '');
        };
        bind(window, 'scroll', function () {
            visable(window.scrollY);
        });
    };
    BackTop.prototype._handleClick = function (node, duration) {
        var _this = this;
        bind(node, 'click', function () {
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
            right: getNumTypeAttr(node, 'right', 30),
            bottom: getNumTypeAttr(node, 'bottom', 30),
            height: getNumTypeAttr(node, 'height', 400),
            duration: getNumTypeAttr(node, 'duration', 500)
        };
    };
    return BackTop;
}());
export default BackTop;
