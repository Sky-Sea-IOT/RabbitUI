const components = {
    Alert: "alert",
    Avatar: "avatar",
    BackTop: "backTop",
    Breadcrumb: "breadcrumb",
    Card: "card",
    Collapse: "collapse",
    Drawer: "drawer",
    Dropdown: "dropdown",
    Empty: "empty",
    List: "list",
    Modal: "modal",
    PageHeader: "pageHeader",
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
            'You need to pass in a component name in the tag attribute "data-component". Like this, data-component="alert"';
        throw new Error(`[Rabbit] ${error}`);
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
            return rabbit.Drawer.creatDrawer(el, config, slot);

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
            throw new Error(
                `[Rabbit] You are trying to create a component "${compsName}" that does not exist in Rabbit`
            );
    }
};