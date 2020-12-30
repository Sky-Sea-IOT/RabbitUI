import { Alert } from '../../src';

export default function alertTest() {
  const $alert = new Alert();

  // 测试自定义图标
  const ICON = `<i class="rab-icon rab-icon-ios-star-outline"></i>`;
  $alert.config('#customIcon').icon = ICON;

  // 测试关闭回调
  $alert.onClose('#close', ($this: Element) => console.log('这是点击关闭的回调'));
}
