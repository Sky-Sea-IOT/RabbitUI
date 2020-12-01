/**
 * Carousel走马灯
 * 常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
 */
Rabbit.prototype.Carousel = {
    prefixCls: "rbt-carousel",
    _createInstance(_config, _slot) {
        const {
            prev,
            next,
            arrow = "hover",
            height = "auto",
            easing = "ease",
            trigger = "click",
            onClick,
            initial = 0,
            autoplay = false,
            radiusDot = false,
            hoverPause = true,
            dotPosition = "inside",
            autoplaySpeed = 3000,
        } = _config;

        const { CAROUSELITEM } = _slot;

        const Carousel = document.createElement("div");
        const CarouselArrowL = document.createElement("button");
        const CarouselArrowR = document.createElement("button");
        const CarouselList = document.createElement("div");
        const CarouselDots = document.createElement("ol");

        let carouselItems = [];
        let indicators = [];

        for (let i = 0; i < CAROUSELITEM.length; i++) {
            const CarouselItem = document.createElement("div");
            const CarouselIndicator = document.createElement("li");
            const CarouselIndicatorBtn = document.createElement("button");

            CarouselItem.className = `${this.prefixCls}-item`;
            CarouselIndicatorBtn.type = "button";

            this._setHeight(height, CarouselItem);
            this._setEaseing(easing, CarouselItem);
            this._setRadiusDot(radiusDot, CarouselIndicatorBtn);
            this._itemClickHandle(CarouselItem, i, onClick);

            addElemetsOfSlots(CAROUSELITEM[i], CarouselItem);

            CarouselIndicator.appendChild(CarouselIndicatorBtn);
            CarouselList.appendChild(CarouselItem);
            CarouselDots.appendChild(CarouselIndicator);

            carouselItems.push(CarouselItem);
            indicators.push(CarouselIndicator);
        }

        this._addClassName(
            Carousel,
            CarouselArrowL,
            CarouselArrowR,
            CarouselList,
            CarouselDots
        );
        this._setCarouseItemActive(carouselItems, initial);
        this._setArrow(arrow, CarouselArrowL, CarouselArrowR);
        this._setDotPos(dotPosition, CarouselDots);
        this._setInitPosition(initial, indicators, carouselItems);
        this._init_({
            index: initial,
            autoplay,
            speed: autoplaySpeed,
            hoverPause,
            carousel: Carousel,
            indicators,
            leftArrow: CarouselArrowL,
            rightArrow: CarouselArrowR,
            carouselItems,
            prevCallback: prev,
            nextCallback: next,
        });

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
        carousel.className = `${this.prefixCls}`;
        carouselArrowL.className = `${this.prefixCls}-arrow left`;
        carouselArrowR.className = `${this.prefixCls}-arrow right`;
        carouselList.className = `${this.prefixCls}-list`;
        carouselDots.className = `${this.prefixCls}-dots`;
    },

    _setCarouseItemActive(carouselItems, position) {
        carouselItems[position].classList.add("active");
    },

    _setArrow(showArrow, carouselArrowL, carouselArrowR) {
        carouselArrowL.type = "button";
        carouselArrowR.type = "button";

        carouselArrowL.classList.add(`${this.prefixCls}-arrow-${showArrow}`);
        carouselArrowR.classList.add(`${this.prefixCls}-arrow-${showArrow}`);

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

    _setDotPos(position, carouselDots) {
        carouselDots.classList.add(`${this.prefixCls}-dots-${position}`);
    },

    _setRadiusDot(radiusDot, indicator) {
        if (radiusDot) {
            indicator.className = "radius";
        }
    },

    _setInitPosition(position, indicators, carouselItems) {
        if (position < 0 || position > carouselItems.length - 1) {
            console.error(
                `[Rabbit warn] The initial value of ${position} set for carousel is invalid`
            );
            return;
        }
        indicators[position].classList.add(`${this.prefixCls}-active`);
    },

    // 点击幻灯片时触发，返回索引值
    _itemClickHandle(carouselItem, index, cb) {
        carouselItem.addEventListener("click", callback);

        function callback() {
            isFunc(cb) ? cb(index) : null;
        }
    },

    _setIndicatorActive(indicator) {
        indicator.classList.add(`${this.prefixCls}-active`);
        Rbt.siblings(indicator).map((brother) => {
            brother.classList.remove(`${this.prefixCls}-active`);
        });
    },

    _itemChangeEffect(d, prevItem, nextItem) {
        if (d === "forward") {
            nextItem.classList.add(`${this.prefixCls}-item-next`);
            setTimeout(() => {
                nextItem.classList.add(`${this.prefixCls}-item-left`);
                prevItem.classList.add(`${this.prefixCls}-item-left`);
            }, 20);
            setTimeout(() => {
                prevItem.classList.remove(`${this.prefixCls}-item-left`);
                prevItem.classList.remove("active");
                nextItem.classList.remove(`${this.prefixCls}-item-next`);
                nextItem.classList.remove(`${this.prefixCls}-item-left`);
                nextItem.classList.add("active");
            }, 500);
        }
        if (d === "back") {
            prevItem.classList.add(`${this.prefixCls}-item-prev`);
            setTimeout(() => {
                prevItem.classList.add(`${this.prefixCls}-item-right`);
                nextItem.classList.add(`${this.prefixCls}-item-right`);
            }, 20);
            setTimeout(() => {
                prevItem.classList.add("active");
                prevItem.classList.remove(`${this.prefixCls}-item-prev`);
                prevItem.classList.remove(`${this.prefixCls}-item-right`);
                nextItem.classList.remove(`${this.prefixCls}-item-right`);
                nextItem.classList.remove("active");
            }, 500);
        }
    },

    _forward(index, carouselItems) {
        const total = carouselItems.length - 1;
        const nextItem = carouselItems[index]; // 下一项
        let prevItem = carouselItems[index - 1]; // 相对于下一项的上一个当前项
        // 如果获取为 undefined 则说明当前要在尾项开始回滚到首项
        if (prevItem == undefined) prevItem = carouselItems[total];
        this._itemChangeEffect("forward", prevItem, nextItem);
    },

    _back(index, carouselItems) {
        const prevItem = carouselItems[index]; // 前一项
        // 相对于前一项的下一个当前项
        let nextItem = carouselItems[index + 1];
        // 如果获取为 undefined 则说明当前要在首项开始回滚到尾项
        if (nextItem == undefined) nextItem = carouselItems[0];
        this._itemChangeEffect("back", prevItem, nextItem);
    },

    _sliding(direction, index, indicators, carouselItems) {
        if (direction === "forward") this._forward(index, carouselItems);
        if (direction === "back") this._back(index, carouselItems);

        this._setIndicatorActive(indicators[index]);
    },

    _init_({
        index,
        autoplay,
        speed,
        hoverPause,
        carousel,
        leftArrow,
        rightArrow,
        indicators,
        carouselItems,
        prevCallback,
        nextCallback,
    } = {}) {
        const total = carouselItems.length - 1;
        let timer = null;
        let record = index; //记录位置
        let value;

        const next = () => {
            record >= total ? (record = 0) : record++;
            value = record;
            isFunc(nextCallback) ? nextCallback(value) : null;
            this._sliding("forward", record, indicators, carouselItems);
        };
        const prev = () => {
            record <= 0 ? (record = total) : record--;
            value = record;
            isFunc(prevCallback) ? prevCallback(value) : null;
            this._sliding("back", record, indicators, carouselItems);
        };
        // 暂停
        const pause = () => window.clearInterval(timer);
        // 开始
        const start = () => (timer = window.setInterval(next, speed));
        // 鼠标悬停在轮播图是否暂停轮播
        const _hoverPause = () => {
            if (hoverPause) {
                carousel.addEventListener("mouseenter", pause);
                carousel.addEventListener("mouseleave", start);
            }
        };
        // 是否自动播放
        const isAutoPlay = () => {
            if (autoplay) {
                start();
                _hoverPause();
            }
        };
        const indicatorHandle = () => {
            indicators.map((indicator, index) => {
                indicator.addEventListener("click", () => {
                    this._setIndicatorActive(indicator);
                });
            });
        };

        leftArrow.addEventListener("click", prev);
        rightArrow.addEventListener("click", next);

        isAutoPlay();
        indicatorHandle();
    },
};