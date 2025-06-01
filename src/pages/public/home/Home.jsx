import styles from './Home.module.css'
import React from 'react'
import Banner from '../../../components/banner/Banner';
import image from '../../../assets/hgt-banner-compress.jpg'

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
            {/* about */}
            <div className={styles.about}>
                <img src={image} alt="about-image" />
                <article>
                    <h1>Sobre Nós</h1>
                    <p>
                        Somos uma empresa comprometida em oferecer experiências completas de conforto, lazer e praticidade.
                        Disponibilizamos uma variedade de apartamentos para alugar, restaurantes acolhedores, bares modernos,
                        parques de estacionamento seguros e zonas de lazer para toda a família. A nossa missão é proporcionar
                        qualidade de vida aos nossos clientes, com soluções que atendem diferentes estilos, necessidades e
                        orçamentos — tudo num só lugar.
                    </p>
                </article>
            </div>
            {/* apartmensts */}
            <h1 className='home-title'>Nossos Apartamentos</h1>
            <div className="block-apartments">
                {data ? data.map((apartment) => {
                    const formattedPrice = `${apartment.price.toLocaleString('pt-AO')} KZ`;

                    return (
                        <article key={apartment.id} className="apartment">
                            <img src={`http://localhost:8000/uploads/${apartment.image}`} alt={apartment.name} />
                            <div className="body">
                                <h2>{apartment.name}</h2>
                                <p className='description'>{apartment.description}</p>
                                <p><span className='strong'>Preço:</span> {formattedPrice}</p>
                                <p><span className='strong'>Disponível:</span> {apartment.availability ? 'Sim' : 'Não'}</p>
                            </div>
                        </article>
                    );
                }) : (<p>Loading apartments...</p>)}
            </div>
        </section>
    )
}

export default Home
