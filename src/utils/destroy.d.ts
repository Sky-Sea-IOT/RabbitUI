interface Options {
    key?: string | number;
    prefixKey?: string;
    fadeOut?: boolean;
    clsLeave?: string;
    clsEnter?: string;
    destroy?: boolean;
    duration?: number;
    transitionTime?: number;
}
export declare function destroyElem(elem: any, { fadeOut, clsLeave, clsEnter, duration, transitionTime, destroy }: Options): void;
export declare function destroyElemByKey(options: Options): void;
export {};
