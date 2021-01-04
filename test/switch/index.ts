import Rabbit from '../../src';
export default function switchTest() {
  const $switch = new Rabbit.Switch();
  const textBox = document.querySelector('#status')!;

  // 使用单个参数
  // $switch.onChange('#a', ([status]: [Element]) => {
  //   textBox.textContent = `${status}`;
  // });

  // 使用多个参数
  $switch.onChange('#a', ([status, $this]: [boolean, Element]) => {
    textBox.textContent = `${status}`;
    console.log($this);
  });
}
