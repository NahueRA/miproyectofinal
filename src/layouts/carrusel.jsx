import React from 'react';
import "./carrusel.css"


import Carousel from 'react-bootstrap/Carousel';

function CarruselBody() {
    return (
        <>
            <h1>Personajes y Dragones destacados</h1>
            <Carousel className='tamano'>
                <Carousel.Item>
                    <img
                        className="dragon"
                        src="https://pbs.twimg.com/media/FaMwx8GXkAQPcAU.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dragón Caxeres</h3>
                        <p className='parrafo'>Caraxes, también llamado «Blood Wyrm», es un dragón macho rojo montado por el príncipe Daemon Targaryen</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="dragon"
                        src="https://www.eluniversal.com.mx/sites/default/files/2022/09/03/daemon_targaryen_el_villano_de_la_casa_del_dragon.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Daemon  Targaryen</h3>
                        <p className='parrafo' >El príncipe Daemon Targaryen fue el segundo hijo del príncipe Baelon Targaryen y su hermana esposa, la princesa Alyssa Targaryen. Fue hermano del rey Viserys I Targaryen. Fue jinete del dragón Caraxes</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="dragon"
                        src="https://cdn.ondavasca.com/724223a3-6f2b-4937-b6a8-96362ea50c04_16-9-discover_1200x675.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Rhaenyra Targaryen</h3>
                        <p className='parrafo'>La reina Rhaenyra Targaryen fue la hija mayor del rey Viserys I Targaryen y su primera esposa, la reina Aemma Arryn.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="dragon"
                        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/4URRLE64CFB7DLP62IXFETPQNI.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Aemond targaryen</h3>
                        <p className='parrafo'> El príncipe Aemond Targaryen, apodado Aemond el Tuerto, fue hijo del rey Viserys I Targaryen y su segunda esposa, la reina Alicent Hightower</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="dragon"
                        src="https://estereofonica.com/wp-content/uploads/2022/08/conoce-4-dragones-de-house-of-the-dragon-en-su-primera-temporada_aegon-i-targaryen-en-balerion-by-jordi-gonz3f.webp"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Dragón Vhagar</h3>
                        <p className='parrafo'>   Vhagar es el dragón vivo más grande y más curtido en batalla , montada por Laena Velaryon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="dragon"
                        src="https://estereofonica.com/wp-content/uploads/2022/08/conoce-4-dragones-de-house-of-the-dragon-en-su-primera-temporada_syrax-hotd-1200x675.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Dragón Syrax</h3>
                        <p className='parrafo'>
                            Syrax es un dragón amarillo montado por Rhaenyra Targaryen, la hija mayor y única hija del rey Viserys

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarruselBody;