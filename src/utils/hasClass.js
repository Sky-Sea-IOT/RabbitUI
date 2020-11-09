const hasClass = (el, class1, class2) => {
    let oldClass = el.className;
    let re = new RegExp("\\b" + class1 + "\\b");
    if (re.test(oldClass)) {
        el.classList.replace(class1, class2);
    } else {
        el.classList.add(class1);
        el.classList.replace(class2, class1);
    }
};

// export default hasClass;