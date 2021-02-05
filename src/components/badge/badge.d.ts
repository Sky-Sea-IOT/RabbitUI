interface Config {
    config(el: string): {
        count: number;
        text: string;
        dot: boolean;
    };
}
declare class Badge implements Config {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        count: number;
        text: string;
        dot: boolean;
    };
    private _create;
    private _setCount;
    private _setMaxCount;
    private _setDot;
    private _setText;
    private _setAlone;
    private _setOffset;
    private _setStatusWithColor;
    private _getCount;
    private _getMaxCount;
    private _getOffset;
    private _getStatus;
    private _getColor;
    private _getText;
    private _showZero;
    private _showDot;
}
export default Badge;
