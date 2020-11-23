/**
 * @classdesc
 * 创建标签插入式组件（在指定的容器插入，并且这个容器已经指定了何种组件）
 *
 * @method $create
 * 创建组件，接收组件的配置项
 * 它就像是一个快递点，将 参数el（相当于寄件地址）和用户传入的组件配置参数寄给对应组件，
 * 组件收到对应的包裹后，根据寄件地址发给 $compsStore 这个物流中转站，由它发配到地址位置（即el容器内）
 * @returns { HTMLElement }
 *
 * @method $compiler
 * 编译组件模板，返回对应的HTML组件给上面的老兄
 * @returns { HTMLElement }
 *
 * @method $getCompsSlot
 * 获取容器下带有指定slot属性 例:（title/content/footer）的 dom，并添加到组件对应的标签里
 *
 * @method $compsStore
 * 根据标签属性 data-component 传入的组件名称来决定创建何种组件，如果没有填或填错则抛出错误提醒用户
 * 它就像是一个中转站，拿到组件名称后到仓库里查看有无对应的组件并返回给使用者
 *
 */
class Rabbit {
    /**
     * @param { String } el 挂载组件的容器
     * @param { {} } config 组件的配置选项
     * @returns { HTMLElement }
     */
    create(el, config = {}) {
        this.$el = el || "default-no-target";
        this.$config = config || {};

        this.$compiler(this.$el, this.$config);

        return { el, config, component: document.querySelector(el).childNodes };
    }

    $getCompsSlot(el) {
        return _getCompsSlot(el);
    }

    $compsStore(el, compsName, config, slot) {
        return _getComps(el, compsName, config, slot);
    }

    $compiler(el, config) {
        const target = document.querySelectorAll(el);

        if (target.length <= 0) {
            throw ReferenceError(
                `"${el}" this selector was not found, check if you added it to your HTML tag`
            );
        }

        const TraverseNodesReturnNewNodes = (nodes) => {
            // 通过截取标签 rab- 后的内容获取组件名称
            const componentName = nodes.tagName.toLowerCase().substring(4);

            // 获取挂载容器下的具名插槽项
            const slot = this.$getCompsSlot(nodes);

            // 创建对应组件
            const RabbitComponent = this.$compsStore(el, componentName, config, slot);

            // 清空挂载的容器下的所有内容
            nodes.innerHTML = null;

            nodes.appendChild(RabbitComponent);

            return RabbitComponent;
        };

        Array.from(target).map((node) => TraverseNodesReturnNewNodes(node));
    }

    /**
     * 初始化组件，用于后面罗列的组件 Message Notice MessageBox LoadingBar
     * @param {[String]} instance 初始化的组件的名称
     * @returns {HTMLElement}
     */
    init(instance) {
        if (isArr(instance)) {
            instance.map((item) => _initComps(item));
        } else {
            throw TypeError("The argument type is array in rabbit.init()");
        }
    }
}

const rabbit = new Rabbit();