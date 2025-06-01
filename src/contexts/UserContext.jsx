import React from 'react'
import { TOKEN_POST, GET_USER } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const navigate = useNavigate();

    const getUser = async (token) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = GET_USER(token);
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data);
            setLogin(true);
            setData(result.data);
            const { role_name } = result.data;
            if (role_name === 'Admin') {
                navigate('/dashboard');
            } else {
                navigate('/profile');
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const userLogin = async ({ email, password }) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ email, password });
            const response = await fetch(url, options);
            if (!response.ok) throw new Error("Erro ao logar, tente novamente");
            const { token } = await response.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const userLogout = React.useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
    }, []);

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = GET_USER(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error("Token inválido");
                    await getUser(token);
                } catch (error) {
                    setError(error);
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ data, loading, error, login, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}
