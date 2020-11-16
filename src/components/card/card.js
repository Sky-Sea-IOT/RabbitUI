/**
 * Card 卡片
 * 基础容器，用来显示文字、列表、图文等内容
 */

rabbit.Card = {
    createCard: (config, slot) => {
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

        const Card = document.createElement("div");
        const CardHeader = document.createElement("div");
        const CardExtra = document.createElement("div");
        const CardBody = document.createElement("div");

        Card.className = `${prefixCls} ${className}`;
        CardHeader.className = `${prefixCls}-head`;
        CardExtra.className = `${prefixCls}-extra`;
        CardBody.className = `${prefixCls}-body`;

        const HEADSTYLE = objToString(headStyle);
        const BODYSTYLE = objToString(bodyStyle);

        CardHeader.style.cssText = HEADSTYLE;
        CardBody.style.cssText = BODYSTYLE;

        if (isNum(width)) Card.style.width = `${width}px`;

        if (bordered) Card.classList.add(`${prefixCls}-bordered`);

        if (hoverable) Card.classList.add(`${prefixCls}-hoverable`);

        if (isNum(padding)) CardBody.style.padding = `${padding}px`;

        if (title && title.innerHTML) {
            addElemetsOfSlots(title, CardHeader);
            Card.appendChild(CardHeader);
        }
        if (extra && extra.innerHTML) {
            addElemetsOfSlots(extra, CardExtra);
            Card.appendChild(CardExtra);
        }
        if (content && content.innerHTML) {
            addElemetsOfSlots(content, CardBody);
            Card.appendChild(CardBody);
        }

        isSlotsUserd(true, title);
        isSlotsUserd(true, extra);
        isSlotsUserd(true, content);

        return Card;
    },
};