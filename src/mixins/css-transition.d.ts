interface Config {
    inOrOut?: 'in' | 'out';
    enterCls?: string;
    leaveCls?: string;
    rmCls?: boolean;
    timeout?: number;
    hiddenParent?: Element | HTMLElement | any;
}
export default function CssTransition(elem: any, { enterCls, leaveCls, inOrOut, rmCls, timeout, hiddenParent }: Config): void;
export {};
