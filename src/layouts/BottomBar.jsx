import React, { useEffect, useState } from "react";

const BottomBar = ({ scrollPosition }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPageHeight(document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed-bottom-bar h-2 bg-orange-neon animate-pulse rounded-full z-20"
      style={{
        position: "fixed",
        bottom: 0,
        left: -8,
        width: `${(scrollPosition / pageHeight) * 100 + 0.5}%`,
      }}
    />
  );
};

export default BottomBar;
