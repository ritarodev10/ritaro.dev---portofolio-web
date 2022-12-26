import { useEffect } from "react";
import { Fragment, useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
import useAutoHideNavbar from "../hooks/useAutoHideNavbar";
import useEntranceAnimation from "../hooks/useEntranceAnimation";
import useMenuSlide from "../hooks/useMenuSlide";
import useMount from "../hooks/useMount";

const Navbar = ({ animateDone }) => {
  const [isMounted] = useMount();
  const { visible, prevScrollpos } = useAutoHideNavbar(true);
  const [width, left, handleClick] = useMenuSlide(24, 0);
  const [activeMenu, setActiveMenu] = useState({});

  const handleMenu = (e, item) => {
    handleClick(e);
    setActiveMenu(item);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveMenu({
        id: 1,
        icon: true,
        type: "icon",
        label: "",
        path: "",
      });
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${!animateDone ? "" : visible ? "" : "-translate-y-full"} ${
          prevScrollpos > 0 && animateDone ? "py-4 glass shadow-xl" : "py-8"
        } invisible md:visible transition-all duration-500 delay-100 fixed px-16 top-0 z-50 w-full flex justify-between pointer-events-none`}
      >
        <Logo isMounted={isMounted} animateDone={animateDone} />
        <div className="relative flex items-center gap-8">
          {[
            { id: 1, icon: true, type: "icon", label: "", path: "" },
            { id: 2, icon: false, type: "menu", label: "About", path: "" },
            {
              id: 3,
              icon: false,
              type: "menu",
              label: "Experience",
              path: "",
            },
            { id: 4, icon: false, type: "menu", label: "Work", path: "" },
            {
              id: 5,
              icon: false,
              type: "menu",
              label: "Contact",
              path: "",
            },
          ].map((item) => {
            const { id, icon, type, label, path } = item;
            return (
              <Fragment key={item.id}>
                {icon ? (
                  <Button
                    icon="mdi:chevron-double-up"
                    iconClass={`${
                      activeMenu.id === id
                        ? "text-dark"
                        : "text-orange-neon hover:text-red-neon"
                    } text-2xl transition-all duration-300`}
                    btnClass={`${
                      isMounted
                        ? "opacity-100"
                        : "opacity-0 -translate-y-5 text-orange-neon"
                    } [transition:opacity_500ms_ease_600ms,transform_500ms_ease_600ms,color_300ms_ease-out] z-10 px-1 ${
                      animateDone ? "pointer-events-auto" : ""
                    }`}
                    onClick={(e) => handleMenu(e, item)}
                  />
                ) : (
                  <button
                    className={`${
                      isMounted ? "opacity-100" : "opacity-0 -translate-y-5"
                    } [transition:opacity_500ms_ease,transform_500ms_ease,color_300ms_ease-out] flex px-4 text-sm gap-1 font-roboto-mono z-10 ${
                      animateDone ? "pointer-events-auto" : ""
                    } ${
                      activeMenu.id === id
                        ? "text-dark"
                        : "text-orange-neon hover:text-red-neon"
                    }`}
                    style={{
                      transitionDelay: `${id * 100 + 500}ms, ${
                        id * 100 + 500
                      }ms, 0s`,
                    }}
                    onClick={(e) => handleMenu(e, item)}
                  >
                    <span className="cursor-pointer">{label}</span>
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
              width: `${activeMenu.icon ? "2rem" : `${width}px`}`,
              left,
            }}
          />
          <button
            className={`${
              isMounted ? "opacity-100" : "opacity-0 -translate-y-5"
            } [transition:opacity_500ms_1100ms,transform_500ms_1100ms,color_300ms_ease-out,border_300ms_ease-out] font-roboto-mono px-6 py-3 bg-transparent border-2 hover:border-orange-neon  border-red-neon rounded-lg hover:text-orange-neon text-red-neon transition-all duration-300 ${
              animateDone ? "pointer-events-auto" : ""
            }`}
          >
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
