interface PublicMethods {
    config(el: string): {
        percent: number;
        successPercent: number;
    };
}
declare class Progress implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        percent: number;
        successPercent: number;
    };
    private _create;
    private _createChildNodes;
    private _setPercent;
    private _setStrokeWidth;
    private _showText;
    private _setStrokeColor;
    private _getStatus;
    private _getPercent;
    private _getSuccessPercent;
    private _getStrokeWidth;
    private _getStrokeColor;
    private _isTextInside;
    private _isShowText;
}
export default Progress;
