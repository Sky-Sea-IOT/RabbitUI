/**
 *
 * @param { Boolean } condition
 * @param {DOMObject} slot
 */
function isSlotsUserd(condition, slot) {
    // 指定的slot的标签存在但是相关的条件没设置为true
    if (!condition && slot && slot.innerHTML) {
        console.warn(slot);
        console.warn(
            "You used the component slot above, but the corresponding condition is false, set it to true"
        );
    }
    // 指定的slot使用了但是没有添加任何节点内容
    if (slot && !slot.innerHTML) {
        console.warn(slot);
        console.warn(
            `You used the component slot above, but didn't write anything`
        );
    }
}

// export default isSlotsUserd;