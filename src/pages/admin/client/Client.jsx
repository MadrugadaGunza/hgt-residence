import styles from './Client.module.css';
import React from 'react';
import { Users } from 'lucide-react';

const Apartment = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/users/client');
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

    return (
        <section className={styles.apartment}>
            <div className={styles.content}>
                <div className={styles.blockTitle}>
                    <h1><Users className={styles.icon} /> Clients</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>BI / Passaporte</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? data.map((client) => {
                            return (
                                <tr key={client.id}>
                                    <td>{client.name}</td>
                                    <td>{client.email}</td>
                                    <td>{client.tel}</td>
                                    <td>{client.bi_passport}</td>
                                </tr>
                            );
                        }) : (
                            <tr>
                                <td colSpan="4">Carregando lista de clientes...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Apartment;