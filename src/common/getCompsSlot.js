function _getCompsSlot(el) {
    const ref = el.querySelector('[slot="ref"]'), // Dropdown、Tooltip、Popover slot
        dot = el.querySelectorAll('[slot="dot"]'), // timeline slot
        desc = el.querySelector('[slot="desc"]'), // Alert slot
        icon = el.querySelector('[slot="icon"]'), // Alert slot
        open = el.querySelector('[slot="open"]'), // Switch slot
        close = el.querySelector('[slot="close"]'), // Switch slot
        extra = el.querySelector('[slot="extra"]'), // Card slot
        panel = el.querySelectorAll('[slot="panel"]'), // Collapse slot
        title = el.querySelector('[slot="title"]'), // common slot
        header = el.querySelector('[slot="header"]'), // common slot
        footer = el.querySelector('[slot="footer"]'), // common slot
        content = el.querySelector('[slot="content"]'), // common slot
        message = el.querySelector('[slot="message"]'), // Alert slot
        // querySelectorAll
        step = el.querySelectorAll('[slot="step"]'), // Steps slot
        listItem = el.querySelectorAll('[slot="listItem"]'), // list slot
        action = el.querySelectorAll('[slot="action"]'), // list slot
        listItemMeta = el.querySelectorAll('[slot="listItemMeta"]'), // list slot
        listItemTitle = el.querySelectorAll('[slot="listItemTitle"]'), // list slot
        listItemDesc = el.querySelectorAll('[slot="listItemDesc"]'), // list slot
        listItemAvatar = el.querySelectorAll('[slot="listItemAvatar"]'), // list slot
        timelineItem = el.querySelectorAll('[slot="timelineItem"]'), // timeline slot
        dropdownItem = el.querySelectorAll('[slot="dropdownItem"]'), // dropdown slot
        breadcrumbItem = el.querySelectorAll('[slot="breadcrumbItem"]'); // breadcrumb slot

    const obj = {
        dot,
        ref,
        desc,
        icon,
        step,
        open,
        close,
        extra,
        panel,
        title,
        action,
        header,
        footer,
        message,
        content,
        listItem,
        listItemMeta,
        listItemDesc,
        listItemTitle,
        timelineItem,
        dropdownItem,
        listItemAvatar,
        breadcrumbItem,
    };

    return obj;
}

// export default _getCompsSlot;