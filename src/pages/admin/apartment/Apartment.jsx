import React from 'react';
import styles from './Apartment.module.css';
import { Link } from 'react-router-dom';
import { Eye, Home, HousePlus, Plus } from 'lucide-react';

const Apartment = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/apartment');
                if (!response.ok) throw new Error('Network response was not ok');
                const { data } = await response.json();
                console.log(data)
                setData(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    const availableApartments = data.filter(item => item.availability === false).length;


    return (
        <section className={styles.apartment}>
            <div className={styles.blockCards}>
                <article className={styles.card}>
                    <span>
                        <HousePlus className={styles.icon} />
                    </span>
                    <div>
                        <p>Reservas</p>
                        <h5>350</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <Home className={styles.icon} />
                    </span>
                    <div>
                        <p>Livres</p>
                        <h5>350</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <HousePlus className={styles.icon} />
                    </span>
                    <div>
                        <p>Reservas</p>
                        <h5>{availableApartments}</h5>
                    </div>
                </article>
            </div>

            <div className={styles.content}>
                <div className={styles.blockTitle}>
                    <h1><Home className={styles.icon} /> Apartamentos</h1>
                    <Link to='/dashboard/apartments/register' className={styles.button}>
                        <Plus className={styles.icon} />Cadatrar
                    </Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th style={{ width: '5rem' }}>Disponível</th>
                            <th style={{ width: '3rem' }}>Acções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? data.map((apartment) => {
                            const formattedPrice = `${apartment.price.toLocaleString('pt-AO')} KZ`;
                            return (
                                <tr key={apartment.id}>
                                    <td>{apartment.name}</td>
                                    <td>{formattedPrice}</td>
                                    <td className={apartment.availability ? styles.sim : styles.nao}>
                                        <span className={apartment.availability ? styles.simBack : styles.naoBack}>
                                            {apartment.availability ? 'Sim' : 'Não'}
                                        </span>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/apartments/details/${apartment._id}`}>
                                            <Eye />
                                        </Link>
                                    </td>
                                </tr>
                            );
                        }) : (
                            <tr>
                                <td colSpan="3">Carregando apartamentos...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default Apartment;