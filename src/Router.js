import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'

import Inicio from "./components/pages/Inicio/Inicio"
import Sobre from "./components/pages/Sobre/Sobre"
import Trabalhos from "./components/pages/Trabalhos/Trabalhos"
import Contato from "./components/pages/Contato/Contato"

const Router = () => {
  return (
    <>
        <BrowserRouter basename="/jcsolucoes/">
            <Routes>
                <Route element={<Inicio />} path="/"/>
                <Route element={<Sobre />} path="/Sobre"/>
                <Route element={<Trabalhos />} path="/Trabalhos"/>
                <Route element={<Contato />} path="/Contato"/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router