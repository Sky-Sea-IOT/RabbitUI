// 利用定时器重复检测tooltip方向是否随着popper.js自动发生变化，如果变化则同步箭头的方向
function detectTooltipDirection(tooltip) {
    setTimeout(() => {
        let a = tooltip.dataset.popperPlacement,
            b = tooltip.getAttribute('x-placement');
        if (b !== a) {
            b = a;
            tooltip.setAttribute('x-placement', b);
        }
    }, 0);
}

// export default detectTooltipDirection;