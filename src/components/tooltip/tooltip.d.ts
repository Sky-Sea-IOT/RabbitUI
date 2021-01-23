interface TooltipEvents {
    onShow?: () => void;
    onHide?: () => void;
}
interface PublicMethods {
    config(el: string): {
        content: string | number;
        events: (options: TooltipEvents) => void;
    };
}
declare class Tooltip implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        content: string | number;
        events: (options: TooltipEvents) => void;
    };
    private _create;
    private _createTooltipNodes;
    private _setCls;
    private _triggerDisplay;
    private _setTip;
    private _setMaxWidth;
    private _initSetPopper;
    private _setIsAlwaysShow;
    private _getTip;
    private _getPlacement;
    private _getDelay;
    private _getIsAlways;
    private _getIsDisabled;
    private _getTheme;
    private _getMaxWidth;
    private _getOffset;
}
export default Tooltip;
