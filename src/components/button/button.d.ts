interface PublicMethods {
    config(elem: string): {
        loading: boolean;
    };
}
declare class Button implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(elem: string): {
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
