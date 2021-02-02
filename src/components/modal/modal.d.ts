interface ModalEvents {
    onOk?: () => void;
    onCancel?: () => void;
}
interface PublicMethods {
    config(el: string): {
        title: string;
        visable: boolean;
        events({ onOk, onCancel }: ModalEvents): void;
    };
}
declare class Modal implements PublicMethods {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        title: string;
        visable: boolean;
        events({ onOk, onCancel }: ModalEvents): void;
    };
    private _create;
    private _createTemplate;
    private _initVisable;
    private _setHeader;
    private _setContent;
    private _setMask;
    private _setFullScreen;
    private _setClosable;
    private _setFooterHide;
    private _handleVisable;
    private _handleClose;
    private _show;
    private _hide;
    private _getModalNode;
    private _attrs;
}
export default Modal;
