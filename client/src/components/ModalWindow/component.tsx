import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

interface ModalWindowProps extends PropsWithChildren {
  className: string | undefined;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children, className }) => {
  return (
    createPortal(
      <>
        <div className={styles.overlay}>
          <div className={classNames(styles.modal, className)}>
            {children}
          </div>
        </div>
      </>,
      document.body
    )
  );
};

export default ModalWindow;