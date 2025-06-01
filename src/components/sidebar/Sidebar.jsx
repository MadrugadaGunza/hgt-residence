import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { UserContext } from '../../contexts/UserContext';
import React from 'react';
import { Car, Home, LayoutDashboard, LogOutIcon, School, Sofa, Users, Utensils } from 'lucide-react';

const Sidebar = () => {
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        userLogout();
        navigate('/');
    }
    return (
        <aside className={styles.sidebar}>
            <Link to='/dashboard' className={styles.logo}>
                <School size={32} style={{ marginRight: '8px' }} />HGT Reserve
            </Link>
            <ul>
                <li><NavLink to='/dashboard' end><LayoutDashboard className={styles.icon} />Dashboard</NavLink></li>
                <li><NavLink to='/dashboard/clients'><Users className={styles.icon} />Clientes</NavLink></li>
                <li><NavLink to='/dashboard/apartments'><Home className={styles.icon} />Apartamentos</NavLink></li>
                <li><NavLink to='/dashboard/restaurant'><Utensils className={styles.icon} />Restaurante</NavLink></li>
                <li><NavLink to='/dashboard/park'><Car className={styles.icon} />Estancionamento</NavLink></li>
                <li><NavLink to='/dashboard/razer'><Sofa className={styles.icon} />Lazeres</NavLink></li>
            </ul>
            <button className={styles.btnSair} onClick={handleLogout}>
                <LogOutIcon className={styles.icon} /> Saír
            </button>
        </aside>
    )
}

export default Sidebar
