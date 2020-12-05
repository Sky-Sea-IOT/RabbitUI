/**
 * 解决使用innerHTML将slot的元素插入实际的dom后，造成dom事件的丢失
 * @param { HTMLELement } slot 添加了指定槽的元素下的的元素
 * @param { HTMLELement } targetEle 将上面的元素插入到此目标元素
 */

function addElemetsOfSlots(slot, targetEle) {
    if (slot) {
        slot.nodeType === 1 ? targetEle.appendChild(slot) : null;
        setTimeout(() => slot.removeAttribute('slot'), 200);
    }
}

// export default addElemetsOfSlots;