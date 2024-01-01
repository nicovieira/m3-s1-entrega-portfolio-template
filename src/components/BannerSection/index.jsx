import { user } from "../../data/user";
import styles from "./Banner.module.scss";

export const BannerSection = ({ user }) => {
  return (
    <section className={styles.banner}>
      <div>
        <label>{user}</label>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Uma frase interessante sobre mim</p>
        <button>Saiba Mais</button>
      </div>
      <img src="src/assets/banner-img.png" alt="banner" />
    </section>
  );
};
