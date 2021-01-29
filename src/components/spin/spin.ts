import PREFIX from '../prefix';
import { $el, setHtml } from '../../dom-utils';
import { CssTransition, Scrollable } from '../../mixins';

let spinZIndex = 2010;

class Spin {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-spin', { all: true });
        this._create(this.components);
    }

    public show({ content = '' } = {}): void {
        Scrollable({ scroll: false, lock: false });

        const template = `
        <div class="${PREFIX.spin}-fullscreen ${PREFIX.spin}-fullscreen-wrapper"
         style="z-index: ${spinZIndex++}">
          <r-spin fix class="${PREFIX.spin}-fullscreen 
           ${content ? `${PREFIX.spin}-show-text` : ''}" size="large">
            ${this._createChildTemplate(content)}
          </r-spin>
         </div>
         `;

        const fragment = document.createRange().createContextualFragment(template);

        document.body.appendChild(fragment);

        CssTransition($el(`.${PREFIX.spin}-fullscreen`), {
            inOrOut: 'in',
            enterCls: 'rab-fade-in'
        });
    }

    public hide(): void {
        Scrollable({ scroll: true, lock: true });

        const spinElem = $el(`.${PREFIX.spin}-fullscreen`);

        if (spinElem) document.body.removeChild(spinElem);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            const customContent = setHtml(node);

            customContent ? node.classList.add(`${PREFIX.spin}-show-text`) : '';

            setHtml(node, this._createChildTemplate(customContent));
        });
    }

    private _createChildTemplate(content: string): string {
        const template = `
          <div class="${PREFIX.spin}-main">
            <span class="${PREFIX.spin}-dot"></span>
            <div class="${PREFIX.spin}-text">${content}</div>
          </div>
        `;

        return template;
    }
}

export default Spin;
