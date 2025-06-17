import styles from './Login.module.css'
import React from 'react'
import { UserContext } from '../../../contexts/UserContext';
import Button from './../../../components/form/button/Button';

const Login = () => {
    const { userLogin } = React.useContext(UserContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ email, password });
    }

    return (
        <section className={styles.login}>
            <h1>Login</h1>
            <p>Preencha todos os campos corretamente</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type='email' id='email' name='email' placeholder='Digite o seu email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type='password' id='password' name='password' placeholder='Digite a sua senha'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <Button>Entrar</Button>
            </form>
        </section>
    )
}

export default Login
