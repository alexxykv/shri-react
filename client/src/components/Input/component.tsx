import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  className?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, placeholder, className, onChange }) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={styles.group}>
      {label && <label className={styles.label} htmlFor={id}>{label}</label>}
      <input id={id} className={classNames(styles.input, className)} type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default Input;