interface PublicMethods {
    onChange(elem: string, cb: ([status, $this]: [boolean, Element]) => void): void;
}
declare class Switch implements PublicMethods {
    readonly VERSION: string;
    readonly components: any;
    constructor();
    onChange(elem: string, cb: ([status, $this]: [boolean, Element]) => void): void;
    private _getAllSwitch;
    private _init;
    private _setStatusText;
    private _setStatusColor;
    private _handleChange;
    private _changeStatusText;
    private _getStatus;
    private _isDisabled;
    private _isLoading;
    private _getStatusText;
    private _getColor;
}
export default Switch;
