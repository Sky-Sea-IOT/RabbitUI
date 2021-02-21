import Rabbit from '../../src';

export default function tabsTest(): void {
    const tabs = new Rabbit.Tabs();
    setTimeout(() => {
        tabs.config('#a').activeKey = '2';
    }, 2000);
}
