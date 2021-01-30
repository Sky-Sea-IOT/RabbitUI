export declare function _newCreatePopper(reference: Element, popper: HTMLElement, placement: string | any, offset: number): any;
interface handleOptions {
    reference: Element;
    popper: Element | any;
    datasetVal: string;
    showCb: any;
    hideCb: any;
    delay: number;
    timer: any;
}
export declare function handleHoverShowAndHideEvents({ reference, popper, datasetVal, showCb, hideCb, delay, timer }: handleOptions): void;
export {};
