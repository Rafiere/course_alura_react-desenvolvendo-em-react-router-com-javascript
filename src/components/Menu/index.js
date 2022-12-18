import React from "react";
import { Link } from "react-router-dom";
import MenuLink from "../MenuLink";

import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <header>
      <nav className={styles.navegacao}>
        {/* Ao invés de utilizar as tags "a", que recarregam a página por padrão, devemos utilizar o componente "Link". Esse componente não recarregará a página quando realizarmos a atualização. */}

        {/* Isso serve para respeitarmos o comportamento de uma SPA. */}
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/about-me">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
