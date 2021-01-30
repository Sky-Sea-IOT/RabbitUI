import { CssTransition, warn } from '../../mixins';
import { type, destroyElem, destroyElemByKey, useHTMLString } from '../../utils';
import { usePromiseCallback } from '../../mixins';
import PREFIX from '../prefix';
import { $el, createElem, setCss, setHtml } from '../../dom-utils';
var NotPrefixKey = 'rb-notice';
var NotMoveEnter = PREFIX.notice + "-move-enter";
var NotMoveLeave = PREFIX.notice + "-move-leave";
var iconTypes = {
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
var zIndex = 1180;
// 创建实例的最外层父容器
function createNoticeInsanceWrapper() {
    var NoticeWrapper = createElem('div');
    NoticeWrapper.className = "" + PREFIX.notice;
    setCss(NoticeWrapper, 'zIndex', "" + zIndex);
    setCss(NoticeWrapper, 'right', '0');
    setTimeout(function () { return setCss(NoticeWrapper, 'top', DEFAULT_NOTICE.top + "px"); }, 0);
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
        zIndex++;
        setCss($el("." + PREFIX.notice), 'zIndex', "" + zIndex);
    };
    $Notice.prototype._createInstance = function (type, config) {
        var _a;
        this._autoSetZindex();
        var Notice = createElem('div');
        var NoticeContent = createElem('div');
        var NoticeCustomContent = createElem('div');
        var NoticeTitle = createElem('div');
        var NoticeDesc = createElem('div');
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
        (_a = document.querySelector("." + PREFIX.notice)) === null || _a === void 0 ? void 0 : _a.appendChild(Notice);
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
            PREFIX.noticeChild + " " + (customCls ? customCls : ''),
            PREFIX.noticeChild + "-content",
            PREFIX.noticeChild + "-custom-content " + PREFIX.notice + "-with-" + type,
            PREFIX.notice + "-title",
            PREFIX.notice + "-desc"
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
        useHTMLString(node, title, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setDesc = function (parent, children_custm, child_desc, desc, dangerouslyUseHTMLString) {
        if (!desc)
            return;
        parent.classList.add(PREFIX.noticeChild + "-with-desc");
        children_custm.classList.add(PREFIX.notice + "-with-desc");
        // 是否支持传入 HTML 片段
        useHTMLString(child_desc, desc, dangerouslyUseHTMLString);
    };
    $Notice.prototype._setIcon = function (type, child_custom, child_desc, customIcon) {
        // 不带状态图标的类型
        if (type === 'noraml')
            return;
        if (type !== 'normal' || customIcon) {
            child_custom.classList.add(PREFIX.notice + "-with-icon");
        }
        var isOutline = '';
        // 带有状态图标并且是否带有提示内容，如果有则将图标设为 outline 外观
        if (child_desc.innerHTML)
            isOutline = '-outline';
        var NoticeIcon = createElem('span');
        NoticeIcon.className = PREFIX.notice + "-icon " + PREFIX.notice + "-icon-" + type;
        // 是否自定义状态图标
        if (customIcon) {
            setHtml(NoticeIcon, customIcon);
        }
        else {
            // @ts-ignore
            var defaultIcon = "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-" + iconTypes[type] + isOutline + "\"></i>";
            setHtml(NoticeIcon, defaultIcon);
        }
        child_custom.prepend(NoticeIcon);
    };
    $Notice.prototype._setClosable = function (parent, closable, onClose) {
        // 默认显示右上角关闭按钮
        type.isUndef(closable) ? (closable = true) : closable;
        if (!closable)
            return;
        parent.classList.add(PREFIX.noticeChild + "-closable");
        var NoticeClose = createElem('a');
        var closeIcon = "<i class=\"" + PREFIX.icon + " " + PREFIX.icon + "-ios-close\"></i>";
        NoticeClose.className = PREFIX.noticeChild + "-close";
        setHtml(NoticeClose, closeIcon);
        this._handleClose(parent, NoticeClose, onClose);
        parent.appendChild(NoticeClose);
    };
    // 自定义内联样式
    $Notice.prototype._customStyle = function (node, style) {
        if (!style)
            return;
        setCss(node, 'cssText', style);
    };
    // 点击通知时触发的回调函数
    $Notice.prototype._handleNoticeClick = function (parent, onClick) {
        parent.onclick = function (e) {
            e.stopPropagation();
            if (onClick)
                type.isFn(onClick);
        };
    };
    $Notice.prototype._handleClose = function (parent, closeBtn, onClose) {
        closeBtn.onclick = function (e) {
            e.stopPropagation();
            if (onClose)
                type.isFn(onClose);
            destroyElem(parent, {
                clsLeave: NotMoveLeave,
                duration: 0.1
            });
        };
    };
    $Notice.prototype._autoClose = function (instance, duration) {
        // 为每个实例自己的 duration参数设置默认值，如果有传入值则使用自定义的值
        type.isUndef(duration) ? (duration = DEFAULT_NOTICE.duration) : duration;
        destroyElem(instance, {
            duration: duration,
            clsLeave: NotMoveLeave
        });
    };
    return $Notice;
}());
export default $Notice;
//# sourceMappingURL=notice.js.map