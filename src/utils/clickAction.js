/**
 * 添加确定和取消事件，关联到组件选项的属性 onOk 或者 onClose
 * @param { String } el
 * @param { Function } okCb
 * @param { Function } cancelCb
 */

const clickActions = (el, okCb, cancelCb) => {
    const thisEle = document.querySelector(el);

    const { component } = thisEle.dataset;

    // 在带有 data-component 的容器内 data-click-action 才能发挥有用
    if (component) {
        let childrens = thisEle.querySelectorAll("*");

        childrens.forEach((item) => {
            let { clickAction } = item.dataset;

            // 不论是点击了确定或取消都关闭组件
            if (clickAction) {
                if (clickAction === "confirm") {
                    item.onclick = () => {
                        // 不同组件的关闭方法
                        switch (component) {
                            case "drawer":
                                rabbit.Drawer.visible(el);
                                break;

                            case "modal":
                                rabbit.Modal.visible(el);
                                break;
                        }

                        isFunc(okCb) ? okCb() : null;
                    };
                }

                if (clickAction === "close") {
                    item.onclick = () => {
                        switch (component) {
                            case "drawer":
                                rabbit.Drawer.visible(el);
                                break;

                            case "modal":
                                rabbit.Modal.visible(el);
                                break;
                        }

                        isFunc(cancelCb) ? cancelCb() : null;
                    };
                }
            }
        });
    }
};

// export default clickActions;