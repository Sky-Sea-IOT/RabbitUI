import { warn, removeAttrs, type, destroyElem, validComps } from '../../mixins';
import PREFIX from '../prefix';

interface PublicMethods {
    config(
        elem: string
    ): {
        message: any;
        desc: any;
        icon: any;
    };
    onClose(elem: string, cb: ($this: Element) => void): void;
}

class Alert implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = document.querySelectorAll('r-alert');
        this._create(this.components);
    }

    public config(
        elem: string
    ): {
        message: any;
        desc: any;
        icon: any;
    } {
        const target: any = document.querySelector(elem);

        validComps(target, 'alert');

        const alertIcon = target?.querySelector(`.${PREFIX.alert}-icon`);
        const alertMsg = target?.querySelector(`.${PREFIX.alert}-message`);
        const alertDesc = target?.querySelector(`.${PREFIX.alert}-desc`);

        return {
            // 设置消息标题
            get message() {
                return alertMsg;
            },

            set message(newVal) {
                if (newVal != alertMsg.innerHTML) {
                    alertMsg.innerHTML = newVal;
                }
                return;
            },

            // 设置描述内容
            get desc() {
                return alertDesc;
            },

            set desc(newVal) {
                if (alertDesc) {
                    if (newVal != alertDesc.innerHTML) {
                        alertDesc.innerHTML = newVal;
                    }
                    return;
                } else {
                    // 在目标alert标签需要里先有描述内容才能使用该方式动态更新内容
                    warn(
                        'Before setting the description of this alert tag, you need to add the attribute "desc" to the tag and add content or Spaces'
                    );
                }
            },

            // 自定义图标
            get icon() {
                return alertIcon;
            },

            set icon(newVal) {
                if (alertIcon) {
                    if (newVal != alertIcon.innerHTML) {
                        alertIcon.innerHTML = newVal;
                    }
                    return;
                } else {
                    warn('This alert tag does not set the display icon');
                }
            }
        };
    }

    public onClose(elem: string, cb: ($this: Element) => void): void {
        const target: any = document.querySelector(elem);

        validComps(target, 'alert');

        // 将当前选中的组件作为参数返回出去
        const $this = target;

        const alertCloseBtn = target.querySelector(`.${PREFIX.alert}-close`);

        alertCloseBtn.addEventListener('click', () => type.isFn(cb, $this));
    }

    private _create(nodes: NodeListOf<Element>) {
        nodes.forEach((node) => {
            this._setIcon(node);
            this._setMsg(node);
            this._setDesc(node);
            this._setCloseBtn(node);

            removeAttrs(node, ['message', 'desc', 'show-icon', 'closable', 'close-text']);
        });
    }

    private _setIcon(node: Element) {
        const showIcon: boolean = this._isShowIcon(node);
        const type: string = this._getType(node);
        let iconType = '';

        if (!showIcon) return;

        if (type === 'info') {
            iconType = 'ios-information-circle';
        }
        if (type === 'success') {
            iconType = 'ios-checkmark-circle';
        }
        if (type === 'warning') {
            iconType = 'ios-alert';
        }
        if (type === 'error') {
            iconType = 'ios-close-circle';
        }

        if (this._getDesc(node)) {
            type === 'warning'
                ? (iconType = 'md-information-circle-outline')
                : (iconType += '-outline');
        }

        const AlertIcon = document.createElement('span');

        AlertIcon.className = `${PREFIX.alert}-icon`;
        AlertIcon.innerHTML = `<i class="rab-icon rab-icon-${iconType}"></i>`;

        node.classList.add(`${PREFIX.alert}-with-icon`);
        node.prepend(AlertIcon);
    }

    private _setCloseText(node: Element): string {
        return node.getAttribute(`${PREFIX.attr}close-text`) || '';
    }

    private _setMsg(node: Element) {
        const AlertMessage = document.createElement('div');
        AlertMessage.className = `${PREFIX.alert}-message`;
        AlertMessage.innerHTML = this._getMsg(node);
        node.prepend(AlertMessage);
    }

    private _setDesc(node: Element) {
        if (!this._getDesc(node)) return;

        const AlertDesc = document.createElement('div');

        AlertDesc.className = `${PREFIX.alert}-desc`;
        AlertDesc.innerHTML = this._getDesc(node);

        node.classList.add(`${PREFIX.alert}-with-desc`);
        node.appendChild(AlertDesc);
    }

    private _setCloseBtn(node: Element) {
        if (!this._isClosable(node)) return;

        const AlertCloseBtn = document.createElement('a');
        const closeText: string = this._setCloseText(node);

        AlertCloseBtn.className = `${PREFIX.alert}-close`;
        AlertCloseBtn.innerHTML = closeText
            ? closeText
            : '<i class="rab-icon rab-icon-ios-close"></i>';

        AlertCloseBtn.addEventListener('click', () => destroyElem(node, { fadeOut: true }));

        node.appendChild(AlertCloseBtn);
    }

    private _getType(node: Element): string {
        return node.getAttribute('type') || 'info';
    }

    private _isClosable(node: Element): boolean {
        return node.getAttribute('closable') === 'true' ? true : false;
    }

    private _isShowIcon(node: Element): boolean {
        return node.getAttribute('show-icon') === 'true' ? true : false;
    }

    private _getMsg(node: Element): string {
        return node.getAttribute('message') || '';
    }

    private _getDesc(node: Element) {
        return node.getAttribute('desc') || '';
    }
}

export default Alert;
