import React from "react";
import styles from "./styles.module.css";

interface IconProps {
  height: number | string;
  width: number | string;
  src: string;
  alt?: string;
  containerStyles?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ height, width, src, alt, containerStyles }) => {
  return (
    <div className={styles.container} style={containerStyles}>
      <img height={height} width={width} src={src} alt={alt} />
    </div>
  );
};

export default Icon;