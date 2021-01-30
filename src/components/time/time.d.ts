declare class Time {
    readonly VERSION: string;
    private components;
    constructor();
    private _create;
    setTime(node: Element): void;
    handleClick(node: Element): void;
    private _attrs;
}
export default Time;
