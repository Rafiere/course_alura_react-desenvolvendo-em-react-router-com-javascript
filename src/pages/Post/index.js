import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import "./post.css";

import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

const Post = () => {
  /* Esse hook é utilizado para obtermos os parâmetros que estão sendo passados pela URL para essa página. É um hook do React Router DOM. */

  const parametros = useParams();

  /* A constante "post" terá o post em que o ID dela foi passado na URL. */
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  /* Se o post não for encontrado, apresentaremos uma mensagem para o usuário. */
  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                {/* O componente "ReactMarkdown" faz parte de uma biblioteca que consegue renderizar um texto que está no formato Markdown. */}
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
