/**
 * Card 卡片
 * 基础容器，用来显示文字、列表、图文等内容
 */
Rabbit.prototype.Card = {
    createInstance: (_config, _slot) => {
        const prefixCls = "rbt-card";
        const {
            width = 320,
                bordered = true,
                padding = 24,
                headStyle = {},
                bodyStyle = {},
                className = "",
                hoverable = false,
        } = _config;
        const { EXTRA, TITLE, CONTENT } = _slot;

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
        if (TITLE && TITLE.innerHTML) {
            addElemetsOfSlots(TITLE, CardHeader);
            Card.appendChild(CardHeader);
        }
        if (EXTRA && EXTRA.innerHTML) {
            addElemetsOfSlots(EXTRA, CardExtra);
            Card.appendChild(CardExtra);
        }
        if (CONTENT && CONTENT.innerHTML) {
            addElemetsOfSlots(CONTENT, CardBody);
            Card.appendChild(CardBody);
        }

        return Card;
    },
};