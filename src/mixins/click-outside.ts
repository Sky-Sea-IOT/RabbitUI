import { CssTransition } from '.';

export default function clickOutside(
    target: NodeListOf<HTMLElement>,
    datasetVal: string,
    leaveCls: string
): void {
    const hideJudgment = () => {
        target.forEach((node) => {
            if (node.dataset[datasetVal] === 'true') {
                node.dataset[datasetVal] = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls,
                    timeout: 200
                });
            }
        });
    };

    document.addEventListener('focusout', (e) => {
        e.stopPropagation();
        hideJudgment();
    });

    document.addEventListener('click', (e) => {
        e.stopPropagation();
        hideJudgment();
    });
}
