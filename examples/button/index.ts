// @ts-nocheck
import { Button } from '../../src';

export default function buttonTest() {
  const btn = new Button();
  window.handleLoad = () => {
    btn.config('#clickMe').loading = true;
    setTimeout(() => (btn.config('#clickMe').loading = false), 3000);
  };
}
