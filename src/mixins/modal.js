/**
 *
 * @param { String } el
 * @param { String } prefixCls
 */
let baseZIndex = 1000;

const modalVisible = (el, prefixCls) => {
    const body = document.body;

    let container = document.querySelector(el),
        modalMask = container.querySelector(`.${prefixCls}-mask`),
        modalWrap = container.querySelector(`.${prefixCls}-wrap`),
        isModalEnter = modalWrap.classList.contains(`${prefixCls}-enter-in`);

    if (isModalEnter) {
        modalMask.classList.add(`${prefixCls}-mask-leave-out`);
        modalWrap.classList.add(`${prefixCls}-leave-out`);
        modalMask.classList.remove(`${prefixCls}-mask-enter-in`);
        modalWrap.classList.remove(`${prefixCls}-enter-in`);

        setTimeout(() => {
            body.style.paddingRight = "";
            body.style.overflow = "";

            modalMask.style.display = "none";
            modalWrap.style.display = "none";
            modalMask.classList.remove(`${prefixCls}-mask-leave-out`);
            modalWrap.classList.remove(`${prefixCls}-leave-out`);
        }, 250);
    } else {
        body.style.cssText = "padding-right: 17px;overflow :hidden";
        let add = baseZIndex++;

        modalMask.style.zIndex = add;
        modalMask.style.display = "";
        modalMask.classList.remove(`${prefixCls}-mask-leave-out`);
        modalMask.classList.add(`${prefixCls}-mask-enter-in`);

        modalWrap.style.zIndex = add;
        modalWrap.style.display = "block";
        modalWrap.classList.add(`${prefixCls}-enter-in`);
        modalWrap.classList.remove(`${prefixCls}-leave-out`);
    }
};