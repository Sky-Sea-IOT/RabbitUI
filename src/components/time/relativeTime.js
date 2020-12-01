/**
 * 把时间戳或 Date自动转为相对于当前的时间。
 * @param  {number} stringTime 时间戳或 Date
 * @return {string} 输出格式化的展示，格式：21小时前
 */
const getRelativeTime = (stringTime) => {
    if (!stringTime) return "--";
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
    const time1 = new Date().getTime(); //当前的时间戳
    const time2 = Date.parse(new Date(stringTime)); //指定时间的时间戳
    const time = time1 - time2;

    let result = "";

    if (time < 0) {
        result = "--";
    } else if (time / year >= 1) {
        result = `${Math.floor(time / year)}年前`;
    } else if (time / month >= 1) {
        result = `${Math.floor(time / month)}个月前`;
    } else if (time / week >= 1) {
        result = `${Math.floor(time / week)}周前`;
    } else if (time / day >= 1) {
        result = `${Math.floor(time / day)}天前`;
    } else if (time / hour >= 1) {
        result = `${Math.floor(time / hour)}小时前`;
    } else if (time / minute >= 1) {
        result = `${Math.floor(time / minute)}分钟前`;
    } else {
        result = "刚刚";
    }
    return result;
};

// export default getRelativeTime;