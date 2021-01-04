import {
  CssTranstion,
  isUseHTMLString,
  destroyElem,
  destroyElemByKey,
  type,
  warn,
} from '../../mixins';
import usePromiseCallback from '../../mixins/cb-promise';

interface NoticeGlobalAPI {
  top?: number; // 通知组件距离顶端的距离，单位像素
  duration?: number; // 默认自动关闭的延时，单位秒
}

interface NoticeAPI {
  key?: string | number; // 当前通知的唯一标识
  icon?: string; // 自定义图标
  title?: string; // 通知提醒的标题
  desc?: string; // 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式
  style?: string; // 自定义内联样式
  onClose?: Function; // 点击通知关闭按钮时的回调
  onClick?: Function; // 点击通知时触发的回调函数
  duration?: number; // 自动关闭的延时，单位秒，不关闭可以写 0
  closable?: boolean; // 是否显示右上角关闭按钮，默认为 true
  className?: string; // 自定义 CSS class
  dangerouslyUseHTMLString?: boolean;
}

const iconTypes = {
  info: 'ios-information-circle',
  success: 'ios-checkmark-circle',
  warning: 'ios-alert',
  error: 'ios-close-circle',
  loading: 'loading-solid',
};

const defaults_notice: {
  top: number;
  duration: number;
} = {
  top: 24,
  duration: 4.5,
};

let zIndex: number = 1180;

// 创建实例的最外层父容器
function noticeInsanceWrapper(): HTMLElement {
  const NoticeWrapper = document.createElement('div');
  NoticeWrapper.className = 'rab-notice';
  NoticeWrapper.style.zIndex = `${zIndex}`;
  NoticeWrapper.style.right = '0';
  setTimeout(() => (NoticeWrapper.style.top = `${defaults_notice.top}px`), 0);
  document.body.appendChild(NoticeWrapper);
  return NoticeWrapper;
}

class Notice {
  VERSION: string;
  prefixCls: string;
  prefixChildCls: string;
  prefixKey: string;
  instances: Array<HTMLElement>;
  ntMoveEnter: string;
  ntMoveLeave: string;

  constructor() {
    this.VERSION = 'v1.0';

    this.prefixCls = 'rab-notice';
    this.prefixChildCls = `${this.prefixCls}-notice`;
    this.prefixKey = 'rb-notice';

    // 存储已经创建的实例，在 destroy方法里需要用到
    this.instances = [];

    this.ntMoveEnter = `${this.prefixCls}-move-enter`;
    this.ntMoveLeave = `${this.prefixCls}-move-leave`;

    noticeInsanceWrapper();
  }

  private _autoSetZindex(): void {
    zIndex++;
    // @ts-ignore
    document.querySelector(`.${this.prefixCls}`).style.zIndex = `${zIndex}`;
  }

  private _createInstance(type: string, config: NoticeAPI): HTMLElement {
    this._autoSetZindex();

    const Notice = document.createElement('div');
    const NoticeContent = document.createElement('div');
    const NoticeCustomContent = document.createElement('div');
    const NoticeTitle = document.createElement('div');
    const NoticeDesc = document.createElement('div');

    this._setCls(
      type,
      Notice,
      NoticeContent,
      NoticeCustomContent,
      NoticeTitle,
      NoticeDesc,
      config.className
    );
    this._setKey(Notice, config.key);
    this._setTitle(NoticeTitle, config.title, config.dangerouslyUseHTMLString);
    this._setDesc(
      Notice,
      NoticeCustomContent,
      NoticeDesc,
      config.desc,
      config.dangerouslyUseHTMLString
    );
    this._setIcon(type, NoticeCustomContent, NoticeDesc, config.icon);
    this._setClosable(Notice, config.closable, config.onClose);
    this._customStyle(Notice, config.style);

    NoticeCustomContent.append(NoticeTitle, NoticeDesc);
    NoticeContent.appendChild(NoticeCustomContent);
    Notice.appendChild(NoticeContent);
    document.querySelector(`.${this.prefixCls}`)!.appendChild(Notice);

    CssTranstion(Notice, this.ntMoveEnter, true);

    this.instances.push(Notice);

    this._handleNoticeClick(Notice, config.onClick);
    this._autoClose(Notice, config.duration);

    return Notice;
  }

  private _setCls(
    type: string,
    node1: HTMLElement,
    node2: HTMLElement,
    node3: HTMLElement,
    node4: HTMLElement,
    node5: HTMLElement,
    customCls?: string
  ): void {
    node1.className = `${this.prefixChildCls} ${customCls ? customCls : ''}`;
    node2.className = `${this.prefixChildCls}-content`;
    node3.className = `${this.prefixChildCls}-custom-content ${this.prefixCls}-with-${type}`;
    node4.className = `${this.prefixCls}-title`;
    node5.className = `${this.prefixCls}-desc`;
  }

  private _setKey(node: HTMLElement, key: any): void {
    if (!key) return;
    node.setAttribute(`${this.prefixKey}-key`, key);
  }

  private _setTitle(node: HTMLElement, title?: string, dangerouslyUseHTMLString?: boolean): void {
    // 必须设置一个通知提醒标题
    if (!title) {
      warn('You must set a notification to remind the title');
      return;
    }

    // 是否支持传入 HTML 片段
    isUseHTMLString(node, title, dangerouslyUseHTMLString);
  }

  private _setDesc(
    parent: HTMLElement,
    children_custm: HTMLElement,
    child_desc: HTMLElement,
    desc?: string,
    dangerouslyUseHTMLString?: boolean
  ): void {
    if (!desc) return;

    parent.classList.add(`${this.prefixChildCls}-with-desc`);

    children_custm.classList.add(`${this.prefixCls}-with-desc`);

    // 是否支持传入 HTML 片段
    isUseHTMLString(child_desc, desc, dangerouslyUseHTMLString);
  }

  private _setIcon(
    type: string,
    child_custom: HTMLElement,
    child_desc: HTMLElement,
    customIcon?: string
  ): void {
    // 不带状态图标的类型
    if (type === 'noraml') return;
    if (type !== 'normal' || customIcon) {
      child_custom.classList.add(`${this.prefixCls}-with-icon`);
    }

    let isOutline = '';

    // 带有状态图标并且是否带有提示内容，如果有则将图标设为 outline 外观
    if (child_desc.innerHTML) isOutline = '-outline';

    const NoticeIcon = document.createElement('span');
    NoticeIcon.className = `${this.prefixCls}-icon ${this.prefixCls}-icon-${type}`;

    // 是否自定义状态图标
    if (customIcon) {
      NoticeIcon.innerHTML = customIcon;
    } else {
      // @ts-ignore
      NoticeIcon.innerHTML = `<i class="rab-icon rab-icon-${iconTypes[type]}${isOutline}"></i>`;
    }

    child_custom.prepend(NoticeIcon);
  }

  private _setClosable(parent: HTMLElement, closable?: boolean, onClose?: Function): void {
    // 默认显示右上角关闭按钮
    type.isUndef(closable) ? (closable = true) : closable;

    if (!closable) return;

    parent.classList.add(`${this.prefixChildCls}-closable`);

    const NoticeClose = document.createElement('a');
    NoticeClose.className = `${this.prefixChildCls}-close`;
    NoticeClose.innerHTML = `<i class="rab-icon rab-icon-ios-close"></i>`;

    this._handleClose(parent, NoticeClose, onClose);

    parent.appendChild(NoticeClose);
  }

  // 自定义内联样式
  private _customStyle(node: HTMLElement, style?: string): void {
    if (!style) return;
    node.style.cssText = style;
  }

  // 点击通知时触发的回调函数
  private _handleNoticeClick(parent: HTMLElement, onClick?: Function): void {
    parent.onclick = e => {
      e.stopPropagation();
      if (onClick) type.isFn(onClick);
    };
  }

  private _handleClose(parent: HTMLElement, closeBtn: HTMLElement, onClose?: Function): void {
    closeBtn.onclick = e => {
      e.stopPropagation();

      if (onClose) type.isFn(onClose);

      destroyElem(parent, {
        clsLeave: this.ntMoveLeave,
        duration: 0.1,
      });
    };
  }

  private _autoClose(instance: HTMLElement, duration?: number): void {
    // 为每个实例自己的 duration参数设置默认值，如果有传入值则使用自定义的值
    type.isUndef(duration) ? (duration = defaults_notice.duration) : duration;

    destroyElem(instance, {
      duration,
      clsLeave: this.ntMoveLeave,
      transitionTime: 0.5,
    });
  }

  // TODO: 设置 Promise接口

  public open(config: NoticeAPI): Promise<void> {
    this._createInstance('normal', config);
    return usePromiseCallback(defaults_notice.duration, config.duration);
  }

  public info(config: NoticeAPI): Promise<void> {
    this._createInstance('info', config);
    return usePromiseCallback(defaults_notice.duration, config.duration);
  }

  public success(config: NoticeAPI): Promise<void> {
    this._createInstance('success', config);
    return usePromiseCallback(defaults_notice.duration, config.duration);
  }

  public warning(config: NoticeAPI): Promise<void> {
    this._createInstance('warning', config);
    return usePromiseCallback(defaults_notice.duration, config.duration);
  }

  public error(config: NoticeAPI): Promise<void> {
    this._createInstance('error', config);
    return usePromiseCallback(defaults_notice.duration, config.duration);
  }

  public config(options: NoticeGlobalAPI) {
    if (options.top) {
      defaults_notice.top = options.top;
    }
    if (options.duration || options.duration === 0) {
      defaults_notice.duration = options.duration;
    }
  }

  public close(key: string) {
    destroyElemByKey({
      key,
      duration: 0.1,
      clsLeave: this.ntMoveLeave,
      prefixKey: this.prefixKey,
    });
  }

  public destroy() {
    this.instances.forEach(instance => {
      destroyElem(instance, {
        clsLeave: this.ntMoveLeave,
        duration: 0.1,
      });
    });
    // 清空存放的所有实例
    this.instances.length = 0;
  }
}

export default Notice;
