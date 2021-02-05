interface PoptipEvents {
    onShow?: () => void;
    onHide?: () => void;
    onOk?: () => void;
    onCancel?: () => void;
}
interface Config {
    config(el: string): {
        title: string | number;
        content: string | number;
        events: (options: PoptipEvents) => void;
    };
}
declare class Poptip implements Config {
    readonly VERSION: string;
    private components;
    private children;
    constructor();
    config(el: string): {
        title: string | number;
        content: string | number;
        events: ({ onShow, onHide, onOk, onCancel }: PoptipEvents) => void;
    };
    private _create;
    private _createPoptipNodes;
    private _normalTpl;
    private _confirmTpl;
    private _setWidth;
    private _triggerDisplay;
    private _initPoptip;
    private attrs;
}
export default Poptip;
