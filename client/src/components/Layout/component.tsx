import React, { PropsWithChildren } from "react";
import Header from "../Header/component";
import styles from "./styles.module.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;