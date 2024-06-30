import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type ButtonType = "primary" | "secondary";

interface ButtonProps extends PropsWithChildren {
  type: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={classNames({
      [styles.button]: true,
      [styles.button_primary]: type === "primary",
      [styles.button_secondary]: type === "secondary",
    })}>
      {children}
    </button>
  );
};

export default Button;