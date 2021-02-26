import { $el, createElem, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';
var Timeline = /** @class */ (function () {
    function Timeline() {
        this.VERSION = '1.0';
        this.components = $el('r-timeline > r-timeline-item', { all: true });
        this._create(this.components);
    }
    Timeline.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            var TimelineItem = node;
            var TimelineTail = createElem('div');
            var TimelineHead = createElem('div');
            var TimelineContent = createElem('div');
            _this._setCls(TimelineTail, TimelineHead, TimelineContent);
            _this._setColor(TimelineItem, TimelineHead);
            _this._setDot(TimelineItem, TimelineHead);
            _this._setContent(TimelineItem, TimelineContent);
            TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);
            removeAttrs(TimelineItem, ['dot']);
        });
    };
    Timeline.prototype._setCls = function (node1, node2, node3) {
        node1.className = PREFIX.timeline + "-item-tail";
        node2.className = PREFIX.timeline + "-item-head";
        node3.className = PREFIX.timeline + "-item-content";
    };
    Timeline.prototype._setContent = function (parent, node1) {
        setHtml(node1, parent.innerHTML);
        // 清空原先的内容
        setHtml(parent, '');
    };
    Timeline.prototype._setColor = function (parent, node) {
        var colors = this._getStatusColor(parent);
        // 设置预设颜色或者自定义颜色
        if (colors === 'blue' || colors === 'red' || colors === 'gray' || colors === 'green') {
            node.classList.add(PREFIX.timeline + "-item-head-" + colors);
        }
        else {
            setCss(node, 'color', colors);
            setCss(node, 'borderColor', colors);
        }
    };
    // 自定义时间轴点的内容
    Timeline.prototype._setDot = function (parent, node) {
        if (!this._getDotContent(parent))
            return;
        node.classList.add(PREFIX.timeline + "-item-head-custom");
        var content = this._getDotContent(parent);
        setHtml(node, content);
    };
    Timeline.prototype._getStatusColor = function (node) {
        return node.getAttribute('color') || 'blue';
    };
    Timeline.prototype._getDotContent = function (parent) {
        return parent.getAttribute('dot') || '';
    };
    return Timeline;
}());
export default Timeline;
