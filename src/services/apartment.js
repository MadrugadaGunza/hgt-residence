import { URL_BASE } from "./api";

export const GET_APARTMENT = () => {
    return {
        url: `${URL_BASE}/apartment`,
        options: {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }
    }
}
