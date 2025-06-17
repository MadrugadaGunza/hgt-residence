// styles
import styles from './Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
import { Apple, Menu, User } from 'lucide-react';

const Header = () => {
    const { data } = React.useContext(UserContext);
    const [mobile, setMobile] = React.useState(false);

    return (
        <React.Fragment>
            <header className={styles.header}>
                <Link to='/' className={`${styles.logo} strong`}>HGT Reservetion</Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/apartments'>Apartamentos</Link></li>
                    <li><Link to='/restaurant'>Restaurante</Link></li>
                    <li><Link to='/parking'>Estancionamento</Link></li>
                </ul>
                {data ? (<Link to='/profile' className={styles.login}>
                    <User size={22} />
                    {data.name.split(' ')[0]}
                </Link>) : (
                    <div className={styles.blockLogin}>
                        <Link to='/auth/login' className={styles.login}>Entrar</Link>
                        <Link to='/auth/register' className={styles.criarConta}>Criar Conta</Link>
                    </div>
                )}
                <button className={styles.btnMobile} onClick={() => setMobile(!mobile)}>
                    <Menu size={20} />
                </button>
            </header>
            {mobile && (
                <section className={`${mobile && styles.blockMobile}`}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/apartments'>Apartamentos</Link></li>
                        <li><Link to='/restaurant'>Restaurante</Link></li>
                        <li><Link to='/parking'>Estancionamento</Link></li>
                    </ul>
                    {data ? (<Link to='/profile' className={styles.login}>
                        <User size={22} />
                        {data.name.split(' ')[0]}
                    </Link>) : (
                        <div className={styles.blockLoginMobile}>
                            <Link to='/auth/login' className={styles.login}>Entrar</Link>
                            <Link to='/auth/register' className={styles.login}>Criar Conta</Link>
                        </div>
                    )}
                </section>
            )}
        </React.Fragment>
    )
}

export default Header
