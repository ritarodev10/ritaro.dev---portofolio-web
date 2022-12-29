import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const FooterMobile = ({ scrollPosition }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {};
    setScroll(document.body.scrollHeight - window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [document.body.scrollHeight]);

  return (
    <footer
      id="bottom"
      className={`${
        (scrollPosition / scroll) * 100 > 98 ? "opacity-100" : "opacity-0"
      } [transition:opacity_100ms] fixed md:hidden bottom-2 w-full h-auto`}
    >
      <div id="footer" className="text-slate-300 h-[120px] flex flex-col gap-6">
        <div className="visible md:invisible flex gap-8 justify-center">
          {[
            {
              id: 1,
              icon: "ri:github-line",
              url: "https://github.com/ritarodev10",
            },
            {
              id: 2,
              icon: "mingcute:linkedin-line",
              url: "https://www.linkedin.com/in/riza-rohman/",
            },
            {
              id: 3,
              icon: "ph:codepen-logo",
              url: "https://codepen.io/riza-rohman",
            },
            {
              id: 4,
              icon: "mingcute:whatsapp-line",
              url: "https://wa.me/6287771884455",
            },
          ].map((item) => (
            <Button
              key={item.id}
              icon={item.icon}
              iconClass="text-2xl hover:text-orange-neon transition-all duration-200"
              href={item.url}
              target="_blank"
            />
          ))}
        </div>
        <a className="hover:text-orange-neon font-roboto-mono flex gap-3 justify-center items-center text-sm cursor-pointer transition duration-300">
          <Icon icon="mingcute:github-fill" />
          <h3>Designed & Built by Riza Rohman</h3>
        </a>
      </div>
    </footer>
  );
};

export default FooterMobile;
