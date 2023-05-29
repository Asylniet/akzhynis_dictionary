import Axios from 'axios';

export const axiosInstance = (baseURL) => {
    const axios = Axios.create({
        baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + baseURL,
        timeout: 2000,
    });
    return axios;
};