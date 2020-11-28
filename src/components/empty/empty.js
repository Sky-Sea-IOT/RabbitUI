/**
 * Empty空状态
 * 空状态时的展示占位图。
 */

Rabbit.prototype.Empty = {
    _createInstance(_config, _slot) {
        const { desc, image = "IMAGE_DEFAULT", footer, imageStyle = {} } = _config;
        const { DESC, FOOTER } = _slot;

        const Empty = document.createElement("div");
        const EmptyImageBox = document.createElement("div");
        const EmptyImage = document.createElement("img");
        const EmptyDesc = document.createElement("div");
        const EmptyFooter = document.createElement("div");

        EmptyImage.alt = "empty";

        Empty.append(EmptyImageBox, EmptyDesc, EmptyFooter);
        EmptyImageBox.appendChild(EmptyImage);

        this._addClassName(Empty, EmptyImageBox, EmptyDesc, EmptyFooter);
        this._setImage(image, imageStyle, EmptyImage, EmptyImageBox, Empty);
        this._setDesc(desc, DESC, EmptyDesc);
        this._setFooter(footer, FOOTER, EmptyFooter);

        return Empty;
    },

    _addClassName(empty, emptyImageBox, emptyDesc, emptyFooter) {
        const prefixCls = "rbt-empty";
        empty.className = `${prefixCls}`;
        emptyImageBox.className = `${prefixCls}-image`;
        emptyDesc.className = `${prefixCls}-desc`;
        emptyFooter.className = `${prefixCls}-footer`;
    },

    _setImage(image, styles, emptyImage, emptyImageBox, empty) {
        // !这里在打包的时候图片地址需要替换成 import 进来的变量名
        if (image === "IMAGE_DEFAULT") {
            emptyImage.src = "../../assets/empty.svg";
        } else if (image === "IMAGE_SIMPLE") {
            empty.classList.add("rbt-empty-normal");
            emptyImage.src = "../../assets/empty-simple.svg";
        } else {
            emptyImage.src = image;
        }

        emptyImageBox.style.cssText = objToString(styles);
    },

    _addContent(a, b, c) {
        if (!a && !b) {
            c.remove();
        } else {
            if (a) c.innerHTML = a;

            if (b && b.innerHTML) {
                c.innerHTML = null;
                addElemetsOfSlots(b, c);
            }
        }
    },

    _setDesc(desc, slotDesc, emptyDesc) {
        this._addContent(desc, slotDesc, emptyDesc);
    },

    _setFooter(footer, slotFooter, emptyFooter) {
        this._addContent(footer, slotFooter, emptyFooter);
    },
};