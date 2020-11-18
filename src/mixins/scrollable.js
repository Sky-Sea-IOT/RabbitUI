function bodyScrollable(flag) {
    if (!flag) {
        document.body.style.paddingRight = "17px";
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.paddingRight = null;
        document.body.style.overflow = null;
    }
}