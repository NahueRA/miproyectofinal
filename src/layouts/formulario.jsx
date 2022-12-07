import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./formulario.css"


function ContactForm() {
    const [state, handleSubmit] = useForm("xlevqrdb");
    if (state.succeeded) {
        return <h3><p>Gracias por tu consulta , en breve nos contactamos </p></h3>;
    }
    return (
        <div  >
            <form onSubmit={handleSubmit} className='formularioConsulta'>
                <label htmlFor="email" >
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='ingresa tu correo '
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label htmlFor="nombre" >
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder='ingresa tu nombre  '
                />
                <ValidationError
                    prefix="Text"
                    field="nombre"
                    errors={state.errors}
                />
                <label htmlFor="Apellido" >
                    Apellido:
                </label>
                <input
                    id="Apellido"
                    type="text"
                    name="Apellido"
                    placeholder=' Ingresa tu Apellido  '
                />
                <ValidationError
                    prefix="Text"
                    field="Apellido"
                    errors={state.errors}
                />
                <textarea
                    
                    id="message"
                    name="message"
                    placeholder=' Dejanos tu mensaje o consulta'
                    
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default ContactForm;