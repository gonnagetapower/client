import { $host } from './api';
import jwt_decode from 'jwt-decode';

export const login = async (login, password) => {
    const { data } = await $host.post('user/auth', { login, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const registration = async (login, password) => {
    const { data } = await $host.post('user/registration', { login, password })
    return { data }
}