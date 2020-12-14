/**
 * Avatar 头像
 * 用来代表用户或事物，支持图片、图标或字符展示。
 */
// 字体适应容器：transform.scale = 头像容器 / 字体容器宽度 + 15
Rabbit.prototype.Avatar = () => {
    const avatars = document.querySelectorAll('rb-avatar');

    avatars.forEach(avatar => {
        const iconType = avatar.getAttribute('rb-icon');
        const iconElem = document.createElement('i');
        iconElem.className = 'rbt-icon';

        // 设置头像图标
        if (iconType) {
            iconElem.classList.add(`rbt-icon-${iconType}`);
        } else {
            // 默认的头像图标
            iconElem.classList.add(`rbt-icon-md-person`);
        }
        avatar.appendChild(iconElem);

        avatar.childNodes.forEach(node => {
            // 设置图片头像
            if (node.nodeName === 'IMG') {
                avatar.style.background = 'transparent';
                avatar.appendChild(node);
                iconElem.remove();
            }
            // 设置字符型头像
            if (
                node.nodeType === 1 &&
                node.nodeName !== 'IMG' &&
                !node.classList.contains('rbt-icon')
            ) {
                node.classList.add('rbt-avatar-string');
                avatar.appendChild(node);
                iconElem.remove();
                // 字体适应
                let newScale = 0;
                if (node.offsetWidth >= avatar.offsetWidth - 8) {
                    newScale = avatar.offsetWidth / node.offsetWidth - 0.19;
                    node.style.transform = `scale(${newScale}) translateX(-50%)`;
                }
            }
        });
    });
};
Rabbit.prototype.Avatar();