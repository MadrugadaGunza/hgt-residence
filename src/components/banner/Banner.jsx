import { Headset } from 'lucide-react'
import styles from './Banner.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1>HGT – Viva a Experiência Completa!</h1>
            <p>
                A HGT combina conforto, lazer e conveniência. Hospede-se em nossos
                apartamentos e aproveite restaurantes, bar, zona de lazer, estacionamento
                e muito mais. Viva a experiência HGT!
            </p>
            <Link to='/contact'><Headset className={styles.icon} /> Contactar</Link>
        </section>
    )
}

export default Banner
