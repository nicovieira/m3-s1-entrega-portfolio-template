import styles from "./Header.module.scss";
import logo from "../../assets/portfolio.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="portfolio-logo" />
      <nav>
        <p>Sobre</p>
        <p>Stack</p>
        <p>Projetos</p>
      </nav>
      <button>Contato</button>
    </header>
  );
};
