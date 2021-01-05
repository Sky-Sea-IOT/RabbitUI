import { removeAttrs } from '../../mixins';

const TLPrefixCls = 'rab-badge';
const TLPrefixAttr = 'rb';

class Timeline {
  VERSION: string;
  components: any;

  constructor() {
    this.VERSION = '1.0';
    this.components = document.querySelectorAll('r-timeline > r-timeline-item');
    this._create(this.components);
  }

  private _create(nodes: NodeListOf<Element>): void {
    nodes.forEach((node, i) => {
      const TimelineItem = node;

      const TimelineTail = document.createElement('div');
      const TimelineHead = document.createElement('div');
      const TimelineContent = document.createElement('div');

      this._setCls(TimelineTail, TimelineHead, TimelineContent);
      this._setColor(TimelineItem, TimelineHead);
      this._setDot(TimelineItem, TimelineHead);
      this._setContent(TimelineItem, TimelineContent);

      TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);

      removeAttrs(TimelineItem, ['rb-dot']);
    });
  }

  private _setCls(node1: HTMLElement, node2: HTMLElement, node3: HTMLElement): void {
    node1.className = `${TLPrefixCls}-item-tail`;
    node2.className = `${TLPrefixCls}-item-head`;
    node3.className = `${TLPrefixCls}-item-content`;
  }

  private _setContent(parent: Element, node1: HTMLElement): void {
    node1.innerHTML = parent.innerHTML;
    // 清空原先的内容
    parent.innerHTML = '';
  }

  private _setColor(parent: Element, node: HTMLElement): void {
    const colors = this._getStatusColor(parent);

    // 设置预设颜色或者自定义颜色
    if (colors === 'blue' || colors === 'red' || colors === 'gray' || colors === 'green') {
      node.classList.add(`${TLPrefixCls}-item-head-${colors}`);
    } else {
      node.style.color = colors;
      node.style.borderColor = colors;
    }
  }

  // 自定义时间轴点的内容
  private _setDot(parent: Element, node: HTMLElement): void {
    if (!this._getDotContent(parent)) return;

    node.classList.add(`${TLPrefixCls}-item-head-custom`);

    node.innerHTML = this._getDotContent(parent);
  }

  private _getStatusColor(node: Element): string {
    return node.getAttribute(`${TLPrefixAttr}-color`) || 'blue';
  }

  private _getDotContent(parent: Element): string {
    return parent.getAttribute(`${TLPrefixAttr}-dot`) || '';
  }
}

export default Timeline;
