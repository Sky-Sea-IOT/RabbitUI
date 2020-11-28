/**
 * 通过 then 接口在关闭后运行 callback
 * 例如：message 将要结束时通过 then 显示新的 message
 * @param {number} duration 触发 promise 回调的时间
 * @returns {promise}
 */
function PromiseAfterClose(duration) {
    const callback = new Promise((reslove) =>
        setTimeout(() => reslove(), duration * 1000)
    );
    return callback;
}