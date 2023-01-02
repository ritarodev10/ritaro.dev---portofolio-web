import { useState, useEffect } from "react";

//  autohide navbar element on scroll down
const useAutoHideNavbar = (visibility = false) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [isNavbarVisible, setIsNavbarVisible] = useState(visibility);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return { isNavbarVisible, prevScrollpos };
};

export default useAutoHideNavbar;
