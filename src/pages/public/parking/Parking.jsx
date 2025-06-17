import styles from './Parking.module.css'
import React from 'react'
// image parking
import imageParking01 from './../../../assets/parking-01.jpg'
import imageParking02 from './../../../assets/parking-02.jpg'
import imageParking03 from './../../../assets/parking-03.jpg'
import imageParking04 from './../../../assets/parking-07.jpg'
import imageParking05 from './../../../assets/parking-05.jpg'
import imageParking06 from './../../../assets/parking-06.jpg'

const Parking = () => {
    return (
        <section className={styles.parking}>
            <h1>Estancionamento</h1>
            <p>
                Procurando um lugar seguro, acessível e bem localizado para deixar o seu veículo? 
                No SeguraPark, você encontra o espaço ideal para estacionar com total tranquilidade 
                e confiança. Com vigilância 24 horas, acesso controlado, iluminação adequada e atendimento 
                eficiente, oferecemos muito mais que uma vaga — oferecemos comodidade, segurança e 
                pontualidade para o seu dia a dia.
            </p>
            <div className={styles.blockParking}>
                <img src={imageParking01} alt="about-image" />
                <img src={imageParking02} alt="about-image" />
                <img src={imageParking03} alt="about-image" />
                <img src={imageParking04} alt="about-image" />
                <img src={imageParking05} alt="about-image" />
                <img src={imageParking06} alt="about-image" />
            </div>
        </section>
    )
}

export default Parking
