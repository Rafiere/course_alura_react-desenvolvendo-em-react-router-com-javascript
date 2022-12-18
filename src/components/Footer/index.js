import React from "react";

import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Alura.
    </footer>
  );
};

export default Footer;
