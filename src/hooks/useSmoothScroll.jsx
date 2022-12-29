import { useState, useEffect, useRef } from "react";

const useSmoothScroll = (delay = 5000) => {
  // Ref for scrolling div
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.07,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // Hook to grab window size
  const [windowSize, setWindowSize] = useState(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  // Scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle window resize
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // update the scrollPosition so it can be used

  //set the height of the body.
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Update scroll position
    setScrollPosition(data.rounded);

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 1;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop via requestAnimationFrame
    requestAnimationFrame(() => skewScrolling());
  };

  useEffect(() => {
    setTimeout(() => {
      scrollTo(0, 0);
      requestAnimationFrame(() => skewScrolling());
    }, delay);
  }, []);

  return { setBodyHeight, scrollContainer, scrollPosition };
};

export default useSmoothScroll;
