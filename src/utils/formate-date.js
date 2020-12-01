/**
 * 格式化时间戳输出年月日的格式
 * @param {number} _time
 * @returns {string}
 */
const formatDate = (_time) => {
    const time = new Date(_time);
    const format = "yyyy-mm-dd";
    const transformFormat = (t) => (t < 10 ? "0" : "") + t;

    return format.replace(/yyyy|mm|dd/g, (str) => {
        switch (str) {
            case "yyyy":
                return transformFormat(time.getFullYear());
            case "mm":
                return transformFormat(time.getMonth() + 1);
            case "dd":
                return transformFormat(time.getDate());
        }
    });
};

/**
 * 格式化时间戳输出年月日时分秒的格式
 * @param {number} _time
 * @returns {string}
 */
const formatDateTime = (_time) => {
    const time = new Date(_time);
    const format = "yyyy-MM-dd HH:mm:ss";
    const transformFormat = (t) => (t < 10 ? "0" : "") + t;

    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (str) => {
        switch (str) {
            case "yyyy":
                return transformFormat(time.getFullYear());
            case "MM":
                return transformFormat(time.getMonth() + 1);
            case "mm":
                return transformFormat(time.getMinutes());
            case "dd":
                return transformFormat(time.getDate());
            case "HH":
                return transformFormat(time.getHours());
            case "ss":
                return transformFormat(time.getSeconds());
        }
    });
};

// export default {
//     formatDate,
//     formatDateTime,
// };