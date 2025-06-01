import { Home, HomeIcon, HousePlus, Users } from 'lucide-react';
import styles from './Dashboard.module.css'
import React from 'react';

const Dashboard = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/apartment');
                if (!response.ok) throw new Error('Erro na resposta da rede');
                const { data } = await response.json();
                setData(data);
            } catch (error) {
                console.error('Erro na requisição: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className={styles.dashboard}>
            <div className={styles.blockCards}>
                <article className={styles.card}>
                    <span>
                        <Users className={styles.icon} />
                    </span>
                    <div>
                        <p>Clientes</p>
                        <h5>100</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <Home className={styles.icon} />
                    </span>
                    <div>
                        <p>Apartamentos</p>
                        <h5>{data.length}</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <HousePlus className={styles.icon} />
                    </span>
                    <div>
                        <p>Reservas</p>
                        <h5>350</h5>
                    </div>
                </article>
            </div>
            <div className={styles.content}>
                <h1><Home className={styles.icon} /> Apartamentos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Disponível</th>
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

export default Dashboard
