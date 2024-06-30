import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

const Form: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <form className={styles.form} >
      {children}
    </form>
  );
};

export default Form;