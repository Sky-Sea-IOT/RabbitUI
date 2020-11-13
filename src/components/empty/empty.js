/**
 * Empty空状态
 * 空状态时的展示占位图。
 */

rabbit.Empty = {
    createEmpty: (config, slot) => {
        const prefixCls = "rbt-empty";

        const { desc = "暂无数据", image = "default", imageStyle = {} } = config;

        const { footer } = slot;

        const imgStyle = objToString(imageStyle);

        const Empty = document.createElement("div");
        const EmptyImageBox = document.createElement("div");
        const EmptImg = document.createElement("img");
        const EmptyDesc = document.createElement("div");
        const EmptyFooter = document.createElement("div");

        Empty.className = `${prefixCls}`;
        EmptyImageBox.className = `${prefixCls}-img`;
        EmptyDesc.className = `${prefixCls}-desc`;
        EmptyFooter.className = `${prefixCls}-footer`;

        if (image !== "default" && image !== "simple") {
            EmptImg.src = image;
            EmptyImageBox.appendChild(EmptImg);
        } else {
            const getSvg = getEmptyImg(image);
            EmptyImageBox.innerHTML = getSvg;
        }

        // 	图片样式
        EmptyImageBox.style.cssText = imgStyle;

        EmptyDesc.innerHTML = desc;

        Empty.append(EmptyImageBox, EmptyDesc);

        // 不展示描述
        if (desc === false) {
            Empty.removeChild(EmptyDesc);
        }

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, EmptyFooter);
            Empty.appendChild(EmptyFooter);
        }

        isSlotsUserd(true, footer);

        return Empty;
    },
};