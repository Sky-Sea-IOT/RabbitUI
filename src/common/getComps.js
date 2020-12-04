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
    Tabs: "tabs",
    Time: "time",
    Timeline: "timeline",
    Tooltip: "tooltip",
};

const errInfo = () => {
    const err =
        "UI components that use Rabbit need to follow our agreed component tags, as shown in the example <rab-alert>...</rab-alert>, and all component tags should come with closing tags";
    return err;
};

/**
 * 生成对应的组件实例
 * @param {string} el
 * @param {string} compsName
 * @param {object} config
 * @param {HTMLElement} slot
 * @returns {HTMLElement}
 */
const getComps = (el, compsName, config, slot) => {
    if (!compsName) throw new Error(`${errInfo()}`);

    switch (compsName) {
        case COMPONENTS.Alert:
            return Rabbit.prototype.Alert.createInstance(config, slot);

        case COMPONENTS.Avatar:
            return Rabbit.prototype.Avatar.createInstance(config);

        case COMPONENTS.BackTop:
            return Rabbit.prototype.BackTop.createInstance(config, slot);

        case COMPONENTS.Breadcrumb:
            return Rabbit.prototype.Breadcrumb.createInstance(config, slot);

        case COMPONENTS.Card:
            return Rabbit.prototype.Card.createInstance(config, slot);

        case COMPONENTS.Carousel:
            return Rabbit.prototype.Carousel.createInstance(config, slot);

        case COMPONENTS.Collapse:
            return Rabbit.prototype.Collapse.createInstance(config, slot);

        case COMPONENTS.Drawer:
            return Rabbit.prototype.Drawer.createInstance(el, config, slot);

        case COMPONENTS.Dropdown:
            return Rabbit.prototype.Dropdown.createInstance(config, slot);

        case COMPONENTS.Empty:
            return Rabbit.prototype.Empty.createInstance(config, slot);

        case COMPONENTS.InputNumber:
            return Rabbit.prototype.InputNumber.createInstance(config);

        case COMPONENTS.List:
            return Rabbit.prototype.List.createInstance(config, slot);

        case COMPONENTS.Modal:
            return Rabbit.prototype.Modal.createInstance(el, config, slot);

        case COMPONENTS.PageHeader:
            return Rabbit.prototype.PageHeader.createInstance(config, slot);

        case COMPONENTS.Popover:
            return Rabbit.prototype.Popover.createInstance(config, slot);

        case COMPONENTS.Result:
            return Rabbit.prototype.Result.createInstance(config, slot);

        case COMPONENTS.Skeleton:
            return Rabbit.prototype.Skeleton.createInstance(config);

        case COMPONENTS.Switch:
            return Rabbit.prototype.Switch.createInstance(config, slot);

        case COMPONENTS.Steps:
            return Rabbit.prototype.Steps.createInstance(config, slot);

        case COMPONENTS.Table:
            return Rabbit.prototype.Table.createInstance(config);

        case COMPONENTS.Tabs:
            return Rabbit.prototype.Tabs.createInstance(config);

        case COMPONENTS.Time:
            return Rabbit.prototype.Time.createInstance(config);

        case COMPONENTS.Timeline:
            return Rabbit.prototype.Timeline.createInstance(config, slot);

        case COMPONENTS.Tooltip:
            return Rabbit.prototype.Tooltip.createInstance(config, slot);

        default:
            console.error(
                `[Rabbit warn] You are trying to create a invalid component "${compsName}" and that does not exist in Rabbit`
            );
    }
};
// export default _getComps;