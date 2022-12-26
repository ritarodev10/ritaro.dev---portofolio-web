import React from "react";
import useMount from "../hooks/useMount";
import Button from "./Button";

const IconNav = ({ animateDone }) => {
  const [isMounted] = useMount();

  return (
    <div
      className={`${
        isMounted ? "opacity-100" : "opacity-0"
      } [transition:opacity_500ms_ease-out_5s] invisible md:visible flex flex-col gap-8 w-5 items-center fixed bottom-0 font-roboto-mono text-xs tracking-widest left-[2rem] z-50 text-orange-neon after:w-[1px] after:block after:h-24 after:bg-orange-neon pointer-events-none`}
    >
      <div className="flex flex-col gap-7">
        {[
          { id: 1, icon: "ri:github-line", path: "" },
          { id: 2, icon: "mingcute:linkedin-line", path: "" },
          { id: 3, icon: "carbon:logo-instagram", path: "" },
          { id: 4, icon: "mingcute:whatsapp-line", path: "" },
        ].map((item) => (
          <Button
            key={item.id}
            icon={item.icon}
            iconClass="text-2xl hover:text-red-neon transition-all duration-200 hover:-translate-y-1"
            btnClass={`${animateDone ? "pointer-events-auto" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IconNav;
