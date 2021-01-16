import { $el } from '../../dom-utils';

class Poptip {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-poptip', { all: true });
    }
}

export default Poptip;
