/**
 * BackTop回到顶部
 * 返回页面顶部的操作按钮。
 */
Rabbit.prototype.BackTop = {
    createInstance(_config, _slot) {
        const prefixCls = 'rbt-back-top';
        const prefixIconCls = 'rbt-icon';

        const {
            height = 400,
                right = 100,
                bottom = 50,
                duration = 450,
                onClick,
        } = _config;

        const { CONTENT } = _slot;

        const BackTop = document.createElement('div');
        const BackTopInner = document.createElement('div');
        const BackTopIcon = document.createElement('i');

        BackTop.className = `${prefixCls}`;
        BackTopInner.className = `${prefixCls}-inner`;
        BackTopIcon.className = `${prefixIconCls} ${prefixIconCls}-md-arrow-up ${prefixCls}-icon`;

        BackTopInner.appendChild(BackTopIcon);

        // 将设置的每一个 height 作为标签属性添加到组件上
        BackTop.dataset.visibilityHeight = height;

        // 自定义位置
        BackTop.style.bottom = `${bottom}px`;
        BackTop.style.right = `${right}px`;

        // 如果用 slot CONTENT 自定义内容则替换掉默认的图标
        if (CONTENT) {
            addElemetsOfSlots(CONTENT, BackTop);
        } else {
            BackTop.appendChild(BackTopInner);
        }

        // 点击 backtop 返回顶部和回调
        const handleClick = () => {
            const sTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollTop(window, sTop, 0, duration);
            isFunc(onClick) ? onClick() : null;
        };

        BackTop.addEventListener('click', handleClick);

        // 滚动到指定距离显示 backtop
        window.onscroll = () => this.backTopShow(`.${prefixCls}`, window.scrollY);

        return BackTop;
    },

    backTopShow(el, top) {
        const scrollY = Math.floor(top);
        const backTops = document.querySelectorAll(el);

        backTops.forEach(item => {
            // 获取属于该组件的显示height
            const visibilityHeight = Math.floor(item.dataset.visibilityHeight);

            // 判断是否滚动到指定的显示height
            if (scrollY >= visibilityHeight) {
                item.style.display = 'block';

                setTimeout(() => (item.style.opacity = 1), 0);
            } else {
                item.style.display = 'none';
                item.style.opacity = 0;
            }
        });
    },

    scrollTop(el, from = 0, to, duration, endCallback) {
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame =
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
        }
        const difference = Math.abs(from - to);
        const step = Math.ceil((difference / duration) * 25);

        const scroll = (start, end, step) => {
            if (start === end) {
                endCallback && endCallback();
                return;
            }

            let d = start + step > end ? end : start + step;
            if (start > end) {
                d = start - step < end ? end : start - step;
            }

            if (el === window) {
                window.scrollTo(d, d);
            } else {
                el.scrollTop = d;
            }
            window.requestAnimationFrame(() => scroll(d, end, step));
        };
        scroll(from, to, step);
    },
};

// const { BackTop } = Rabbit.prototype;
// export default BackTop;