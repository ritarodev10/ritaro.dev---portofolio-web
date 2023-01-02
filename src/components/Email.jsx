import { useEffect, useRef } from "react";
import { useComponentVisible } from "../hooks";
import useMount from "../hooks/useMount";

const Email = ({ animateDone }) => {
  // indicate component has mounted
  const [isMounted] = useMount();
  const textRef = useRef(null);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // handle close snackbar
  useEffect(() => {
    let timeoutId;
    if (isComponentVisible) {
      timeoutId = setTimeout(() => setIsComponentVisible(false), 500);
    }
    return () => clearTimeout(timeoutId);
  }, [isComponentVisible]);

  // handle copy email & open snackbar
  function copyToClipboard() {
    textRef.current.value = document.querySelector("#email").textContent;
    textRef.current.select();
    document.execCommand("copy");
    setIsComponentVisible(true);
  }

  return (
    <>
      <div
        className={`${
          isMounted ? "opacity-100" : "opacity-0"
        } [transition:opacity_500ms_ease-out_5s] invisible lg:visible flex flex-col gap-8 w-5 items-center fixed bottom-0 font-roboto-mono text-xs tracking-widest right-[2rem] z-50 text-orange-neon after:w-[1px] after:block after:h-24 after:bg-orange-neon pointer-events-none`}
      >
        <div className="relative">
          <span
            ref={ref}
            className={`${
              isComponentVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            } transition-all duration-100 font-noto tracking-normal bg-orange-neon w-24  text-dark pointer-events-none absolute top-40 -left-32 rounded-sm text-center p-2`}
          >
            Email copied!
          </span>
        </div>
        <textarea ref={textRef} className="opacity-0"></textarea>
        <span
          id="email"
          className={`relative leading-none cursor-pointer hover:text-red-neon hover:-translate-y-1 transition-all duration-200 ${
            animateDone ? "pointer-events-auto" : ""
          }`}
          onClick={copyToClipboard}
          style={{ writingMode: "vertical-rl" }}
        >
          ritarodev@gmail.com
        </span>
      </div>
    </>
  );
};

export default Email;
