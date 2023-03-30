import React from 'react'

import './Trabalho.sass'

const Trabalho = (props) => {
  return (
    <div className="container">
        <div className="trabalho">
            <h3>{props.titulo}</h3>
            <img src={props.img} alt="Trabalho img" />
            <p>{props.descricao}</p>
            <div>
                <a href={props.url1} target={props.target1} rel='noreferrer'>{props.botao1}</a>
                <a href={props.url2} target={props.target2} rel='noreferrer'>{props.botao2}</a>
            </div>
        </div>

    </div>
  )
}

export default Trabalho