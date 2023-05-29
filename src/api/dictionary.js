import { axiosInstance } from ".";

class DictionaryAPI {
    axios = axiosInstance('');

    async search(word) {
        const response = await this.axios.get(word);
        return response;
    }
}

export const dictionaryAPI = new DictionaryAPI();