import styles from "./ProjectCard.module.scss";
import gitlogo from "../../../../assets/git-icon.png";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectcard}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href="#">Saiba mais</a>
      <img src={gitlogo} alt="git-logo" />
    </li>
  );
};
