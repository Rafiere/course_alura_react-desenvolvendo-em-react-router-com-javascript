import styles from "./Banner.module.css";

import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

import React from "react";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal!</p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="" />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do dono do site sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
