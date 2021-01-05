import { warn, removeAttrs, type, destroyElem, validComps } from '../../mixins';

const AlertPrefixCls = 'rab-alert';
const AlertPrefixAttr = 'rb';

class Alert {
  VERSION: string;
  components: any;

  constructor() {
    this.VERSION = 'v1.0';
    this.components = document.querySelectorAll('r-alert');
    this._create(this.components);
  }

  private _create(nodes: NodeListOf<Element>) {
    nodes.forEach((node, index) => {
      this._setIcon(nodes[index], node);
      this._setMsg(nodes[index], node);
      this._setDesc(nodes[index], node);
      this._setCloseBtn(nodes[index], node);

      removeAttrs(node, [
        `${AlertPrefixAttr}-message`,
        `${AlertPrefixAttr}-desc`,
        `${AlertPrefixAttr}-show-icon`,
        `${AlertPrefixAttr}-closable`,
        `${AlertPrefixAttr}-close-text`,
      ]);
    });
  }

  private _setIcon(wrapper: Element, node: Element) {
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
      type === 'warning' ? (iconType = 'md-information-circle-outline') : (iconType += '-outline');
    }

    const AlertIcon = document.createElement('span');

    AlertIcon.className = `${AlertPrefixCls}-icon`;
    AlertIcon.innerHTML = `<i class="rab-icon rab-icon-${iconType}"></i>`;

    wrapper.classList.add(`${AlertPrefixCls}-with-icon`);
    wrapper.prepend(AlertIcon);
  }

  private _setCloseText(node: Element): string {
    return node.getAttribute(`${AlertPrefixAttr}close-text`) || '';
  }

  private _setMsg(wrapper: Element, node: Element) {
    const AlertMessage = document.createElement('div');
    AlertMessage.className = `${AlertPrefixCls}-message`;
    AlertMessage.innerHTML = this._getMsg(node);
    wrapper.prepend(AlertMessage);
  }

  private _setDesc(wrapper: Element, node: Element) {
    if (!this._getDesc(node)) return;

    const AlertDesc = document.createElement('div');

    AlertDesc.className = `${AlertPrefixCls}-desc`;
    AlertDesc.innerHTML = this._getDesc(node);

    wrapper.classList.add(`${AlertPrefixCls}-with-desc`);
    wrapper.appendChild(AlertDesc);
  }

  private _setCloseBtn(wrapper: Element, node: Element) {
    if (!this._isClosable(node)) return;

    const AlertCloseBtn = document.createElement('a');
    const closeText: string = this._setCloseText(node);

    AlertCloseBtn.className = `${AlertPrefixCls}-close`;
    AlertCloseBtn.innerHTML = closeText ? closeText : `<i class="rab-icon rab-icon-ios-close"></i>`;

    AlertCloseBtn.addEventListener('click', () => destroyElem(wrapper, { fadeOut: true }));

    wrapper.appendChild(AlertCloseBtn);
  }

  private _getType(node: Element): string {
    return node.getAttribute(`${AlertPrefixAttr}-type`) || 'info';
  }

  private _isClosable(node: Element): boolean {
    return node.getAttribute(`${AlertPrefixAttr}-closable`) === 'true' ? true : false;
  }

  private _isShowIcon(node: Element): boolean {
    return node.getAttribute(`${AlertPrefixAttr}-show-icon`) === 'true' ? true : false;
  }

  private _getMsg(node: Element): string {
    return node.getAttribute(`${AlertPrefixAttr}-message`) || '';
  }

  private _getDesc(node: Element) {
    return node.getAttribute(`${AlertPrefixAttr}-desc`) || '';
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

    const alertIcon = target?.querySelector(`.${AlertPrefixCls}-icon`);
    const alertMsg = target?.querySelector(`.${AlertPrefixCls}-message`);
    const alertDesc = target?.querySelector(`.${AlertPrefixCls}-desc`);

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
      },
    };
  }

  public onClose(elem: string, cb: Function) {
    const target: any = document.querySelector(elem);
    // 将当前选中的组件作为参数返回出去
    let $this: HTMLElement;

    validComps(target, 'alert');

    $this = target;

    const alertCloseBtn = target.querySelector(`.${AlertPrefixCls}-close`);

    alertCloseBtn.addEventListener('click', () => type.isFn(cb, $this));
  }
}

export default Alert;
