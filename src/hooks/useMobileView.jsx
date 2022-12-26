import { useState, useEffect } from "react";

const useMobileView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check whether the viewport width is less than or equal to 500px
      const isMobileView = window.matchMedia("(max-width: 500px)").matches;
      setIsMobile(isMobileView);
    };

    // Add a listener for the resize event
    window.addEventListener("resize", handleResize);

    // Call the handler function initially to set the initial value of isMobile
    handleResize();

    // Remove the listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useMobileView;
