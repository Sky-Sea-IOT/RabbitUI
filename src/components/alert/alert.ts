import { warn, removeAttrs } from '../../mixins';

class Alert {
  prefixCls: string;

  constructor() {
    this.prefixCls = 'rab-alert';
    const elements = document.querySelectorAll('rab-alert');
    this._create(elements);
  }

  private _create(elem: NodeListOf<Element>) {
    elem.forEach((node, index) => {
      // 获取所有节点内容用于设置 alert 的描述内容
      node.childNodes.forEach(nodeChild => {
        // 递归
        if (nodeChild.nodeName.toLowerCase() === 'rab-alert') {
          // @ts-ignore
          this._create(nodeChild.childNodes);
        } else {
          this._setDesc(node, nodeChild);
        }
      });
      this._setIcon(elem[index], node);
      this._setMsg(elem[index], node);
      this._setCloseBtn(elem[index], node);
      removeAttrs(node, ['message', 'show-icon', 'closable', 'close-text']);
    });
  }

  private _getType(node: Element): string {
    return node.getAttribute('type') || 'info';
  }

  private _isShowIcon(node: Element): boolean {
    return node.getAttribute('show-icon') === 'true' ? true : false;
  }

  private _isClosable(node: Element): boolean {
    return node.getAttribute('closable') === 'true' ? true : false;
  }

  private _setCloseText(node: Element): string {
    return node.getAttribute('close-text') || '';
  }

  private _getMsg(node: Element): string {
    return node.getAttribute('message') || '';
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

    if (node.childElementCount > 0) {
      type === 'warning'
        ? (iconType = 'md-information-circle-outline')
        : (iconType += '-outline');
    }

    const AlertIcon = document.createElement('span');

    AlertIcon.className = `${this.prefixCls}-icon`;
    AlertIcon.innerHTML = `<i class="rab-icon rab-icon-${iconType}"></i>`;

    wrapper.setAttribute('show-with-icon', 'true');
    wrapper.prepend(AlertIcon);
  }

  private _setMsg(wrapper: Element, node: Element) {
    const AlertMessage = document.createElement('div');

    AlertMessage.className = `${this.prefixCls}-message`;
    AlertMessage.innerHTML = this._getMsg(node);

    wrapper.prepend(AlertMessage);
  }

  private _setDesc(wrapper: Element, node: ChildNode) {
    const AlertDesc = document.createElement('div');
    AlertDesc.className = `${this.prefixCls}-desc`;
    AlertDesc.appendChild(node);

    wrapper.setAttribute('show-desc', 'true');
    wrapper.appendChild(AlertDesc);
  }

  private _setCloseBtn(wrapper: Element, node: Element) {
    if (!this._isClosable(node)) return;

    const closeText: string = this._setCloseText(node);
    const AlertCloseBtn = document.createElement('a');

    AlertCloseBtn.className = `${this.prefixCls}-close`;

    AlertCloseBtn.innerHTML = closeText
      ? closeText
      : `<i class="rab-icon rab-icon-ios-close"></i>`;

    wrapper.appendChild(AlertCloseBtn);
  }

  public config(elem: string) {
    const target: any = document.querySelector(elem);
    const alertMsg = target?.querySelector(`.${this.prefixCls}-message`);
    const alertDesc = target?.querySelector(`.${this.prefixCls}-desc`);
    const alertCloseBtn = target?.querySelector(`.${this.prefixCls}-close`);

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
        return alertMsg;
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
            'The alert tag requires a description in order to use this method to dynamically update content'
          );
          return;
        }
      },
      // 关闭后的回调
      onClose(fn: Function) {
        alertCloseBtn.addEventListener('click', () => {
          typeof fn === 'function' ? fn() : null;
        });
      },
    };
  }
}

export default Alert;
