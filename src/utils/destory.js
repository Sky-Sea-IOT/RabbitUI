/**
 * @description 一次性销毁所有的目标实例
 * @param {*} el 被销毁的元素
 * @param {String} moveInCls 移除入场动画
 * @param {String} moveOutCls 添加出场动画
 * @param {Number} whenToDestroy 过渡动画后何时销毁
 */
const destoryAll = ({
    el,
    moveInCls,
    moveOutCls,
    whenToDestroy = 0.4,
} = {}) => {
    el.forEach((item) => {
        item.className = item.className.replace(moveInCls, moveOutCls);
        item.style.opacity = 0;

        setTimeout(() => {
            item.remove();
        }, whenToDestroy * 1000);
    });
};

/**
 * @description 单个自动销毁目标实例
 * @param {Number} duration 定时器
 * @param {Function} afterClose 实例销毁后的回调
 */
const destroy = ({
    el,
    destroyParent,
    duration,
    moveInCls,
    moveOutCls,
    afterClose,
    whenToDestroy,
} = {}) => {
    let timer = null,
        currentEle = el,
        parentNode = el.parentNode;

    // 当duration不为0时则在规定时间内容销毁元素，反之
    if (duration) {
        timer = setTimeout(() => {
            currentEle.className = currentEle.className.replace(
                moveInCls,
                moveOutCls
            );

            if (destroyParent) {
                setTimeout(() => {
                    parentNode.style.display = "none";
                }, 150);
            }

            currentEle.style.opacity = 0;

            isFunc(afterClose) ? afterClose() : afterClose;

            setTimeout(() => {
                currentEle.remove();
                if (destroyParent) parentNode.remove();
            }, whenToDestroy * 1000);
        }, duration * 1000);
    } else {
        clearTimeout(timer);
    }
};

/**
 * 使用设置的key销毁元素实例
 * @param {String|Number} key 目标元素设置的key
 * @param {*} target 设置了该 key 的目标元素
 */
const destroyByKey = ({
    key,
    target,
    moveInCls,
    moveOutCls,
    whenToDestroy = 0.4,
} = {}) => {
    target.forEach((item) => {
        const targetKey = item.dataset.key;
        // 如果目标元素设置的key与传入的key相符合则销毁对应的元素
        if (key === targetKey) {
            item.style.opacity = 0;
            item.className = item.className.replace(moveInCls, moveOutCls);

            setTimeout(() => {
                item.remove();
            }, whenToDestroy * 1000);
        } else {
            console.warn(
                `"${key}" is not the same element key "${targetKey}" by you set`
            );
        }
    });
};

/**
 * @description 使用点击事件销毁DOM实例
 * @param {*} el 关闭按钮
 * @param {String} parentEl 关闭按钮的父元素
 * @param {Function} onClose 实例销毁后的回调
 */
const clickDestroy = ({
    el,
    destroyTarget,
    moveInCls,
    moveOutCls,
    onClose,
} = {}) => {
    el.onclick = () => {
        destroyTarget.style.opacity = 0;

        destroyTarget.className = destroyTarget.className.replace(
            moveInCls,
            moveOutCls
        );

        setTimeout(() => {
            destroyTarget.remove();
            isFunc(onClose) ? onClose() : onClose;
        }, 400);
    };
};