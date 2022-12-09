import Axios from 'axios';

export const fetchRestaurants = () => {
	const headers = { 'Content-Type': 'multipart/form-data' };
	const url = 'https://foodydao.yuanpo-design.com/getRestaurantList';

	return Axios.get(url, { headers }).then(({ data }) => {
		if (!data) {
			return Promise.reject(new Error('fetch_error'));
		}

		return data;
	});
};
