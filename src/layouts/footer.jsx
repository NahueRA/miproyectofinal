import React from "react";
import Face1 from "../img/face5.png"
import LogoInsta from "../img/insta1.png"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            
                <p className="parrafoFooter">Todos los derechos reservados</p>
                <p className="parrafoFooter">Desarrollado por Nahuel Ramos</p>
                <div >
                    <a href="https://www.facebook.com/" className="btn btn-primary bg-light logo "><img src={Face1} className="logoimg" alt="Ir a facebook" /> </a>
                    <a href="https://www.instagram.com/" className="btn btn-primary bg-light logo "><img src={LogoInsta} className="logoimg" alt="Ir a Instagram" /> </a>
                </div>
            
        </footer>

    )
}



export default Footer;