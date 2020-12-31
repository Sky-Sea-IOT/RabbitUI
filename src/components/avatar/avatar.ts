import { removeAttrs, warn } from '../../mixins';

class Avatar {
  VERSION: string;
  prefixCls: string;
  prefixAttr: string;
  components: any;

  constructor() {
    this.VERSION = 'v1.0';
    this.prefixCls = 'rab-avatar';
    this.prefixAttr = 'rb';
    this.components = document.querySelectorAll('r-avatar');
    this._create(this.components);
  }

  private _create(nodes: NodeListOf<Element>): void {
    nodes.forEach(node => {
      this._setIcon(node);
      this._setImage(node);
      this._setSize(node);
      this._setCustomContent(node);

      removeAttrs(node, [
        `${this.prefixAttr}-icon`,
        `${this.prefixAttr}-src`,
        `${this.prefixAttr}-custom-icon`,
      ]);
    });
  }

  private _setIcon(node: Element): void {
    const hasIcon = this._getIcon(node);
    const customIcon = this._getCustmIcon(node);

    if (!hasIcon) return;

    if (hasIcon || customIcon) {
      node.innerHTML = '';
      node.classList.add(`${this.prefixCls}-icon`);
    }

    if (customIcon) {
      node.innerHTML = customIcon;
    } else {
      const AvatarIcon = document.createElement('i');
      AvatarIcon.className = `rab-icon rab-icon-${hasIcon}`;
      node.appendChild(AvatarIcon);
    }
  }

  private _setImage(node: Element): void {
    const hasSrc = this._getSrc(node);

    if (!hasSrc) return;
    const AvatarImage = document.createElement('img');
    AvatarImage.src = hasSrc;

    node.innerHTML = '';
    node.appendChild(AvatarImage);
    node.classList.add(`${this.prefixCls}-image`);
  }

  private _setCustomContent(node: Element): void {
    if (node.getAttribute('rb-icon') || node.getAttribute('rb-src')) return;

    if (node.innerHTML) {
      const AvatarStrBox = document.createElement('span');

      AvatarStrBox.className = `${this.prefixCls}-string`;
      AvatarStrBox.innerHTML = node.innerHTML;

      node.innerHTML = '';
      node.appendChild(AvatarStrBox);

      this._setScale(node, AvatarStrBox);
    }
  }

  private _setScale(node: Element, children: HTMLSpanElement) {
    const avatarWidth: number = node.getBoundingClientRect().width;
    const childrenWidth: number = children.offsetWidth;

    // 使文本容器大写适应头像容器并且不超出范围
    avatarWidth - 8 < childrenWidth
      ? (children.style.transform = `scale(${(avatarWidth - 8) / childrenWidth})  translateX(-50%)`)
      : (children.style.transform = 'scale(1) translateX(-50%)');
  }

  private _setSize(node: any): void {
    const size = this._getSize(node);

    if (!size) return;

    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.lineHeight = `${size}px`;

    // 自定义头像尺寸如果超过40，且在有图标的情况下将其字体大写设为头像尺寸的一半
    size >= 40
      ? node.querySelector('.rab-icon')
        ? (node.style.fontSize = `${Math.floor(size / 2)}px`)
        : null
      : null;
  }

  private _getIcon(node: Element): string {
    return node.getAttribute('rb-icon') || '';
  }

  private _getCustmIcon(node: Element): string {
    return node.getAttribute('rb-custom-icon') || '';
  }

  private _getSrc(node: Element): string {
    return node.getAttribute('rb-src') || '';
  }

  private _getSize(node: Element): number | undefined {
    const avatarSize: string = node.getAttribute('rb-size') || '';
    let toNum: number;
    if (avatarSize === 'large' || avatarSize === 'small') return;
    // 设置为数值则将字符串数值转换为数字
    toNum = Number(avatarSize);
    if (toNum) return toNum;
    // 打印错误不包括设置了数值为0
    else if (toNum !== 0) {
      warn(`You have set an invalid size value for the Avatar component --"${avatarSize}"`);
    }
  }
}

export default Avatar;
