import { useEffect } from "react";
import { Fragment, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { navConfig } from "../config";
import useMount from "../hooks/useMount";

const DesktopNav = ({ animateDone }) => {
  const [isMounted] = useMount();
  const [width, setWidth] = useState(32);
  const [left, setLeft] = useState(0);
  const [activeMenu, setActiveMenu] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Change active nav menu on scroll
  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;

      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const updateActiveMenu = () => {
      const sections = document.querySelectorAll("section");

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 500 &&
          scrollPosition <= sectionBottom - 500
        ) {
          const targetSection = navConfig.find(
            (item) => item.sectionId === section.id
          );
          setActiveMenu(targetSection);
          menuIndicatorSlider(targetSection);
          break;
        }
      }
    };

    const debouncedUpdateActiveMenu = debounce(updateActiveMenu, 10);

    debouncedUpdateActiveMenu();
  }, [scrollPosition]);

  useEffect(() => {}, [activeMenu]);

  const menuIndicatorSlider = (item) => {
    const element = document.getElementById(item.id);
    const elementWidth = element.offsetWidth;
    const elementLeft = element.offsetLeft;
    setWidth(elementWidth);
    setLeft(elementLeft);
  };

  const handleMenu = (item) => {
    setActiveMenu(item);
    menuIndicatorSlider(item);
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
        scrollPosition > 30 && animateDone ? "py-4 glass shadow-xl" : "py-8"
      } invisible lg:visible transition-all duration-500 delay-100 fixed px-16 top-0 z-50 w-full flex justify-between pointer-events-none`}
    >
      <Logo isMounted={isMounted} animateDone={animateDone} />
      <div className="relative flex items-center gap-8">
        {navConfig.map((item, i) => {
          const { id, numb, label } = item;
          return (
            <Fragment key={i}>
              {id === "nav-top" ? (
                <Button
                  id={id}
                  icon="mdi:chevron-double-up"
                  iconClass={`${
                    activeMenu?.id === id
                      ? "text-dark"
                      : "text-white hover:text-orange-neon"
                  } text-2xl transition-all duration-300`}
                  btnClass={`${
                    isMounted
                      ? "opacity-100"
                      : "opacity-0 -translate-y-5 text-orange-neon"
                  } [transition:opacity_500ms_ease_600ms,transform_500ms_ease_600ms,color_300ms_ease-out] z-10 px-1 ${
                    animateDone ? "pointer-events-auto" : ""
                  }`}
                  onClick={() => handleMenu(item)}
                />
              ) : (
                <button
                  id={id}
                  className={`${
                    isMounted ? "opacity-100" : "opacity-0 -translate-y-5"
                  } [transition:opacity_500ms_ease,transform_500ms_ease,color_300ms_ease-out] flex px-4 text-sm gap-1 font-roboto-mono cursor-pointer z-10 ${
                    animateDone ? "pointer-events-auto" : ""
                  } ${
                    activeMenu?.id === id ? "text-dark" : "text-orange-neon"
                  } `}
                  style={{
                    transitionDelay: `${(i + 1) * 100 + 500}ms, ${
                      (i + 1) * 100 + 500
                    }ms, 0s`,
                  }}
                  onClick={() => handleMenu(item)}
                >
                  {numb}.{" "}
                  <span
                    className={`${
                      activeMenu?.id === id
                        ? "text-dark"
                        : "text-slate-300 hover:text-orange-neon"
                    } transition duration-300`}
                  >
                    {label}
                  </span>
                </button>
              )}
            </Fragment>
          );
        })}
        <div
          className={`${
            isMounted ? "scale-100" : "scale-0"
          } [transition:width_300ms_ease-in-out,left_300ms_ease-in-out,transform_1000ms_ease-in-out_1800ms,background-color_300ms_ease-out] absolute w-[2rem] rounded-full bg-orange-neon transition-all hover:bg-red-neon h-8 duration-500 ease-in-out z-0`}
          style={{
            width,
            left,
          }}
        />
        <button
          className={`${
            isMounted ? "opacity-100" : "opacity-0 -translate-y-5"
          } [transition:opacity_500ms_1100ms,transform_500ms_1100ms,color_300ms_ease-out,border_300ms_ease-out] font-roboto-mono px-6 py-3 bg-transparent border-2 border-orange-neon  hover:border-red-neon rounded-lg text-orange-neon hover:text-red-neon transition-all duration-300 ${
            animateDone ? "pointer-events-auto" : ""
          }`}
        >
          <a href="/Resume.pdf" target="_blank">
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
