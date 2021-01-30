interface PublicMethods {
    config(el: string): {
        title: string;
        extra: string;
    };
}
declare class Card implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        title: string;
        extra: string;
    };
    private _create;
    private _createCardNodes;
    private _setCls;
    private _setTitle;
    private _setContent;
    private _setExtra;
    private _setShadow;
    private _attrs;
}
export default Card;
