// styles
import styles from './Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
import { User } from 'lucide-react';

const Header = () => {
    const { data } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <Link to='/' className={`${styles.logo} strong`}>HGT Reservetion</Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/apartments'>Apartamentos</Link></li>
                <li><Link to='/restaurant'>Restaurante</Link></li>
                <li><Link to='/park'>Estancionamento</Link></li>
            </ul>
            {data ? (<Link to='/profile' className={styles.login}>
                <User size={22} />
                {data.name.split(' ')[0]}
            </Link>) : (
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Link to='/auth/login' className={styles.login}>Entrar</Link>
                    <Link to='/auth/register' className={styles.criarConta}>Criar Conta</Link>
                </div>
            )}
        </header>
    )
}

export default Header
