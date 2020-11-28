/**
 * Steps 步骤条
 * 引导用户按照流程完成任务的导航条。
 */
Rabbit.prototype.Steps = {
    _createInstance(_config, _slot) {
        const {
            size = "default",
                status = "process",
                current = 0,
                direction = "horizontal",
        } = _config;

        const { STEP } = _slot;

        const Steps = document.createElement("div");
        Steps.className = `rbt-steps rbt-steps-${direction} rbt-steps-${size}`;

        let stepsItemList = [];
        for (let i = 0; i < STEP.length; i++) {
            const StepsItem = document.createElement("div");
            const StepsTail = document.createElement("div");
            const StepsTailI = document.createElement("i");
            const StepsHead = document.createElement("div");
            const StepsHeadInner = document.createElement("div");
            const StepsHeadIcon = document.createElement("span");
            const StepsMain = document.createElement("div");
            const StepsTitle = document.createElement("div");
            const StepsContent = document.createElement("div");

            stepsItemList.push(StepsItem);

            this._addClassName(
                STEP[i].querySelector('[slot="icon"]'),
                status,
                StepsItem,
                StepsTail,
                StepsHead,
                StepsHeadInner,
                StepsHeadIcon,
                StepsMain,
                StepsTitle,
                StepsContent
            );
            this._setCurrentContent(StepsHeadIcon, i, status);
            this._addIcon(
                STEP[i].querySelector('[slot="icon"]'),
                StepsItem,
                StepsHeadIcon
            );

            Steps.appendChild(StepsItem);
            StepsItem.append(StepsTail, StepsHead, StepsMain);
            StepsTail.appendChild(StepsTailI);
            StepsHead.append(StepsHeadInner, StepsHeadIcon);
            StepsHeadInner.appendChild(StepsHeadIcon);
            StepsMain.append(StepsTitle, StepsContent);
            addElemetsOfSlots(STEP[i].querySelector('[slot="title"]'), StepsTitle);
            addElemetsOfSlots(
                STEP[i].querySelector('[slot="content"]'),
                StepsContent
            );
        }
        this._setStatus(stepsItemList.length, current, stepsItemList, status, STEP);
        return Steps;
    },

    _addClassName(
        icon,
        status,
        stepsItem,
        stepsTail,
        stepsHead,
        stepsHeadInner,
        stepsHeadIcon,
        stepsMain,
        stepsTitle,
        stepsContent
    ) {
        const prefixCls = "rbt-steps";

        stepsItem.className = `${prefixCls}-item ${prefixCls}-status-wait`;
        stepsTail.className = `${prefixCls}-tail`;
        stepsHead.className = `${prefixCls}-head`;
        stepsHeadInner.className = `${prefixCls}-head-inner`;
        stepsMain.className = `${prefixCls}-main`;
        stepsTitle.className = `${prefixCls}-title`;
        stepsContent.className = `${prefixCls}-content`;

        this._setIcon(status, icon, stepsHeadInner, stepsHeadIcon);
    },

    _setIcon(status, icon, stepsHeadInner, stepsHeadIcon) {
        if (!icon) {
            stepsHeadInner.dataset.customIcon = "false";
        }
        if (status === "finish" && !icon) {
            stepsHeadIcon.className =
                "rbt-steps-icon rbt-icon rbt-icon-ios-checkmark";
        }
        if (status === "error" && !icon) {
            stepsHeadIcon.className = "rbt-steps-icon rbt-icon rbt-icon-ios-close";
        }
    },

    _addIcon(icon, stepsItem, stepsHeadIcon) {
        if (icon) {
            stepsItem.classList.add("rbt-steps-custom");
            icon.classList.add("rbt-steps-icon");
            stepsHeadIcon.innerHTML = null;
            addElemetsOfSlots(icon, stepsHeadIcon);
        }
    },

    _setCurrentContent(stepsHeadIcon, index, status) {
        if (status !== "finish" && status !== "error") {
            stepsHeadIcon.innerText = index + 1;
        }
    },

    _setStatus(total, current, stepsItem, status, step) {
        if (current > total || current < 0 || !stepsItem[current]) {
            console.error(
                "[Rabbit warn] The number of steps currently set is not within the scope of the total steps"
            );
            return;
        }

        stepsItem[current].classList.replace(
            "rbt-steps-status-wait",
            `rbt-steps-status-${status}`
        );

        for (let i = 0; i < current; i++) {
            stepsItem[i].classList.replace(
                "rbt-steps-status-wait",
                "rbt-steps-status-finish"
            );

            const CheckIcon = document.createElement("i");
            const StepsHeadInner = stepsItem[i].querySelector(
                ".rbt-steps-head-inner"
            );

            if (StepsHeadInner.dataset.customIcon === "false") {
                CheckIcon.className = "rbt-steps-icon rbt-icon rbt-icon-ios-checkmark";
                StepsHeadInner.innerHTML = null;
                StepsHeadInner.appendChild(CheckIcon);
            }
        }
    },
};