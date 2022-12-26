import { useEffect } from "react";

const useParallax = (layerRef, imageRef) => {
  useEffect(() => {
    const image = imageRef.current;
    const layer = layerRef.current;

    let ivalueX = 0;
    let ivalueY = 0;

    const updatePosition = () => {
      image.style.transform = `translate3d(${ivalueX}px, ${ivalueY}px, 0)`;
      requestAnimationFrame(updatePosition);
    };
    updatePosition();

    const easing = (current, target, easing) => {
      return current + (target - current) * easing;
    };

    layer.addEventListener(
      "mousemove",
      (e) => {
        const targetIvalueX = (e.pageX * -1) / 40;
        const targetIvalueY = (e.pageY * -1) / 40;
        ivalueX = easing(ivalueX, targetIvalueX, 0.09);
        ivalueY = easing(ivalueY, targetIvalueY, 0.09);
      },
      { passive: true }
    );
  }, []);
};

export default useParallax;
