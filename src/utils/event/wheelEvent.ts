const addWheelEventListener = (dom: HTMLElement, callback: (top: boolean, right: boolean, bottom: boolean, left: boolean) => Promise<void>, stepSize = 0) => {
  let animation = false;
  const eventListener = (event: WheelEvent) => {
    if (animation) {
      return;
    }
    const rollToTop = event.deltaY < -stepSize;
    const rollToBottom = event.deltaY > stepSize;
    const rollToRight = event.deltaX > stepSize;
    const rollToLeft = event.deltaX < -stepSize;
    animation = rollToTop || rollToBottom || rollToRight || rollToLeft;

    if (animation) {
      callback(event.deltaY < -stepSize, event.deltaX > stepSize, event.deltaY > stepSize, event.deltaX < -stepSize).then(() => {
        animation = false;
      });
    }
  };

  dom.addEventListener('wheel', eventListener);
  return eventListener;
};

const removeWheelEventListener = (dom: HTMLElement, eventListener: any) => {
  dom.removeEventListener('wheel', eventListener);
};

export { addWheelEventListener, removeWheelEventListener };
