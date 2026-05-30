import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Perfil from "./pages/Perfil";
import Metodologias from "./pages/Metodologias";
import Tecnologias from "./pages/Tecnologias";
import Proyectos from "./pages/Proyectos";
import ConsumoApi from "./pages/ConsumoApi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/metodologias" element={<Metodologias />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/api" element={<ConsumoApi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
