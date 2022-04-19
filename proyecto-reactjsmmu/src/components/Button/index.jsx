import React from 'react'

const Button = (props) => {
    //       Desestructuración

    const {txt : txtinfo} = props;

    /*       Forma Normal

    const txtinfo = props.texto;*/
    
  return (
    <button>{txtinfo ? txtinfo : 'Info Sobre MI'}</button>
  )
}

export default Button;