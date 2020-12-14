Rabbit.prototype.tag = () => {
    const tags = document.querySelectorAll('rb-tag');
    tags.forEach(tag => {
        if (tag.classList.contains('checkable')) {
            tag.addEventListener('click', () => {
                tag.classList.contains('checked') ?
                    tag.classList.remove('checked') :
                    tag.classList.add('checked');
            });
        }
    });
};
Rabbit.prototype.tag();