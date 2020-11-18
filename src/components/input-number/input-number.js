/**
 * InputNumber 数字输入框
 * 通过鼠标或键盘，输入范围内的数值
 */
Rabbit.prototype.InputNumber = {
    create(config) {
        const {
            max = Infinity,
                min = -Infinity,
                step = 1,
                size = "default",
                value = 1,
                onBlur,
                onFocus,
                onChange,
                disabled = false,
                readOnly = false,
                editable = true,
                precision = 1,
                placeholder = "",
        } = config;

        const InputNumber = document.createElement("div");
        const InputNumberHandlerWrap = document.createElement("div");
        const InputNumberHandlerUp = document.createElement("a");
        const InputNumberHandlerDown = document.createElement("a");
        const InputNumberHandlerUpIco = document.createElement("span");
        const InputNumberHandlerDownIco = document.createElement("span");
        const InputNumberInputWrap = document.createElement("div");
        const InputNumberInput = document.createElement("input");

        this.addClassName(
            InputNumber,
            InputNumberHandlerWrap,
            InputNumberHandlerUp,
            InputNumberHandlerDown,
            InputNumberHandlerUpIco,
            InputNumberHandlerDownIco,
            InputNumberInputWrap,
            InputNumberInput,
            size
        );

        this.setInputAttr(InputNumberInput, {
            value,
            step,
            max,
            min,
            disabled,
            readOnly,
            placeholder,
        });
        this.setDisabled(InputNumber, disabled);
        this.inputEditable(InputNumberInput, editable);
        this.focusHandler(InputNumber, InputNumberInput, onFocus);
        this.blurHandler(InputNumber, InputNumberInput, onBlur);
        this.upHandler(
            InputNumberHandlerUp,
            InputNumberInput,
            step,
            onChange,
            readOnly,
            max,
            precision
        );
        this.downHandler(
            InputNumberHandlerDown,
            InputNumberInput,
            step,
            onChange,
            readOnly,
            min,
            precision
        );
        this.keyboardChangeVal(InputNumberInput, min, max);

        InputNumber.append(InputNumberHandlerWrap, InputNumberInputWrap);
        InputNumberHandlerWrap.append(InputNumberHandlerUp, InputNumberHandlerDown);
        InputNumberHandlerUp.appendChild(InputNumberHandlerUpIco);
        InputNumberHandlerDown.appendChild(InputNumberHandlerDownIco);
        InputNumberInputWrap.appendChild(InputNumberInput);

        return InputNumber;
    },

    addClassName(
        InputNumber,
        InputNumberHandlerWrap,
        InputNumberHandlerUp,
        InputNumberHandlerDown,
        InputNumberHandlerUpIco,
        InputNumberHandlerDownIco,
        InputNumberInputWrap,
        InputNumberInput,
        size
    ) {
        const prefixCls = "rbt-input-number";
        const prefixIconCls = "rbt-icon";

        InputNumber.className = `${prefixCls} ${prefixCls}-${size}`;
        InputNumberHandlerWrap.className = `${prefixCls}-handler-wrap`;
        InputNumberHandlerUp.className = `${prefixCls}-handler ${prefixCls}-handler-up`;
        InputNumberHandlerDown.className = `${prefixCls}-handler ${prefixCls}-handler-down`;
        InputNumberHandlerUpIco.className = `${prefixCls}-handler-up-inner ${prefixIconCls}  
        ${prefixIconCls}-ios-arrow-up`;
        InputNumberHandlerDownIco.className = `${prefixCls}-handler-down-inner ${prefixIconCls} ${prefixIconCls}-ios-arrow-down`;
        InputNumberInputWrap.className = `${prefixCls}-input-wrap`;
        InputNumberInput.className = `${prefixCls}-input`;
    },

    setInputAttr(
        input, { value, step, max, min, disabled, readOnly, placeholder } = {}
    ) {
        input.type = "number";

        if (value) {
            input.value = value;
            input.setAttribute("value", value);
        }

        input.step = step;
        input.max = max;
        input.min = min;
        input.disabled = disabled;
        input.readOnly = readOnly;
        input.placeholder = placeholder;
    },

    addNum(input, val, step, cb, readOnly, max, precision) {
        val++;
        this.setValue("up", input, val, step, cb, readOnly, precision, {
            max,
        });
    },

    reduceNum(input, val, step, cb, readOnly, min, precision) {
        val--;
        this.setValue("down", input, val, step, cb, readOnly, precision, {
            min,
        });
    },

    inputValChange(input, val, cb) {
        input.value = val;
        isFunc(cb) ? cb(val) : null;
        input.setAttribute("value", val);
    },

    setValue(type, input, val, step, cb, readOnly, precision, { max, min } = {}) {
        if (readOnly) {
            return false;
        }

        // !如果 step 是小数，且点击箭头控制每次改变的精度会出现与键盘上下方向键控制的数值不一致

        if (type === "up") {
            // 当step 为 1 或 0 时并无意义
            if (step != 1 || step != 0) {
                val = Number((val * step).toFixed(precision));
                if (val >= max) {
                    val = max;
                }
                this.inputValChange(input, val, cb);
            }
        }
        if (type === "down") {
            if (step != 0) {
                val = Number((val / step).toFixed(precision));
                if (val <= min) {
                    val = min;
                }
                this.inputValChange(input, val, cb);
            }
        }
    },

    focusHandler(el, input, cb) {
        input.onfocus = (e) => {
            isFunc(cb) ? cb(e) : null;
            el.classList.add("rbt-input-number-focused");
        };
    },

    blurHandler(el, input, cb) {
        input.onblur = () => {
            isFunc(cb) ? cb() : null;
            el.classList.remove("rbt-input-number-focused");
        };
    },

    upHandler(el, input, step, cb, readOnly, max, precision) {
        el.onclick = () => {
            // 记录当前输入框值
            let currentVal = Number(input.value);
            this.addNum(input, currentVal, step, cb, readOnly, max, precision);
        };
    },

    downHandler(el, input, step, cb, readOnly, min, precision) {
        el.onclick = () => {
            // 记录当前输入框值
            let currentVal = Number(input.value);
            this.reduceNum(input, currentVal, step, cb, readOnly, min, precision);
        };
    },

    keyboardChangeVal(input, min, max) {
        input.oninput = (e) => {
            // 记录当前输入框值
            let currentVal = Number(e.target.value);
            // 如果输入的值小于 min 则当前值变为 min
            if (currentVal < min) {
                currentVal = min;
                input.value = currentVal;
            }
            // 如果输入的值大于 max 则当前值变为 max
            if (currentVal > max) {
                currentVal = max;
                input.value = currentVal;
            }
            input.value = currentVal;
        };
    },

    inputEditable(input, editable) {
        if (!editable) {
            input.readOnly = true;
        }
    },

    setDisabled(el, disabled) {
        if (disabled) {
            el.classList.add("rbt-input-number-disabled");
        }
    },
};