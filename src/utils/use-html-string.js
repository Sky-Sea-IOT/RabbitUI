import { setHtml, setText } from '../dom-utils';
/**
 * 设置属性是否支持传入 HTML 片段
 * @param elem
 * @param content
 * @param use
 */
export default function isUseHTMLString(elem, content, use) {
    use ? setHtml(elem, content) : setText(elem, content);
}
