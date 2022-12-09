import { Col, Container, Row } from 'react-bootstrap';
import type { NextPage } from 'next';

import RestaurantCard from '../../components/RestaurantCard';

import useFetchRestaurantList from '../../hooks/useFetchRestaurantList';

const Restaurants: NextPage = () => {
	const { restaurantList } = useFetchRestaurantList();

	return (
		<article>
			<Container>
				<section>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							{restaurantList.map((restaurant) => (
								<RestaurantCard key={restaurant.restaurant_id} restaurant={restaurant} />
							))}
						</Col>
					</Row>
				</section>
			</Container>
		</article>
	);
};

export default Restaurants;
