/* eslint-disable prefer-rest-params */
interface Slide {
    up: any;
    down: any;
}

export default function slide(): Slide {
    const Slider: { up: any; down: any } = {
        up: null,
        down: null
    };
    // the constructed function,timeManager,as such that's a manager about managing the setInterval
    class TimerManager {
        timers: any[];
        args: any[];
        isTimerRun: boolean;
        add: any;
        next: any;
        timerRun: any;
        static makeTimerManage: (element: any) => void;
        constructor() {
            this.timers = [];
            this.args = [];
            this.isTimerRun = false;
        }
    }
    // if the element can't has the property of TimerManage what represented the constructor function,repeated creating a constructed function
    TimerManager.makeTimerManage = function (element: any) {
        if (!element.TimerManage || element.TimerManage.constructor !== TimerManager) {
            element.TimerManage = new TimerManager();
        }
    };
    // That's order to create the method what add the timer
    TimerManager.prototype.add = function (timer: any, args: any) {
        this.timers.push(timer);
        this.args.push(args);
        this.timerRun();
    };
    // called the method is order to run the timer by ordering
    TimerManager.prototype.timerRun = function () {
        if (!this.isTimerRun) {
            const timer = this.timers.shift(),
                args = this.args.shift();
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

    function slideUp(element: any, time: any) {
        if (element.offsetHeight > 0) {
            const totalHeight = element.offsetHeight;
            let currentHeight = totalHeight;
            const reduceValue = totalHeight / (time / 10);
            element.style.transition = 'height ' + time + ' ms';
            element.style.overflow = 'hidden';
            const timer = setInterval(function () {
                currentHeight -= reduceValue;
                element.style.height = currentHeight + 'px';
                if (currentHeight <= 0) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    element.style.height = totalHeight + 'px';
                    if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                element.TimerManage.next();
            }
        }
    }

    function slideDown(element: any, time: any) {
        if (element.offsetHeight <= 0) {
            element.style.display = 'block';
            element.style.transition = 'height' + time + ' ms';
            element.style.overflow = 'hidden';
            const totalHeight = element.offsetHeight;
            let currentHeight = 0;
            element.style.height = '0px';
            const addValue = totalHeight / (time / 10);
            const timer = setInterval(function () {
                currentHeight += addValue;
                element.style.height = currentHeight + 'px';
                if (currentHeight >= totalHeight) {
                    clearInterval(timer);
                    element.style.height = totalHeight + 'px';
                    if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (element.TimerManage && element.TimerManage.constructor === TimerManager) {
                element.TimerManage.next();
            }
        }
    }
    // the interface about slideUp method
    Slider.up = function (element: any) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideUp, arguments);
        return this;
    };
    // the interface about slideDown method
    Slider.down = function (element: any) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideDown, arguments);
        return this;
    };
    return Slider;
}
