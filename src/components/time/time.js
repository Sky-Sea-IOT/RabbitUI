import moment from 'moment';
import PREFIX from '../prefix';
import { $el, getNumTypeAttr, getStrTypeAttr, removeAttrs, setText } from '../../dom-utils';
var Time = /** @class */ (function () {
    function Time() {
        this.VERSION = 'v1.0';
        this.components = $el('r-time', { all: true });
        this._create(this.components);
    }
    Time.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this.setTime(node);
            _this.handleClick(node);
            removeAttrs(node, ['time', 'type', 'hash', 'locale', 'interval']);
        });
    };
    Time.prototype.setTime = function (node) {
        var _a = this._attrs(node), type = _a.type, time = _a.time, locale = _a.locale, interval = _a.interval;
        var timeStamp = eval(time);
        var timer = function () {
            if (type === 'relative') {
                var relativeTime = moment(timeStamp).locale(locale).fromNow();
                if (relativeTime === '几秒前') {
                    relativeTime = '刚刚';
                    // 小于60秒则说明是要通过每隔多少秒更新时间而不是每隔多少分钟
                    if (interval < 60) {
                        setText(node, moment().startOf('second').format('s') + "\u79D2\u524D");
                    }
                    else {
                        setText(node, relativeTime);
                    }
                }
                else {
                    setText(node, relativeTime);
                }
            }
            else if (type === 'date') {
                var data = moment(timeStamp).format('YYYY-MM-DD');
                setText(node, data);
            }
            else if (type === 'datetime') {
                var dataTime = moment(timeStamp).format('YYYY-MM-DD-HH:mm:ss');
                setText(node, dataTime);
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
        node.classList.add(PREFIX.time + "-with-hash");
        node.addEventListener('click', function () { return (window.location.hash = hash); });
    };
    Time.prototype._attrs = function (node) {
        return {
            time: getStrTypeAttr(node, 'time', ''),
            type: getStrTypeAttr(node, 'type', 'relative'),
            hash: getStrTypeAttr(node, 'hash', ''),
            locale: getStrTypeAttr(node, 'locale', 'zh-cn'),
            interval: getNumTypeAttr(node, 'interval', 60)
        };
    };
    return Time;
}());
export default Time;
//# sourceMappingURL=time.js.map