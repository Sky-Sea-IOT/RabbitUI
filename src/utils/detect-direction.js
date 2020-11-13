// 定时器重复检测tooltip方向是否随着popper.js自动发生变化，如果变化则同步箭头的方向
function detectTooltipDirection(tooltip) {
    let a = tooltip.getAttribute("data-popper-placement"),
        b = tooltip.getAttribute("x-placement");
    if (b !== a) {
        b = a;
        tooltip.setAttribute("x-placement", b);
    }
}

// export default detectTooltipDirection;