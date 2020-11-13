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

rabbit.LoadingBar = {
    create() {
        const prefixCls = "rbt-loading-bar";
        const LoadingBar = document.createElement("div");
        const LoadingBarInner = document.createElement("div");

        LoadingBar.className = `${prefixCls}`;
        LoadingBarInner.className = `${prefixCls}-inner`;

        // 初始化样式
        LoadingBar.style.display = "none";
        LoadingBarInner.style.width = "0%";

        setTimeout(() => {
            this.status("primary");
            LoadingBar.style.height = `${loadingBarConfig.height}px`;
        }, 0);

        LoadingBar.appendChild(LoadingBarInner);
        document.body.appendChild(LoadingBar);
    },

    status(_status) {
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

    visible(flag) {
        const LoadingBar = document.querySelector(".rbt-loading-bar");
        const LoadingBarInner = document.querySelector(".rbt-loading-bar-inner");

        if (flag) {
            LoadingBar.style.display = null;
            LoadingBar.classList.add("rbt-loading-bar-fade-in");
            // LoadingBarInner.style.width = `${loadingBarProgress}%`;
        } else {
            loadingBarProgress = 100;
            LoadingBarInner.style.width = `${loadingBarProgress}%`;
            setTimeout(() => {
                setTimeout(() => {
                    loadingBarProgress = 0;
                    LoadingBar.style.display = "none";
                    LoadingBarInner.style.width = `${loadingBarProgress}%`;
                }, 200);
                if (LoadingBar.classList.contains("rbt-loading-bar-fade-in")) {
                    CSSTransition(
                        LoadingBar,
                        "out",
                        "rbt-loading-bar-fade-in",
                        "rbt-loading-bar-fade-out",
                        190
                    );
                }
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

        this.visible(true);
    },

    start() {
        if (timer) return;

        this.visible(true);

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
        document.body.removeChild(document.querySelector(".rbt-loading-bar"));
    },
};

rabbit.LoadingBar.create();