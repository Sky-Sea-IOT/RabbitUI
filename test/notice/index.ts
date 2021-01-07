//@ts-nocheck
import Rabbit from '../../src';

export default function noticeTest(): void {
    // Rabbit.Message.config({
    //   top: 50,
    //   duration: 3
    // });

    window.normal = () => {
        Rabbit.Message.open({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
            onClick: () => {
                console.log('Notification Clicked!');
            },
            onClose: () => {
                console.log('Notification Close!');
            }
        });
    };

    window.onlyTitle = () => {
        Rabbit.Message.open({
            title: '这是通知标题',
            closable: false
        });
    };

    window.getInfo = () => {
        Rabbit.Message.info({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述'
        });
    };

    window.getSuccess = () => {
        Rabbit.Message.success({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述'
        });
    };

    window.getWarning = () => {
        Rabbit.Message.warning({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述'
        });
    };

    window.getError = () => {
        Rabbit.Message.error({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述'
        });
    };

    window.getInfoNodesc = () => {
        Rabbit.Message.info({
            title: '这是通知标题'
        });
    };

    window.getSuccessNodesc = () => {
        Rabbit.Message.success({
            title: '这是通知标题'
        });
    };

    window.getWarningNodesc = () => {
        Rabbit.Message.warning({
            title: '这是通知标题'
        });
    };

    window.getErrorNodesc = () => {
        Rabbit.Message.error({
            title: '这是通知标题'
        });
    };

    window.multipleNotice = () => {
        Rabbit.Message.open({
            title: '行程已发布',
            desc: '您的行程订单已发布，正在等待待车主接单...'
        }).then(() => {
            Rabbit.Message.info({
                title: '已有车主接单啦！',
                desc: '你发布的行程订单已有车主接单了，请提前付款以免被取消订单！'
            }).then(() => {
                Rabbit.Message.success({
                    title: '费用支付成功',
                    desc: '您的行程将在2021.9.9 12:30 开始'
                });
            });
        });
    };

    window.customTime = () => {
        Rabbit.Message.open({
            title: '这是通知标题',
            desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
            duration: 0
        });
    };

    window.customStyle = () => {
        Rabbit.Message.open({
            title: '这是通知标题',
            desc:
                '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
            style: 'width: 600px; background: #ccc;'
        });
    };

    window.useHTML = () => {
        Rabbit.Message.open({
            title: 'HTML片段',
            // eslint-disable-next-line quotes
            desc: `<strong>这是 <i>HTML</i> 片段</strong>`,
            dangerouslyUseHTMLString: true
        });
    };
}
