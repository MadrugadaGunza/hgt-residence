import styles from './Restaurante.module.css'
import React from 'react'
import { Beer, Utensils } from 'lucide-react'
// images
import image01 from '../../../assets/food-01.jpg'
import image02 from '../../../assets/food-02.jpg'
import image03 from '../../../assets/food-03.jpg'
import image04 from '../../../assets/food-04.jpg'

const Restaurante = () => {
    return (
        <section className={styles.restarant}>
            <h1>Restaurante</h1>
            <p>
                No coração da HGT, o Restaurante Sabor & Tradição oferece uma experiência gastronômica única,
                que combina o melhor da cozinha angolana com toques modernos e ingredientes frescos. Aqui, cada
                prato é preparado com carinho, respeitando os sabores autênticos e a cultura local. Do clássico
                mufete ao tradicional calulu, passando por grelhados suculentos e sobremesas artesanais, o nosso
                menu foi pensado para agradar todos os paladares — sempre com qualidade, hospitalidade e sabor de
                verdade.
            </p>
            <div className={styles.blockRestarant}>
                <article>
                    <h5>Cardapio do dia</h5>
                    <div>
                        <ul>
                            <li><Utensils className={styles.icon} />Mufete</li>
                            <li><Utensils className={styles.icon} />Calulu Peixe</li>
                            <li><Utensils className={styles.icon} />Filé de Carne Grelhada</li>
                            <li><Utensils className={styles.icon} />Pudim de leite</li>
                            <li><Utensils className={styles.icon} />Bacalhau com natas</li>
                            <li><Utensils className={styles.icon} />Frutas da época</li>
                        </ul>
                        <ul>
                            <li><Beer className={styles.icon} />Sumo natural de maracujá</li>
                            <li><Beer className={styles.icon} />Água fresca</li>
                            <li><Beer className={styles.icon} />Coca-Cola</li>
                            <li><Beer className={styles.icon} />Prite</li>
                            <li><Beer className={styles.icon} />Fanta</li>
                            <li><Beer className={styles.icon} />Água com gás</li>
                        </ul>
                    </div>
                </article>
                <div className={styles.blockImages}>
                    <img src={image01} alt="about-image" />
                    <img src={image02} alt="about-image" />
                    <img src={image03} alt="about-image" />
                    <img src={image04} alt="about-image" />
                </div>
            </div>
        </section>
    )
}

export default Restaurante
