import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const ButtonGroup: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.group}>
      {children}
    </div>
  );
};

export default ButtonGroup;