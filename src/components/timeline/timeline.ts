import { removeAttrs } from '../../mixins';

class Timeline {
  VERSION: string;
  prefixCls: string;
  prefixAttr: string;
  components: any;

  constructor() {
    this.VERSION = '1.0';
    this.prefixCls = 'rab-timeline';
    this.prefixAttr = 'rb';
    this.components = document.querySelectorAll('r-timeline > r-timeline-item');
    this._create(this.components);
  }

  private _create(nodes: NodeListOf<Element>): void {
    nodes.forEach((node, i) => {
      const TimelineItem = nodes[i];
      const TimelineTail = document.createElement('div');
      const TimelineHead = document.createElement('div');
      const TimelineContent = document.createElement('div');

      TimelineTail.className = `${this.prefixCls}-item-tail`;
      TimelineHead.className = `${this.prefixCls}-item-head`;
      TimelineContent.className = `${this.prefixCls}-item-content`;

      this._setColor(TimelineItem, TimelineHead);
      this._setDot(TimelineItem, TimelineHead);

      TimelineContent.innerHTML = node.innerHTML;
      TimelineItem.innerHTML = '';
      TimelineItem.append(TimelineTail, TimelineHead, TimelineContent);

      removeAttrs(nodes[i], ['rb-dot']);
    });
  }

  private _setColor(wrapper: Element, node: HTMLDivElement) {
    const COLOR = this._getStatusColor(wrapper);
    if (COLOR === 'blue' || COLOR === 'red' || COLOR === 'gray' || COLOR === 'green') {
      node.classList.add(`${this.prefixCls}-item-head-${COLOR}`);
    } else {
      node.style.color = COLOR;
      node.style.borderColor = COLOR;
    }
  }

  private _setDot(wrapper: Element, node: HTMLDivElement): void {
    const DOT_CONTENT = this._getDotContent(wrapper);

    if (!DOT_CONTENT) return;

    node.innerHTML = DOT_CONTENT;
    node.classList.add(`${this.prefixCls}-item-head-custom`);
  }

  private _getStatusColor(node: Element): string {
    return node.getAttribute(`${this.prefixAttr}-color`) || 'blue';
  }

  private _getDotContent(wrapper: Element): string {
    return wrapper.getAttribute(`${this.prefixAttr}-dot`) || '';
  }
}

export default Timeline;
