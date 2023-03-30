import React from 'react'
import Menubar from '../../Menubar/Menu'

import './Contato.sass'
import Footer from '../../Footer/Footer'

const Contato = () => {
  return (
    <>
      <Menubar/>
      <section className='Contato'>
        <div className="Contato-container">
          <h3>Contato</h3>
          <div className="email">
            <h4>Entre em contato por e-mail sane todas suas duvidas ou faça um orçamento!</h4>
            <span>Nosso email: </span><a href="mailto:jcsolucoes12@hotmail.com" target='_blank' rel='noreferrer'>
              jcsolucoes12@hotmail.com
            </a>
          </div>
          <div className="telefone">
            <h4>Entre em contato por nosso whatsapp ou faça uma ligação!</h4>
            <span>Nosso numero: </span><a href="https://api.whatsapp.com/send?phone=5522997979633&amp;text=Tire%20suas%20duvidas,%20ou%20fa%C3%A7a%20um%20or%C3%A7amento%20mais%20rapido%20aqui%20no%20whattsapp%20da%20JC-Solu%C3%A7%C3%B5es!" target='_blank' rel='noreferrer' >(22) 997979633</a>
          </div>
          <div className="fazerorcamento">
            <h4>Para fazer um orçamento clique no botão fazer orçamento do menu ou o botão abaixo!</h4>
            <a href="https://forms.office.com/r/jifUn51Aph" target='_blank' rel='noreferrer'>Fazer orçamento!</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contato