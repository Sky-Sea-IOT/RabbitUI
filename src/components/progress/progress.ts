import { removeAttrs } from '../../mixins';

class Progress {
  VERSION: string;
  prefixCls: string;

  constructor() {
    this.VERSION = 'v1.0';
    this.prefixCls = 'rab-progress';

    const elements = document.querySelectorAll('r-progress');
    this._create(elements);
  }

  private _create(nodes: NodeListOf<Element>) {
    nodes.forEach(node => {
      removeAttrs(node, [
        'percent',
        'success-percent',
        'stroke-width',
        'text-inside',
        'stroke-color',
      ]);
    });
  }

  private _createChildNodes() {
    const PgrsOuter = document.createElement('div');
    const PgrsInner = document.createElement('div');
    const PgrsBar = document.createElement('div');
    const PgrsBarSuccess = document.createElement('div');
  }

  private getStatus(node: Element): string | null {
    return node.getAttribute('status');
  }

  private getPercent(node: Element): string {
    return node.getAttribute('percent') || '0';
  }

  private getSuccessPercent(node: Element): string {
    return node.getAttribute('percent') || '0';
  }

  private getStrokeWidth(node: Element): string {
    return node.getAttribute('stroke-width') || '10';
  }

  private getStrokeColor(
    node: Element
  ): {
    from: Array<string>;
    to: Array<string>;
  } {
    const colors = JSON.parse(node.getAttribute('stroke-color') || '');

    return {
      from: colors[0],
      to: colors[1],
    };
  }

  private textInside(node: Element): boolean {
    return node.getAttribute('text-inside') === 'true' || false;
  }

  private showText(node: Element): boolean {
    if (node.getAttribute('show-text') === 'false') return false;
    else return true;
  }
}

export default Progress;
