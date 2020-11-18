/**
 * Timeline 时间轴
 * @description 垂直展示的时间流信息。
 */

Rabbit.prototype.Timeline = {
    create: (config, slot) => {
        const prefixCls = "rbt-timeline";
        const { color = [], pending = false } = config;
        const { dot, timelineItem } = slot;

        const Timeline = document.createElement("ul");

        Timeline.className = `${prefixCls}`;

        if (pending) {
            Timeline.classList.add(`${prefixCls}-pending`);
        }

        const createItems = (i) => {
            const TimelineItem = document.createElement("li");
            const TimelineItemTail = document.createElement("div");
            const TimelineItemHead = document.createElement("div");
            const TimelineItemContent = document.createElement("div");

            TimelineItem.className = `${prefixCls}-item`;
            TimelineItemTail.className = `${prefixCls}-item-tail`;
            TimelineItemHead.className = `${prefixCls}-item-head`;
            TimelineItemContent.className = `${prefixCls}-item-content`;

            if (dot[i]) {
                addElemetsOfSlots(dot[i], TimelineItemHead);
                TimelineItemHead.classList.add(`${prefixCls}-item-head-custom`);
            }

            if (isArr(color)) {
                if (color[i] === " " || isUndef(color[i]) || color[i] === null) {
                    TimelineItemHead.classList.add(`${prefixCls}-item-head-blue`);
                } else if (
                    color[i] === "blue" ||
                    color[i] === "red" ||
                    color[i] === "green" ||
                    color[i] === "gray"
                ) {
                    TimelineItemHead.classList.add(`${prefixCls}-item-head-${color[i]}`);
                } else {
                    TimelineItemHead.style.color = `${color[i]}`;
                    TimelineItemHead.style.borderColor = `${color[i]}`;
                }
            } else {
                const err = `[Rabbit] The property color is an array of types instead of ${_typeof(
          color
        )}`;
                throw TypeError(err);
            }

            isSlotsUserd(true, timelineItem[i]);
            addElemetsOfSlots(timelineItem[i], TimelineItemContent);

            TimelineItem.append(
                TimelineItemTail,
                TimelineItemHead,
                TimelineItemContent
            );
            Timeline.appendChild(TimelineItem);
        };

        for (let i = 0; i < timelineItem.length; i++) createItems(i);

        return Timeline;
    },
};