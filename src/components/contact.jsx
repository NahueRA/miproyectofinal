import React from 'react'
import ContactForm from "../layouts/formulario"
import "./contacto.css"


const Formulario = () => {
    return (
        <div className='edicionformulario'>
            <div className='edicion formulario1'>
                <h1>DEJA TU CONSULTA</h1>

                <ContactForm />
            </div>
        </div>
    )
}

export default Formulario