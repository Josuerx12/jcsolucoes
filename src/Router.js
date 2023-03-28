import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'

import Inicio from "./componets/pages/Inicio/Inicio"
import Sobre from "./componets/pages/Sobre/Sobre"
import Trabalhos from "./componets/pages/Trabalhos/Trabalhos"
import Contato from "./componets/pages/Contato/Contato"

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Inicio />} path="/"/>
                <Route component={<Sobre />} path="/sobre"/>
                <Route component={<Trabalhos />} path="/trabalhos"/>
                <Route component={<Contato />} path="/contato"/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router