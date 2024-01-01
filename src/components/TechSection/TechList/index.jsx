import { technologies } from "../../../data/technologies";
import { TechCard } from "./TechCard";
import styles from "./TechList.module.scss";

export const TechList = () => {
  return (
    <ul className={styles.card}>
      {technologies.map((technologie) => {
        return <TechCard key={technologie.id} technologie={technologie} />;
      })}
    </ul>
  );
};
