import { Icon } from "@iconify/react";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      children,
      icon,
      btnClass,
      iconClass,
      btnStyle,
      iconStyle,
      onClick,
      disabled,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={btnClass}
        onClick={onClick}
        disabled={disabled}
        style={btnStyle}
      >
        <Icon icon={icon} className={iconClass} style={iconStyle} />
        {children}
      </button>
    );
  }
);

export default Button;
