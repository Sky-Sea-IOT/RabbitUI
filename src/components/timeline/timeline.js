/**
 * Timeline 时间轴
 * @description 垂直展示的时间流信息。
 */

rabbit.Timeline = {
    createTimeline(config, slot) {
        const prefixCls = "rbt-timeline";
        const { color = [], pending = false } = config;
        const { dot, timelineItem } = slot;

        const _Timeline = document.createElement("ul");

        _Timeline.className = `${prefixCls}`;

        if (pending) {
            _Timeline.classList.add(`${prefixCls}-pending`);
        }

        const createItems = (i) => {
            const _TimelineItem = document.createElement("li");
            const _TimelineItemTail = document.createElement("div");
            const _TimelineItemHead = document.createElement("div");
            const _TimelineItemContent = document.createElement("div");

            _TimelineItem.className = `${prefixCls}-item`;
            _TimelineItemTail.className = `${prefixCls}-item-tail`;
            _TimelineItemHead.className = `${prefixCls}-item-head`;
            _TimelineItemContent.className = `${prefixCls}-item-content`;

            if (dot[i]) {
                addElemetsOfSlots(dot[i], _TimelineItemHead);
                _TimelineItemHead.classList.add(`${prefixCls}-item-head-custom`);
            }

            if (isArr(color)) {
                if (color[i] === " " || isUndef(color[i]) || color[i] === null) {
                    _TimelineItemHead.classList.add(`${prefixCls}-item-head-blue`);
                } else if (
                    color[i] === "blue" ||
                    color[i] === "red" ||
                    color[i] === "green" ||
                    color[i] === "gray"
                ) {
                    _TimelineItemHead.classList.add(`${prefixCls}-item-head-${color[i]}`);
                } else {
                    _TimelineItemHead.style.color = `${color[i]}`;
                    _TimelineItemHead.style.borderColor = `${color[i]}`;
                }
            } else {
                let err = `[Rabbit] The property color is an array of types instead of ${_typeof(
          color
        )}`;
                throw TypeError(err);
            }

            isSlotsUserd(true, timelineItem[i]);
            addElemetsOfSlots(timelineItem[i], _TimelineItemContent);

            _TimelineItem.append(
                _TimelineItemTail,
                _TimelineItemHead,
                _TimelineItemContent
            );
            _Timeline.appendChild(_TimelineItem);
        };

        for (let i = 0; i < timelineItem.length; i++) createItems(i);

        return _Timeline;
    },
};