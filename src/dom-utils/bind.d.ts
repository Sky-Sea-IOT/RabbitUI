/**
 * 解决事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
export declare function bind(obj: Element | HTMLElement | Window | any, type: string, callback: any): void;
/**
 * 解决移除事件监听兼容性问题
 * @param {Object} obj对象
 * @param {String} type事件类型,不带'on'前缀
 * @param {Function} callback事件处理程序
 */
export declare function unbind(obj: Element | HTMLElement | Window | any, type: string, callback: any): void;
