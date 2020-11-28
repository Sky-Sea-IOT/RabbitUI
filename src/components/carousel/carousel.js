// current.classList.add("rbt-carousel-item-left");
// next.classList.add("rbt-carousel-item-active");
// setTimeout(() => {
//     current(prev).classList.remove("rbt-carousel-item-active");
//     current(prev).classList.remove("rbt-carousel-item-left");
// }, 500);

// 点击指示器切换轮播：对应项添加 rbt-carousel-item-active
// 移除其他 rbt-carousel-item-active，并添加移动类名

/**
 * Carousel走马灯
 * 常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
 */
Rabbit.prototype.Carousel = {
    _createInstance(_config, _slot) {
        const {
            dots = "inside",
                arrow = "hover",
                height = "auto",
                easing = "ease",
                trigger = "click",
                onClick,
                autoplay = false,
                onChange,
                radiusDot = false,
                autoplaySpeed = 2000,
        } = _config;

        const { CAROUSELITEM } = _slot;

        const Carousel = document.createElement("div");
        const CarouselArrowL = document.createElement("button");
        const CarouselArrowR = document.createElement("button");
        const CarouselList = document.createElement("div");
        const CarouselDots = document.createElement("ol");

        let carouselItem = [];

        for (let i = 0; i < CAROUSELITEM.length; i++) {
            const CarouselItem = document.createElement("div");
            const CarouselIndicator = document.createElement("li");
            const CarouselIndicatorBtn = document.createElement("button");

            CarouselItem.className = "rbt-carousel-item";
            CarouselIndicatorBtn.type = "button";

            this._setHeight(height, CarouselItem);
            this._setEaseing(easing, CarouselItem);
            this._setRadiusDot(radiusDot, CarouselIndicatorBtn);

            addElemetsOfSlots(CAROUSELITEM[i], CarouselItem);

            CarouselIndicator.appendChild(CarouselIndicatorBtn);
            CarouselList.appendChild(CarouselItem);
            CarouselDots.appendChild(CarouselIndicator);

            carouselItem.push(CarouselItem);
        }

        this._addClassName(
            Carousel,
            CarouselArrowL,
            CarouselArrowR,
            CarouselList,
            CarouselDots
        );
        this._setArrow(arrow, CarouselArrowL, CarouselArrowR);
        this._setDotsPosition(dots, CarouselDots);

        Carousel.append(CarouselArrowL, CarouselList, CarouselArrowR, CarouselDots);

        return Carousel;
    },

    _addClassName(
        carousel,
        carouselArrowL,
        carouselArrowR,
        carouselList,
        carouselDots
    ) {
        const prefixCls = "rbt-carousel";

        carousel.className = `${prefixCls}`;
        carouselArrowL.className = `${prefixCls}-arrow left`;
        carouselArrowR.className = `${prefixCls}-arrow right`;
        carouselList.className = `${prefixCls}-list`;
        carouselDots.className = `${prefixCls}-dots`;
    },

    _setArrow(showArrow, carouselArrowL, carouselArrowR) {
        carouselArrowL.type = "button";
        carouselArrowR.type = "button";

        carouselArrowL.classList.add(`rbt-carousel-arrow-${showArrow}`);
        carouselArrowR.classList.add(`rbt-carousel-arrow-${showArrow}`);

        carouselArrowL.innerHTML = `<i class="rbt-icon rbt-icon-ios-arrow-back"></i>`;
        carouselArrowR.innerHTML = `<i class="rbt-icon rbt-icon-ios-arrow-forward"></i>`;
    },

    _setHeight(height, carouselItem) {
        let h = isNum(height) ? `${height}px` : height;
        carouselItem.style.height = h;
    },

    _setEaseing(easeing, carouselItem) {
        carouselItem.style.transition = `transform ${easeing} 0.5s`;
    },

    _setDotsPosition(position, carouselDots) {
        if (position) {
            carouselDots.classList.add(`rbt-carousel-dots-${position}`);
        }
    },

    _setRadiusDot(radiusDot, indicator) {
        if (radiusDot) {
            indicator.className = "radius";
        }
    },

    _slider() {},
};