/**
 * 将对象转换为json字符串并去除花括号，替换逗号为分号
 * 用于将实例方法的 style 选项
 * @param {object} obj
 * @return {string}
 */
function objToString(obj) {
    let str;
    let b;
    let c;
    let result;
    let errorType;

    if (isObj(obj)) {
        (str = JSON.stringify(obj).replace(/"([^"]*)"/g, '$1')),
        (b = str.replace(/,/g, '; ')),
        (c = b.replace(/{/, '')),
        (result = c.replace(/}/, ''));
    } else {
        errorType = _typeof(obj);
        console.error(
            `[Rabbit warn] the property "style" is an object instead of "${errorType}"`
        );
    }
    return result;
}

// export default objToString