const _TagCheckable = () => {
    const tags = document.querySelectorAll('rab-tag');
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
_TagCheckable();