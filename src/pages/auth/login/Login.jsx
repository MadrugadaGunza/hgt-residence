import React from 'react'
import { UserContext } from '../../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { userLogin } = React.useContext(UserContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ email, password });
    }

    return (
        <div style={{ padding: '90px 125px' }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type='email' id='email' name='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type='password' id='password' name='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
