import styles from "./Footer.module.scss";

export const Footer = ({ user }) => {
  return (
    <footer className={styles.footer}>
      <h3>Contato</h3>
      <p>Todos os direitos reservados - {user}</p>
      <div>
        <a href="#">
          <img src="src/assets/whatsapp-icon.png" alt="whatsapp-logo" />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/nmvieira/">
          <img src="src/assets/linkedin-icon.png" alt="linkedin-logo" />
        </a>
        <a href="https://github.com/nicovieira">
          <img src="src/assets/github-icon.png" alt="git-logo" />
        </a>
      </div>
    </footer>
  );
};
