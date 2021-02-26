import { warn } from '../../mixins';
import { $el, createElem, removeAttrs, setCss, setHtml } from '../../dom-utils';
import PREFIX from '../prefix';
var Avatar = /** @class */ (function () {
    function Avatar() {
        this.VERSION = 'v1.0';
        this.components = $el('r-avatar', { all: true });
        this._create(this.components);
    }
    Avatar.prototype._create = function (components) {
        var _this = this;
        components.forEach(function (node) {
            _this._setIcon(node);
            _this._setImage(node);
            _this._setSize(node);
            _this._setCustomContent(node);
            removeAttrs(node, ['icon', 'src', 'custom-icon']);
        });
    };
    Avatar.prototype._setIcon = function (node) {
        var hasIcon = this._getIcon(node);
        var customIcon = this._getCustmIcon(node);
        if (!hasIcon)
            return;
        if (hasIcon || customIcon) {
            setHtml(node, '');
            node.classList.add(PREFIX.avatar + "-icon");
        }
        if (customIcon) {
            setHtml(node, customIcon);
        }
        else {
            var AvatarIcon = createElem('i');
            AvatarIcon.className = "rab-icon rab-icon-" + hasIcon;
            node.appendChild(AvatarIcon);
        }
    };
    Avatar.prototype._setImage = function (node) {
        var hasSrc = this._getSrc(node);
        if (!hasSrc)
            return;
        var AvatarImage = createElem('img');
        // @ts-ignore
        AvatarImage.src = hasSrc;
        setHtml(node, '');
        node.classList.add(PREFIX.avatar + "-image");
        node.appendChild(AvatarImage);
    };
    // 自定义头像内容
    Avatar.prototype._setCustomContent = function (node) {
        if (node.getAttribute('rb-icon') || node.getAttribute('rb-src'))
            return;
        if (setHtml(node)) {
            var AvatarStrBox = createElem('span');
            AvatarStrBox.className = PREFIX.avatar + "-string";
            setHtml(AvatarStrBox, node.innerHTML);
            setHtml(node, '');
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
            setCss(children, 'transform', "scale(" + newScale + ") translateX(-50%)");
        }
        else {
            setCss(children, 'transform', 'scale(1) translateX(-50%)');
        }
    };
    // 设置头像尺寸
    Avatar.prototype._setSize = function (node) {
        var size = this._getSize(node);
        if (!size)
            return;
        setCss(node, 'width', size + "px");
        setCss(node, 'height', size + "px");
        setCss(node, 'lineHeight', size + "px");
        // 如果设置的尺寸超过40，且在有图标的情况下将其字体大写设为头像尺寸的一半
        if (size >= 40) {
            if (node.querySelector('.rab-icon')) {
                var newFontSize = Math.floor(size / 2) + "px";
                setCss(node, 'fontSize', newFontSize);
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
export default Avatar;
