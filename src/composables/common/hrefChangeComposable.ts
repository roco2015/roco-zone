// import { onMounted, ref } from 'vue';
// import { useRoute } from 'vue-router';

// export default function hrefChangeComposable(hrefObjects: any, initByHand = false) {
//   const { query: { href } } = useRoute();
//   const selfHrefObjects = ref(hrefObjects);

//   const hrefChange = (e: string) => {
//     selfHrefObjects.value[e]?.scrollIntoView(true);
//   };

//   const initHrefObjects = (newHrefObjects: any) => {
//     selfHrefObjects.value = newHrefObjects;
//   };

//   const handleOnMounted = () => {
//     if (typeof href === 'string') {
//       hrefChange(href);
//     } else {
//       window.scrollTo(0, 0);
//     }
//   };

//   onMounted(() => {
//     if (initByHand) {
//       return;
//     }
//     handleOnMounted();
//   });

//   return {
//     hrefChange,
//     handleOnMounted,
//     initHrefObjects,
//   };
// }
