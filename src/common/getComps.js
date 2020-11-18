const COMPONENTS = {
    Alert: "alert",
    Avatar: "avatar",
    BackTop: "backtop",
    Breadcrumb: "breadcrumb",
    Card: "card",
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
    Switch: "switch",
    Table: "table",
    Timeline: "timeline",
    Tooltip: "tooltip",
};
/**
 *
 * @param {String} el
 * @param {String} compsName
 * @param {{}} config
 * @param {HTMLSlotElement} slot
 * @returns {HTMLElement}
 */
function getComps(el, compsName, config, slot) {
    if (!compsName) {
        const error =
            "UI components that use Rabbit need to follow our agreed component tags, as shown in the example <rab-alert></rab-alert>, and all component tags should come with closing tags";
        throw new Error(`[Rabbit warn] ${error}`);
    }

    switch (compsName) {
        case COMPONENTS.Alert:
            return Rabbit.prototype.Alert.create(config, slot);

        case COMPONENTS.Avatar:
            return Rabbit.prototype.Avatar.create(config);

        case COMPONENTS.BackTop:
            return Rabbit.prototype.BackTop.create(config, slot);

        case COMPONENTS.Breadcrumb:
            return Rabbit.prototype.Breadcrumb.create(config, slot);

        case COMPONENTS.Card:
            return Rabbit.prototype.Card.create(config, slot);

        case COMPONENTS.Collapse:
            return Rabbit.prototype.Collapse.create(config, slot);

        case COMPONENTS.Drawer:
            return Rabbit.prototype.Drawer.create(el, config, slot);

        case COMPONENTS.Dropdown:
            return Rabbit.prototype.Dropdown.create(config, slot);

        case COMPONENTS.Empty:
            return Rabbit.prototype.Empty.create(config, slot);

        case COMPONENTS.InputNumber:
            return Rabbit.prototype.InputNumber.create(config);

        case COMPONENTS.List:
            return Rabbit.prototype.List.create(config, slot);

        case COMPONENTS.Modal:
            return Rabbit.prototype.Modal.create(el, config, slot);

        case COMPONENTS.PageHeader:
            return Rabbit.prototype.PageHeader.create(config, slot);

        case COMPONENTS.Popover:
            return Rabbit.prototype.Popover.create(config, slot);

        case COMPONENTS.Result:
            return Rabbit.prototype.Result.create(config, slot);

        case COMPONENTS.Skeleton:
            return Rabbit.prototype.Skeleton.create(config);

        case COMPONENTS.Switch:
            return Rabbit.prototype.Switch.create(config, slot);

        case COMPONENTS.Table:
            return Rabbit.prototype.Table.create(config);

        case COMPONENTS.Timeline:
            return Rabbit.prototype.Timeline.create(config, slot);

        case COMPONENTS.Tooltip:
            return Rabbit.prototype.Tooltip.create(config, slot);

        default:
            console.error(
                `[Rabbit warn] You are trying to create a invalid component "${compsName}" and that does not exist in Rabbit`
            );
    }
}