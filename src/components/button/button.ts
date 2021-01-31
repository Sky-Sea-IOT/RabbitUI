import { $el, createElem, removeAttrs, setCss, setHtml } from '../../dom-utils';
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
                    target.classList.add(`${PREFIX.button}-loading`);
                    target.prepend(Button.prototype._loadIcon());
                } else {
                    target.classList.remove(`${PREFIX.button}-loading`);
                    target.querySelector(`.${PREFIX.icon}-loading-solid`).remove();
                }
            }
        };
    }

    private _getAllBtns(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            this._setLoading(node);
            this._setIcon(node);
            removeAttrs(node, ['icon', 'loading']);
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
            const btnIcon = `<i class="${PREFIX.icon} ${PREFIX.icon}-${this._getIcon(node)}"></i>`;

            node.classList.add(`${PREFIX.button}-icon-only`);

            setHtml(node, btnIcon);
        } else {
            const Icon = createElem('i');
            Icon.className = `${PREFIX.icon} ${PREFIX.icon}-${this._getIcon(node)}`;
            node.prepend(Icon);
        }
    }

    private _isLoading(node: Element): boolean {
        return node.getAttribute('loading') === 'true';
    }

    private _loadIcon(): HTMLElement {
        const LoadIcon = createElem('i');
        LoadIcon.className = `rab-load-loop ${PREFIX.icon} ${PREFIX.icon}-loading-solid`;
        setCss(LoadIcon, 'height', '25px');
        return LoadIcon;
    }

    private _getIcon(node: Element): string {
        return node.getAttribute('icon') || '';
    }
}

export default Button;
