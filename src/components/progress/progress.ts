import { removeAttrs, type, validComps } from '../../mixins';
import PREFIX from '../prefix';

interface PublicMethods {
    config(
        elem: string
    ): {
        percent: number;
        successPercent: number;
    };
}

const PrgesIconType = {
    success: '<i class="rab-icon rab-icon-ios-checkmark-circle"></i>',
    warning: '<i class="rab-icon rab-icon-ios-alert"></i>',
    wrong: '<i class="rab-icon rab-icon-ios-close-circle"></i>'
};

class Progress implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = document.querySelectorAll('r-progress');
        this._create(this.components);
    }

    public config(
        elem: string
    ): {
        percent: number;
        successPercent: number;
    } {
        const target: any = document.querySelector(elem);

        validComps(target, 'progress');

        const progress = target.querySelector(`.${PREFIX.progress}-bg`);
        const progressSucs = target.querySelector(`.${PREFIX.progress}-success-bg`);
        const progressText = target.querySelector(`.${PREFIX.progress}-inner-text`);

        return {
            get percent() {
                return progress;
            },

            set percent(newVal) {
                if (!type.isNum(newVal) || newVal == progress.style.width) return;
                if (progressText) progressText.textContent = `${newVal}%`;

                progress.style.width = `${newVal}%`;
            },

            get successPercent() {
                return progressSucs;
            },

            set successPercent(newVal) {
                if (!type.isNum(newVal) || newVal == progressSucs.style.width) return;
                progressSucs.style.width = `${newVal}%`;
            }
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._createChildNodes(node);

            removeAttrs(node, [
                'rb-percent',
                'rb-show-text',
                'rb-text-inside',
                'rb-stroke-width',
                'rb-stroke-color',
                'rb-success-percent'
            ]);
        });
    }

    private _createChildNodes(wrapper: Element): void {
        const PgrsOuter = document.createElement('div');
        const PgrsInner = document.createElement('div');
        const PgrsBar = document.createElement('div');
        const PgrsBarSucess = document.createElement('div');

        PgrsOuter.className = `${PREFIX.progress}-outer`;
        PgrsInner.className = `${PREFIX.progress}-inner`;
        PgrsBar.className = `${PREFIX.progress}-bg`;
        PgrsBarSucess.className = `${PREFIX.progress}-success-bg`;

        this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
        this._setStrokeColor(wrapper, PgrsBar);

        PgrsInner.append(PgrsBar, PgrsBarSucess);
        PgrsOuter.appendChild(PgrsInner);
        wrapper.appendChild(PgrsOuter);

        this._showText(wrapper, PgrsBar);
    }

    private _setPercent(wrapper: Element, bar: HTMLDivElement, successBar: HTMLDivElement): void {
        bar.style.width = `${this._getPercent(wrapper)}%`;
        successBar.style.width = `${this._getSuccessPercent(wrapper)}%`;
    }

    private _setStrokeWidth(
        wrapper: Element,
        bar: HTMLDivElement,
        successBar: HTMLDivElement
    ): void {
        bar.style.height = `${this._getStrokeWidth(wrapper)}px`;
        successBar.style.height = `${this._getStrokeWidth(wrapper)}px`;
    }

    private _showText(wrapper: Element, PgrsBar: HTMLDivElement): void {
        if (!this._isShowText(wrapper)) return;

        const PgrsTextWrapper = document.createElement('div');
        const PgresText = document.createElement('span');

        PgrsTextWrapper.className = `${PREFIX.progress}-text`;
        PgresText.className = `${PREFIX.progress}-inner-text`;
        PgresText.textContent = `${this._getPercent(wrapper)}%`;

        if (!this._isTextInside(wrapper)) {
            wrapper.className = `${PREFIX.progress}-show-info`;

            if (this._getStatus(wrapper) === 'success') {
                // @ts-ignore
                PgresText.innerHTML = PrgesIconType.success;
            } else if (this._getStatus(wrapper) === 'warning') {
                // @ts-ignore
                PgresText.innerHTML = PrgesIconType.warning;
            } else if (this._getStatus(wrapper) === 'wrong') {
                // @ts-ignore
                PgresText.innerHTML = PrgesIconType.wrong;
            }

            PgrsTextWrapper.appendChild(PgresText);
            wrapper.appendChild(PgrsTextWrapper);
        } else {
            PgrsBar.appendChild(PgresText);
        }
    }

    private _setStrokeColor(wrapper: Element, PgrsBar: HTMLDivElement): void {
        const { from, to } = this._getStrokeColor(wrapper);
        if (from.length || to.length) {
            PgrsBar.style.backgroundImage = `linear-gradient(to right, ${from} 0%, ${to} 100%)`;
        }
    }

    private _getStatus(node: Element): string | null {
        return node.getAttribute(`${PREFIX.attr}-status`);
    }

    private _getPercent(node: Element): string {
        return node.getAttribute(`${PREFIX.attr}-percent`) || '0';
    }

    private _getSuccessPercent(node: Element): string {
        return node.getAttribute(`${PREFIX.attr}-success-percent`) || '0';
    }

    private _getStrokeWidth(node: Element): string {
        return node.getAttribute(`${PREFIX.attr}-stroke-width`) || '10';
    }

    private _getStrokeColor(
        node: Element
    ): {
        from: Array<string>;
        to: Array<string>;
    } {
        if (!node.getAttribute(`${PREFIX.attr}-stroke-color`)) {
            return {
                from: [],
                to: []
            };
        } else {
            /**
             * 转为真实数组
             * "['','']" -> ['','']
             */
            const strArr: string =
                node.getAttribute(`${PREFIX.attr}-stroke-color`)?.replace(/'/g, '"') || '';

            const colorArr = JSON.parse(strArr);

            return {
                from: colorArr[0],
                to: colorArr[1]
            };
        }
    }

    private _isTextInside(node: Element): boolean {
        return node.getAttribute(`${PREFIX.attr}-text-inside`) === 'true' || false;
    }

    private _isShowText(node: Element): boolean {
        if (node.getAttribute(`${PREFIX.attr}-show-text`) === 'false') return false;
        else return true;
    }
}

export default Progress;
