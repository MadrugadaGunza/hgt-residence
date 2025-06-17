import styles from './Details.module.css'
import React from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');
    const { id } = useParams();

    React.useEffect(() => {
        const fetchApartmentDetails = async () => {
            try {
                setLoading(true);
                setError('');
                const response = await fetch(`http://localhost:8000/api/apartment/details/${id}`);
                if (!response.ok) throw new Error('Erro ao buscar detalhes do apartamento');
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do apartamento:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchApartmentDetails();
    }, [id, message]);

    const reserveApertment = async (id) => {
        const token = window.localStorage.getItem('token');
        const response = await fetch(`http://localhost:8000/api/reserve/${id}`, {
            method: 'POST',
            headers: { Authorization: `Beader ${token}` }
        });
        const result = await response.json();
        setMessage(result.message);
    }

    if (loading) return <p style={{ padding: 16 }}>Carregando...</p>;
    if (error) return <p style={{ padding: 16 }}>{error}</p>;

    return (
        <section className={styles.details}>
            {message === 'jwt malformed' && <p className={styles.messageError}>Você precisa entrar ou criar uma conta para reservar um apartamento</p>}
            {message && message !== 'jwt malformed' && (<p className={styles.message}>{message}</p>)}
            <article className={styles.detail}>
                <img src={`http://localhost:8000/uploads/${data.image}`} alt={data.name} />
                <div>
                    <h1>{data.name}</h1>
                    <p className={styles.description}>{data.description}</p>
                    <p>Preço: {`${data.price.toLocaleString('pt-AO')} KZ`}</p>
                    <p>
                        Disponivel: {data.availability === true ?
                            (<span className={styles.sim}>Sim</span>) :
                            (<span className={styles.nao}>Não</span>)}
                    </p>
                    {data.availability === true ? <button className='btn-reserva' onClick={() => reserveApertment(data._id)}>Reservar</button> : ''}
                </div>
            </article>
        </section>
    )
}

export default Details
