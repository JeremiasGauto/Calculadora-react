import React from 'react'

function Boton(props) {
    const isOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
        
    };


  return (
    <button className={`boton-contenedor ${isOperador(props.children)? 'operador' : null}`}>{props.children}</button>
  )
}

export default Boton