import React from 'react'

import cargandologo from "../Media/1635813261802.png"

import "./Loading.css"

function Loading() {
  return (
    <div className='conte-spinner'>
        <div className='spinner'> <img src={cargandologo} alt="logocargando" /></div>

        <p> Cargando ...</p>
    </div>
  )
}

export default Loading