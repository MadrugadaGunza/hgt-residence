import styles from './Apartments.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Apartments = () => {
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
        <section className={styles.apartments}>
            <h1 className={styles.title}>Nossos Apartamentos</h1>
            <div className={styles.apartment}>
                {data.length > 0 ? data.map((apartment) => {
                    const formattedPrice = `${apartment.price.toLocaleString('pt-AO')} KZ`;

                    return (
                        <article key={apartment._id} className="apartment">
                            <img src={`http://localhost:8000/uploads/${apartment.image}`} alt={apartment.name} />
                            <div className="body">
                                <Link to={`/apartments/details/${apartment._id}`}>{apartment.name}</Link>
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
        </section>
    )
}

export default Apartments
