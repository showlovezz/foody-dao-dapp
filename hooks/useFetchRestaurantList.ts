import { useCallback, useEffect, useRef, useState } from 'react';

import { fetchRestaurants } from '../utilities/duck';

export interface RestaurantProps {
	created_at: string;
	restaurant_address: string;
	restaurant_id: string;
	restaurant_name: string;
	restaurant_website: string;
	updated_at: string;
}

const useFetchRestaurantList = () => {
	const [restaurantList, setRestaurantList] = useState<RestaurantProps[]>([]);
	const isMounted = useRef(false);

	const fetchData = useCallback(() => {
		return fetchRestaurants().then(({ data }) => {
			if (isMounted.current) {
				setRestaurantList(data);
			}
		});
	}, []);

	useEffect(() => {
		isMounted.current = true;
		fetchData();

		return () => {
			isMounted.current = false;
		};
	}, [fetchData]);

	return { restaurantList };
};

export default useFetchRestaurantList;
