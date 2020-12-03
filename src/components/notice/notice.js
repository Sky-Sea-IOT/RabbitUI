// 全局配置项
let noticePlacement = "topRight";
let noticeDuration = 4.5;
let noticeBottom = 24;
let noticeTop = 24;

/**
 * Notice 通知提醒
 * 在界面右上角显示可关闭的全局通知
 */
Rabbit.prototype.Notice = {
    prefixCls: "rbt-notice",
    /**
     * ------------------------------------------------------------------------
     * 初始化父容器
     * ------------------------------------------------------------------------
     */

    container() {
        // 创建notice的各个方向父容器添加到body
        const NoticeWrapperTR = document.createElement("div"); // top-right
        const NoticeWrapperTL = document.createElement("div"); // top-left
        const NoticeWrapperBR = document.createElement("div"); // bottom-right
        const NoticeWrapperBL = document.createElement("div"); // bottom-left

        NoticeWrapperTR.className = `${this.prefixCls} ${this.prefixCls}-topRight`;
        NoticeWrapperTL.className = `${this.prefixCls} ${this.prefixCls}-topLeft`;
        NoticeWrapperBR.className = `${this.prefixCls} ${this.prefixCls}-bottomRight`;
        NoticeWrapperBL.className = `${this.prefixCls} ${this.prefixCls}-bottomLeft`;

        document.body.append(
            NoticeWrapperTR,
            NoticeWrapperTL,
            NoticeWrapperBR,
            NoticeWrapperBL
        );
    },

    /**
     * @param {{ key: string | number,
     *           top: number,
     *           type: string,
     *           desc: string,
     *           title: string,
     *           bottom: number,
     *           styles: object,
     *           onClick: function,
     *           onClose: function,
     *           closable: boolean,
     *           duration: number,
     *           placement: string,
     *           className: string, }}
     * @returns {HTMLElement}
     */

    createInstance({
        key,
        top,
        type,
        desc,
        title,
        bottom,
        styles,
        onClick,
        onClose,
        closable,
        duration,
        placement,
        className,
    } = {}) {
        // 是否初始化了 notice 的父容器
        if (document.querySelectorAll(`.${this.prefixCls}`).length <= 0) {
            console.error("[Rabbit warn] The Notice component is not initialized");
            return;
        }
        // 同步为全局设置
        if (noticeDuration != 4.5) {
            duration = noticeDuration;
        }
        if (noticePlacement != "topRight") {
            placement = noticePlacement;
        }
        if (noticeBottom != 24) {
            bottom = noticeBottom;
        }
        if (noticeTop != 24) {
            top = noticeTop;
        }

        const cas = type + "-outline";
        const NoticeIcons = type !== "open" ? getIconTypes(cas) : "";

        const Notice = document.createElement("div");
        const NoticeBox = document.createElement("div");
        const NoticeContentBox = document.createElement("div");
        const NoticeIcon = document.createElement("i");
        const NoticeTitle = document.createElement("div");
        const NoticeDesc = document.createElement("div");
        const NoticeClose = document.createElement("a");
        const NoticeCloseIcon = document.createElement("i");

        this.addClassName(
            type,
            closable,
            placement,
            NoticeIcons,
            Notice,
            NoticeBox,
            NoticeIcon,
            NoticeTitle,
            NoticeDesc,
            NoticeClose,
            NoticeCloseIcon
        );

        this.setKey(key, Notice);
        this.addStyles(styles, Notice);
        this.addContent(title, desc, NoticeTitle, NoticeDesc);
        this.customCls(className, Notice);
        this.putInDiffPlacement(Notice, placement, top, bottom);
        this.handleClick(NoticeBox, onClick);
        this.handleClose(NoticeClose, Notice, placement, onClose);
        this.closeInstance(Notice, placement, duration);

        Notice.appendChild(NoticeBox);
        NoticeBox.append(NoticeContentBox);
        NoticeContentBox.append(NoticeIcon, NoticeTitle, NoticeDesc);

        // 调用的方法为 open 则不添加图标
        if (type === "open") {
            NoticeContentBox.removeChild(NoticeIcon);
            NoticeContentBox.className = "";
        } else {
            NoticeContentBox.className = `${this.prefixCls}-notice-with-icon`;
        }
        // 是否显示关闭图标
        if (closable) {
            Notice.appendChild(NoticeClose);
            NoticeClose.appendChild(NoticeCloseIcon);
        }

        return Notice;
    },

    addClassName(
        type,
        closable,
        placement,
        NoticeIcons,
        Notice,
        NoticeBox,
        NoticeIcon,
        NoticeTitle,
        NoticeDesc,
        NoticeClose,
        NoticeCloseIcon
    ) {
        const prefixIconCls = "rbt-icon";

        Notice.className = `${this.prefixCls}-notice ${
      this.aniCls(placement).moveInCls
    }`;

        if (closable) {
            Notice.classList.add(`${this.prefixCls}-closable`);
        }

        NoticeBox.className = `${this.prefixCls}-content`;
        NoticeIcon.className = `${prefixIconCls} ${prefixIconCls}-${NoticeIcons} ${this.prefixCls}-notice-icon ${this.prefixCls}-notice-icon-${type}`;
        NoticeTitle.className = `${this.prefixCls}-notice-title`;
        NoticeDesc.className = `${this.prefixCls}-notice-desc`;
        NoticeClose.className = `${this.prefixCls}-notice-close`;
        NoticeCloseIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;
    },

    putInDiffPlacement(notice, placement, top, bottom) {
        const NoticeWrap = document.querySelector(
            `.${this.prefixCls}-${placement}`
        );

        if (placement === "topRight" || placement === "topLeft") {
            NoticeWrap.style.top = `${top}px`;
        }
        if (placement === "bottomRight" || placement === "bottomLeft") {
            NoticeWrap.style.bottom = `${bottom}px`;
        }

        NoticeWrap.appendChild(notice);
    },

    closeInstance(notice, placement, duration) {
        // 销毁实例
        destroy({
            el: notice,
            duration,
            moveInCls: this.aniCls(placement).moveInCls,
            moveOutCls: this.aniCls(placement).moveOutCls,
            whenToDestroy: 0.5,
        });
    },

    setKey(key, notice) {
        if (isNum(key) || isStr(key)) {
            notice.dataset.key = key;
        }
    },

    addStyles(styles, notice) {
        notice.style.cssText = objToString(styles);
    },

    customCls(cls, notice) {
        if (cls && isStr(cls)) {
            notice.classList.add(cls);
        }
    },

    addContent(title, desc, noticeTitle, noticeDes) {
        if (!title) {
            console.error(
                "Rabbit [warn] The title of the notification reminder is mandatory"
            );
            return;
        }
        if (!desc) {
            console.error(
                "Rabbit [warn] The description of the notification reminder is mandatory"
            );
            return;
        }
        noticeTitle.innerHTML = title;
        noticeDes.innerHTML = desc;
    },

    handleClick(notice, cb) {
        notice.onclick = () => (isFunc(cb) ? cb() : null);
    },

    handleClose(el, notice, placement, cb) {
        clickDestroy({
            el,
            destroyTarget: notice,
            moveInCls: this.aniCls(placement).moveInCls,
            moveOutCls: this.aniCls(placement).moveOutCls,
            onClose: cb,
        });
    },

    aniCls(placement) {
        // 是否为左边入场
        let direction = "";
        if (placement === "topLeft" || placement === "bottomLeft") {
            direction = "-left";
        }

        const moveInCls = `${this.prefixCls}-move-in${direction}`;
        const moveOutCls = `${this.prefixCls}-move-out${direction}`;

        return {
            moveInCls,
            moveOutCls,
        };
    },

    /**
     * ------------------------------------------------------------------------
     * 调用以下方法创建实例
     * ------------------------------------------------------------------------
     */

    open({
        key,
        top = 24,
        desc = "",
        title = "",
        bottom = 24,
        styles = {},
        onClick,
        onClose,
        closable = true,
        duration = 4.5,
        placement = "topRight",
        className = "",
    } = {}) {
        this.createInstance({
            key,
            top,
            type: "open",
            desc,
            title,
            bottom,
            styles,
            onClick,
            onClose,
            closable,
            duration,
            placement,
            className,
        });
        return PromiseAfterClose(duration);
    },

    info({
        key,
        top = 24,
        desc = "",
        title = "",
        bottom = 24,
        styles = {},
        onClick,
        onClose,
        closable = true,
        duration = 4.5,
        placement = "topRight",
        className = "",
    } = {}) {
        this.createInstance({
            key,
            top,
            type: "info",
            desc,
            title,
            bottom,
            styles,
            onClick,
            onClose,
            closable,
            duration,
            placement,
            className,
        });
        return PromiseAfterClose(duration);
    },

    success({
        key,
        top = 24,
        desc = "",
        title = "",
        bottom = 24,
        styles = {},
        onClick,
        onClose,
        closable = true,
        duration = 4.5,
        placement = "topRight",
        className = "",
    } = {}) {
        this.createInstance({
            key,
            top,
            type: "success",
            desc,
            title,
            bottom,
            styles,
            onClick,
            onClose,
            closable,
            duration,
            placement,
            className,
        });
        return PromiseAfterClose(duration);
    },

    warning({
        key,
        top = 24,
        desc = "",
        title = "",
        bottom = 24,
        styles = {},
        onClick,
        onClose,
        closable = true,
        duration = 4.5,
        placement = "topRight",
        className = "",
    } = {}) {
        this.createInstance({
            key,
            top,
            type: "warning",
            desc,
            title,
            bottom,
            styles,
            onClick,
            onClose,
            closable,
            duration,
            placement,
            className,
        });
        return PromiseAfterClose(duration);
    },

    error({
        key,
        top = 24,
        desc = "",
        title = "",
        bottom = 24,
        styles = {},
        onClick,
        onClose,
        closable = true,
        duration = 4.5,
        placement = "topRight",
        className = "",
    } = {}) {
        this.createInstance({
            key,
            top,
            type: "error",
            desc,
            title,
            bottom,
            styles,
            onClick,
            onClose,
            closable,
            duration,
            placement,
            className,
        });
        return PromiseAfterClose(duration);
    },

    /**
     * ------------------------------------------------------------------------
     * 全局配置方法
     * ------------------------------------------------------------------------
     * @param {{ top: number, bottom: number, duration: number, placement: string }}
     */

    config: ({ top, bottom, duration, placement }) => {
        if (isNum(top)) {
            noticeTop = top;
        }
        if (isNum(bottom)) {
            noticeBottom = bottom;
        }
        if (isNum(duration)) {
            noticeDuration = duration;
        }
        if (isStr(placement)) {
            noticePlacement = placement;
        }
    },

    /**
     * ------------------------------------------------------------------------
     * 全局销毁方法
     * ------------------------------------------------------------------------
     */

    destroy(key) {
        const target = document.querySelectorAll(`.${this.prefixCls}-notice`);
        // 判断出场位置
        let direction = "";
        Array.from(target).map((item) => {
            if (item.classList.contains(`${this.prefixCls}-move-in-left`)) {
                direction = "-left";
            }
        });

        // 如果传入 key 则单独销毁该组件，反之
        if (key) {
            destroyByKey({
                key,
                target: target,
                moveInCls: `${this.prefixCls}-move-in${direction}`,
                moveOutCls: `${this.prefixCls}-move-out${direction}`,
                whenToDestroy: 0.5,
            });
        } else {
            destoryAll({
                el: target,
                moveInCls: `${this.prefixCls}-move-in${direction}`,
                moveOutCls: `${this.prefixCls}-move-out${direction}`,
                whenToDestroy: 0.5,
            });
        }
    },
};