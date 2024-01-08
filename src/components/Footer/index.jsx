import styles from "./Footer.module.scss";
import whatsapp from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";

export const Footer = ({ user }) => {
  return (
    <footer className={styles.footer}>
      <h3>Contato</h3>
      <p>Todos os direitos reservados - {user}</p>
      <div>
        <a href="#">
          <img src={whatsapp} alt="whatsapp-logo" />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/nmvieira/">
          <img src={linkedin} alt="linkedin-logo" />
        </a>
        <a target="blank" href="https://github.com/nicovieira">
          <img src={github} alt="git-logo" />
        </a>
      </div>
    </footer>
  );
};
