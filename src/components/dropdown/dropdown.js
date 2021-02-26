import PREFIX from '../prefix';
import { $el, bind, createElem, getStrTypeAttr, removeAttrs, setCss, setHtml } from '../../dom-utils';
import { CssTransition, warn, _Popper } from '../../mixins';
import { type, validComps } from '../../utils';
var defalutDpdDelay = 100;
var dpdShowTimer;
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.VERSION = 'v1.0';
        this.components = $el('r-dropdown', { all: true });
        this._create(this.components);
    }
    Dropdown.prototype.config = function (el) {
        var target = $el(el);
        validComps(target, 'dropdown');
        return {
            events: function (_a) {
                var onClick = _a.onClick;
                var children = target.querySelectorAll('r-dropdown-item');
                children.forEach(function (child, index) {
                    bind(child, 'click', function () {
                        child.getAttribute('disabled') !== ''
                            ? onClick && type.isFn(onClick, index)
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
            setHtml(node, '');
            var DropdownRef = _this._setReferenceElm(node, refElm);
            var DropdownMenu = _this._setMenuItem(node, menuItem);
            _this._handleTrigger(node, DropdownRef, DropdownMenu);
            _this._setTransformOrigin(node, DropdownMenu);
            removeAttrs(node, ['trigger', 'placement']);
        });
    };
    Dropdown.prototype._setReferenceElm = function (node, refElm) {
        var DropdownRel = createElem('div');
        DropdownRel.className = PREFIX.dropdown + "-rel";
        refElm ? DropdownRel.appendChild(refElm) : '';
        node.appendChild(DropdownRel);
        return DropdownRel;
    };
    Dropdown.prototype._setMenuItem = function (node, menuItem) {
        var DropdownMenu = createElem('div');
        DropdownMenu.className = 'rab-select-dropdown';
        this._initVisable(DropdownMenu);
        menuItem ? DropdownMenu.appendChild(menuItem) : '';
        node.appendChild(DropdownMenu);
        setCss(menuItem, 'display', 'block');
        return DropdownMenu;
    };
    Dropdown.prototype._initVisable = function (dpdMenu) {
        setCss(dpdMenu, 'display', 'none');
        dpdMenu.dataset.dropdownVisable = 'false';
    };
    Dropdown.prototype._setTransformOrigin = function (parent, dpdMenu) {
        var placement = this._attrs(parent).placement;
        // 根据 placement 设置源方向。
        // top 开头、right-end、left-end 的位置设置源方向为 center-bottom，反之。
        // left 和 right 开头的则无需设置。
        if (/^top|right-end|left-end/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center bottom');
        }
        else if (/^bottom|right-start|left-start/.test(placement)) {
            setCss(dpdMenu, 'transformOrigin', 'center top');
        }
        // TODO: 根据 popper 的方向动态改变源方向
        // dpdMenu.dataset.popperPlacement;
    };
    Dropdown.prototype._handleTrigger = function (parent, dpdRef, dpdMenu) {
        var _a = this._attrs(parent), trigger = _a.trigger, placement = _a.placement;
        var setPopper = function () { return _Popper._newCreatePopper(dpdRef, dpdMenu, placement, 0); };
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
            bind(parent, 'mouseenter', function () {
                dpdShowTimer = setTimeout(function () {
                    show();
                }, defalutDpdDelay);
            });
            bind(parent, 'mouseleave', function () {
                clearTimeout(dpdShowTimer);
                hidden();
            });
        }
        else if (trigger === 'click') {
            // 初始当前的点击次数
            var currentClicks_1 = 1;
            bind(dpdRef, 'click', function () { return clicksIsVisable(currentClicks_1++); });
            bind(dpdRef, 'focusin', show);
            bind(dpdRef, 'focusout', function () {
                currentClicks_1++;
                hidden();
            });
        }
        else if (trigger === 'contextMenu') {
            // 初始当前的右击次数
            var currentRightClick_1 = 1;
            bind(dpdRef, 'contextmenu', function (e) {
                e.preventDefault();
                clicksIsVisable(currentRightClick_1++);
            });
            bind(dpdRef, 'focusout', function () {
                currentRightClick_1++;
                hidden();
            });
        }
    };
    Dropdown.prototype._attrs = function (node) {
        return {
            trigger: getStrTypeAttr(node, 'trigger', 'hover'),
            placement: getStrTypeAttr(node, 'placement', 'bottom')
        };
    };
    return Dropdown;
}());
// 通过点击事件冒泡的方式处理单击下拉菜单项隐藏菜单
function handleDropdownItemClickHidden() {
    bind(document, 'click', function (e) {
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
export default Dropdown;
