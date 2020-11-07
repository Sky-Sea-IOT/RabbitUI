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
            return Alert.createAlert(config, slot);

        case components.Avatar:
            return Avatar.createAvatar(config);

        case components.BackTop:
            return BackTop.createBackTop(config, slot);

        case components.Breadcrumb:
            return Breadcrumb.createBreadcrumb(config, slot);

        case components.Card:
            return Card.createCard(config, slot);

        case components.Collapse:
            return Collapse.createCollapse(config, slot);

        case components.Drawer:
            return Drawer.creatDrawer(el, config, slot);

        case components.Dropdown:
            return Dropdown.createDropDown(config, slot);

        case components.Empty:
            return Empty.createEmpty(config, slot);

        case components.List:
            return List.createList(config, slot);

        case components.Modal:
            return Modal.createModal(el, config, slot);

        case components.PageHeader:
            return PageHeader.createPageHeader(config, slot);

        case components.Popover:
            return Popover.createPopover(config, slot);

        case components.Result:
            return Result.createResult(config, slot);

        case components.Skeleton:
            return Skeleton.createSkeleton(config);

        case components.Switch:
            return Switch.createSwitch(config, slot);

        case components.Timeline:
            return Timeline.createTimeline(config, slot);

        case components.Tooltip:
            return Tooltip.createTooltip(config, slot);

        default:
            throw new Error(
                `[Rabbit] You are trying to create a component "${compsName}" that does not exist in Rabbit`
            );
    }
};