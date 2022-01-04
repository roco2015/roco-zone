const hasClass = (dom: HTMLElement, className: string) => dom.className.search(className) >= 0;

const addClass = (dom: HTMLElement, ...classNames: string[]) => {
  classNames.forEach((className) => {
    if (hasClass(dom, className)) {
      return;
    }
    dom.className = `${dom.className} ${className}`;
  });
};
const removeClass = (dom: HTMLElement, ...classNames: string[]) => {
  classNames.forEach((className) => {
    if (hasClass(dom, className)) {
      dom.className = dom.className.replace('className', '');
    }
  });
};

export {
  addClass,
  removeClass,
};
