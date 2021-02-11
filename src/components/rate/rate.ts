import { $el } from '../../dom-utils';

class Rate {
    readonly VERSION: string;
    private components: any;

    constructor() {
        this.VERSION = 'v1.0';
        this.components = $el('r-rate', { all: true });
        this._create(this.components);
    }

    private _create(components: NodeListOf<Element>): void {
        //
    }
}

export default Rate;
