/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { warn } from '../../mixins';
import { prevAll, nextAll, removeAttrs, $el, setText, setHtml } from '../../dom-utils';
import { type, validComps } from '../../utils';
import PREFIX from '../prefix';
var Steps = /** @class */ (function () {
    function Steps() {
        this.VERSION = '1.0';
        this.components = $el('r-steps', { all: true });
        this._create(this.components);
    }
    Steps.prototype.config = function (el) {
        var target = $el(el);
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
                    else if ((current && type.isNum(current)) || (status && type.isStr(status))) {
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
                var ChildTitle = ChildCurrent.querySelector("." + PREFIX.steps + "-title");
                var ChildContent = ChildCurrent.querySelector("." + PREFIX.steps + "-content");
                if (title && type.isStr(title))
                    setText(ChildTitle, title);
                if (content && type.isStr(content))
                    setText(ChildContent, content);
            }
        };
    };
    Steps.prototype._create = function (components) {
        var _this_1 = this;
        components.forEach(function (node) {
            _this_1._setDirection(node);
            _this_1._updateStatus(node, _this_1._getCurrent(node));
            _this_1._createStepItem(node);
            removeAttrs(node, ['status']);
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
            child.innerHTML = "\n             <div class=\"" + PREFIX.steps + "-tail\"><i></i></div>\n             <div class=\"" + PREFIX.steps + "-head\">\n                 <div class=\"" + PREFIX.steps + "-head-inner\">\n                    <span data-steps-uid=" + uid + " data-step=\"current\">" + idxText + "</span>\n                 </div>\n             </div>\n             <div class=\"" + PREFIX.steps + "-main\">\n                 <div class=\"" + PREFIX.steps + "-title\">" + title + "</div>\n                 <div class=\"" + PREFIX.steps + "-content\">" + content + "</div>\n             </div>\n            ";
            this._setCustomIcon(child);
            this._setNextErrorStatus(child);
            this._autoSetFinishOrErrorIcon(child, i);
            removeAttrs(child, ['title', 'content', 'icon']);
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
        prevAll(node).forEach(function (prevNode) {
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
        nextAll(node).forEach(function (nextNode) { return _this_1._setCurrentStatus(nextNode); });
    };
    Steps.prototype._setNextErrorStatus = function (node) {
        if (this._geStatus(node) === 'error' &&
            node.previousElementSibling &&
            this._geStatus(node.previousElementSibling) === 'error') {
            node.previousElementSibling.classList.add(PREFIX.steps + "-next-error");
        }
    };
    // 设置已被标记状态为成功或失败的图标
    Steps.prototype._autoSetFinishOrErrorIcon = function (node, current) {
        var _this_1 = this;
        if (this._getIcon(node))
            return;
        var prefixIconCls = PREFIX.steps + "-icon " + PREFIX.icon + " " + PREFIX.icon + "-";
        var currentStatus = this._geStatus(node);
        var setFinishOrErrorIcon = function (status, children) {
            if (status === 'finish' || status === 'error') {
                setHtml(children, '');
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
        prevAll(node).forEach(function (prevNode) {
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
        node.classList.add(PREFIX.steps + "-custom");
        var child = node.querySelector("." + PREFIX.steps + "-head-inner").children[0];
        setHtml(child, '');
        child.className = PREFIX.steps + "-icon " + PREFIX.icon + " " + PREFIX.icon + "-" + iconType;
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
export default Steps;
