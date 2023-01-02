import { Icon } from "@iconify/react";
import React from "react";
import { iconNavConfig } from "../config";
import useMount from "../hooks/useMount";

const IconNav = ({ animateDone }) => {
  const [isMounted] = useMount();

  return (
    <div
      className={`${
        isMounted ? "opacity-100" : "opacity-0"
      } [transition:opacity_500ms_ease-out_5s] invisible lg:visible flex flex-col gap-8 w-5 items-center fixed bottom-0 font-roboto-mono text-xs tracking-widest left-[2rem] z-50 text-orange-neon after:w-[1px] after:block after:h-24 after:bg-orange-neon pointer-events-none`}
    >
      <div className="flex flex-col gap-7">
        {iconNavConfig.map((item) => (
          <a
            key={item.id}
            className={`${animateDone ? "pointer-events-auto" : ""}`}
            href={item.url}
            target="_blank"
          >
            <Icon
              icon={item.icon}
              className="text-2xl hover:text-red-neon transition-all duration-200 hover:-translate-y-1"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default IconNav;
