import Rabbit from '../../src';

export default function modalTest(): void {
    const modal = new Rabbit.Modal();

    let timer: any;
    // @ts-ignore
    window.handleModal1 = () => {
        modal.config('#m1').visable = true;
        modal.config('#m1').events({
            onOk: () => {
                timer = setTimeout(() => {
                    modal.config('#m1').visable = false;
                }, 2000);
            },
            onCancel: () => {
                console.log(1);
                clearTimeout(timer);
            }
        });
    };
}
