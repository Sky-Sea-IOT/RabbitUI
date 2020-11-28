/**
 * 获取各个 slot 项
 * @param {string} el
 * @returns {HTMLElement | NodeList}
 */
function _getCompsSlot(el) {
    const REF = el.querySelector('[slot="ref"]'), // Dropdown、Tooltip、Popover slot
        DOT = el.querySelectorAll('[slot="dot"]'), // timeline slot
        DESC = el.querySelector('[slot="desc"]'), // Alert slot
        ICON = el.querySelector('[slot="icon"]'), // Alert slot
        OPEN = el.querySelector('[slot="open"]'), // Switch slot
        CLOSE = el.querySelector('[slot="close"]'), // Switch slot
        EXTRA = el.querySelector('[slot="extra"]'), // Card slot
        PANEL = el.querySelectorAll('[slot="panel"]'), // Collapse slot
        TITLE = el.querySelector('[slot="title"]'), // common slot
        HEADER = el.querySelector('[slot="header"]'), // common slot
        FOOTER = el.querySelector('[slot="footer"]'), // common slot
        CONTENT = el.querySelector('[slot="content"]'), // common slot
        MESSAGE = el.querySelector('[slot="message"]'), // Alert slot
        // querySelectorAll
        STEP = el.querySelectorAll('[slot="step"]'), // Steps slot
        LISTITEM = el.querySelectorAll('[slot="listItem"]'), // list slot
        ACTION = el.querySelectorAll('[slot="action"]'), // list slot
        LISTITEMMETA = el.querySelectorAll('[slot="listItemMeta"]'), // list slot
        LISTITEMTITLE = el.querySelectorAll('[slot="listItemTitle"]'), // list slot
        LISTITEMDESC = el.querySelectorAll('[slot="listItemDesc"]'), // list slot
        LISTITEMAVATAR = el.querySelectorAll('[slot="listItemAvatar"]'), // list slot
        TIMELINEITEM = el.querySelectorAll('[slot="timelineItem"]'), // timeline slot
        DROPDOWNITEM = el.querySelectorAll('[slot="dropdownItem"]'), // dropdown slot
        CAROUSELITEM = el.querySelectorAll('[slot="carouselItem"]'), // carousel slot
        BREADCRUMBITEM = el.querySelectorAll('[slot="breadcrumbItem"]'); // breadcrumb slot

    const obj = {
        REF,
        DOT,
        DESC,
        ICON,
        STEP,
        OPEN,
        CLOSE,
        EXTRA,
        PANEL,
        TITLE,
        ACTION,
        HEADER,
        FOOTER,
        MESSAGE,
        CONTENT,
        LISTITEM,
        LISTITEMMETA,
        LISTITEMDESC,
        LISTITEMTITLE,
        TIMELINEITEM,
        DROPDOWNITEM,
        CAROUSELITEM,
        LISTITEMAVATAR,
        BREADCRUMBITEM,
    };

    return obj;
}

// export default _getCompsSlot;