/**
 * 在页面初始化创建组件的依赖容器
 * @param {string} c
 * @returns {HTMLElement}
 */
const initComps = (c) => {
    switch (c) {
        case "Message":
            Rabbit.prototype.Message.container();
            break;

        case "Notice":
            Rabbit.prototype.Notice.container();
            break;

        case "LoadingBar":
            Rabbit.prototype.LoadingBar.createInstance();
            break;

        default:
            console.error(`[Rabbit warn] "${c}", unable to initialize component`);
    }
};