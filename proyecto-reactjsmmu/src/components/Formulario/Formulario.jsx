import React from 'react'

const Formulario = ({handleForm}) => {
  return (
    <div>
        <h2> Contactanos </h2>
        <div id='formcont' >
            <input id='input' type="text" name="Nombre" placeholder='Nombre'/>
            <input id='input' type="email" name="Email" placeholder='Email'/>
            <textarea id='textarea' name='Texto' placeholder='Escriba su Consulta Aqui!!!'/>
            <button type='submit' onClick={() => handleForm(document.querySelector('#textarea').value)}> Enviar </button>
        </div>
    </div>
  )
}

export default Formulario