import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    /* O "BrowserRouter" é um componente do React Router DOM que permitirá a utilização de mais alguns componentes dessa biblioteca, para que o gerenciamento de rotas seja feito. */
    <BrowserRouter>
      {/* Estamos compartilhando o componente "Menu" entre todas as páginas da aplicação. */}
      <Menu />

      {/* Dentro do componente "Routes", devemos inserir as páginas de nossa aplicação. */}
      <Routes>
        {/* Dentro do componente "Route", o "path" é o caminho para uma página ser renderizada, e o "element" é o componente que será renderizado quando acessarmos o caminho que está no atributo "path". */}
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />

        {/* Quando digitarmos uma URL desconhecida para o React Router DOM, ele renderizará o componente de "*". */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
