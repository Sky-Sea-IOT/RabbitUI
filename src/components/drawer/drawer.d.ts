interface DrawerEvents {
    onClose?: () => void;
}
interface Config {
    config(el: string): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    };
}
declare class Drawer implements Config {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        title: string;
        visable: boolean;
        events: ({ onClose }: DrawerEvents) => void;
    };
    private _create;
    private _createDrawerNodes;
    private _setCls;
    private _setSize;
    private _setPlacement;
    private _setOpenInContainer;
    private _setMask;
    private _setClosable;
    private _setHeader;
    private _setBodyContent;
    private _initVisible;
    private _handleVisable;
    private _handleClose;
    private _show;
    private _hide;
    private _attrs;
}
export default Drawer;
