const components = {
    Alert: "alert",
    Avatar: "avatar",
    BackTop: "backtop",
    Breadcrumb: "breadcrumb",
    Card: "card",
    Collapse: "collapse",
    Drawer: "drawer",
    Dropdown: "dropdown",
    Empty: "empty",
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

const getComps = (el, compsName, config, slot) => {
    if (!compsName) {
        const error =
            "UI components that use Rabbit need to follow our agreed component tags, as shown in the example <rab-alert></rab-alert>, and all component tags should come with closing tags";
        throw ReferenceError(`[Rabbit] ${error}`);
    }

    switch (compsName) {
        case components.Alert:
            return rabbit.Alert.createAlert(config, slot);

        case components.Avatar:
            return rabbit.Avatar.createAvatar(config);

        case components.BackTop:
            return rabbit.BackTop.createBackTop(config, slot);

        case components.Breadcrumb:
            return rabbit.Breadcrumb.createBreadcrumb(config, slot);

        case components.Card:
            return rabbit.Card.createCard(config, slot);

        case components.Collapse:
            return rabbit.Collapse.createCollapse(config, slot);

        case components.Drawer:
            return rabbit.Drawer.createDrawer(el, config, slot);

        case components.Dropdown:
            return rabbit.Dropdown.createDropDown(config, slot);

        case components.Empty:
            return rabbit.Empty.createEmpty(config, slot);

        case components.List:
            return rabbit.List.createList(config, slot);

        case components.Modal:
            return rabbit.Modal.createModal(el, config, slot);

        case components.PageHeader:
            return rabbit.PageHeader.createPageHeader(config, slot);

        case components.Popover:
            return rabbit.Popover.createPopover(config, slot);

        case components.Result:
            return rabbit.Result.createResult(config, slot);

        case components.Skeleton:
            return rabbit.Skeleton.createSkeleton(config);

        case components.Switch:
            return rabbit.Switch.createSwitch(config, slot);

        case components.Table:
            return rabbit.Table.createTable(config);

        case components.Timeline:
            return rabbit.Timeline.createTimeline(config, slot);

        case components.Tooltip:
            return rabbit.Tooltip.createTooltip(config, slot);

        default:
            throw Error(
                `[Rabbit] You are trying to create a invalid component "${compsName}" and that does not exist in Rabbit`
            );
    }
};