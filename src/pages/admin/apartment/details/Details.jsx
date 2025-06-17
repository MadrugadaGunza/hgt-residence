import styles from './Details.module.css';
import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    const { id } = useParams();

    React.useEffect(() => {
        const fetchApartmentDetails = async () => {
            try {
                setLoading(true);
                setError('');
                const response = await fetch(`http://localhost:8000/api/apartment/details/${id}`);

                if (!response.ok)  throw new Error('Erro ao buscar detalhes do apartamento');

                const result = await response.json();
                console.log('Detalhes do apartamento:', result.data);
                setData(result.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes do apartamento:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchApartmentDetails();
    }, [id]);

    if (loading) return <p style={{ padding: 16 }}>Carregando...</p>;
    if (error) return <p style={{ padding: 16 }}>{error}</p>;

    return (
        <section className={styles.details}>
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
                </div>
            </article>
        </section>
    )
}

export default Details
