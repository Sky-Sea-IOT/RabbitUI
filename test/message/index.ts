// @ts-nocheck
import { Message } from '../../src';

export default function messageTest() {
  const message = new Message();

  // 全局配置
  // message.config({
  //   duration: 8,
  //   top: 54
  // });

  // 全局销毁
  // setTimeout(() => message.destroy(), 5000);

  window.getInfo = () => {
    message.info('这是一条普通的提示');
  };

  window.getSuccess = () => {
    message.success('这是一条成功的提示');
  };
  window.getWarning = () => {
    message.warning('这是一条警告的提示');
  };
  window.getError = () => {
    message.error('这是一条错误的提示');
  };

  window.getInfoBgc = () => {
    message.info({
      content: '这是一条带背景色的通知',
      background: true,
      duration: 5,
    });
  };

  window.getSuccessBgc = () => {
    message.success({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getWarningBgc = () => {
    message.warning({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getErrorBgc = () => {
    message.error({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getLoading = () => {
    message.loading({
      content: '正在加载中...',
      duration: 0,
    });
    setTimeout(() => message.destroy(), 5000);
  };
  window.getPromise = () => {
    message.loading('正在加载中...').then(() => {
      message.success('加载成功!').then(() => {
        message.info('加载成功后的提示');
      });
    });
  };
  window.get10s = () => {
    message.success({
      content: '这是成功的提示信息，我将在10秒内消失',
      duration: 10,
    });
  };
  window.getClosable = () => {
    message.info({
      content: '可手动关闭的提示',
      duration: 8,
      closable: true,
    });
  };
  window.useHTML = () => {
    message.info({
      content: `<strong>这是 <i>HTML</i> 片段</strong>`,
      dangerouslyUseHTMLString: true,
    });
  };
}
