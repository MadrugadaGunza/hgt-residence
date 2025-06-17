import styles from './Home.module.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../../components/banner/Banner';
// image food
import image01 from '../../../assets/food-01.jpg'
import image02 from '../../../assets/food-02.jpg'
import image03 from '../../../assets/food-03.jpg'
import image04 from '../../../assets/food-04.jpg'
// image lazer
import imageLazer01 from './../../../assets/lazer-01.jpg';
import imageLazer02 from './../../../assets/lazer-02.jpg';
import imageLazer03 from './../../../assets/lazer-03.jpg';
import imageLazer04 from './../../../assets/lazer-04.jpg';
import imageLazer05 from './../../../assets/lazer-05.jpg';
import imageLazer06 from './../../../assets/lazer-06.jpg';
// image parking
import imageParking01 from './../../../assets/parking-01.jpg'
import imageParking02 from './../../../assets/parking-02.jpg'
import imageParking03 from './../../../assets/parking-03.jpg'
import imageParking04 from './../../../assets/parking-07.jpg'
import imageParking05 from './../../../assets/parking-05.jpg'
import imageParking06 from './../../../assets/parking-06.jpg'
import { Beer, Utensils } from 'lucide-react';

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
                <img src={imageLazer01} alt="about-image" />
                <img src={imageLazer02} alt="about-image" />
                <img src={imageLazer03} alt="about-image" />
                <img src={imageLazer04} alt="about-image" />
                <img src={imageLazer05} alt="about-image" />
                <img src={imageLazer06} alt="about-image" />
            </div>
            {/* Estancionamento */}
            <h1 className={styles.restarantTitle}>Estancionamento</h1>
            <div className={styles.park}>
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

export default Home
