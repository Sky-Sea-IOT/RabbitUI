import { validComps } from '../../mixins';
import Message from '../message';

class Steps {
    readonly VERSION: string;
    readonly components: any;

    constructor() {
        this.VERSION = '1.0';
        this.components = document.querySelectorAll('r-steps');
    }

    private _updateStatus(node: Element, index: number): void {
        const currentStep = node.children[index];
        validComps(currentStep, 'step');
        return currentStep.setAttribute('status', 'process');
    }

    private _getCurrentStatus(node: Element): number {
        return Number(node.getAttribute('current')) || 0;
    }
}

export default Steps;
