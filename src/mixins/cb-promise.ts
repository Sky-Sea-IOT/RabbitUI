/**
 * 用于实例组件关闭后返回 promise，提供 then 接口在关闭后运行 callback
 * @param duration 组件关闭的时间，这里是用于组件没自己的配置项时，设为全局时间
 * @param compConfig 组件的配置项，这里是用于是否切换为组件自己设置的时间
 */
export default function usePromiseCallback(duration: number, compConfig?: any): Promise<void> {
    let timeout: number;

    // promise 触发的时机为默认时间
    timeout = duration;

    // 当组件参数以对象形式传递，并且设置了自己的 duration则修改 promise的触发时机
    typeof compConfig === 'object'
        ? compConfig.duration || compConfig.duration === 0
            ? (timeout = compConfig.duration)
            : (timeout = duration)
        : '';

    return promiseCb(timeout);
}

function promiseCb(duration: number) {
    let timer = null;
    return new Promise<void>((afterClose) => {
        timer = setTimeout(() => afterClose(), duration * 1000);
        duration === 0 ? clearTimeout(timer) : timer;
    });
}
