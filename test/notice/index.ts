//@ts-nocheck
import { Notice } from '../../src';

export default function noticeTest() {
  const notice = new Notice();

  // notice.config({
  //   top: 50,
  //   duration: 3
  // });

  window.normal = () => {
    notice.open({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
        console.log('Notification Close!');
      },
    });
  };

  window.onlyTitle = () => {
    notice.open({
      title: '这是通知标题',
      closable: false,
    });
  };

  window.getInfo = () => {
    notice.info({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
    });
  };

  window.getSuccess = () => {
    notice.success({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
    });
  };

  window.getWarning = () => {
    notice.warning({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
    });
  };

  window.getError = () => {
    notice.error({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
    });
  };

  window.getInfoNodesc = () => {
    notice.info({
      title: '这是通知标题',
    });
  };

  window.getSuccessNodesc = () => {
    notice.success({
      title: '这是通知标题',
    });
  };

  window.getWarningNodesc = () => {
    notice.warning({
      title: '这是通知标题',
    });
  };

  window.getErrorNodesc = () => {
    notice.error({
      title: '这是通知标题',
    });
  };

  window.multipleNotice = () => {
    notice
      .open({
        title: '行程已发布',
        desc: '您的行程订单已发布，正在等待待车主接单...',
      })
      .then(() => {
        notice
          .info({
            title: '已有车主接单啦！',
            desc: '你发布的行程订单已有车主接单了，请提前付款以免被取消订单！',
          })
          .then(() => {
            notice.success({
              title: '费用支付成功',
              desc: '您的行程将在2021.9.9 12:30 开始',
            });
          });
      });
  };

  window.customTime = () => {
    notice.open({
      title: '这是通知标题',
      desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
      duration: 0,
    });
  };

  window.customStyle = () => {
    notice.open({
      title: '这是通知标题',
      desc:
        '这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述,这里是通知的描述',
      style: 'width: 600px; background: #ccc;',
    });
  };

  window.useHTML = () => {
    notice.open({
      title: 'HTML片段',
      desc: `<strong>这是 <i>HTML</i> 片段</strong>`,
      dangerouslyUseHTMLString: true,
    });
  };
}
