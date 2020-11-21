/**
 * @param {{ el: string, moveInCls: string, moveOutCls: string, whenToDestroy: number}}
 */
function destoryAll({ el, moveInCls, moveOutCls, whenToDestroy = 0.4 } = {}) {
    Array.from(el).map((item) => {
        item.style.opacity = 0;
        item.classList.replace(moveInCls, moveOutCls);
        setTimeout(() => item.remove(), whenToDestroy * 1000);
    });
}

function destroy({
    el,
    destroyParent,
    duration,
    moveInCls,
    moveOutCls,
    afterClose,
    whenToDestroy,
} = {}) {
    let timer = null,
        currentEle = el,
        parentNode = el.parentNode;

    // 当duration不为0时则在规定时间内容销毁元素，反之
    if (duration) {
        timer = setTimeout(() => {
            // 替换为出场动画
            currentEle.classList.add(moveOutCls);

            if (moveInCls) {
                currentEle.classList.remove(moveInCls);
            }

            // 是否连同实例的父元素容器一起销毁
            if (destroyParent) {
                setTimeout(() => (parentNode.style.display = "none"), 150);
            }

            currentEle.style.opacity = 0;

            // 关闭后的回调
            isFunc(afterClose) ? afterClose() : afterClose;

            setTimeout(() => {
                // 移除该元素
                if (destroyParent) {
                    parentNode.remove();
                }

                currentEle.remove();
            }, whenToDestroy * 1000);
        }, duration * 1000);
    } else {
        clearTimeout(timer);
    }
}

/**
 * 使用设置的key销毁元素实例
 */
function destroyByKey({
    key,
    target,
    moveInCls,
    moveOutCls,
    whenToDestroy = 0.4,
} = {}) {
    Array.from(target).map((item) => {
        const targetKey = item.dataset.key;
        // 如果目标元素设置的key与传入的key相符合则销毁对应的元素
        if (key === targetKey) {
            item.style.opacity = 0;
            item.classList.replace(moveInCls, moveOutCls);
            setTimeout(() => item.remove(), whenToDestroy * 1000);
        } else {
            console.error(
                `[Rabbit warn] "${key}" is not the same element key "${targetKey}" by you set`
            );
        }
    });
}

/**
 * 使用点击事件销毁DOM实例
 * el 关闭按钮
 * parentEl 关闭按钮的父元素
 * onClose 实例销毁后的回调
 */
function clickDestroy({
    el,
    destroyTarget,
    moveInCls,
    moveOutCls,
    onClose,
} = {}) {
    el.onclick = () => {
        destroyTarget.style.opacity = 0;
        destroyTarget.classList.replace(moveInCls, moveOutCls);

        setTimeout(() => {
            destroyTarget.remove();
            isFunc(onClose) ? onClose() : null;
        }, 400);
    };
}

// export { destroy, destoryAll, destroyByKey, clickDestroy };