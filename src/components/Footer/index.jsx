import styles from "./Footer.module.scss";

export const Footer = ({ user }) => {
  return (
    <footer className={styles.footer}>
      <h3>Contato</h3>
      <p>Todos os direitos reservados - {user}</p>
      <div>
        <img src="src/assets/whatsapp-icon.png" alt="whatsapp-logo" />
        <img src="src/assets/linkedin-icon.png" alt="linkedin-logo" />
        <img src="src/assets/github-icon.png" alt="git-logo" />
      </div>
    </footer>
  );
};
