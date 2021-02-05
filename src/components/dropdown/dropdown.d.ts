interface DropdownEvents {
    onClick: (index?: number) => void;
}
interface Config {
    config(el: string): {
        events: ({ onClick }: DropdownEvents) => void;
    };
}
declare class Dropdown implements Config {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        events({ onClick }: {
            onClick: (index?: number) => void;
        }): void;
    };
    private _create;
    private _setReferenceElm;
    private _setMenuItem;
    private _initVisable;
    private _setTransformOrigin;
    private _handleTrigger;
    private _attrs;
}
export default Dropdown;
