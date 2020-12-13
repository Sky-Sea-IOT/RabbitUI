Rabbit.prototype.divider = () => {
    const dividers = document.querySelectorAll('rab-divider');

    dividers.forEach(divider => {
        const orientation = divider.getAttribute('rab-orientation');
        const textContainer = document.createElement('span');
        textContainer.className = 'rbt-divider-inner-text';

        if (divider.innerHTML) divider.classList.add('rbt-divider-with-text');

        if (orientation === 'left' || orientation === 'right')
            divider.classList.add(`rbt-divider-with-text-${orientation}`);

        textContainer.innerHTML = divider.innerHTML;
        divider.innerHTML = null;
        divider.appendChild(textContainer);
    });
};
Rabbit.prototype.divider();