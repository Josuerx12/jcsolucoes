import React from 'react'
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useState } from 'react'

import "./Menu.sass"

const Menu = () => {
  const [open, setOpen] = useState(true)

  function toggleMenu () {
    setOpen(!open)
  }

  console.log (open)
  return (
    <>
      <div className='menu'>
        <div className="menu-logo">
          <h1>JC <span>Soluções</span></h1>
        </div>
        <div className={open ? "menu-list" : "menu-mobile"}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/trabalhos">Trabalhos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="https://forms.office.com/r/jifUn51Aph" target='_black'>Orçamento</Link>
            </li>
          </ul>
        </div>
        <FaBars onClick={toggleMenu} className='menu-icon'/>
      </div>
    </>
  )
}

export default Menu