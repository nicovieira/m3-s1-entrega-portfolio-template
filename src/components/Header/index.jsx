import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="src/assets/portfolio.png" alt="portfolio-logo" />
      <nav>
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projetos</p>
      </nav>
      <button>Contato</button>
    </header>
  );
};
