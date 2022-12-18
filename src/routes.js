import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
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

        {/* Abaixo, estamos utilizando o recurso de "rotas aninhadas" do React Router DOM. Dessa forma, as rotas "Home" e "AboutMe" se tornaram rotas-filhas da rota "PaginaPadrao". A rota-pai vai escolher uma das rotas filhas para renderizar, de acordo com o caminho da URL.*/}

        {/* Ele renderizará da seguinte forma: */}

        {/* Na rota "/": */}
        {/* <PaginaPadrao>
              <Inicio />
            </PaginaPadrao> */}

        {/* Na rota "/about-me": */}
        {/* <PaginaPadrao>
              <AboutMe />
            </PaginaPadrao> */}

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Route>

        {/* Quando digitarmos uma URL desconhecida para o React Router DOM, ele renderizará o componente de "*". */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
