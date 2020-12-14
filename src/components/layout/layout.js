Rabbit.prototype.layout = () => {
    const layout = {
        header: document.querySelectorAll('rb-header'),
        content: document.querySelectorAll('rb-content'),
        footer: document.querySelectorAll('rb-footer'),
        sider: document.querySelectorAll('rb-sider'),
    };

    const childCheck = key => {
        layout[key].forEach(node => {
            if (node.parentElement.tagName.toLowerCase() !== 'rb-layout') {
                console.error(
                    '[Rabbit warn] 👇 This component should be used under the parent element <rb-layout>, not alone'
                );
                console.error(node);
                node.remove();
            }
        });
    };

    Object.keys(layout).forEach(key => childCheck(key));
};
Rabbit.prototype.layout();