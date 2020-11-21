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
    /**
     * ------------------------------------------------------------------------
     * 初始化父容器
     * ------------------------------------------------------------------------
     */

    container: () => {
        const prefixCls = "rbt-notice";
        // 创建notice的各个方向父容器添加到body
        const NoticeWrapperTR = document.createElement("div"); // top-right
        const NoticeWrapperTL = document.createElement("div"); // top-left
        const NoticeWrapperBR = document.createElement("div"); // bottom-right
        const NoticeWrapperBL = document.createElement("div"); // bottom-left

        NoticeWrapperTR.className = `${prefixCls} ${prefixCls}-topRight`;
        NoticeWrapperTL.className = `${prefixCls} ${prefixCls}-topLeft`;
        NoticeWrapperBR.className = `${prefixCls} ${prefixCls}-bottomRight`;
        NoticeWrapperBL.className = `${prefixCls} ${prefixCls}-bottomLeft`;

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

    _createInstance({
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
        if (document.querySelectorAll(".rbt-notice").length <= 0) {
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

        this._addClassName(
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

        this._setKey(key, Notice);
        this._addStyles(styles, Notice);
        this._addContent(title, desc, NoticeTitle, NoticeDesc);
        this._customClassName(className, Notice);
        this._putInDiffPlacement(Notice, placement, top, bottom);
        this._clickHandle(NoticeBox, onClick);
        this._clickCloseHandle(NoticeClose, Notice, placement, onClose);
        this._closeInstance(Notice, placement, duration);

        Notice.appendChild(NoticeBox);
        NoticeBox.append(NoticeContentBox);
        NoticeContentBox.append(NoticeIcon, NoticeTitle, NoticeDesc);

        // 调用的方法为 open 则不添加图标
        if (type === "open") {
            NoticeContentBox.removeChild(NoticeIcon);
            NoticeContentBox.className = "";
        } else {
            NoticeContentBox.className = `rbt-notice-notice-with-icon`;
        }
        // 是否显示关闭图标
        if (closable) {
            Notice.appendChild(NoticeClose);
            NoticeClose.appendChild(NoticeCloseIcon);
        }

        return Notice;
    },

    _putInDiffPlacement(notice, placement, top, bottom) {
        const prefixCls = "rbt-notice";
        const NoticeWrap = document.querySelector(`.${prefixCls}-${placement}`);

        if (placement === "topRight" || placement === "topLeft") {
            NoticeWrap.style.top = `${top}px`;
        }
        if (placement === "bottomRight" || placement === "bottomLeft") {
            NoticeWrap.style.bottom = `${bottom}px`;
        }

        NoticeWrap.appendChild(notice);
    },

    _addClassName(
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
        const prefixCls = "rbt-notice";
        const prefixIconCls = "rbt-icon";

        Notice.className = `${prefixCls}-notice ${
      this.aniCls(placement).moveInCls
    }`;

        if (closable) {
            Notice.classList.add(`${prefixCls}-closable`);
        }

        NoticeBox.className = `${prefixCls}-content`;
        NoticeIcon.className = `${prefixIconCls} ${prefixIconCls}-${NoticeIcons} ${prefixCls}-notice-icon ${prefixCls}-notice-icon-${type}`;
        NoticeTitle.className = `${prefixCls}-notice-title`;
        NoticeDesc.className = `${prefixCls}-notice-desc`;
        NoticeClose.className = `${prefixCls}-notice-close`;
        NoticeCloseIcon.className = `${prefixIconCls} ${prefixIconCls}-ios-close`;
    },

    _closeInstance(notice, placement, duration) {
        // 销毁实例
        destroy({
            el: notice,
            duration,
            moveInCls: this.aniCls(placement).moveInCls,
            moveOutCls: this.aniCls(placement).moveOutCls,
            whenToDestroy: 0.5,
        });
    },

    _setKey(key, notice) {
        if (isNum(key) || isStr(key)) {
            notice.dataset.key = key;
        }
    },

    _addStyles(styles, notice) {
        notice.style.cssText = objToString(styles);
    },

    _customClassName(cls, notice) {
        if (cls && isStr(cls)) {
            notice.classList.add(cls);
        }
    },

    _addContent(title, desc, noticeTitle, noticeDes) {
        if (!title) {
            throw Error("The title of the notification reminder is mandatory");
        }
        if (!desc) {
            throw Error("The description of the notification reminder is mandatory");
        }
        noticeTitle.innerHTML = title;
        noticeDes.innerHTML = desc;
    },

    _clickHandle(notice, cb) {
        notice.onclick = () => (isFunc(cb) ? cb() : null);
    },

    _clickCloseHandle(el, notice, placement, cb) {
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

        const moveInCls = `rbt-notice-move-in${direction}`;
        const moveOutCls = `rbt-notice-move-out${direction}`;

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
        this._createInstance({
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
        this._createInstance({
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
        this._createInstance({
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
        this._createInstance({
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
        this._createInstance({
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
        const target = document.querySelectorAll(".rbt-notice-notice");
        // 判断出场位置
        let direction = "";
        Array.from(target).map((item) => {
            if (item.classList.contains("rbt-notice-move-in-left")) {
                direction = "-left";
            }
        });

        // 如果传入 key 则单独销毁该组件，反之
        if (key) {
            destroyByKey({
                key,
                target: target,
                moveInCls: `rbt-notice-move-in${direction}`,
                moveOutCls: `rbt-notice-move-out${direction}`,
                whenToDestroy: 0.5,
            });
        } else {
            destoryAll({
                el: target,
                moveInCls: `rbt-notice-move-in${direction}`,
                moveOutCls: `rbt-notice-move-out${direction}`,
                whenToDestroy: 0.5,
            });
        }
    },
};