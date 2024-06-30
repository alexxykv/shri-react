import React, { useState } from "react";
import styles from "./styles.module.css";
import Form from "../Form/component";
import Select from "../Select/component";
import { GENRES, YEARS } from "../../constants";

const Aside: React.FC = () => {
  const [genre, setGenre] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Фильтр</h2>
      <Form>
        <Select label="Жанр" options={GENRES} placeholder="Выберите жанр" onSelect={setGenre} />
        <Select label="Год выпуска" options={YEARS} placeholder="Выберите год" onSelect={setYear} />
      </Form>
    </aside>
  );
};

export default Aside;