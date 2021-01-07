const BadgePrefixCls = 'rab-badge';
const BadgePrefixAttr = 'rb';

class Badge {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = document.querySelectorAll('r-badge');
    }
}

export default Badge;
