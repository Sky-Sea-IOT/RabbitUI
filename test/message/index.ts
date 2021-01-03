// @ts-nocheck
import { Message } from '../../src';

export default function messageTest() {
  // 全局配置
  // Message.config({
  //   duration: 8,
  //   top: 54
  // });

  // 全局销毁
  // setTimeout(() => Message.destroy(), 5000);

  window.getInfo = () => {
    Message.info('这是一条普通的提示');
  };

  window.getSuccess = () => {
    Message.success('这是一条成功的提示');
  };
  window.getWarning = () => {
    Message.warning('这是一条警告的提示');
  };
  window.getError = () => {
    Message.error('这是一条错误的提示');
  };

  window.getInfoBgc = () => {
    Message.info({
      content: '这是一条带背景色的通知',
      background: true,
      duration: 5,
    });
  };

  window.getSuccessBgc = () => {
    Message.success({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getWarningBgc = () => {
    Message.warning({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getErrorBgc = () => {
    Message.error({
      content: '这是一条带背景色的通知',
      background: true,
    });
  };
  window.getLoading = () => {
    Message.loading({
      content: '正在加载中...',
      duration: 0,
    });
    setTimeout(() => Message.destroy(), 5000);
  };
  window.getPromise = () => {
    Message.loading('正在加载中...').then(() => {
      Message.success('加载成功!').then(() => {
        Message.info('加载成功后的提示');
      });
    });
  };
  window.get10s = () => {
    Message.success({
      content: '这是成功的提示信息，我将在10秒内消失',
      duration: 10,
    });
  };
  window.getClosable = () => {
    Message.info({
      content: '可手动关闭的提示',
      duration: 8,
      closable: true,
    });
  };
  window.useHTML = () => {
    Message.info(`<strong>这是 <i>HTML</i> 片段</strong>`);
  };
}
