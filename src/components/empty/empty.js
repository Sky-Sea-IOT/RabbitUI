/**
 * Empty空状态
 * 空状态时的展示占位图。
 */

const Empty = {
    createEmpty: (config, slot) => {
        const prefixCls = "rbt-empty";

        const { desc = "暂无数据", image = "default", imageStyle = {} } = config;

        const { footer } = slot;

        const imgStyle = objToString(imageStyle);

        const _Empty = document.createElement("div");
        const _EmptyImageBox = document.createElement("div");
        const _EmptImg = document.createElement("img");
        const _EmptyDesc = document.createElement("div");
        const _EmptyFooter = document.createElement("div");

        _Empty.className = `${prefixCls}`;
        _EmptyImageBox.className = `${prefixCls}-img`;
        _EmptyDesc.className = `${prefixCls}-desc`;
        _EmptyFooter.className = `${prefixCls}-footer`;

        if (image !== "default" && image !== "simple") {
            _EmptImg.src = image;
            _EmptyImageBox.appendChild(_EmptImg);
        } else {
            const getSvg = getEmptyImg(image);
            _EmptyImageBox.innerHTML = getSvg;
        }

        // 	图片样式
        _EmptyImageBox.style.cssText = imgStyle;

        _EmptyDesc.innerHTML = desc;

        _Empty.append(_EmptyImageBox, _EmptyDesc);

        // 不展示描述
        if (desc === false) {
            _Empty.removeChild(_EmptyDesc);
        }

        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, _EmptyFooter);
            _Empty.appendChild(_EmptyFooter);
        }

        isSlotsUserd(true, footer);

        return _Empty;
    },
};