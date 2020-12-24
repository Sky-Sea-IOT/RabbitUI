/**
 * 移除非关联 css 的自定义属性
 */
export function removeAttrs(elem: Element, attrs: Array<string>): void {
  setTimeout(() => {
    for (let i = 0; i < attrs.length; i++) {
      const attr = attrs[i];
      elem.getAttribute(attr) ? elem.removeAttribute(attr) : null;
    }
  }, 300);
}
