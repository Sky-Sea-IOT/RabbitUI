/**
 * Steps 步骤条
 * 引导用户按照流程完成任务的导航条。
 */
Rabbit.prototype.Steps = {
    prefixCls: 'rbt-steps',
    createInstance(_config, _slot) {
        const {
            size = 'default',
                status = 'process',
                current = 0,
                direction = 'horizontal',
        } = _config;

        const { STEP } = _slot;

        const Steps = document.createElement('div');

        Steps.className = `${this.prefixCls} ${this.prefixCls}-${direction} ${this.prefixCls}-${size}`;

        let stepsItemList = [];

        for (let i = 0; i < STEP.length; i++) {
            const StepsItem = document.createElement('div');
            const StepsTail = document.createElement('div');
            const StepsTailI = document.createElement('i');
            const StepsHead = document.createElement('div');
            const StepsHeadInner = document.createElement('div');
            const StepsHeadIcon = document.createElement('span');
            const StepsMain = document.createElement('div');
            const StepsTitle = document.createElement('div');
            const StepsContent = document.createElement('div');

            stepsItemList.push(StepsItem);

            this.addClassName(
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
            this.setContent(StepsHeadIcon, i, status);
            this.addIcon(
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

    addClassName(
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
        stepsItem.className = `${this.prefixCls}-item ${this.prefixCls}-status-wait`;
        stepsTail.className = `${this.prefixCls}-tail`;
        stepsHead.className = `${this.prefixCls}-head`;
        stepsHeadInner.className = `${this.prefixCls}-head-inner`;
        stepsMain.className = `${this.prefixCls}-main`;
        stepsTitle.className = `${this.prefixCls}-title`;
        stepsContent.className = `${this.prefixCls}-content`;

        this.setIcon(status, icon, stepsHeadInner, stepsHeadIcon);
    },

    setIcon(status, icon, stepsHeadInner, stepsHeadIcon) {
        if (!icon) {
            stepsHeadInner.dataset.customIcon = 'false';
        }
        if (status === 'finish' && !icon) {
            stepsHeadIcon.className = `${this.prefixCls}-icon rbt-icon rbt-icon-ios-checkmark`;
        }
        if (status === 'error' && !icon) {
            stepsHeadIcon.className = `${this.prefixCls}-icon rbt-icon rbt-icon-ios-close`;
        }
    },

    addIcon(icon, stepsItem, stepsHeadIcon) {
        if (icon) {
            stepsItem.classList.add(`${this.prefixCls}-custom`);
            icon.classList.add(`${this.prefixCls}-icon`);
            stepsHeadIcon.innerHTML = null;
            addElemetsOfSlots(icon, stepsHeadIcon);
        }
    },

    setContent(stepsHeadIcon, index, status) {
        if (status !== 'finish' && status !== 'error') {
            stepsHeadIcon.innerText = index + 1;
        }
    },

    _setStatus(total, current, stepsItem, status, step) {
        if (current > total || current < 0 || !stepsItem[current]) {
            warn(
                'The number of steps currently set is not within the scope of the total steps'
            );
            return;
        }

        stepsItem[current].classList.replace(
            `${this.prefixCls}-status-wait`,
            `${this.prefixCls}-status-${status}`
        );

        for (let i = 0; i < current; i++) {
            stepsItem[i].classList.replace(
                `${this.prefixCls}-status-wait`,
                `${this.prefixCls}-status-finish`
            );

            const CheckIcon = document.createElement('i');
            const StepsHeadInner = stepsItem[i].querySelector(
                `.${this.prefixCls}-head-inner`
            );

            if (StepsHeadInner.dataset.customIcon === 'false') {
                CheckIcon.className = `${this.prefixCls}-icon rbt-icon rbt-icon-ios-checkmark`;
                StepsHeadInner.innerHTML = null;
                StepsHeadInner.appendChild(CheckIcon);
            }
        }
    },
};