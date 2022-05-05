import React from 'react'
import "./Loading.css"

function Loading() {
  return (
    <div className='loading'>
        <p className='p-loading'>Cargando...</p>
        <p className='p-loading'>{"=)"}</p>
    </div>
  )
}

export default Loading