//数据类型判断
function _typeof(data) {
    const s = Object.prototype.toString.call(data);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

function isStr(s) {
    if (typeof s === "string") {
        return true;
    } else {
        throw TypeError(`${s} is a an string type`);
    }
}

function isUndef(u) {
    return u === undefined;
}

function isNum(n) {
    if (typeof n === "number") {
        return true;
    } else {
        throw TypeError(`${n} is not an number type`);
    }
}

function isObj(o) {
    if (o.constructor === Object) {
        return true;
    } else {
        throw TypeError(`${o} is not an object type`);
    }
}

function isArr(a) {
    if (a.constructor === Array) {
        return true;
    } else {
        throw TypeError(`${a} is not an array type`);
    }
}

function isFunc(f) {
    return typeof f === "function";
}

// export { _typeof, isStr, isUndef, isNum, isObj, isArr, isFunc };