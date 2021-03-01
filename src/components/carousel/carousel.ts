/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
    $el,
    bind,
    createElem,
    getBooleanTypeAttr,
    getNumTypeAttr,
    getStrTypeAttr,
    removeAttrs,
    setHtml
} from '../../dom-utils';
import PREFIX from '../prefix';

class Carousel {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-carousel', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            const items = node.children;
            const { dots, arrow, current } = this._attrs(node);

            this._setItem(items, node, current);
            this._setMainTemplate(node, arrow, dots);
            this._handleArrowClick(node, arrow);

            removeAttrs(node, [
                'dots',
                'arrow',
                'easing',
                'current',
                'trigger',
                'autoplay',
                'radius-dot',
                'autoplay-speed'
            ]);
        });
    }

    private _setMainTemplate(node: Element, arrow: string, dots: string): void {
        const template = `
          <button class="${PREFIX.carousel}-arrow left ${PREFIX.carousel}-arrow-${arrow}">
              <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-back"></i>
          </button>
          <div class="${PREFIX.carousel}-list"></div>
          <button class="${PREFIX.carousel}-arrow right ${PREFIX.carousel}-arrow-${arrow}">
              <i class="${PREFIX.icon} ${PREFIX.icon}-ios-arrow-forward"></i>
          </button>
          <ul class="${PREFIX.carousel}-dots ${PREFIX.carousel}-dots-${dots}"></ul>
        `;

        setHtml(node, template);
    }

    private _setItem(items: HTMLCollection, node: Element, current: string): void {
        const Fragment = document.createDocumentFragment();

        [...items].forEach((item, idx) => {
            setTimeout(() => {
                const CarouselItem = createElem('div') as HTMLElement;

                CarouselItem.className = `${PREFIX.carousel}-item`;
                CarouselItem.dataset.idx = `${idx}`;

                CarouselItem.appendChild(item);
                Fragment.appendChild(CarouselItem);
            }, 0);
        });

        setTimeout(() => {
            const CarouselList = node.querySelector(`.${PREFIX.carousel}-list`);
            CarouselList?.appendChild(Fragment);

            const currentItem = CarouselList?.querySelector(`[data-idx="${current}"]`);
            currentItem?.classList.add('active');
        }, 0);
    }

    private _autoPlay(autoplay: boolean, speed: number): void {
        if (!autoplay) return;
    }

    private _handleArrowClick(node: Element, arrow: string): void {
        if (arrow === 'never') return;

        const CarouselList = node.querySelector(`.${PREFIX.carousel}-list`);
        const ArrowLeft = node.querySelector(`.${PREFIX.carousel}-arrow.left`);
        const ArrowRight = node.querySelector(`.${PREFIX.carousel}-arrow.right`);

        const slide = (direction: string) => {
            const currentItem = CarouselList?.querySelector(`.${PREFIX.carousel}-item.active`);
            // @ts-ignore
            this[`_${direction}`](currentItem);
        };

        bind(ArrowLeft, 'click', () => slide('prev'));
        bind(ArrowRight, 'click', () => slide('next'));
    }

    // 指示器的触发方式
    private _handleTrigger(): void {
        //
    }

    private _prev(item: Element): void {
        const prevItem = item.previousElementSibling
            ? item.previousElementSibling
            : item.parentElement!.lastElementChild!;

        this._sliding(item, prevItem, 'prev');
    }

    private _next(item: Element): void {
        const nextItem = item.nextElementSibling
            ? item.nextElementSibling
            : item.parentElement!.firstElementChild!;

        this._sliding(item, nextItem, 'next');
    }

    private _sliding(current: Element, brother: Element, status: string): void {
        const direction = status === 'prev' ? 'right' : 'left';

        brother.classList.add(`${PREFIX.carousel}-item-${status}`);

        setTimeout(() => {
            current.classList.add(`${PREFIX.carousel}-item-${direction}`);
            brother.classList.add(`${PREFIX.carousel}-item-${direction}`);
        }, 0);

        setTimeout(() => {
            current.classList.remove('active');
            current.classList.remove(`${PREFIX.carousel}-item-${direction}`);
            brother.classList.add('active');
            brother.classList.remove(`${PREFIX.carousel}-item-${status}`);
            brother.classList.remove(`${PREFIX.carousel}-item-${direction}`);
        }, 600);
    }

    private _setEaseIng(): void {
        //
    }

    private _attrs(node: Element) {
        return {
            current: getStrTypeAttr(node, 'current', '0'),
            dots: getStrTypeAttr(node, 'dots', 'inside'),
            arrow: getStrTypeAttr(node, 'arrow', 'hover'),
            easing: getStrTypeAttr(node, 'easing', ''),
            trigger: getStrTypeAttr(node, 'trigger', 'click'),
            autoplay: getBooleanTypeAttr(node, 'autoplay'),
            autoplaySpeed: getNumTypeAttr(node, 'autoplay-speed', 2000),
            radiusDot: getBooleanTypeAttr(node, 'dots')
        };
    }
}

export default Carousel;
