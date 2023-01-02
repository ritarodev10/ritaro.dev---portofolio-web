import React from "react";
import { useDeviceType } from "../hooks";
import { DesktopNav, MobileNav } from "../components";

const Navbar = ({ animateDone }) => {
  const { isMobile, isTablet } = useDeviceType();

  return (
    <header>
      {isMobile || isTablet ? (
        <MobileNav animateDone={animateDone} />
      ) : (
        <DesktopNav animateDone={animateDone} />
      )}
    </header>
  );
};

export default Navbar;
