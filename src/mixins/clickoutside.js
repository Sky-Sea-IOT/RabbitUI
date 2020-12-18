/**
 * @param {HTMLElement} elem  目标元素
 * @param {function} callback 点击的目标区域不包含目标元素的回调事件
 */
function clickOutSide(elem, callback) {
    document.addEventListener('click', e => {
        e.stopPropagation();
        const target = elem;
        if (target) {
            if (!target.contains(e.target)) {
                callback();
            }
        }
    });
}