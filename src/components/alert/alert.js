import { warn } from '../../mixins';
import { $el, bind, createElem, removeAttrs, setHtml } from '../../dom-utils';
import { type, destroyElem, validComps } from '../../utils';
import PREFIX from '../prefix';
var Alert = /** @class */ (function () {
    function Alert() {
        this.VERSION = 'v1.0';
        this.components = $el('r-alert', { all: true });
        this._create(this.components);
    }
    Alert.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'alert');
        var alertIcon = target === null || target === void 0 ? void 0 : target.querySelector("." + PREFIX.alert + "-icon");
        var alertMsg = target === null || target === void 0 ? void 0 : target.querySelector("." + PREFIX.alert + "-message");
        var alertDesc = target === null || target === void 0 ? void 0 : target.querySelector("." + PREFIX.alert + "-desc");
        return {
            // 设置消息标题
            get message() {
                return alertMsg;
            },
            set message(newVal) {
                if (newVal != alertMsg.innerHTML) {
                    setHtml(alertMsg, newVal);
                }
                return;
            },
            // 设置描述内容
            get desc() {
                return alertDesc;
            },
            set desc(newVal) {
                if (alertDesc) {
                    if (newVal != setHtml(alertDesc)) {
                        setHtml(alertDesc, newVal);
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
                    if (newVal != setHtml(alertIcon)) {
                        setHtml(alertIcon, newVal);
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
        var alertCloseBtn = target.querySelector("." + PREFIX.alert + "-close");
        bind(alertCloseBtn, 'click', function () { return type.isFn(cb, $this); });
    };
    Alert.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setIcon(node);
            _this._setMsg(node);
            _this._setDesc(node);
            _this._setCloseBtn(node);
            removeAttrs(node, ['message', 'desc', 'show-icon', 'closable', 'close-text']);
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
        var AlertIcon = createElem('span');
        AlertIcon.className = PREFIX.alert + "-icon";
        AlertIcon.innerHTML = "<i class=\"rab-icon rab-icon-" + iconType + "\"></i>";
        node.classList.add(PREFIX.alert + "-with-icon");
        node.prepend(AlertIcon);
    };
    Alert.prototype._setCloseText = function (node) {
        return node.getAttribute('close-text') || '';
    };
    Alert.prototype._setMsg = function (node) {
        var AlertMessage = createElem('div');
        var content = this._getMsg(node);
        AlertMessage.className = PREFIX.alert + "-message";
        setHtml(AlertMessage, content);
        node.prepend(AlertMessage);
    };
    Alert.prototype._setDesc = function (node) {
        if (!this._getDesc(node))
            return;
        var AlertDesc = createElem('div');
        var content = this._getDesc(node);
        AlertDesc.className = PREFIX.alert + "-desc";
        setHtml(AlertDesc, content);
        node.classList.add(PREFIX.alert + "-with-desc");
        node.appendChild(AlertDesc);
    };
    Alert.prototype._setCloseBtn = function (node) {
        if (!this._isClosable(node))
            return;
        var AlertCloseBtn = createElem('a');
        var closeText = this._setCloseText(node);
        AlertCloseBtn.className = PREFIX.alert + "-close";
        var text = closeText ? closeText : '<i class="rab-icon rab-icon-ios-close"></i>';
        setHtml(AlertCloseBtn, text);
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
export default Alert;
//# sourceMappingURL=alert.js.map