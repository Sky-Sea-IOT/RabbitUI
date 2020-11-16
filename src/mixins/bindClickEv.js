/**
 * 添加确定和取消事件，关联到modal，drawer组件选项的属性 onOk 或者 onCancel
 * @param { String | HTMLElement } el
 * @param { Function } okCb
 * @param { Function } cancelCb
 */

function bindClickEv(el, okCb, cancelCb) {
    const elem = document.querySelector(el);
    // 获取组件名
    const components = elem.tagName.toLowerCase().substring(4);
    // 只支持 modal 和 drawer 组件
    if (components !== "modal" && components !== "drawer") {
        console.error(
            `[Rabbit] ${components} does not support binding component associated events`
        );
        return false;
    }

    // 获取该组件下所有的子节点
    const childrenNodes = elem.querySelectorAll("*");

    // 查找哪个节点添加了 data-bind 属性
    Array.from(childrenNodes).map((elems) => {
        if (elems.dataset.bind) {
            // 属性值格式为 modal-ok
            // 关联的组件
            const target = elems.dataset.bind.split("-")[0];
            // 事件类型
            const eventTypes = elems.dataset.bind.split("-")[1];

            if (target === "modal") {
                if (eventTypes === "ok") {
                    elems.addEventListener("click", okCallback);
                }

                if (eventTypes === "cancel") {
                    elems.addEventListener("click", cancelCallback);
                }
            }

            if (target === "drawer") {
                if (eventTypes === "close") {
                    elems.addEventListener("click", cancelCallback);
                }
            }
        }
    });

    // 事件回调

    function okCallback() {
        isFunc(okCb) ? okCb() : null;
    }

    function cancelCallback() {
        isFunc(cancelCb) ? cancelCb() : null;
    }
}

// export default bindClickEv;