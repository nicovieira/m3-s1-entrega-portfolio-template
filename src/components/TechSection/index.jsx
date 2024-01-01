import { TechList } from "./TechList";
import styles from "./TechSection.module.scss";
import { technologies } from "../../data/technologies";

export const TechSection = () => {
  return (
    <section className={styles.tech}>
      <h1>Tecnologias</h1>
      <TechList technologies={technologies} />
    </section>
  );
};
