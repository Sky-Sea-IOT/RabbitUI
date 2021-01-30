declare class Spin {
    readonly VERSION: string;
    private components;
    constructor();
    show({ content }?: {
        content?: string | undefined;
    }): void;
    hide(): void;
    private _create;
    private _createChildTemplate;
}
export default Spin;
