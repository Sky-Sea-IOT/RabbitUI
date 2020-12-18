const siblings = (elem: HTMLElement): Array<NodeList> => {
  let r = [];
  let n = elem.parentNode.firstChild;
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      r.push(n);
    }
  }
  return r;
};
