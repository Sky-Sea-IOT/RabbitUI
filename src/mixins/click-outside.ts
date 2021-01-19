import { CssTransition } from '.';

export default function listenClickOutside(target: NodeListOf<HTMLElement>): void {
    document.addEventListener('click', (e) => {
        e.stopPropagation();
        target.forEach((node) => {
            if (node.dataset.poptipShow === 'true') {
                node.dataset.poptipShow = 'false';
                CssTransition(node, {
                    inOrOut: 'out',
                    rmCls: true,
                    leaveCls: 'zoom-big-fast-leave',
                    timeout: 200
                });
            }
        });
    });
}
