import React, { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import Button from "../Button/component";
import person from "../../img/person.svg";
import Icon from "../Icon/component";
import AuthWindow from "../AuthWindow/component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { logout } from "../../redux/authSlice";


interface HeaderProps {
  className: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isAuthWindow, setIsAuthWindow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <>
      <header className={classNames(className, styles.header)}>
        <h1 className={styles.logo}>Фильмопоиск</h1>
        <div className={styles["right-side"]}>
          {auth.token && <Icon height={24} width={24} src={person} alt="Avatar" containerStyles={{
            height: 40,
            width: 40,
            backgroundColor: "var(--text-white)",
            borderRadius: "50%"
          }} />}
          {
            auth.token
              ? <Button type="secondary" onClick={() => dispatch(logout())}>Выйти</Button>
              : <Button type="primary" onClick={() => setIsAuthWindow(true)}>Войти</Button>
          }
        </div>
      </header>
      {isAuthWindow && <AuthWindow onClose={() => setIsAuthWindow(false)} />}
    </>
  );
};

export default Header;