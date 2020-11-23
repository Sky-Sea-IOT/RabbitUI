/**
 * @param {HTMLElement} elem  目标元素
 * @param {Function} callback 点击的目标区域不包含目标元素的回调事件
 */
function clickOutSide(elem, callback) {
    document.addEventListener("click", (e) => {
        const _con = elem;
        if (_con) {
            if (!_con.contains(e.target)) {
                callback();
            }
        }
    });
}