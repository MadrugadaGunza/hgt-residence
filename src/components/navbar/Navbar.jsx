import styles from './Navbar.module.css';
import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CircleUserRound } from 'lucide-react';

const Navbar = () => {
    const { data } = React.useContext(UserContext);

    return (
        <nav className={styles.nav}>
            {data && <p><CircleUserRound className={styles.icon} />{data.name}</p>}
        </nav>
    )
}

export default Navbar;