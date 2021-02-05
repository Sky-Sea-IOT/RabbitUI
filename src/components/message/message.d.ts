interface MsgGlobalAPI {
    top?: number;
    duration?: number;
}
interface MessageOptions {
    key?: string | number;
    content?: string;
    duration?: number;
    onClose?: () => void;
    closable?: boolean;
    background?: boolean;
    dangerouslyUseHTMLString?: boolean;
}
interface Events {
    info(config: string | MessageOptions): Promise<void>;
    success(config: string | MessageOptions): Promise<void>;
    warning(config: string | MessageOptions): Promise<void>;
    error(config: string | MessageOptions): Promise<void>;
    loading(config: string | MessageOptions): Promise<void>;
    config(options: MsgGlobalAPI): void;
    destroy(key?: string | number): void;
}
declare class $Message implements Events {
    readonly VERSION: string;
    readonly instances: Array<HTMLElement>;
    constructor();
    info(config: string | MessageOptions): Promise<void>;
    success(config: string | MessageOptions): Promise<void>;
    warning(config: string | MessageOptions): Promise<void>;
    error(config: string | MessageOptions): Promise<void>;
    loading(config: string | MessageOptions): Promise<void>;
    config(options: MsgGlobalAPI): void;
    destroy(key?: string | number): void;
    private _autoSetZindex;
    private _createInstance;
    private _setCls;
    private _setIcon;
    private _setContent;
    private _setClosable;
    private _setKey;
    private _autoClose;
    private _handleClose;
    private _setBackground;
}
export default $Message;
