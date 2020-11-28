/**
 * @constant COMPONENTS 组件名
 */
const COMPONENTS = {
    Alert: "alert",
    Avatar: "avatar",
    BackTop: "backtop",
    Breadcrumb: "breadcrumb",
    Card: "card",
    Carousel: "carousel",
    Collapse: "collapse",
    Drawer: "drawer",
    Dropdown: "dropdown",
    Empty: "empty",
    InputNumber: "input-number",
    List: "list",
    Modal: "modal",
    PageHeader: "pageheader",
    Popover: "popover",
    Result: "result",
    Skeleton: "skeleton",
    Steps: "steps",
    Switch: "switch",
    Table: "table",
    Timeline: "timeline",
    Tooltip: "tooltip",
};

/**
 * 生成对应的组件实例
 * @param {string} el
 * @param {string} compsName
 * @param {{}} config
 * @param {HTMLElement} slot
 * @returns {HTMLElement}
 */
function _getComps(el, compsName, config, slot) {
    if (!compsName) {
        const error =
            "UI components that use Rabbit need to follow our agreed component tags, as shown in the example <rab-alert>...</rab-alert>, and all component tags should come with closing tags";
        throw new Error(`${error}`);
    }

    switch (compsName) {
        case COMPONENTS.Alert:
            return Rabbit.prototype.Alert._createInstance(config, slot);

        case COMPONENTS.Avatar:
            return Rabbit.prototype.Avatar._createInstance(config);

        case COMPONENTS.BackTop:
            return Rabbit.prototype.BackTop._createInstance(config, slot);

        case COMPONENTS.Breadcrumb:
            return Rabbit.prototype.Breadcrumb._createInstance(config, slot);

        case COMPONENTS.Card:
            return Rabbit.prototype.Card._createInstance(config, slot);

        case COMPONENTS.Carousel:
            return Rabbit.prototype.Carousel._createInstance(config, slot);

        case COMPONENTS.Collapse:
            return Rabbit.prototype.Collapse._createInstance(config, slot);

        case COMPONENTS.Drawer:
            return Rabbit.prototype.Drawer._createInstance(el, config, slot);

        case COMPONENTS.Dropdown:
            return Rabbit.prototype.Dropdown._createInstance(config, slot);

        case COMPONENTS.Empty:
            return Rabbit.prototype.Empty._createInstance(config, slot);

        case COMPONENTS.InputNumber:
            return Rabbit.prototype.InputNumber._createInstance(config);

        case COMPONENTS.List:
            return Rabbit.prototype.List._createInstance(config, slot);

        case COMPONENTS.Modal:
            return Rabbit.prototype.Modal._createInstance(el, config, slot);

        case COMPONENTS.PageHeader:
            return Rabbit.prototype.PageHeader._createInstance(config, slot);

        case COMPONENTS.Popover:
            return Rabbit.prototype.Popover._createInstance(config, slot);

        case COMPONENTS.Result:
            return Rabbit.prototype.Result._createInstance(config, slot);

        case COMPONENTS.Skeleton:
            return Rabbit.prototype.Skeleton._createInstance(config);

        case COMPONENTS.Switch:
            return Rabbit.prototype.Switch._createInstance(config, slot);

        case COMPONENTS.Steps:
            return Rabbit.prototype.Steps._createInstance(config, slot);

        case COMPONENTS.Table:
            return Rabbit.prototype.Table._createInstance(config);

        case COMPONENTS.Timeline:
            return Rabbit.prototype.Timeline._createInstance(config, slot);

        case COMPONENTS.Tooltip:
            return Rabbit.prototype.Tooltip._createInstance(config, slot);

        default:
            console.error(
                `[Rabbit warn] You are trying to create a invalid component "${compsName}" and that does not exist in Rabbit`
            );
    }
}

// export default _getComps;