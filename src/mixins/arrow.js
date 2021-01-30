// 更新popver弹窗或下拉菜单的箭头方向
import { $el } from '../dom-utils';
export function scrollUpdate() {
    var tooltips = $el('.rab-tooltip-popper', { all: true });
    var poptips = $el('.rab-poptip-popper', { all: true });
    var scrollEv = function (target) {
        target.forEach(function (node) {
            var popperPlacement = node.dataset.popperPlacement;
            var xPlacement = node.getAttribute('x-placement');
            if (xPlacement != popperPlacement) {
                node.setAttribute('x-placement', popperPlacement);
            }
        });
    };
    // 当页面有这些组件存在时才做滚动监听
    if (tooltips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(tooltips); });
    }
    if (poptips.length > 0) {
        window.addEventListener('scroll', function () { return scrollEv(poptips); });
    }
}
export function toggleUpdate(popper, updateMode, reference, delay) {
    var setArrow = function () {
        var xPlacement = popper.getAttribute('x-placement');
        var popperPlacement = popper.dataset.popperPlacement;
        if (popperPlacement) {
            if (xPlacement === popperPlacement)
                return;
            popper.setAttribute('x-placement', popperPlacement);
        }
    };
    if (reference) {
        if (updateMode === 'hover') {
            reference.addEventListener(updateMode, function (e) {
                e.stopPropagation();
                if (delay) {
                    setTimeout(function () {
                        setArrow();
                    }, delay);
                }
                else {
                    setArrow();
                }
            });
        }
        else if (updateMode === 'click') {
            reference.addEventListener('click', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
        else if (updateMode === 'focus') {
            reference.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                setArrow();
            });
        }
    }
    setArrow();
}
//# sourceMappingURL=arrow.js.map