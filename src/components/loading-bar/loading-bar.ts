/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CssTransition, type } from '../../mixins';
import PREFIX from '../prefix';

interface UpdataGlobalAPI {
    color?: string; // 进度条的颜色
    height?: number; // 进度条高度，单位 px
    duration?: number; // 隐藏时的持续时间，单位 ms
    failedColor?: string; // 失败时的进度条颜色
}

interface UpdateAPI {
    percent?: number; // 进度条进度
    status?: string; // 进度状态颜色
    show?: boolean; // 是否显示进度条
}

interface PublicMethods {
    statr(): void;
    finish(): void;
    error(): void;
    update(percent: number): void;
    destroy(): void;
}

// 全局配置
const defaults_loadingBar: {
    color: string;
    height: number;
    duration: number;
    failedColor: string;
} = {
    color: 'primary',
    height: 2,
    duration: 800,
    failedColor: 'error'
};

let timer: any;

function loadingBarInstance(): HTMLDivElement {
    const LoadingBar = document.createElement('div');
    const LoadingBarInner = document.createElement('div');

    LoadingBar.className = `${PREFIX.loadingBar}`;
    LoadingBarInner.className = `${PREFIX.loadingBar}-inner`;

    setColor('primary', LoadingBarInner);

    // 初始进度
    LoadingBarInner.style.width = '0%';

    // 设置进度条高度为全局配置的高度
    setTimeout(() => {
        LoadingBar.style.height = `${defaults_loadingBar.height}px`;
    }, 0);

    LoadingBar.appendChild(LoadingBarInner);
    document.body.appendChild(LoadingBar);

    return LoadingBar;
}

// 设置进度函数
function r_update(options: UpdateAPI): void {
    const LBar = document.querySelector(`.${PREFIX.loadingBar}`)!;
    const LBarInner = document.querySelector(`.${PREFIX.loadingBar}-inner`)!;

    // 设置进度
    // @ts-ignore
    LBarInner.style.width = `${options.percent}%`;

    const transitionConfig = {
        rmCls: true,
        timeout: 200,
        enterCls: 'rab-fade-in',
        leaveCls: 'rab-fade-out',
        hiddenParent: LBar
    };

    // 是否显示隐藏
    if (options.show) {
        CssTransition(LBarInner, {
            inOrOut: 'in',
            ...transitionConfig
        });
    } else {
        CssTransition(LBarInner, {
            inOrOut: 'out',
            ...transitionConfig
        });
    }

    setColor(options.status!, LBarInner);
}

// 隐藏进度条
function hide() {
    setTimeout(() => {
        r_update({
            show: false
        });
        setTimeout(() => {
            r_update({
                percent: 0
            });
        }, 200);
    }, defaults_loadingBar.duration);
}

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// 设置进度条状态背景颜色
function setColor(status: string, elem: any): void {
    if (status === 'error') {
        // 是否使用全局配置的 failedColor
        if (defaults_loadingBar.failedColor && defaults_loadingBar.failedColor !== 'error') {
            // @ts-ignore
            elem.style.backgroundColor = defaults_loadingBar.failedColor;

            // 在隐藏的持续时间后初始化背景色
            setTimeout(() => {
                // @ts-ignore
                elem.style.backgroundColor = '';
            }, defaults_loadingBar.duration);
        } else {
            elem.classList.add(`${PREFIX.loadingBar}-inner-failed-color-error`);

            // 在隐藏的持续时间后设为初始颜色
            setTimeout(() => {
                elem.classList.remove(`${PREFIX.loadingBar}-inner-failed-color-error`);
            }, defaults_loadingBar.duration + 200);
        }
    } else if (status === 'primary') {
        // 是否使用全局配置的 color
        if (defaults_loadingBar.color && defaults_loadingBar.color !== 'primary') {
            // @ts-ignore
            elem.style.backgroundColor = defaults_loadingBar.color;
        } else {
            elem.classList.add(`${PREFIX.loadingBar}-inner-color-primary`);
        }
    }
}

class $LoadingBar implements PublicMethods {
    readonly VERSION: string;

    constructor() {
        this.VERSION = 'v1.0';

        loadingBarInstance();
    }

    public statr(): void {
        if (timer) return;

        let percent = 0;

        timer = setInterval(() => {
            // 计算随机进度
            percent += Math.floor(Math.random() * 3 + 1);
            // 终止
            if (percent > 95) {
                clearTimer();
            }
            r_update({
                percent,
                status: 'primary',
                show: true
            });
        }, 200);
    }

    public update(percent: number): void {
        clearTimer();
        r_update({
            percent,
            status: 'success',
            show: true
        });
    }

    public finish(): void {
        clearTimer();
        r_update({
            percent: 100,
            status: 'primary',
            show: true
        });
        hide();
    }

    public error(): void {
        clearTimer();
        r_update({
            percent: 100,
            status: 'error',
            show: true
        });
        hide();
    }

    public config(options: UpdataGlobalAPI): void {
        if (options.color && type.isStr(options.color)) {
            defaults_loadingBar.color = options.color;
        }
        if (options.height && type.isNum(options.height)) {
            defaults_loadingBar.height = options.height;
        }
        if (options.duration && type.isNum(options.duration)) {
            defaults_loadingBar.duration = options.duration;
        }
        if (options.failedColor && type.isStr(options.failedColor)) {
            defaults_loadingBar.failedColor = options.failedColor;
        }
    }

    public destroy(): void {
        clearTimer();
        document.body.removeChild(document.querySelector(`.${PREFIX.loadingBar}`)!);
    }
}

export default $LoadingBar;
