import React from "react";
import useMount from "../hooks/useMount";

const Email = ({ animateDone }) => {
  const [isMounted] = useMount();

  return (
    <div
      className={`${
        isMounted ? "opacity-100" : "opacity-0"
      } [transition:opacity_500ms_ease-out_5s] invisible md:visible flex flex-col gap-8 w-5 items-center fixed bottom-0 font-roboto-mono text-xs tracking-widest right-[2rem] z-50 text-orange-neon after:w-[1px] after:block after:h-24 after:bg-orange-neon pointer-events-none`}
    >
      <span
        className={`leading-none cursor-pointer hover:text-red-neon hover:-translate-y-1 transition-all duration-200 ${
          animateDone ? "pointer-events-auto" : ""
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        ritarodev@gmail.com
      </span>
    </div>
  );
};

export default Email;
