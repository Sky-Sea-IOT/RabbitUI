/**
 * 检查是否为有效并且正确的组件
 */
export default function validComps(target: Element, compName: string): void {
    if (!target) {
        throw new Error(`The selected target element is does not exist --> "${target}"`);
    }

    const targetName = target.tagName.toLowerCase().replace(/r-/, '');

    if (targetName !== compName) {
        throw new Error(
            `The configured component was selected incorrectly. It is not a ${compName} component`
        );
    }
}
