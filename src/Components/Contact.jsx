import React from 'react'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import grupoeficiente from "./imgs/grupoeficiente.jpg"

const Contact = () => {
  return (
    <>
    <div>
      <h1 className='titulo-redes'>Si tienes alguna pregunta, comentario o
        simplemente quieres comenzar a planificar tu pastel perfecto, no dudes
        en ponerte en contacto con nosotros. </h1>
    <div className='texto-equipo'>
      <div className='h1contacto'>
      <h1 > Nuestro equipo está listo para
        escucharte y ayudarte en todo lo que necesites para tus momentos
        verdaderamente inolvidables!</h1>
        </div>
        <div className='imgcontacto'>
        <img  src={grupoeficiente} alt='grupo de personas laborando'/>
        </div>
        </div>
        </div>
        
      <div className='box-redes'>
        <h2>Siguenos en nuestras Redes Sociales</h2>
      <div className='box-redes' >
         <a href="#" className='social'><FaFacebook /> Facebook</a>
         <a href="#" className='social'><FaInstagramSquare />Instagram</a>
         <a href="#" className='social'><FaSquareXTwitter />Twitter</a>
      </div>
       </div>
    </>
  )
}

export default Contact
