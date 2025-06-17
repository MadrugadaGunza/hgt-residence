import styles from './Profile.module.css'
import React from 'react'
import { UserContext } from '../../../contexts/UserContext';
import Image from '../../../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import { LogOutIcon } from 'lucide-react';

const Profile = () => {
    const { data, userLogout } = React.useContext(UserContext);
    const [apartments, setApartments] = React.useState();
    const navigate = useNavigate();

    const handleLogout = () => {
        userLogout();
        navigate('/');
    }

    React.useEffect(() => {
        const fetchApartmentsClient = async () => {
            const token = window.localStorage.getItem('token');
            const response = await fetch('http://localhost:8000/api/apartment/client', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}`, },
            });
            const result = await response.json();
            setApartments(result.data);
            console.log(result.data)
        }
        fetchApartmentsClient();
    }, []);

    return (
        <section className={styles.profile}>
            <header className={styles.header}>
                <img src={Image} alt="image profile" />
            </header>
            <article>
                <h1>{data.name}</h1>
                <p><span className='strong'>Email:</span> {data.email}</p>
                <p><span className='strong'>BI / Passaporte:</span> {data.bi_passport}</p>
                <p><span className='strong'>Telefone:</span> {data.tel}</p>
                <button className={styles.button} onClick={handleLogout}><LogOutIcon size={20} />Sair</button>
            </article>

            <h1 className={styles.title}>Reservas</h1>
            <div className={styles.blockApartments}>
                {apartments && apartments.map((item) => (
                    <div key={item?.id} className={styles.card}>
                        <img src={`http://localhost:8000/uploads/${item.image}`} alt={item?.name} />
                        <h2>{item.name}</h2>
                    </div>
                ))}
                {apartments && apartments.length === 0 && <h3>Você não tem reserva, efectue uma</h3>}
            </div>
        </section>
    )
}

export default Profile
