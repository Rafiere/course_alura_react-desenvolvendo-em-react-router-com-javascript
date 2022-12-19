import styles from "./NaoEncontrado.module.css";
import erro404 from "assets/erro_404.png";

import React from "react";
import BotaoPrincipal from "components/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  /* Esse hook do React Router DOM permite a navegação pelas rotas da navegação. */
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.botaoContainer}>
          <BotaoPrincipal tamanho={"lg"} onClick={() => navegar("/")}>
            Voltar
          </BotaoPrincipal>
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt={"Cachorro de óculos e vestido como humano."}
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;
