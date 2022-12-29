import { Icon } from "@iconify/react";
import { forwardRef } from "react";

const Button = forwardRef(
  (
    {
      id,
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
        id={id}
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
