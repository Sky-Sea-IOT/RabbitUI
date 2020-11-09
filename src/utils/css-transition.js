/**
 *
 * @param { HTMLElement } el 添加过渡动画的元素
 * @param { String } mode 显示模式出场或入场？
 * @param { String } animationEnterCls  入场动画类名
 * @param { String } animationLeaveCls  出场动画类名
 * @param { Number } timeout  对应css的动画过渡时间
 */

const CSSTransition = (
    el,
    mode,
    animationEnterCls,
    animationLeaveCls,
    timeout
) => {
    if (mode === "in") {
        el.style.display = "block";
        el.classList.add(animationEnterCls);

        setTimeout(() => el.classList.remove(animationEnterCls), timeout);
    } else if (mode === "out") {
        el.classList.add(animationLeaveCls);

        setTimeout(() => {
            el.classList.remove(animationLeaveCls);
            el.style.display = "none";
        }, timeout);
    }
};

// export default CSSTransition;