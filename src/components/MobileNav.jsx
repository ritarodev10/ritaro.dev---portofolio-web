import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useAutoHideNavbar, useComponentVisible, useMount } from "../hooks";
import BurgerButton from "./BurgerButton";
import { navConfig } from "../config";

const MobileNav = ({ animateDone }) => {
  const [isMounted] = useMount();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const { isNavbarVisible, prevScrollpos: scrollPos } = useAutoHideNavbar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      return setIsComponentVisible(true);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [isComponentVisible]);

  const handleMenu = (item) => {
    setIsOpen(false);
    document.body.style.overflow = "auto";

    if (item.sectionId === "top") {
      window.location.hash = "";
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const section = document.getElementById(item.sectionId);
    const sectionY = section.offsetTop;
    window.scrollTo(0, sectionY - 100);
  };

  return (
    <nav
      className={`${
        !isNavbarVisible && scrollPos > 100 && !isOpen
          ? "-top-[70px]"
          : "-top-[1px] "
      } ${isOpen ? "" : "glass"} ${
        animateDone ? "" : "pointer-events-none"
      } fixed flex items-center transition-all duration-200 h-[70px] w-full z-10 shadow-xl`}
    >
      <div className="z-20 ml-3">
        <Logo animateDone={animateDone} isMounted={isMounted} />
      </div>
      <BurgerButton toggleBurger={toggleBurger} isOpen={isOpen} />
      <div
        ref={ref}
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } h-screen absolute z-30 w-[70%] bg-semidark shadow-side overflow-auto top-0 right-0 transition`}
      >
        <ul className="flex flex-col gap-16 items-center pt-6">
          {navConfig.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-2 items-center text-white"
              onClick={() => handleMenu(item)}
            >
              <span className="font-roboto-mono text-orange-neon">
                {item.numb}
              </span>
              <span className="font-noto text-xl text-slate-300">
                {item.label}
              </span>
            </li>
          ))}
          <li
            className={`${
              isMounted ? "opacity-100" : "opacity-0 -translate-y-5"
            } [transition:opacity_500ms_1100ms,transform_500ms_1100ms,color_300ms_ease-out,border_300ms_ease-out] font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon  hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300 ${
              animateDone ? "pointer-events-auto" : ""
            }`}
          >
            <a href="/Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute left-0 top-0 h-screen w-full glass z-20 transition`}
      />
    </nav>
  );
};

export default MobileNav;
