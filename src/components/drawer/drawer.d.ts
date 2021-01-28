interface DrawerEvents {
    onClose?: () => void;
}
interface PublicMethods {
    config(el: string): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    };
}
declare class Drawer implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    };
    private _handleVisable;
    private _handleClickHide;
    private _create;
    private _createDrawerNodes;
    private _show;
    private _hidden;
    private _setCls;
    private _setSize;
    private _setPlacement;
    private _setOpenInContainer;
    private _addMask;
    private _setClosable;
    private _setHeader;
    private _setBodyContent;
    private _initVisible;
    private _attrs;
}
export default Drawer;
