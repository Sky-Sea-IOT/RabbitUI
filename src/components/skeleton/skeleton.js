/**
 * Skeleton骨架屏
 * 在需要等待加载内容的位置提供一个占位图形组合。
 */

Rabbit.prototype.Skeleton = {
    _createInstance: (_config) => {
        const prefixCls = "rbt-skeleton";

        const {
            active = false,
                paragraph = true,
                title = true,
                avatar = false,
                titleWidth = 38,
                rows = 3,
                rowsWidth = 60,
                avatarSize = "large",
                avatarShape = "circle",
        } = _config;

        const Skeleton = document.createElement("div");
        const SkeletonHeader = document.createElement("div");
        const SkeletonAvatar = document.createElement("span");
        const SkeletonBody = document.createElement("div");
        const SkeletonTitle = document.createElement("h3");
        const SkeletonParagraph = document.createElement("ul");

        Skeleton.className = `${prefixCls}`;
        SkeletonHeader.className = `${prefixCls}-header`;
        SkeletonAvatar.className = `${prefixCls}-avatar ${prefixCls}-avatar-${avatarShape}`;
        SkeletonBody.className = `${prefixCls}-body`;
        SkeletonTitle.className = `${prefixCls}-title`;
        SkeletonParagraph.className = `${prefixCls}-paragraph`;

        // 设置段落占位图的行数
        if (isNum(rows)) {
            for (let i = 0; i < rows; i++) {
                const SkeletonRows = document.createElement("li");
                SkeletonParagraph.appendChild(SkeletonRows);
            }
        }

        let _skeletonRows = SkeletonParagraph.querySelectorAll("li");

        // 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度
        if (isArr(rowsWidth)) {
            rowsWidth.map((width, index) => {
                _skeletonRows[index].style.width = `${width}%`;
            });
        } else {
            _skeletonRows[rows - 1].style.width = `${rowsWidth}%`;
        }

        // 是否展示动画效果
        active ? Skeleton.classList.add(`${prefixCls}-active`) : "";

        // 设置标题占位图的宽度
        titleWidth ? (SkeletonTitle.style.width = `${titleWidth}%`) : "";

        // 设置头像占位图的大小
        if (isNum(avatarSize)) {
            SkeletonAvatar.style.cssText = `width: ${avatarSize}px;height: ${avatarSize}px;line-height: ${avatarSize}px;`;
        } else {
            SkeletonAvatar.classList.add(`${prefixCls}-avatar-${avatarSize}`);
        }

        // 是否显示头像占位图
        avatar ? Skeleton.appendChild(SkeletonHeader) : "";
        SkeletonHeader.appendChild(SkeletonAvatar);

        Skeleton.appendChild(SkeletonBody);

        // 是否显示标题占位图
        title ? SkeletonBody.appendChild(SkeletonTitle) : "";

        // 是否显示段落占位图
        paragraph ? SkeletonBody.appendChild(SkeletonParagraph) : "";

        return Skeleton;
    },
};