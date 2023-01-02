import React from "react";

const SidebarMenu = () => {
  return (
    <div
      id="navbar-menu"
      ref={ref}
      className={`${
        isOpen ? "pointer-events-none -right-0" : "-right-[80%]"
      } block md:hidden bg-semidark shadow-side z-20 w-[70%] h-full fixed [transition:all_300ms_ease]`}
    >
      <span className="text-slate-300">Lorem ipsum</span>
    </div>
  );
};

export default SidebarMenu;
