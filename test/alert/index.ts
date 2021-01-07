import Rabbit from '../../src';

export default function alertTest(): void {
    const $alert = new Rabbit.Alert();
    // 测试自定义图标
    $alert.config('#customIcon').icon = '<i class="rab-icon rab-icon-ios-star-outline"></i>';

    // 测试关闭回调
    $alert.onClose('#close', ($this) => {
        console.log('这是点击关闭的回调');
        console.log($this);
    });
}
