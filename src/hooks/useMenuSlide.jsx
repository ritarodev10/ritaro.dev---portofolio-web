import { useState } from "react";

const useMenuSlide = (initialWidth, initialLeft) => {
  const [width, setWidth] = useState(initialWidth);
  const [left, setLeft] = useState(initialLeft);
  const handleClick = (event) => {
    const element = event.currentTarget;
    setWidth(element.offsetWidth);
    setLeft(element.offsetLeft);
  };

  return [width, left, handleClick];
};

export default useMenuSlide;
