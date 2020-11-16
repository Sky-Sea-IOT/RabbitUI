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
        throw new Error(`[Rabbit] ${error}`);
    }

    switch (compsName) {
        case COMPONENTS.Alert:
            return rabbit.Alert.createAlert(config, slot);

        case COMPONENTS.Avatar:
            return rabbit.Avatar.createAvatar(config);

        case COMPONENTS.BackTop:
            return rabbit.BackTop.createBackTop(config, slot);

        case COMPONENTS.Breadcrumb:
            return rabbit.Breadcrumb.createBreadcrumb(config, slot);

        case COMPONENTS.Card:
            return rabbit.Card.createCard(config, slot);

        case COMPONENTS.Collapse:
            return rabbit.Collapse.createCollapse(config, slot);

        case COMPONENTS.Drawer:
            return rabbit.Drawer.createDrawer(el, config, slot);

        case COMPONENTS.Dropdown:
            return rabbit.Dropdown.createDropDown(config, slot);

        case COMPONENTS.Empty:
            return rabbit.Empty.createEmpty(config, slot);

        case COMPONENTS.InputNumber:
            return rabbit.InputNumber.createInputNumber(config);

        case COMPONENTS.List:
            return rabbit.List.createList(config, slot);

        case COMPONENTS.Modal:
            return rabbit.Modal.createModal(el, config, slot);

        case COMPONENTS.PageHeader:
            return rabbit.PageHeader.createPageHeader(config, slot);

        case COMPONENTS.Popover:
            return rabbit.Popover.createPopover(config, slot);

        case COMPONENTS.Result:
            return rabbit.Result.createResult(config, slot);

        case COMPONENTS.Skeleton:
            return rabbit.Skeleton.createSkeleton(config);

        case COMPONENTS.Switch:
            return rabbit.Switch.createSwitch(config, slot);

        case COMPONENTS.Table:
            return rabbit.Table.createTable(config);

        case COMPONENTS.Timeline:
            return rabbit.Timeline.createTimeline(config, slot);

        case COMPONENTS.Tooltip:
            return rabbit.Tooltip.createTooltip(config, slot);

        default:
            throw new Error(
                `[Rabbit] You are trying to create a invalid component "${compsName}" and that does not exist in Rabbit`
            );
    }
}