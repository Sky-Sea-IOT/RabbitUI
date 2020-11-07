/**
 * Skeleton骨架屏
 * 在需要等待加载内容的位置提供一个占位图形组合。
 */

const Skeleton = {
    createSkeleton: (config) => {
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
        } = config;

        const _Skeleton = document.createElement("div");
        const _SkeletonHeader = document.createElement("div");
        const _SkeletonAvatar = document.createElement("span");
        const _SkeletonBody = document.createElement("div");
        const _SkeletonTitle = document.createElement("h3");
        const _SkeletonParagraph = document.createElement("ul");

        _Skeleton.className = `${prefixCls}`;
        _SkeletonHeader.className = `${prefixCls}-header`;
        _SkeletonAvatar.className = `${prefixCls}-avatar ${prefixCls}-avatar-${avatarShape}`;
        _SkeletonBody.className = `${prefixCls}-body`;
        _SkeletonTitle.className = `${prefixCls}-title`;
        _SkeletonParagraph.className = `${prefixCls}-paragraph`;

        // 设置段落占位图的行数
        if (isNum(rows)) {
            for (let i = 0; i < rows; i++) {
                const SkeletonRows = document.createElement("li");
                _SkeletonParagraph.appendChild(SkeletonRows);
            }
        }

        let _skeletonRows = _SkeletonParagraph.querySelectorAll("li");

        // 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度
        if (isArr(rowsWidth)) {
            rowsWidth.map((width, index) => {
                _skeletonRows[index].style.width = `${width}%`;
            });
        } else {
            _skeletonRows[rows - 1].style.width = `${rowsWidth}%`;
        }

        // 是否展示动画效果
        active ? _Skeleton.classList.add(`${prefixCls}-active`) : "";

        // 设置标题占位图的宽度
        titleWidth ? (_SkeletonTitle.style.width = `${titleWidth}%`) : "";

        // 设置头像占位图的大小
        if (isNum(avatarSize)) {
            _SkeletonAvatar.style.cssText = `width: ${avatarSize}px;height: ${avatarSize}px;line-height: ${avatarSize}px;`;
        } else {
            _SkeletonAvatar.classList.add(`${prefixCls}-avatar-${avatarSize}`);
        }

        // 是否显示头像占位图
        avatar ? _Skeleton.appendChild(_SkeletonHeader) : "";
        _SkeletonHeader.appendChild(_SkeletonAvatar);

        _Skeleton.appendChild(_SkeletonBody);

        // 是否显示标题占位图
        title ? _SkeletonBody.appendChild(_SkeletonTitle) : "";

        // 是否显示段落占位图
        paragraph ? _SkeletonBody.appendChild(_SkeletonParagraph) : "";

        return _Skeleton;
    },
};