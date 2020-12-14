/**
 *
 * @param { HTMLElement } elem 添加过渡动画的元素
 * @param { string } mode 显示模式出场或入场？
 * @param { string } animationEnterCls  入场动画类名
 * @param { string } animationLeaveCls  出场动画类名
 * @param { number } timeout  对应css的动画过渡时间
 */

function CSSTransition(
    elem,
    mode,
    animationEnterCls,
    animationLeaveCls,
    timeout
) {
    if (mode === 'in') {
        elem.style.display = 'block';
        elem.classList.add(animationEnterCls);
        setTimeout(() => elem.classList.remove(animationEnterCls), timeout);
    } else if (mode === 'out') {
        elem.classList.add(animationLeaveCls);

        setTimeout(() => {
            elem.style.display = 'none';
            elem.classList.remove(animationLeaveCls);
        }, timeout * 1000);
    }
}

// 不适用在鼠标移开后的过渡效果，会有问题出现
function CSSTransition2(elem, animationEnterCls, animationLeaveCls, timeout) {
    if (elem.classList.contains(animationEnterCls)) {
        elem.classList.replace(animationEnterCls, animationLeaveCls);
        setTimeout(() => (elem.style.display = 'none'), timeout);
    } else {
        elem.style.display = 'block';
        elem.classList.add(animationEnterCls);
        elem.classList.remove(animationLeaveCls);
    }
}
// export default CSSTransition;