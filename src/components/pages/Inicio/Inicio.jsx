import React from 'react'
import {FaLocationArrow, FaSearchLocation, FaInstagram, FaFacebook, FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"

import Menubar from "../../Menubar/Menu"
import Box from '../../Box/Box'
import Footer from '../../Footer/Footer'

import JcLogo from "../../../assets/imgs/jclogo.png"

import "./Inicio.sass"

const Inicio = () => {
  return (
    <>
      <Menubar />
      <section className='inicio'>
        <div className="inicio-localizacao">
         <span><FaLocationArrow/>Campos dos Goytacazes - RJ - Brasil</span>
        <Link to="https://google.maps.com" target="_blank">
           <span> <FaSearchLocation className='search-icon'/> Nos Veja no maps</span>
        </Link>
        </div>
        <Box img={JcLogo} titulo="JC Soluções" texto="Bem vindos a JC - Soluções, aqui te garantimos a solução do seu problema, consertamos PCs, notebooks, fazemos Upgrade em seu desktop ou notebook, formatamos sua máquina com backup ou sem pelo mesmo preço, criamos seu site do zero no seu estilo, gerimos suas redes sociais com designs únicos e especiais e muito mais!" botao1="Saiba mais" link1="/sobre"/>
        <div className="redes-sociais">
          <h3>Redes Sociais</h3>
          <div>
            <Link target="_blank" to="https://www.facebook.com/groups/jcsolucoes/">
              <FaFacebook className="facebook" />
            </Link>

            <Link to="https://www.instagram.com/jcsolucoes12/" target="_blank">
              <FaInstagram className="instagram" />
            </Link>
            
            <Link to="https://github.com/Josuerx12" target="_blank">
            <FaGithub className="github"/>
            </Link>

          </div>
        </div>
      </section>
      <Footer />
    </>
    
  )
}

export default Inicio