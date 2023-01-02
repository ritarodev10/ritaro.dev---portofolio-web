import React from "react";

const BurgerButton = ({ toggleBurger, isOpen }) => {
  return (
    <div id="burger-menu" className="fixed right-5 top-[21px] z-50">
      <div className=" relative w-9 h-7" onClick={toggleBurger}>
        <div
          className={`${
            isOpen ? "rotate-45 -top-[1px]" : "top-1"
          } w-9 h-[2px] bg-orange-neon origin-top-left absolute transition-all duration-300 ease-in-out`}
        />
        <div
          className={`${
            isOpen ? "opacity-0 scale-x-50 scale-y-75" : "opacity-100"
          } w-9 h-[2px] bg-orange-neon absolute origin-left top-1/2 transition-all duration-300`}
        />
        <div
          className={`${
            isOpen ? "-rotate-45 " : ""
          } w-9 h-[2px] bg-orange-neon origin-bottom-left absolute top-6 transition-all duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default BurgerButton;
