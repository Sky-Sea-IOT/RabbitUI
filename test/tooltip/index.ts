import Rabbit from '../../src';

export default function tooltipTest(): void {
    const tooltip = new Rabbit.Tooltip();

    tooltip.config('#test').events({
        onShow: () => {
            console.log('show');
        },
        onHide: () => {
            console.log('hide');
        }
    });
}
