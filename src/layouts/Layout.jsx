import { useState } from "react";
import { useEffect } from "react";
import BottomBar from "./BottomBar";
import Email from "../components/Email";
import IconNav from "../components/IconNav";
import useEntranceAnimation from "../hooks/useEntranceAnimation";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { animateDone, entranceDuration } = useEntranceAnimation();
  const { setBodyHeight, scrollContainer, scrollPosition } =
    useSmoothScroll(entranceDuration);

  useEffect(() => {
    setBodyHeight();
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 5000);
  }, []);

  return (
    <div className="App fixed rel overflow-hidden top-0 left-0 h-screen w-screen bg-dark">
      <Navbar animateDone={animateDone} />
      <div
        id="scroll-container"
        ref={scrollContainer}
        className="scroll pb-[47rem] xl:pb-[15rem] 2xl:pb-[20rem] "
      >
        <div
          className={`${
            animateDone ? "" : "pointer-events-none "
          } flex-container container px-6 overflow-x-hidden m-auto  flex flex-col justify-start items-center gap-[15rem]`}
        >
          {children}
        </div>
      </div>
      <Footer scrollPosition={scrollPosition} />
      <Email animateDone={animateDone} />
      <IconNav animateDone={animateDone} />
      <BottomBar scrollPosition={scrollPosition} />
    </div>
  );
};

export default Layout;
