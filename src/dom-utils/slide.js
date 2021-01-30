export default function slide() {
    var Slider = {
        up: null,
        down: null
    };
    // the constructed function,timeManager,as such that's a manager about managing the setInterval
    var TimerManager = /** @class */ (function () {
        function TimerManager() {
            this.timers = [];
            this.args = [];
            this.isTimerRun = false;
        }
        return TimerManager;
    }());
    // if the element can't has the property of TimerManage what represented the constructor function,repeated creating a constructed function
    TimerManager.makeTimerManage = function (element) {
        if (!element.TimerManage || element.TimerManage.constructor !== TimerManager) {
            element.TimerManage = new TimerManager();
        }
    };
    // That's order to create the method what add the timer
    TimerManager.prototype.add = function (timer, args) {
        this.timers.push(timer);
        this.args.push(args);
        this.timerRun();
    };
    // called the method is order to run the timer by ordering
    TimerManager.prototype.timerRun = function () {
        if (!this.isTimerRun) {
            var timer = this.timers.shift(), args = this.args.shift();
            if (timer && args) {
                this.isTimerRun = true;
                timer(args[0], args[1]);
            }
        }
    };
    // const it run the next timer
    TimerManager.prototype.next = function () {
        this.isTimerRun = false;
        this.timerRun();
    };
    function slideUp(element, time) {
        if (element.offsetHeight > 0) {
            var totalHeight_1 = element.offsetHeight;
            var currentHeight_1 = totalHeight_1;
            var reduceValue_1 = totalHeight_1 / (time / 10);
            element.style.transition = 'height ' + time + ' ms';
            element.style.overflow = 'hidden';
            var timer_1 = setInterval(function () {
                currentHeight_1 -= reduceValue_1;
                element.style.height = currentHeight_1 + 'px';
                if (currentHeight_1 <= 0) {
                    clearInterval(timer_1);
                    element.style.display = 'none';
                    element.style.height = totalHeight_1 + 'px';
                    if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        }
        else {
            if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                element.TimerManage.next();
            }
        }
    }
    function slideDown(element, time) {
        if (element.offsetHeight <= 0) {
            element.style.display = 'block';
            element.style.transition = 'height' + time + ' ms';
            element.style.overflow = 'hidden';
            var totalHeight_2 = element.offsetHeight;
            var currentHeight_2 = 0;
            element.style.height = '0px';
            var addValue_1 = totalHeight_2 / (time / 10);
            var timer_2 = setInterval(function () {
                currentHeight_2 += addValue_1;
                element.style.height = currentHeight_2 + 'px';
                if (currentHeight_2 >= totalHeight_2) {
                    clearInterval(timer_2);
                    element.style.height = totalHeight_2 + 'px';
                    if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        }
        else {
            if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                element.TimerManage.next();
            }
        }
    }
    // the interface about slideUp method
    Slider.up = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideUp, arguments);
        return this;
    };
    // the interface about slideDown method
    Slider.down = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideDown, arguments);
        return this;
    };
    return Slider;
}
//# sourceMappingURL=slide.js.map