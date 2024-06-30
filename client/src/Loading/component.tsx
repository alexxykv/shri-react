import React from "react";
import loading from "../img/loading.svg"
import styles from "./styles.module.css";
import Icon from "../components/Icon/component";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Icon height={32} width={32} src={loading} />
    </div>
  );
}

export default Loading;