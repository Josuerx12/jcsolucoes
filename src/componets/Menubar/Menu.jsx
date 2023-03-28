import React from 'react'
import {FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'


import "./Menu.sass"

const Menu = () => {
  return (
    <>
      <div className='menu'>
        <div className="menu-logo">
          JC-Soluções
        </div>
        <div className="menu-list">
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
              <Link to="" target='_black'>Orçamento</Link>
            </li>
          </ul>
        </div>
      </div>
      <FaBars className='menu-icon'/>
    </>
  )
}

export default Menu