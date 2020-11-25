/**
 * Badge 徽标数
 * 用于通知未读数的角标，提醒用户点击。
 */
Rabbit.prototype.Badge = {
    listenCount: ({ el, showZero = false, overflowCount = 99 } = {}) => {
        if (isArr(el)) {
            el.map((item) => setInterval(() => change(item), 100));
        } else {
            setInterval(() => change(el), 100);
        }

        function change(_el) {
            const badges = document.querySelector(_el);
            const badgesCountEl = badges.querySelector(".rbt-badge-count");
            const badgesCount = Number(badgesCountEl.innerHTML);

            if (!showZero && badgesCount <= 0 && badgesCount !== NaN) {
                badgesCountEl.style.display = "none";
            } else {
                badgesCountEl.style.display = null;
            }

            if (badgesCount) {
                if (badgesCount > overflowCount) {
                    badgesCountEl.innerHTML = `${overflowCount}+`;
                }
            }
        }
    },
    dot: () => {
        setInterval(a, 100);

        function a() {
            const badgesDot = document.querySelectorAll(".rbt-badge-dot");
            badgesDot.forEach((item) => (item.innerHTML = null));
        }
    },
};

RabbitUI.Badge.dot();