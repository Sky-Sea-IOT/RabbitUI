/**
 * 用于实例组件关闭后返回 promise 接口
 * @param duration 组件关闭的时间
 */
export default function promiseCb(duration: any): Promise<void> {
  return new Promise(resolve =>
    setTimeout(() => (typeof resolve === 'function' ? resolve() : undefined), duration * 1000)
  );
}
