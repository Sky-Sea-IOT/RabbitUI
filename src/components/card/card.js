/**
 * Card 卡片
 * 基础容器，用来显示文字、列表、图文等内容
 */

rabbit.Card = {
    createCard(config, slot) {
        const prefixCls = "rbt-card";
        const {
            width = 320,
                bordered = true,
                padding = 24,
                headStyle = {},
                bodyStyle = {},
                className = "",
                hoverable = false,
        } = config;
        const { extra, title, content } = slot;

        const _Card = document.createElement("div");
        const _CardHeader = document.createElement("div");
        const _CardExtra = document.createElement("div");
        const _CardBody = document.createElement("div");

        _Card.className = `${prefixCls} ${className}`;
        _CardHeader.className = `${prefixCls}-head`;
        _CardExtra.className = `${prefixCls}-extra`;
        _CardBody.className = `${prefixCls}-body`;

        const HEADSTYLE = objToString(headStyle);
        const BODYSTYLE = objToString(bodyStyle);

        _CardHeader.style.cssText = HEADSTYLE;
        _CardBody.style.cssText = BODYSTYLE;

        if (isNum(width)) _Card.style.width = `${width}px`;

        if (bordered) _Card.classList.add(`${prefixCls}-bordered`);

        if (hoverable) _Card.classList.add(`${prefixCls}-hoverable`);

        if (isNum(padding)) _CardBody.style.padding = `${padding}px`;

        if (title && title.innerHTML) {
            addElemetsOfSlots(title, _CardHeader);
            _Card.appendChild(_CardHeader);
        }
        if (extra && extra.innerHTML) {
            addElemetsOfSlots(extra, _CardExtra);
            _Card.appendChild(_CardExtra);
        }
        if (content && content.innerHTML) {
            addElemetsOfSlots(content, _CardBody);
            _Card.appendChild(_CardBody);
        }

        isSlotsUserd(true, title);
        isSlotsUserd(true, extra);
        isSlotsUserd(true, content);

        return _Card;
    },
};