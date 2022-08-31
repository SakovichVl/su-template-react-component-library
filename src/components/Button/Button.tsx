import React, { memo } from "react";
import { FC, MouseEvent } from "react";

type ButtonProps = {
  label?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit"
};

const Button: FC<ButtonProps> = ({ label, onClick, className, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default memo(Button);
