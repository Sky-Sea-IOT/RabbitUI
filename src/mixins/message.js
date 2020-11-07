let baseZIndex = 1000;

// 创建message的父容器添加到body底部
const messageWrapper = document.createElement("div");
messageWrapper.className = `rbt-message`;

document.body.append(messageWrapper);

// 创建 message DOM实例
const createMessageInstance = ({
        key,
        type,
        content,
        closable,
        top,
        background,
        duration,
        onClose,
        afterClose,
    } = {}) => {
        const prefixCls = "rbt-message";
        const prefixIcon = "rbt-icon";

        const icon = getIconTypes(type);

        messageWrapper.style.top = `${top}px`;

        const instance = document.createElement("div");
        instance.className = `${prefixCls}-notice move-up-enter`;
        instance.style.cssText = `z-index: ${baseZIndex++};position: relative;`;

        // 如果key属性有值则将该值设置为 data-key="xxx" 属性到实例元素的标签上
        if (key) instance.dataset.key = key;

        const noticeBox = document.createElement("div");

        // 是否带背景色
        noticeBox.className = `${prefixCls}-notice-content ${
    background ? ` ${prefixCls}-with-background-${type}` : ""
  }`;

  const typeBox = document.createElement("div");
  typeBox.className = `${prefixCls}-${type}`;

  const typeIcon = document.createElement("i");
  typeIcon.className = `${prefixIcon} ${prefixIcon}-${icon}`;

  const closeBtn = document.createElement("i");
  closeBtn.className = `rbt-closeBtn ${prefixIcon} ${prefixIcon}-ios-close`;

  const contentBox = document.createElement("div");
  contentBox.className = `${prefixCls}-notice-custom-content`;
  contentBox.innerHTML = `${content}`;

  messageWrapper.appendChild(instance);
  instance.appendChild(noticeBox);
  noticeBox.appendChild(typeBox);
  typeBox.append(typeIcon, contentBox, closable ? closeBtn : "");

  // 在调用该方法创建DOM实例后，通过duration设置的时间自动销毁该实例
  if (duration > 0) {
    destroy({
      el: instance,
      moveInCls: "move-up-enter",
      moveOutCls: "move-up-leave",
      duration,
      afterClose,
      whenToDestroy: 0.28,
    });
  }

  // 如果启用了关闭按钮则点击按钮时调用该销毁事件
  if (closable) {
    clickDestroy({
      el: closeBtn,
      destroyTarget: instance,
      moveInCls: "move-up-enter",
      moveOutCls: "move-up-leave",
      onClose,
    });
  }

  return instance;
};