import { removeAttrs, warn } from '../../mixins';

const AvatarPrefixCls = 'rab-avatar';
const AvatarPrefixAttr = 'rb';

class Avatar {
  VERSION: string;
  components: any;

  constructor() {
    this.VERSION = 'v1.0';
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
        `${AvatarPrefixAttr}-icon`,
        `${AvatarPrefixAttr}-src`,
        `${AvatarPrefixAttr}-custom-icon`,
      ]);
    });
  }

  private _setIcon(node: Element): void {
    const hasIcon = this._getIcon(node);
    const customIcon = this._getCustmIcon(node);

    if (!hasIcon) return;

    if (hasIcon || customIcon) {
      node.innerHTML = '';
      node.classList.add(`${AvatarPrefixCls}-icon`);
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

    node.classList.add(`${AvatarPrefixCls}-image`);

    node.appendChild(AvatarImage);
  }

  // 自定义头像内容
  private _setCustomContent(node: Element): void {
    if (node.getAttribute('rb-icon') || node.getAttribute('rb-src')) return;

    if (node.innerHTML) {
      const AvatarStrBox = document.createElement('span');

      AvatarStrBox.className = `${AvatarPrefixCls}-string`;
      AvatarStrBox.innerHTML = node.innerHTML;

      node.innerHTML = '';

      node.appendChild(AvatarStrBox);

      this._setScale(node, AvatarStrBox);
    }
  }

  // 使文本容器大写适应头像容器并且不超出范围
  private _setScale(node: Element, children: HTMLSpanElement) {
    const avatarWidth: number = node.getBoundingClientRect().width;
    const childrenWidth: number = children.offsetWidth;

    if (avatarWidth - 8 < childrenWidth) {
      children.style.transform = `scale(${(avatarWidth - 8) / childrenWidth}) translateX(-50%)`;
    } else {
      children.style.transform = 'scale(1) translateX(-50%)';
    }
  }

  // 设置头像尺寸
  private _setSize(node: any): void {
    const size = this._getSize(node);

    if (!size) return;

    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
    node.style.lineHeight = `${size}px`;

    // 如果设置的尺寸超过40，且在有图标的情况下将其字体大写设为头像尺寸的一半
    if (size >= 40) {
      if (node.querySelector('.rab-icon')) {
        node.style.fontSize = `${Math.floor(size / 2)}px`;
      }
    }
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
    const size = node.getAttribute('rb-size') || '';

    // 不获取这两个
    if (size === 'large' || size === 'small') return;

    // 尺寸设置为数值，则将字符串数值转换为数字
    let toNum = Number(size);

    if (toNum) return toNum;
    // 打印错误不包括设置了数值为0
    else if (toNum !== 0) {
      warn(`You have set an invalid size value for the Avatar component --> "${size}"`);
    }
  }
}

export default Avatar;
