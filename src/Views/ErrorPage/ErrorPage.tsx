import React from 'react'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <div className='div_error'>
      <h1 className='error_title'>404</h1>
      <h1 className='error_subtitle'>Ups! Página no encontrada.</h1>
      <p className='error_description'>La página que estás buscando no ha podido ser encontrada.</p>
    </div>
  )
}
