import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectcard}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a href="#">Saiba mais</a>
      <img src="src/assets/git-icon.png" alt="" />
    </li>
  );
};
