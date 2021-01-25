import PREFIX from '../prefix';
import { $el, getBooleanTypeAttr, getStrTypeAttr, removeAttrs } from '../../dom-utils';

interface PublicMethods {
    config(
        el: string
    ): {
        title: string;
        events: ({ onClose, onVisibleChange }: DrawerEvents) => void;
    };
}

interface DrawerEvents {
    onClose: () => void;
    onVisibleChange: (visible: boolean) => boolean;
}

interface DrawerAttes {
    title: string;
    width: string;
    height: string;
    placement: 'top' | 'left' | 'right' | 'bottom';
    mask: boolean;
    inner: boolean;
    visible: boolean;
    closable: boolean;
    scrollable: boolean;
    lockScroll: boolean;
    maskClosable: boolean;
}

class Drawer {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-drawer', { all: true });
        this._create(this.components);
    }

    private _create(nodes: NodeListOf<Element>): void {
        nodes.forEach((node) => {
            this._createDrawerNodes(node);
            removeAttrs(node, [
                'title',
                'width',
                'height',
                'placement',
                'mask',
                'inner',
                'visible',
                'closable',
                'scrollable',
                'lock-scroll',
                'mask-closable'
            ]);
        });
    }

    private _createDrawerNodes(node: Element): void {}

    private _attrs(node: Element): DrawerAttes {
        return {
            title: getStrTypeAttr(node, 'title', ''),
            width: getStrTypeAttr(node, 'width', '256px'),
            height: getStrTypeAttr(node, 'height', '256px'),
            placement: getStrTypeAttr(node, 'placement', 'right'),
            mask: getBooleanTypeAttr(node, 'mask'),
            inner: getBooleanTypeAttr(node, 'inner'),
            visible: getBooleanTypeAttr(node, 'visible'),
            closable: getBooleanTypeAttr(node, 'closable'),
            scrollable: getBooleanTypeAttr(node, 'scrollable'),
            lockScroll: getBooleanTypeAttr(node, 'lock-scroll'),
            maskClosable: getBooleanTypeAttr(node, 'mask-closable')
        };
    }
}

export default Drawer;
