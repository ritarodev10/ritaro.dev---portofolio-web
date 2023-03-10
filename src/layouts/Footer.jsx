import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { iconNavConfig } from "../config";

const FooterMobile = ({ scrollPosition }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {};
    setPageHeight(document.body.scrollHeight - window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [document.body.scrollHeight]);

  return (
    <footer
      id="bottom"
      className={`${
        (scrollPosition / pageHeight) * 100 > 98.5
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      } [transition:opacity_100ms] fixed bottom-2 w-full h-auto flex flex-col items-center`}
    >
      <div id="footer" className="text-slate-300 h-[120px] flex flex-col gap-6">
        <div className="visible md:invisible flex gap-8 justify-center">
          {iconNavConfig.map((item) => (
            <Button
              key={item.id}
              icon={item.icon}
              iconClass="text-2xl hover:text-orange-neon transition-all duration-200"
              href={item.url}
              target="_blank"
            />
          ))}
        </div>
        <a
          href="https://github.com/ritarodev10/ritaro.dev---portofolio-web"
          target="_blank"
          className="text-orange-neon hover:text-red-neon font-roboto-mono flex gap-3 justify-center items-center text-sm cursor-pointer transition duration-300"
        >
          <Icon icon="fe:fork" />
          <h3>Designed & Built by Riza Rohman</h3>
        </a>
      </div>
    </footer>
  );
};

export default FooterMobile;
