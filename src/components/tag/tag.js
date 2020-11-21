Rabbit.prototype.Tag = {
    toogle: () => {
        const tags = document.querySelectorAll(".rbt-tag-checkable");
        Array.from(tags).map((tag) => {
            tag.onclick = () => {
                tag.classList.contains("rbt-tag-checkable-checked") ?
                    tag.classList.remove("rbt-tag-checkable-checked") :
                    tag.classList.add("rbt-tag-checkable-checked");
            };
        });
    },
};
Rabbit.prototype.Tag.toogle();