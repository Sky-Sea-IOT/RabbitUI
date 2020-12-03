// LoadingBar 全局配置项
let loadingBarProgress = 0;
let loadingBarConfig = {
    color: "#1890ff",
    height: 2,
    duration: 800,
    failedColor: "#ff4d4f",
};
let timer;

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

/**
 * LoadingBar 加载进度条
 * 显示页面加载、异步请求、文件上传等的加载进度条。
 */
Rabbit.prototype.LoadingBar = {
    prefixCls: "rbt-loading-bar",
    createInstance() {
        const LoadingBar = document.createElement("div");
        const LoadingBarInner = document.createElement("div");

        LoadingBar.className = `${this.prefixCls}`;
        LoadingBarInner.className = `${this.prefixCls}-inner`;

        // 初始化
        LoadingBarInner.style.width = "0%";

        setTimeout(() => {
            this.status("primary");
            LoadingBar.style.height = `${loadingBarConfig.height}px`;
        }, 0);

        LoadingBar.appendChild(LoadingBarInner);
        document.body.appendChild(LoadingBar);
    },

    status(status) {
        const LoadingBarInner = document.querySelector(`.${this.prefixCls}-inner`);

        if (status === "primary") {
            LoadingBarInner.style.backgroundColor = loadingBarConfig.color;
        }
        if (status === "error") {
            LoadingBarInner.style.backgroundColor = loadingBarConfig.failedColor;
            // 初始化颜色
            setTimeout(
                () => (LoadingBarInner.style.backgroundColor = loadingBarConfig.color),
                loadingBarConfig.duration + 100
            );
        }
    },

    visible(flag) {
        const LoadingBar = document.querySelector(`.${this.prefixCls}`);
        const LoadingBarInner = document.querySelector(`.${this.prefixCls}-inner`);

        if (flag) {
            LoadingBar.classList.add(`${this.prefixCls}-fade-in`);
            LoadingBar.classList.remove(`${this.prefixCls}-fade-out`);
            // LoadingBarInner.style.width = `${loadingBarProgress}%`;
        } else {
            loadingBarProgress = 100;
            LoadingBarInner.style.width = `${loadingBarProgress}%`;

            setTimeout(() => {
                loadingBarProgress = 0;
                LoadingBar.classList.add(`${this.prefixCls}-fade-out`);
                LoadingBar.classList.remove(`${this.prefixCls}-fade-in`);
                LoadingBarInner.style.width = `${loadingBarProgress}%`;

                setTimeout(
                    () => LoadingBar.classList.remove(`${this.prefixCls}-fade-out`),
                    200
                );
            }, loadingBarConfig.duration);
        }
    },

    /**
     * @param {Number} percent
     */

    update(percent) {
        clearTimer();

        if (isNum(percent)) {
            document.querySelector(
                `${this.prefixCls}-inner`
            ).style.width = `${percent}%`;
        }

        this.visible(true);
    },

    start() {
        if (timer) return;

        this.visible(true);

        timer = setInterval(() => {
            loadingBarProgress += Math.floor(Math.random() * 3 + 1);

            document.querySelector(
                `.${this.prefixCls}-inner`
            ).style.width = `${loadingBarProgress}%`;

            if (loadingBarProgress > 95) clearTimer();
        }, 200);
    },

    error() {
        clearTimer();
        this.status("error");
        this.visible(false);
    },

    finish() {
        clearTimer();
        this.visible(false);
    },

    /**
     * @param {{color: string, height: number, duration: number, failedColor: string}}
     */

    config({ color, height, duration, failedColor } = {}) {
        if (color) {
            if (isStr(color)) {
                loadingBarConfig.color = color;
            }
        }
        if (height) {
            if (isNum(height)) {
                loadingBarConfig.height = height;
            }
        }
        if (duration) {
            if (isNum(duration)) {
                loadingBarConfig.duration = duration;
            }
        }
        if (failedColor) {
            if (isStr(failedColor)) {
                loadingBarConfig.failedColor = failedColor;
            }
        }
    },

    destory() {
        clearTimer();
        document.body.removeChild(document.querySelector(`.${this.prefixCls}`));
    },
};