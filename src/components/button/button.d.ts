interface PublicMethods {
    config(el: string | Element): {
        loading: boolean;
    };
}
declare class Button implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string | Element): {
        loading: boolean;
    };
    private _getAllBtns;
    private _setLoading;
    private _setIcon;
    private _isLoading;
    private _loadIcon;
    private _getIcon;
}
export default Button;
