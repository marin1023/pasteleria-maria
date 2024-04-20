import React from 'react'
import { IoIosMail } from "react-icons/io";
import { ImWhatsapp } from "react-icons/im";
const Footer = () => {
  return (
    <>
    <div className='contenedor-footer'>
        <h2>CONTÁCTENOS</h2>
        <div className='boxenlace'>
        <a className="socialf" href='#'><IoIosMail />E-Mail</a>
        <a className="socialf" href='#'><ImWhatsapp />Whatsapp</a>
        </div>
         <p className='parrafo-footer'>Tortas Maria copyright 2024 © Todos los derechos reservados</p>
    </div>
    </>
  )
}

export default Footer