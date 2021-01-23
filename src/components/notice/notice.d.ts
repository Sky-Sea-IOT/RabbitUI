interface NoticeGlobalAPI {
    top?: number;
    duration?: number;
}
interface NoticeOptions {
    key?: string | number;
    icon?: string;
    title?: string;
    desc?: string;
    style?: string;
    onClose?: () => void;
    onClick?: () => void;
    duration?: number;
    closable?: boolean;
    className?: string;
    dangerouslyUseHTMLString?: boolean;
}
interface PublicMethods {
    open(config: NoticeOptions): Promise<void>;
    info(config: NoticeOptions): Promise<void>;
    success(config: NoticeOptions): Promise<void>;
    warning(config: NoticeOptions): Promise<void>;
    error(config: NoticeOptions): Promise<void>;
    close(key: string): void;
    destroy(): void;
}
declare class $Notice implements PublicMethods {
    readonly VERSION: string;
    readonly instances: Array<HTMLElement>;
    constructor();
    open(config: NoticeOptions): Promise<void>;
    info(config: NoticeOptions): Promise<void>;
    success(config: NoticeOptions): Promise<void>;
    warning(config: NoticeOptions): Promise<void>;
    error(config: NoticeOptions): Promise<void>;
    config(options: NoticeGlobalAPI): void;
    close(key: string): void;
    destroy(): void;
    private _autoSetZindex;
    private _createInstance;
    private _setCls;
    private _setKey;
    private _setTitle;
    private _setDesc;
    private _setIcon;
    private _setClosable;
    private _customStyle;
    private _handleNoticeClick;
    private _handleClose;
    private _autoClose;
}
export default $Notice;
