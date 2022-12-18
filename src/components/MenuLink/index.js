import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  /* O "useLocation()" é um hook do React Router DOM. Ele retorna um objeto com algumas informações da rota atual. */
  const localization = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        localization.pathname === to ? styles.linkDestacado : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
