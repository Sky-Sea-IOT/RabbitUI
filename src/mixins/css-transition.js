export default function CssTransition(elem, _a) {
    var enterCls = _a.enterCls, leaveCls = _a.leaveCls, inOrOut = _a.inOrOut, rmCls = _a.rmCls, timeout = _a.timeout, hiddenParent = _a.hiddenParent;
    var removeClassAfterTransition = function (aniClassName) {
        if (rmCls) {
            setTimeout(function () {
                aniClassName ? elem.classList.remove(aniClassName) : '';
            }, timeout);
        }
    };
    if (inOrOut === 'in') {
        // 如果父元素被隐藏则变为显示
        if (hiddenParent) {
            hiddenParent.style.display = '';
            hiddenParent.style.opacity = '1';
        }
        if (elem.style.display === 'none')
            elem.style.display = '';
        if (elem.style.opacity === '0')
            elem.style.opacity = '1';
        elem.classList.add(enterCls);
        removeClassAfterTransition(enterCls);
    }
    else if (inOrOut === 'out') {
        if (elem.classList.contains(enterCls)) {
            elem.classList.replace(enterCls, leaveCls);
        }
        else {
            elem.classList.add(leaveCls);
        }
        removeClassAfterTransition(leaveCls);
        // 过渡效果持续时间后隐藏元素
        setTimeout(function () {
            if (hiddenParent)
                hiddenParent.style.display = 'none';
            elem.style.display = 'none';
            elem.style.opacity = '0';
        }, timeout);
    }
}
