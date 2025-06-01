import { URL_BASE } from "./api";

export const TOKEN_POST = ({ email, password }) => {
    return {
        url: `${URL_BASE}/auth/login`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
    }
}

export const GET_USER = (token) => {
    return {
        url: `${URL_BASE}/auth/user`,
        options: {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token }
        }
    }
}

export const USER_POST = (body) => {
    return {
        url: `${URL_BASE}/api/user`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
    }
}
