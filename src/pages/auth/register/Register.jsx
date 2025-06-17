import styles from './Register.module.css'
import React from 'react'
import Button from '../../../components/form/button/Button'
import { UserContext } from '../../../contexts/UserContext';

const Register = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [bi_passport, setBi_passport] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [tel, setTel] = React.useState('');
    const [message, setMessage] = React.useState('');
    const { userLogin } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, bi_passport, password, tel })
        });
        const result = await response.json();
        console.log(result);
        if (result.error) {
            setMessage(result.message);
            setTimeout(() => setMessage(''), [3000]);
        }
        await userLogin({ email, password });
    }

    return (
        <section className={styles.login}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome completo</label>
                    <input type='text' id='name' name='name' placeholder='Digite o seu nome completo'
                        value={name} onChange={({ target }) => setName(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>BI ou Passaporte</label>
                    <input type='text' id='bi_passport' name='bi_passport' placeholder='Digite o seu número do BI ou passaporte'
                        value={bi_passport} onChange={({ target }) => setBi_passport(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Número de telefone</label>
                    <input type='text' id='tel' name='tel' placeholder='Digite o seu número de telefone'
                        value={tel} onChange={({ target }) => setTel(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type='email' id='email' name='email' placeholder='Digite o seu email'
                        value={email} onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type='password' id='password' name='password' placeholder='Digite a sua senha'
                        value={password} onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                {message && <p className={styles.error}>{message}</p>}
                <Button>Criar conta</Button>
            </form>
        </section>
    )
}

export default Register
