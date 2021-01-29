import moment from 'moment';
import PREFIX from '../prefix';
import { $el, getNumTypeAttr, getStrTypeAttr, removeAttrs, setText } from '../../dom-utils';

interface TimeAttrs {
    time: string;
    type: 'relative' | 'date' | 'datetime';
    hash: string;
    locale: string;
    interval: number;
}

class Time {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-time', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        components.forEach((node) => {
            this.setTime(node);
            this.handleClick(node);
            removeAttrs(node, ['time', 'type', 'hash', 'locale', 'interval']);
        });
    }

    setTime(node: Element): void {
        const { type, time, locale, interval } = this._attrs(node);
        const timeStamp = eval(time);

        const timer = () => {
            if (type === 'relative') {
                let relativeTime = moment(timeStamp).locale(locale).fromNow();

                if (relativeTime === '几秒前') {
                    relativeTime = '刚刚';
                    // 小于60秒则说明是要通过每隔多少秒更新时间而不是每隔多少分钟
                    if (interval < 60) {
                        setText(node, `${moment().startOf('second').format('s')}秒前`);
                    } else {
                        setText(node, relativeTime);
                    }
                } else {
                    setText(node, relativeTime);
                }
            } else if (type === 'date') {
                const data = moment(timeStamp).format('YYYY-MM-DD');
                setText(node, data);
            } else if (type === 'datetime') {
                const dataTime = moment(timeStamp).format('YYYY-MM-DD-HH:mm:ss');
                setText(node, dataTime);
            }
            return timer;
        };

        // 立即执行定时器
        window.setInterval(timer(), interval * 1000);
    }

    handleClick(node: Element): void {
        const { hash } = this._attrs(node);

        if (!hash) return;

        node.classList.add(`${PREFIX.time}-with-hash`);
        node.addEventListener('click', () => (window.location.hash = hash));
    }

    private _attrs(node: Element): TimeAttrs {
        return {
            time: getStrTypeAttr(node, 'time', ''),
            type: getStrTypeAttr(node, 'type', 'relative'),
            hash: getStrTypeAttr(node, 'hash', ''),
            locale: getStrTypeAttr(node, 'locale', 'zh-cn'),
            interval: getNumTypeAttr(node, 'interval', 60)
        };
    }
}

export default Time;
