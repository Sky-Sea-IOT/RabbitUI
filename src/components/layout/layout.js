const layoutCheck = () => {
    const layout = {
        header: [...document.querySelectorAll('rab-header')],
        content: [...document.querySelectorAll('rab-content')],
        footer: [...document.querySelectorAll('rab-footer')],
        sider: [...document.querySelectorAll('rab-sider')],
    };

    const childCheck = key => {
        layout[key].map(node => {
            if (node.parentElement.tagName.toLowerCase() !== 'rab-layout') {
                console.error(
                    '[Rabbit warn] 👇 This component should be used under the parent element <rab-layout>, not alone'
                );
                console.error(node);
                node.remove();
            }
        });
    };

    Object.keys(layout).forEach(key => childCheck(key));
};
layoutCheck();