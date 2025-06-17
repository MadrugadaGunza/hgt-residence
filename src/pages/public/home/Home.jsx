import styles from './Home.module.css'
import React from 'react'
import Banner from '../../../components/banner/Banner';
import image from '../../../assets/hgt-banner-compress.jpg'
import image01 from '../../../assets/rest01.jpg'
import image02 from '../../../assets/rest02.jpg'
import image03 from '../../../assets/rest03.jpg'
import image04 from '../../../assets/rest04.jpg'
import { Beer, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/apartment');
                if (!response.ok) throw new Error('Network response was not ok');
                const { data } = await response.json();
                setData(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section>
            <Banner />
            {/* apartmensts */}
            <h1 className='home-title'>Nossos Apartamentos</h1>
            <div className="block-apartments">
                {data ? data.slice(0, 6).map((apartment) => {
                    const formattedPrice = `${apartment.price.toLocaleString('pt-AO')} KZ`;

                    return (
                        <article key={apartment._id} className="apartment">
                            <img src={`http://localhost:8000/uploads/${apartment.image}`} alt={apartment.name} />
                            <div className="body">
                                <Link to={`apartments/details/${apartment._id}`}>{apartment.name}</Link>
                                <p className='description'>
                                    {apartment.description.length > 188 ? `${apartment.description.slice(0, 188)}...` : apartment.description}
                                </p>
                                <p><span className='strong'>Preço:</span> {formattedPrice}</p>
                                <p><span className='strong'>Disponível:</span> {apartment.availability ? 'Sim' : 'Não'}</p>
                            </div>
                        </article>
                    );
                }) : (<p>Carregando apartamentos...</p>)}
            </div>
            {/* Restaurante */}
            <h1 className={styles.restarantTitle}>Restaurante</h1>
            <div className={styles.restarant}>
                <article>
                    <h5>Cardapio do dia</h5>
                    <div>
                        <ul>
                            <li><Utensils className={styles.icon} />Mufete</li>
                            <li><Utensils className={styles.icon} />Calulu</li>
                            <li><Utensils className={styles.icon} />Filé</li>
                            <li><Utensils className={styles.icon} />Mufete</li>
                            <li><Utensils className={styles.icon} />Calulu</li>
                            <li><Utensils className={styles.icon} />Filé</li>
                            <li><Utensils className={styles.icon} />Mufete</li>
                        </ul>
                        <ul>
                            <li><Beer className={styles.icon} />Mufete</li>
                            <li><Beer className={styles.icon} />Calulu</li>
                            <li><Beer className={styles.icon} />Filé</li>
                            <li><Beer className={styles.icon} />Mufete</li>
                            <li><Beer className={styles.icon} />Calulu</li>
                            <li><Beer className={styles.icon} />Filé</li>
                            <li><Beer className={styles.icon} />Mufete</li>
                        </ul>
                    </div>
                </article>
                <div>
                    <img src={image01} alt="about-image" />
                    <img src={image02} alt="about-image" />
                    <img src={image03} alt="about-image" />
                    <img src={image04} alt="about-image" />
                </div>
            </div>
            {/* Lazer */}
            <h1 className={styles.restarantTitle}>Lazer</h1>
            <div className={styles.lazer}>
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
            </div>
            {/* Estancionamento */}
            <h1 className={styles.restarantTitle}>Estancionamento</h1>
            <div className={styles.park}>
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
                <img src={image} alt="about-image" />
            </div>
        </section>
    )
}

export default Home
