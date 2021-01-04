import Rabbit from '../../src';

export default function loadingBarTest() {
  const loading = new Rabbit.Loading();

  // loading.config({
  //   height: 5,
  //   color: '#5cb85c',
  //   failedColor: '#f0ad4e',
  //   duration: 1000,
  // });

  // @ts-ignore
  window.Start = () => {
    loading.statr();
  };
  // @ts-ignore
  window.Finish = () => {
    loading.finish();
  };
  // @ts-ignore
  window._Error = () => {
    loading.error();
  };
}
