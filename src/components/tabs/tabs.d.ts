interface Config {
    config(el: string): {
        activeKey: string;
        events: ({ onClick, onTabRemove }: TabsEvents) => void;
    };
}
interface TabsEvents {
    onClick?: (key?: string) => void;
    onTabRemove?: (key?: string) => void;
}
declare class Tabs implements Config {
    readonly VERSION: string;
    private components;
    constructor();
    config(el: string): {
        activeKey: string;
        events({ onClick, onTabRemove }: TabsEvents): void;
    };
    private _create;
    private _setType;
    private _setSize;
    private _setNoAnimation;
    private _setBodyTemplate;
    private _setTabPane;
    private _setTab;
    private _setTabIcon;
    private _setTabClosable;
    private _setTabDisabled;
    private _setPaneKey;
    private _setActive;
    private _handleToggle;
    private _handleRemove;
    private _changeTab;
    private _changePane;
    private _attrs;
    private _paneAttrs;
}
export default Tabs;
