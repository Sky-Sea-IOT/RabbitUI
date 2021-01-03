//@ts-nocheck
import { Notice } from '../../src';

export default function noticeTest() {
  const notice = new Notice();

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
}
