import styles from './Footer.module.css'
import React from 'react'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <div>
                    <h5>HGT Reservetion</h5>
                </div>
                <div>
                    <h5>Contactos</h5>
                    <ul>
                        <li>geral@hgt.com</li>
                        <li>+244 935 990 951</li>
                    </ul>
                </div>
                <div>
                    <h5>Páginas</h5>
                    <ul>
                        <li>Apartamentos</li>
                        <li>Restaurante</li>
                        <li>Lazer</li>
                        <li>Estancionamento</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </section>
            <p>Todos os direitos reservados &copy; 2025 HGT Reservetion</p>
        </footer>
    )
}

export default Footer
