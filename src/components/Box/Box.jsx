import React from 'react'
import { Link } from 'react-router-dom'

import './Box.sass'

const box = (props) => {
  return (
    <div className='Box'>
        <img src={props.img} alt={props.titulo}/>
        <h3>{props.titulo}</h3>
        <h5>{props.subtitulo}</h5>
        <p>{props.texto}</p>
        <div className="buttons">
            <Link to={props.link1} target={props.target1}>{props.botao1}</Link>
            {/* <Link to={props.link2} target={props.target2}>{props.botao2}</Link> */}
        </div>
    </div>
  )
}

export default box