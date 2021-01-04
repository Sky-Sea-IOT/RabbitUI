import { removeAttrs } from '../../mixins';

class Button {
  VERSION: string;
  prefixCls: string;
  prefixAttr: string;
  components: any;

  constructor() {
    this.VERSION = '1.0';

    this.prefixCls = 'rab-btn';
    this.prefixAttr = 'rb';

    this.components = document.querySelectorAll(`.${this.prefixCls}`);

    this._getAllBtns(this.components);
  }

  private _getAllBtns(nodes: NodeListOf<Element>): void {
    nodes.forEach(node => {
      this._setLoading(node);
      this._setIcon(node);
      removeAttrs(node, [`${this.prefixAttr}-icon`]);
    });
  }

  private _setLoading(node: Element): void {
    if (this._isLoading(node)) {
      if (node.innerHTML === '') node.classList.add(`${this.prefixCls}-icon-only`);

      node.classList.add(`${this.prefixCls}-loading`);
      node.prepend(this._loadIcon());
    }
  }

  private _setIcon(node: Element): void {
    if (!this._getIcon(node)) return;

    if (node.innerHTML === '') {
      node.classList.add(`${this.prefixCls}-icon-only`);
      node.innerHTML = `<i class="rab-icon rab-icon-${this._getIcon(node)}"></i>`;
    } else {
      const Icon = document.createElement('i');
      Icon.className = `rab-icon rab-icon-${this._getIcon(node)}`;
      node.prepend(Icon);
    }
  }

  private _isLoading(node: Element): boolean {
    return node.getAttribute(`${this.prefixAttr}-loading`) === 'true' || false;
  }

  private _loadIcon(): HTMLElement {
    const LoadIcon = document.createElement('i');
    LoadIcon.className = 'rab-load-loop rab-icon rab-icon-loading-solid';
    return LoadIcon;
  }

  private _getIcon(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}-icon`) || '';
  }

  public config(
    elem: string
  ): {
    loading: boolean;
  } {
    const target: any = document.querySelector(elem);

    if (!target) throw new Error(`The selected element "${elem}" does not exist`);

    return {
      get loading() {
        return false;
      },
      set loading(newVal) {
        if (newVal === true) {
          target.classList.add('rab-btn-loading');
          target.prepend(Button.prototype._loadIcon());
        } else {
          target.classList.remove('rab-btn-loading');
          target.querySelector('.rab-icon-loading-solid').remove();
        }
      },
    };
  }
}

export default Button;
