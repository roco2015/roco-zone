// const eventListener = addScrollEventListener(document, {
//   banner: banner.value.banner,
//   scene: scene.value.section,
//   company: company.value.section,
//   advantage: advantage.value.section,
//   partner: partner.value.section,
// }, 'banner');

// onUnmounted(() => {
//   removeScrollEventListener(document, eventListener);
// });

// const addScrollEventListener = (wrapDom: HTMLElement, innerDomObjects: Record<string, HTMLElement>, currentDomName: string) => {
//   const innerDomNameArray = Object.keys(innerDomObjects);
//   const innerDomArray = Object.values(innerDomObjects);

//   let currentIndex = innerDomNameArray.indexOf(currentDomName);
//   console.log(currentIndex);
//   let animationing = false;

//   const eventListener = () => {
//     if (animationing) {
//       return;
//     }
//     const { offsetTop } = innerDomArray[currentIndex];
//     // console.log('cur dom', offsetTop, offsetHeight);
//     // console.log('scrollY', window.scrollY);

//     if (window.scrollY > offsetTop + 10) {
//       animationing = true;
//       console.log('will down');
//       innerDomArray[++currentIndex]?.scrollIntoView(true);
//       console.log(innerDomArray[currentIndex]);
//     }
//     if (window.scrollY < offsetTop - 10) {
//       animationing = true;
//       console.log('will up');
//       innerDomArray[--currentIndex]?.scrollIntoView(true);
//     }
//   };

//   wrapDom.addEventListener('scroll', eventListener);
//   return eventListener;
// };

// const removeScrollEventListener = (dom: HTMLElement, eventListener: any) => {
//   dom.removeEventListener('scroll', eventListener);
// };

// export { addScrollEventListener, removeScrollEventListener };
