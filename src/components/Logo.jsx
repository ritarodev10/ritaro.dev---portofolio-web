import React from "react";
const charMap = {
  "<": "{",
  ">": "}",
  "/>": "/>",
};

const Logo = ({ isMounted, animateDone }) => {
  return (
    <a
      href="/"
      className={`${
        isMounted ? "opacity-100" : "opacity-0"
      } [transition:opacity_500ms_ease-out_500ms] flex gap-1 font-ubuntu-mono text-4xl ${
        animateDone ? "pointer-events-auto" : ""
      } text-orange-neon`}
    >
      <span className="text-red-neon">{charMap["<"]}</span>R
      <span className="text-red-neon">{charMap[">"]}</span>
    </a>
  );
};

export default Logo;
