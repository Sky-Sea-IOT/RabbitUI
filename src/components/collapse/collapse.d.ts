interface CollapseEvents {
    onChange?: (key: []) => void;
}
interface Config {
    config(el: string): {
        activeKey: string | number | string[] | number[];
        events({ onChange }: CollapseEvents): void;
    };
}
declare class Collapse implements Config {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        activeKey: string | number | string[] | number[];
        events({ onChange }: {
            onChange: (key: []) => void;
        }): void;
    };
    private _create;
    private _dataSetActiveKey;
    private _setGhost;
    private _setSimple;
    private _createChildNodes;
    private _setPanel;
    private _handleToggle;
    private _slide;
    private _openByKey;
    private _attrs;
}
export default Collapse;
