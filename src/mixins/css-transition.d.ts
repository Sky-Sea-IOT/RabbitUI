interface Config {
    inOrOut?: 'in' | 'out';
    enterCls?: 'rab-fade-in' | string;
    leaveCls?: 'rab-fade-out' | string;
    rmCls?: boolean;
    timeout?: number;
    hiddenParent?: Element | HTMLElement | any;
}
export default function CssTransition(elem: any, { enterCls, leaveCls, inOrOut, rmCls, timeout, hiddenParent }: Config): void;
export {};
