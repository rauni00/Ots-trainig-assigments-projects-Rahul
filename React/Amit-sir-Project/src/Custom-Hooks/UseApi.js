import axios from 'axios';

export const useApi = (url) => {
	const data = axios.get(url);
};
