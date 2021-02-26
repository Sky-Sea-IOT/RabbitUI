import { CssTransition } from '../../mixins';
import { type, destroyElem, destroyElemByKey, useHTMLString } from '../../utils';
import { usePromiseCallback } from '../../mixins';
import PREFIX from '../prefix';
import { $el, createElem, setCss, setHtml } from '../../dom-utils';
var prefixKey = 'rb-message';
var MsgMoveEnter = PREFIX.message + "-move-enter";
var MsgMoveLeave = PREFIX.message + "-move-leave";
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
    var MsgWrapper = createElem('div');
    MsgWrapper.className = "" + PREFIX.message;
    setCss(MsgWrapper, 'zIndex', "" + zIndex);
    setTimeout(function () {
        setCss(MsgWrapper, 'top', DEFAULT_MESSAGE.top + "px");
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
        if (options.top && type.isNum(options.top)) {
            DEFAULT_MESSAGE.top = options.top;
        }
        if ((options.duration && type.isNum(options.duration)) || options.duration === 0) {
            DEFAULT_MESSAGE.duration = options.duration;
        }
    };
    $Message.prototype.destroy = function (key) {
        // 通过设置的 key 消除
        if (key && (type.isStr(key) || type.isNum(key))) {
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
        setCss($el("." + PREFIX.message), 'zIndex', "" + zIndex);
    };
    $Message.prototype._createInstance = function (_type, config) {
        var _a;
        this._autoSetZindex();
        var Message = createElem('div');
        var MsgContentWrap = createElem('div');
        var MsgContentBox = createElem('div');
        var MsgInfoBox = createElem('div');
        var MsgIcon = createElem('i');
        var MsgText = createElem('span');
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
            if (type.isUndef(closable))
                closable = false;
            if (type.isUndef(onClose))
                onClose = function () { return void 0; };
            if (type.isUndef(background))
                background = false;
            // 为每个实例自己的 duration 参数设置默认值，如果有传入值则使用自定义的值
            if (type.isUndef(duration))
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
        (_a = $el("." + PREFIX.message)) === null || _a === void 0 ? void 0 : _a.appendChild(Message);
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
            "" + PREFIX.messageChild,
            PREFIX.messageChild + "-content " + PREFIX.messageChild + "-content-" + type,
            PREFIX.messageChild + "-content-text",
            PREFIX.message + "-" + type,
            "" + PREFIX.icon
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
        icon.classList.add(PREFIX.icon + "-" + iconTypes[type]);
    };
    $Message.prototype._setContent = function (node, config) {
        if (typeof config === 'string') {
            useHTMLString(node, config, false);
        }
        else if (typeof config === 'object' && config.content) {
            useHTMLString(node, config.content, config.dangerouslyUseHTMLString);
        }
    };
    $Message.prototype._setClosable = function (closable, parent, children, onClose) {
        if (!closable)
            return;
        parent.classList.add(PREFIX.messageChild + "-closable");
        var MsgCloseBtn = createElem('a');
        MsgCloseBtn.className = PREFIX.messageChild + "-close";
        setHtml(MsgCloseBtn, "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-close\"></i>");
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
            type.isFn(onClose);
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
        node.classList.add(PREFIX.messageChild + "-with-background");
        children.classList.add(PREFIX.messageChild + "-content-background");
    };
    return $Message;
}());
export default $Message;
