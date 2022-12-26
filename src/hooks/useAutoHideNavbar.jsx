import { useState, useEffect } from "react";

const useAutoHideNavbar = (initialVisibility) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(initialVisibility);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const show = prevScrollpos > currentScrollPos;

      setPrevScrollpos(currentScrollPos);
      // Only set the visible state if more than 4 seconds have passed
      if (Date.now() - startTime > 8000) {
        setVisible(show);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return { visible, prevScrollpos };
};

export default useAutoHideNavbar;
