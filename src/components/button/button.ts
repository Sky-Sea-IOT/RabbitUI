import { $el, createElem, removeAttrs, setHtml } from '../../dom-utils';
import { validComps } from '../../utils';
import PREFIX from '../prefix';

interface PublicMethods {
    config(
        elem: string
    ): {
        loading: boolean;
    };
}

class Button implements PublicMethods {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = '1.0';
        this.components = $el(`.${PREFIX.button}`, { all: true });
        this._getAllBtns(this.components);
    }

    public config(
        elem: string
    ): {
        loading: boolean;
    } {
        const target = $el(elem);

        validComps(target, 'button');

        return {
            get loading() {
                return false;
            },
            set loading(newVal) {
                if (newVal === true) {
                    target.classList.add('rab-btn-loading');
                    target.prepend(Button.prototype._loadIcon());
                } else {
                    target.classList.remove('rab-btn-loading');
                    target.querySelector('.rab-icon-loading-solid').remove();
                }
            }
        };
    }

    private _getAllBtns(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            this._setLoading(node);
            this._setIcon(node);
            removeAttrs(node, ['icon']);
        });
    }

    private _setLoading(node: Element): void {
        if (this._isLoading(node)) {
            if (node.innerHTML === '') node.classList.add(`${PREFIX.button}-icon-only`);

            node.classList.add(`${PREFIX.button}-loading`);
            node.prepend(this._loadIcon());
        }
    }

    private _setIcon(node: Element): void {
        if (!this._getIcon(node)) return;

        if (node.innerHTML === '') {
            const btnIcon = `<i class="rab-icon rab-icon-${this._getIcon(node)}"></i>`;

            node.classList.add(`${PREFIX.button}-icon-only`);

            setHtml(node, btnIcon);
        } else {
            const Icon = createElem('i');
            Icon.className = `rab-icon rab-icon-${this._getIcon(node)}`;
            node.prepend(Icon);
        }
    }

    private _isLoading(node: Element): boolean {
        return node.getAttribute('loading') === 'true';
    }

    private _loadIcon(): HTMLElement {
        const LoadIcon = createElem('i');
        LoadIcon.className = 'rab-load-loop rab-icon rab-icon-loading-solid';
        return LoadIcon;
    }

    private _getIcon(node: Element): string {
        return node.getAttribute('icon') || '';
    }
}

export default Button;
