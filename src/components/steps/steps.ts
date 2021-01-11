import { removeAttrs, type, validComps, warn } from '../../mixins';
import PREFIX from '../prefix';

interface StepConfig {
    index?: number;
    status?: string;
    title?: string;
    content?: string;
}

interface PublicMethods {
    config(
        el: string
    ): {
        current: number;
        setStep: ({ index, title, content }: StepConfig) => void;
    };
}

class Steps implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = '1.0';
        this.components = document.querySelectorAll('r-steps');
        this._create(this.components);
    }

    public config(
        el: string
    ): { current: number; setStep: ({ index, title, content }: StepConfig) => void } {
        const target: any = document.querySelector(el);

        validComps(target, 'steps');

        const {
            _getCurrent,
            _updateStatus,
            _setFinishOrErrorStatusIcon,
            _validIndexCheck
        } = Steps.prototype;

        return {
            get current() {
                return _getCurrent(target);
            },
            set current(newVal: number) {
                _updateStatus(target, newVal);
            },
            setStep({ index, status, title, content }): void {
                // 如果没传索引值则默认是第一个节点
                if (!index) index = 0;

                const children = target.children[index];

                _validIndexCheck(target.children.length - 1, index, children);

                // set status
                if (status && type.isStr(status)) {
                    children.setAttribute('status', status);
                }
                // set title
                if (title && type.isStr(title)) {
                    const titleContainer = children.querySelector(`.${PREFIX.steps}-title`);
                    titleContainer.innerHTML = title;
                }
                // set content
                if (content && type.isStr(content)) {
                    const contentContainer = children.querySelector(`.${PREFIX.steps}-content`);
                    contentContainer.innerHTML = content;
                }
            }
        };
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._setDirection(node);
            this._updateStatus(node, this._getCurrent(node));
            this._createStepItem(node);
            removeAttrs(node, ['current', 'status']);
        });
    }

    private _createStepItem(node: Element): void {
        // 该父节点下的所有 r-step 标签
        const { children } = node;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];

            const defaultsText = `${i + 1}`;

            child.innerHTML = `
             <div class="${PREFIX.steps}-tail"><i></i></div>
             <div class="${PREFIX.steps}-head">
                 <div class="${PREFIX.steps}-head-inner" id="step-${i}"></div>
             </div>
             <div class="${PREFIX.steps}-main">
                 <div class="${PREFIX.steps}-title">${this._getTitle(child)}</div>
                 <div class="${PREFIX.steps}-content">${this._getContent(child)}</div>
             </div>
            `;

            this._setFinishOrErrorStatusIcon(
                child,
                document.querySelector(`#step-${i}`)!,
                defaultsText
            );
            removeAttrs(child, ['title', 'content', 'icon']);
        }
    }

    // 设置成功或失败状态的图标
    private _setFinishOrErrorStatusIcon(
        parent: Element,
        children: Element,
        defaultText: string
    ): void {
        const Span = document.createElement('span');
        const status = Steps.prototype._geStatus(parent);
        const customIcon = Steps.prototype._getIcon(parent);

        // 是否通过标签属性 icon 自定义图标
        if (customIcon) {
            parent.classList.add(`${PREFIX.steps}-custom`);
            Span.className = `${PREFIX.steps}-icon ${PREFIX.icon} ${PREFIX.icon}-${customIcon}`;
        } // 只在状态是 finis 或 error 才添加状态图标
        else if (status === 'finish' || status === 'error') {
            Span.className = `${PREFIX.steps}-icon ${PREFIX.icon}`;
            if (status === 'finish') {
                Span.classList.add(`${PREFIX.icon}-ios-checkmark`);
            }
            if (status === 'error') {
                Span.classList.add(`${PREFIX.icon}-ios-close`);
            }
            // 如果以上条件都没有则为默认标记文本
        } else {
            Span.innerHTML = defaultText;
        }

        children.appendChild(Span);
    }

    // _updateStatus 方法里面使用的是 Steps.prototype
    // 而不用 this 来调用方法，是因为在对外方法 config 里返回了一个 children 方法，形成了闭包,
    // 由于它需要使用到 _updateStatus 方法, 所以在 children 方法内部通过 this 调用会报错

    private _updateStatus(node: Element, current: number): void {
        const total = node.children.length - 1;
        const currentStep = node.children[current];

        Steps.prototype._validIndexCheck(total, current, currentStep);

        validComps(currentStep, 'step');

        const isParentStatus = node.getAttribute('status');
        const isChildStatus = currentStep.getAttribute('status');

        let status: string;
        // 如果当前步骤没有状态则默认设为 process 状态
        if (!isParentStatus && !isChildStatus) {
            status = 'process';
            // 父节点有设置状态并且当前选中的子节点没有设置，则采用父节点的状态，否则反之
        } else if (isParentStatus && !isChildStatus) {
            status = isParentStatus;
        } else if (isChildStatus) {
            status = isChildStatus;
        }
        // @ts-ignore
        Steps.prototype._setCurrentStatus(currentStep, status);

        Steps.prototype._setPrevStatus(node.children, current);
        Steps.prototype._setNextStatus(node.children, total, current);
    }

    private _setCurrentStatus(node: Element, status?: string): void {
        if (status) {
            node.setAttribute('status', status);
        } else {
            // 如果没有设置status则默认为wait
            node.setAttribute('status', this._geStatus(node) || 'wait');
        }
    }

    // 从当前节点位置开始，设置其前面的所有节点状态为 finish
    private _setPrevStatus(node: HTMLCollection, current: number): void {
        for (let prev = 0; prev < current; prev++) {
            // 除去最开始的步骤，当前步骤是正在进行中的，那么它前面的状态一定是完成或者错误
            // 因此，前面的步骤不能随便的设为等待或进行中状态
            // 除了 error 状态其余前面的节点都覆盖为 finish 状态
            if (this._geStatus(node[prev]) !== 'error') {
                node[prev].setAttribute('status', 'finish');
            }
        }
    }

    // 从当前节点位置开始，设置其后面的所有节点状态为 wait
    private _setNextStatus(node: HTMLCollection, total: number, current: number): void {
        for (let next = total; next > current; next--) {
            if (!this._geStatus(node[next])) {
                node[next].setAttribute('status', 'wait');
            }
        }
    }

    private _setDirection(node: Element): void {
        if (!node.getAttribute('direction')) {
            node.setAttribute('direction', 'horizontal');
        }
    }

    private _getCurrent(node: Element): number {
        return Number(node.getAttribute('current')) || 0;
    }

    private _geStatus(node: Element): string | null {
        return node.getAttribute('status');
    }

    private _getTitle(node: Element): string {
        return node.getAttribute('title') || '';
    }

    private _getContent(node: Element): string {
        return node.getAttribute('content') || '';
    }

    private _getIcon(node: Element): string {
        return node.getAttribute('icon') || '';
    }

    // 判断设置的索引值是否超过了最大索引值
    private _validIndexCheck(total: number, current: number, inode: Element): void {
        // 如果超过最大索引值则该节点是不存在的
        if (!inode) {
            warn(
                `The current total number of steps is only ${total}, you cannot set it to ${current}`
            );
            return;
        }
    }
}

export default Steps;
