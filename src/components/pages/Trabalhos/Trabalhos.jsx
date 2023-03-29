import React from 'react'
import Menubar from '../../Menubar/Menu'
import Trabalho from '../../Trabalho/Trabalho'

import EmBreve from '../../../assets/imgs/em-breve.jpg'
import Footer from '../../Footer/Footer'

import './Trabalhos.sass'

const Trabalhos = () => {
  return (
    <div className='trabalhos'>
      <Menubar />
      <section className="trabalhos-container">
        <Trabalho titulo="Portfolio" img={EmBreve} descricao="Projeto Desenvolvido em React.js completamente do zero, com intuito de demonstrar minhas praticas na area de desenvolvimento de softwares!" botao1="Visualizar" url1="https://josuerx12.github.io/portifolio/" target1="_blank" botao2="Código" url2="https://github.com/Josuerx12/portifolio" target2="_blank"/>
        <Trabalho titulo="Portfolio" img={EmBreve} descricao="Projeto Desenvolvido em React.js completamente do zero, com intuito de demonstrar minhas praticas na area de desenvolvimento de softwares!" botao1="Visualizar" url1="https://josuerx12.github.io/portifolio/" target1="_blank" botao2="Código" url2="https://github.com/Josuerx12/portifolio" target2="_blank"/>
        <Trabalho titulo="Portfolio" img={EmBreve} descricao="Projeto Desenvolvido em React.js completamente do zero, com intuito de demonstrar minhas praticas na area de desenvolvimento de softwares!" botao1="Visualizar" url1="https://josuerx12.github.io/portifolio/" target1="_blank" botao2="Código" url2="https://github.com/Josuerx12/portifolio" target2="_blank"/>
      </section>
      <Footer />
    </div>
  )
}

export default Trabalhos