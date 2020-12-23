/**
 * 移除自定义的属性
 */
export const removeAttrs = (elem: Element, attrs: Array<string>) => {
  setTimeout(() => {
    attrs.map(attr => {
      if (attr) {
        elem.removeAttribute(attr);
      }
    });
  }, 300);
};
