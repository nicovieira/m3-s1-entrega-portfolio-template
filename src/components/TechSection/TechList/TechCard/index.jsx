import styles from "./TechCard.module.scss";

export const TechCard = ({ technologie }) => {
  return (
    <li className={styles.technologie}>
      <img src={technologie.img} alt="icon" />
      <h3>{technologie.name}</h3>
    </li>
  );
};
