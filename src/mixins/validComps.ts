/**
 * 检查选中的目标组件是否属于当前要配置的组件的范围
 */
export default function validComps(target: Element, compName: string) {
  if (!target) throw new Error(`The selected target element is does not exist --> ${target}`);

  const targetName = target.tagName.toLowerCase().replace(/r\-/, '');

  if (targetName !== compName) {
    throw new Error(
      `The currently selected component is incorrect and is not an ${compName} component`
    );
  }
}
