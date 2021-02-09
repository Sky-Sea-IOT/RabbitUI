import Rabbit from '../../src';

export default function collapseTest(): void {
    const collapse = new Rabbit.Collapse();
    collapse.config('#aa').events({
        onChange: (key) => {
            console.log(key);
        }
    });
}
