import { user } from "../../data/user";
import styles from "./Banner.module.scss";
import banner from "../../assets/banner-img.png";

export const BannerSection = ({ user }) => {
  return (
    <section className={styles.banner}>
      <div>
        <label>{user}</label>
        <h1>Bem vindo ao meu portfólio</h1>
        <p>Uma frase interessante sobre mim</p>
        <button>Saiba Mais</button>
      </div>
      <img src={banner} alt="banner" />
    </section>
  );
};
