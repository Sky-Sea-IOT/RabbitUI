import { type } from '.';

/**
 * 设置属性是否支持传入 HTML 片段
 * @param elem
 * @param content
 * @param use
 */
export default function isUseHTMLString(elem: HTMLElement, content: string, use?: boolean) {
  type.isUndef(use) ? (use = false) : use;

  if (use) elem.innerHTML = content;
  else elem.innerText = content;
}
