/**
 * @classdesc
 * 创建标签插入式组件（在指定的容器插入，并且这个容器已经指定了何种组件）
 *
 * @method create
 * 创建组件，接收组件的配置项
 * 它就像是一个快递点，将 参数el（相当于寄件地址）和用户传入的组件配置参数寄给对应组件，
 * 组件收到对应的包裹后，根据寄件地址发给 _compsStore 这个物流中转站，由它发配到地址位置（即el容器内）
 *
 * @method _render
 * 渲染组件，返回渲染后的组件给上面的方法
 *
 * @method _getCompsSlot
 * 获取容器下带有指定slot属性 例:（title/content/footer）的 dom，并添加到组件对应的标签里
 *
 * @method _compsStore
 * 根据标签属性 data-component 传入的组件名称来决定创建何种组件，如果没有填或填错则抛出错误提醒用户
 * 它就像是一个中转站，拿到组件名称后到仓库里查看有无对应的组件并返回给使用者
 */
class Rabbit {
    /**
     * ------------------------------------------------------------------------
     * Public
     * ------------------------------------------------------------------------
     */

    /**
     * @param {string} el 挂载组件的容器
     * @param {object} config 组件的配置选项
     * @returns {string & object & NodeListOf<ChildNode>}
     */
    create(el, config) {
        this.$el = el || null;
        this.$config = config || {};
        this._render(this.$el, this.$config);
        return { el, config, component: document.querySelector(el).childNodes };
    }

    /**
     * 初始化组件，用于后面罗列的组件 Message Notice MessageBox LoadingBar
     * @param {Array<string>} instanceName 初始化的组件的名称
     * @returns {HTMLElement}
     */
    init(instanceName) {
        if (isArr(instanceName)) {
            instanceName.map(item => initComps(item));
        } else {
            warn('The argument type is array in RabbitUI.init()');
            return;
        }
    }

    /**
     * ------------------------------------------------------------------------
     * Private
     * ------------------------------------------------------------------------
     */

    /**
     * 取出对应组件
     * @param {string} el
     * @param {string} compsName
     * @param {object} config
     * @param {HTMLElement} slot
     * @returns {HTMLElement}
     */
    _compsStore(el, compsName, config, slot) {
        return getComps(el, compsName, config, slot);
    }

    /**
     * @returns {HTMLElement}
     */
    _getCompsSlot(el) {
        return getCompsSlot(el);
    }

    /**
     * @returns {HTMLElement}
     */
    _render(el, config) {
        const RENDERTARGET = Array.from(document.querySelectorAll(el));
        if (RENDERTARGET.length <= 0) {
            warn(
                `"${el}" this selector was not found, check if you added it to your HTML tag`
            );
            return;
        }

        /**
         * 遍历节点列表并返回渲染后新的子节点
         * @param {NodeList} nodes
         * @returns {RABBITCOMPONENT}
         */
        const renderNodeList = nodes => {
            // 通过截取自定义标签 rb- 后的组件名称
            const COMPONENTNAMES = nodes.tagName.toLowerCase().substring(3);
            // 获取挂载容器下的具名插槽项
            const SLOT = this._getCompsSlot(nodes);
            // 创建对应组件
            const RABBITCOMPONENT = this._compsStore(
                el,
                COMPONENTNAMES,
                config,
                SLOT
            );
            // 清空挂载的容器下的所有内容
            nodes.innerHTML = null;
            nodes.appendChild(RABBITCOMPONENT);
            return RABBITCOMPONENT;
        };
        RENDERTARGET.map(node => renderNodeList(node));
    }
}
const RabbitUI = new Rabbit();

function warn(msg) {
    console.error(`[Rabbit warn] ${msg}`);
}