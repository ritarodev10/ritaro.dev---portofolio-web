import { useEffect } from "react";
import BottomBar from "../components/BottomBar";
import Email from "../components/Email";
import IconNav from "../components/IconNav";
import useEntranceAnimation from "../hooks/useEntranceAnimation";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { animateDone, entranceDuration } = useEntranceAnimation();
  const { setBodyHeight, scrollContainer, scrollPosition } =
    useSmoothScroll(entranceDuration);

  useEffect(() => {
    setBodyHeight();
  }, []);

  return (
    <div className="App fixed rel overflow-hidden top-0 left-0 h-screen w-screen">
      <Navbar animateDone={animateDone} />
      <div ref={scrollContainer} className="scroll">
        <div
          className={`${
            animateDone ? "" : "pointer-events-none "
          } container overflow-x-hidden m-auto  bg-dark h-[5000px]`}
        >
          {children}
        </div>
      </div>
      <Email animateDone={animateDone} />
      <IconNav animateDone={animateDone} />
      <BottomBar scrollPosition={scrollPosition} />
    </div>
  );
};

export default Layout;
