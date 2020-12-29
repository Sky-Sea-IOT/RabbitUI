import { warn, removeAttrs, type, destroyElem } from '../../mixins';

class Alert {
  VERSION: string;
  prefixCls: string;
  prefixAttr: string;

  constructor() {
    this.VERSION = 'v1.0';
    this.prefixCls = 'rab-alert';
    this.prefixAttr = 'rb';

    const elements = document.querySelectorAll('r-alert');
    this._create(elements);
  }

  private _create(nodes: NodeListOf<Element>) {
    nodes.forEach((node, index) => {
      this._setIcon(nodes[index], node);
      this._setMsg(nodes[index], node);
      this._setDesc(nodes[index], node);
      this._setCloseBtn(nodes[index], node);

      removeAttrs(node, [
        `${this.prefixAttr}message`,
        `${this.prefixAttr}desc`,
        `${this.prefixAttr}show-icon`,
        `${this.prefixAttr}closable`,
        `${this.prefixAttr}close-text`,
      ]);
    });
  }

  private _getType(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}type`) || 'info';
  }

  private _isShowIcon(node: Element): boolean {
    return node.getAttribute(`${this.prefixAttr}show-icon`) === 'true'
      ? true
      : false;
  }

  private _isClosable(node: Element): boolean {
    return node.getAttribute(`${this.prefixAttr}closable`) === 'true'
      ? true
      : false;
  }

  private _setCloseText(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}close-text`) || '';
  }

  private _getMsg(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}message`) || '';
  }

  private _getDesc(node: Element) {
    return node.getAttribute(`${this.prefixAttr}desc`) || '';
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
      type === 'warning'
        ? (iconType = 'md-information-circle-outline')
        : (iconType += '-outline');
    }

    const AlertIcon = document.createElement('span');

    AlertIcon.className = `${this.prefixCls}-icon`;
    AlertIcon.innerHTML = `<i class="rab-icon rab-icon-${iconType}"></i>`;

    wrapper.classList.add(`${this.prefixCls}-with-icon`);
    wrapper.prepend(AlertIcon);
  }

  private _setMsg(wrapper: Element, node: Element) {
    const AlertMessage = document.createElement('div');

    AlertMessage.className = `${this.prefixCls}-message`;
    AlertMessage.innerHTML = this._getMsg(node);

    wrapper.prepend(AlertMessage);
  }

  private _setDesc(wrapper: Element, node: Element) {
    if (!this._getDesc(node)) return;

    const AlertDesc = document.createElement('div');

    AlertDesc.className = `${this.prefixCls}-desc`;
    AlertDesc.innerHTML = this._getDesc(node);

    wrapper.classList.add(`${this.prefixCls}-with-desc`);
    wrapper.appendChild(AlertDesc);
  }

  private _setCloseBtn(wrapper: Element, node: Element) {
    if (!this._isClosable(node)) return;

    const AlertCloseBtn = document.createElement('a');
    const closeText: string = this._setCloseText(node);

    AlertCloseBtn.className = `${this.prefixCls}-close`;

    AlertCloseBtn.innerHTML = closeText
      ? closeText
      : `<i class="rab-icon rab-icon-ios-close"></i>`;

    AlertCloseBtn.addEventListener('click', () =>
      destroyElem(wrapper, { fadeOut: true })
    );

    wrapper.appendChild(AlertCloseBtn);
  }

  private handleClose(btn: Element, fn: Function) {
    btn.addEventListener('click', () => type.isFn(fn));
  }

  public config(
    elem: string
  ): {
    message: any;
    desc: any;
    icon: any;
  } {
    const target: any = document.querySelector(elem);

    if (!target)
      throw new Error(`The selected element "${elem}" does not exist`);

    const alertIcon = target?.querySelector(`.${this.prefixCls}-icon`);
    const alertMsg = target?.querySelector(`.${this.prefixCls}-message`);
    const alertDesc = target?.querySelector(`.${this.prefixCls}-desc`);

    return {
      // 设置消息标题
      get message() {
        return alertMsg;
      },

      set message(newVal) {
        if (newVal !== alertMsg.innerHTML) {
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
          if (newVal !== alertDesc.innerHTML) {
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
          if (newVal !== alertIcon.innerHTML) {
            alertIcon.innerHTML = newVal;
          }
          return;
        } else {
          warn('This alert tag does not set the display icon');
        }
      },
    };
  }

  public onClose(elem: string, ev: Function) {
    const target: any = document.querySelector(elem);
    const alertCloseBtn = target?.querySelector(`.${this.prefixCls}-close`);
    this.handleClose(alertCloseBtn, ev);
  }
}

export default Alert;
