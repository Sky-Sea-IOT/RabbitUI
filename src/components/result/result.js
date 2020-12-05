/**
 * Result 结果
 * 用于反馈一系列操作任务的处理结果。
 */
Rabbit.prototype.Result = {
    createInstance(_config, _slot) {
        const { status = 'info', title = '', subtitle = '' } = _config;
        const { ICON, CONTENT, FOOTER } = _slot;

        const Result = document.createElement('div');
        const ResultIconBox = document.createElement('div');
        const ResultIcon = document.createElement('i');
        const ResultTitle = document.createElement('div');
        const ResultSubTitle = document.createElement('div');
        const ResultExtra = document.createElement('div');
        const ResultFooter = document.createElement('div');

        this.addClassName(
            Result,
            ResultIconBox,
            ResultIcon,
            ResultTitle,
            ResultSubTitle,
            ResultExtra,
            ResultFooter
        );

        Result.append(
            ResultIconBox,
            ResultTitle,
            ResultSubTitle,
            ResultExtra,
            ResultFooter
        );

        this.setStatus(status, Result);
        this.setIcon(status, ResultIconBox, ResultIcon);
        this.customIcon(ICON, ResultIconBox);
        this.setTitle(title, ResultTitle);
        this.setSubTitle(subtitle, ResultSubTitle);
        this.setContent(CONTENT, ResultExtra);
        this.setFooter(FOOTER, ResultFooter);

        return Result;
    },

    addClassName(
        result,
        resultIconBox,
        resultIcon,
        resultTitle,
        resultSubTitle,
        resultExtra,
        resultFooter
    ) {
        const prefixCls = 'rbt-result';
        const prefixIconCls = 'rbt-icon';

        result.className = `${prefixCls}`;
        resultIconBox.className = `${prefixCls}-icon`;
        resultIcon.className = `${prefixIconCls}`;
        resultTitle.className = `${prefixCls}-title`;
        resultSubTitle.className = `${prefixCls}-subtitle`;
        resultExtra.className = `${prefixCls}-extra`;
        resultFooter.className = `${prefixCls}-footer`;
    },

    _defaultStatus(status) {
        return (
            status === 'info' ||
            status === 'success' ||
            status === 'warning' ||
            status === 'error' ||
            status === '403' ||
            status === '404' ||
            status === '500'
        );
    },

    setStatus(status, result) {
        if (this._defaultStatus(status)) {
            result.classList.add(`rbt-result-${status}`);
        }
    },

    setIcon(status, resultIconBox, resultIcon) {
        const prefixIconCls = 'rbt-icon';

        if (status !== '403' && status !== '404' && status !== '500') {
            const ICON = getIconTypes(status);

            resultIcon.classList.add(`${prefixIconCls}-${ICON}`);
            resultIconBox.appendChild(resultIcon);
        } else {
            const ResultImage = document.createElement('img');
            // !这里在打包的时候图片地址需要替换成 import 进来的变量名
            if (status === '403') ResultImage.src = '../../assets/result-403.svg';
            if (status === '404') ResultImage.src = '../../assets/result-404.svg';
            if (status === '500') ResultImage.src = '../../assets/result-500.svg';

            ResultImage.alt = 'result';
            resultIconBox.className = 'rbt-result-img';

            resultIcon.remove();
            resultIconBox.appendChild(ResultImage);
        }
    },

    customIcon(_icon, resultIconBox) {
        if (_icon) {
            resultIconBox.innerHTML = null;
            addElemetsOfSlots(_icon, resultIconBox);
        }
    },

    setTitle(title, resultTitle) {
        if (title) {
            resultTitle.innerHTML = title;
        } else {
            resultTitle.remove();
        }
    },

    setSubTitle(subtitle, resultSubTitle) {
        if (subtitle) {
            resultSubTitle.innerHTML = subtitle;
        } else {
            resultSubTitle.remove();
        }
    },

    setContent(content, resultExtra) {
        if (content && content.innerHTML) {
            addElemetsOfSlots(content, resultExtra);
        } else {
            resultExtra.remove();
        }
    },

    setFooter(footer, resultFooter) {
        if (footer && footer.innerHTML) {
            addElemetsOfSlots(footer, resultFooter);
        } else {
            resultFooter.remove();
        }
    },
};