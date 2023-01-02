import { useEffect } from "react";
import BottomBar from "./BottomBar";
import Email from "../components/Email";
import IconNav from "../components/IconNav";
import useEntranceAnimation from "../hooks/useEntranceAnimation";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const entranceDuration = 5000;
  const animateDone = useEntranceAnimation(entranceDuration);
  const { setBodyHeight, scrollContainer, scrollPosition } =
    useSmoothScroll(entranceDuration);

  useEffect(() => {
    setBodyHeight();
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, entranceDuration);
  }, []);

  return (
    <div
      id="App"
      className={`fixed overflow-hidden top-0 h-screen w-screen bg-dark`}
    >
      <Navbar animateDone={animateDone} />
      <div
        id="scroll-container"
        ref={scrollContainer}
        className="scroll pb-[47rem] md:pb-[11rem] xl:pb-[13rem] 2xl:pb-[20rem]"
      >
        <div
          className={`${
            animateDone ? "" : "pointer-events-none "
          } container px-6  overflow-x-hidden m-auto flex flex-col justify-start items-center gap-[15rem]`}
        >
          <Outlet />
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
