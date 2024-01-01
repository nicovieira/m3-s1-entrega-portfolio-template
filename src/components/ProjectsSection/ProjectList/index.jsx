import { projects } from "../../../data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectList.module.scss";

export const ProjectList = () => {
  return (
    <ul className={styles.projectslist}>
      {projects.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </ul>
  );
};
