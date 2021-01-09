import { removeAttrs, type, validComps, warn } from '../../mixins';
import PREFIX from '../prefix';

interface PublicMethods {
    config(
        el: string
    ): {
        count: number;
        text: string;
        dot: boolean;
    };
}

class Badge implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = document.querySelectorAll('r-badge');
        this._create(this.components);
    }

    public config(
        el: string
    ): {
        count: number;
        text: string;
        dot: boolean;
    } {
        const target: any = document.querySelector(el);

        validComps(target, 'badge');

        const countContainer = target.querySelector(`.${PREFIX.badge}-count`);
        const dotContainer = target.querySelector(`.${PREFIX.badge}-dot`);

        const maxCount = Badge.prototype._getMaxCount(target);
        const showZero = Badge.prototype._showZero(target);

        return {
            get count() {
                return countContainer?.textContent;
            },
            set count(newVal: number) {
                if (countContainer && type.isNum(newVal)) {
                    if (newVal > maxCount) {
                        Badge.prototype._setMaxCount(countContainer, maxCount);
                    } else {
                        countContainer.textContent = newVal;

                        newVal <= 0 && !showZero
                            ? (countContainer.style.display = 'none')
                            : (countContainer.style.display = '');
                    }
                } else {
                    warn(`The count value of this badge cannot be set --> "${el}"`);
                }
            },
            get text() {
                return countContainer?.textContent;
            },
            set text(newVal: string) {
                if (!type.isStr(newVal)) {
                    warn(`The text value of this badge cannot be set --> "${el}"`);
                    return;
                }

                countContainer.textContent = newVal;
            },
            get dot() {
                return dotContainer;
            },
            set dot(newVal: boolean) {
                if (!dotContainer) {
                    warn(`Unable to set this badge to dot --> "${el}"`);
                    return;
                }

                if (type.isBol(newVal) && newVal) {
                    dotContainer.style.display = '';
                } else {
                    dotContainer.style.display = 'none';
                }
            }
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._setCount(node);
            this._setStatusWithColor(node);

            removeAttrs(node, [
                'count',
                'text',
                'status',
                'color',
                'show-zero',
                'max-count',
                'dot'
            ]);
        });
    }

    private _setCount(node: Element): void {
        const count = this._getCount(node);
        const maxCount = this._getMaxCount(node);

        const BadgeCount = document.createElement('sup');
        BadgeCount.className = `${PREFIX.badge}-count`;

        if (count || count === 0) {
            // 显示的数字大于maxCount时，显示${maxCount}+
            if (count > maxCount) {
                this._setMaxCount(BadgeCount, maxCount);
            } else {
                // 数字为 0 时隐藏或者展示 Badge
                if (count <= 0 && !this._showZero(node)) {
                    BadgeCount.style.display = 'none';
                } else {
                    BadgeCount.textContent = `${count}`;
                }
            }
            this._setDot(node, BadgeCount);
        }

        if (!this._getStatus(node) && !this._getColor(node)) {
            node.appendChild(BadgeCount);
            // 状态点外观不需要设置为独立展示
            this._setAlone(BadgeCount);
        }

        this._setText(node, BadgeCount);
        this._setOffset(node, BadgeCount);
    }

    private _setMaxCount(node: Element, maxCount: number): void {
        node.textContent = `${maxCount}+`;
    }

    private _setDot(node: Element, children: HTMLElement): void {
        if (!this._showDot(node)) return;
        // 设置为小红点则不显示任何计数内容
        children.innerHTML = '';
        children.style.display = '';
        children.className = `${PREFIX.badge}-dot`;
    }

    private _setText(parent: Element, children: HTMLElement): void {
        // 区分与标签属性 status 或 color 配合的 text 属性
        if (!this._getStatus(parent) && !this._getColor(parent)) {
            const text = this._getText(parent);
            if (text) {
                children.style.display = '';
                children.textContent = text;
            }
        }
    }

    private _setAlone(children: Element): void {
        if (!children.previousElementSibling) {
            children.classList.add(`${PREFIX.badge}-count-alone`);
        }
    }

    private _setOffset(parent: Element, children: HTMLElement) {
        const offset = this._getOffset(parent);

        children.style.marginTop = `${offset?.x}px`;
        children.style.marginRight = `${offset?.y}px`;
    }

    private _setStatusWithColor(node: Element): void {
        const status = this._getStatus(node);
        const color = this._getColor(node);
        const text = this._getText(node);

        if (!status && !color) return;

        const BadgeStatusDot = document.createElement('span');
        const BadgeStatusText = document.createElement('span');

        if ((text && status) || (text && color)) BadgeStatusText.textContent = text;

        let statusCls: string;
        let colorCls = '';

        status ? (statusCls = `${PREFIX.badge}-status-${status}`) : (statusCls = '');

        // 设置更多预设的状态点颜色，或者自定义颜色
        if (
            color === 'blue' ||
            color === 'green' ||
            color === 'red' ||
            color === 'yellow' ||
            color === 'magenta' ||
            color === 'volcano' ||
            color === 'orange' ||
            color === 'gold' ||
            color === 'lime' ||
            color === 'cyan' ||
            color === 'geekblue' ||
            color === 'purple'
        ) {
            colorCls = `${PREFIX.badge}-status-${color}`;
        } else {
            BadgeStatusDot.style.backgroundColor = color;
        }

        BadgeStatusDot.className = `${PREFIX.badge}-status-dot ${statusCls} ${colorCls}`;
        BadgeStatusText.className = `${PREFIX.badge}-status-text`;

        node.append(BadgeStatusDot, BadgeStatusText);
    }

    private _getCount(node: Element) {
        return Number(node.getAttribute('count'));
    }

    private _getMaxCount(node: Element): number {
        return Number(node.getAttribute('max-count')) || 99;
    }

    private _getOffset(
        node: Element
    ):
        | {
              x: any | number;
              y: any | number;
          }
        | undefined {
        // 转为真实数组，如果赋值是 offset = ['0','1'] 这样的则会报错
        const offset = JSON.parse(node.getAttribute('offset') || '[]');
        // 如果是数组，那么不论写了多少个值都只返回前两个
        if (type.isArr(offset) && offset.length > 0) {
            return {
                x: offset[0],
                y: offset[1]
            };
        }
    }

    private _getStatus(node: Element): string {
        return node.getAttribute('status') || '';
    }

    private _getColor(node: Element): string {
        return node.getAttribute('color') || '';
    }

    private _getText(node: Element): string {
        return node.getAttribute('text') || '';
    }

    private _showZero(node: Element): boolean {
        return node.getAttribute('show-zero') === 'true';
    }

    private _showDot(node: Element): boolean {
        return node.getAttribute('dot') === 'true';
    }
}

export default Badge;
