import { ProjectList } from "./ProjectList";
import styles from "./ProjectsSection.module.scss";
import { projects } from "../../data/projects";

export const ProjectsSection = () => {
  return (
    <section className={styles.projects}>
      <h1>Projetos</h1>

      <ProjectList projects={projects} />
    </section>
  );
};
