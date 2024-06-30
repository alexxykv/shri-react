import React, { useState } from "react";
import styles from "./styles.module.css";
import Icon from "../Icon/component";
import collapse_down from "../../img/collapse-down.svg";
import collapse_up from "../../img//collapse-up.svg";
import classNames from "classnames";

type Options = {
  [key: string]: string;
}

interface SelectProps {
  label: string;
  options: Options;
  placeholder: string;
  onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className={styles.select}>
      <h3 className={styles.label}>{label}</h3>
      <div className={classNames({
        [styles.input]: true,
        [styles.input_selected]: selectedOption !== null,
        [styles.input_active]: isOpen
      })}
        onClick={() => setIsOpen(!isOpen)}
        >
        {selectedOption ? selectedOption : placeholder}
        <Icon height={20} width={20} src={isOpen ? collapse_up : collapse_down} />
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {Object.entries(options).map(([id, option]) => (
            <li
              key={id}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;