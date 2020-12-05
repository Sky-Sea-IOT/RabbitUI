/**
 * Tabs 标签页
 * 选项卡切换组件
 */

// 溢出滚动：1.先算出可分段移动的总次数 2.每移动一次移动次数+1直到等于总次数再停止
// 初始步数：1
// 移动总数（取整）：navWidth / scrollWidth
// 偏移矢量：scrollWidth * 初始步数++

Rabbit.prototype.Tabs = {
    prefixCls: 'rbt-tabs',
    createInstance(_config, _slot) {
        const { type = 'line', lable, onClick, onTabRemove } = _config;
        const { TABSPANE } = _slot;
    },
    addClassName() {},
};