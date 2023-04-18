import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_HOST || 'https://apidev.tools.antpack.co/verdi'

export const API = axios.create({
    baseURL,
})
