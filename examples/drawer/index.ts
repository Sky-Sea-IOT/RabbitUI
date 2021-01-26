import Rabbit from '../../src';

export default function drawerTest(): void {
    const drawer = new Rabbit.Drawer();

    let f1 = false;
    // @ts-ignore
    window.Op1 = () => {
        f1 === false ? (f1 = !f1) : f1;
        drawer.config('#test1').visable = f1;
    };
    drawer.config('#test1').events({
        onClose: () => {
            console.log('关闭抽屉');
        }
    });
}
