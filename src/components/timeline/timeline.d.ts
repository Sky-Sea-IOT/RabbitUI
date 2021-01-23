declare class Timeline {
    readonly VERSION: string;
    readonly components: any;
    constructor();
    private _create;
    private _setCls;
    private _setContent;
    private _setColor;
    private _setDot;
    private _getStatusColor;
    private _getDotContent;
}
export default Timeline;
