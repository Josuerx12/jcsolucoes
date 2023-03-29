import React from 'react'

import Menubar from "../../Menubar/Menu"
import Box from "../../Box/Box"

import JcLogo from "../../../assets/imgs/jclogo.png"
import FounderPic from "../../../assets/imgs/founderpic.jpg"
import './Sobre.sass'

const Sobre = () => {
  return (
    <>
      <Menubar />
      <section className='Sobre'>
        <Box titulo="Nossa História" img={JcLogo} texto="A JC-Soluções foi criada para ajudar todas as pessoas a qual possuem dificuldade com a tecnologia, com a ideia de ajudar a todos, desde uma pessoa, a uma empresa pequena, ou até mesmo uma grande empresa, nossa ideia e mostrar como a tecnologia é e pode ser de grande benefício a seu consumidor final seja você pessoa física ou jurídica, podendo assim expandir suas redes sociais ou negocio com um site da sua marca, da sua empresa mostrando ao mundo o seu produto e como consequência trazer um grande aumento de suas vendas, publico e outros milhares de benefícios do meio digital." botao1="Contato" link1="https://api.whatsapp.com/send?phone=5522997979633&text=Tire%20suas%20duvidas,%20ou%20fa%C3%A7a%20um%20or%C3%A7amento%20mais%20rapido%20aqui%20no%20whattsapp%20da%20JC-Solu%C3%A7%C3%B5es!" target1="_blank"/>
        <hr />
        <h2>Colaboradores</h2>
        <Box img={FounderPic} titulo="Josue Carvalho" subtitulo="Fundador da JC-Soluções - TI - Desenvolvedor-Front-End" texto="Olá, me chamo Josué, hoje venho atuando na área da Tecnologia da Informação e adoro resolver problemas da área, atualmente estudando as tecnologias de desenvolvimento Web e atualmente estou tentando migrar para área de Desenvolvimento de Softwares e sites, essa pagina foi criada por mim desde o zero com a intenção de mostrar minhas habilidades como desenvolvedor Web e também poder ajudar pessoas que necessitam de ajuda com seus problemas tecnológicos realizando tarefas da área de Gestão de TI, como formatar um (Desktop/Notebook), fazer upgrades(Melhorar) os equipamentos para maior desempenho e funcionamento, montagem de computadores gamers e para trabalhos, instalação e configuração de pontos de rede e entre outras atividades de um TI, se você estiver precisando de algum desses serviços é só fazer um contato indo em menu e clicando no botão de orçamento. Caso queria me contratar para sua empresa meu currículo abaixo!" botao1="Download CV" link1="https://drive.google.com/" target1="_blank"/>
      </section>
    </>
    
  )
}

export default Sobre