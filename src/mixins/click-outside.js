import { CssTransition } from '.';
import { bind } from '../dom-utils';
/**
 * 适用tooltip、poptip的点击空白处关闭
 */
export default function clickOutside(target, datasetVal, leaveCls) {
    var hideJudgment = function () {
        target.forEach(function (node) {
            if (node.dataset[datasetVal] === 'true') {
                node.dataset[datasetVal] = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls: leaveCls,
                    timeout: 200
                });
            }
        });
    };
    bind(document, 'focusout', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
    bind(document, 'click', function (e) {
        e.stopPropagation();
        hideJudgment();
    });
}
