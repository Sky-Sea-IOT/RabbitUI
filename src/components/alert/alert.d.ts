interface PublicMethods {
    config(el: string): {
        message: string | number;
        desc: string | number;
        icon: string;
    };
    onClose(el: string, cb: ($this: Element) => void): void;
}
declare class Alert implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        message: string | number;
        desc: string | number;
        icon: string;
    };
    onClose(el: string, cb: ($this: Element) => void): void;
    private _create;
    private _setIcon;
    private _setCloseText;
    private _setMsg;
    private _setDesc;
    private _setCloseBtn;
    private _getType;
    private _isClosable;
    private _isShowIcon;
    private _getMsg;
    private _getDesc;
}
export default Alert;
