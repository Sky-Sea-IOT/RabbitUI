/**
 * Drawer 抽屉
 * @description 抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。
 */

let drawerZIndex = 1000;

rabbit.Drawer = {
    creatDrawer(el, config, slot) {
        const prefixCls = "rbt-drawer";
        const prefixIconCls = "rbt-icon";

        // 获取指定slot内容
        const { header, content, footer } = slot;

        // 配置项
        const {
            mask = true,
                width = "256px",
                visible = false,
                onClose,
                keyboard = true,
                closable = true,
                placement = "right",
                className = "",
                scrollable = true,
                maskClosable = true,
                inner,
        } = config;

        // 不提供点击确定的回调，只提供组件关闭后的回调
        clickActions(el, null, onClose);

        // 创建DOM树
        const drawer = document.createElement("div");
        let drawerMask;
        const drawerWrap = document.createElement("div");
        const drawerContent = document.createElement("div");
        const drawerBodyWrap = document.createElement("div");
        const drawerBody = document.createElement("div");

        // 设置样式类名
        drawer.className = `${prefixCls} ${prefixCls}-${placement}`;
        drawerWrap.className = `${prefixCls}-wrap ${className}`;
        drawerContent.className = `${prefixCls}-content`;
        drawerBodyWrap.className = `${prefixCls}-wrap-content`;
        drawerBody.className = `${prefixCls}-body`;

        // Drawer 初始状态下是否显示
        if (visible) {
            const body = document.body;
            body.style.paddingRight = "17px";
            body.style.overflow = "hidden";

            drawer.classList.add(`${prefixCls}-open`);
        } else {
            // 隐藏下的样式初始状态
            let offset = "X",
                direction = "";

            if (placement === "top" || placement === "bottom") offset = "Y";

            if (placement === "top" || placement === "left") direction = "-";

            drawerWrap.style.transform = `translate${offset}(${direction}100%)`;
        }

        // 是否显示遮罩层
        if (mask) {
            drawerMask = document.createElement("div");
            drawerMask.className = `${prefixCls}-mask`;
            if (maskClosable) {
                drawerMask.onclick = () => {
                    this.visible(el);
                    isFunc(onClose) ? onClose() : null;
                };
            }
            drawer.appendChild(drawerMask);
        }

        // 用户自定义drawerWrap宽度。当方向为top或bottom时宽度设置为高度
        if (placement === "top" || placement === "bottom") {
            drawerWrap.style.height = `${width}`;
        } else {
            drawerWrap.style.width = `${width}`;
        }

        // 是否支持键盘 esc 关闭
        if (keyboard) {
            window.onkeydown = (e) => {
                if (e.keyCode === 27) {
                    this.visible(el);
                    isFunc(onClose) ? onClose() : null;
                }
            };
        }

        // 	是否设置Drawer在当前父容器内打开
        if (inner) {
            drawer.style.position = "absolute";
            drawerMask.style.position = "absolute";
            drawerWrap.style.position = "absolute";
        }

        // 如果header存在内容则创建 div.rbt-darwer-header
        if (header) {
            const drawerHeader = document.createElement("div");
            const drawerTitle = document.createElement("div");

            drawerHeader.className = `${prefixCls}-header`;

            drawerTitle.className = `${prefixCls}-title`;
            drawerTitle.innerHTML = header.innerHTML;

            drawerHeader.appendChild(drawerTitle);
            drawerBodyWrap.appendChild(drawerHeader);

            // 头部存在的情况下是否创建右上角的关闭按钮
            if (closable) {
                const drawerCloseBtn = document.createElement("a");
                const drawerCloseIco = document.createElement("i");

                drawerCloseBtn.className = `${prefixCls}-close`;
                drawerCloseIco.className = `${prefixIconCls} ${prefixIconCls}-md-close`;

                // 点击关闭按钮的回调
                drawerCloseBtn.onclick = () => {
                    this.visible(el);
                    isFunc(onClose) ? onClose() : null;
                };

                drawerCloseBtn.appendChild(drawerCloseIco);
                drawerBodyWrap.appendChild(drawerCloseBtn);
            }
        }

        addElemetsOfSlots(content, drawerBody);

        drawer.appendChild(drawerWrap);
        drawerWrap.appendChild(drawerContent);
        drawerContent.appendChild(drawerBodyWrap);
        drawerBodyWrap.appendChild(drawerBody);

        // 如果footer存在内容则创建 div.rbt-darwer-footer
        if (footer) {
            const drawerFooter = document.createElement("div");
            drawerFooter.className = `${prefixCls}-footer`;

            addElemetsOfSlots(footer, drawerFooter);
            drawerBodyWrap.appendChild(drawerFooter);
        }
        return drawer;
    },
    // 控制Drawer显示隐藏
    visible(el) {
        const prefixCls = "rbt-drawer";
        const body = document.body;

        let container = document.querySelector(el),
            drawer = container.querySelector(`.${prefixCls}`),
            drawerContentBox = drawer.querySelector(`.${prefixCls}-wrap`),
            isDrawerOpen = drawer.classList.contains(`${prefixCls}-open`);

        if (!isDrawerOpen) {
            body.style.paddingRight = "17px";
            body.style.overflow = "hidden";

            drawer.style.zIndex = drawerZIndex++;
            drawer.classList.add(`${prefixCls}-open`);

            // 根据placement显示不同移入方向
            if (
                drawer.classList.contains(`${prefixCls}-right`) ||
                drawer.classList.contains(`${prefixCls}-left`)
            ) {
                drawerContentBox.style.transform = "translateX(0)";
            }

            if (
                drawer.classList.contains(`${prefixCls}-top`) ||
                drawer.classList.contains(`${prefixCls}-bottom`)
            ) {
                drawerContentBox.style.transform = "translateY(0)";
            }
        } else {
            drawer.classList.remove(`${prefixCls}-open`);

            // 根据placement显示不同移出方向
            drawer.classList.contains(`${prefixCls}-right`) ?
                (drawerContentBox.style.transform = "translateX(100%)") :
                "";

            drawer.classList.contains(`${prefixCls}-left`) ?
                (drawerContentBox.style.transform = "translateX(-100%)") :
                "";

            drawer.classList.contains(`${prefixCls}-top`) ?
                (drawerContentBox.style.transform = "translateY(-100%)") :
                "";

            drawer.classList.contains(`${prefixCls}-bottom`) ?
                (drawerContentBox.style.transform = "translateY(100%)") :
                "";
            setTimeout(() => {
                body.style.paddingRight = "";
                body.style.overflow = "";
            }, 400);
        }
    },
};