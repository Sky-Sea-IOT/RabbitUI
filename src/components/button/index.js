const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    if (btn.disabled) {
        btn.onclick = () => false;
    }
});