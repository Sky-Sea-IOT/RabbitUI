export default function CssTranstion(elem: HTMLElement, cls: string, rm?: boolean): void {
  elem.classList.add(cls);
  setTimeout(() => {
    if (rm) elem.classList.remove(cls);
  }, 300);
}
