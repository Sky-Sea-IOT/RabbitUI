/**
 * 获取各个 slot 项
 * @param {string} el
 * @returns {HTMLElement & NodeList}
 */
const getCompsSlot = el => {
    const REF = el.querySelector('[slot="ref"]'), // Dropdown、Tooltip、Popover slot
        DOT = el.querySelectorAll('[slot="dot"]'), // Timeline slot
        DESC = el.querySelector('[slot="desc"]'), // Alert slot
        ICON = el.querySelector('[slot="icon"]'), // Alert slot
        OPEN = el.querySelector('[slot="open"]'), // Switch slot
        CLOSE = el.querySelector('[slot="close"]'), // Switch slot
        EXTRA = el.querySelector('[slot="extra"]'), // Card slot
        COLLAPSEPANEL = el.querySelectorAll('[slot="collapsePanel"]'), // Collapse slot
        TITLE = el.querySelector('[slot="title"]'), // common slot
        HEADER = el.querySelector('[slot="header"]'), // common slot
        FOOTER = el.querySelector('[slot="footer"]'), // common slot
        CONTENT = el.querySelector('[slot="content"]'), // common slot
        MESSAGE = el.querySelector('[slot="message"]'), // Alert slot
        // querySelectorAll
        STEP = el.querySelectorAll('[slot="step"]'), // Steps slot
        TABPANE = el.querySelectorAll('[slot="tabPane"]'), // Tabs slot
        ACTION = el.querySelectorAll('[slot="action"]'), // List slot
        LISTITEM = el.querySelectorAll('[slot="listItem"]'), // List slot
        LISTITEMMETA = el.querySelectorAll('[slot="listItemMeta"]'), // List slot
        LISTITEMTITLE = el.querySelectorAll('[slot="listItemTitle"]'), // List slot
        LISTITEMDESC = el.querySelectorAll('[slot="listItemDesc"]'), // List slot
        LISTITEMAVATAR = el.querySelectorAll('[slot="listItemAvatar"]'), // List slot
        TIMELINEITEM = el.querySelectorAll('[slot="timelineItem"]'), // Timeline slot
        DROPDOWNITEM = el.querySelectorAll('[slot="dropdownItem"]'), // Dropdown slot
        CAROUSELITEM = el.querySelectorAll('[slot="carouselItem"]'), // Carousel slot
        BREADCRUMBITEM = el.querySelectorAll('[slot="breadcrumbItem"]'); // Breadcrumb slot

    const obj = {
        REF,
        DOT,
        DESC,
        ICON,
        STEP,
        OPEN,
        CLOSE,
        EXTRA,
        TITLE,
        ACTION,
        HEADER,
        FOOTER,
        MESSAGE,
        TABPANE,
        CONTENT,
        LISTITEM,
        LISTITEMMETA,
        LISTITEMDESC,
        TIMELINEITEM,
        DROPDOWNITEM,
        CAROUSELITEM,
        LISTITEMTITLE,
        COLLAPSEPANEL,
        LISTITEMAVATAR,
        BREADCRUMBITEM,
    };

    return obj;
};

// export default _getCompsSlot;