/**
 * Time 相对时间
 * 用于表示几分钟前、几小时前等相对于此时此刻的时间描述。
 */
Rabbit.prototype.Time = {
    prefixCls: 'rbt-time',
    createInstance(_config) {
        const { time, hash, link, type = 'relative', interval = 1 } = _config;
        const Time = document.createElement('span');

        Time.className = `${this.prefixCls}`;

        this.handleClick(Time, hash, link);

        setInterval(() => {
            this.setTime(type, time, Time);
        }, 1000 * interval);

        return Time;
    },

    handleClick(timeElem, hash, link) {
        if (isStr(hash) || isStr(link)) {
            timeElem.classList.add(`${this.prefixCls}-with-link`);
        }
        if (isStr(hash) && hash !== '') {
            timeElem.addEventListener('click', () => (window.location.hash = hash));
        }
        if (isStr(link) && link !== '') {
            timeElem.addEventListener('click', () => (window.location.href = link));
        }
    },

    setTime(type, time, timeElem) {
        let result = '';
        if (type === 'relative') {
            result = getRelativeTime(time);
        }
        if (type === 'date') {
            result = formatDate(time);
        }
        if (type === 'datetime') {
            result = formatDateTime(time);
        }
        timeElem.textContent = result;
    },
};