// styles
import React from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';

const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();

    const isAdmin = data && data.role && data.role.name === 'admin';
    const isUser = data && data.role && data.role.name === 'user';

    const handleLogout = () => {
        userLogout();
        navigate('/');
    }

    return (
        <header className={styles.header}>
            <Link to='/' className={`${styles.logo} strong`}>HGT Reservetion</Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/apartments'>Apartamentos</Link></li>
                <li><Link to='/restaurant'>Restaurante</Link></li>
                <li><Link to='/razer'>Lazer</Link></li>
                <li><Link to='/park'>Estancionamento</Link></li>
                <li><Link to='/contact'>Contacto</Link></li>
            </ul>
            {data ? (
                <Link to={isAdmin ? '/dashboard' : isUser ? '/profile' : '/'} className={styles.login}>
                    {data.name.split(' ')[0]}
                    <button onClick={handleLogout}>Sair</button>
                </Link>
            ) : (
                <Link to='/auth/login' className={styles.login}>Login</Link>
            )}
        </header>
    )
}

export default Header
