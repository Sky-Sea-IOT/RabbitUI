import { CssTransition, destroyElem, destroyElemByKey, isUseHTMLString, type } from '../../mixins';
import usePromiseCallback from '../../mixins/cb-promise';

interface MsgGlobalAPI {
  top?: number; // 消息从顶部弹出时，距离顶部的位置，单位像素
  duration?: number; // 默认自动关闭延时，单位秒
}

interface MessageAPI {
  key?: string | number; // 当前消息唯一标志
  content?: string; // 提示内容
  duration?: number; // 自动关闭的延时，单位秒，不关闭可以写 0
  onClose?: Function; // 点击消息关闭按钮时的回调
  closable?: boolean; // 是否显示关闭按钮
  background?: boolean; // 是否显示背景色
  dangerouslyUseHTMLString?: boolean; // 是否支持传入 HTML 片段
}

const iconTypes = {
  info: 'ios-information-circle',
  success: 'ios-checkmark-circle',
  warning: 'ios-alert',
  error: 'ios-close-circle',
  loading: 'loading-solid',
};

const defaults_message: {
  top: number;
  duration: number;
} = {
  top: 24,
  duration: 3,
};

let zIndex: number = 1010;

// 创建实例的最外层父容器
function messageInstanceWrapper(): HTMLDivElement {
  const MsgWrapper = document.createElement('div');
  MsgWrapper.className = 'rab-message';
  MsgWrapper.style.zIndex = `${zIndex}`;
  setTimeout(() => (MsgWrapper.style.top = `${defaults_message.top}px`), 0);
  document.body.appendChild(MsgWrapper);
  return MsgWrapper;
}

class Message {
  VERSION: string;
  prefixCls: string;
  prefixChildCls: string;
  prefixKey: string;
  instances: Array<HTMLElement>;
  msgMoveEnter: string;
  msgMoveLeave: string;

  constructor() {
    this.VERSION = 'v1.0';

    this.prefixCls = 'rab-message';
    this.prefixChildCls = `${this.prefixCls}-notice`;
    this.prefixKey = 'rb-message';

    // 存储已经创建的实例，在 destroy方法里需要用到
    this.instances = [];

    this.msgMoveEnter = `${this.prefixCls}-move-enter`;
    this.msgMoveLeave = `${this.prefixCls}-move-leave`;

    messageInstanceWrapper();
  }

  private _autoSetZindex(): void {
    // 每次创建实例自动增加最外层父容器的层级
    zIndex++;
    // @ts-ignore
    document.querySelector(`.${this.prefixCls}`).style.zIndex = `${zIndex}`;
  }

  private _createInstance(_type: string, config: string | MessageAPI): HTMLDivElement {
    this._autoSetZindex();

    const Message = document.createElement('div');
    const MsgContentWrap = document.createElement('div');
    const MsgContentBox = document.createElement('div');
    const MsgInfoBox = document.createElement('div');
    const MsgIcon = document.createElement('i');
    const MsgText = document.createElement('span');

    this._setCls(_type, Message, MsgContentWrap, MsgContentBox, MsgInfoBox, MsgIcon);
    this._setContent(MsgText, config);
    this._setIcon(_type, MsgIcon);

    // 参数 config 为字符串
    if (typeof config === 'string') {
      this._autoClose(Message, defaults_message.duration);
    }

    // 参数 config 为对象
    if (typeof config === 'object') {
      let { key, closable, duration, onClose, background } = config;

      type.isUndef(closable) ? (closable = false) : closable;
      type.isUndef(onClose) ? (onClose = () => {}) : closable;
      type.isUndef(background) ? (background = false) : background;

      // 为每个实例自己的 duration 参数设置默认值，如果有传入值则使用自定义的值
      type.isUndef(duration) ? (duration = defaults_message.duration) : duration;

      // 当全局的 duration 不为 3 时说明进行了全局配置进行改变
      defaults_message.duration !== 3 ? (duration = defaults_message.duration) : '';

      this._setClosable(closable, Message, MsgContentWrap, onClose);
      this._setBackground(Message, MsgContentWrap, background);
      this._autoClose(Message, duration);
      this._setKey(Message, key);
    }

    MsgContentWrap.appendChild(MsgContentBox);
    MsgContentBox.append(MsgInfoBox);
    MsgInfoBox.append(MsgIcon, MsgText);
    Message.appendChild(MsgContentWrap);

    document.querySelector(`.${this.prefixCls}`)!.appendChild(Message);

    // 存放每次创建的实例
    this.instances.push(Message);

    CssTransition(Message, {
      inOrOut: 'in',
      enterCls: this.msgMoveEnter,
      rmCls: true,
    });

    return Message;
  }

  private _setCls(
    type: string,
    node1: HTMLElement,
    node2: HTMLElement,
    node3: HTMLElement,
    node4: HTMLElement,
    node5: HTMLElement
  ): void {
    node1.className = `${this.prefixChildCls}`;
    node2.className = `${this.prefixChildCls}-content ${this.prefixChildCls}-content-${type}`;
    node3.className = `${this.prefixChildCls}-content-text`;
    node4.className = `${this.prefixCls}-${type}`;
    node5.className = 'rab-icon';
  }

  private _setIcon(type: string, icon: HTMLElement): void {
    type === 'loading' ? icon.classList.add('rab-load-loop') : '';
    // @ts-ignore
    icon.classList.add(`rab-icon-${iconTypes[type]}`);
  }

  private _setContent(node: HTMLElement, cfg: string | MessageAPI): void {
    if (typeof cfg === 'string') {
      isUseHTMLString(node, cfg, false);
    } else if (typeof cfg === 'object' && cfg.content) {
      isUseHTMLString(node, cfg.content, cfg.dangerouslyUseHTMLString);
    }
  }

  private _setClosable(
    closable: any,
    parent: HTMLElement,
    children: HTMLElement,
    onClose: any
  ): void {
    if (!closable) return;

    parent.classList.add(`${this.prefixChildCls}-closable`);

    const MsgCloseBtn = document.createElement('a');

    MsgCloseBtn.className = `${this.prefixChildCls}-close`;
    MsgCloseBtn.innerHTML = `<i class="rab-icon rab-icon-ios-close"></i>`;

    this._handleClose(parent, MsgCloseBtn, onClose);

    children.appendChild(MsgCloseBtn);
  }

  private _setKey(node: HTMLElement, key: any): void {
    if (!key) return;
    node.setAttribute(`${this.prefixKey}-key`, key);
  }

  private _autoClose(node: HTMLElement, duration: any): void {
    destroyElem(node, {
      duration,
      clsLeave: this.msgMoveLeave,
    });
  }

  private _handleClose(parent: HTMLElement, closeBtn: HTMLElement, onClose: any): void {
    closeBtn.addEventListener('click', () => {
      // 手动关闭后的回调
      type.isFn(onClose);

      this.instances.length -= 1;

      destroyElem(parent, {
        duration: 0.1,
        clsEnter: this.msgMoveEnter,
        clsLeave: this.msgMoveLeave,
      });
    });
  }

  private _setBackground(node: HTMLElement, children: HTMLElement, background: any): void {
    if (!background) return;
    node.classList.add(`${this.prefixChildCls}-with-background`);
    children.classList.add(`${this.prefixChildCls}-content-background`);
  }

  public info(config: string | MessageAPI): Promise<void> {
    this._createInstance('info', config);
    // message 结束时提供 then 接口在关闭后运行 callback
    return usePromiseCallback(defaults_message.duration, config);
  }

  public success(config: string | MessageAPI): Promise<void> {
    this._createInstance('success', config);
    return usePromiseCallback(defaults_message.duration, config);
  }

  public warning(config: string | MessageAPI): Promise<void> {
    this._createInstance('warning', config);
    return usePromiseCallback(defaults_message.duration, config);
  }

  public error(config: string | MessageAPI): Promise<void> {
    this._createInstance('error', config);
    return usePromiseCallback(defaults_message.duration, config);
  }

  public loading(config: string | MessageAPI): Promise<void> {
    this._createInstance('loading', config);
    return usePromiseCallback(defaults_message.duration, config);
  }

  public config(options: MsgGlobalAPI): void {
    if (options.top && type.isNum(options.top)) {
      defaults_message.top = options.top;
    }
    if ((options.duration && type.isNum(options.duration)) || options.duration === 0) {
      defaults_message.duration = options.duration;
    }
  }

  public destroy(key?: string | number): void {
    // 通过设置的 key 消除
    if (key && (type.isStr(key) || type.isNum(key))) {
      destroyElemByKey({
        key,
        duration: 0.1,
        prefixKey: this.prefixKey,
        clsLeave: this.msgMoveLeave,
      });
    } else {
      // 销毁所有实例
      this.instances.forEach(instance => {
        destroyElem(instance, {
          duration: 0.1,
          clsLeave: this.msgMoveLeave,
        });
      });
      // 清空存放的所有实例
      this.instances.length = 0;
    }
  }
}

export default Message;
