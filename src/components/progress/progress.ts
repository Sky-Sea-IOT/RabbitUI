import { removeAttrs, type } from '../../mixins';

class Progress {
  VERSION: string;
  prefixCls: string;
  prefixAttr: string;

  constructor() {
    this.VERSION = 'v1.0';
    this.prefixCls = 'rab-progress';
    this.prefixAttr = 'rb';

    const elements = document.querySelectorAll('r-progress');

    this._create(elements);
  }

  private _create(nodes: NodeListOf<Element>): void {
    nodes.forEach(node => {
      this._createChildNodes(node);

      removeAttrs(node, [
        'rb-percent',
        'rb-show-text',
        'rb-text-inside',
        'rb-stroke-width',
        'rb-stroke-color',
        'rb-success-percent',
      ]);
    });
  }

  private _createChildNodes(wrapper: Element): void {
    const PgrsOuter = document.createElement('div');
    const PgrsInner = document.createElement('div');
    const PgrsBar = document.createElement('div');
    const PgrsBarSucess = document.createElement('div');

    PgrsOuter.className = `${this.prefixCls}-outer`;
    PgrsInner.className = `${this.prefixCls}-inner`;
    PgrsBar.className = `${this.prefixCls}-bg`;
    PgrsBarSucess.className = `${this.prefixCls}-success-bg`;

    this._setPercent(wrapper, PgrsBar, PgrsBarSucess);
    this._setStrokeWidth(wrapper, PgrsBar, PgrsBarSucess);
    this._setStrokeColor(wrapper, PgrsBar);

    PgrsInner.append(PgrsBar, PgrsBarSucess);
    PgrsOuter.appendChild(PgrsInner);
    wrapper.appendChild(PgrsOuter);

    this._showText(wrapper, PgrsBar);
  }

  private _setPercent(
    wrapper: Element,
    bar: HTMLDivElement,
    successBar: HTMLDivElement
  ): void {
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

    PgrsTextWrapper.className = `${this.prefixCls}-text`;
    PgresText.className = `${this.prefixCls}-inner-text`;
    PgresText.textContent = `${this._getPercent(wrapper)}%`;

    if (!this._isTextInside(wrapper)) {
      wrapper.className = `${this.prefixCls}-show-info`;

      if (this._getStatus(wrapper) === 'success') {
        PgresText.innerHTML = `<i class="rab-icon rab-icon-ios-checkmark-circle"></i>`;
      } else if (this._getStatus(wrapper) === 'warning') {
        PgresText.innerHTML = `<i class="rab-icon rab-icon-ios-alert"></i>`;
      } else if (this._getStatus(wrapper) === 'wrong') {
        PgresText.innerHTML = `<i class="rab-icon rab-icon-ios-close-circle"></i>`;
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
    return node.getAttribute(`${this.prefixAttr}-status`);
  }

  private _getPercent(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}-percent`) || '0';
  }

  private _getSuccessPercent(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}-success-percent`) || '0';
  }

  private _getStrokeWidth(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}-stroke-width`) || '10';
  }

  private _getStrokeColor(
    node: Element
  ): {
    from: Array<string>;
    to: Array<string>;
  } {
    if (!node.getAttribute(`${this.prefixAttr}-stroke-color`)) {
      return {
        from: [],
        to: [],
      };
    } else {
      /**
       * 转为真实数组
       * "['','']" -> ['','']
       */
      const strArr: string =
        node
          .getAttribute(`${this.prefixAttr}-stroke-color`)
          ?.replace(/\'/g, '"') || '';

      const colorArr = JSON.parse(strArr);

      return {
        from: colorArr[0],
        to: colorArr[1],
      };
    }
  }

  private _isTextInside(node: Element): boolean {
    return (
      node.getAttribute(`${this.prefixAttr}-text-inside`) === 'true' || false
    );
  }

  private _isShowText(node: Element): boolean {
    if (node.getAttribute(`${this.prefixAttr}-show-text`) === 'false')
      return false;
    else return true;
  }

  public config(
    elem: string
  ): {
    percent: number;
    successPercent: number;
  } {
    const target: any = document.querySelector(elem);

    if (!target)
      throw new Error(`The selected element "${elem}" does not exist`);

    const progress = target?.querySelector(`.${this.prefixCls}-bg`);
    const progressSucs = target?.querySelector(`.${this.prefixCls}-success-bg`);
    const progressText = target?.querySelector(`.${this.prefixCls}-inner-text`);

    return {
      get percent() {
        return progress;
      },
      set percent(newVal) {
        if (!type.isNum(newVal)) return;

        if (newVal === progress?.style.width) return;

        if (progressText) progressText.textContent = `${newVal}%`;

        progress.style.width = `${newVal}%`;
      },

      get successPercent() {
        return progressSucs;
      },
      set successPercent(newVal) {
        if (!type.isNum(newVal)) return;
        if (newVal === progressSucs?.style.width) return;
        progressSucs.style.width = `${newVal}%`;
      },
    };
  }
}

export default Progress;
