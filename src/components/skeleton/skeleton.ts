import { $el, getBooleanTypeAttr, getNumTypeAttr, getStrTypeAttr } from '../../dom-utils';
import PREFIX from '../prefix';

class Skeleton {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-result', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            //
        });
    }

    private _attrs(node: Element) {
        return {
            active: getBooleanTypeAttr(node, 'active'),
            avatar: getBooleanTypeAttr(node, 'avatar'),
            title: getStrTypeAttr(node, 'title', 'true'),
            paragraph: getStrTypeAttr(node, 'paragraph', 'true'),
            avatarSize: getStrTypeAttr(node, 'avatar-size', 'large'),
            avatarShape: getStrTypeAttr(node, 'avatar-shape', 'circle'),
            titleWidth: getNumTypeAttr(node, 'title-width'),
            paragraphWidth: getNumTypeAttr(node, 'paragraph-width'),
            paragraphRows: getNumTypeAttr(node, 'paragraph-rows')
        };
    }
}

export default Skeleton;
