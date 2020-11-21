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
    _createInstance() {
        const prefixCls = "rbt-loading-bar";
        const LoadingBar = document.createElement("div");
        const LoadingBarInner = document.createElement("div");

        LoadingBar.className = `${prefixCls}`;
        LoadingBarInner.className = `${prefixCls}-inner`;

        // 初始化
        LoadingBarInner.style.width = "0%";

        setTimeout(() => {
            this._status("primary");
            LoadingBar.style.height = `${loadingBarConfig.height}px`;
        }, 0);

        LoadingBar.appendChild(LoadingBarInner);
        document.body.appendChild(LoadingBar);
    },

    _status(_status) {
        const LoadingBarInner = document.querySelector(".rbt-loading-bar-inner");

        if (_status === "primary") {
            LoadingBarInner.style.backgroundColor = loadingBarConfig.color;
        }
        if (_status === "error") {
            LoadingBarInner.style.backgroundColor = loadingBarConfig.failedColor;
            // 初始化颜色
            setTimeout(
                () => (LoadingBarInner.style.backgroundColor = loadingBarConfig.color),
                loadingBarConfig.duration + 100
            );
        }
    },

    _visible(flag) {
        const LoadingBar = document.querySelector(".rbt-loading-bar");
        const LoadingBarInner = document.querySelector(".rbt-loading-bar-inner");

        if (flag) {
            LoadingBar.classList.add("rbt-loading-bar-fade-in");
            LoadingBar.classList.remove("rbt-loading-bar-fade-out");
            // LoadingBarInner.style.width = `${loadingBarProgress}%`;
        } else {
            loadingBarProgress = 100;
            LoadingBarInner.style.width = `${loadingBarProgress}%`;

            setTimeout(() => {
                loadingBarProgress = 0;
                LoadingBar.classList.add("rbt-loading-bar-fade-out");
                LoadingBar.classList.remove("rbt-loading-bar-fade-in");
                LoadingBarInner.style.width = `${loadingBarProgress}%`;

                setTimeout(
                    () => LoadingBar.classList.remove("rbt-loading-bar-fade-out"),
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
                ".rbt-loading-bar-inner"
            ).style.width = `${percent}%`;
        }

        this._visible(true);
    },

    start() {
        if (timer) return;

        this._visible(true);

        timer = setInterval(() => {
            loadingBarProgress += Math.floor(Math.random() * 3 + 1);

            document.querySelector(
                ".rbt-loading-bar-inner"
            ).style.width = `${loadingBarProgress}%`;

            if (loadingBarProgress > 95) clearTimer();
        }, 200);
    },

    error() {
        clearTimer();
        this._status("error");
        this._visible(false);
    },

    finish() {
        clearTimer();
        this._visible(false);
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
        document.body.removeChild(document.querySelector(".rbt-loading-bar"));
    },
};