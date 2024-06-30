import React, { useEffect, useState } from "react";
import ModalWindow from "../ModalWindow/component";
import styles from "./styles.module.css";
import close from "../../img/close.svg";
import Button from "../Button/component";
import Form from "../Form/component";
import Input from "../Input/component";
import Icon from "../Icon/component";
import ButtonGroup from "../ButtonGroup/component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { login } from "../../redux/authSlice";

interface AuthWindowProps {
  onClose: VoidFunction;
}

const AuthWindow: React.FC<AuthWindowProps> = ({ onClose }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (auth.token) onClose();
  }, [onClose, auth.token])

  useEffect(() => {
    if (auth.error) {
      alert("ochibka");
    }
  }, [auth.error]);

  const handleSubmit = () => {
    dispatch(login({ username, password }));
  };

  return (
    <ModalWindow className={styles["auth-window"]}>
      <div className={styles.header}>
        <h2 className={styles.title}>Авторизация</h2>
        <button onClick={onClose}>
          <Icon height={10} width={10} src={close} alt="Close" containerStyles={{
            height: 16,
            width: 16
          }} />
        </button>
      </div>
      <Form>
        <Input id="login" type="text" label="Логин" placeholder="Введите логин" onChange={setUsername} />
        <Input id="password" type="password" label="Пароль" placeholder="Введите пароль" onChange={setPassword} />
      </Form>
      <ButtonGroup>
        <Button onClick={handleSubmit} type="primary">Войти</Button>
        <Button onClick={onClose} type="secondary">Отменить</Button>
      </ButtonGroup>
    </ModalWindow>
  );
};

export default AuthWindow;