const hasClass = (elem: HTMLElement, cls: String) => {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false;
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};
